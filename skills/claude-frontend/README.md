# Claude Skills Registry (Gemini 3 Flash Hybrid Format)

Skills use hybrid YAML frontmatter + Markdown body for fast keyword routing and structured-output compatibility with Gemini 3 Flash.

## Frontmatter Schema

| Field | Purpose |
|---|---|
| `name` | Unique skill ID (matches folder name) |
| `description` | One-line summary for loader listing |
| `triggers[]` | Literal keywords the router matches against user input |
| `phase` | Execution stage: `0-orchestrator`, `1-analysis`, `2-scaffold`, `3-testing`, `reference` |
| `requires[]` | Skills that must run first |
| `unlocks[]` | Skills this one enables |
| `inputs[]` | Required input parameters |
| `output_format` | Structured output contract |
| `model_hint` | `gemini-3-flash` (fast) or `gemini-3-pro` (heavy reasoning) |
| `version` | Skill version for cache-busting |

## Execution Pipeline

```
0-orchestrator                 create-module (all-in-one, 14 steps)
        |
1-analysis                     analyze-schema
        |
2-scaffold     generate-store → generate-supabase-schema → generate-views
                                                              |
                                                       generate-route
                                                       generate-i18n
                                                       image-upload-spec
        |
3-testing                      generate-e2e, workflow-test
```

## Skill Index

### Orchestrator
- [create-module](create-module/skill.md) — End-to-end CRUD module (SQL → views → tests)

### Phase 1: Analysis
- [analyze-schema](analyze-schema/skill.md) — Confirm entity fields + relationships

### Phase 2: Scaffold
- [generate-store](generate-store/skill.md) — Types + Pinia + Supabase CRUD
- [generate-supabase-schema](generate-supabase-schema/skill.md) — SQL migrations + RLS
- [generate-views](generate-views/skill.md) — Vue list/detail/form/drawer
- [generate-route](generate-route/skill.md) — Vue Router module
- [generate-i18n](generate-i18n/skill.md) — zh-CN + en-US translations
- [image-upload-spec](image-upload-spec/skill.md) — Image upload + crop modal

### Phase 3: Testing
- [generate-e2e](generate-e2e/skill.md) — E2E test scenarios
- [workflow-test](workflow-test/skill.md) — Playwright + workflow config

### Reference (always-on context)
- [staging](staging/skill.md) — Mock / Supabase / default mode switching
- [ui-standardization](ui-standardization/skill.md) — Divider + Card layout conventions
- [supabase-auth-architecture](supabase-auth-architecture/skill.md) — Multi-project auth schemas
- [supabase-rls-rbac-design](supabase-rls-rbac-design.md) — RLS + RBAC + JWT hooks
- [mcp-supabase-postgres-connection](mcp-supabase-postgres-connection.md) — MCP PostgreSQL setup

## Router Contract

The Gemini 3 Flash router should:
1. Match user input against `triggers[]` (cheap literal match first, semantic fallback)
2. Resolve `requires[]` dependencies and warn if prerequisites unmet
3. Load only the matched skill's body (lazy-load — frontmatter alone is enough to route)
4. Route to `model_hint` — `gemini-3-flash` for light scaffold, `gemini-3-pro` for orchestration
5. Enforce the `output_format` contract in structured-output mode
