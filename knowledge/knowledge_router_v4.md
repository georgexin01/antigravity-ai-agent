# Knowledge Router V4.0 — Mode-Isolated Intelligence Engine

> Designed for **Gemini 2.5 Flash**.
> Strict folder-level mode isolation. AI cannot cross-read between modes.
> Token budget: V3.0 ~1.6K → **V4.0 ~900 avg** per session.
> Updated: 2026-04-02

---

## ARCHITECTURE: 3-MODE FOLDER ISOLATION

```
antigravity/
├── knowledge/
│   ├── _shared/                    ← ALL modes read this (boot, session, taste)
│   │   ├── boot.md                 ← Universal boot sequence (replaces session_boot_sequence)
│   │   ├── hot_rules_cache.md      ← P0+P1 universal rules
│   │   └── session_cache.md        ← Last project state
│   │
│   ├── normal/                     ← ONLY Normal Mode reads this folder
│   │   ├── mode_config.md          ← Normal mode: what to read, build order, rules
│   │   ├── agent_core_protocol.md
│   │   ├── must_do_master_rules.md (slimmed, no viefaucet, no claude)
│   │   ├── unified_app_blueprint.md
│   │   ├── typescript_pinia_standard.md
│   │   ├── website_design_dna.md
│   │   ├── user_preference_dna.md
│   │   ├── mobile_design_mastery.md
│   │   ├── i18n_multilingual_mastery.md
│   │   ├── pwa_offline_first_patterns.md
│   │   ├── v12_ascension_mastery.md
│   │   ├── website_full_sequence_audit.md
│   │   ├── website_stored_samples.md
│   │   ├── senior_designer_protocol.md
│   │   ├── stitch_visual_protocol.md
│   │   ├── design_research_engine.md
│   │   ├── design_vault/           ← Full vault (README, themes, micro, components)
│   │   └── client_dna/             ← 86car, japanese_food, jin_hong, zeta, golden_shop
│   │
│   ├── claude/                     ← ONLY Claude Mode reads this folder
│   │   ├── mode_config.md          ← Claude mode: pipeline, vben rules, supabase patterns
│   │   ├── ai_claude_protocol.md
│   │   ├── claude_improvement_vault.md
│   │   └── supabase_vben_admin_automation.md
│   │
│   └── faucet/                     ← ONLY Faucet Mode reads this folder
│       ├── mode_config.md          ← Faucet mode: platform configs, audit protocol
│       ├── viefaucet_profile.md
│       ├── 99faucet_profile.md
│       ├── faucet_pattern_vault.md
│       ├── faucet_session_ledger.md
│       └── viefaucet_strategy_v2.md
│
├── skills/
│   ├── _shared/                    ← ALL modes can use
│   │   └── agent-memory/
│   │
│   ├── normal/                     ← ONLY Normal Mode uses
│   │   ├── brainstorming/
│   │   ├── design-logic-system/
│   │   ├── design-orchestration/
│   │   ├── design-spells/
│   │   ├── frontend-design/
│   │   ├── frontend-developer/
│   │   ├── frontend-ui-dark-ts/
│   │   ├── magic-ui-generator/
│   │   ├── mobile-design/
│   │   ├── figma-automation/
│   │   ├── openclaw-integration/
│   │   ├── php-pro/
│   │   ├── product-design/
│   │   ├── radix-ui-design-system/
│   │   ├── stitch-ui-design/
│   │   ├── stitch-app-developer/
│   │   ├── tailwind-design-system/
│   │   ├── ui-ux-designer/
│   │   ├── ui-ux-pro-max/
│   │   ├── ui-visual-validator/
│   │   ├── vue3-fnb-framework/
│   │   ├── web-design-guidelines/
│   │   ├── webapp-testing/
│   │   └── website-template-design/
│   │
│   ├── claude-code/                ← ONLY Claude Mode uses (already exists)
│   │   ├── create-module/
│   │   ├── analyze-schema/
│   │   ├── generate-store/
│   │   ├── generate-supabase-schema/
│   │   ├── generate-views/
│   │   ├── generate-route/
│   │   ├── generate-i18n/
│   │   ├── generate-e2e/
│   │   ├── workflow-test/
│   │   ├── image-upload-spec/
│   │   ├── ui-standardization/
│   │   ├── staging/
│   │   ├── supabase-auth-architecture/
│   │   ├── supabase-rls-rbac-design.md
│   │   └── mcp-supabase-postgres-connection.md
│   │
│   └── faucet/                     ← ONLY Faucet Mode uses (already exists)
│       └── SKILL.md
```

---

## MODE GATE — THE CORE ISOLATION ENGINE

