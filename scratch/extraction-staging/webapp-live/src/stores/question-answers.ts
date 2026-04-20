import { defineStore } from 'pinia';

import router from '@/router';
import { supabase } from '@/config';
import type { HistoryRecord, QuestionAnswer, QuizAttempt } from '@/types';

import { useAuthStore } from './auth';
import { useLessonsStore } from './lessons';
import { useQuestionsStore } from './questions';

interface DailyStats {
  accuracy: number;
  correctAnswers: number;
  lessons: number;
  quizzes: number;
  totalQuestions: number;
}

// ─── Store (Bakery Pattern: Options API) ─────────────────

export const useQuestionAnswersStore = defineStore('question-answers', {
  state: () => ({
    historyList: [] as HistoryRecord[],
    lastAttempt: null as QuizAttempt | null,
  }),
  actions: {
    /**
     * Fetch all submissions for the given user.
     * 按 userId 拉取未删除的答题记录。
     */
    async getByUser(userId: string): Promise<QuestionAnswer[]> {
      try {
        const { data, error } = await supabase
          .from('questionAnswers')
          .select('*')
          .eq('userId', userId)
          .eq('isDelete', false);

        if (error) throw error;
        return (data || []) as QuestionAnswer[];
      } catch (err) {
        console.error('Failed to fetch user history:', err);
        return [];
      }
    },

    /**
     * Insert a new submission row.
     */
    async create(
      payload: Omit<QuestionAnswer, 'id'>,
    ): Promise<QuestionAnswer> {
      try {
        const { data, error } = await supabase
          .from('questionAnswers')
          .insert([payload])
          .select()
          .single();

        if (error) throw error;
        return data as QuestionAnswer;
      } catch (err) {
        console.error('Failed to save quiz result:', err);
        throw err;
      }
    },

    /**
     * Persist a finished quiz attempt + navigate to the result page.
     * 快照存储 — 保留学生当次作答的原始上下文。
     */
    async handleQuizFinish(attempt: QuizAttempt): Promise<void> {
      try {
        const authStore = useAuthStore();
        const lessonsStore = useLessonsStore();

        const userId = authStore.user?.id;
        const lessonId = lessonsStore.currentCourse?.id;

        if (userId && lessonId) {
          await this.create({
            answers: attempt.snapshots as any,
            isDelete: false,
            lessonId,
            score: attempt.score,
            submittedAt: new Date().toISOString(),
            totalQuestion: attempt.totalQuestions,
            totalRightAnswer: attempt.correctCount,
            userId,
          });
          console.log('[QA] Quiz history persisted with snapshots.');
        }
      } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        console.error('[QA] Failed to persist quiz history:', errorMsg);
      } finally {
        this.lastAttempt = attempt;
        router.push('/quiz-result');
      }
    },

    /**
     * Build the user-facing history list — joins lessons + questions
     * client-side and hydrates snapshot records for the review engine.
     */
    async fetchHistory(): Promise<void> {
      try {
        const authStore = useAuthStore();
        const lessonsStore = useLessonsStore();
        const questionsStore = useQuestionsStore();

        const userId = authStore.user?.id;
        if (!userId) return;

        const [qaData, lessonsData] = await Promise.all([
          this.getByUser(userId),
          lessonsStore.getList(userId),
          questionsStore.getAll(),
        ]);

        const icons = ['menu_book', 'trending_up', 'verified_user', 'gavel'];

        const sorted = [...qaData].sort((a, b) => {
          const ta = a.submittedAt ? new Date(a.submittedAt).getTime() : 0;
          const tb = b.submittedAt ? new Date(b.submittedAt).getTime() : 0;
          return tb - ta;
        });

        this.historyList = sorted.map((qa, idx) => {
          const scoreNum =
            typeof qa.score === 'number'
              ? qa.score
              : parseInt(String(qa.score || 0), 10) || 0;
          const lesson = lessonsData.find((l) => l.id === qa.lessonId);
          const isSnapshot = Array.isArray(qa.answers);
          const relevantQuestions = questionsStore.questionPool.filter(
            (q) => q.lessonId === qa.lessonId,
          );

          return {
            correctCount: qa.totalRightAnswer || 0,
            date: qa.submittedAt
              ? new Date(qa.submittedAt).toLocaleDateString()
              : new Date().toLocaleDateString(),
            icon: icons[idx % icons.length]!,
            id: qa.id,
            questions: relevantQuestions,
            score: scoreNum,
            snapshots: isSnapshot ? (qa.answers as any[]) : [],
            tag: scoreNum >= 80 ? 'EXCELLENT' : 'SCORE',
            title: lesson?.title || 'Unknown Course',
            totalQuestions: qa.totalQuestion,
            userAnswers: !isSnapshot
              ? (qa.answers as Record<string, string>)
              : {},
          };
        });
      } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        console.error('Failed to fetch history:', errorMsg);
      }
    },

    /**
     * Aggregate submissions for a user for today only.
     * 主页"今日准确率"卡片 — 基于 question_answers 聚合。
     */
    async fetchTodayStats(userId: string): Promise<DailyStats> {
      try {
        const now = new Date();
        const start = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
        ).toISOString();
        const end = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() + 1,
        ).toISOString();

        const { data, error } = await supabase
          .from('questionAnswers')
          .select('lessonId, totalQuestion, totalRightAnswer')
          .eq('userId', userId)
          .eq('isDelete', false)
          .gte('submittedAt', start)
          .lt('submittedAt', end);

        if (error) throw error;

        const rows = data || [];
        const quizzes = rows.length;
        const lessons = new Set(rows.map((r: any) => r.lessonId)).size;
        const totalQuestions = rows.reduce(
          (s: number, r: any) => s + (r.totalQuestion || 0),
          0,
        );
        const correctAnswers = rows.reduce(
          (s: number, r: any) => s + (r.totalRightAnswer || 0),
          0,
        );
        const accuracy =
          totalQuestions > 0
            ? Math.round((correctAnswers / totalQuestions) * 100)
            : 0;

        return { accuracy, correctAnswers, lessons, quizzes, totalQuestions };
      } catch (err) {
        console.error('Failed to fetch monthly stats:', err);
        return {
          accuracy: 0,
          correctAnswers: 0,
          lessons: 0,
          quizzes: 0,
          totalQuestions: 0,
        };
      }
    },

    $reset() {
      this.historyList = [];
      this.lastAttempt = null;
    },
  },
});
