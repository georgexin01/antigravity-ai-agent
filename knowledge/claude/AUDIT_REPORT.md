---
name: claude-audit-report
description: "Audit of all Claude-mode skills graded against Hybrid Format Protocol V1.1. Read-only diagnosis produced 2026-04-16. Supersedes no other file — used as source for DESIGN_PROPOSAL.md."
triggers: ["claude audit", "skill audit", "what's wrong with claude skills", "audit report"]
phase: reference
model_hint: gemini-3-flash
version: 1.0
status: active
date_created: "2026-04-16"
---

# Claude-Mode Skill Audit — Gemini 3 Flash Hybrid Format Protocol

**Audit date:** 2026-04-16
**Auditor scope:** claude/ (LOCKED), claude-frontend/, claude-website/, project-level skills, related knowledge files
**Protocol reference:** `C:/Users/user/.gemini/antigravity/knowledge/HYBRID_FORMAT_PROTOCOL.md` v1.1
**Locked scope:** `skills/claude/` base + `_shared/unchangable/`. Everything else improvable.

---

## Section 1: Per-Skill Grade Table

| File | Locked? | Frontmatter | Body | Complete? | Missing Fields | Top 2 Problems |
|---|---|---|---|---|---|---|
| `claude/analyze-schema/skill.md` | YES | PASS | PASS | Mostly | None | No Guardrails; `triggers` duplicated in prose |
| `claude/create-module/skill.md` | YES | PASS | PASS | YES | None | Step 1-14 use `###` not `##` (Flash chunking); no rollback |
| `claude/generate-e2e/skill.md` | YES | PASS | PASS | Partial | None | No Guardrails/STOP; no preflight |
| `claude/generate-i18n/skill.md` | YES | PASS | PASS | Partial | None | No Guardrails; no preflight/verify |
| `claude/generate-route/skill.md` | YES | PASS | PASS | Partial | None | No Guardrails; no preflight/verify/rollback |
| `claude/generate-store/skill.md` | YES | PASS | PASS | Mostly | None | Sections exceed 400-token limit; no Guardrails |
| `claude/generate-supabase-schema/skill.md` | YES | PASS | PASS | Mostly | None | Sections exceed 400-token limit; no Guardrails |
| `claude/generate-views/skill.md` | YES | PASS | PASS | Partial | None | Dead ref `/generate-mock` (line 28); massive sections |
| `claude/image-upload-spec/skill.md` | YES | PASS | PASS | Partial | None | No Guardrails; no preflight/rollback |
| `claude/mcp-supabase-postgres-connection.md` | YES | PASS | PASS | Partial | None | **HARDCODED PASSWORD in plain text**; no Guardrails |
| `claude/staging/skill.md` | YES | PASS | PASS | Partial | None | Mode table contradicts body (1 mode vs 3); no Guardrails |
| `claude/supabase-auth-architecture/skill.md` | YES | PASS | PASS (mixed CN/EN) | Partial | None | ~70% Chinese body; no Guardrails |
| `claude/supabase-rls-rbac-design.md` | YES | PASS | PASS | Partial | None | `model_hint: gemini-3-pro` on reference file; hardcoded test creds |
| `claude/ui-standardization/skill.md` | YES | PASS | PASS | Partial | None | No Guardrails; no preflight/rollback |
| `claude/workflow-test/skill.md` | YES | PASS | PASS | Partial | None | No top-level `## Steps`; no rollback |
| `claude-frontend/SKILL.md` | NO | **FAIL** — no frontmatter | **FAIL** — emoji headers, no chunking | NO | ALL required | Completely non-compliant legacy file |
| `claude-frontend/image-upload-spec/skill.md` | NO | PASS | PASS | Partial | None | Exact duplicate of base — zero value |
| `claude-frontend/staging/skill.md` | NO | PASS | PASS | Partial | None | Exact duplicate of base |
| `claude-frontend/supabase-auth-architecture/skill.md` | NO | PASS | PASS | Partial | None | Exact duplicate of base |
| `claude-frontend/supabase-rls-rbac-design.md` | NO | PASS | PASS | Partial | None | Exact duplicate of base |
| `claude-frontend/ui-standardization/skill.md` | NO | **FAIL** — frontmatter at line 31 | **FAIL** — structurally broken | NO (structural) | None in block but misplaced | Frontmatter invisible to parser; Image Fallback orphaned content |
| `claude-frontend/mcp-supabase-postgres-connection.md` | NO | PASS | PASS | Partial | None | Duplicate + hardcoded password |
| `claude-frontend/webapp-genesis/skill.md` | NO | **FAIL** — missing `triggers`, `model_hint`; invalid `phase: 1-genesis` | **FAIL** — emoji headers, no imperative steps | NO | `triggers`, `model_hint` | Unroutable; invalid phase enum |
| `claude-website/SKILL.md` | NO | **FAIL** — no frontmatter | **FAIL** — no chunking, no steps | NO | ALL required | Not a skill file — just loose prose |
| `project/.gemini/skills/claude/vben-admin-supabase-creation-skills.md` | LOCKED (per user) | **FAIL** | **FAIL** | NO | ALL required | No frontmatter, unroutable |
| `project/.gemini/skills/claude-frontend/webapp-supabase-creation-skills.md` | NO | **FAIL** | **FAIL** | NO | ALL required | No frontmatter |
| `project/.gemini/skills/shared/new-relational-table-playbook.md` | NO | **FAIL** | **FAIL** | NO | ALL required | No frontmatter; stub cross-ref only |
| `knowledge/claude-website/architecture_wisdom.md` | NO | **FAIL** | N/A (knowledge) | N/A | `name`/`triggers`/`model_hint` | No frontmatter |

