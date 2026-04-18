---
name: webapp-api-connection
description: "12-step flow to connect a Vue 3 webapp to Docker-local Supabase. Current V2 architecture (2026-04-17) — src/config centralized, env wrapper, dual-client, Options-API Bakery, intersection filter, AnswerSnapshot persistence, fail-closed guards, sequential await. Grounded in webApp-LAA-quiz-v2 live code."
triggers: ["webapp api connection", "vue supabase connect", "new webapp", "bakery pattern", "webapp 12 step", "connect webapp to supabase"]
phase: 2-scaffold
requires: [webapp-genesis]
unlocks: []
inputs: [project_id, target_schema, supabase_url, anon_key, business_entity_list]
output_format: step_checklist_result
model_hint: gemini-3-flash
version: 2.0
status: authoritative
date_created: "2026-04-17"
source: "Reverse-engineered from webApp-LAA-quiz-v2 current state (2026-04-17)"
---

# webapp-api-connection V2 — Vue 3 + Supabase (Bakery Pattern, @/config)

## When to Use

Building a new Vue 3 webapp that talks to a local Docker Supabase. Follow this for student/quiz apps, agent dashboards, any Vben-WebApp pair.

**MASTER RULE #1 applies** — all business table FKs stay inside `{project_schema}` (e.g. `quizLaa`). Never write to `public.*` from stores. Use `publicClient` only for RBAC-bridge reads (`public.user.project_id` verification).

## STEP 1 — Env Keys (`.env`)

```
VITE_APP_TITLE=LAA Training Quiz
VITE_SUPABASE_URL=http://localhost:54321
VITE_SUPABASE_ANON_KEY=<local-dev-anon-jwt>
VITE_SUPABASE_SCHEMA=quizLaa
VITE_PROJECT_ID=<uuid-from-public.project>
```

**Gitignore:** `.env`, `.env.*.local`.

## STEP 2 — Centralized `src/config/` (NEW CONVENTION)

Do NOT scatter `import.meta.env.VITE_*` across stores. Create ONE config folder:

```
src/config/
├── env.ts         # typed wrapper that VALIDATES required keys at boot
├── supabase.ts    # both clients (business + public)
└── index.ts       # barrel — import everything via `@/config`
```

`src/config/env.ts`:
```ts
interface AppEnv {
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
  SUPABASE_SCHEMA: string;
  PROJECT_ID: string;
  APP_TITLE?: string;
}

function readEnv(key: string, required = true): string {
  const val = import.meta.env[`VITE_${key}`] as string | undefined;
  if (required && (!val || val.trim() === '')) {
    throw new Error(`[env] Missing required VITE_${key} — check .env.*`);
  }
  return val ?? '';
}

export const env: AppEnv = {
  SUPABASE_URL:      readEnv('SUPABASE_URL'),
  SUPABASE_ANON_KEY: readEnv('SUPABASE_ANON_KEY'),
  SUPABASE_SCHEMA:   readEnv('SUPABASE_SCHEMA'),
  PROJECT_ID:        readEnv('PROJECT_ID'),
  APP_TITLE:         readEnv('APP_TITLE', false) || 'App',
};
```

`src/config/supabase.ts`:
```ts
import { createClient } from '@supabase/supabase-js';
import { env } from './env';

// Business schema — default for all data stores
export const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
  auth: { autoRefreshToken: true, persistSession: true },
  db:   { schema: env.SUPABASE_SCHEMA },
});

// Public schema — auth/RBAC bridge lookups ONLY
export const publicClient = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
  db: { schema: 'public' },
});
```

`src/config/index.ts`:
```ts
export { env } from './env';
export { supabase, publicClient } from './supabase';
```

All stores then do `import { supabase, publicClient, env } from '@/config'`. **Never** `import from '@/api/supabase'` — that pattern is deprecated.

## STEP 3 — Auth Store (Options API + Project Binding)

File: `src/stores/auth.ts`. Options API only (never setup/composition for stores — cross-store ref unwrapping fails).

