---
name: claude-website
description: "V5.0 Sovereign orchestrator for PHP + Supabase REST websites. Covers full API re-architecture: categorized API folder, SupabaseConfig, dynamic SEO slug routing, and 10-step migration template for legacy projects."
triggers: ["claude website", "php supabase", "api re-architecture", "dynamic routing", "10-step migration", "sovereign rest", "seo slug"]
phase: 0-orchestrator
requires: []
unlocks: []
inputs: [project_name, legacy_database_schema]
output_format: migration_checklist
model_hint: gemini-3-pro
version: 5.0
status: authoritative
date_created: "2026-04-16"
---

# claude-website — Sovereign PHP + Supabase REST Protocol

## When to Use

Initializing a new PHP website OR migrating a legacy website to Supabase REST. Covers API folder structure, SEO-slug routing, config bridging, and the full 10-step migration template.

> For architectural concepts & "why" behind decisions, read: `file:///C:/Users/user/Desktop/admin-panel-quizLaa/.gemini/antigravity/knowledge/claude-website/architecture_wisdom.md`.

## Steps

### 1. TRIGGER: THE API RE-ARCHITECTURE FLOW

Use this flow whenever initializing a new website or migrating a legacy project.

#### Step 1a — Initialize Categorized API Folder
```bash
mkdir -p api/core api/v1/profiles api/v1/reviews
```

#### Step 1b — Configure Sovereign Environment
1. Populate `api/core/.env`.
2. Link keys to `api/core/SupabaseConfig.php`.

#### Step 1c — Initialize the REST Bridge
Mount `api/core/SupabaseClient.php` at the top level of landing pages:
```php
require_once __DIR__ . '/api/core/SupabaseClient.php';
$supabase = new SupabaseClient();
```

### 2. TRIGGER: DYNAMIC ROUTING & FALLBACK

Always ensure the landing page can handle multiple entry points (SEO Slugs vs. Direct Queries).

**Code Pattern:**
```php
$slug = $_GET['slug'] ?? $_GET['url'] ?? '';
// ... extract from URI if URL is empty
```

### 3. THE 10-STEP MIGRATION TEMPLATE

1. **Config Generation** (.env)
2. **Env Loader** (Config.php)
3. **Schema Building** (SQL Table/FK)
4. **Security Lock** (RLS Select-Only)
5. **Seed Generator** (PHP/SQL Parser)
6. **Data Injection** (Seeding)
7. **REST Client Construction** (SupabaseClient.php)
8. **Router Integration** (index.php)
9. **UI Refactoring** (Pulling Data)
10. **Brain Hardening** (Update .gemini)

## Guardrails

- DO NOT expose service-role keys in PHP client code — anon key only.
- DO NOT store Supabase credentials in git — use `api/core/.env` and add to `.gitignore`.
- STOP at Step 4 (Security Lock) if RLS policies aren't written first — public writes are a data breach.
- NEVER skip Step 10 (Brain Hardening) — undocumented projects lose institutional memory.

## Verify

- `api/core/.env` exists and is gitignored
- `SupabaseClient::query()` returns 200 with anon key
- Slug routing resolves `/page/about` → correct content
- All 10 migration steps produce named artifacts

## Rollback

- Step 3 (Schema) failure → `DROP SCHEMA CASCADE` on the attempted schema, restore prior DB dump.
- Step 8 (Router) failure → restore previous `index.php` from git.
- Step 9 (UI) failure → revert last commit touching `views/` or equivalent.

## Output Contract

A checklist file `migration_checklist_{project}.md` with pass/fail per step + artifact paths.

---
**claude-website V5.0 — Secured Execution Protocol (PHP + Supabase REST) — 2026-04-16**
