---
name: website-04-security-lock
description: "Step 4. Apply RLS (Row-Level Security) policies. Anon role gets SELECT-only on display tables; writes restricted or blocked."
triggers: ["website rls", "security lock", "anon read only", "migration step 4"]
phase: 2-scaffold
requires: [website-03-schema-building]
unlocks: [website-05-seed-generator]
inputs: []
output_format: sql_rls_policies
model_hint: gemini-3-flash
version: 1.0
status: authoritative
date_created: "2026-04-17"
---

# Step 4 — Security Lock (RLS Select-Only)

## When to Use
Immediately after Step 3 — before any seeding or public traffic.

## Steps

1. For each public-visible table:
   ```sql
   ALTER TABLE <table> ENABLE ROW LEVEL SECURITY;
   CREATE POLICY "anon_read" ON <table>
     FOR SELECT TO anon USING ("isDelete" = false);
   ```
2. For authenticated-only tables: grant `authenticated` full access; deny `anon`.
3. For write operations from website forms: use an edge function with service-role, never anon INSERT.
4. Test anon policy: `curl "$SUPABASE_URL/rest/v1/<table>?select=*"` with anon key — should only return non-deleted rows.

## Guardrails
- DO NOT enable RLS without at least one SELECT policy — locks the table entirely.
- DO NOT grant anon INSERT/UPDATE/DELETE — always route writes through edge functions.
- STOP if `isDelete` filter missing from SELECT policy.

## Verify
- `\d+ <table>` shows RLS enabled
- Anon SELECT returns only `isDelete=false` rows
- Anon INSERT returns 401 or 403

## Rollback
- `DROP POLICY "anon_read" ON <table>; ALTER TABLE <table> DISABLE ROW LEVEL SECURITY;`