```
┌──────────────────────────────────────────────────────────────────────┐
│                        MODE GATE V1.0                                │
│                                                                      │
│  STEP 1: Read _shared/boot.md (every session, every mode)           │
│  STEP 2: Detect mode from user's first message                      │
│  STEP 3: LOCK to ONE mode folder. Gate closes. No cross-reading.    │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  IF mode = NORMAL:                                           │    │
│  │    READ:  _shared/* + normal/*                               │    │
│  │    USE:   skills/_shared/* + skills/normal/*                  │    │
│  │    BLOCK: claude/*, faucet/*, skills/claude-code/*,           │    │
│  │           skills/faucet/*                                     │    │
│  │                                                               │    │
│  │  IF mode = CLAUDE:                                            │    │
│  │    READ:  _shared/* + claude/*                                │    │
│  │    USE:   skills/_shared/* + skills/claude-code/*              │    │
│  │    BLOCK: normal/*, faucet/*, skills/normal/*,                │    │
│  │           skills/faucet/*                                     │    │
│  │                                                               │    │
│  │  IF mode = FAUCET:                                            │    │
│  │    READ:  _shared/* + faucet/*                                │    │
│  │    USE:   skills/_shared/* + skills/faucet/*                   │    │
│  │    BLOCK: normal/*, claude/*, skills/normal/*,                │    │
│  │           skills/claude-code/*                                 │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  EXCEPTION: If a file inside the current mode says                   │
│  "CROSS-READ: claude/xxx.md" or "CROSS-READ: normal/xxx.md"        │
│  → ONLY that specific file is allowed. Not the whole folder.        │
│                                                                      │
│  MODE SWITCH: User says "switch to [mode]" → save state → reboot   │
│  with new mode. Old mode folder immediately BLOCKED.                 │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

---

## MODE DETECTION TABLE

```
USER MESSAGE                          → MODE      → FOLDER LOCK
──────────────────────────────────────────────────────────────────
"ai claude" / "claude mode"           → CLAUDE    → _shared + claude/
"create module" / "entity" / "CRUD"   → CLAUDE    → _shared + claude/
"vben" / "admin panel"                → CLAUDE    → _shared + claude/

"ai faucet" / "faucet mode"           → FAUCET    → _shared + faucet/
"claim" / "viefaucet" / "99faucet"    → FAUCET    → _shared + faucet/
"earn" / "mission" / "solana faucet"  → FAUCET    → _shared + faucet/

Everything else                        → NORMAL    → _shared + normal/
"build app" / "website" / "design"    → NORMAL    → _shared + normal/
"fix bug" / "deploy" / "update"       → NORMAL    → _shared + normal/
```

---

## BOOT SEQUENCE V4.0 (All Modes — 3 Steps)

```
STEP 1: Read _shared/boot.md
  → Contains: mode detection table, hot rules (P0+P1), session restore
  → Time: <3 sec
  → Tokens: ~400

STEP 2: Detect mode + lock folder
  → Read user's first message
  → Match keyword → lock mode
  → Time: <1 sec
  → Tokens: 0

STEP 3: Read [mode]/mode_config.md
  → Contains: mode-specific boot, file list, build order, rules
  → Time: <5 sec
  → Tokens: ~200-500 depending on mode

TOTAL BOOT: <9 sec, ~600-900 tokens
```

---

## PHASE FLOW PER MODE

### NORMAL MODE (4 Phases)

```
Phase 0: Boot (_shared/boot.md + normal/mode_config.md)
  │
Phase 1: Load task group (from mode_config.md routing table)
  │  ├─ APP: unified_app_blueprint + typescript_pinia + user_preference_dna
  │  ├─ WEBSITE: website_design_dna + user_preference_dna
  │  ├─ DESIGN: design_vault + user_preference_dna
  │  ├─ BUGFIX: hot_rules_cache §6 only (no extra files)
  │  └─ ENHANCE: agent_core_protocol (relevant section)
  │
Phase 2: Build (execute, lazy-load feature modules)
  │  └─ Triggers: i18n, PWA, mobile, animations, client DNA
  │
Phase 3: Verify + Save (hot_rules_cache verify chain + session_cache update)
```

### CLAUDE MODE (3 Phases)

```
Phase 0: Boot (_shared/boot.md + claude/mode_config.md)
  │  └─ Auto-checks: node_modules, .ignore, dev server, docker
  │
Phase 1: Pipeline (from ai_claude_protocol.md)
  │  ├─ Consultation Card → confirm entity
  │  ├─ Dependency Scan → check parent modules
  │  └─ 14-Step Pipeline: SQL → Types → Store → Views → Routes → i18n → Tests
  │
