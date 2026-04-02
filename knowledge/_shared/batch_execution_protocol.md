# Batch Execution Protocol — V15

> STOP doing: think → edit → check → think → edit → check (serial loop)
> START doing: plan → think ALL → edit ALL → check ONCE (batch wave)
> Result: 40-55% faster execution, fewer token re-reads, fewer errors.
> Location: `_shared/` — ALL modes use this protocol.

---

## THE PROBLEM: SERIAL LOOP (Slow)

```
OLD WAY (Serial — AI keeps looping):

  Think about file 1
    → Edit file 1
      → Check file 1
        → Think about file 2          ← AI re-reads context AGAIN
          → Edit file 2
            → Check file 2
              → Think about file 3    ← AI re-reads context AGAIN
                → Edit file 3
                  → Check file 3
                    → ...repeat...

COST: For N files = N thinks + N edits + N checks = 3N cycles
PROBLEM: AI loses context between cycles, re-thinks same things, slower
```

---

## THE SOLUTION: BATCH WAVE (Fast)

```
NEW WAY (Batch — AI plans then executes wave):

  ┌─ WAVE 1: PLAN ─────────────────────────────────────────┐
  │  Think about ALL files at once                          │
  │  List every file that needs creating/editing            │
  │  Define the content/changes for each file               │
  │  Identify dependencies (which file needs which first)   │
  │  Group into parallel batches (independent files)        │
  └─────────────────────────────────────────────────────────┘
         │
  ┌─ WAVE 2: EXECUTE ───────────────────────────────────────┐
  │  Batch A (independent files): Edit file 1, 2, 3         │
  │  Batch B (depends on A):      Edit file 4, 5            │
  │  Batch C (depends on B):      Edit file 6, 7            │
  │  Write multiple files per message where possible         │
  └─────────────────────────────────────────────────────────┘
         │
  ┌─ WAVE 3: CHECK ─────────────────────────────────────────┐
  │  Run build / verify ONCE for ALL files                   │
  │  Check all routes, imports, types in one pass            │
  │  If errors found → go to WAVE 4                          │
  │  If no errors → DONE                                     │
  └─────────────────────────────────────────────────────────┘
         │ (only if errors)
  ┌─ WAVE 4: FIX WAVE ─────────────────────────────────────┐
  │  Plan ALL fixes at once (not one by one)                │
  │  Batch fix all errors in one edit wave                  │
  │  Check again ONCE                                       │
  │  If still errors → check error_learning_vault.md        │
  │  Apply P0-13 escalation if needed                       │
  └─────────────────────────────────────────────────────────┘

COST: For N files = 1 plan + 1-2 thinks + N edits + 1-2 checks = N+4 cycles
SAVINGS: 3N cycles → N+4 cycles = ~55% fewer cycles for 10+ files
```

---

## WAVE EXECUTION RULES

### Rule 1: PLAN BEFORE TOUCHING ANY FILE

```
BEFORE editing anything, AI MUST create a mental plan:

PLAN FORMAT:
  Task: [what user asked]
  Files to create/edit: [list ALL files]
  Dependencies:
    Batch A (no deps):    [file1, file2, file3]
    Batch B (needs A):    [file4, file5]
    Batch C (needs B):    [file6]
  Estimated edits: [count]
  Estimated waves: [count]

WRONG: Start editing file 1 immediately, figure out file 2 later
RIGHT: List all files first, group by dependency, then execute in waves
```

### Rule 2: GROUP FILES INTO PARALLEL BATCHES

```
Files that DON'T depend on each other → same batch (parallel)
Files that DO depend on each other → sequential batches

EXAMPLE (Create Vue module):
  Batch A (parallel — no dependencies):
    → types/teacher.ts
    → locales/zh-CN/teacher.json
    → locales/en-US/teacher.json

  Batch B (needs types from A):
    → stores/teacher.store.ts
    → mock/teacher.mock.ts

  Batch C (needs store from B):
    → views/TeacherList.vue
    → views/TeacherForm.vue
    → views/TeacherDrawer.vue
    → views/TeacherDetail.vue

  Batch D (needs views from C):
    → router/modules/teacher.ts

  TOTAL: 4 waves instead of 10 serial cycles
```

### Rule 3: WRITE MULTIPLE FILES PER MESSAGE

```
Gemini can write multiple files in one response.
DO NOT write 1 file → pause → write next file → pause.

WRONG:
  Response 1: Create types/teacher.ts
  Response 2: Create stores/teacher.store.ts
  Response 3: Create views/TeacherList.vue

RIGHT:
  Response 1: Create types/teacher.ts + locales/zh-CN + locales/en-US (Batch A)
  Response 2: Create stores/teacher.store.ts + mock/teacher.mock.ts (Batch B)
  Response 3: Create ALL 4 views (Batch C)

FILES PER RESPONSE TARGET:
  Small files (<50 lines): 3-5 files per response
  Medium files (50-200 lines): 2-3 files per response
  Large files (200+ lines): 1 file per response
```

### Rule 4: CHECK ONCE, NOT AFTER EVERY FILE

