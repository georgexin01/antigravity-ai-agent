---
name: website-08-router-integration
description: "Step 8. Wire SupabaseClient into index.php and SEO slug routing. Handles /page/about, /review/123, URL fallback."
triggers: ["router integration", "index.php routing", "seo slug php", "migration step 8"]
phase: 2-scaffold
requires: [website-07-rest-client]
unlocks: [website-09-ui-refactor]
inputs: []
output_format: php_router
model_hint: gemini-3-flash
version: 1.0
status: authoritative
date_created: "2026-04-17"
---

# Step 8 — Router Integration (index.php)

## When to Use
After SupabaseClient works. Before UI refactor.

## Steps

1. In `index.php`:
   ```php
   require_once __DIR__ . '/api/core/SupabaseClient.php';
   $supabase = new SupabaseClient();

   $slug = $_GET['slug'] ?? $_GET['url'] ?? '';
   if (!$slug) {
       // Fall back: extract from request URI
       $slug = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
   }
   ```
2. Resolve slug → entity via `$supabase->single('pages', $slug)` or `get('pages', ['slug' => $slug])`.
3. 404 if not found — render `/views/404.php`.
4. Pass entity to template rendering.

## Guardrails
- DO NOT trust `$_GET['slug']` without validation.
- DO NOT expose DB errors to user — log internally, show generic 404/500 page.
- STOP if slug resolution yields >1 row (data integrity issue).

## Verify
- `/page/about` loads correct entity
- `/page/nonexistent` returns 404
- `/?slug=about` and `/?url=about` both work

## Rollback
- Revert `index.php` to previous git version.
