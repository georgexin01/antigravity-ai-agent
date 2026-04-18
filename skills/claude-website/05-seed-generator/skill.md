---
name: website-05-seed-generator
description: "Step 5. Generate seed SQL from legacy PHP/SQL source (CSV, old tables). Parser extracts rows into INSERT statements."
triggers: ["seed generator", "migrate legacy data", "csv to sql", "migration step 5"]
phase: 2-scaffold
requires: [website-04-security-lock]
unlocks: [website-06-data-injection]
inputs: [legacy_source_format, row_mapping]
output_format: sql_seed_file
model_hint: gemini-3-flash
version: 1.0
status: authoritative
date_created: "2026-04-17"
---

# Step 5 — Seed Generator (PHP/SQL Parser)

## When to Use
After RLS is locked. Before injecting data.

## Steps

1. Identify legacy source (CSV, old MySQL dump, PHP array).
2. Write parser `api/core/SeedGenerator.php`:
   - Read source
   - Map legacy columns → new schema columns
   - Output `INSERT INTO "table" (...) VALUES (...);` to `seeds/<date>.sql`
3. Validate generated SQL locally before running.

## Guardrails
- DO NOT commit generated seed files if they contain PII.
- DO NOT seed into anon-writable tables — bypass via `service_role` connection.
- STOP if column count mismatch between source and target.

## Verify
- `seeds/<date>.sql` passes `psql --dry-run` (syntax check)
- Spot-check 3 random rows against legacy source

## Rollback
- Don't execute the seed file. Delete it.
- If already executed: `DELETE FROM <table> WHERE id IN (...generated ids...)` or `TRUNCATE` if safe.
