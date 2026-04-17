---
name: website-09-ui-refactor
description: "Step 9. Refactor legacy PHP templates to pull from Supabase instead of MySQL/hardcoded arrays. Views become data-bound."
triggers: ["ui refactor website", "pull from supabase", "template data binding", "migration step 9"]
phase: 2-scaffold
requires: [website-08-router-integration]
unlocks: [website-10-brain-hardening]
inputs: []
output_format: php_templates
model_hint: gemini-3-flash
version: 1.0
status: authoritative
date_created: "2026-04-17"
---

# Step 9 — UI Refactoring (Pulling Data)

## When to Use
After router resolves entities. Replace hardcoded content with dynamic Supabase reads.

## Steps

1. For each template file (`views/home.php`, `views/about.php`, etc.):
   - Replace hardcoded arrays with `$supabase->get('<table>')` calls
   - Use PHP short-echo `<?= htmlspecialchars($row['title']) ?>` for safety
2. Keep display logic in templates — DB access stays in controllers.
3. Test each page for broken references, missing fields, empty states.

## Guardrails
- DO NOT forget `htmlspecialchars()` on any string from DB — XSS risk.
- DO NOT pull from Supabase inside loops — batch queries up front.
- STOP if a template depends on a legacy PHP session that wasn't migrated.

## Verify
- Every page renders with real Supabase data
- Page source contains no leftover hardcoded content
- Empty state (DB returns 0 rows) renders gracefully

## Rollback
- Revert template files individually from git. Restore legacy source as fallback.
