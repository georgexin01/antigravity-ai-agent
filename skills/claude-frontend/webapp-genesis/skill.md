---
name: webapp-genesis
description: "WebApp Environmental Handshake & Project Initialization Logic (Auth + Supabase Sync)."
triggers: ["genesis", "handshake", "identity sync", "plumbing"]
phase: 1-genesis
version: 1.0
---

# 🛠️ WEBAPP GENESIS SKILL (V1.0)

This skill provides step-by-step logic for the birth (Genesis) of a new web application or a complex module within the LAA Docker-Supabase ecosystem.

---

## 📋 GENESIS CHECKLIST (MANDATORY)

Before writing the first line of UI code, the system MUST execute these 4 pulses:

### Pulse 1: Environmental Handshake
- [ ] Create/Verify `.env.development.localhost`.
- [ ] Set `VITE_SUPABASE_URL=http://zeta-groups.com:8000`.
- [ ] Set `VITE_PROJECT_ID` to the authoritative UUID for the current project.
- [ ] Set `VITE_NITRO_MOCK=false`.

### Pulse 2: Auth Plumbing (Identity Sync)
- [ ] Implement `authStore.login` with the metadata update pattern.
- [ ] **MANDATORY**: Call `supabase.auth.refreshSession()` after `updateUser`.
- [ ] Implement `fetchUser` with cross-verification of the `public.user` table.

### Pulse 3: Schema Connection
- [ ] Initialize `supabase-js` client with the targeted schema (e.g., `quizLaa`).
- [ ] Initialize a separate `publicClient` for shared identity validation.

### Pulse 4: Verification Loop
- [ ] Run `pnpm dev` and attempt login.
- [ ] Verify JWT claims using the **Director's Audit Protocol**.
- [ ] Check terminal for "Identity context successfully refreshed" logs.

---

## 🏗️ EXECUTION PATTERNS

### Pattern: Schema-Bound Query
```typescript
// Always target the specific project schema
const { data, error } = await supabase
  .from('users') // Relative to quizLaa schema
  .select('*')
  .eq('id', userId)
  .single();
```

### Pattern: Project Filter (Global Schema)
```typescript
// Query public schema with strict project_id filtering
const { data, error } = await publicClient
  .from('user')
  .select('id')
  .eq('project_id', import.meta.env.VITE_PROJECT_ID)
  .single();
```

---

## 🚫 FORBIDDEN ACTIONS
- **NO BROWSER TESTING**: Do not use `browser_subagent` to "guess" if the login works. Use logs.
- **NO PUBLIC SCHEMA DATA**: Do not move business tables to the `public` schema. Maintain schema isolation.

---
**CLAUDE FRONTEND SKILL V1.0 — Antigravity Execution Standard (2026-04-14)**
