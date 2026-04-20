---
name: website-06-data-injection
description: "Step 6. Execute generated seeds into Supabase. Service-role connection bypasses RLS for initial bulk load."
triggers: ["data injection", "seed db", "bulk insert website", "migration step 6"]
phase: 2-scaffold
requires: [website-05-seed-generator]
unlocks: [website-07-rest-client]
inputs: []
output_format: seed_execution_log
model_hint: gemini-3-flash
version: 1.0
status: authoritative
date_created: "2026-04-17"
---

# Step 6 — Data Injection (Seeding)

## When to Use
After Step 5 produces a validated seed file.

## Steps

1. Connect with service-role key (bypasses RLS):
   ```bash
   psql "postgresql://postgres:<service_role>@localhost:5432/postgres" -f seeds/<date>.sql
   ```
2. Verify row counts:
   ```sql
   SELECT COUNT(*) FROM <table> WHERE "isDelete" = false;
   ```
3. Spot-check FK integrity:
   ```sql
   SELECT count(*) FROM <child> c LEFT JOIN <parent> p ON p.id = c.parentId WHERE p.id IS NULL;
   -- should be 0
   ```

## Guardrails
- DO NOT use anon key for seed loads — RLS will reject half the rows.
- DO NOT load seeds into production without first testing against a staging copy.
- STOP if row count differs >10% from legacy source.

## Verify
- Counts match legacy source (±10% tolerance for soft-deletes)
- Zero orphan FKs
- Studio UI renders seeded rows

## Rollback
- `TRUNCATE <table> RESTART IDENTITY CASCADE;` for the seeded table set.
