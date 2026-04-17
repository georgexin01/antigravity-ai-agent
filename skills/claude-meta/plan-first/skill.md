---
name: plan-first
description: "Sovereign Apex Orchestrator — Liquid-intent detection and surgical goal-mapping. Orchestrates all logic domains (Claude, Website, Frontend, Mobile, Logic) via Sovereign Logic Cascade. (V15.2)"
triggers: ["plan first", "build module", "new module", "start feature", "create crud", "ready to build", "full module", "new table", "new website", "frontend design", "webapp genesis"]
phase: 0-orchestrator
requires: []
unlocks: [analyze-schema, create-module, generate-supabase-schema, generate-store, generate-views, generate-route, generate-i18n, workflow-test, generate-e2e]
inputs: [user_intent, target_entity, project_context]
output_format: structured_plan_document
model_hint: gemini-3-pro
version: 15.2
status: authoritative
date_created: "2026-04-16"
date_updated: "2026-04-18"
---

# plan-first — Sovereign Apex Orchestrator (V15.2)

## ⚖️ THE APEX MANDATE
**Think, Simple, Surgical, Goal-Driven.**
Upfront reasoning is non-negotiable. Plan first, stop for approval, then execute with terminal-verified reality.

## Steps

### Step 0 — NOISE REDUCTION (PRINCIPLE 13)
Inject or verify `.geminiignore` at project root. Ensure current session is isolated from background noise (logs, metadata) before starting the logic cascade.

### Step 1 — SOVEREIGN LOGIC CASCADE (RECURSIVE)

Instead of linear matching, use recursive path verification:
1. **Identify Target**: Verify exists via `Test-Path` or `GLOBAL_ATLAS.yaml`.
2. **Domain Mapping (APEX UPDATED)**: 
   - *Logic/Backend/Auth*: Route to `skills/claude/`
   - *Frontend/Design/Website*: Route to `skills/normal/`
   - *Web-Automation*: Route to `skills/faucet/` or `skills/openclaw/`
3. **Signature Scan**: Match user tokens against `skills/claude/INDEX.md` or specialist nodes.
4. **Reality Check**: If target logic exists, compare current state with goal. If 100% parity, STOP (Simplicity First).

### Step 2 — LOAD RECIPE
Map the winning intent to a Skill Chain from the authoritative Atlas.

### Step 3 — BUILD PLAN DOCUMENT (APEX HUD)

Fill this template (Clinical HUD format):

```markdown
# [🔪 APEX PLAN] | [⚡ MODE: {recipe_name}] | [🎯 GOAL: {target_entity}]

## ⚖️ INTENT & SUCCESS CRITERIA
- **Intent**: {one sentence restating goal}
- **Success Criteria**: {verifiable terminal state}

## 🧬 SOVEREIGN LOGIC CASCADE
1. {skill-name} — {surgical action}
2. ...

## 🏗️ MICRO-VERIFICATION CHECKPOINTS
- [ ] **Check 1**: Run {command} to verify {state}
- [ ] **Check 2**: Run {command} to verify {state}

## 🛡️ ROLLBACK PROTOCOL
- Failure at Step {N} -> {undo action}

[⚡ STATUS: PENDING_APPROVAL]
> **Reply "go" to execute.**
```

### Step 4 — PRESENT + STOP
Output the plan. DO NOT proceed until user handshake received.

### Step 5 — EXECUTION & MICRO-VERIFICATION
For each step in the cascade:
1. Execute surgical change.
2. **Micro-Verify**: Run terminal check (`node -l`, `php -l`, `Test-Path`).
3. If Pass -> Log checkpoint.
4. If Fail -> STOP immediately. Offer rollback.

### Step 6 — FINAL HUD REPORT
Generate a clinical summary of files touched and verification status.

## Output Contract
Plan saved to `C:/Users/user/.gemini/antigravity/brain/tactical/plan_{timestamp}.md`.

## Guardrails
- **Zero speculation**: Solve only the immediate goal.
- **Surgicality**: Touch ONLY the files needed for the success criteria.

---
**plan-first V15.2 — 2026-04-18 · Karpathy Apex Edition**
