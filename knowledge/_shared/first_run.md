# FIRST RUN PROTOCOL — V15 (Read Before Everything)

> **PRIORITY**: GLOBAL RULE #1. This is the HIGHEST priority file in the entire system.
> **Trigger**: AI has NEVER seen this project before (first clone from GitHub).
> **Purpose**: Force AI to fully understand the Antigravity system before doing any work.

---

## DETECTION: IS THIS A FIRST RUN?

```
CHECK 1: Does _shared/session_cache.md contain a previous session fingerprint?
  → YES: This is NOT first run. Skip this file. Go to _shared/boot.md.
  → NO / EMPTY / FILE MISSING: This IS first run. Execute full read below.

CHECK 2: Does the AI recognize "Antigravity V15" as a known system?
  → YES: Not first run. Skip.
  → NO: First run. Execute full read.
```

---

## FIRST RUN: MANDATORY FULL READ (One-Time Only)

When this is the FIRST TIME an AI reads this system after cloning from GitHub,
AI MUST read the following files IN ORDER to fully understand the architecture.

**Estimated time**: ~60 seconds. This only happens ONCE.

### PHASE A: Understand the System Architecture (Read First)

```
ORDER  FILE                                    PURPOSE
─────────────────────────────────────────────────────────────────────
A.1    _shared/first_run.md                   ← You are here
A.2    knowledge_router_v4.md                  Understand 3-mode architecture
A.3    _shared/boot.md                         Understand boot sequence + P0/P1 rules
```

### PHASE B: Understand Each Mode (Read All 3 Configs)

```
ORDER  FILE                                    PURPOSE
─────────────────────────────────────────────────────────────────────
B.1    normal/mode_config.md                   Normal mode files + routing + predictions
B.2    claude/mode_config.md                   Claude mode pipeline + 7 patterns
B.3    faucet/mode_config.md                   Faucet mode protocol + audit rules
```

### PHASE C: Understand Core Knowledge (Scan Headers — Layer 1 Only)

```
ORDER  FILE                                          SCAN DEPTH
─────────────────────────────────────────────────────────────────────
C.1    normal/agent_core_protocol.md                 Headers + §1 + §4 + §6
C.2    normal/must_do_master_rules.md                Headers + gate list
C.3    normal/unified_app_blueprint.md               Headers + build order
C.4    normal/website_design_dna.md                  Headers + density rules
C.5    normal/user_preference_dna.md                 FULL READ (taste profile)
C.6    normal/design_vault/README.md                 Match engine rules
C.7    claude/ai_claude_protocol.md                  §0 boot + §1 patterns
C.8    faucet/mode_config.md                         Already read in B.3
```

### PHASE D: Build Internal Map

After reading all files, AI should internally construct:

```
SYSTEM MAP:
  ├── 3 modes: NORMAL, CLAUDE, FAUCET
  ├── Mode gate: strict folder isolation, no cross-reading
  ├── Boot: _shared/boot.md → detect mode → load mode_config.md
  ├── Normal mode: 6 task types (APP, WEBSITE, DESIGN, BUGFIX, ENHANCE, DEPLOY)
  ├── Claude mode: 14-step Vben admin pipeline
  ├── Faucet mode: precision earning with triple-layer audit
  ├── P0 rules: 12 critical rules (never skip)
  ├── P1 rules: 15 important rules (skip for BUGFIX/FAUCET)
  ├── User taste: dark gradients, white cards, Plus Jakarta Sans, bottom sheets
  └── Session: fingerprint save/restore between sessions
```

### PHASE E: Confirm Understanding

After full read, AI should respond with:

```
"Antigravity V15 system loaded. 3 modes detected: Normal, Claude, Faucet.
Mode gate active. Ready for your first instruction.
What would you like to work on?"
```

---

## AFTER FIRST RUN: SAVE FINGERPRINT

```
Write to _shared/session_cache.md:
{
  "mode": null,
  "project": "first_run_complete",
  "last_step": "system_initialization",
  "next_predicted": ["wait_for_user_instruction"],
  "first_run_completed": true,
  "timestamp": "[current ISO timestamp]"
}
```

This fingerprint ensures first_run.md is NEVER executed again.
All future sessions start from _shared/boot.md directly.

---

## WHY THIS MATTERS

```
WITHOUT first_run.md:
  → AI clones repo → starts working → misses mode isolation → reads wrong files
  → Wastes tokens → produces wrong output → user frustrated

WITH first_run.md:
  → AI clones repo → reads system architecture ONCE → understands everything
  → All future sessions: fast boot, correct mode, zero waste
  → One-time 60-second investment saves thousands of tokens across all sessions
```

---

## GLOBAL RULE #1 (Highest Priority in Entire System)

```
IF this is the first time ANY AI agent encounters this .gemini/antigravity system:
  → STOP all other work
  → Read _shared/first_run.md (this file)
  → Complete Phase A → B → C → D → E
  → Save fingerprint
  → THEN proceed with user's request

This rule OVERRIDES all other rules, modes, and protocols.
No exceptions. No shortcuts. Full read on first encounter.
```

---

_First Run Protocol V15 — One-time full system read for new AI agents (2026-04-02)_
_After first run: never read this file again. Boot from _shared/boot.md._