```ts
export const useAuthStore = defineStore('auth', {
  state: () => ({ user: null as UserProfile | null }),
  actions: {
    async login({ email, password }) {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;

      // Project context switch — MANDATORY when JWT project_id != env.PROJECT_ID
      const jwtProjectId = getJwtClaim(data.session.access_token, 'project_id');
      if (jwtProjectId !== env.PROJECT_ID) {
        await supabase.auth.updateUser({ data: { active_project_id: env.PROJECT_ID } });
        await supabase.auth.refreshSession();   // ← MUST refresh, else JWT stays stale
      }

      await this.fetchUser(data.user.id, email);
      localStorage.setItem('accessToken', data.session.access_token);
      router.push('/courses');
    },

    async fetchUser(authId?, email?) {
      // 1. Verify project binding via publicClient (NOT supabase client)
      const { data: pub } = await publicClient
        .from('user').select('project_id')
        .eq('auth_id', authId).eq('is_delete', false).single();
      if (pub?.project_id !== env.PROJECT_ID) throw new Error('Project binding mismatch');

      // 2. Business profile via supabase client (quizLaa schema)
      const { data: biz } = await supabase
        .from('users').select('*')
        .eq('email', email).eq('isDelete', false).single();
      this.user = mapToProfile(biz);
    },

    async logout() {
      await supabase.auth.signOut();
      localStorage.removeItem('accessToken');
      this.user = null;
      resetAllStores();                          // ← MUST reset sibling stores (see Step 11)
      router.push('/login');
    },

    $reset() { this.user = null; },
  },
});
```

**Rules:**
- DO refresh session after `updateUser` — stale JWT breaks all subsequent RLS
- DO use `publicClient` for `public.user` lookups, `supabase` for business tables
- DO NOT use `import.meta.env.VITE_*` here — use `env.PROJECT_ID` (MASTER RULE)

## STEP 4 — Options-API Data Stores

```ts
export const use<Entity>Store = defineStore('<entity>', {
  state: () => ({ items: [] as <Entity>[], current: null as <Entity> | null }),
  actions: {
    async getList(userId?: string): Promise<<Entity>[]> {
      if (!userId) { this.items = []; return []; }    // FAIL-CLOSED
      try {
        const { data, error } = await supabase
          .from('<table>')
          .select('*')
          .eq('userId', userId)
          .eq('isDelete', false);
        if (error) throw error;
        this.items = (data || []).map(dbToApp);
        return this.items;
      } catch (err) {
        console.error('[<Entity>] getList failed:', err);
        this.items = [];
        return [];
      }
    },
    $reset() { this.items = []; this.current = null; },
  },
});
```

**Rules:**
- DO: Options API (not setup)
- DO: `.eq('isDelete', false)` on every fetch
- DO: try/catch → empty state, never re-throw from list queries
- DO: `$reset()` on every store
- DO NOT call `supabase` from views — stores only

## STEP 5 — Manual 2-Query Joins (NOT PostgREST Embedded)

Local Docker Supabase has an unreliable FK schema cache. Embedded selects `.select('*, parent(name)')` → PGRST200. Always use manual two-query joins:

```ts
const { data: children } = await supabase.from('child')
  .select('id, parentId, name').eq('isDelete', false);

const parentIds = [...new Set(children.map(c => c.parentId))];
const { data: parents } = await supabase.from('parent')
  .select('id, title').in('id', parentIds);

const parentMap = new Map(parents.map(p => [p.id, p.title]));
return children.map(c => ({ ...c, parentTitle: parentMap.get(c.parentId) ?? '' }));
```

## STEP 6 — Intersection Filter (Zero-Child + Assignment)

A parent (e.g. `lessons`) should only show if:
1. It has ≥1 child (e.g. questions exist)
2. It's assigned to the current user (via junction like `user_lessons`)

```ts
// A — parents with ≥1 child
const { data: cr } = await supabase.from('questions')
  .select('lessonId').eq('isDelete', false);
const withChildren = new Set(cr.map(r => r.lessonId));

// B — parents assigned to this user
const { data: ar } = await supabase.from('user_lessons')
  .select('lessonId').eq('userId', userId).eq('isDelete', false);
const assigned = new Set(ar.map(r => r.lessonId));

// Intersect → only show lessons that pass both gates
const allowedIds = [...assigned].filter(id => withChildren.has(id));
if (!allowedIds.length) { this.items = []; return []; }

const { data } = await supabase.from('lessons')
  .select('*').in('id', allowedIds).eq('isDelete', false);
```

## STEP 7 — Snapshot Persistence (Mutable Semantics)

For quiz attempts, orders, anything where source rows may mutate: **store a JSONB snapshot, don't rehydrate from live tables**.

```ts
interface AnswerSnapshot {
  questionId: string;
  options: string[];    // post-shuffle order the user saw
  correctKey: string;   // 'A' | 'B' | 'C' | 'D'
  selectedKey: string;
}

await this.create({
  userId, lessonId,
  answers: attempt.snapshots,    // JSONB column holds AnswerSnapshot[]
  score: attempt.score,
  submittedAt: new Date().toISOString(),
  isDelete: false,
});
```

Review engine hydrates snapshots directly — no live DB JOIN needed.

