---
name: laa-project-snapshot
description: "Living snapshot of admin-panel-quizLaa current state across all 3 projects (admin, webApp, website) as of 2026-04-17. Records architecture decisions, FK relationships, URL patterns, and known bugs. Update when structural changes happen."
triggers: ["laa project state", "quizLaa snapshot", "admin-panel-quizLaa", "current architecture", "laa current state"]
phase: reference
model_hint: gemini-3-flash
version: 1.0
status: authoritative
date_created: "2026-04-17"
last_review: "2026-04-17"
---

# LAA Project Snapshot — 2026-04-17

> **Living document** — update whenever architecture changes. Last verified against live code on 2026-04-17.
> Use as ground truth for any AI session working on admin-panel-quizLaa.

## Project Layout (monorepo)

```
admin-panel-quizLaa/
├── apps/
│   └── web-antd/              # Admin panel (Vben 5.x, Vue 3, Ant Design)
│       └── src/sql/migrations/ # App-level SQL migrations (project-authoritative)
├── supabase/
│   ├── migrations/             # Supabase CLI-managed (runs on `supabase db reset`)
│   └── migrations_backup.archived_2026-04-17/  # Old broken set (quarantined)
├── webApp-LAA-quiz-v2/         # Student webapp (Vue 3 + Supabase client-side)
│   └── src/
│       ├── config/             # ← CENTRALIZED: env.ts, supabase.ts, index.ts
│       ├── stores/             # Options-API Bakery pattern
│       ├── types/              # DB + App types
│       └── views/              # Pages (courses, quiz, history, login)
└── website-LAA-agent/          # Public PHP website (agent landing + reviews)
    ├── api/                    # Sovereign\ namespace, PSR-4 + composer
    │   ├── core/               # SupabaseClient, SupabaseConfig, etc.
    │   ├── Models/             # {Entity}Model.php per resource
    │   ├── Controllers/        # {Entity}Controller.php per resource
    │   ├── v1/                 # Endpoint adapters
    │   ├── Lib/ErrorHandler.php
    │   ├── Config.php          # const Sovereign\Config (env blocks)
    │   ├── Helper.php          # Sovereign\* procedural
    │   └── vendor/             # composer-installed
    ├── index.php               # Router + static passthrough
    ├── home.php / review.php   # Templates
    └── router.php              # get()/post() dispatch
```

## MASTER RULES applied

### RULE #1 — Project Schema Isolation (2026-04-17)

All business tables + FKs live in `quizLaa` schema. Only permitted cross-schema reference is `auth.users` (Supabase platform necessity). `public.user` is read-only from project POV. See `knowledge/claude/MASTER_RULES.md` for details.

**Currently enforced in:**
- `agent_profiles.user_id → quizLaa.users(id)` ✅ (was `public.user(id)`, refactored 2026-04-17)
- `agent_reviews.agent_profile_id → quizLaa.agent_profiles(id)` ✅
- `agent_leads.agent_profile_id → quizLaa.agent_profiles(id)` ✅
- `quizLaa.users` doesn't have auth_id — linked via email to `auth.users` (intentional)

## Supabase Schema (quizLaa)

| Table | Purpose | Key FKs |
|---|---|---|
| `users` | Business profiles (quiz agents) | (none — linked to auth.users via email) |
| `lessons` | Quiz lessons | — |
| `questions` | Multi-choice quiz questions | `lessonId → lessons` |
| `questionAnswers` | User quiz submissions (with AnswerSnapshot JSONB) | `userId → users`, `lessonId → lessons` |
| `user_lessons` | M2M junction (assigns lessons to users) | `userId → users`, `lessonId → lessons` |
| `testProducts` | Test data for pagination/filter dev | — |
| `permissions` | RBAC (still → public.role; allowed exception) | `roleId → public.role` |
| `agent_profiles` | Website agent landing page data | `user_id → quizLaa.users(id)` |
| `agent_reviews` | Agent testimonials | `agent_profile_id → agent_profiles` |
| `agent_leads` | Contact form submissions | `agent_profile_id → agent_profiles` |

### Table name casing convention (IMPORTANT)

| Table | Casing |
|---|---|
| `users`, `lessons`, `questions`, `permissions`, `user_lessons`, `agent_profiles`, `agent_reviews`, `agent_leads` | snake_case or single word |
| `questionAnswers`, `testProducts` | **camelCase** |

Respect the actual schema. Don't normalize. `question_answers` (snake) silently returns empty; `questionAnswers` (camel) works.

### Column casing convention

| Schema | Example | Rule |
|---|---|---|
| `quizLaa.*` | `isDelete`, `userId`, `lessonId`, `createdAt` | camelCase, quoted |
| `public.*` | `is_delete`, `auth_id`, `project_id`, `created_at` | snake_case |

## 3 Apps — Connection Matrix

| App | URL | Client | Primary Schema |
|---|---|---|---|
| admin panel | `localhost:5666` | Supabase JS (TS) via `#/api/supabase` | `quizLaa` + `public` |
| webApp | `localhost:3000` | Supabase JS (TS) via `@/config` | `quizLaa` |
| website | `localhost:8080` | Sovereign PHP client | `quizLaa` |

