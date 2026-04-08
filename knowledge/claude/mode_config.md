# Claude Mode — V16 Configuration (Synergy Active)

> Trigger: "ai claude", "claude mode", "create module", "entity", "CRUD", "vben", "admin panel"
> Identity: CLAUDE_SYNERGY_PIPELINE_V16
> Folder lock: `_shared/` + `claude/` + `skills/claude-code/` only.
> Blocked: `normal/`, `faucet/`, `skills/normal/`, `skills/faucet/`

---

## ⛔ IMMUTABLE ZONE — ABSOLUTE RULE

```
DIRECTORY: skills/claude-code/

STATUS: PERMANENTLY LOCKED. READ-ONLY FOREVER.

RULE:
  ✗ NEVER edit any file inside skills/claude-code/
  ✗ NEVER add, remove, or rename files inside skills/claude-code/
  ✗ NEVER modify skill logic, steps, or patterns inside skills/claude-code/

  ✓ Skills are FIXED REFERENCES. The AI reads them as ground truth.
  ✓ All adaptations, synergy logic, and improvements go into:
      → knowledge/claude/ai_claude_protocol.md
      → knowledge/claude/mode_config.md
      → knowledge/claude/claude_brain_V15.md
      → knowledge/claude/claude_improvement_vault.md

MANTRA: Knowledge wraps around Skills. Skills never change.
```

---

## 📋 FUTURE KNOWLEDGE RULE (PERMANENT)

> Any new knowledge saved to `knowledge/claude/` MUST include:
> 1. **Agent Tag**: Which model (G3 Director / G4 Architect) owns each task or pattern.
> 2. **Synergy Bridge**: How G3 and G4 hand off to each other for that step.
> 3. **Fallback**: What G3 does when G4 is offline (Cloud-Solo mode).

---

## FILE INDEX (What's In This Folder)

```
PROTOCOL:
  ai_claude_protocol.md           → 7 Intelligence Patterns + boot sequence
  claude_improvement_vault.md     → Learning registry + token ROI tracker
  supabase_vben_admin_automation.md → Vben + Supabase automation rules

SKILLS (in skills/claude-code/):
  supabase-rls-rbac-design.md     → RLS + RBAC patterns (READ FIRST)
  mcp-supabase-postgres-connection.md → MCP server config (READ FIRST)
  create-module/skill.md          → MASTER 14-step pipeline
  analyze-schema/skill.md         → Entity analysis
  generate-store/skill.md         → Types + Pinia generation
  generate-supabase-schema/skill.md → SQL migration generation
  generate-views/skill.md         → Vue component generation
  generate-route/skill.md         → Router config generation
  generate-i18n/skill.md          → Translation generation
  generate-e2e/skill.md           → E2E test generation
  workflow-test/skill.md          → Workflow test generation
  image-upload-spec/skill.md      → Image upload config
  ui-standardization/skill.md     → UI conventions
  staging/skill.md                → Staging mode management
  supabase-auth-architecture/skill.md → Multi-project auth
```

---

## BOOT SEQUENCE (Claude-Specific)

```
Step 0.1: Mode activated → Read ai_claude_protocol.md
Step 0.2: Read skills/claude-code/supabase-rls-rbac-design.md
Step 0.3: Read skills/claude-code/mcp-supabase-postgres-connection.md
Step 0.4: Auto-checks:
  □ node_modules exists? → skip pnpm install
  □ .claudeignore/.geminiignore exists? → skip ignore setup
  □ Dev server healthy? → skip startup
  □ Docker running? → if no, ask user to start
Step 0.5: If ALL checks pass → auto-resume from session fingerprint
Step 0.6: If ANY check fails → show ONLY missing steps, wait for user
```

---

## 14-STEP TOKEN ECONOMY PIPELINE (Hybrid Quality)

> V17: Extreme Token Saving Architecture. **Gemma-4 (Architect/Local)** does heavy lifting (80% of tokens). **Gemini 3 (Director/Cloud)** provides JSON instructions and Vue High-Fidelity polish (20% of tokens).

```
WAVE 1 (Architect - G4 local compute): 
  [Gemini 3 provides only short JSON prompts mapping the schema]
  → Step 1: Migration SQL (FK, money, enum, image fields, RLS)
  → Step 2: Seed SQL (Malaysian locale data)
  → Step 3: Types (enums, interfaces, PageParams)
  → Step 4: Pinia Store Scaffold (Types + Supabase CRUD)

WAVE 2 (Architect - G4 local compute):
  → Step 5: Update shared stores (index.ts, data-refresh.ts)
  → Step 6: Mock backend (all JS/TS staging routes)
  → Step 12: Route module config
  → Step 13: i18n translations (Huge token savings doing this locally)
  → Step 14: Workflow tests

WAVE 3 (Director - G3 API compute / High-Fidelity UI):
  [Gemini 3 handles Vue files to guarantee perfect Vben/ShadUI integration]
  → Step 7: Form component (Complex validation & UI logic)
  → Step 8: Drawers (Create, Edit, Detail components)
  → Step 9: List component (CellFkLink, VxeGrid complex config)
  → Step 10: Detail component (AntD Descriptions & Layout)
  → Step 11: Parent list layer icon
```

---

## 7 INTELLIGENCE PATTERNS

```
Pattern 1: Consultation Card    → Show entity + fields + FK + RLS before starting
Pattern 2: Dependency Scanner   → Check parent modules exist before creating child
Pattern 3: Module Registry      → Track all modules in project (prevent duplicates)
Pattern 4: Quality Tracker      → 5-dimension self-check after each module
Pattern 5: Prediction           → Suggest next module based on FK schema
Pattern 6: Wave Batching        → Parallelize files within pipeline steps
Pattern 7: Common Mistakes      → WRONG/CORRECT for 4 error-prone skills
Pattern 8: Snipaste Local-Sync  → Use `ui-snap.png` for Zero-Token UI review (V27.0)
```

---

## PREDICTIONS & DELEGATION (Token Economy)

```
Rule 1: If a task outputs raw backend boilerplate > 100 lines (SQL, Mock, i18n), it MUST be assigned to G4.
Rule 2: G3 (Gemini) NEVER pushes full backend code. It yields instructions to G4.
Rule 3: G3 focuses its token allowance explicitly on standardizing standard Vue 3 / Shadcn UI syntax.
```

---

## RULES (Claude Mode Specific)

```
C-01  ALWAYS show Consultation Card before starting pipeline
C-02  ALWAYS check parent module dependencies before child
C-03  NEVER create duplicate modules (check registry)
C-04  ALWAYS use schema-qualified table names ({{SCHEMA}}.{{TABLE_NAME}})
C-05  ALWAYS generate both zh-CN and en-US translations
C-06  ALWAYS create workflow tests matching FK structure
C-07  Mock backend MUST mirror real Supabase response shape
C-08  Image fields use crop-modal pattern from image-upload-spec
C-09  Money fields use numeric(12,2) in SQL, number in TypeScript
C-10  Enum fields generate TypeScript enum + SQL check constraint
```

---

## CROSS-READ EXCEPTIONS

```
CROSS-READ ALLOWED:
  None. Claude mode is fully self-contained. 
  Brand tokens are now located in: claude/brand/
```

---

_Claude Mode V16 Config — Synergy Architecture (2026-04-07)_
