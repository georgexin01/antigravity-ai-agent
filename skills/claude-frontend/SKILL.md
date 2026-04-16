---
name: claude-frontend
description: "V4.5 Sovereign Web Framework (SWF) orchestrator for Vben + Supabase + Vue 3. 14-step recursive lifecycle for building independent, high-fidelity webapps on local Dockerized Supabase. Delegates phase-specific work to sub-skills."
triggers: ["sovereign framework", "swf", "14-step", "frontend orchestrator", "sovereign web", "vben supabase webapp"]
phase: 0-orchestrator
requires: []
unlocks: [webapp-genesis, analyze-schema, generate-store, generate-views, generate-supabase-schema]
inputs: [project_name, target_schema]
output_format: phase_execution_plan
model_hint: gemini-3-pro
version: 4.5
status: authoritative
date_created: "2026-04-14"
---

# `claude-frontend` — The Sovereign Protocol

## When to Use

When building a new Sovereign Web Ecosystem — a high-fidelity Vue 3 + Vben + Supabase application on a local Dockerized backend. Acts as the orchestrator — delegates to `webapp-genesis`, `generate-*` skills, etc. Consider pairing with `plan-first` for upfront approval.

## 🚀 The 14-Step Recursive Lifecycle

When triggered, the AI must evaluate the project's current state and execute the relevant step from the Sovereign Web Framework (SWF) mastery guide.

### Phase 1 — Foundation
1. **INFRA**: Audit `docker-compose.yml` for Supabase. Connect via `localhost:8000`.
2. **SCHEMA**: Draft SQL migrations for the `business_schema`. **Immediately apply RLS (Restricted)** to all business tables using the Global Rollout Pattern.
3. **PROJECT BINDING**: Create a UUID 'Project Key' and sync it to the `public.user` table.
4. **MONOREPO SYNC**: Ensure `VITE_PROJECT_ID` is identical in Admin and WebApp `.env` files.

### Phase 2 — Data & Logic
5. **DUAL-CLIENT API**: Initialize `publicClient` (auth) and `supabase` (business) in `src/api/supabase.ts`.
6. **AUTH HARDENING**: Implement Bakery-pattern Login with Project ID verification. **Never skip identity context switching.**
7. **SINGLE-TABLE CRUD**: Generate Pinia stores with `getByUser` and `create` methods.
8. **RELATIONAL CRUD**: Build stores that handle parent-child aggregations (e.g., Question counts per Lesson).
9. **RANDOMIZATION ENGINE**: Implement frontend shuffling for high-engagement quiz components.

### Phase 3 — Persistence & UI
10. **SNAPSHOT PERSISTENCE**: Force **Lean JSON Snapshots** for history. Format: `Record<questionId, { options: string[], correctKey: string, selectedKey: string }>`
11. **PROGRESS TRACKING**: Add computed completion metrics to the store layer.
12. **AESTHETIC INJECTION**: Inject Glassmorphic tokens and Cinematic gradients (Emerald/Rose).
13. **REVIEW ENGINE**: Build the high-fidelity render engine for Snapshot hydration.
14. **SOVEREIGN SHIP**: Finalize PWA setup, clean URL routing, and production bundle validation.

## 🛠️ Mandatory Execution Rules

- **Naming Independence**: Always refer to projects as `Sovereign-Admin` and `Sovereign-WebApp` to maintain project-agnostic knowledge.
- **Local-First**: Never assume the existence of an external production backend unless explicitly provided. Everything is bridged via `http://localhost:8000`.
- **Relational Integrity**: When creating sub-items (e.g., Questions), always verify the `lessonId` binding in the store.
- **Snapshot Purity**: Snapshots must be immutable. Once saved, they must capture the exact string order of the user session.
- **Atomic CLI Protocol (Windows)**: Always execute SQL via `-f file.sql` to prevent shell case-folding and multi-statement corruption.
- **CamelCase Preservation**: Double-quote all schema and table names in SQL strings (e.g., `"quizLaa"`).

## 🧩 Usage Example: Relational Store Pattern

```typescript
export const useSovereignStore = defineStore('module', () => {
  async function getList() {
     const { data } = await supabase.from('parent_table').select('*');
     // RELATIONAL AUDIT (Step 8)
     const { data: counts } = await supabase.from('child_table').select('id, parent_id');
     // Map counts back to objects...
  }
});
```

## Guardrails

- DO NOT skip Phase 1 steps before touching Phase 2.
- DO NOT hardcode the project name — use `VITE_PROJECT_ID`.
- STOP if `docker ps` does not show Supabase running.
- NEVER assume production backend exists.

## Verify

- All 4 Phase 1 steps produce artifacts (SQL files, .env entries, UUID key)
- Login flow returns JWT with correct `project_id` claim
- Snapshot write + read round-trip works

## Rollback

- Phase 1 rollback: drop new schemas, revert `.env`
- Phase 2 rollback: restore previous Pinia stores from git
- Phase 3 rollback: revert UI commits, re-run `pnpm build`

---
**Protocol Status**: V4.5 Active | **Architect**: Claude-Frontend | **Framework**: SWF-Vben-Supabase
