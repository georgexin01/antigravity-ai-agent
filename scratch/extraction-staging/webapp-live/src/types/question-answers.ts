import type { Question } from './questions'

/** Frozen snapshot of a single answered question (matches DB JSONB payload) */
export interface AnswerSnapshot {
  questionId: string
  options: string[]   // options in the exact order the user saw
  correctKey: string  // 'A' | 'B' | 'C' | 'D' — index into options
  selectedKey: string // 'A' | 'B' | 'C' | 'D' — index into options
}

/** DB type — raw submission from backend */
export interface QuestionAnswer {
  id: string
  userId: string
  lessonId: string
  answers: AnswerSnapshot[] | Record<string, string>
  score: string | number
  totalQuestion: number
  totalRightAnswer: number
  submittedAt?: string
  isDelete?: boolean
}

/** In-memory attempt passed to result/review pages */
export interface QuizAttempt {
  date: string
  score: number
  totalQuestions: number
  correctCount: number
  subjectName: string
  questions: Question[]
  userAnswers: Record<string, string> // Legacy support
  snapshots: AnswerSnapshot[]         // New robust storage
}

/** History list entry */
export interface HistoryRecord {
  id: string
  title: string
  date: string
  score: number
  tag: string
  icon: string
  totalQuestions: number
  correctCount: number
  questions: Question[]
  userAnswers: Record<string, string>
  snapshots: AnswerSnapshot[]
}
