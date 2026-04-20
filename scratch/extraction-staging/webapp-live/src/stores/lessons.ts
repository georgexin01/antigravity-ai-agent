import { defineStore } from 'pinia';

import { supabase } from '@/config';
import type { Course, Lesson } from '@/types';

// ─── DB → App Transform ──────────────────────────────────

function dbToCourse(item: Lesson, questionsCount: number, bestScore: number = 0): Course {
  return {
    bestScore,
    description: item.description || '',
    duration: `${item.duration || 0} min`,
    id: item.id,
    image:
      Array.isArray(item.images) && item.images.length > 0
        ? item.images[0]!
        : '',
    isPassed: bestScore >= 80,
    questionsCount,
    sort: item.sort || 0,
    tag: 'Beginner',
    title: item.title || '',
  };
}

// ─── Store (Bakery Pattern: Options API) ─────────────────

export const useLessonsStore = defineStore('lessons', {
  state: () => ({
    courses: [] as Course[],
    currentCourse: null as Course | null,
  }),
  actions: {
    /**
     * Fetch lessons that are BOTH (a) assigned to this user via user_lessons
     * AND (b) have at least one non-deleted question. 零指派或零题都跳过。
     *
     * Fail-closed: if `userId` is missing, courses becomes [] — never expose
     * unassigned data.
     */
    async getList(userId?: string): Promise<Course[]> {
      if (!userId) {
        this.courses = [];
        return [];
      }

      try {
        // Query A — lessonIds with ≥1 question
        const { data: qRows, error: qErr } = await supabase
          .from('questions')
          .select('lessonId')
          .eq('isDelete', false);
        if (qErr) throw qErr;

        const countMap: Record<string, number> = {};
        (qRows || []).forEach((q: any) => {
          if (q.lessonId) {
            countMap[q.lessonId] = (countMap[q.lessonId] || 0) + 1;
          }
        });
        const withQuestions = new Set(Object.keys(countMap));

        // Query B — lessonIds assigned to this user (de-dupe via Set)
        const { data: assignRows, error: aErr } = await supabase
          .from('user_lessons')
          .select('lessonId')
          .eq('userId', userId)
          .eq('isDelete', false);
        if (aErr) throw aErr;

        const assigned = new Set(
          (assignRows || []).map((r: any) => r.lessonId).filter(Boolean),
        );

        // Intersect: only lessons that are BOTH assigned AND non-empty
        const allowedIds = [...assigned].filter((id) => withQuestions.has(id));
        if (allowedIds.length === 0) {
          this.courses = [];
          return [];
        }

        // Query C — fetch the actual lesson rows
        // Query D — fetch user scores for completion status
        const [lessonsRes, scoresRes] = await Promise.all([
          supabase
            .from('lessons')
            .select('*')
            .eq('isDelete', false)
            .in('id', allowedIds)
            .order('sort', { ascending: true }),
          supabase
            .from('questionAnswers')
            .select('lessonId, score')
            .eq('userId', userId)
            .eq('isDelete', false),
        ]);

        if (lessonsRes.error) throw lessonsRes.error;

        const scoreMap: Record<string, number> = {};
        (scoresRes.data || []).forEach((r: any) => {
          const s =
            typeof r.score === 'number' ? r.score : parseFloat(String(r.score));
          if (!scoreMap[r.lessonId] || s > scoreMap[r.lessonId]) {
            scoreMap[r.lessonId] = s;
          }
        });

        this.courses = ((lessonsRes.data as Lesson[]) || []).map((l) =>
          dbToCourse(l, countMap[l.id] || 0, scoreMap[l.id] || 0),
        );
        return this.courses;
      } catch (err) {
        console.error('Failed to fetch lessons:', err);
        this.courses = [];
        return [];
      }
    },

    /**
     * Resolve a single lesson — cache-first, falls back to DB.
     * Fail-closed: must be assigned to the caller and must have ≥1 question.
     */
    async getDetail(id: string, userId?: string): Promise<Course | null> {
      // Fail-closed — no user, no detail
      if (!userId) return null;

      // Serve from cached list if already loaded (cache is already filtered
      // by userId because getList was called with it)
      const cached = this.courses.find((c) => c.id === id);
      if (cached) {
        this.currentCourse = cached;
        return cached;
      }

      try {
        // Assignment guard — block direct URL access to unassigned lessons
        const { data: assign } = await supabase
          .from('user_lessons')
          .select('id')
          .eq('userId', userId)
          .eq('lessonId', id)
          .eq('isDelete', false)
          .limit(1);
        if (!assign || assign.length === 0) return null;

        const [lessonRes, qCountRes] = await Promise.all([
          supabase
            .from('lessons')
            .select('*')
            .eq('id', id)
            .eq('isDelete', false)
            .single(),
          supabase
            .from('questions')
            .select('id', { count: 'exact', head: true })
            .eq('lessonId', id)
            .eq('isDelete', false),
        ]);

        if (lessonRes.error || !lessonRes.data) {
          console.error('Lesson not found:', lessonRes.error);
          return null;
        }

        const count = qCountRes.count ?? 0;
        if (count === 0) {
          return null;
        }

        // Fetch best score for single detail view
        const { data: scoreRes } = await supabase
          .from('questionAnswers')
          .select('score')
          .eq('userId', userId)
          .eq('lessonId', id)
          .eq('isDelete', false)
          .order('score', { ascending: false })
          .limit(1);

        const bestScore = scoreRes?.[0]?.score || 0;

        const course = dbToCourse(
          lessonRes.data as Lesson,
          count,
          typeof bestScore === 'number'
            ? bestScore
            : parseFloat(String(bestScore)),
        );
        this.currentCourse = course;
        return course;
      } catch (err) {
        console.error('Failed to fetch lesson detail:', err);
        return null;
      }
    },

    $reset() {
      this.courses = [];
      this.currentCourse = null;
    },
  },
});
