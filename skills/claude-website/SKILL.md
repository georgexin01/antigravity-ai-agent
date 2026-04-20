---
name: claude-website
description: "V7.0 Sovereign PHP + Supabase REST orchestrator — 13-step pyramid for building a Sovereign\\ namespaced backend API. Each step is a self-sufficient code vault (copy-paste ready). No external template folders required."
triggers: ["claude website", "php supabase", "sovereign rest", "sovereign query", "psr-4", "composer autoload", "crud engine", "agent landing", "new website module", "claude-website"]
phase: 0-orchestrator
version: 7.0
status: authoritative
last_updated: "2026-04-20"
---

# `claude-website` — Sovereign PHP + Supabase REST Protocol V7.0

## 🎯 When to Use

Initializing or refactoring a Sovereign PHP backend (public landing pages, agent profiles, reviews, lead capture). Use this as the authoritative orchestrator for the **13-Step PHP API Lifecycle**.

This skill is **self-sufficient** — every step contains its own copy-paste Code Vault. The reference template `website-BE/` is no longer required.

## 🧭 Folder Anchors (the 6 pillars of `api/`)

The website's `api/` layer has six load-bearing folders/files. Every step below anchors to one of them:

| `api/` Folder | Role | Owning Step |
|---|---|---|
| `api/core/` | `SupabaseClient.php`, `SovereignQuery.php`, `.env` loader | **07** + env in **01** |
| `api/Models/` | CRUD + `format()` alias override per entity | **08** |
| `api/Controllers/` | `processResourceRequest` / `processCollectionRequest` orchestration | **09** |
| `api/Lib/` | `ErrorHandler.php` — global catch, CORS, JSON envelopes | **10** |
| `api/v1/` | Endpoint adapters (one `.php` per resource) | **11** |
| `api/vendor/` | Composer PSR-4 autoload (`Sovereign\` namespace) | **03** |

## 🚀 The 13-Step Sovereign Protocol

### Phase 1 — Foundation (config, env, autoload, schema)
1. **[01-config-generation](../claude/analyze-schema/skill.md)** — `.env` + `.env.production` with VITE_-prefixed Supabase keys; folder layout genesis.
2. **[02-env-loader](../claude/analyze-schema/skill.md)** — `api/Config.php` — `const Sovereign\Config`, dotenv parsing, env-block switching.
3. **[03-composer-autoload](../claude/analyze-schema/skill.md)** — `composer.json` PSR-4 (`Sovereign\\`) + files autoload; `composer dump-autoload` runbook.
4. **[04-schema-building](../claude/analyze-schema/skill.md)** — Relational SQL DDL in `quizLaa` schema; UUID PKs; soft-delete + timestamps.
5. **[05-security-lock](../claude/analyze-schema/skill.md)** — RLS policies: `anon_insert_access`, soft-delete filter, casing-sync COALESCE.
6. **[06-seeding](../claude/analyze-schema/skill.md)** — Seed generator + `psql` bulk injection; FK integrity verification.

### Phase 2 — Sovereign Engine (REST client, Models, Controllers, errors)
7. **[07-rest-client](../claude/analyze-schema/skill.md)** — `api/core/SupabaseClient.php` + `SovereignQuery.php` — fluent chain, `single()` envelope extraction, custom headers.
8. **[08-models-layer](../claude/analyze-schema/skill.md)** — `api/Models/` — `BaseModel` + entity models, `format()` override for DB→template key aliasing.
9. **[09-controllers-layer](../claude/analyze-schema/skill.md)** — `api/Controllers/` — `BaseController` + entity controllers, `processResourceRequest` / `processCollectionRequest`.
10. **[10-error-handler](../claude/analyze-schema/skill.md)** — `api/Lib/ErrorHandler.php` — global exception catch, CORS preflight, JSON error envelope.

### Phase 3 — Endpoint Adapters + UI + Brain
11. **[11-router-v1-endpoints](../claude/analyze-schema/skill.md)** — `api/v1/*.php` adapters + root `index.php` (static passthrough) + `router.php` (get/post dispatch) + UUID-only resolution.
12. **[12-ui-refactor](../claude/analyze-schema/skill.md)** — PHP templates, `htmlspecialchars()` discipline, "No Profile Image" fallback, server-rendered landing/review pages.
13. **[13-brain-hardening](../claude/analyze-schema/skill.md)** — Summarize architecture into `3_domains/claude/LAA_PROJECT_SNAPSHOT.md`; save session memory.

## 📖 Reference Vaults

- **Cookbook**: `_cookbook.md` `(file removed)` — reusable snippets (SovereignQuery chain examples, Model.format pattern, static passthrough guard, error envelope).
- **Master Rules**: [`MASTER_RULES.md`](../../knowledge/3_domains/claude/MASTER_RULES.md) — Rule #1 (Supabase schema isolation) is the law.
- **Apex Kernel**: [`GROUND_KERNEL.md`](../../knowledge/0_apex/GROUND_KERNEL.md)

## 🛠️ Mandatory Execution Rules

- **CLINICAL SEQUENCING** — execute 01 → 13 in order for a new website. For targeted edits, enter at the step owning the folder you're touching (see Folder Anchors), but re-verify the `requires:` chain in that step's frontmatter.
- **SCHEMA ISOLATION (Rule #1)** — every query reads from the project schema (`quizLaa` for quizLaa-family sites). NEVER write to `public.*` from a project Model.
- **ENVELOPE GUARD** — `SovereignQuery::get()` returns record data directly when `single()` is used; pages never parse `data['data']`.
- **UUID AUTHORITATIVE** — relational binding uses UUIDs (e.g., `agent_profile_id`), not string slugs.
- **APIKEY-ONLY CLIENTS** — `SupabaseClient::request()` sends `apikey` header only (no `Authorization: Bearer` — PostgREST rejects duplicate JWT on anon requests).
- **STATIC PASSTHROUGH** — `index.php` must short-circuit JS/CSS/asset requests BEFORE autoload, or static files return HTML.

## ✅ Verify the Orchestrator

- `claude-website/` contains exactly 13 numbered sub-directories (01 → 13) + `SKILL.md` + `_cookbook.md`.
- Every sub-directory contains a `skill.md` with version ≥ 2.0 frontmatter and a 📦 Code Vault section.
- `SKILL.md` links every sub-directory exactly once.
- Legacy `website-api-connection/` folder is either retired or replaced by a pointer to this index.
- Zero references to `C:\Users\user\.claude\skills\*` (deprecated mirror path).

---
**Protocol Status**: V7.0 Active | **Architect**: Claude-Website | **Self-Sufficient**: Yes (website-BE not required)
