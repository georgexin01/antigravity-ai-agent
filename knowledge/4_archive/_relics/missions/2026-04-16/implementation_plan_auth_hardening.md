# Implementation Plan - Hardening Supabase Local-First Auth (Sovereign Phase 2)

Harden the `webApp-LAA-quiz-v2` authentication architecture to ensure a "Fail-Closed" state. Every session must be strictly bound to the `VITE_PROJECT_ID` defined in the environment. If verification fails at any point (login or hydration), the application must immediately purge the session and redirect to the login screen.

## User Review Required

> [!IMPORTANT]
> **Fail-Closed Enforcement**: If a user is logged in but their `public.user` binding is changed or deleted in the database, the app will now automatically log them out on the next profile refresh/hydration.
> 
> **Project Binding Logic**: The app will verify the `project_id` in the `public` schema before allowing access to the `quizLaa` business schema.

## Proposed Changes

### [Component: WebApp Auth Store]

#### [MODIFY] [auth.ts](file:///C:/Users/user/Desktop/admin-panel-quizLaa/webApp-LAA-quiz-v2/src/stores/auth.ts)
- **Harden Hydration**: In `fetchUser`, if the `public.user` record is missing or `project_id` mismatches, call `logout()` immediately before throwing the error.
- **Error Mapping**: Map specific Supabase errors to user-friendly but professional "Protocol Errors" (e.g., "Identity Link Severed").
- **Persistence Audit**: Ensure `localStorage.accessToken` is always in sync with the Pinia state.

### [Component: WebApp API Layer]

#### [MODIFY] [supabase.ts](file:///C:/Users/user/Desktop/admin-panel-quizLaa/webApp-LAA-quiz-v2/src/api/supabase.ts)
- **Schema Selection**: Ensure the `supabase` client is strictly locked to `quizLaa` by default, while `publicClient` handles the identity registry.

### [Component: Global Guards]

#### [MODIFY] [router/index.ts](file:///C:/Users/user/Desktop/admin-panel-quizLaa/webApp-LAA-quiz-v2/src/router/index.ts)
- **Hydration Guard**: Ensure that every protected route transition triggers a `fetchUser` check if a session exists but the user profile is missing in the store.

## Open Questions

- Should we implement a **Session Heartbeat** (Step 11/12 of SWF) that periodically verifies identity registry status, or is per-navigation check sufficient?
- Do you want a custom "Identity Mismatch" error page, or is a standard Toast notification enough?

## Verification Plan

### Automated Tests
- **Project Mismatch Simulation**: Manually change `VITE_PROJECT_ID` in `.env` and verify the app forces a logout.
- **Connection Smoke Test**: Run `npx ts-node check-connection.ts` to verify DB reachability after changes.

### Manual Verification
- Log in, then manually modify the `project_id` in the `public.user` table in Supabase Studio, and refresh the app. Verify immediate logout.
