# Implementation Plan: Repairing Image Path Resolution

The user reports broken images pointing to `localhost:5666` (frontend) instead of `localhost:54321` (Supabase Storage). This is caused by legacy relative paths in the database (`users/2604/...`) being incorrectly interpreted by the browser.

## User Review Required

> [!IMPORTANT]
> I will be migrating data in your **`attachment`** and **`lessons`** tables to strip the legacy `users/` prefix. 
> I will also implement a **Global Image Bridge** in the frontend source code. This ensures that any relative path stored in the database is automatically converted into a full Supabase Storage URL.

## Proposed Changes

### Database Migration

#### [MODIFY] Update Database Paths (CLI)
- Execute a SQL script to strip `users/` from any record in `quizLaa.attachment` and `quizLaa.lessons`.
- This converts `users/2604/test.jpg` -> `2604/test.jpg` (matching the `quizLaa` bucket structure).

### Frontend Bridge

#### [MODIFY] [supabase.ts](file:///C:/Users/user/Desktop/admin-panel-quizLaa/apps/web-antd/src/api/supabase.ts)
- Add a `getImgUrl(path: string)` helper that prepends the Supabase Storage Public URL based on `.env` settings.

#### [MODIFY] [lesson-detail.vue](file:///C:/Users/user/Desktop/admin-panel-quizLaa/apps/web-antd/src/views/lessons/lesson-detail.vue)
- Update the image rendering logic to wrap `lesson.images` URLs in the new `getImgUrl` helper.

## Verification Plan

### Automated Tests
- Audit the database after migration to ensure `users/` count is zero.
- Verify that `getImgUrl` returns a valid `localhost:54321` string in the console.

### Manual Verification
- Re-open the **Assigned Lessons** drawer and the **Lesson Edit** page.
- Verify that images load correctly from the `quizLaa` bucket.
