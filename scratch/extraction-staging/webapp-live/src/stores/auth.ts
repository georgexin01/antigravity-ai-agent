import { defineStore } from 'pinia';

import router from '@/router';
import { publicClient, supabase } from '@/config';
import type { LoginParams, UserProfile } from '@/types';

// ─── Helpers ─────────────────────────────────────────────

/**
 * Decode a JWT payload and return the requested claim (if any).
 */
function getJwtClaim(token: string, claim: string): string | undefined {
  try {
    const parts = token.split('.');
    const encoded = parts[1] ?? '';
    const payload = JSON.parse(atob(encoded));
    return payload[claim];
  } catch {
    return undefined;
  }
}

// ─── Store (Bakery Pattern: Options API) ─────────────────

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as UserProfile | null,
  }),
  getters: {
    isLoggedIn: (state) => state.user !== null,
  },
  actions: {
    /**
     * Fetch User Profile from quizLaa.users (business table)
     * and verify project binding in public.user.
     *
     * 双重验证:
     *   1) public.user  → 确认项目绑定 (多项目共享账号时)
     *   2) quizLaa.users → 业务层个人资料
     */
    async fetchUser(authId?: string, email?: string) {
      try {
        // 0. Self-hydration — pull identity from the active session if caller omitted it
        if (!authId || !email) {
          const { data: sessionData } = await supabase.auth.getSession();
          const session = sessionData.session;
          if (!session) {
            console.log('[Auth] No active session found for hydration.');
            return;
          }
          authId = session.user.id;
          email = session.user.email;
        }

        console.log('[Auth] Starting identity verification for:', email);

        // 1. Project binding check (public schema)
        const expectedProjectId = import.meta.env.VITE_PROJECT_ID;
        console.log('[Auth] Verifying project binding key:', expectedProjectId);

        const { data: publicUser, error: publicError } = await publicClient
          .from('user')
          .select('project_id')
          .eq('auth_id', authId)
          .eq('is_delete', false)
          .single();

        if (publicError) {
          console.error('[Auth] Public user record check failed:', publicError);
          throw new Error(
            'Identity binding verification failed. Please contact support.',
          );
        }

        if (!publicUser) {
          throw new Error(
            'Account project binding not found. Please contact admin.',
          );
        }

        console.log(
          '[Auth] Found user project binding:',
          publicUser.project_id,
        );

        if (publicUser.project_id !== expectedProjectId) {
          console.warn(
            '[Auth] Project mismatch. Expected:',
            expectedProjectId,
            'Got:',
            publicUser.project_id,
          );
          throw new Error(
            'Unauthorized project access. Your account belongs to a different project.',
          );
        }

        // 2. Business profile (quizLaa schema)
        console.log('[Auth] Fetching business profile from quizLaa schema...');
        const { data: userData, error: businessError } = await supabase
          .from('users')
          .select('*')
          .eq('email', email)
          .eq('isDelete', false)
          .single();

        if (businessError) {
          console.error('[Auth] Business profile fetch error:', businessError);
          throw new Error(
            'Business profile not found in your assigned training port.',
          );
        }

        if (!userData) {
          throw new Error('Business profile data empty.');
        }

        console.log(
          '[Auth] Business profile loaded successfully for:',
          userData.name,
        );

        // 3. Dynamic Dashboard Stats (Hardening)
        console.log('[Auth] Calculating enrollment and completion stats...');
        const [totalRes, passedRes] = await Promise.all([
          supabase
            .from('user_lessons')
            .select('id', { count: 'exact', head: true })
            .eq('userId', userData.id)
            .eq('isDelete', false),
          supabase
            .from('questionAnswers')
            .select('lessonId')
            .eq('userId', userData.id)
            .gte('score', 80)
            .eq('isDelete', false),
        ]);

        const totalModules = totalRes.count || 0;
        // De-dupe lessonIds in case student took the same quiz multiple times
        const completedModules = new Set(
          (passedRes.data || []).map((r: any) => r.lessonId),
        ).size;

        // Map DB fields → UserProfile (UI shape)
        this.user = {
          agentId: `${userData.id.slice(0, 5)}...${userData.id.slice(-3)}`,
          rawId: userData.id,
          avatar:
            userData.avatar ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name)}&background=d52b1e&color=fff`,
          completedModules,
          email: userData.email || '',
          id: userData.id,
          monthlyProgress: totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0,
          name: userData.name || 'Student',
          nameEn: userData.name || '',
          remainingHours: 0,
          roles: [userData.role || 'student'],
          title:
            userData.role === 'admin'
              ? 'Administrator'
              : 'Senior Protocol Officer',
          titleEn: userData.role === 'admin' ? 'Administrator' : 'Senior Agent',
          totalModules,
        };
      } catch (error: any) {
        console.error('[Auth] Verification final failure:', error.message);
        throw error;
      }
    },

    /**
     * Login via Supabase Auth with project context switching.
     *
     * Flow:
     *   1. signInWithPassword
     *   2. If JWT project_id !== VITE_PROJECT_ID → updateUser + refreshSession
     *   3. fetchUser to hydrate business profile
     *   4. Persist access token + route to /courses
     */
    async login(params: LoginParams) {
      const { email, password } = params;

      // 1. Sign in
      const { data: authData, error: authError } =
        await supabase.auth.signInWithPassword({ email, password });

      if (authError) throw authError;
      if (!authData.user || !authData.session) {
        throw new Error('Login failed: No user data');
      }

      // 2. Project context switching
      const expectedProjectId = import.meta.env.VITE_PROJECT_ID;
      if (expectedProjectId) {
        const currentToken = authData.session.access_token;
        const jwtProjectId = getJwtClaim(currentToken, 'project_id');

        if (jwtProjectId !== expectedProjectId) {
          console.log(
            '[Auth] Project mismatch detected. Refreshing identity context...',
          );

          await supabase.auth.updateUser({
            data: { active_project_id: expectedProjectId },
          });

          const { data: refreshData, error: refreshError } =
            await supabase.auth.refreshSession();
          if (refreshError || !refreshData.session) {
            throw new Error(
              'Identity verification failed during context switch.',
            );
          }

          console.log('[Auth] Identity context successfully refreshed.');
        }
      }

      // 3. Hydrate profile + 4. persist session
      await this.fetchUser(authData.user.id, email);
      localStorage.setItem('accessToken', authData.session.access_token);

      router.push('/courses');
    },

    async logout() {
      await supabase.auth.signOut();
      localStorage.removeItem('accessToken');
      this.user = null;
      router.push('/login');
    },

    $reset() {
      this.user = null;
    },
  },
});