All three currently hit `http://localhost:54321` (local Docker Supabase). Anon key only — no service-role in client code.

## Critical Architecture Decisions

### webApp (Vue 3)

- **`src/config/` is the ONLY place** `import.meta.env.VITE_*` is read. Rest of codebase uses `env.SUPABASE_URL`, etc.
- Two clients: `supabase` (quizLaa schema) + `publicClient` (public schema for RBAC bridge)
- Options-API Bakery stores — NEVER setup-style stores (cross-store ref unwrapping breaks)
- Manual 2-query joins only — PostgREST embedded selects fail on local Docker
- `AnswerSnapshot[]` JSONB for quiz history — frozen option order at submit time
- Intersection filter: lessons shown only if (assigned to user) AND (has ≥1 question)
- Fail-closed guards: direct URL to unassigned lesson → redirect to /courses

### website (PHP)

- **Sovereign namespace** (`Sovereign\Core\*`, `Sovereign\Models\*`, `Sovereign\Controllers\*`)
- Composer PSR-4 + files autoload (only one vendor/ at `api/vendor/`)
- **UUID-only routing** — slug support removed; non-UUID → 404
- `SupabaseClient::request()` sends `apikey` header ONLY (no `Authorization: Bearer` — PostgREST rejects duplicate JWT)
- `return=minimal` for anon INSERTs to tables without anon SELECT (e.g., `agent_leads`)
- Static file passthrough in `index.php` (must run BEFORE autoload) — without it, JS/CSS requests return HTML

### admin panel (Vben 5.x)

- Uses Supabase JS via `#/api/supabase`
- Cross-layer user CRUD via `public.create_user()` / `update_user()` / `delete_user()` / `restore_user()` RPC (migration 027)
- RPC functions use `SET search_path = public, extensions` (pgcrypto lives in extensions schema)
- RPC auto-confirms new users (`email_confirmed_at = now()`) — instant login, no OTP

## URL Patterns

### website (UUID-only)

| Works | Doesn't |
|---|---|
| `/agents/{quizLaa.users.id UUID}` | `/agents/john-agent` (slug — removed) |
| `/agents/{agent_profiles.id UUID}` | `/agents/anything-non-uuid` |

UUIDs regenerate on every `supabase db reset`. Use `agent_profiles.id` or `quizLaa.users.id` — both work via `AgentModel::resolve()` which does `or(id.eq.X, user_id.eq.X)`.

### webApp

| Route | Auth | Notes |
|---|---|---|
| `/login` | public | Email + password |
| `/courses` | required | Assigned lessons list |
| `/courses/:id` | required | Direct-URL guard — redirects if unassigned |
| `/courses/:id/quiz` | required | Timed quiz |
| `/quiz-result` | required | After-submit |
| `/quiz-review` | required | Replay via snapshots |
| `/history` | required | All past attempts |

Router guard checks `localStorage.accessToken` truthiness only (NOT JWT expiry — known weakness).

## Known Bugs (pending fix)

| Location | Bug | Severity |
|---|---|---|
| `website/review.php:15` | Uses `$_GET['agent_id']` which router sets to `uuid/review` (wrong). Should use `$parts[1]`. | MED (404s on review pages) |
| `webApp/auth.ts:149` | `this.user.rawId = userData.id` — but `rawId` not in `UserProfile` type | LOW (TS warning; works at runtime) |
| `webApp/auth.ts:228` | `logout()` doesn't call `resetAllStores()` — stale data leaks | MED (cross-user data exposure in same session) |
| `webApp/router/index.ts:67` | Guard is token-presence only — expired tokens pass | MED (security) |
| `webApp/auth.ts:58,195` | Two spots still use `import.meta.env.VITE_PROJECT_ID` instead of `env.PROJECT_ID` | LOW (consistency) |

## Seed Data (as of last `supabase db reset`)

| Count | Table |
|---|---|
| 4 | `agent_profiles` (john-agent, jane-agent, bob-agent, alice-agent) |
| 5 | `quizLaa.users` (admin + agent1-4) |
| 5 | `auth.users` (same — with password `123456`) |
| 9 | `agent_reviews` (2-3 per agent) |
| 5 | `lessons` |
| 10 | `questions` |
| 6 | `questionAnswers` (historical attempts) |
| 105 | `testProducts` |
| 0 | `agent_leads` (user-submitted only) |

UUIDs regenerate every reset — do NOT hardcode them in code.

## Login Credentials (dev seed)

| Email | Password | Role |
|---|---|---|
| `admin@quizlaa.com` | `123456` | admin |
| `agent1@quizlaa.com` | `123456` | agent |
| `agent2@quizlaa.com` | `123456` | agent |
| `agent3@quizlaa.com` | `123456` | agent |
| `agent4@quizlaa.com` | `123456` | agent |

## Migrations Total Count

33 active migrations (001–040, plus `20260417000000_master_core.sql` consolidation) + 3 drafts quarantined in `_drafts/`.

## When to update this snapshot

- Adding/removing a table → update "Schema" section
- Changing URL patterns → update "URL Patterns"
- Fixing a known bug → move from "Known Bugs" to bottom, add dated line in a future "Resolved" section
- Adding a new app or major layer → update "Project Layout"
