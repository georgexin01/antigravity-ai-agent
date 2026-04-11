# AI Claude Mode — Activation Protocol V6.0

PURPOSE: When user says "ai claude" in Gemini chat, activate Claude-Code Synergy mode.
Trigger: User says "ai claude", "claude mode", "admin mode", or "create module"
Effect: Switch from default Gemini design mode → Claude-Code Synergy (Director ↔ Architect)
Created: 2026-03-12 | V6.0 Upgraded: 2026-04-07
V6.0: Integrated Gemini 3 (Director) ↔ Gemma-4 (Architect) Synergy Protocol.

---

## ⛔ IMMUTABLE SKILLS LOCK (HIGHEST PRIORITY)

`skills/claude/` IS PERMANENTLY LOCKED.
The AI may ONLY READ these files as fixed references. NEVER write, edit, add, or delete anything inside `skills/claude/`.

All learning, synergy upgrades, and improvements are written to `knowledge/claude/` files ONLY.
MANTRA: Skills are the Law. Knowledge adapts around the Law.

---

## SECTION 0: INITIAL PROJECT BOOT SEQUENCE (MANDATORY STRICT)

Goal: Formalized Boot-and-Ask synchronization.

### 0.1 Strict Activation (New V5.1)
- Trigger: User says "ai claude".
- Action 1: Auto-open Claude Mode flags.
- Action 2: Read ALL 14 skill files/folders in `C:\Users\user\.gemini\antigravity\skills\claude-code\`.
- Action 3: STOP ALL EXECUTION.

### 0.2 Conditional Boot Checks (NEW)
Before asking any questions, AI MUST verify the current project state:
- Check 1 (`nodemodules`): If `nodemodules` directory exists, flag `pnpm install` as COMPLETED.
- Check 2 (`.claudeignore`): If `.claudeignore` / `.geminiignore` exist, flag Ignore Optimization as COMPLETED.
- Check 3 (Dev Stability): If the Active Projects tracker shows "Stable" or recently bug-fixed, flag Bug Fixing as COMPLETED.

### 0.3 The Dynamic Question Gate
- If ALL steps are COMPLETED, skip this gate entirely, do NOT show AskUserQuestion, and auto-resume from the last saved state (Section 0.5).
- If ANY step is missing, AI MUST present the `AskUserQuestion` template mentioning ONLY the missing steps.
- MANDATORY: Wait for explicit user confirmation if the question is shown.

### 0.3.5 Post-Confirmation Execution (FAST-TRACK WORLD RECORD)
Only execute the steps that are NOT yet COMPLETED:
- Step 0: ENVIRONMENT HARDENING (CRITICAL) — Before any pnpm commands, AI MUST read `knowledge/claude/vbenrecoveryhandbook.yaml` and run a "Zombie/Ghost Scan" for `C:\Users\user\node_modules` and orphan Node processes.
- Step 1: pnpm install — Direct execution. No heavy knowledge overhead.
- Step 2: .ignore Research & Deploy — Research possible ignore files and update `.claudeignore` / `.geminiignore`.
- Step 3: pnpm dev:local Health Check — Start dev server + verify local Supabase (Docker) connection status.
- Step 4: Instant Bug Fixing — Use skills for lightning-fast resolution of pre-existing errors (TS, Circular, Port mismatches).

---

## 🛑 STRICT DIRECTIVE: ZERO-COST LOCAL RESEARCH (Gemma-4)

Mandate: Save massive Cloud Tokens by delegating all heavy text processing, log analysis, and file searching to the local machine.

1. Schema Parsing: Do NOT send full `001initialschema.sql` dumps to Gemini. Gemma-4 parses the local file and returns a tiny Markdown summary.
2. Error Log Analysis: Do NOT dump raw Docker/Vite logs to Gemini. Gemma-4 scans locally and returns only the root cause.
3. Answering User Queries: If the user asks "how does the store work?", Gemma-4 generates the technical explanation locally. Gemini only formats the final output if needed.
4. Calculations: Any repetitive math, JSON formatting, or array generation is restricted to the local Gemma-4 agent.

---

## PATTERN 1: SMART CONSULTATION CARD (Before Any Module)

Source: Gemini `userpreferencedna.yaml` §Claude Mode Smart Consultation
Why: Passive checklist misses edge cases. Active analysis catches: 1:N relationships needing Layer Icons, image fields needing cropper, balance fields needing read-only guards.

### When to Trigger
- Before executing /create-module or any module skill
- AFTER user provides module name but BEFORE writing any code

### What AI Must Analyze
1. SCAN existing modules:
   - Query: what tables already exist in this schema?
   - Check: does a parent table exist for FK relationships?
   - Check: does a child table reference this new module?

2. PROPOSE logic (not just checklist):
   WRONG:  "Does this module have FK relationships?"
   CORRECT: "I see 'client' table exists. Teacher likely needs clientId FK. Should I add CellFkLink for client name in teacher list?"

3. DETECT patterns:
   - Field named "photo/avatar/image" → propose image upload spec
   - Field named "balance/salary/amount" → propose money field (RM, numeric 12,2)
   - Field named "parentId/clientId" → propose Layer Icon on parent list
   - Multiple status values → propose RadioGroup (≤3) or Select (>3)

---

## PATTERN 6: WAVE BATCHING (Within-Step Parallelism)

Source: Gemini batch execution pattern
Why: The 14 steps are sequential (SQL→Types→Store→Views). But WITHIN each step, multiple files can be created in parallel.

### Parallel Opportunities in 14-Step Pipeline
Step 6 — Mock Backend (6 files → 3 parallel batches):
  Batch A: db-wrapper + mock-db update (depend on each other)
  Batch B: list.ts + [id].ts (both read, independent)
  Batch C: index.post.ts + [id].put.ts + [id].delete.ts (all write, independent)

Step 8 — Drawers (3 files → parallel):
  All 3 drawers (create, edit, detail) can be created simultaneously

Step 12+13 — Route + i18n (parallel):
  Route file and i18n JSON files have no dependency on each other

Step 14 — Workflow Tests:
  Multiple workflow configs (standalone, instant, FK-link) can be parallel
