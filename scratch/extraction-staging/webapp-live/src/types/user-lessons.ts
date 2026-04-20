// ==================== UserLesson (webApp read-side) ====================
// Minimal projection for the student webapp. Only the fields we need
// to gate visibility on the homepage + detail guard.

export interface UserLesson {
  id: string;
  userId: string;
  lessonId: string;
  assignDate: string;
  isDelete: boolean;
}
