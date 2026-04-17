---
name: claude-master-rules
description: "Constitutional rules for all Claude / claude-frontend / claude-website mode work. Hard-coded FIXED RULES that override conflicting behaviour elsewhere. Read first, always, for any project-scoped operation."
triggers: ["master rules", "claude rules", "constitutional rules", "supabase rules", "project scope rules", "schema rules"]
phase: constitutional
model_hint: gemini-3-flash
version: 1.0
status: authoritative
date_created: "2026-04-17"
enforcement: universal-hard-rule
---

# 🛡️ CLAUDE MASTER RULES — Constitutional

> **READ FIRST.** These rules are **FIXED** and override any skill's default behavior when they conflict.
> Apply in: Claude, claude-frontend, claude-website modes.

---

## RULE #1 — Supabase Project Schema Isolation (HARD)

**Established by user on 2026-04-17.**

All Supabase schema/data work for a Claude-mode project MUST stay **inside the current project's business schema** (e.g. `quizLaa` for the admin-panel-quizLaa project).

### What is allowed

- ✅ `CREATE TABLE "{project_schema}"."{name}" (...)` — new tables in project schema
- ✅ `ALTER TABLE "{project_schema}"."{name}"` — modify project tables
- ✅ `INSERT INTO "{project_schema}"."{name}"` — seed/write project data
- ✅ FK to another table in the SAME `{project_schema}`
- ✅ FK to `auth.users(id)` — Supabase platform necessity for login
- ✅ RLS policies on project tables (using `auth.jwt() ->> '...'` claims)

### What is FORBIDDEN

- ❌ `CREATE TABLE public.*` from a project migration
- ❌ `INSERT INTO public.user / public.role / public.project` from a project migration
- ❌ `ALTER TABLE public.*` or `DROP TABLE public.*`
- ❌ FK from `{project_schema}.X` to `public.Y` (cross-schema business FK) — use `{project_schema}.users` instead
- ❌ Any modification to `wms.*`, `test_school.*`, or other project schemas from the current project's migrations
- ❌ Mixing two project schemas in one migration

### Where the shared `public` / `wms` / other schema changes go

- Shared RBAC/auth infrastructure (`public.user`, `public.role`, `public.project`, JWT hooks) lives in `supabase/migrations/` prefix 001–022 — maintained separately by a platform admin, treated as READ-ONLY from a project's perspective
- Cross-project tooling lives in `_shared/` knowledge folder
- If you think a project needs to change `public.*`, STOP and ask the user first

### Why

User explicitly made this the law (2026-04-17). The reason is **project isolation**:
- Each Sovereign project (quizLaa, wms, etc.) should be fully self-contained
- Dropping one project's schema leaves all other projects untouched
- Cross-schema FKs create drop/restore complications and coupling between unrelated projects
- Data migrations become non-portable when they depend on other schemas' seed order

### How to detect violations

When writing a migration / store / API call:

1. **Scan the SQL or query** — every `FROM` / `JOIN` / `REFERENCES` / `INSERT INTO` / `UPDATE` / `DELETE FROM` target
2. **Check the schema prefix** — must be `{current_project_schema}.` or `auth.users`
3. **Flag** any `public.X`, `wms.X`, other schemas referenced as WRITE target — that's a violation
4. **Allow** reads from `public.X` in RLS policies (`auth.jwt() ->> 'project_id'` etc.) — those are JWT claims, not table reads

### Auto-verify helper (for AI)

Before committing a migration or running an INSERT, grep the change set for:
```
(CREATE|ALTER|DROP|INSERT INTO|UPDATE)\s+["']?(public|wms|test_school|[a-z_]+)["']?\.
```
Any match where the schema ≠ current project schema AND ≠ `auth` → VIOLATION. Stop and surface to user.

### Known current violations in admin-panel-quizLaa (as of 2026-04-17)

| Migration | Violation | Fix proposal |
|---|---|---|
| `033_agent_profiles.sql` | `user_id UUID REFERENCES public."user"(id)` | Change to `REFERENCES "quizLaa"."users"(id)` |
| `025_quizlaa_permissions.sql` | `roleId UUID REFERENCES public.role(id)` | Depends on RBAC model — user to decide |
| `026_quizlaa_auth_users.sql` | `INSERT INTO public."user" (...)` | Keep for auth bridging OR move to platform migrations |

The user will decide case-by-case whether to fix or grandfather each.

---

## Enforcement summary

Every Claude-mode project operation involving Supabase:

1. ✅ Target schema = current project schema (or `auth.users`)
2. ❌ Never silently touch `public.*` or other project schemas
3. ⚠️ If unsure, ASK the user

This rule is **load-bearing** — breaking it causes cross-project data coupling which takes weeks to unwind. Treat violations as high-severity.

---

**MASTER RULES V1.0 — 2026-04-17 · Origin: User directive**
