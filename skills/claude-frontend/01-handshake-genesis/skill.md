---
name: webapp-genesis
description: "WebApp Environmental Handshake & Project Initialization Logic. Four-pulse checklist for birthing a new webapp or complex module in the LAA Docker-Supabase ecosystem: env setup, auth plumbing, schema binding, verification."
triggers: ["genesis", "handshake", "identity sync", "new webapp", "webapp genesis", "project init"]
phase: 1-analysis
requires: []
unlocks: [generate-store, generate-supabase-schema]
inputs: [project_id, target_schema, supabase_url]
output_format: genesis_checklist_result
model_hint: gemini-3-flash
version: 1.1
status: authoritative
date_created: "2026-04-14"
---

# WEBAPP GENESIS SKILL (V1.1)

## When to Use

Before writing the first line of UI code in a new webapp or complex module within the LAA Docker-Supabase ecosystem. Runs the 4-pulse handshake to guarantee environment + auth + schema are wired before any feature code.

## Steps

### Pulse 1 — Environmental Handshake
- [ ] Create/Verify `.env.development.localhost`
- [ ] Set `VITE_SUPABASE_URL=http://zeta-groups.com:8000`
- [ ] Set `VITE_PROJECT_ID` to the authoritative UUID for the current project
- [ ] Set `VITE_NITRO_MOCK=false`

### Pulse 2 — Auth Plumbing (Identity Sync)
- [ ] Implement `authStore.login` with the metadata update pattern
- [ ] **MANDATORY**: Call `supabase.auth.refreshSession()` after `updateUser`
- [ ] Implement `fetchUser` with cross-verification of the `public.user` table

### Pulse 3 — Schema Connection
- [ ] Initialize `supabase-js` client with the targeted schema (e.g., `quizLaa`)
- [ ] Initialize a separate `publicClient` for shared identity validation

### Pulse 4 — Verification Loop
- [ ] Run `pnpm dev` and attempt login
- [ ] Verify JWT claims using the Director's Audit Protocol
- [ ] Check terminal for "Identity context successfully refreshed" logs

## Execution Patterns

### Pattern — Schema-Bound Query
```typescript
// Always target the specific project schema
const { data, error } = await supabase
  .from('users') // Relative to quizLaa schema
  .select('*')
  .eq('id', userId)
  .single();
```

### Pattern — Project Filter (Global Schema)
```typescript
// Query public schema with strict project_id filtering
const { data, error } = await publicClient
  .from('user')
  .select('id')
  .eq('project_id', import.meta.env.VITE_PROJECT_ID)
  .single();
```

## Guardrails

- DO NOT use `browser_subagent` to "guess" if login works — use logs.
- DO NOT move business tables to `public` schema — maintain schema isolation.
- STOP if JWT claim `project_id` doesn't match `VITE_PROJECT_ID`.
- NEVER skip `refreshSession()` after `updateUser`.

## Verify

- All 4 pulse checkboxes pass
- Login produces JWT with correct `project_id` + `user_role` claims
- `fetchUser` returns a user profile without cross-project leakage

## Rollback

- Pulse 1 failure → delete `.env.development.localhost`, restart from scratch
- Pulse 2 failure → revert auth store to previous git commit
- Pulse 3 failure → re-init `supabase-js` with correct schema
- Pulse 4 failure → check Docker logs + Supabase Studio audit tab

---
**CLAUDE FRONTEND SKILL V1.1 — Antigravity Execution Standard (2026-04-16)**
