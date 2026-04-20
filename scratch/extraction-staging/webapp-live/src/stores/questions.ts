import { defineStore } from 'pinia';

import { supabase } from '@/config';
import type {
  DBQuestion,
  DBQuestionAnswer,
  Question,
  QuestionOption,
} from '@/types';

// ─── DB → App Transform ──────────────────────────────────

function dbToAppQuestion(q: DBQuestion): Question {
  // Parse answers if stored as JSON string, else use as-is
  const rawAnswers =
    typeof q.answers === 'string' ? JSON.parse(q.answers) : q.answers;

  const answersList: DBQuestionAnswer[] = Array.isArray(rawAnswers)
    ? rawAnswers
    : [];

  // Shuffle answers so quiz ordering is randomized per fetch
  const shuffled = [...answersList];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!];
  }

  const keys = ['A', 'B', 'C', 'D', 'E', 'F'];
  const options: QuestionOption[] = shuffled.map((ans, idx) => ({
    key: keys[idx]!,
    text: ans.text,
  }));

  const correctOption = shuffled.find((a) => a.isCorrect);
  const correctKey =
    options.find((o) => o.text === correctOption?.text)?.key || 'A';

  return {
    correctKey,
    explanation: q.purposeForQuestion || '',
    id: q.id,
    lessonId: q.lessonId,
    options,
    text: q.title || '',
  };
}

// ─── Store (Bakery Pattern: Options API) ─────────────────

export const useQuestionsStore = defineStore('questions', {
  state: () => ({
    questionPool: [] as Question[],
  }),
  actions: {
    /**
     * Fetch all non-deleted questions across every lesson.
     * 用于历史页面批量映射答题快照。
     */
    async getAll(): Promise<Question[]> {
      try {
        const { data, error } = await supabase
          .from('questions')
          .select('*')
          .eq('isDelete', false);

        if (error) throw error;

        this.questionPool = ((data as DBQuestion[]) || []).map(dbToAppQuestion);
        return this.questionPool;
      } catch (err) {
        console.error('Failed to fetch questions:', err);
        this.questionPool = [];
        return [];
      }
    },

    /**
     * Fetch questions belonging to a specific lesson.
     * Returns an empty array (never null) so the quiz page
     * can render a proper empty state.
     */
    async getByLesson(lessonId: string): Promise<Question[]> {
      try {
        const { data, error } = await supabase
          .from('questions')
          .select('*')
          .eq('lessonId', lessonId)
          .eq('isDelete', false);

        if (error) throw error;

        return ((data as DBQuestion[]) || []).map(dbToAppQuestion);
      } catch (err) {
        console.error('Failed to fetch questions for lesson:', err);
        return [];
      }
    },

    $reset() {
      this.questionPool = [];
    },
  },
});
