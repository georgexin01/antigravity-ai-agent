---
name: website-03-schema-building
description: "Step 3. Draft SQL tables + FKs for website content (pages, profiles, reviews). Prepares schema before RLS lock in Step 4."
triggers: ["website schema", "sql tables website", "migration step 3", "php table schema"]
phase: 2-scaffold
requires: [website-02-env-loader]
unlocks: [website-04-security-lock]
inputs: [entity_list, relationship_map]
output_format: sql_migration
model_hint: gemini-3-flash
version: 1.0
status: authoritative
date_created: "2026-04-17"
---

# Step 3 — Schema Building (SQL Tables/FKs)

## When to Use
After Config.php exists. Before writing any PHP that hits Supabase.

## Steps

1. List entities (profiles, pages, reviews, tags, etc.).
2. Draft `CREATE TABLE` with:
   - `id uuid PRIMARY KEY DEFAULT gen_random_uuid()`
   - `createdAt`, `updatedAt`, `isDelete` (standard soft-delete set)
   - Foreign keys with `REFERENCES ... ON DELETE RESTRICT`
3. Add indexes on every FK + `isDelete`.
4. Apply via Supabase Studio SQL editor.
5. Verify in Studio table list.

## Guardrails
- DO NOT run DDL directly without Studio review.
- DO NOT skip `isDelete` — soft-delete is the convention.
- STOP if any FK references a non-existent table.

## Verify
- Every table visible in Studio
- `\d tablename` shows all columns + FKs
- Indexes present

## Rollback
- `DROP SCHEMA <name> CASCADE` OR `DROP TABLE <name>` per table in reverse FK order.
