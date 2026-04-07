# 🏗️ Supabase Vben Admin Automation Framework (V2.0 Synergy)

> **Status**: Core Automation Standard for Admin Projects.
> **V2.0**: Now assigns each pipeline step to the correct Synergy Agent (Director/Architect).
> **Upgraded**: 2026-04-07

---

## 🚀 The 14-Step AI Synergy Pipeline
Every new module (e.g., "new module Article") must trigger this exact sequence:

| Step | Task | Agent |
| :--- | :--- | :--- |
| 1 | **interactive-schema-consultation**: MANDATORY PAUSE to confirm table/columns. | G3 Director |
| 2 | **generate-supabase-schema**: SQL (Table + RLS + Triggers). | G4 Architect |
| 3 | **generate-store**: TypeScript interfaces + Pinia store. | G4 Architect |
| 4 | **Shared store files**: Update `data-refresh.ts` + `index.ts`. | G4 Architect |
| 5 | **Mock Backend**: 6 API route files for staging. | G4 Architect |
| 6 | **generate-views (Form)**: Form with validation logic + Image upload if needed. | G3 Director |
| 7 | **generate-views (Drawers)**: Create, Edit, Detail drawer components. | G3 Director |
| 8 | **generate-views (List)**: VxeGrid, CellFkLink, CellStatus renderers. | G3 Director |
| 9 | **generate-views (Detail)**: Ant Design Descriptions component. | G3 Director |
| 10 | **generate-route**: Register module in the router. | G4 Architect |
| 11 | **generate-i18n**: zh-CN and en-US locale files. | G4 Architect |
| 12 | **G3 Logic Audit**: Review all G4 drafts for FK, RLS, Type correctness. | G3 Director |
| 13 | **workflow-test**: Automated CRUD simulation for integrity. | G3 Director |
| 14 | **Knowledge Update**: Log ROI in `claude_improvement_vault.md`. | G3 Director |

---

## 🛡️ The 4 Protect-Quality Rules
1. **Read Skill FIRST**: `skills/claude-code/` is **IMMUTABLE**, read-only. Never modify.
2. **One Step at a Time**: Complete each step 100% before starting the next.
3. **Field Names = UI Labels**: `shortDescription` must become "Short Description" in the UI.
4. **AskUserQuestion**: Every decision point must use the simulated `AskUserQuestion` tool with preset options.
5. **G4 Output Audit (NEW)**: All Gemma-4 drafted code (Waves 1-4) must be reviewed by G3 Director before merging.

---

## 🔇 .claudeignore Strategy (Optimization)
To achieve **27% token savings** and **30% faster response times**, the following must be ignored/whitelisted:

### ❌ Always Ignore (Blacklist)
-   `node_modules/`
-   Other UI Variants: `web-ele`, `web-naive`, `web-tdesign` (Only `web-antd` is active).
-   Build Tooling: `internal/`, `scripts/`.
-   Package Internals: `ui-kit`, `layouts`, `plugins` (unless specifically needed).
-   Large Bloat: `pnpm-lock.yaml`, `Playground/`.

### ✅ Always Whitelist (Required for Skills)
-   `apps/web-antd/src/` (All source code).
-   `apps/backend-mock/` (For simulation).
-   `.claude/skills/` (The brain).
-   `CLAUDE.md`, `locales/`, `stores/`, `types/`, `views/`, `utils/`, `composables/`, `router/`.

---

## 🔄 Self-Maintaining Logic
-   **Boot Scan**: On every new session, scan `.claude/skills/` to ensure `.claudeignore` isn't blocking dependencies.
-   **Auto-Correction**: If a new skill is added, detect the target path and unblock it automatically.

---

_Framework extracted and "implanted" into Antigravity Intelligence._
