---
name: webapp-supabase-creation-skills
description: "Project-level checklist for syncing a new admin relational table into webApp-LAA-quiz-v2. Read-side store, visibility gates, intersection pattern, fail-closed direct-URL guards."
triggers: ["webapp new table", "webapp sync admin", "assignment filter checklist", "webapp supabase creation"]
phase: 2-scaffold
requires: []
unlocks: []
inputs: [entity_name, relation_key]
output_format: checklist_result
model_hint: gemini-3-flash
version: 1.0
status: authoritative
date_created: "2026-04-17"
---

# Claude Frontend WebApp Supabase Creation Skills

Use this checklist when syncing a new admin relational table into `webApp-LAA-quiz-v2`.

## 1) Read-side type/store
- Add `src/types/<entity>.ts` with only fields needed by web UI.
- Add `src/stores/<entity>.ts` with read-focused methods (`getByUser`, `getByParent`).
- Keep store fail-closed: on missing user context, return empty arrays.

## 2) Visibility gates
- Home/list pages must query by relation key (example: `user_lessons.userId`).
- Detail/video/quiz routes must guard direct URL access via relation existence checks.
- If relation check fails, redirect to list page.

## 3) Intersection pattern
- Build intersection set from:
  - assigned entity IDs
  - entities that are valid for display (e.g., non-deleted, has questions)
- Display only intersection output.

## 4) History and analytics
- Keep history hydration robust if source entities are soft-deleted.
- Avoid exposing unassigned parent data in historical lookups where possible.

## 5) Verification
- User with assignments sees only assigned records.
- User with zero assignments sees empty state.
- Direct URL to unassigned detail/video/quiz is blocked and redirected.

## Assign Lessons policy
- Source of truth is admin table `quizLaa.user_lessons`.
- WebApp must never fall back to all lessons when assignments are empty.
