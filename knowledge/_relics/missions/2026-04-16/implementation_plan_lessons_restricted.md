# Implementation Plan: Restoring 'user_lessons' Functionality

The user has confirmed that maintaining the `user_lessons` nomenclature is acceptable. We will proceed with hardening the security of this table and seeding initial data to ensure the Student WebApp correctly displays assigned courses.

## User Review Required

> [!IMPORTANT]
> I will be applying security policies to the existing `user_lessons` table and seeding test data. 
> This will make your assignments visible in both the Admin Panel and the Student WebApp at `http://localhost:3000/courses`.

## Proposed Changes

### Internationalization (i18n) Fix (Re-confirmation)
- I have already added the missing `username` key to the locales in the previous turn.

### Database Security & Data

#### [NEW] [027_user_lessons_policies.sql](file:///c:/Users/user/Desktop/admin-panel-quizLaa/supabase/migrations/027_user_lessons_policies.sql)
- Enable RLS for `quizLaa.user_lessons`.
- Add `SELECT`, `INSERT`, `UPDATE`, and `DELETE` policies for `authenticated` users.

#### [NEW] [028_seed_user_lessons.sql](file:///c:/Users/user/Desktop/admin-panel-quizLaa/supabase/migrations/028_seed_user_lessons.sql)
- Seed initial assignments linking the Admin and Agent accounts to active lessons.

## Verification Plan

### Automated Verification
- Verify `user_lessons` row visibility via CLI using an authenticated session simulation.

### Manual Verification
- Verify that `http://localhost:3000/courses` now displays assigned lessons.
- Verify that Admin "Assign Lessons" table is populated.
