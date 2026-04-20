export interface Lesson {
  id: string
  images: string[]
  video: string
  title: string
  description: string
  duration: number
  sort: number
}

/** App type — transformed for UI */
export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  questionsCount: number;
  image: string;
  tag?: string;
  progress?: number;
  sort?: number;
  isPassed?: boolean;
  bestScore?: number;
}
