---
name: validate-knowledge
description: "Lints all Claude-mode skills + knowledge against HYBRID_FORMAT_PROTOCOL V1.1. Checks frontmatter compliance, broken path refs, duplicate detection, trigger collisions, and locked-file integrity. Self-healing — flags issues, proposes fixes, writes a lint report."
triggers: ["validate knowledge", "lint skills", "check frontmatter", "audit format", "validate claude"]
phase: 3-testing
requires: []
unlocks: []
inputs: []
output_format: lint_report
model_hint: gemini-3-flash
version: 1.0
status: authoritative
date_created: "2026-04-16"
---

# validate-knowledge — Skill & Knowledge Linter

## When to Use

- After editing any skill or knowledge file
- Before committing changes to `.gemini/antigravity/`
- On a schedule (weekly) to catch drift
- When user says "lint" / "validate knowledge"

## Steps

### Step 1 — SCAN

Walk these directories recursively:
- `C:/Users/user/.gemini/antigravity/skills/claude/`
- `C:/Users/user/.gemini/antigravity/skills/claude-frontend/`
- `C:/Users/user/.gemini/antigravity/skills/claude-website/`
- `C:/Users/user/.gemini/antigravity/skills/claude-meta/`
- `C:/Users/user/.gemini/antigravity/knowledge/claude/`

Collect every `.md` and `.yaml`.

### Step 2 — CHECK FRONTMATTER (per file)

For each `.md`:
- [ ] Opens with `---` on line 1
- [ ] Has required fields: `name`, `description`, `triggers`, `phase`, `model_hint`, `version`
- [ ] `phase` is in enum: `constitutional | 0-orchestrator | 1-analysis | 2-scaffold | 3-testing | reference`
- [ ] `model_hint` is `gemini-3-flash` or `gemini-3-pro`
- [ ] `triggers` is array of 2–5 literal strings (no semantic paraphrases)
- [ ] No duplicate `name` across files

### Step 3 — CHECK PATH REFS

Grep each file for:
- `file:///` absolute paths
- `C:/` / `c:/` absolute paths
- Relative `./` / `../` paths

For each hit: verify the target exists. Flag misses.

### Step 4 — CHECK CROSS-REFS

For each file's `requires:` and `unlocks:`:
- [ ] Named skill exists in INDEX.md routing table
- [ ] No circular dependency (A requires B, B requires A)

### Step 5 — CHECK DUPLICATES

Hash the body (excluding frontmatter) of every skill. Report:
- Byte-identical pairs → recommend redirect-stub
- >80% similar pairs → recommend merge review

### Step 6 — CHECK LOCKED INTEGRITY

For files under `skills/claude/` (LOCKED) + `_shared/unchangable/`:
- [ ] No modifications since last validated timestamp
- [ ] Frontmatter required fields still present

### Step 7 — WRITE REPORT

Save to `C:/Users/user/.gemini/antigravity/knowledge/claude/LINT_REPORT_{date}.md` with:
- Pass/fail per file
- Specific violations per file with line numbers
- Severity: HIGH / MED / LOW
- Suggested fix per issue

## Output Contract

Lint report markdown file. No automatic edits. AI proposes, user approves.

## Guardrails

- DO NOT edit any file automatically. Report only.
- DO NOT touch `skills/claude/` or `_shared/unchangable/` content — just validate.
- STOP if scan finds >50 violations — likely protocol drift, escalate to user.
- NEVER claim "all green" without scanning every file.

## Verify

- Report file written
- Every scanned file appears in the report
- Report has explicit PASS or FAIL per file

## Rollback

N/A — validator is read-only.

---
**validate-knowledge V1.0 — 2026-04-16**