Phase 2: Quality + Save (quality tracker + session_cache update)
```

### FAUCET MODE (3 Phases)

```
Phase 0: Boot (_shared/boot.md + faucet/mode_config.md)
  │  └─ Load: platform profiles + pattern vault + session ledger
  │
Phase 1: Execute (CLAIM_VIEFAUCET or CLAIM_99FAUCET)
  │  └─ Triple-layer audit: Delta + Removal + Success Label
  │
Phase 2: Log + Save (faucet_session_ledger + session_cache update)
```

---

## V4.0 ADVANCED IMPROVEMENTS (6 Upgrades Over V3.0)

### UPGRADE 1: STRICT FOLDER ISOLATION (Mode Gate)
```
V3.0: Relied on "don't load X for Y task" (soft rule — AI could still read wrong files)
V4.0: Physical folder separation. Mode = folder. If file not in your folder, it doesn't exist.
RESULT: 100% guaranteed no cross-contamination. Zero wasted tokens from wrong-mode files.
```

### UPGRADE 2: MODE-SPECIFIC BOOT (mode_config.md)
```
V3.0: Single boot file tried to cover all modes with if/else branching
V4.0: Each mode has its OWN mode_config.md with mode-specific:
  - File list (what to read)
  - Build order (what sequence)
  - Rules (mode-specific rules only)
  - Predictions (what comes next in this mode)
RESULT: Boot reads exactly what this mode needs. Zero branching overhead.
```

### UPGRADE 3: CROSS-READ DIRECTIVE (Controlled Exception)
```
V3.0: No mechanism for one mode to reference another mode's file
V4.0: CROSS-READ directive allows specific file access across modes:
  Example in normal/mode_config.md:
    "If user says 'check module registry' → CROSS-READ: claude/ai_claude_protocol.md §3 ONLY"
  Rule: Only the EXACT file + section specified. Never the whole folder.
RESULT: Modes stay isolated but can reference specific knowledge when explicitly needed.
```

### UPGRADE 4: PREDICTIVE MODE CHAINING
```
V3.0: Prediction only within same task type
V4.0: Predict ACROSS modes with save/restore:
  Example: User finishes Claude module → AI predicts "user may test in Normal mode next"
  → Pre-save module context to session_cache with mode_switch_hint
  → Next session: if user says "test the app" → Normal mode boots with module context ready
RESULT: Mode switches don't lose context. 3-step-ahead thinking.
```

### UPGRADE 5: COMPRESSED FILE HEADERS (Gemini Flash Optimized)
```
V3.0: 2-layer reading (headers → full section)
V4.0: 3-layer reading optimized for Gemini Flash token window:
  Layer 0: mode_config.md has INLINE summaries of all files (1 line each, ~5 tokens)
  Layer 1: File headers (section names + decision tables, ~50 tokens)
  Layer 2: Full section content (~200-500 tokens)
  Layer 3: Code examples + copy-paste blocks (~500+ tokens)
RESULT: AI knows what every file contains from mode_config.md alone.
  Only drills into Layer 1-3 when actually building that part.
```

### UPGRADE 6: SESSION FINGERPRINT (Smarter Resume)
```
V3.0: session_cache saves project + state
V4.0: session_cache saves FINGERPRINT:
  {
    "mode": "CLAUDE",
    "project": "labour-management",
    "last_module": "teacher",
    "pipeline_step": 8,
    "files_modified": ["teacher.types.ts", "teacher.store.ts"],
    "next_predicted": ["TeacherDrawer.vue", "TeacherList.vue"],
    "mode_switch_hint": null,
    "hot_rules_applied": ["P0-01", "P0-02", "P0-11"],
    "timestamp": "2026-04-02T14:30:00"
  }
RESULT: AI resumes EXACTLY where it stopped. No re-reading, no re-asking.
```

---

## TOKEN BUDGET COMPARISON: V1.0 → V4.0

```
              V1.0      V2.0      V3.0      V4.0
BUGFIX:      ~5,000    ~1,000     ~430     ~250
ENHANCE:     ~8,000    ~2,000     ~830     ~450
ADMIN:      ~15,000    ~3,500   ~1,200     ~600
DESIGN:     ~20,000    ~4,500   ~1,900     ~900
WEBSITE:    ~35,000    ~7,500   ~2,800   ~1,200
APP:        ~45,000   ~10,000   ~3,600   ~1,800
FAUCET:      ~8,000    ~2,000     ~800     ~400
DEPLOY:     ~10,000    ~2,000     ~600     ~300

AVERAGE:    ~20,000    ~4,500   ~1,600     ~750

V4.0 vs V1.0: 96% reduction
V4.0 vs V3.0: 53% reduction (from folder isolation alone)
```

---

## FILE COUNT PER MODE (What AI Actually Reads)

```
NORMAL MODE:
  Boot: 2 files (_shared/boot.md + normal/mode_config.md)
  Task: 2-4 files (from mode_config routing)
  Feature: 0-2 files (lazy-loaded)
  Total: 4-8 files max (was 10-15 in V3.0)

