---
layer: root
name: claude-knowledge-index
description: Single entry point for any AI (Claude, Gemini 3 Flash, etc.) — routes chat triggers to specific skill/knowledge files. Pyramid-read protocol saves tokens by lazy-loading only matched sub-paths.
triggers: ["ai claude", "claude skill", "claude knowledge", "what can claude do", "claude index"]
enforcement: universal-pyramid-v1
version: 1.0
last_updated: 2026-04-16
sub_layers:
  - path: ./shared/
    purpose: cross-project base skills (CRUD scaffolding, schema, i18n, routes, staging, tests) — LOCKED
    source: C:/Users/user/.gemini/antigravity/skills/claude/
  - path: ./frontend/
    purpose: admin panel + webapp (Vben + Vue 3 + Ant Design) skills
    source: C:/Users/user/.gemini/antigravity/skills/claude-frontend/
  - path: ./website/
    purpose: website (PHP + Supabase REST — LAA agent website) skills
    source: C:/Users/user/.gemini/antigravity/skills/claude-website/
  - path: ./meta/
    purpose: orchestrators & validators (plan-first, validate-knowledge)
    source: C:/Users/user/.gemini/antigravity/skills/claude-meta/
---

# 🧭 Claude Knowledge Index — ROOT LAYER

> **Single entry point.** When a user types *"ai claude"*, any AI — Claude or Gemini 3 Flash — reads THIS file first, routes by trigger, drills into one sub-path, and stops. Nothing else is auto-loaded.

---

## 🔺 Pyramid Read Protocol (universal — enforced rule)

**Rule:** All AIs reading this knowledge tree MUST follow the pyramid:

1. **L0 — Root entry.** Start at this `INDEX.md`. Read the frontmatter + Layer 1 map only.
2. **L1 — Domain match.** Match the user's chat message / current task against the **Trigger** columns below. Pick at most ONE domain.
3. **L2 — Skill drill.** Load ONLY the matched `skill.md` file. Absolute path is in the routing table.
4. **L3+ — Recursive.** If that skill file has `requires:` / `see also:` pointers, recurse into those *on demand only*.
5. **NEVER eagerly load all skills.** If unsure which matches, ASK the user — don't load everything.
6. **Stop when triggers don't match.** If no trigger matches, report "no matching claude skill" and ask the user to clarify.

**Why pyramid?** Each folder = one layer. Each layer's `INDEX.md` (or `_layer.yaml` for Gemini) tells the AI what's inside and how to descend. Tokens are spent only on the matched path, not the whole tree. Future layers added without touching parents.

---

## 🗺 Layer 1 — Domain Map