```
WRONG:
  Edit file 1 → npm run build → fix error → edit file 2 → npm run build → ...

RIGHT:
  Edit ALL files → npm run build ONCE → fix ALL errors in one wave → build again

EXCEPTION: If one file MUST work before others can be written
  (e.g., types must compile before store can import them)
  → Check after that critical batch only, then continue
```

### Rule 5: FIX IN WAVES, NOT ONE-BY-ONE

```
After check finds 5 errors:

WRONG:
  Fix error 1 → check → fix error 2 → check → fix error 3 → check → ...

RIGHT:
  Read ALL 5 errors → plan fixes for ALL 5 → apply ALL fixes → check ONCE

If still errors after fix wave:
  → Check error_learning_vault.md
  → Apply P0-13 escalation protocol
  → Maximum 3 fix waves before escalating
```

---

## BATCH WAVE TEMPLATES

### TEMPLATE A: New App Scaffold (8 files)

```
PLAN:
  Batch A (parallel): vite.config.ts + tailwind.css + env files     [3 files]
  Batch B (parallel): types/ + composables/                          [2 files]
  Batch C (parallel): stores/ + router/                              [2 files]
  Batch D: App.vue (imports from B+C)                                [1 file]
  CHECK: npm run build

WAVES: 4 edit waves + 1 check = 5 total
SERIAL WOULD BE: 8 edit + 8 check = 16 total
SAVINGS: 69%
```

### TEMPLATE B: Website (5 pages)

```
PLAN:
  Batch A: index.html (hero + nav + footer structure)                [1 file]
  Batch B (parallel): about.html + services.html + portfolio.html    [3 files]
  Batch C: contact.html (may reference other pages)                  [1 file]
  Batch D (parallel): styles.css + script.js + animations.js         [3 files]
  CHECK: Open in browser, test all links

WAVES: 4 edit waves + 1 check = 5 total
SERIAL WOULD BE: 8 edit + 8 check = 16 total
SAVINGS: 69%
```

### TEMPLATE C: Claude Module (14 steps)

```
PLAN:
  Batch A (parallel): migration.sql + seed.sql                       [2 files]
  Batch B (parallel): types.ts + locales/zh-CN + locales/en-US       [3 files]
  Batch C: store.ts (needs types)                                    [1 file]
  Batch D (parallel): mock/*.ts (6 files)                            [6 files]
  Batch E (parallel): Form.vue + List.vue + Detail.vue + Drawers     [4 files]
  Batch F: router/module.ts (needs views)                            [1 file]
  Batch G: workflow-tests (needs all above)                          [1 file]
  CHECK: pnpm dev:local → test module

WAVES: 7 edit waves + 1 check = 8 total
SERIAL WOULD BE: 14 edit + 14 check = 28 total
SAVINGS: 71%
```

### TEMPLATE D: Bug Fix (3 related errors)

```
PLAN:
  Read ALL 3 errors first
  Identify: are they related? (same root cause?)
  If same root cause: 1 fix solves all 3
  If different causes: batch all 3 fixes in 1 wave
  CHECK: npm run build ONCE

WAVES: 1 plan + 1 fix wave + 1 check = 3 total
SERIAL WOULD BE: 3 debug + 3 fix + 3 check = 9 total
SAVINGS: 67%
```

---

## COMPARISON TABLE: SERIAL vs BATCH

| Task | Serial Cycles | Batch Waves | Cycles Saved | % Faster |
|------|--------------|-------------|-------------|----------|
| 1 file edit | 3 | 3 | 0 | 0% |
| 3 file edit | 9 | 5 | 4 | 44% |
| 5 page website | 15 | 8 | 7 | 47% |
| 8 layer app scaffold | 24 | 12 | 12 | 50% |
| 10 file module | 30 | 14 | 16 | 53% |
| 14 step Claude pipeline | 42 | 19 | 23 | 55% |
| 3 bug fixes | 9 | 4 | 5 | 56% |
| 20 file refactor | 60 | 26 | 34 | 57% |

**Break-even point**: Batching helps when editing **2+ files**.
**Sweet spot**: 5-14 files = 47-55% faster.
**Maximum benefit**: 20+ files = 57%+ faster.

---

## WHEN NOT TO BATCH

```
DO NOT BATCH when:
  → Task is 1 single file edit (no benefit)
  → User specifically asks "do this step by step" (respect user preference)
  → Debugging an unknown error (need to see each step's result)
  → First time working in a new codebase (need to understand before bulk editing)

ALWAYS BATCH when:
  → Creating new module/page/component (multiple files)
  → Scaffolding new project (many config files)
  → Fixing multiple known errors (from error_learning_vault.md)
  → Applying design system across multiple files
  → i18n translations (always multiple locale files)
```

---

## P0-14: BATCH EXECUTION RULE

```
P0-14  BATCH EXECUTION: For tasks with 2+ files:
       → PLAN all files first (list + dependencies + batches)
       → EXECUTE in parallel batches (independent files together)
       → CHECK once after all edits (not after each file)
       → FIX in waves if errors (all fixes at once, not one-by-one)
       → Write multiple small files per response
       → Never: edit → check → edit → check serial loop for known multi-file tasks
```

---

_Batch Execution Protocol V15 — Plan → Execute → Check in waves (2026-04-02)_
_Result: 40-57% fewer cycles, same output quality, significantly faster completion._
