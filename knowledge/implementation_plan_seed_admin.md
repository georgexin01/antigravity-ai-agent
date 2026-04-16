# Implementation Plan: Seeding Admin Identity

The login failure is now confirmed as a **Missing Business Profile**. While the user exists in Supabase Auth, they have no corresponding entry in the `quizLaa.users` table, which the Admin app requires for role-based access.

## User Review Required

> [!IMPORTANT]
> This fix requires executing a SQL patch in your local Supabase dashboard to create the missing identity records. I will provide the script, but you will need to verify the `auth_id` from your Supabase Auth table.

## Proposed Changes

### Database Seeding (SQL Patch)

We will create a migration/seed file `025_seed_admin_user.sql` (or run it via SQL Editor) to:
1.  Find the `id` of `admin@quizlaa.com` from `auth.users`.
2.  Insert a matching record into `quizLaa.users` with the `role = 'admin'`.
3.  Ensure the Project Binding exists in `public.user`.

### Auth Provider Stabilization

#### [MODIFY] [supabase-auth.ts](file:///C:/Users/user/Desktop/admin-panel-quizLaa/apps/web-antd/src/api/core/supabase-auth.ts)
- Update `fetchUserInfoByAuthId` to use `.maybeSingle()` instead of `.single()` to avoid the `406` coercion error.
- Throw a more descriptive local error if the profile is missing, explaining that a database record in `quizLaa.users` is required.

## Verification Plan

### Automated Verification
- Run a research script to verify that `admin@quizlaa.com` is now visible in the `quizLaa.users` table.

### Manual Verification
- Attempt login at `http://localhost:5666`. The user should be redirected to the User List Dashboard upon success.