---

## Section 2: Duplication Matrix

| Skill | Base copy | Duplicate copy | Diff |
|---|---|---|---|
| image-upload-spec | `claude/image-upload-spec/skill.md` | `claude-frontend/image-upload-spec/skill.md` | Byte-for-byte identical |
| staging | `claude/staging/skill.md` | `claude-frontend/staging/skill.md` | Byte-for-byte identical |
| supabase-auth-architecture | `claude/supabase-auth-architecture/skill.md` | `claude-frontend/supabase-auth-architecture/skill.md` | Byte-for-byte identical |
| supabase-rls-rbac-design | `claude/supabase-rls-rbac-design.md` | `claude-frontend/supabase-rls-rbac-design.md` | Byte-for-byte identical |
| mcp-supabase-postgres-connection | `claude/mcp-supabase-postgres-connection.md` | `claude-frontend/mcp-supabase-postgres-connection.md` | Byte-for-byte identical |
| ui-standardization | `claude/ui-standardization/skill.md` | `claude-frontend/ui-standardization/skill.md` | **DIVERGED** — frontend has prepended "Image Fallback Protocol" section (valuable!) but frontmatter is structurally broken |

**Action:** Replace 5 byte-identical duplicates with 3-line redirect stubs. For `ui-standardization`, merge Image Fallback Protocol into base first (or a new `image-fallback-protocol` skill), then stub.

---

## Section 3: Top 10 Problems Ranked by Severity

