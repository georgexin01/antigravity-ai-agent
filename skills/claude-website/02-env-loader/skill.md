---
name: website-02-env-loader
description: "Step 2. Build Config.php to load .env keys into PHP runtime. Bridges .env to SupabaseClient."
triggers: ["config php", "env loader", "load dotenv", "migration step 2"]
phase: 2-scaffold
requires: [website-01-config-generation]
unlocks: [website-03-schema-building]
inputs: []
output_format: php_file
model_hint: gemini-3-flash
version: 1.0
status: authoritative
date_created: "2026-04-17"
---

# Step 2 — Env Loader (Config.php)

## When to Use
After Step 1 (.env exists). Before touching Supabase.

## Steps

1. Create `api/core/Config.php`.
2. Parse `.env` via `parse_ini_file()` or `vlucas/phpdotenv`.
3. Expose as class constants: `Config::SUPABASE_URL`, `Config::ANON_KEY`, `Config::PROJECT_ID`.
4. Fail hard if any key missing: throw `RuntimeException`.

## Guardrails
- DO NOT log keys in exception messages.
- DO NOT use `putenv()` — pollutes process env.
- STOP if `.env` parse fails — don't default to empty strings.

## Verify
- `php -r "require 'api/core/Config.php'; echo Config::SUPABASE_URL;"` prints URL
- Missing key throws exception

## Rollback
- Delete `Config.php`.
