---
name: website-10-brain-hardening
description: "Step 10 (final). Document the migrated project in .gemini/ — schema snapshot, env keys, route map, seed manifest. Institutional memory for future AI sessions."
triggers: ["brain hardening", "document migration", "update .gemini", "migration step 10"]
phase: 3-testing
requires: [website-09-ui-refactor]
unlocks: []
inputs: []
output_format: knowledge_snapshot
model_hint: gemini-3-flash
version: 1.0
status: authoritative
date_created: "2026-04-17"
---

# Step 10 — Brain Hardening (Update .gemini)

## When to Use
Final step. After UI is live. Before ticket closure.

## Steps

1. Write `<project>/.gemini/knowledge/project-snapshot.md`:
   - Schema summary (tables + FK diagram)
   - Env keys (names only, NOT values)
   - Route map (slug → entity)
   - Seed source + row counts
   - Known limitations
2. Write `<project>/.gemini/knowledge/rollback-recipes.md`:
   - Per-step rollback if a later change breaks something
3. Add a single line to the user's global `knowledge/claude/INDEX.md` under "Project-Level Knowledge" pointing to the new snapshot.

## Guardrails
- DO NOT dump real secrets into the snapshot.
- DO NOT skip this step — undocumented projects lose institutional memory.
- STOP if INDEX.md update would duplicate an existing entry (check first).

## Verify
- `project-snapshot.md` exists with all 5 sections
- Global `INDEX.md` has one new row pointing to it
- A fresh AI session can read snapshot and understand the project without reading code

## Rollback
- Delete the snapshot file. Revert INDEX.md line.
