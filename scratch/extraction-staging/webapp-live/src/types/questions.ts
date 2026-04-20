/** DB type — raw question from backend (Sync with Vben Admin) */
export interface DBQuestionAnswer {
  text: string;
  isCorrect: boolean;
}

export interface DBQuestion {
  id: string;
  lessonId: string;
  title: string;
  purposeForQuestion?: string;
  answers: DBQuestionAnswer[]; // JSONB Array from Vben
}

/** App types — transformed for UI */
export interface QuestionOption {
  key: string
  text: string
}

export interface Question {
  id: string;
  lessonId: string;
  text: string;
  options: QuestionOption[];
  correctKey: string;
  explanation?: string;
}
