---
name: validate-knowledge
description: "Sovereign Apex Validator — Lints all skills + knowledge against HYBRID_FORMAT_PROTOCOL V1.2. Checks Apex compliance (Tier-0, Ignore Injection), broken path refs, and structural purity. (V15.2)"
triggers: ["validate knowledge", "lint skills", "apex audit", "audit format", "validate sovereign"]
phase: 3-testing
requires: []
unlocks: []
inputs: []
output_format: lint_report
model_hint: gemini-3-flash
version: 15.2
status: authoritative
date_created: "2026-04-16"
date_updated: "2026-04-18"
---

# validate-knowledge — Sovereign Apex Validator (V15.2)

## When to Use

- After any structural refactor or knowledge consolidation
- Before final mission sign-off
- To verify Crystal State (0-noise) integrity

## Steps

### Step 1 — SCAN

Walk these directories recursively:
- `C:/Users/user/.gemini/antigravity/skills/claude/`
- `C:/Users/user/.gemini/antigravity/skills/claude-meta/`
- `C:/Users/user/.gemini/antigravity/skills/faucet/`
- `C:/Users/user/.gemini/antigravity/skills/normal/`
- `C:/Users/user/.gemini/antigravity/knowledge/`

Collect every `.md` and `.yaml`.

### Step 2 — CHECK FRONTMATTER (per file)

For each `.md`:
- [ ] Opens with `---` on line 1
- [ ] Has required fields: `name`, `description`, `triggers`, `phase`, `model_hint`, `version`
- [ ] `model_hint` is `gemini-3-flash` or `gemini-3-pro`
- [ ] `triggers` is array of 2–5 literal strings
- [ ] No duplicate `name` across files

### Step 3 — CHECK PATH REFS

Grep each file for `file:///` and `C:/` absolute paths.
- [ ] Verify targets exist via `Test-Path`.
- [ ] Flag broken links as HIGH severity.

### Step 4 — CHECK CROSS-REFS

Verify that all `requires:` and `unlocks:` point to valid skills reachable in `GLOBAL_ATLAS.yaml`.

### Step 5 — CHECK DUPLICATES & DENSITY

- [ ] Identify files < 1KB (Potential merge targets).
- [ ] Identify >80% body similarity (Potential redundancy).

### Step 6 — CHECK LOCKED INTEGRITY (TIER-0)

For files under `skills/claude/`:
- [ ] Verify no unauthorized modifications (unless handshake matched).
- [ ] Ensure `GROUND_KERNEL` principles remain untouched.

### Step 7 — APEX PURITY AUDIT (NEW V15.2)

- [ ] **Principle 13**: Verify presence of root `.geminiignore`.
- [ ] **Noise Liquidation**: Verify zero `metadata.json` or `timestamps.json` in scanned paths.
- [ ] **HUD Compliance**: Verify all `walkthrough.md` files use the Clinical HUD format.

### Step 8 — WRITE REPORT

Save to `C:/Users/user/.gemini/antigravity/brain/tactical/LINT_REPORT_{date}.md`.

## Guardrails

- DO NOT edit files. Report only.
- STOP if scan finds >20 violations (Critical drift).

---
**validate-knowledge V15.2 — 2026-04-18 · Karpathy Apex Edition**
