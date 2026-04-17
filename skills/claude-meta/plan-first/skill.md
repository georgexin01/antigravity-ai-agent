---
name: plan-first
description: "Orchestrator. Detects task intent, maps to a Flow Recipe, builds a written execution plan with checkpoints, presents plan to user for approval BEFORE any execution skill fires. Forces upfront reasoning so Gemini 3 Flash / Claude can pre-compute the full chain instead of sleepwalking step-by-step."
triggers: ["plan first", "build module", "new module", "start feature", "create crud", "ready to build", "full module", "new table"]
phase: 0-orchestrator
requires: []
unlocks: [analyze-schema, create-module, generate-supabase-schema, generate-store, generate-views, generate-route, generate-i18n, workflow-test, generate-e2e]
inputs: [user_intent, target_entity, project_context]
output_format: structured_plan_document
model_hint: gemini-3-pro
version: 1.0
status: authoritative
date_created: "2026-04-16"
---

# plan-first — Upfront Reasoning Orchestrator

## When to Use

Whenever the user requests a multi-step task (new module, new table, relational CRUD, migration, feature build). Run THIS skill FIRST. Produce a written plan. Get approval. Only then delegate to execution skills.

## Why Upfront Reasoning

Gemini 3 Flash is keyword-matched + latency-optimized. It does NOT deep-reason across 10 steps mid-execution. If you skip planning:
- Flash jumps to step 1, loses context before step 10
- Cross-step dependencies go undetected
- Rollback is impossible when you don't know where you are

**Fix:** Use `gemini-3-pro` ONCE to produce the plan, then delegate per-step work to Flash skills. Pro reasons — Flash executes. Token cost: +1 Pro call, save N Flash re-reasonings.

## Steps

### Step 1 — DETECT INTENT (two-stage)

**Stage 1a — Combinatorial Signature Scan (preferred)**

Read `C:/Users/user/.gemini/antigravity/knowledge/claude/INDEX.md` → "Intent Detection — Combinatorial Signatures" section. Run the mechanical signature scan:

1. Lowercase user message, strip punctuation/glue words ("+", "with", "and", "the", "for")
2. Extract token set
3. Score each signature (how many of its tokens present in user's set)
4. Pick signatures scoring ≥ their `min_match` threshold

**Stage 1b — Resolve**

- **1 winner** → proceed with that recipe, skip to Step 2
- **2+ tied winners** → ASK user to disambiguate. Present each option with 1-line description. STOP here until user picks.
- **0 meet threshold** → Stage 1c

**Stage 1c — Literal Trigger Fallback**

Match against this minimal table (only fires when signatures don't):

| Literal phrase | Recipe |
|---|---|
| "new table", "add table", "junction table", "m2m" | `RELATIONAL_TABLE` |
| "new module", "full crud", "create module" | `FULL_CRUD` |
| "new webapp", "genesis", "handshake" | `WEBAPP_GENESIS` |
| "new project", "auth setup", "rls" | `AUTH_RLS_SETUP` |
| "image upload", "avatar" | `IMAGE_UPLOAD` |
| "test cases", "e2e", "workflow test" | `TESTING_PIPELINE` |
| "migrate website", "php supabase" | `WEBSITE_MIGRATION` |

If still no match → ASK user to clarify. DO NOT guess.

### Step 2 — LOAD RECIPE (from INDEX.md)

Read `C:/Users/user/.gemini/antigravity/knowledge/claude/INDEX.md` → Flow Recipes table. Copy the skill chain for the matched recipe.

### Step 3 — BUILD PLAN DOCUMENT

Fill this template (structured output contract — do NOT deviate):

```markdown
# Execution Plan: {recipe_name} — {target_entity}

## Intent
{one sentence restating what user wants}

## Skill Chain
1. {skill-name} — {one-line purpose} — estimated tokens: {N}
2. ...

## Inputs Needed
- {input 1}: {current value or UNKNOWN}
- ...

## Checkpoints (pause here)
- After step {N}: verify {specific artifact exists}
- After step {M}: verify {DB migration applied}

## Risks / Unknowns
- {thing that could fail} → {mitigation}

## Rollback Plan
- Step {N} failure → {undo action}

## Estimated total: {X} steps, ~{Y} tokens, {Z} files touched
```

### Step 4 — PRESENT + WAIT

Output the plan document. End with:
> **Reply "go" to execute, or edit the plan.**

STOP. Do not call any other skill yet.

### Step 5 — ON APPROVAL: DELEGATE

For each step in the Skill Chain:
1. Invoke the named skill (Flash-speed execution)
2. After skill returns → run its `verify:` checks
3. If verify fails → STOP, report, offer rollback
4. If verify passes → checkpoint log, continue

### Step 6 — FINAL REPORT

After last step, emit a one-page summary:
- Files created/modified (paths)
- DB changes applied
- Verify status per step
- Known issues deferred
- Next suggested action

## Output Contract

Every `plan-first` invocation produces ONE plan document saved at:
`C:/Users/user/.gemini/antigravity/brain/plans/plan_{timestamp}_{recipe}.md`

Structured. Re-readable. Re-runnable.

## Guardrails

- DO NOT skip Step 4 (user approval). The whole point is upfront review.
- DO NOT mix planning and execution in one turn. Plan → stop → approve → execute.
- DO NOT call `create-module` or any execution skill before Step 5.
- STOP if Intent Detection (Step 1) matches zero rows — ask user.
- STOP if user's plan edit contradicts a LOCKED skill's preflight.
- NEVER proceed past a failed checkpoint without explicit user "continue".

## Model Hint Strategy

- THIS skill: `gemini-3-pro` (heavy reasoning to build the plan once)
- DOWNSTREAM skills: `gemini-3-flash` (fast scaffolding, consumes pre-built plan)

## Verify

- Plan document saved to `brain/plans/` path
- User has replied with "go" or edit
- All referenced skills exist in INDEX.md routing tables

## Rollback

- If user cancels after plan → delete plan file, reset.
- If execution fails mid-chain → run each completed step's `rollback:` in reverse order.

---
**plan-first V1.0 — 2026-04-16 · Author: Claude Opus 4.6**
