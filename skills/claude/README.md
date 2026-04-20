---
name: claude-admin
description: "Core CRUD, Supabase, and module generation engine for Vben Admin. Acts as the primary orchestrator for industrial-grade namespaced architecture."
triggers: ["claude", "vben admin", "admin", "module", "crud"]
phase: orchestrator
version: 1.0
---

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
- [create-module](analyze-schema/skill.md) — End-to-end CRUD module (SQL → views → tests)

### Phase 1: Analysis
- [analyze-schema](analyze-schema/skill.md) — Confirm entity fields + relationships

### Phase 2: Scaffold
- [generate-store](analyze-schema/skill.md) — Types + Pinia + Supabase CRUD
- [generate-supabase-schema](analyze-schema/skill.md) — SQL migrations + RLS
- [generate-views](analyze-schema/skill.md) — Vue list/detail/form/drawer
- [generate-route](analyze-schema/skill.md) — Vue Router module
- [generate-i18n](analyze-schema/skill.md) — zh-CN + en-US translations
- [image-upload-spec](analyze-schema/skill.md) — Image upload + crop modal

### Phase 3: Testing
- [generate-e2e](analyze-schema/skill.md) — E2E test scenarios
- [workflow-test](analyze-schema/skill.md) — Playwright + workflow config

### Reference (always-on context)
- [staging](analyze-schema/skill.md) — Mock / Supabase / default mode switching
- [ui-standardization](analyze-schema/skill.md) — Divider + Card layout conventions
- [supabase-auth-architecture](analyze-schema/skill.md) — Multi-project auth schemas
- [supabase-rls-rbac-design](supabase-rls-rbac-design.md) — RLS + RBAC + JWT hooks
- [mcp-supabase-postgres-connection](../../knowledge/3_domains/claude/mcp-supabase-postgres-connection.md) — MCP PostgreSQL setup

## Router Contract

The Gemini 3 Flash router should:
1. Match user input against `triggers[]` (cheap literal match first, semantic fallback)
2. Resolve `requires[]` dependencies and warn if prerequisites unmet
3. Load only the matched skill's body (lazy-load — frontmatter alone is enough to route)
4. Route to `model_hint` — `gemini-3-flash` for light scaffold, `gemini-3-pro` for orchestration
5. Enforce the `output_format` contract in structured-output mode
