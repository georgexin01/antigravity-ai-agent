---
name: sovereign-framework-mastery
description: "Master architecture guidelines for Sovereign Web Framework (SWF) - Vben + Supabase + Vue 3."
triggers: ["swf", "vben", "sovereign framework", "master architecture"]
phase: constitutional
v_score: 1.0
k_decay: 0
holo: "Deep architectural guide for building SWF compliant admin panels. Focuses on Vben, Vue 3, and Supabase hardened security."
model_hint: gemini-3-flash
version: 10.0
status: authoritative
---

# Sovereign Web Framework (SWF) Mastery

The **Sovereign Web Framework (SWF)** is an architectural pattern for building standalone, local-first industrial applications. It combines the industrial power of **Sovereign-Admin** (Vben-based) with the high-fidelity experience of **Sovereign-WebApp** (Vue 3/Vite), all bridged via **Local-Supabase-Core** (Dockerized Supabase).

## 🌍 The 14-Step Sovereign Lifecycle

This repeatable lifecycle ensures consistency, security, and high performance across any project.

### 1. INFRA: Local-Supabase-Core Setup
Establish a dedicated Dockerized Supabase instance. Connectivity is handled via `localhost:8000`. Ensure the database is accessible in a sovereign, firewalled environment.

### 2. SCHEMA: Data Engineering
Design the database tables within the `Sovereign-Admin` context. Use a dedicated schema (e.g., `business_schema`) rather than `public` to ensure logical isolation.

### 3. PROJECT BINDING: Identity Root
Initialize a `VITE_PROJECT_ID` and map it to a user's record in the `public.user` table. This is the root of your security—users are bound to specific projects.

### 4. MONOREPO SYNC: Unified Keys
Align environment variables (`.env`) across Admin and WebApp projects. Key variables must match to share the same identity context and database bridge.

### 5. DUAL-CLIENT API: Schema Bridging
Implement two Supabase clients in the `Sovereign-WebApp`:
- **`publicClient`**: Targets the `public` schema for Auth and Identity checks.
- **`supabase` (Primary)**: Targets the `business_schema` for application data.

### 6. AUTH HARDENING: Identity Context Switching
Implement a "Bakery-style" login flow:
1. Standard Supabase Sign-in.
2. Verified `PROJECT_ID` binding check via `publicClient`.
3. Identity context refresh using `custom_access_token_hook` if the project context mismatch is detected.

### 7. SINGLE-TABLE CRUD: State Persistence
Generate Pinia stores that act as APIs for isolated tables (e.g., Lessons, Categories). Use `dbToApp` transformation functions to sanitize raw database objects for the UI.

### 8. RELATIONAL CRUD: Tree-Structured Data
Implement parent-child logic (e.g., Lessons ↔ Questions). Stores should handle relational aggregations (like fetching sub-item counts) during the primary data fetch.

### 9. RANDOMIZATION ENGINE: Engagement Logic
Apply frontend shuffling patterns for interactive items (like Quiz options). Shuffling should be done in the store/controller level before presenting to the component.

### 10. SNAPSHOT PERSISTENCE: Data Immutability
Use **Lean JSON Snapshots** to record historical events (like Quiz attempts). store the exact state of randomized items (Question ID, shuffled text order, user choice) as a JSON array in a single column.

### 11. PROGRESS TRACKING: Metrics Engine
Calculate completion percentages and time-durations in the store layer. Always expose raw database metrics as user-friendly strings (e.g., `105 min`).

### 12. AESTHETIC INJECTION: Cinematic Design
Apply a cohesive Design DNA. Focus on Glassmorphics, high-contrast dark modes, and cinematic gradients (e.g., Rose/Emerald feedbacks).

### 13. REVIEW ENGINE: High-Fidelity Feedback
Build a dedicated Review Engine that hydrates **Lean Snapshots**. It must blend the historical choices from the snapshot with current data from the question pool for context.

### 14. SOVEREIGN SHIP: Final Deployment
Configure PWA manifests, SSL certificates, and optimized production builds. Ensure URLs are "Clean" (no hash mode) using proper history API configuration.

## 🔒 Schema Hardening & Security (Post-v4.5)

The **"Fail-Closed" Security Model** is now the standard for all `quizLaa` schemas. This involves three critical layers:

### A. RLS Global Rollout
All business tables must transition from `UNRESTRICTED` (Public) to `RESTRICTED` (RLS Enabled). Use the following atomic pattern for each table:
```sql
ALTER TABLE "quizLaa"."table_name" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "authenticated_manage" ON "quizLaa"."table_name";
CREATE POLICY "authenticated_manage" ON "quizLaa"."table_name" 
FOR ALL TO authenticated USING (true) WITH CHECK (true);
```

### B. Atomic SQL Protocol (Windows CLI)
Windows Shell expansion often corrupts multi-statement SQL strings or case-sensitive schema names (`"quizLaa"`).
**Rule**: Always use `supabase db query -f file.sql` or stream content via `Get-Content file.sql | supabase db query` for atomic reliability.

### C. Case-Sensitive Schema Access
Always double-quote camelCase schemas in SQL commands to prevent Postgres from automatic lower-casing:
- **WRONG**: `quizLaa.users` (becomes `quizlaa.users`)
- **RIGHT**: `"quizLaa"."users"`

## 🛠️ Implementation Patterns

### Pattern A: Identity Hardening
```typescript
const { data: binding } = await publicClient
  .from('user')
  .select('project_id')
  .eq('auth_id', authId)
  .single();

if (binding.project_id !== VITE_PROJECT_ID) throw new Error('Unauthorized');
```

### Pattern B: Lean Snapshot
```json
{
  "questionId": "uuid",
  "options": ["Text A", "Text B", "Text C", "Text D"],
  "correctKey": "D",
  "selectedKey": "A"
}
```
*Note: Options text order is preserved at the time of session.*

## ⚠️ DATABASE FRAGILITY & SAFETY PROTOCOL (CRITICAL)

All database resources in SWF projects (Vben Admin, Supabase Docker) are considered **Fragile**. To prevent corruption and maintain synchronization:

1.  **Permission Gating**: The AI must NEVER edit `.sql`, `supabase/`, or `database/` folders without explicit, current-session user permission.
2.  **Schema Impact Report**: Before any database modification, the AI must list:
    - All affected tables and columns.
    - All relationship/foreign key implications.
    - Potential impact on existing RLS policies or permissions.
3.  **Synchronous Documentation**: All database changes must be proposed in an artifact (SQL block) first, allowing the user to audit the code before any "Do it" command is run.
4.  **Local Sync Warning**: The AI must always warn that schema changes might require a `supabase db reset` or internal data migration to stay compliant with the local Docker state.

