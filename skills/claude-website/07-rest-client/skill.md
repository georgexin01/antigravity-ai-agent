---
name: website-07-rest-client
description: "Step 7. Build SupabaseClient.php — PHP REST wrapper with query(), get(), insert(), auth headers, retry."
triggers: ["rest client", "supabaseclient.php", "php supabase wrapper", "migration step 7"]
phase: 2-scaffold
requires: [website-06-data-injection]
unlocks: [website-08-router-integration]
inputs: []
output_format: php_file
model_hint: gemini-3-flash
version: 1.0
status: authoritative
date_created: "2026-04-17"
---

# Step 7 — REST Client Construction (SupabaseClient.php)

## When to Use
After seeds loaded. Before touching any landing page.

## Steps

1. Create `api/core/SupabaseClient.php`.
2. Methods:
   - `get(string $table, array $filters = [])`
   - `single(string $table, string $id)`
   - `insert(string $table, array $row)` — uses service_role if admin mode
   - `query(string $rpc, array $args)` — Postgres function call
3. Use `Config::ANON_KEY` + `apikey` + `Authorization: Bearer` headers.
4. Wrap in `try/catch` — return `null` on 404, throw on 500.

## Guardrails
- DO NOT hardcode keys in client — use Config class.
- DO NOT catch and silently swallow 401/403 — log and throw.
- STOP if `curl_error()` returns anything other than empty string.

## Verify
- Unit test: `(new SupabaseClient())->get('pages')` returns array
- 404 on non-existent id returns `null`, not exception
- `apikey` header present in every request (check via proxy)

## Rollback
- Delete `SupabaseClient.php`. Revert any require_once lines.
