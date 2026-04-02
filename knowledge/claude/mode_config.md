# Claude Mode — V15 Configuration

> Trigger: "ai claude", "claude mode", "create module", "entity", "CRUD", "vben", "admin panel"
> This mode is for: Vben Admin + Supabase CRUD module development ONLY.
> Folder lock: `_shared/` + `claude/` + `skills/claude-code/` only.
> Blocked: `normal/`, `faucet/`, `skills/normal/`, `skills/faucet/`

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

## 14-STEP PIPELINE (From create-module Skill)

```
Step  1: Migration SQL (FK, money, enum, image fields)
Step  2: Seed SQL (Malaysian locale data)
Step  3: Types (enums, interfaces, PageParams)
Step  4: Pinia Store (Supabase CRUD operations)
Step  5: Update shared files (data-refresh, index, delete-actions)
Step  6: Mock backend (6 files for staging mode)
Step  7: Form component (with image upload if needed)
Step  8: Drawers (create, edit, detail)
Step  9: List component (CellFkLink for FK columns)
Step 10: Detail component (dual mode: page + drawer)
Step 11: Parent list layer icon (if 1:N children)
Step 12: Route module config
Step 13: i18n translations (zh-CN + en-US)
Step 14: Workflow tests (CRUD, instant, FK — based on structure)
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
```

---

## PREDICTIONS (After Step → Next Predicted)

```
After SQL migration  → types + store needed next
After types + store  → views (drawer, list, form) needed next
After views          → routes + i18n needed next
After i18n           → workflow tests needed next
After module done    → predict next module from FK schema
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
  If user says "check design for this module" → READ: normal/user_preference_dna.md ONLY
  If module needs brand colors → READ: normal/design_vault/theme-system.md ONLY

CROSS-READ BLOCKED:
  Everything else in normal/ and faucet/ folders.
```

---

_Claude Mode V15 Config — Vben Admin + Supabase Pipeline (2026-04-02)_
