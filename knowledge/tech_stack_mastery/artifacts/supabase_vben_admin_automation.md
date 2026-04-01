# 🏗️ Supabase Vben Admin Automation Framework (V1.0)

> **Status**: Core Automation Standard for Admin Projects.
> **Logic**: 13-step sequential pipeline for zero-placeholder CRUD generation.
> **Upgraded**: 2026-03-31

---

## 🚀 The 14-Step AI Skills Pipeline
Every new module (e.g., "new module Article") must trigger this exact sequence:

1.  **interactive-schema-consultation**: (MANDATORY PAUSE) Ask the user: "What database table will this use, and what are the specific columns?" Proactively recommend standard columns (e.g., status, sort, isDelete, relation FKs). **STOP and WAIT for explicit user confirmation** before generating any code or SQL.
2.  **generate-supabase-schema**: Create SQL (Table + RLS + Triggers + Audit Fields) based ONLY on the confirmed consultation.
3.  **generate-store**: Define TypeScript interfaces → Create Pinia store → API methods.
4.  **generate-views**: Generate 6 Vue 3 files (List, Form, Detail, + 3 specialized drawers).
5.  **generate-route**: Register module in the application router.
6.  **generate-i18n**: Create `zh-CN` and `en-US` locale files.
7.  **workflow-test**: Execute automated CRUD simulation to verify integrity.
8.  *(Steps 8-13 follow internal refinement and QA protocols)*.

---

## 🛡️ The 4 Protect-Quality Rules
1.  **Read Skill FIRST**: Never pattern-match from existing code; follow the `.claude/skills/` markdown EXACTLY.
2.  **One Step at a Time**: Complete each step 100% before starting the next. No multi-tasking.
3.  **Field Names = UI Labels**: `shortDescription` must become "Short Description" in the UI. Never rename or abbreviate.
4.  **AskUserQuestion**: Every decision point must use the simulated `AskUserQuestion` tool with preset options.

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
