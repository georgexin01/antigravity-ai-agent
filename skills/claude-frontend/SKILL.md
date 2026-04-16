---
name: claude-frontend
description: V4.5 Sovereign Web Framework (SWF) Protocol — Vben + Supabase + Vue 3
---

# `claude-frontend` — The Sovereign Protocol

This skill is designed to manage the full development lifecycle of a **Sovereign Web Ecosystem**. It specializes in building independent, high-fidelity applications powered by a local Dockerized Supabase backend.

## 🚀 The 14-Step Recursive Lifecycle

When triggered, the AI must evaluate the project's current state and execute the relevant step from the **Sovereign Web Framework (SWF)** mastery guide.

### [Phase 1: Foundation]
1.  **INFRA**: Audit `docker-compose.yml` for Supabase. Connect via `localhost:8000`.
2.  **SCHEMA**: Draft SQL migrations for the `business_schema` in `Sovereign-Admin`.
3.  **PROJECT BINDING**: Create a UUID ‘Project Key’ and sync it to the `public.user` table.
4.  **MONOREPO SYNC**: Ensure `VITE_PROJECT_ID` is identical in Admin and WebApp `.env` files.

### [Phase 2: Data & Logic]
5.  **DUAL-CLIENT API**: Initialize `publicClient` (auth) and `supabase` (business) in `src/api/supabase.ts`.
6.  **AUTH HARDENING**: Implement Bakery-pattern Login with Project ID verification. **Never skip identity context switching.**
7.  **SINGLE-TABLE CRUD**: Generate Pinia stores with `getByUser` and `create` methods.
8.  **RELATIONAL CRUD**: Build stores that handle parent-child aggregations (e.g., Question counts per Lesson).
9.  **RANDOMIZATION ENGINE**: Implement frontend shuffling for high-engagement quiz components.

### [Phase 3: Persistence & UI]
10. **SNAPSHOT PERSISTENCE**: Force **Lean JSON Snapshots** for history.
    - Format: `Record<questionId, { options: string[], correctKey: string, selectedKey: string }>`
11. **PROGRESS TRACKING**: Add computed completion metrics to the store layer.
12. **AESTHETIC INJECTION**: Inject Glassmorphic tokens and Cinematic gradients (Emerald/Rose).
13. **REVIEW ENGINE**: Build the high-fidelity render engine for Snapshot hydration.
14. **SOVEREIGN SHIP**: Finalize PWA setup, clean URL routing, and production bundle validation.

## 🛠️ Mandatory Execution Rules

- **Naming Independence**: Always refer to projects as `Sovereign-Admin` and `Sovereign-WebApp` to maintain project-agnostic knowledge.
- **Local-First**: Never assume the existence of an external production backend unless explicitly provided. Everything is bridged via `http://localhost:8000`.
- **Relational Integrity**: When creating sub-items (e.g., Questions), always verify the `lessonId` binding in the store.
- **Snapshot Purity**: Snapshots must be immutable. Once saved, they must capture the exact string order of the user session.

## 🧩 Usage Example: Relational Store Pattern

```typescript
// Define store
export const useSovereignStore = defineStore('module', () => {
  // Fetch primary
  async function getList() {
     const { data } = await supabase.from('parent_table').select('*');
     // RELATIONAL AUDIT (Step 8)
     const { data: counts } = await supabase.from('child_table').select('id, parent_id');
     // Map counts back to objects...
  }
});
```

---
**Protocol Status**: V4.5 Active | **Architect**: Claude-Frontend | **Framework**: SWF-Vben-Supabase
