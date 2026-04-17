---
name: website-01-config-generation
description: "Step 1 of claude-website migration. Generate .env with Supabase URL, anon key, project binding. First step before any PHP code."
triggers: ["website config", "generate env", "php .env", "migration step 1"]
phase: 2-scaffold
requires: []
unlocks: [website-02-env-loader]
inputs: [supabase_url, anon_key, project_id]
output_format: env_file
model_hint: gemini-3-flash
version: 1.0
status: authoritative
date_created: "2026-04-17"
---

# Step 1 — Config Generation

## When to Use

First step of new PHP + Supabase website or legacy migration. Before any SQL or PHP code.

## Steps

1. Create `api/core/.env` (gitignored).
2. Write keys:
   ```
   SUPABASE_URL=http://localhost:8000
   SUPABASE_ANON_KEY=<anon-key>
   PROJECT_ID=<uuid>
   ```
3. Add `api/core/.env` to `.gitignore` if not already.

## Guardrails
- DO NOT commit `.env` — service-role keys must never reach git.
- DO NOT put anon key in PHP client code — always read from `.env`.
- STOP if `.gitignore` doesn't block `.env`.

## Verify
- `cat api/core/.env` shows all 3 keys
- `git check-ignore api/core/.env` returns success

## Rollback
- Delete `api/core/.env`, revert `.gitignore` change.
