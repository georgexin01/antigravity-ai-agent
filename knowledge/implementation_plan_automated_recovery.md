# Implementation Plan: Automated Login Recovery

The user requires a solution that does not involve the manual Supabase SQL Editor. We will leverage the locally installed **Supabase CLI** to execute the seeding logic directly from the terminal.

## User Review Required

> [!IMPORTANT]
> I will use the `supabase db execute` command to patch your local database. This will create the missing `admin@quizlaa.com` profile in the `quizLaa` schema and set up the necessary project bindings.

## Proposed Changes

### Database State Recovery

#### [COMMAND] [Automated Seeding]
- Execute: `supabase db execute --local -f supabase/migrations/025_seed_admin_profile.sql`
- This command directly injects the required identity records into your local PostgREST instance.

### Refinement (Safety)

#### [MODIFY] [supabase-auth.ts](file:///C:/Users/user/Desktop/admin-panel-quizLaa/apps/web-antd/src/api/core/supabase-auth.ts)
- Although already updated to use `.maybeSingle()`, I will ensure the error message explicitly confirms that the "Self-Healing" logic was attempted.

## Verification Plan

### Automated Verification
- After execution, run the `scratch/check_admin_login.ts` script. A successful result will show the `id` of the newly created business profile.

### Manual Verification
- Refresh the Admin Login page and verify that the `admin@quizlaa.com` login now redirects to the dashboard without the "Profile Missing" error.
