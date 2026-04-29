---
archive_type: "blueprint-seed"
project_type: "project"
stack: ["Vue 3", "Vite", "TypeScript", "Ant Design Vue", "VXE Table", "Pinia", "TurboRepo", "pnpm workspaces", "Supabase JWT"]
pattern: "vue-vben-admin-monorepo"
tags: ["admin-panel", "dashboard", "enterprise", "monorepo", "vue3", "ant-design", "supabase", "rbac", "vxe-table"]
best_for: "Enterprise admin panel / management dashboard / CRUD system with roles & permissions"
origin_project: "admin-panel-quizLaa (quizLAA ecosystem)"
archived_date: "2026-04-29"
isolation_firewall: "applied — all business data stripped"
---

# 🛡️ BLUEPRINT SEED — Vue 3 + Vben Admin Panel

> **How to use**: Clone this file → fill in `[placeholder]` values for new project → run shallow scan → ask user for deep scan if needed.

---

## 🏢 COMPANY
- **Company Name**: [placeholder]
- **Tagline**: [placeholder]
- **Address**: [placeholder]
- **Contact**: [placeholder]

---

## 🎯 TARGET AUDIENCE
- **Primary Users**: [e.g. Admin staff — full CRUD access]
- **Secondary Users**: [e.g. Managers — read + limited edit]
- **Device**: Desktop-first admin panel
- **Language**: [placeholder — e.g. Bilingual EN/CN via Vue I18n]

---

## 📌 PROJECT OVERVIEW
- **Folder**: `[project-folder]/`
- **Type**: Admin Panel (Enterprise Monorepo)
- **Framework Base**: Vue Vben Admin 5.x (Vue 3 + Vite + TurboRepo + pnpm workspaces)
- **Purpose**: [placeholder — management interface for the ecosystem]
- **Dev URL**: http://localhost:[PORT] (check terminal — Vben picks dynamic port)
- **Dev Command**: `cd [project-folder] && pnpm dev:local`

---

## 🛠️ TOOLS USED
- **Framework**: Vue 3.5 + Vite + TypeScript (Strict)
- **Monorepo**: TurboRepo + pnpm workspaces (node ≥20.12.0, pnpm ≥10.0.0)
- **UI Library**: Ant Design Vue
- **Table**: VXE Table (`useVbenVxeGrid`)
- **State**: Pinia (setup syntax — all stores MUST implement `$reset`)
- **Forms**: VbenForm (schema-based, zod validation)
- **Router**: Vue Router (dynamic permissions via `@vben/access`)
- **i18n**: Vue I18n — `apps/web-antd/src/locales/langs/{en-US,zh-CN}/page.json`
- **Database**: Supabase (hosted or Docker) — schema: `[schema-name]`
- **Storage**: Supabase Storage — bucket: `[bucket-name]`
- **Auth**: Supabase JWT with custom claims
- **HTTP**: axios-based request client (`packages/effects/request`)

---

## 🏗️ STRUCTURE MAP
```
[project-folder]/
├── apps/
│   ├── web-antd/              # ⭐ MAIN APP (primary UI)
│   │   └── src/
│   │       ├── api/           # Supabase API functions per entity
│   │       ├── adapter/       # VXE Table + Form adapters
│   │       ├── composables/   # useEntityForm, useDrawerCloseConfirm
│   │       ├── router/routes/modules/  # Dynamic routes per entity
│   │       ├── stores/        # Pinia stores (auth + data-refresh + entity stores)
│   │       ├── types/         # TypeScript types per entity
│   │       ├── utils/         # delete-actions.ts, upload.ts
│   │       ├── views/         # All page components per entity
│   │       └── locales/langs/ # en-US + zh-CN JSON translations
│   └── backend-mock/          # Optional Nitro mock server
├── packages/                  # Shared Vben framework packages (do not modify)
├── supabase/
│   └── migrations/            # All SQL migration files (numbered sequentially)
└── CLAUDE.md                  # Vben patterns reference
```

---

## 🎨 DESIGN SYSTEM
- **Framework**: Ant Design Vue (token-based theming)
- **Theme Mode**: Light (Ant Design default)
- **Form Layout**: Dual-column schema for large entities (`useEntityForm`)
- **Tables**: VXE Table with `defaultGridOptions` (stripe, resize, custom columns, pagination)
- **Drawers**: `useVbenDrawer` — 520px width standard
- **Status Tags**: `CellStatus` renderer with color mapping
- **Action Buttons**: `CellActions` renderer (view/edit/delete pattern)
- **Toolbar Buttons**: `ToolbarButton` renderer
- **Images**: `CellImage` renderer; upload via `upload.ts` → Supabase Storage
- **FK Links**: `CellFkLink` renderer — clickable blue links to related entity detail drawer

---

## ⚙️ KEY PATTERNS (Adapt for New Project)

| Pattern | Location | Notes |
|---|---|---|
| Module structure | `views/{entity}/list.vue`, `form.vue`, `detail.vue`, `drawer/` | Reference: clients module pattern in CLAUDE.md |
| Store pattern | `stores/{entity}.ts` | Setup syntax + MUST implement `$reset` |
| Data refresh | `stores/data-refresh.ts` | `invalidate*()` triggers table re-query |
| TABLE_IDS constants | `stores/data-refresh.ts` | Unique IDs prevent localStorage conflicts |
| Upload utility | `utils/upload.ts` | `getImgUrl()` for Supabase Storage URL resolution |
| Delete confirmation | `utils/delete-actions.ts` | Reusable modal pattern |
| i18n keys | `locales/langs/{en-US,zh-CN}/page.json` | Add entity keys under `page.[entity].*` |
| Route registration | `router/routes/modules/{entity}.ts` | Auto-imported via Vite glob |

---

## 🔒 ROLE HIERARCHY TEMPLATE

| Role | Level | Access |
|---|---|---|
| `admin` | 20 | Full CRUD |
| `staff` | 50 | Limited management |
| `[role]` | [level] | [access] |

**JWT Custom Claims**: `user_role`, `project_id`, `role_level`. NEVER overwrite `role` claim (PostgREST reserved).

---

## 💡 IDEAS BACKLOG
*(empty — fill for new project)*

---

## 🔗 CROSS-PROJECT RELATIONSHIPS
*(empty — fill for new project)*

---

## 📝 CHANGE LOG
*(empty — new project)*

---

## ✅ OPEN TASKS
*(empty — new project)*

---

## 🧬 BLUEPRINT META
- **Blueprint Type**: Project
- **Template Version**: V3.0
- **Stack Pattern**: Vue 3 + Vben Admin + VXE Table + Ant Design + Supabase
- **Clone Seed**: Yes — strip `[placeholder]` values and fill for new project
