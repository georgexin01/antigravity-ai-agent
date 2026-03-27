# Session Boot Sequence V1.0 — Deterministic 5-Step Startup

> **PURPOSE**: AI reads this FIRST every session. Executes steps in order. No skipping.
> **Trigger**: Every new conversation / session start
> **Time**: ~10 seconds of reading before any action
> **Created**: 2026-03-27

---

## BOOT SEQUENCE (Execute Steps 1→5 In Order)

### Step 1: INSTANT CONTEXT (2 seconds)
```
Action:   Read session_cache.md (30 lines max)
Output:   Know: last project, state, predicted next tasks
Gate:     If user mentions SAME project → resume from saved state
          If user mentions NEW project → clear predictions, start fresh
File:     knowledge/self_evolving_intelligence/artifacts/session_cache.md
```

### Step 2: TASTE PROFILE (2 seconds)
```
Action:   Read user_taste_dna.md (50 tokens)
Output:   Know: LOVES list, HATES list, style fingerprint
Apply:    All design decisions use this as default. Score +12 for LOVES, -20 for HATES
File:     knowledge/self_evolving_intelligence/artifacts/user_taste_dna.md
```

### Step 3: CLASSIFY TASK (1 second)
```
Action:   Read user's first message → classify task type
Table:
  "create module X"     → task_type = ADMIN     → mode = Claude-Code
  "build app X"         → task_type = APP        → mode = V13 High-End
  "build website X"     → task_type = WEBSITE    → mode = V13 SITE
  "design X"            → task_type = DESIGN     → mode = Design-First
  "fix X" / "bug"       → task_type = BUGFIX     → mode = Quick Fix
  "update X" / "add X"  → task_type = ENHANCE    → mode = Read-First
  "deploy" / "publish"  → task_type = DEPLOY     → mode = Publish
Output:   task_type + mode determined
Gate:     Must classify before loading any files
```

### Step 4: ROUTE TO FILES (3 seconds)
```
Action:   Based on task_type, load ONLY relevant files from skill_path_router.md
Rules:
  ADMIN mode:
    Load: claude-code/ skills ONLY
    Skip: ALL design DNA, taste profiles, design skills
    Ref:  skill_path_router.md → NOT listed (uses claude-code/ pipeline)

  APP mode:
    Load: agent_core_protocol.md + must_do_master_rules.md
         + app_creation_masterplan.md + unified_app_blueprint.md
         + user_preference_dna.md
    Conditional: i18n_multilingual_mastery.md (if multi-lang)
                 pwa_offline_first_patterns.md (if PWA)
    Skills: ui-ux-pro-max, mobile-design, tailwind-design-system

  WEBSITE mode:
    Load: agent_core_protocol.md + must_do_master_rules.md
         + website_design_dna.md + user_preference_dna.md
    Skills: frontend-design, ui-ux-pro-max, web-design-guidelines

  DESIGN mode:
    Load: website_design_dna.md OR mobile_design_mastery.md
         + user_preference_dna.md + design_vault/README.md
    Skills: design-logic-system, ui-ux-pro-max, stitch-ui-design

  BUGFIX mode:
    Load: agent_core_protocol.md §6 ONLY
    Skip: Everything else
    Action: Read error → classify → fix → rebuild

  ENHANCE mode:
    Load: agent_core_protocol.md (relevant section)
    Action: Read existing code FIRST → then apply changes

  DEPLOY mode:
    Load: must_do_master_rules.md Phase 3+4
         + pwa_offline_first_patterns.md
    Action: Run verification chain → build → prepare

Gate:     Files loaded. Ready to execute
WRONG:    Loading ALL knowledge files every session (token waste)
CORRECT:  Loading ONLY files matching task_type (zero-waste routing)
```

### Step 5: EXECUTE (Begin Work)
```
Action:   Start task using loaded context
Rules:
  - Follow agent_core_protocol.md execution sequence
  - Follow must_do_master_rules.md phase gates
  - Apply user_taste_dna.md on every design decision
  - Update session_cache.md at END of session
  - Update user_preference_dna.md if new taste patterns discovered

Output tracking:
  - Files loaded count (fewer = better, target: <6)
  - Files actually used count (should match loaded)
  - Prediction accuracy (log in skill_path_router.md §4.2)
```

---

## QUICK REFERENCE: Boot Decision Tree

```
Session Start
    │
    ├── Read session_cache.md (Step 1)
    ├── Read user_taste_dna.md (Step 2)
    │
    ├── User's first message arrives
    │       │
    │       ├── Contains "module" / "entity" / "CRUD"
    │       │       → ADMIN mode → load claude-code/ skills
    │       │
    │       ├── Contains "app" / "mobile" / "Vue"
    │       │       → APP mode → load 5 core files + skills
    │       │
    │       ├── Contains "website" / "landing" / "homepage"
    │       │       → WEBSITE mode → load 3 core files + skills
    │       │
    │       ├── Contains "design" / "UI" / "mockup"
    │       │       → DESIGN mode → load DNA + vault
    │       │
    │       ├── Contains "fix" / "bug" / "error" / "broken"
    │       │       → BUGFIX mode → load §6 only
    │       │
    │       ├── Contains "add" / "update" / "change" / "improve"
    │       │       → ENHANCE mode → read code first
    │       │
    │       └── Contains "deploy" / "publish" / "build"
    │               → DEPLOY mode → load Phase 3+4
    │
    └── Execute (Step 5)
```

---

## SESSION END: What To Save

```
Before ending session, AI MUST:
  1. Update session_cache.md with:
     - Date, project name, project type, current state
     - What was done (bullet points)
     - What to load next session
     - Predicted next tasks
  2. Update user_preference_dna.md if:
     - User confirmed a new pattern (taste score update)
     - User rejected a pattern (negative score update)
     - New project fingerprint discovered
  3. Update brain_status.md with:
     - Dimension scores affected by this session
     - Prediction accuracy for this session
```

---

_Session Boot Sequence V1.0 — Zero-waste startup protocol (2026-03-27)_
_Pattern: Read 2 files → Classify → Route → Execute. No wasted tokens._
