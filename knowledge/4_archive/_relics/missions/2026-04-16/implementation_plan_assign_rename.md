# Implementation Plan: Renaming to 'assign_lessons' Architecture

The user has identified that the nomenclature `assign_lessons` is expected across the platform. While the database currently contains `user_lessons`, I will perform a system-wide synchronization to rename this entity, ensuring consistency between the Supabase schema, the Admin Panel, and the Student WebApp.

## User Review Required

> [!IMPORTANT]
> I will be renaming the `user_lessons` table to `assign_lessons`.
> This will require a coordinated update across both the Admin Panel and the Student app. 
> I will also seed the table with data so you can immediately see courses on `http://localhost:3000/courses`.

## Proposed Changes

### Database Refactor

#### NEW] [029_rename_user_lessons.sql `(file removed)`
- Rename `quizLaa.user_lessons` to `quizLaa.assign_lessons`.
- Update all Foreign Key constraints.
- Re-apply RLS policies for the new table name.

### Admin Panel Update

#### [MODIFY] [user-lessons.ts (Store)](../../../../../scratch/extraction-staging/webapp-live/src/stores/user-lessons.ts)
- Replace all occurrences of `user_lessons` with `assign_lessons`.

### Student WebApp Update

#### [MODIFY] [user-lessons.ts (Store)](../../../../../scratch/extraction-staging/webapp-live/src/stores/user-lessons.ts)
#### [MODIFY] [lessons.ts (Store)](../../../../../scratch/extraction-staging/webapp-live/src/stores/lessons.ts)
- Replace all occurrences of `user_lessons` with `assign_lessons`.

### Seeding Test Data

#### NEW] [030_seed_assign_lessons.sql `(file removed)`
- Insert relationship records linking existing Agents/Admins to Lessons using the new table name.

## Verification Plan

### Automated Verification
- Run `supabase db query` to confirm the `assign_lessons` table is present and `user_lessons` is gone.
- Verify that a `SELECT` via the student store returns the seeded assignments.

### Manual Verification
- Refresh `http://localhost:3000/courses` and verify courses are visible.
- Open the **Assign Lessons** view in the Admin panel and verify functionality (Create/View/Delete).