CLAUDE MODE:
  Boot: 2 files (_shared/boot.md + claude/mode_config.md)
  Task: 1-2 files (protocol + skill)
  Total: 3-4 files max (was 5-7 in V3.0)

FAUCET MODE:
  Boot: 2 files (_shared/boot.md + faucet/mode_config.md)
  Task: 2-3 files (profiles + vault)
  Total: 4-5 files max (was 4-6 in V3.0)
```

---

## MIGRATION PATH: V3.0 → V4.0

```
Step 1: Create folder structure
  mkdir knowledge/_shared knowledge/normal knowledge/claude knowledge/faucet
  mkdir skills/_shared skills/normal

Step 2: Move files to _shared/
  Move: session_cache.md → _shared/
  Create: _shared/boot.md (new unified boot)
  Move: hot_rules_cache.md → _shared/

Step 3: Move files to normal/
  Move: agent_core_protocol.md, must_do_master_rules.md,
        unified_app_blueprint.md, typescript_pinia_standard.md,
        website_design_dna.md, user_preference_dna.md,
        mobile_design_mastery.md, i18n_multilingual_mastery.md,
        pwa_offline_first_patterns.md, v12_ascension_mastery.md,
        website_full_sequence_audit.md, website_stored_samples.md,
        senior_designer_protocol.md, stitch_visual_protocol.md
  Move: design_vault/ → normal/design_vault/
  Move: design_research_engine.md → normal/
  Move: client DNA files → normal/client_dna/
  Create: normal/mode_config.md

Step 4: Move files to claude/
  Move: ai_claude_protocol.md → claude/
  Move: claude_improvement_vault.md → claude/
  Move: supabase_vben_admin_automation.md → claude/
  Create: claude/mode_config.md

Step 5: Move files to faucet/
  Faucet knowledge already in skills/faucet/knowledge/
  Move or symlink to knowledge/faucet/
  Create: faucet/mode_config.md

Step 6: Move skills to skills/normal/
  Move all non-claude, non-faucet skills → skills/normal/

Step 7: Update references
  Update session_boot_sequence.md → point to _shared/boot.md
  Update skill_path_router.md → point to V4.0 paths
  Delete old routers (V1, V2, V3) after confirming V4 works

Step 8: Clean up
  Delete: user_taste_dna.md (redundant since V3.0)
  Delete: app_creation_masterplan.md (merged since V3.0)
  Delete: global_auto_learning_vault.md (merged since V3.0)
  Delete: evolving_knowledge.md (merged since V3.0)
```

---

## ADVANCED: FUTURE V4.1+ IDEAS

### IDEA 1: Mode Sub-Modes (Nested Isolation)
```
Normal mode could have sub-modes:
  NORMAL/APP → only app-related files
  NORMAL/WEBSITE → only website-related files
  NORMAL/DESIGN → only design-related files
Each sub-mode locks to an even smaller file set.
```

### IDEA 2: Rule Inheritance Chain
```
_shared rules → mode rules → task rules → step rules
Each layer can OVERRIDE parent rules.
Example: _shared says "mobile test at 375px"
         claude/mode_config says "OVERRIDE: skip mobile test (admin panel = desktop only)"
```

### IDEA 3: Token Budget Enforcement
```
Each mode has a MAX token budget:
  FAUCET: max 500 tokens (simple execution)
  CLAUDE: max 800 tokens (pipeline-driven)
  NORMAL: max 2000 tokens (complex design work)
If AI exceeds budget → warning + suggest skipping P2/P3 rules.
```

### IDEA 4: AI Self-Routing (No User Trigger)
```
Instead of user saying "ai claude" or "ai faucet":
  AI reads the PROJECT FOLDER and auto-detects mode:
    /vben-admin-project/ → auto-CLAUDE mode
    /faucet-website/ → auto-FAUCET mode
    /client-website/ → auto-NORMAL mode
  User never needs to declare mode. AI just knows.
```

### IDEA 5: Shared Learning Across Modes
```
When Claude mode discovers a pattern (e.g., "RLS policy pattern for multi-tenant"):
  → Save to _shared/learning_vault.md (tagged with source mode)
  → Other modes can read _shared/learning_vault.md for cross-pollination
  → But ONLY the vault, not the source mode's files
```

---

_Knowledge Router V4.0 — Mode-Isolated Intelligence Engine (2026-04-02)_
_Designed for Gemini 2.5 Flash. 3 modes. Strict folder isolation. 96% token reduction from V1.0._