## STEP 8 — Fail-Closed Detail Guards

Every detail route MUST verify assignment before returning the entity:

```ts
async getDetail(id: string, userId?: string): Promise<<Entity> | null> {
  if (!userId) return null;
  const { data: assign } = await supabase.from('user_lessons')
    .select('id').eq('userId', userId).eq('lessonId', id).eq('isDelete', false).limit(1);
  if (!assign?.length) return null;
  // ... fetch + return entity
}
```

View: `if (!item) router.replace('/courses')`. Direct-URL poke → redirect.

## STEP 9 — DB Type vs App Type (Transform Bridge)

Two layers, one transform function per store:

- `src/types/<entity>.ts` exports `<DBEntity>` (mirrors DB 1:1) + `<Entity>` (UI-friendly)
- `src/stores/<entity>.ts` has `function dbToApp(row: DBEntity): Entity { ... }`
- Views ONLY consume `<Entity>` types. Never `<DBEntity>` outside stores.

Barrel: `src/types/index.ts` re-exports all types. Barrel: `src/stores/index.ts` re-exports all stores.

## STEP 10 — Sequential Await in Views

**NEVER** `Promise.all([authStore.fetchUser(), store.getList()])` — race.

```ts
await authStore.fetchUser();
if (!authStore.user?.id) { store.items = []; return; }
await store.getList(authStore.user.id);
```

Pattern for every view's `onMounted`. Use `Promise.all` only for INDEPENDENT queries (already-resolved deps).

## STEP 11 — Logout Hygiene (Global Reset)

`src/utils/pinia-reset.ts`:
```ts
import { getActivePinia } from 'pinia';
export function resetAllStores() {
  const pinia: any = getActivePinia();
  pinia?._s?.forEach((store: any) => store.$reset?.());
}
```

Call `resetAllStores()` inside `authStore.logout()`. Without it, stale user data leaks to next login (known bug in webApp-LAA-quiz-v2 as of 2026-04-17).

Every store MUST implement `$reset()` — Options API doesn't provide it automatically for all cases.

## STEP 12 — Package scripts + Dev

`package.json`:
```json
"scripts": {
  "dev": "vite",
  "build": "vue-tsc --noEmit && vite build",
  "type-check": "vue-tsc --noEmit"
}
```

`pnpm dev` → http://localhost:3000. Login with seeded account (`agent1@quizlaa.com` / `123456`).

## Guardrails

- DO NOT import from `@/api/supabase` — that path is deprecated. Use `@/config`
- DO NOT skip `refreshSession()` after `updateUser`
- DO NOT use PostgREST embedded selects on local Docker Supabase
- DO NOT use `Promise.all` for auth-then-data sequencing
- DO NOT skip fail-closed guards — direct-URL poke bypasses list filters
- DO NOT forget `$reset()` on every store + call `resetAllStores()` on logout
- DO NOT hardcode table names in snake_case if schema uses camelCase (e.g. `questionAnswers` NOT `question_answers`)
- STOP if `env.PROJECT_ID` is empty — all auth flows fail silently otherwise

## Verify

- [ ] `pnpm build` passes with zero TS errors
- [ ] Login as seeded user → JWT has correct `project_id` claim + `user_role` claim
- [ ] Courses list shows only assigned + non-empty lessons
- [ ] Direct URL to unassigned lesson detail → redirects to /courses
- [ ] Complete quiz → snapshot persists → reload /history → review renders with frozen options
- [ ] Logout → re-login as different user → zero stale data visible

## Rollback

- Env misconfig → restore `.env` from backup, hard-refresh browser
- Auth store break → `git restore src/stores/auth.ts src/config/`
- Data store break → empty state falls back gracefully (no crash)

## Known Gotchas (2026-04-17 state)

1. **Table name casing varies by schema**: `quizLaa.questionAnswers` (camel), `quizLaa.user_lessons` (snake). Respect the actual schema — don't normalize.
2. **`public.user` column is `is_delete`** (snake), `quizLaa.users` is `isDelete` (camel). Use the right one per client.
3. **Router guard checks token PRESENCE only** — not JWT expiry. Real auth validation happens when a store query returns 401.
4. **`logout()` in webApp-LAA-quiz-v2 does NOT call `resetAllStores()`** — known bug. Fix in new projects from day 1.
5. **`authStore.user.rawId` assignment exists but `UserProfile` type doesn't declare it** — pre-existing TS issue.
6. **`fetchHistory()` uses `questionsStore.getAll()` for side effect only** — return value discarded; questionPool accessed directly.

---
**webapp-api-connection V2.0 — 2026-04-17 · Current state snapshot**