| Domain | Read when task involves... | Drill into |
|---|---|---|
| **Meta** (orchestrators) | Multi-step builds, planning, validation — START HERE for any complex task | [Meta routing](#meta-skills) |
| **Shared** (base, LOCKED) | Generic CRUD module, schema analysis, Pinia store, routes, i18n, E2E, staging, image upload | [Shared routing](#shared-skills) |
| **Frontend** | Admin panel, Vben 5.x, Vue 3, Ant Design, webapp, admin CRUD UI | [Frontend routing](#frontend-skills) |
| **Website** | LAA agent website, PHP, Supabase REST bridge, landing pages, SEO slug routing | [Website routing](#website-skills) |
| **Project-level** | Repo-specific content in `c:/Users/user/Desktop/admin-panel-quizLaa/.gemini/` | [Project refs](#project-level-knowledge) |

---

## 🧭 Flow Recipes — Pre-Computed Skill Chains

When `plan-first` (meta) orchestrator runs, it maps user intent to ONE of these recipes. The `plan-first` skill produces an upfront written plan from the matched row. Flash then executes step-by-step without re-reasoning.

| Recipe | Intent Keywords | Skill Chain |
|---|---|---|
| `FULL_CRUD` | "new module", "full crud", "create module" | analyze-schema → generate-supabase-schema → generate-store → generate-views → generate-route → generate-i18n → workflow-test → generate-e2e |
| `RELATIONAL_TABLE` | "new table", "junction table", "m2m", "many-to-many" | analyze-schema → generate-supabase-schema → generate-store → generate-views → generate-route → generate-i18n |
| `WEBAPP_GENESIS` | "new webapp", "genesis", "handshake", "project init" | webapp-genesis → generate-supabase-schema → generate-store |
| `AUTH_RLS_SETUP` | "auth setup", "rls", "multi-project auth", "jwt hook" | supabase-auth-architecture → generate-supabase-schema (public) → supabase-rls-rbac-design → mcp-supabase-postgres-connection |
| `IMAGE_UPLOAD` | "image upload", "avatar", "crop modal" | image-upload-spec → generate-views (upload fields) |
| `TESTING_PIPELINE` | "test cases", "e2e", "workflow test", "playwright" | generate-views (if not done) → workflow-test → generate-e2e |
| `WEBSITE_MIGRATION` | "migrate website", "php supabase", "api re-architecture" | claude-website (orchestrator, includes 10-step migration internally) |
| `UI_CONSISTENCY` | "ui standardization", "detail view", "section divider" | ui-standardization (reference read only) |

**Rule:** Match literally. 1 recipe per task. If 0 match → ASK. If 2+ match → ASK.

---

## 🎯 Layer 2 — Skill Trigger Routing Tables

### Meta skills
**Source:** `C:/Users/user/.gemini/antigravity/skills/claude-meta/`

| Skill | Trigger keywords | Path |
|---|---|---|
| **plan-first** (orchestrator) | plan first, build module, new module, start feature, ready to build, create crud, full module, new table | `C:/Users/user/.gemini/antigravity/skills/claude-meta/plan-first/skill.md` |
| validate-knowledge | validate knowledge, lint skills, check frontmatter, audit format, validate claude | `C:/Users/user/.gemini/antigravity/skills/claude-meta/validate-knowledge/skill.md` |

### Shared skills
**Source:** `C:/Users/user/.gemini/antigravity/skills/claude/` (LOCKED — reference only, no content edits)

| Skill | Trigger keywords | Path |
|---|---|---|
| analyze-schema | analyze schema, table structure, new entity, confirm relationships | `C:/Users/user/.gemini/antigravity/skills/claude/analyze-schema/skill.md` |
| create-module | create module, new module, ready next module, full module pipeline | `C:/Users/user/.gemini/antigravity/skills/claude/create-module/skill.md` |
| generate-e2e | generate e2e, e2e tests, test cases, end-to-end tests | `C:/Users/user/.gemini/antigravity/skills/claude/generate-e2e/skill.md` |
| generate-i18n | generate i18n, translations, locale json, zh en translations | `C:/Users/user/.gemini/antigravity/skills/claude/generate-i18n/skill.md` |
| generate-route | generate route, vue router, add menu, route configuration | `C:/Users/user/.gemini/antigravity/skills/claude/generate-route/skill.md` |
| generate-store | generate store, pinia store, types and store, supabase crud | `C:/Users/user/.gemini/antigravity/skills/claude/generate-store/skill.md` |
| generate-supabase-schema | generate schema, supabase sql, generate sql, supabase schema | `C:/Users/user/.gemini/antigravity/skills/claude/generate-supabase-schema/skill.md` |
| generate-views | generate views, vue components, generate form, list detail form | `C:/Users/user/.gemini/antigravity/skills/claude/generate-views/skill.md` |
| image-upload-spec | image upload, image spec, avatar upload, crop modal, upload field | `C:/Users/user/.gemini/antigravity/skills/claude/image-upload-spec/skill.md` |
| staging | staging mode, dev local, dev supabase, switch env, build local, build supabase | `C:/Users/user/.gemini/antigravity/skills/claude/staging/skill.md` |
| supabase-auth-architecture | supabase auth, multi project auth, auth architecture, otp flow, jwt claims | `C:/Users/user/.gemini/antigravity/skills/claude/supabase-auth-architecture/skill.md` |
| ui-standardization | ui standardization, detail view layout, section divider, ui conventions, card layout | `C:/Users/user/.gemini/antigravity/skills/claude/ui-standardization/skill.md` |
| workflow-test | workflow test, playwright, automated crud test, workflow config | `C:/Users/user/.gemini/antigravity/skills/claude/workflow-test/skill.md` |

### Frontend skills
**Source:** `C:/Users/user/.gemini/antigravity/skills/claude-frontend/`

| Skill | Trigger keywords | Path |
|---|---|---|
| claude-frontend (orchestrator) | sovereign framework, swf, 14-step, frontend orchestrator, sovereign web | `C:/Users/user/.gemini/antigravity/skills/claude-frontend/SKILL.md` |
| webapp-genesis | genesis, handshake, identity sync, plumbing, new webapp | `C:/Users/user/.gemini/antigravity/skills/claude-frontend/webapp-genesis/skill.md` |
| image-upload-spec (frontend) | image upload (admin), avatar upload | `C:/Users/user/.gemini/antigravity/skills/claude-frontend/image-upload-spec/skill.md` |
| staging (frontend) | staging mode (admin), switch env | `C:/Users/user/.gemini/antigravity/skills/claude-frontend/staging/skill.md` |
| supabase-auth-architecture (frontend) | supabase auth (admin), jwt claims | `C:/Users/user/.gemini/antigravity/skills/claude-frontend/supabase-auth-architecture/skill.md` |
| ui-standardization (frontend) | ui conventions (admin), detail view | `C:/Users/user/.gemini/antigravity/skills/claude-frontend/ui-standardization/skill.md` |

### Website skills
**Source:** `C:/Users/user/.gemini/antigravity/skills/claude-website/`

| Skill | Trigger keywords | Path |
|---|---|---|
| claude-website (orchestrator) | api re-architecture, dynamic routing, 10-step migration, php supabase, seo slug, sovereign rest | `C:/Users/user/.gemini/antigravity/skills/claude-website/SKILL.md` |

---

## 📖 Layer 2 — Knowledge References (non-procedural)

Pure reference docs. Load ONLY when a skill says "see X" or trigger matches.

| File | Purpose | Path |
|---|---|---|
| supabase-rls-rbac-design | Multi-project RBAC + RLS design (schemas, roles, JWT hooks, policies, edge functions) | `C:/Users/user/.gemini/antigravity/skills/claude/supabase-rls-rbac-design.md` |
| mcp-supabase-postgres-connection | Self-hosted Supabase MCP + SSH tunnel config | `C:/Users/user/.gemini/antigravity/skills/claude/mcp-supabase-postgres-connection.md` |
| supabase-rls-rbac-design (frontend copy) | Same as above — frontend mirror | `C:/Users/user/.gemini/antigravity/skills/claude-frontend/supabase-rls-rbac-design.md` |
| mcp-supabase-postgres-connection (frontend copy) | Same as above — frontend mirror | `C:/Users/user/.gemini/antigravity/skills/claude-frontend/mcp-supabase-postgres-connection.md` |

---

## 🧱 Layer 2 — Project-Level Knowledge

**Source:** `c:/Users/user/Desktop/admin-panel-quizLaa/.gemini/` (repo-scoped)

| File | Purpose | Path |
|---|---|---|
| architecture_wisdom | High-level architectural concepts for claude-website (referenced by claude-website/SKILL.md) | `c:/Users/user/Desktop/admin-panel-quizLaa/.gemini/antigravity/knowledge/claude-website/architecture_wisdom.md` |
| quizlaa_relational_nexus | Project-level relational model for quizLaa | `c:/Users/user/Desktop/admin-panel-quizLaa/.gemini/knowledge/quizlaa_relational_nexus.md` |
| vben-admin-supabase-creation-skills | Project-level Vben admin skills | `c:/Users/user/Desktop/admin-panel-quizLaa/.gemini/skills/claude/vben-admin-supabase-creation-skills.md` |
| webapp-supabase-creation-skills | Project-level webapp skills | `c:/Users/user/Desktop/admin-panel-quizLaa/.gemini/skills/claude-frontend/webapp-supabase-creation-skills.md` |
| new-relational-table-playbook | Project-level M2M/relational table playbook | `c:/Users/user/Desktop/admin-panel-quizLaa/.gemini/skills/shared/new-relational-table-playbook.md` |

---

## 🔧 How to Extend (pyramid discipline)

When adding new claude knowledge:

1. **New skill** → drop into appropriate `C:/Users/user/.gemini/antigravity/skills/claude{,-frontend,-website}/<skill-name>/skill.md` with proper YAML frontmatter (`name`, `description`, `triggers`, `phase`).
2. **Update this `INDEX.md`** — add a row to the matching Trigger Routing Table. This is the ONLY file that needs editing for AI discoverability.
3. **New sub-domain** → create `C:/Users/user/.gemini/antigravity/knowledge/claude/<sub-domain>/INDEX.md` with its own frontmatter + routing table. Then reference it here under Layer 1.
4. **Pure reference doc (no triggers)** → add to the Knowledge References table above, not the Skill table.

---

## 🔗 Upstream Authority

This INDEX.md is the **routing layer**. The constitutional/cognitive authority lives upstream at:

- **`C:/Users/user/.gemini/antigravity/knowledge/_shared/unchangable/claude/CLAUDE_KERNEL.md`** — the immutable Claude Kernel (V1.1, 2026-04-14). Defines hybrid G3/G4 synergy, 14-step quality pipeline, intelligence registry. **Read after INDEX.md** when task needs strategic/architectural grounding.

Pyramid:
```
L0: This INDEX.md                           ← entry router
L1: CLAUDE_KERNEL.md (constitutional)       ← upstream authority
L2: SKILL.md / skill.md (procedural)        ← execution recipes (drilled by trigger)
L3: Knowledge .md (reference, on-demand)    ← called by skills via "see also"
```

## 🪪 Enforcement (Universal Pyramid Protocol)

This pyramid protocol is a **universal rule** for:
- **Claude Code** — via user `C:/Users/user/.claude/CLAUDE.md` entry + memory `MEMORY.md` pointer
- **Gemini 3 Flash** — via `C:/Users/user/.gemini/antigravity/knowledge/GROUND_KERNEL.md` + `hub.yaml`

**Both AIs MUST:**
1. Read THIS `INDEX.md` first when "ai claude" / claude-skill trigger detected
2. Match trigger → load ONLY matched path
3. Recurse into deeper layers only when the loaded file explicitly points to them
4. NEVER eagerly walk the full skills/knowledge tree

---

**Skill Version**: 1.0 · **Authors**: Claude Opus 4.6 + user · **Last validated**: 2026-04-16
