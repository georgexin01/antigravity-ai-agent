import { defineStore } from 'pinia';

import { supabase } from '@/config';
import type { UserLesson } from '@/types';

// ─── Store (Bakery Pattern: Options API) ─────────────────

export const useUserLessonsStore = defineStore('user-lessons', {
  state: () => ({
    assignments: [] as UserLesson[],
  }),
  actions: {
    /**
     * Fetch all active assignments for the current agent.
     * 获取当前学员的所有有效课程指派。
     */
    async getByUser(userId: string): Promise<UserLesson[]> {
      try {
        const { data, error } = await supabase
          .from('user_lessons')
          .select('id, userId, lessonId, assignDate, isDelete')
          .eq('userId', userId)
          .eq('isDelete', false);

        if (error) throw error;
        this.assignments = (data || []) as UserLesson[];
        return this.assignments;
      } catch (err) {
        console.error('Failed to fetch user lesson assignments:', err);
        this.assignments = [];
        return [];
      }
    },

    $reset() {
      this.assignments = [];
    },
  },
});
