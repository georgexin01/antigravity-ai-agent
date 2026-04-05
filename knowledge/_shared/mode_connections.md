# Mode Connections Map — V15 (Isolated)

> Modes are 100% ISOLATED. ZERO CROSS-READ POLICY.
> Each mode runs in its own folder with zero dependencies on other mode folders.
> This file defines the absolute boundaries for context safety.

---

## CONNECTION TYPES

```
TYPE 1: SHARED BRAIN (_shared/ folder)
  All 3 modes read _shared/. This is the connection layer.
  → boot.md: same P0 rules, same taste profile, same error triage
  → session_cache.md: fingerprint carries context between mode switches
  → hot_rules_cache.md: universal rules apply to all modes

TYPE 2: CROSS-READ DIRECTIVE (specific file only)
  A mode can reference ONE specific file from another mode.
  Written inside mode_config.md as: "CROSS-READ: [mode]/[file] §[section] ONLY"
  → Only that file + section is readable. Not the whole folder.

TYPE 3: SESSION HANDOFF (mode switch with context)
  When user switches mode, the old mode saves a fingerprint.
  New mode reads fingerprint and knows what happened before.
  → Example: Claude mode finishes module → user switches to Normal → Normal knows which module was just built and can design UI for it.

TYPE 4: SHARED LEARNING (_shared/learning_vault.md — future)
  When any mode discovers a reusable pattern:
  → Save to _shared/learning_vault.md (tagged with source mode)
  → All modes can read this vault for cross-pollination
  → Patterns stay tagged so AI knows which mode created them
```

---

## CROSS-READ MAP (ZERO CONTEXT BREACH)

### ALL MODES (Normal, Claude, Faucet):
*   **CROSS-READ POLICY**: `NONE`.
*   **EXCEPTION**: `_shared/` folder is the only universal source.
*   **ISOLATION**: 100% Folder-Lock active.

---

## MODE SWITCH FLOW (Context Preservation)

```
SCENARIO: Claude → Normal
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Claude finishes "Teacher" module (pipeline step 14 complete)
2. AI saves fingerprint to _shared/session_cache.md:
   {
     "mode": "CLAUDE",
     "project": "labour-management",
     "last_module": "Teacher",
     "last_step": "workflow_tests_complete",
     "handoff_context": "Teacher module has: name, phone, address, photo fields. FK to department.",
     "mode_switch_hint": "NORMAL"
   }
3. User says "now design the teacher profile page"
4. Boot detects: NORMAL mode
5. Normal reads session_cache → sees handoff_context
6. Normal knows Teacher module structure WITHOUT reading claude/ files
7. Normal loads user_preference_dna + design_vault → designs Teacher UI

SCENARIO: Normal → Claude
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Normal mode designs app UI (wireframes, color scheme decided)
2. AI saves fingerprint:
   {
     "mode": "NORMAL",
     "project": "labour-management",
     "design_tokens": {"primary": "#1E3A5F", "font": "Plus Jakarta Sans"},
     "handoff_context": "Design approved. 6 modules planned: Staff, Department, Attendance, Payroll, Leave, Reports.",
     "mode_switch_hint": "CLAUDE"
   }
3. User says "ai claude, create Staff module"
4. Claude reads session_cache → sees design_tokens + module plan
5. Claude starts pipeline with correct brand colors already known

SCENARIO: Normal → Faucet
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Normal finishes coding session
2. User says "ai faucet"
3. Faucet boots fresh — no handoff needed (independent domain)
4. Faucet uses only _shared/session_cache for its own state

SCENARIO: Faucet → Normal
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Faucet finishes earning session
2. User says "back to the website"
3. Normal boots → reads session_cache → restores last Normal state
4. Faucet state preserved in session_cache for next faucet session
```

---

## SHARED KNOWLEDGE THAT CONNECTS ALL MODES

```
UNIVERSAL (in _shared/):
  P0 rules         → All modes follow same critical rules
  Taste profile     → LOVES/HATES apply to Normal + Claude UI decisions
  Error triage      → Same error patterns apply everywhere
  Session state     → Fingerprint carries context across mode switches

MODE-SPECIFIC BUT REUSABLE:
  user_preference_dna.md (normal/)     → Claude can cross-read for UI taste
  theme-system.md (normal/design_vault) → Claude can cross-read for brand tokens
  Module Registry (claude/)            → Normal can check what modules exist
```

---

## SKILLS CONNECTION MAP

```
skills/_shared/agent-memory    → All modes can use for persistent memory
skills/normal/*               → ONLY Normal mode (design, frontend, mobile)
skills/claude-code/*          → ONLY Claude mode (admin, supabase, CRUD)
skills/faucet/*               → ONLY Faucet mode (earning automation)

SHARED PATTERNS BETWEEN SKILLS:
  Normal/tailwind-design-system ←→ Claude/ui-standardization
    → Both use Tailwind tokens. Claude's UI follows Normal's design system.
    → Connection: theme-system.md is the bridge (cross-read allowed).

  Normal/vue3-fnb-framework ←→ Claude/create-module
    → Both build Vue 3 apps. Claude modules plug INTO Normal's app shell.
    → Connection: unified_app_blueprint.md defines the app architecture.

  Normal/webapp-testing ←→ Claude/workflow-test
    → Both test apps. Different scope (UI testing vs CRUD workflow).
    → No direct connection needed. Independent testing domains.
```

---

## VISUAL: MODE ISOLATION + CONNECTIONS

```
┌─────────────────────────────────────────────────────┐
│                    _shared/                          │
│  boot.md │ session_cache.md │ hot_rules_cache.md    │
│  first_run.md │ mode_connections.md                  │
│                                                     │
│  ═══════════════════════════════════════════════════ │
│         ↑              ↑              ↑             │
│         │              │              │             │
│  ┌──────┴───────┐ ┌────┴──────┐ ┌────┴──────┐     │
│  │  NORMAL/     │ │  CLAUDE/  │ │  FAUCET/  │     │
│  │              │ │           │ │           │     │
│  │ 18 files     │ │ 4 files   │ │ 6 files   │     │
│  │ 24 skills    │ │ 17 skills │ │ 1 skill   │     │
│  │              │ │           │ │           │     │
│  │  APP         │ │  VBEN     │ │  VIEFAUCET│     │
│  │  WEBSITE     │ │  SUPABASE │ │  99FAUCET │     │
│  │  DESIGN      │ │  CRUD     │ │           │     │
│  │  BUGFIX      │ │  MODULE   │ │           │     │
│  │  ENHANCE     │ │           │ │           │     │
│  │  DEPLOY      │ │           │ │           │     │
│  └──────────────┘ └───────────┘ └───────────┘     │
│         │ cross-read ↔ │                            │
│         │              │                            │
│    user_preference  ←──┘ (Claude reads taste)       │
│    theme-system     ←──┘ (Claude reads brand)       │
│    module_registry  ──→│ (Normal checks modules)    │
│                                                     │
│  FAUCET: No cross-reads. Fully isolated.            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

_Mode Connections V15 — Isolated but connected through _shared/ brain (2026-04-02)_
