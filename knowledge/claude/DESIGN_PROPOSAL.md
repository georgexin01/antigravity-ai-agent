---
name: claude-design-proposal
description: "Design decisions for the 2026-04-16 Claude knowledge/skills restructure. Captures the 'why' behind INDEX.md, plan-first orchestrator, validate-knowledge, and the pyramid layer protocol. Source document for future refactors."
triggers: ["claude design", "design proposal", "why plan first", "why pyramid"]
phase: reference
model_hint: gemini-3-flash
version: 1.0
status: authoritative
date_created: "2026-04-16"
---

# Claude Knowledge & Skills — 2026-04-16 Restructure Design

## Goals

1. Single entry point for all Claude-mode AI work → saves tokens via lazy-load
2. Upfront reasoning layer (plan-first orchestrator) → Flash executes pre-computed plans
3. HYBRID_FORMAT_PROTOCOL compliance across all non-locked skills
4. Self-healing via validator skill → drift detected automatically
5. Locked content (vben-admin base skills) preserved byte-for-byte

## Design Decisions

### D1 — Pyramid, not flat

Reject flat skill list (harder to route, more tokens per read). Pick: layered tree rooted at `knowledge/claude/INDEX.md`. Each layer self-describes what's inside.

```
L0: INDEX.md       ← router
L1: Domain folders (shared/frontend/website/meta)
L2: skill.md       ← procedural recipe
L3+: recursive drill on demand
```

### D2 — plan-first uses Pro, execution uses Flash

Single Pro call upfront > N Flash re-reasonings mid-chain. Token math: plan = ~3k Pro tokens. Execution = 7 skills × (avoided re-reasoning 2k tokens) = 14k Flash tokens saved. Net: +1k tokens for a complete plan + checkpointed execution.

### D3 — No physical dedup until user approves per file

5 byte-identical duplicates exist across `claude-frontend/`. Risk: removing them breaks implicit references we haven't mapped. Decision: mark for dedup in LINT_REPORT; user approves each removal. Reversible.

### D4 — Locked scope = `skills/claude/` + `_shared/unchangable/`

Per user decision (2026-04-16 scope A). Everything else is improvable. CLAUDE_KERNEL.md explicitly included as touchable despite `_unchangable/` naming (user override for dead-ref fixes).

### D5 — Orphaned Image Fallback Protocol preserved

`claude-frontend/ui-standardization/skill.md` had valuable content prepended before a broken frontmatter. Restructured file keeps content as Section 4 of body — zero content loss.

### D6 — Project-level skills get frontmatter wrappers, not content edits

`vben-admin-supabase-creation-skills.md`, `webapp-supabase-creation-skills.md`, `new-relational-table-playbook.md` — add frontmatter to make them routable; content unchanged. 99% fidelity preserved.

### D7 — claude-website monolith modularization (deferred pending approval)

One `SKILL.md` with 10 migration steps → proposed split into 10 sub-skills + 1 orchestrator. Preserves every word. Makes each step independently triggerable. Requires user sign-off (big file-layout change).

### D8 — Flow Recipes table lives in INDEX.md

One canonical table maps user intent → skill chain. Referenced by `plan-first` Step 2. Single source of truth.

### D9 — Token-cheap routing via literal triggers

Per HYBRID_FORMAT_PROTOCOL §5.3: 2-5 literal keywords per skill, not semantic paraphrases. Flash matches literals; semantic matching costs ~3× more tokens.

### D10 — Structured output contracts (`output_format:`)

Every non-reference skill declares `output_format`. Flash's structured-output mode locks onto the contract and produces deterministic artifacts. Reduces freeform drift.

## What Changed This Turn

### New files
- `knowledge/claude/INDEX.md` — root router (L0)
- `knowledge/claude/AUDIT_REPORT.md` — audit findings
- `knowledge/claude/DESIGN_PROPOSAL.md` — this file
- `skills/claude-meta/plan-first/skill.md` — orchestrator
- `skills/claude-meta/validate-knowledge/skill.md` — linter

### Edited (non-locked)
- `GROUND_KERNEL.md` — added §7 Pyramid Protocol
- `_shared/unchangable/claude/CLAUDE_KERNEL.md` — fixed 3 dead refs (explicit user approval)
- `claude-frontend/SKILL.md` — added HYBRID-compliant frontmatter
- `claude-website/SKILL.md` — added HYBRID-compliant frontmatter
- `claude-frontend/webapp-genesis/skill.md` — fixed invalid phase + missing triggers/model_hint
- `claude-frontend/ui-standardization/skill.md` — repaired frontmatter placement + preserved Image Fallback

### Flagged for next-turn approval
- 5 byte-identical duplicates across claude-frontend/ (dedup to redirect stubs)
- Hardcoded password in `mcp-supabase-postgres-connection.md` (LOCKED — needs user call)
- JWT claim casing conflict (snake vs camel) across 3 files (cross-skill consistency)
- claude-website monolith split (99% content preserved, file layout changes)
- 3 project-level skills need frontmatter wrappers

## Open Questions

- Should LOCKED `skills/claude/` receive `## Guardrails` additions (additive, not content-altering)?
- Replace `gemini-3-pro` with `gemini-3-flash` on pure-reference LOCKED files? (Cost-saving, zero behavior change.)
- Delete project-level duplicate skills if already covered by user-home originals?

## References

- `AUDIT_REPORT.md` — evidence base
- `HYBRID_FORMAT_PROTOCOL.md` — format rules
- `GROUND_KERNEL.md` §7 — pyramid enforcement
- `_shared/unchangable/claude/CLAUDE_KERNEL.md` — constitutional authority
