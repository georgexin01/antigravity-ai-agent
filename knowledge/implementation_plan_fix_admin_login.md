# Implementation Plan: Fix Vben Admin Login Failure

The login failure in the Vben Admin panel is caused by a credential mismatch in the environment configuration and legacy coding artifacts from a previous project (WMS).

## User Review Required

> [!IMPORTANT]
> The `VITE_SUPABASE_ANON_KEY` and `VITE_PROJECT_ID` in the Admin app currently differ from those used in the webApp. We will synchronize them to ensure both apps target the same local Supabase project context.

## Proposed Changes

### Configuration Synchronization

#### [MODIFY] [.env.development.localhost](file:///c:/Users/user/Desktop/admin-panel-quizLaa/apps/web-antd/.env.development.localhost)
- Replace the invalid `sb_publishable` anon key with the JWT key from the webApp.
- Update `VITE_PROJECT_ID` to `5b65e9f4-f1e7-44f7-863a-dfb110e06ae6`.

---

### Auth Provider Hardening

#### [MODIFY] [supabase-auth.ts](file:///C:/Users/user/Desktop/admin-panel-quizLaa/apps/web-antd/src/api/core/supabase-auth.ts)
- Rename all "WMS" references to "LAA Training" for consistency.
- Standardize the error messages to provide better context during failure.
- Ensure the `users` table query correctly reflects the `quizLaa` schema targeted by the client.

## Verification Plan

### Automated Verification
- Run a standalone Node.js script to verify that the `quizLaa` schema is accessible using the synchronized keys.
  - `npx tsx scratch/check_admin_login.ts`

### Manual Verification
- Attempt a login on `http://localhost:5666` (Admin port) using the `admin@quizlaa.com` credentials.
