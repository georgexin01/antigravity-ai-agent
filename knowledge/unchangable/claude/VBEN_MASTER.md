---
name: vben-master
description: "🏢 VBEN ADMIN & SUPABASE MASTER (V1.0)"
triggers: ["vben master", "vben rules", "vben recovery", "vben_master"]
phase: constitutional
model_hint: gemini-3-flash
version: 1.0
---

# 🏢 VBEN ADMIN & SUPABASE MASTER (V1.0)

This document consolidates all Vben Admin architecture rules, Supabase integration standards, and environment recovery handbooks. It replaces: `vben_recovery_handbook`, `vben_webapp_synergy_rules`, `supabase_vben_admin_automation`, `vben_snipaste_bridge`, and `dna_claude_vben`.

---

## 🏛️ 1. VBEN-SUPABASE SYNERGY (ACTIVE PARITY)

### 1.1 The "Vault" Schema Directive
If tables exist in a restricted schema (e.g. `quizLaa`):
- **Safety**: NEVER move tables to `public` to fix 406/404 errors.
- **Access**: `GRANT USAGE ON SCHEMA` + `CREATE VIEW public.tab AS SELECT * FROM private.tab`.

### 4. Relational Authority Protocol

> [!IMPORTANT]
> The Vben Admin Panel is the authoritative blueprint for the database schema. All 'User-Facing' projects (like webApp-LAA-quiz-v2) must synchronize their relational hierarchies with the Vben logic.

- **Nesting Verification**: If a sub-item is managed via the 'Layer Icon' (e.g., Lessons -> Questions) in Vben, the WebApp must strictly filter that item by the parent ID.
- **Table Naming**: Always default to the table names found in the Vben Stores (e.g., `question_answers`).
- **Sync Requirement**: Before adding a new feature to the WebApp, audit the Vben counterpart to check for column parity.

### 4.1 Relational Think-Ahead Protocol

> [!TIP]
> Always think ahead of the relationship. A single page change (e.g., Lesson detail) often requires updating counts or summaries in related pages (e.g., Course List or Quiz Progress).

1. **Research Rule**: Before modifying a Lesson or Question view, the AI **MUST** research all pages that display this data to ensure the 'Parent-Child' logic is synchronized.
2. **Read-First Principle**: Complete all relational 'Read' operations (e.g., fetching total question counts) before implementing 'Create/Update/Delete' logic.
3. **Contextual Awareness**: If a page shows a 'Lesson', it should ideally show the 'Question Count' or 'Completion Status' derived from its children.

### 1.2 Table Naming Sovereignty
- **Naming**: Always pluralize table names in Supabase (e.g. `users`, `products`).
- **Singular Penalty**: PostgREST fails with 404 on singular calls (`from('user')`).

### 1.3 Environment Harmony
- **WebApp**: Port 3000 | `dev:local` targets Port 54321.
- **Vben Admin**: Port 5666 | `pnpm dev:local` targets Port 54321.
- **Shared Domain**: Both MUST share the same TypeScript interfaces and Pinia structure.

---

## 🛠️ 2. THE RECOVERY HANDBOOK (S-CORE 95)

In case of environment instability, execute the **Antigravity Strike**:

1. **STOP**: Kill all zombie node processes (`Get-Process node | Stop-Process`).
2. **PURGE**: Delete `.vite` cache in user home AND project-local folders.
3. **ISOLATE**: Rename `C:\Users\user\node_modules` to prevent global poisoning.
4. **PATCH**: Ensure `api: 'modern'` is set in `vite-config`.
5. **BOOST**: `pnpm dev:local`.

---

## 🌉 3. SNIPASTE ZERO-TOKEN BRIDGE

- **Hot-Pipe**: `ui-snap.png` in project root.
- **Protocol**: 
    1. User takes screenshot of UI bug/ref.
    2. User saves as `ui-snap.png`.
    3. AI runs `view_file`.
    4. AI analyzes visual delta and fixes code (Zero Token reference).

---

## 🔐 5. SUPABASE RLS & RBAC (SECURE BOOT)

### 5.1 RBAC Hierarchy
- **Naming**: Use `snake_case` for tables and `camelCase` for columns (double-quoted: `"isDelete"`).
- **Levels**:
    - `root_admin` (0) | `super_admin` (10) | `admin` (20) → Full Scope (`all`).
    - `user` (100) → Restricted Scope (`own`).

### 5.2 Implementation Logic
- **Isolation**: One User → One Project → One Schema.
- **RLS Helper**: Use `{project_schema}.authorize('resource', 'action')` for all policies.
- **JWT Claims**: Ensure `projectId`, `role`, and `roleLevel` are mapped in the auth hook.

---
**VBEN MASTER V1.0 — Antigravity Authoritative Admin Standard (2026-04-14)**
