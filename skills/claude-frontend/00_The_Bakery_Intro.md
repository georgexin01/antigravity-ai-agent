# Universal Claude-Frontend: The Bakery-v2 Standard (V2.0)

> **Identity**: CLAUDE_FRONTEND_BLUEPRINT
> **Logic Base**: Vue 3 + Pinia + Supabase REST (URL-path API)
> **Relationship**: Admin-Panel (The Writer) -> WebApp (The Viewer)

---

## 1. THE ARCHITECTURAL TRIANGLE

```
Admin Panel (admin-panel-quizLaa)     WebApp Heritage (webApp-bakery-v2)
         |                                       |
         |  SQL + RLS + Seed                     |  Coding DNA: Stores, API, Components
         |  (managed by claude-code skills)      |
         v                                       v
              Target WebApp (webApp-LAA-quiz-v2)
              |- src/api/request.ts        (Axios client)
              |- src/types/*.ts            (TypeScript interfaces)
              |- src/stores/*.ts           (Pinia setup stores)
              |- src/views/**/*.vue        (Page components)
              |- src/router/index.ts       (Vue Router + auth guard)
```

### Role Division:

| Layer | Responsibility | Who Manages |
|-------|---------------|-------------|
| SQL Schema + RLS | Table creation, constraints, policies | Admin Panel (claude-code skills) |
| Supabase REST API | Auto-generated from schema via PostgREST | Supabase (automatic) |
| TypeScript Types | Mirror DB columns to frontend interfaces | This skill (Step 2) |
| Pinia Stores | CRUD actions via Supabase URL-path API | This skill (Step 3) |
| Vue Components | UI rendering with reactive store data | This skill (Step 4) |
| Router + Auth | Route definitions + JWT guard | This skill (Step 5) |

---

## 2. THE CODING OATH

When writing code for WebApps, the AI MUST follow these rules:

1. **READABILITY FIRST**: No over-engineering. Flat structures. Simple code you can scan at a glance.
2. **MODULAR PINIA**: One entity = one store file (`src/stores/{entity}.ts`).
3. **TYPED MODELS**: Every API response has a matching interface in `src/types/{entity}.ts`.
4. **COMPOSITION API**: Always `<script setup lang="ts">`. Never Options API.
5. **SETUP STORES**: Always `defineStore('name', () => { ... })`. Never option syntax.
6. **$reset REQUIRED**: Every setup store MUST implement and return a `$reset()` function.
7. **URL-PATH API**: Access Supabase via PostgREST URL paths through Axios, NOT the Supabase JS client.

---

## 3. THE SUPABASE BRIDGE (URL-Path Pattern)

The WebApp connects to Supabase via **PostgREST URL paths** through an Axios client:

```
Browser -> Axios (requestClient) -> Supabase PostgREST -> PostgreSQL
                                    |
                                    URL: {SUPABASE_URL}/rest/v1/{table}
                                    Headers: apikey + Authorization (JWT)
```

**Key Concept**: Supabase auto-generates a REST API from your PostgreSQL schema.
Every table gets CRUD endpoints automatically:

| Operation | HTTP Method | URL Pattern |
|-----------|------------|-------------|
| List | `GET` | `/rest/v1/{table}?select=*` |
| Detail | `GET` | `/rest/v1/{table}?id=eq.{uuid}` |
| Create | `POST` | `/rest/v1/{table}` |
| Update | `PATCH` | `/rest/v1/{table}?id=eq.{uuid}` |
| Delete | `DELETE` | `/rest/v1/{table}?id=eq.{uuid}` |
| Soft Delete | `PATCH` | `/rest/v1/{table}?id=eq.{uuid}` body: `{is_delete: true}` |
| With FK Join | `GET` | `/rest/v1/{table}?select=*,parent:parentId(*)` |
| Filtered | `GET` | `/rest/v1/{table}?status=eq.1&is_delete=eq.false` |
| Paginated | `GET` | `/rest/v1/{table}?offset=0&limit=20` |
| Sorted | `GET` | `/rest/v1/{table}?order=created_at.desc` |

**Schema Selection**: For non-public schemas (e.g., `quizLaa`), set these headers:
```
headers: { 'Accept-Profile': 'quizLaa', 'Content-Profile': 'quizLaa' }
```

---

## 4. PROJECT STRUCTURE (Target WebApp)

```
webApp-LAA-quiz-v2/
|- src/
|  |- api/
|  |  +- request.ts          # Axios client with interceptors (SINGLE SOURCE)
|  |- types/
|  |  |- index.ts            # Re-exports all types
|  |  |- auth.ts             # Auth types (UserProfile, LoginParams, LoginResult)
|  |  +- {entity}.ts         # Per-entity: DB interface + App interface
|  |- stores/
|  |  |- index.ts            # Re-exports all stores
|  |  |- auth.ts             # Auth store (login, logout, fetchUser)
|  |  +- {entity}.ts         # Per-entity store (CRUD + transforms)
|  |- views/
|  |  |- login/index.vue     # Login page
|  |  +- {entity}/
|  |     |- list.vue         # List page (card grid or table)
|  |     |- detail.vue       # Detail page
|  |     +- form.vue         # Create/Edit form (if entity has write ops)
|  |- router/
|  |  +- index.ts            # All routes + beforeEach auth guard
|  |- App.vue                # Root component
|  +- main.ts                # App bootstrap (createApp + use router/pinia)
|- .env.development           # VITE_GLOB_API_URL=http://localhost:54321
|- .env.production            # VITE_GLOB_API_URL=https://api.zeta-groups.com
+- package.json
```

---

## 5. DEPENDENCY ON ADMIN PANEL

The Admin Panel creates the database. The WebApp reads it:

```
1. Admin Panel -> creates SQL table (claude-code /create-module Step 1)
2. Supabase -> auto-generates REST endpoint for that table
3. WebApp -> reads via: GET /rest/v1/{table}?select=*&is_delete=eq.false
4. WebApp -> renders data in Vue components
5. WebApp -> writes via: POST/PATCH /rest/v1/{table}
```

**The WebApp NEVER creates tables.** It only reads/writes data to existing tables.
**The WebApp NEVER manages RLS.** RLS is defined in the Admin Panel's SQL migrations.

---

## 6. WHEN TO USE THIS SKILL

Use the claude-frontend skills when:
- Building a NEW module in the WebApp that reads from an existing Supabase table
- Adding a new view/page that displays or modifies database data
- Connecting a frontend component to a Supabase REST endpoint

Do NOT use this skill for:
- Creating database tables (use claude-code skills)
- Managing RLS policies (use claude-code skills)
- Admin panel features (use claude-code skills)

---

_Claude-Frontend Master Manual V2.0 (2026-04-08)_
