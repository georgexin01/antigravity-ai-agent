# AI Claude Mode — Activation Protocol V6.0

> **PURPOSE**: When user says "ai claude" in Gemini chat, activate Claude-Code Synergy mode.
> **Trigger**: User says "ai claude", "claude mode", "admin mode", or "create module"
> **Effect**: Switch from default Gemini design mode → Claude-Code Synergy (Director ↔ Architect)
> **Created**: 2026-03-12 | **V6.0 Upgraded**: 2026-04-07
> **V6.0**: Integrated Gemini 3 (Director) ↔ Gemma-4 (Architect) Synergy Protocol.

---

## ⛔ IMMUTABLE SKILLS LOCK (HIGHEST PRIORITY)

> **`skills/claude-code/` IS PERMANENTLY LOCKED.**
> The AI may ONLY **READ** these files as fixed references. NEVER write, edit, add, or delete anything inside `skills/claude-code/`.
>
> All learning, synergy upgrades, and improvements are written to `knowledge/claude/` files ONLY.
> **MANTRA: Skills are the Law. Knowledge adapts around the Law.**

---

## SECTION 0: INITIAL PROJECT BOOT SEQUENCE (MANDATORY STRICT)

> **Goal**: Formalized Boot-and-Ask synchronization.

### 0.1 Strict Activation (New V5.1)
- **Trigger**: User says "ai claude".
- **Action 1**: Auto-open Claude Mode flags.
- **Action 2**: Read ALL 14 skill files/folders in `C:\Users\user\.gemini\antigravity\skills\claude-code\`.
- **Action 3**: STOP ALL EXECUTION.

### 0.2 Conditional Boot Checks (NEW)
Before asking any questions, AI MUST verify the current project state:
- **Check 1 (`node_modules`)**: If `node_modules` directory exists, flag `pnpm install` as **COMPLETED**.
- **Check 2 (`.claudeignore`)**: If `.claudeignore` / `.geminiignore` exist, flag Ignore Optimization as **COMPLETED**.
- **Check 3 (Dev Stability)**: If the Active Projects tracker shows "Stable" or recently bug-fixed, flag Bug Fixing as **COMPLETED**.

### 0.3 The Dynamic Question Gate
- If ALL steps are **COMPLETED**, skip this gate entirely, do NOT show AskUserQuestion, and auto-resume from the last saved state (Section 0.5).
- If ANY step is missing, AI MUST present the `AskUserQuestion` template mentioning ONLY the missing steps.
- **MANDATORY**: Wait for explicit user confirmation if the question is shown.

### 0.3.5 Post-Confirmation Execution (FAST-TRACK WORLD RECORD)
Only execute the steps that are NOT yet COMPLETED:
- **Step 0: ENVIRONMENT HARDENING (CRITICAL)** — Before any pnpm commands, AI MUST read `knowledge/claude/vben_recovery_handbook.md` and run a "Zombie/Ghost Scan" for `C:\Users\user\node_modules` and orphan Node processes.
- **Step 1: pnpm install** — Direct execution. No heavy knowledge overhead.
- **Step 2: .ignore Research & Deploy** — Research possible ignore files and update `.claudeignore` / `.geminiignore`.
- **Step 3: pnpm dev:local Health Check** — Start dev server + verify local Supabase (Docker) connection status.
- **Step 4: Instant Bug Fixing** — Use skills for lightning-fast resolution of pre-existing errors (TS, Circular, Port mismatches).

### 0.5 Fast-Save & Auto-Resume (NEW)
- At the end of every Claude Mode session (or when the user stops), AI automatically saves the current module progress and file path to the **Active Projects Tracker**.
- Upon reactivation ("ai claude"), if the Boot Gate is skipped (Gate 0.3), the AI instantly reloads the exact context and says:
  > *"Restored context for [Project/Module Name]. Ready to continue from [Step/File]."*

### 0.6 The Synergy Handoff Protocol (V1.0)
- **Role: Director (Gemini 3 Flash)**: Planning, Pattern Detection, Consultation, Logic Audit, UI Logic, Testing.
- **Role: Architect (Gemma-4)**: Structural SQL, Types, Pinia Scaffolding, Mock API Boilerplate, I18n.
- **Flow**: Director briefs Architect → Architect drafts structure → Director audits & completes high-fidelity UI components.

### 0.4 Error Handling
- If `docker ps` returns error → stop and ask user to start Docker.

---

## MODE ACTIVATION

### Trigger Words (Any Match → Activate)
```
"ai claude"       → ADMIN mode ON
"claude mode"     → ADMIN mode ON
"admin mode"      → ADMIN mode ON
"create module"   → ADMIN mode ON + /create-module skill
"new module"      → ADMIN mode ON + /create-module skill
"analyze schema"  → ADMIN mode ON + /analyze-schema skill
"generate store"  → ADMIN mode ON + /generate-store skill
"generate views"  → ADMIN mode ON + /generate-views skill
"supabase"        → ADMIN mode ON (if context = admin panel)
```

### What Changes When ADMIN Mode Activates

| Setting | Default (Gemini) | Claude Mode (ADMIN) |
|---------|-----------------|---------------------|
| **Source skills** | All 26 Gemini skills | `skills/claude-code/` ONLY |
| **Approval** | Auto-Approve All | **Selective Wait (Option 1)** |
| **Mandatory Wait**| N/A | SQL, SQL Schema, Store logic, API, Multi-File |
| **Auto-Pass** | N/A | Minor UI tweaks (CSS, text) in single file |
| **Design DNA** | Load user_taste_dna + design vault | SKIP all design files |
| **Knowledge files** | Load per task type | Load claude-code skills ONLY |
| **Code style** | Vue 3 + Tailwind vanilla | Vben Admin + Ant Design + Supabase |
| **Execution** | V13 phases (Before→During→After) | 14-step Synergy Pipeline |
| **Model Role** | Single Agent | **Director (G3) ↔ Architect (G4)** |

---

## ROUTING: What To Load

### Priority Files (Read FIRST)
```
1. skills/claude-code/supabase-rls-rbac-design.md
2. skills/claude-code/mcp-supabase-postgres-connection.md
```

### Skill Pipeline (Available Slash Commands)
```
/analyze-schema          → Step 0: Parse entity → confirm structure
/generate-store          → Step 1: Types + Pinia store
/generate-supabase-schema → Step 2: SQL migration
/generate-views          → Step 3: Vue drawer/list/form components
/generate-route          → Step 4: Router configuration
/generate-i18n           → Step 5: zh-CN + en-US translations
/generate-e2e            → Step 6: E2E test specs
/workflow-test           → Step 7: Workflow test configs
/create-module           → Full 14-step pipeline (all above in order)
/image-upload-spec       → If entity has image/file fields
/ui-standardization      → UI consistency rules
/staging                 → Dev mode management
/supabase-auth-architecture → Auth design reference
```

### Execution Sequence (Token Economy Synergy V7.0)
```
User: "ai claude create module teacher"
  │
  ├── 1. PHASE P0: BOOT & VERIFY (Director - G3)
  │       ├── 0.1 Post-Install Verify (Gate 18 + Environment Hardening)
  │       ├── 0.2 Registry Ghost Scan (G4 Scans Schema locally)
  │       └── 0.3 PREDICTIVE MAPPING (Director outputs JSON mapping)
  │           └─ Map Schema → V2 Skills (e.g., Currency, FK, RLS)
  │
  ├── 2. PHASE P1: SMART CONSULTATION (Director - G3)
  │       ├── 1.1 Present Pattern Matches (Director - High logic, low tokens)
  │       └── 1.2 Implementation Plan (Director breaks into JSON payloads for G4)
  │
  ├── 3. PHASE P2 & P3: THE ZERO-COST 99% FIDELITY MATRIX
  │   [Every step is algorithmically split to guarantee Gemini 3 quality using Gemma-4 compute]
  │
  │   [🔴 STRICT LOCAL RUN - ZERO CLOUD TOKENS]
  │   ├── Step 1 (SQL): G4 writes 100% locally. G3 strictly provides the 'uuid, varchar' field list.
  │   ├── Step 2 (Seed): G4 generates local dummy data.
  │   ├── Step 3 (Types): G4 maps SQL columns to TypeScript interfaces. (99% deterministic).
  │   ├── Step 4 (Store): G4 writes the standard Pinia Supabase CRUD boilerplate.
  │   ├── Step 5 (Shared): G4 updates data-refresh and index.ts.
  │   ├── Step 6 (Mock): G4 writes all REST Mock routes (highly repetitive, zero logic).
  │   ├── Step 12 (Route): G4 creates standard Vben router objects.
  │   ├── Step 14 (Test): G4 generates Playwright templates.
  │
  │   [🟡 HYBRID RUN - G3 REVIEWS G4'S WORK]
  │   ├── Step 13 (i18n): G4 generates the massive JSON structure. G3 does a tiny context review on translation nuance (e.g., "status" vs "状态").
  │
  │   [🟢 G3 PRIME COMPUTE - PROTECTING VBEN UI QUALITY]
  │   [G4 outputs rough templates; G3 polishes them to hit 99% quality]
  │   ├── Step 7 (Form): G3 writes the Shadcn complex validation logic. 
  │   ├── Step 8 (Drawers): G3 handles event bridging between Vue components.
  │   ├── Step 9 (List): G3 implements VxeTable and `CellFkLink`.
  │   ├── Step 10 (Detail): G3 writes the AntD Descriptions.
  │   ├── Step 11 (Icon): G3 selects the appropriate icon string.
  │   └── [OPTIONAL] SNIPASTE BRIDGE: G3 Bridge prefers `ui-snap.png` for UI verification to save tokens.
  │
  └── 5. PHASE P5: UPDATE KNOWLEDGE
          └── 5.1 Log Synergy ROI & Token Savings in Vault V2

---

## 🛑 STRICT DIRECTIVE: ZERO-COST LOCAL RESEARCH (Gemma-4)

> **Mandate**: Save massive Cloud Tokens by delegating all heavy text processing, log analysis, and file searching to the local machine.

1. **Schema Parsing**: Do NOT send full `001_initial_schema.sql` dumps to Gemini. Gemma-4 parses the local file and returns a tiny Markdown summary.
2. **Error Log Analysis**: Do NOT dump raw Docker/Vite logs to Gemini. Gemma-4 scans locally and returns only the root cause.
3. **Answering User Queries**: If the user asks "how does the store work?", Gemma-4 generates the technical explanation locally. Gemini only formats the final output if needed.
4. **Calculations**: Any repetitive math, JSON formatting, or array generation is restricted to the local Gemma-4 agent.
```

---

## WHAT TO SKIP IN ADMIN MODE

```
NEVER LOAD:
  ✗ user_taste_dna.md          (design preferences irrelevant)
  ✗ user_preference_dna.md     (Taste scoring irrelevant — user explicitly requested to skip)
  ✗ design_vault/*             (No design vault matching)
  ✗ mobile_design_mastery.md   (not mobile app)
  ✗ website_design_dna.md      (not website)
  ✗ unified_app_blueprint.md   (not vanilla Vue app)
  ✗ pwa_offline_first_patterns.md (not PWA)
  ✗ All Gemini design skills (ui-ux-pro-max, mobile-design, etc.)
```

---

---

## PATTERN 1: SMART CONSULTATION CARD (Before Any Module)

> **Source**: Gemini `user_preference_dna.md` §Claude Mode Smart Consultation
> **Why**: Passive checklist misses edge cases. Active analysis catches: 1:N relationships needing Layer Icons, image fields needing cropper, balance fields needing read-only guards.

### When to Trigger
```
Before executing /create-module or any module skill
AFTER user provides module name but BEFORE writing any code
```

### What AI Must Analyze
```
1. SCAN existing modules:
   - Query: what tables already exist in this schema?
   - Check: does a parent table exist for FK relationships?
   - Check: does a child table reference this new module?

2. PROPOSE logic (not just checklist):
   WRONG:  "Does this module have FK relationships?"
   CORRECT: "I see 'client' table exists. Teacher likely needs clientId FK.
             Should I add CellFkLink for client name in teacher list?"

3. DETECT patterns:
   - Field named "photo/avatar/image" → propose image upload spec
   - Field named "balance/salary/amount" → propose money field (RM, numeric 12,2)
   - Field named "parentId/clientId" → propose Layer Icon on parent list
   - Multiple status values → propose RadioGroup (≤3) or Select (>3)

4. PRESENT consultation card:
   ┌─────────────────────────────────────────┐
   │ MODULE: Teacher                         │
   │                                         │
   │ Analyzed Skills:                        │
   │   /create-module (14 steps)             │
   │   /image-upload-spec (avatar detected)  │
   │                                         │
   │ Proposed Logic:                         │
   │   • FK to clients → CellFkLink + Layer  │
   │   • avatar field → 800x800 cropper      │
   │   • status (3 options) → RadioGroup     │
   │   • salary field → RM numeric(12,2)     │
   │                                         │
   │ Structure: Standalone CRUD              │
   │ Menu: Under "Human Resources" group     │
   │                                         │
   │ Confirm? [Yes / Modify]                 │
   └─────────────────────────────────────────┘
```

### Gate
```
User must confirm or modify before pipeline starts.
If user says "ok" / "yes" / "proceed" → execute immediately.
If user modifies → update plan → re-present → then execute.
```

---

## PATTERN 2: CROSS-MODULE DEPENDENCY SCANNER

> **Source**: Gemini cross-project awareness pattern
> **Why**: Creating module B that FK-references module A fails silently if A's store, drawer, or data-refresh entry is missing.

### When to Trigger
```
Before Step 1 (SQL) of any module that has FK relationships
```

### Dependency Check Matrix
```
For EACH FK relationship in new module:

  Parent module: {parentName}
  ┌───────────────────────────────────────────────────┐
  │ CHECK                        │ EXISTS? │ ACTION   │
  ├──────────────────────────────┼─────────┼──────────┤
  │ types/{parent}.ts            │   ?     │ BLOCK    │
  │ stores/{parent}.ts           │   ?     │ BLOCK    │
  │ stores/index.ts re-export    │   ?     │ ADD      │
  │ stores/data-refresh.ts entry │   ?     │ ADD      │
  │ views/{parent}/drawer/       │   ?     │ BLOCK    │
  │   {parent}-detail-drawer.vue │   ?     │ BLOCK    │
  │ fetchOptions() in store      │   ?     │ ADD      │
  └──────────────────────────────┴─────────┴──────────┘

  BLOCK = Cannot proceed. Parent module must be created first.
  ADD   = Can auto-add during this module's creation.

WRONG:  Assume parent exists, fail at runtime with import error
CORRECT: Scan dependencies → report missing → create parent first or abort
```

---

## PATTERN 3: MODULE REGISTRY

> **Source**: Gemini session memory + active projects tracker
> **Why**: After 10+ modules, AI loses track of what exists. Registry prevents duplicates and informs FK decisions.

### Format (Maintain in project root or admin docs)
```
## Module Registry — {Project Name}

| Module | Table | FK Parents | FK Children | Status | Step |
|--------|-------|------------|-------------|--------|------|
| client | clients | — | businesses, workers | DONE | 14/14 |
| business | businesses | clients | transactions | DONE | 14/14 |
| worker | workers | clients | — | IN PROGRESS | 7/14 |
| teacher | teachers | clients | — | PLANNED | 0/14 |
```

### Rules
```
- Update registry after each module completes
- New module creation: check registry first for FK parents
- If parent shows "PLANNED" or "IN PROGRESS" → warn user, suggest creating parent first
- Use registry to generate /workflow-test FK cross-references
```

---

## PATTERN 4: ADMIN QUALITY TRACKER (5 Dimensions)

> **Source**: Gemini ADPRS V4.1 scoring (adapted from 17→5 admin-specific dimensions)
> **Why**: Per-module is pass/fail. But cross-module patterns reveal: "AI keeps forgetting X." Track to self-correct.

### 5 Admin Dimensions
```
D1: SQL Correctness
    Track: DROP order correct, trigger exists, RLS policies complete, indexes added
    Common miss: Forgetting ON DELETE CASCADE on FK constraints

D2: Type Safety
    Track: Entity interface matches SQL columns, FormValues excludes read-only, PageParams has all filters
    Common miss: FK display fields (clientName) missing from interface

D3: RLS Coverage
    Track: Every table has SELECT/INSERT/UPDATE/DELETE policies, authenticated check present
    Common miss: Missing policy for new table (query returns empty)

D4: UI Consistency
    Track: CellFkLink for FK columns, CellStatus for status, formatMoneyCell for money, formatDateTimeCell for dates
    Common miss: FK column shows raw ID instead of name (missing CellFkLink)

D5: Test Coverage
    Track: Workflow test covers standalone CRUD + instant CRUD (if 1:N) + FK link click (if CellFkLink)
    Common miss: Edit step only changes name field instead of ALL editable fields
```

### How to Use
```
After completing a module, quick self-check:
  D1: ✓ or ✗ (SQL)
  D2: ✓ or ✗ (Types)
  D3: ✓ or ✗ (RLS)
  D4: ✓ or ✗ (UI)
  D5: ✓ or ✗ (Tests)

If same dimension fails 2+ times across modules → flag as pattern problem
```

---

## PATTERN 5: CROSS-MODULE PREDICTION

> **Source**: Gemini prediction queue (90%+ accuracy)
> **Why**: After creating module A, predict what module B user will ask for next. Pre-analyze schema.

### Prediction Rules
```
After completing a module, predict next based on FK schema:

  Created: client
  → Predict next: business (most common child of client)
  → Pre-analyze: business likely needs clientId FK, CellFkLink, Layer Icon on client list

  Created: business
  → Predict next: worker OR transaction (common children of business)

  Created: parent entity with no children
  → Predict next: child entity referencing this parent

  Created: standalone entity
  → Predict next: another standalone entity in same domain
```

### What to Pre-Load
```
When predicting next module:
  1. Check if parent's Layer Icon step was completed (Step 11)
  2. Check if parent's fetchOptions() exists in store
  3. Check if parent's detail drawer is ready for CellFkLink
  4. Prepare suggestion: "Next module likely needs FK to {parent}. Parent is ready."
```

---

## PATTERN 6: WAVE BATCHING (Within-Step Parallelism)

> **Source**: Gemini batch execution pattern
> **Why**: The 14 steps are sequential (SQL→Types→Store→Views). But WITHIN each step, multiple files can be created in parallel.

### Parallel Opportunities in 14-Step Pipeline
```
Step 6 — Mock Backend (6 files → 3 parallel batches):
  Batch A: db-wrapper + mock-db update (depend on each other)
  Batch B: list.ts + [id].ts (both read, independent)
  Batch C: index.post.ts + [id].put.ts + [id].delete.ts (all write, independent)

Step 8 — Drawers (3 files → parallel):
  All 3 drawers (create, edit, detail) can be created simultaneously
  They share the same form component but don't depend on each other

Step 12+13 — Route + i18n (parallel):
  Route file and i18n JSON files have no dependency on each other
  Create both simultaneously

Step 14 — Workflow Tests:
  Multiple workflow configs (standalone, instant, FK-link) can be parallel
```

### Rules
```
WRONG:  Create mock list.ts → wait → create mock [id].ts → wait → create post.ts
CORRECT: Create all 3 read-ops in parallel, then all write-ops in parallel

Only parallelize files with NO dependency on each other.
If file B imports from file A → file A must complete first.
```

---

## PATTERN 7: COMMON MISTAKES (WRONG/CORRECT for Key Skills)

> **Source**: Gemini anti-pattern enforcement
> **Why**: 4 most error-prone skills need explicit WRONG/CORRECT examples.

### /generate-store Common Mistakes
```
WRONG:  Store uses requestClient for API calls
CORRECT: Store uses supabase.from('{table}') for all CRUD

WRONG:  FK display field (clientName) as a real column
CORRECT: FK display field comes from PostgREST join: select('*, client:clients(name)')
         Then flatten: clientName: row.client?.name ?? ''

WRONG:  Throwing errors on read operations (getList, getDetail)
CORRECT: Read ops return empty + console.warn. Only write ops throw.
```

### /generate-views Common Mistakes
```
WRONG:  FK column shows raw UUID (clientId)
CORRECT: FK column uses CellFkLink with clientName display + click handler

WRONG:  Status column shows raw text string
CORRECT: Status column uses CellStatus renderer with color mapping

WRONG:  Money column shows raw number (2400)
CORRECT: Money column uses formatMoneyCell → displays "RM 2,400.00"

WRONG:  dataRefreshStore watcher only watches own version
CORRECT: Watcher watches own version + ALL parent FK entity versions
```

### /generate-supabase-schema Common Mistakes
```
WRONG:  DROP TABLE without CASCADE
CORRECT: DROP TABLE IF EXISTS "schema"."table" CASCADE

WRONG:  Missing updated_at trigger
CORRECT: CREATE TRIGGER set_{table}_updated_at BEFORE UPDATE ON "schema"."{table}"
         FOR EACH ROW EXECUTE FUNCTION update_updated_at()

WRONG:  No RLS policies after CREATE TABLE
CORRECT: ALTER TABLE ENABLE ROW LEVEL SECURITY + 4 policies (SELECT/INSERT/UPDATE/DELETE)
```

### /workflow-test Common Mistakes
```
WRONG:  saveAs on submit-form step (form hasn't returned yet)
CORRECT: saveAs on assert step AFTER submit (2000ms delay ensures DB write)

WRONG:  Edit step only updates name field
CORRECT: Edit step updates ALL editable fields with new values

WRONG:  Missing close-drawers + wait before deleting parent in instant test
CORRECT: close-drawers → wait 3000ms (for __workflow_listActions restore) → then delete parent
```

---

## DEACTIVATION

```
Mode returns to DEFAULT when:
  - User switches project context (non-admin)
  - User says "design mode", "build app", "build website"
  - Session ends
  - User explicitly says "exit claude mode"
```

---

## CROSS-REFERENCES

```
session_boot_sequence.md  → Step 3 classifies task_type = ADMIN
skill_path_router.md      → Section 1.1 routes to claude-code/ skills
knowledge_router.md       → ADMIN PANEL section lists all skills
create-module/skill.md    → Full 14-step execution pipeline
vben_webapp_synergy_rules.md → Triple-Sync DB Parity + Private Schema Vault Protocol
```

---

_AI Claude Protocol V3.0 — 7 Intelligence Patterns from Gemini Brain (2026-03-31)_
_Patterns: Consultation Card, Dependency Scanner, Module Registry, Quality Tracker,_
_Cross-Module Prediction, Wave Batching, Common Mistakes (WRONG/CORRECT)_