1. **[HIGH]** `claude-frontend/ui-standardization/skill.md` — Frontmatter at line 31, not line 1 (parser-invisible; Image Fallback Protocol content orphaned)
2. **[HIGH]** `claude-frontend/SKILL.md` + `claude-website/SKILL.md` — No frontmatter at all; not hybrid format; unroutable
3. **[HIGH]** `claude-frontend/webapp-genesis/skill.md` — Invalid `phase: 1-genesis` enum; missing `triggers`, `model_hint`
4. **[HIGH]** `claude/generate-views/skill.md` line 28 — Dead skill reference `/generate-mock` (doesn't exist)
5. **[HIGH]** `claude/mcp-supabase-postgres-connection.md` + frontend copy — **Hardcoded production PostgreSQL password in plain text** (`pUHqCHUVYg+7Bl6Hgcmou7RAfbwWXIr2VKP18SaH1sw=`)
6. **[MED]** 3 project-level skills — No frontmatter, unroutable
7. **[MED]** 5 exact-duplicate pairs across `claude-frontend/` — token waste, drift liability
8. **[MED]** All 15 `claude/` skills missing `## Guardrails` section (Protocol §3.3 template requirement)
9. **[MED]** `generate-store`, `generate-supabase-schema` sections massively exceed 400-token limit
10. **[LOW]** `supabase-rls-rbac-design.md` uses `gemini-3-pro` on a reference file (unnecessary cost)

---

## Section 4: Orchestration Opportunities (Flow Recipes)

### Flow Recipe 1 — Full CRUD Module
`analyze-schema → generate-supabase-schema → generate-store → generate-views → generate-route → generate-i18n → workflow-test → generate-e2e`

### Flow Recipe 2 — Image Upload Addition
`create-module (step 7 detection) → image-upload-spec → generate-views (upload fields)`

### Flow Recipe 3 — Auth + RLS Setup (New Project)
`supabase-auth-architecture → generate-supabase-schema (public schema) → supabase-rls-rbac-design → mcp-supabase-postgres-connection`

### Flow Recipe 4 — Testing Pipeline
`generate-views → workflow-test → generate-e2e`

### Flow Recipe 5 — WebApp Frontend (claude-frontend mode)
`webapp-genesis → [any CRUD skill] → webapp-supabase-creation-skills`

---

## Section 5: Preflight/Verify/Rollback Gap List

| File | Has preflight? | Has verify? | Has rollback? |
|---|---|---|---|
| analyze-schema | Partial (Input Required) | Partial | MISSING |
| create-module | YES (Pre-Check) | YES (Verification Checklist) | MISSING |
| generate-e2e | MISSING | MISSING | MISSING |
| generate-i18n | Partial (Prerequisites) | MISSING | MISSING |
| generate-route | Partial (Prerequisites) | MISSING | MISSING |
| generate-store | Partial | YES (Output Checklist) | MISSING |
| generate-supabase-schema | Partial (phases) | Partial | MISSING |
| generate-views | Partial (Prerequisites) | YES (Output Checklist) | MISSING + DEAD REF |
| image-upload-spec | MISSING | MISSING | MISSING |
| mcp-supabase-postgres-connection | MISSING | Partial (Error Checklist) | MISSING |
| staging | MISSING | MISSING | MISSING |
| ui-standardization | MISSING | YES (Checklist) | MISSING |
| workflow-test | Partial | Partial | MISSING |
| webapp-genesis | MISSING | MISSING | MISSING |

---

## Section 6: Non-Obvious Findings

1. **JWT claim key inconsistency** — `supabase-auth-architecture` uses `project_id`/`user_role`/`role_level` (snake_case), `supabase-rls-rbac-design` uses `projectId`/`role`/`roleLevel` (camelCase). `generate-supabase-schema` follows snake_case in hook SQL. Mixed sources → runtime RLS failures.
2. **`create-module` hardcoded project path** at line 117 — `admin-panel-quizLaa/apps/web-antd/src/views/attachments/...` won't work for other projects.
3. **`claude-frontend/ui-standardization` has orphaned valuable content** — "Image Fallback Protocol" (AppImage, bg-gray-200/900 fallbacks, @error handling) exists only in this broken-frontmatter file.
4. **3-way conflicting `public.role` DDL** — `supabase-auth-architecture`, `supabase-rls-rbac-design`, `generate-supabase-schema` each define the same table differently.
5. **`staging` mode table** says 1 mode ("unified") but body describes 3+ modes. Table was truncated in edit.
