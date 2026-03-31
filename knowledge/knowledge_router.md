# Knowledge Router V1.0 — Master Index

> **PURPOSE**: Single-source map of ALL knowledge files. AI uses this to find files fast.
> **Rule**: When unsure which file to read, check this index first.
> **Updated**: 2026-03-27

---

## FILE MAP BY CATEGORY

### CORE PROTOCOLS (Read based on task_type)

| File | Path | When to Read | V13 |
|------|------|-------------|-----|
| **Session Boot Sequence** | `self_evolving_intelligence/artifacts/session_boot_sequence.md` | EVERY session start | Yes |
| **Session Cache** | `self_evolving_intelligence/artifacts/session_cache.md` | EVERY session start (Step 1) | Yes |
| **User Taste DNA** | `self_evolving_intelligence/artifacts/user_taste_dna.md` | EVERY session start (Step 2) | Yes |
| **AI Claude Protocol V3** | `self_evolving_intelligence/artifacts/ai_claude_protocol.md` | User says "ai claude" → ADMIN mode (7 intelligence patterns) | Yes |
| **Agent Core Protocol** | `tech_stack_mastery/artifacts/agent_core_protocol.md` | APP / WEBSITE / ENHANCE tasks | Yes |
| **Must-Do Master Rules** | `tech_stack_mastery/artifacts/must_do_master_rules.md` | APP / WEBSITE / DEPLOY tasks | Yes |
| **V13 Ascension Mastery** | `tech_stack_mastery/artifacts/v12_ascension_mastery.md` | New projects (BLAST framework) | Yes |
| **Skill Path Router** | `task_execution_logic/artifacts/skill_path_router.md` | After task classification (Step 4) | Yes |

### APP BUILDING (task_type = APP)

| File | Path | When to Read | Purpose |
|------|------|-------------|---------|
| **App Creation Masterplan** | `tech_stack_mastery/artifacts/app_creation_masterplan.md` | Starting new app | Blueprint methodology |
| **Unified App Blueprint** | `tech_stack_mastery/artifacts/unified_app_blueprint.md` | Scaffold + build order | Vue 3 + Vite + Tailwind standard |
| **TypeScript + Pinia Standard** | `tech_stack_mastery/artifacts/typescript_pinia_standard.md` | Creating types + stores | Data architecture patterns |
| **Mobile Design Mastery** | `tech_stack_mastery/artifacts/mobile_design_mastery.md` | Mobile app UI decisions | Native feel patterns |
| **i18n Multilingual** | `tech_stack_mastery/artifacts/i18n_multilingual_mastery.md` | Multi-language apps only | vue-i18n patterns |
| **PWA Patterns** | `tech_stack_mastery/artifacts/pwa_offline_first_patterns.md` | PWA setup / deploy | Manifest + SW + meta |

### WEBSITE BUILDING (task_type = WEBSITE)

| File | Path | When to Read | Purpose |
|------|------|-------------|---------|
| **Website Design DNA** | `tech_stack_mastery/artifacts/website_design_dna.md` | Any website task | Master design system |
| **Website Full Audit** | `tech_stack_mastery/artifacts/website_full_sequence_audit.md` | QA / audit phase | Comprehensive checklist |
| **Website Stored Samples** | `tech_stack_mastery/artifacts/website_stored_samples.md` | Need reference code | Copy-paste components |

### DESIGN SYSTEM (task_type = DESIGN)

| File | Path | When to Read | Purpose |
|------|------|-------------|---------|
| **Design Vault README** | `design_vault/README.md` | Design tasks | Vault matching engine |
| **Theme System** | `design_vault/theme-system.md` | Brand color selection | 5 color themes + scoring |
| **Micro Interactions** | `design_vault/micro-interactions.md` | Adding animations | 10 animation categories |
| **Auth Login Gradient** | `design_vault/auth-login-gradient.md` | Auth page design | Dark gradient auth (S-CORE 95) |
| **Order Card Gradient** | `design_vault/order-card-gradient.md` | Order/status cards | Status gradient cards (S-CORE 95) |
| **Mobile Nav Fullscreen** | `design_vault/mobile-nav-fullscreen-dark.md` | Navigation design | Dark overlay nav (S-CORE 95) |
| **Phone Showcase** | `design_vault/phone-showcase-sticky.md` | Product showcase | iPhone frame + GSAP (S-CORE 95) |

### AI INTELLIGENCE (Self-evolving system)

| File | Path | When to Read | Purpose |
|------|------|-------------|---------|
| **Evolving Knowledge** | `self_evolving_intelligence/artifacts/evolving_knowledge.md` | Session start (selective) | Predictive engine + DNA |
| **User Preference DNA** | `self_evolving_intelligence/artifacts/user_preference_dna.md` | Design decisions | Full taste profile + scores |
| **Brain Status** | `self_evolving_intelligence/artifacts/brain_status.md` | Diagnostics / audit | Health metrics dashboard |
| **Score Ledger** | `self_evolving_intelligence/artifacts/score_ledger.md` | Session end | ADPRS scoring log |
| **Design Research Engine** | `advanced_ai_tooling/artifacts/design_research_engine.md` | Before design tasks | AI research methodology |

### CLIENT-SPECIFIC DNA (Load when matching project)

| File | Path | Trigger |
|------|------|---------|
| **86car Design DNA** | `tech_stack_mastery/artifacts/86car_design_dna.md` | E-commerce / left-menu layout |
| **Japanese Food App** | `tech_stack_mastery/artifacts/japanese_food_app_design.md` | Japanese F&B client |
| **Jin Hong Protocols** | `tech_stack_mastery/artifacts/jin_hong_design_protocols.md` | Jin Hong project |
| **Zeta Branding** | `tech_stack_mastery/artifacts/zeta_branding_authority_dna.md` | Zeta Capital project |

### ADMIN PANEL (task_type = ADMIN — Claude-Code mode)

| Skill | Path | Step |
|-------|------|------|
| `/create-module` | `skills/claude-code/create-module/skill.md` | Full 14-step pipeline |
| `/analyze-schema` | `skills/claude-code/analyze-schema/` | Step 0: Define entity |
| `/generate-store` | `skills/claude-code/generate-store/` | Step 1: Types + Pinia |
| `/generate-supabase-schema` | `skills/claude-code/generate-supabase-schema/` | Step 2: SQL migration |
| `/generate-views` | `skills/claude-code/generate-views/` | Step 3: Vue components |
| `/generate-route` | `skills/claude-code/generate-route/` | Step 4: Router config |
| `/generate-i18n` | `skills/claude-code/generate-i18n/` | Step 5: Translations |
| `/generate-e2e` | `skills/claude-code/generate-e2e/` | Step 6: E2E tests |
| `/workflow-test` | `skills/claude-code/workflow-test/` | Step 7: Workflow tests |
| `/image-upload-spec` | `skills/claude-code/image-upload-spec/` | If image fields |
| `/ui-standardization` | `skills/claude-code/ui-standardization/` | UI consistency |
| `/staging` | `skills/claude-code/staging/` | Dev mode management |

---

## CROSS-REFERENCE: Which Files Reference Each Other

```
session_boot_sequence.md
    → reads: session_cache.md, user_taste_dna.md
    → routes to: skill_path_router.md
    → activates: agent_core_protocol.md

ai_claude_protocol.md (V3.0 — 7 Intelligence Patterns)
    → activated by: session_boot_sequence.md Step 3 (task_type = ADMIN)
    → loads: skills/claude-code/* (all 13 skills)
    → Pattern 1 (Consultation): runs BEFORE create-module/skill.md
    → Pattern 2 (Dependencies): scans parent modules before Step 1
    → Pattern 3 (Registry): tracks all modules in project
    → Pattern 4 (Quality): 5-dimension self-check after each module
    → Pattern 5 (Prediction): suggests next module based on FK schema
    → Pattern 6 (Batching): parallelizes files within pipeline steps
    → Pattern 7 (Mistakes): WRONG/CORRECT for 4 error-prone skills

agent_core_protocol.md
    → gates: must_do_master_rules.md (Phase 1→2→3→4)
    → references: v12_ascension_mastery.md (BLAST framework)
    → error recovery: §6 (self-contained)

must_do_master_rules.md
    → Phase 1 reads: user_preference_dna.md, skill_path_router.md
    → Phase 2 applies: agent_core_protocol.md §4 (architecture rules)
    → Phase 3 uses: pwa_offline_first_patterns.md (PWA verification)
    → §11 Vben Admin: delegates to ai_claude_protocol.md for ADMIN tasks

skill_path_router.md
    → routes to: ALL knowledge files based on task_type
    → ADMIN mode: routes to ai_claude_protocol.md
    → fingerprints: 8 project types with pre-loaded file lists
    → predictions: auto-load next files based on completion

unified_app_blueprint.md
    → depends on: typescript_pinia_standard.md (data layer)
    → feeds into: must_do_master_rules.md Phase 2 (during coding)

typescript_pinia_standard.md
    → consumed by: unified_app_blueprint.md §2 (build order)
    → pattern for: all APP task types
```

---

## PLACEHOLDER VARIABLES (Standardized Across All Files)

| Variable | Meaning | Example |
|----------|---------|---------|
| `{{APP_NAME}}` | Full app name | "Lee Ming Pork Ordering" |
| `{{APP_SHORT}}` | Short name (PWA) | "LeeMing" |
| `{{BRAND_COLOR}}` | Primary brand hex | "#8B1A1A" |
| `{{BRAND_LIGHT}}` | Light variant | "#B85C5C" |
| `{{BRAND_FONT}}` | Primary font family | "Plus Jakarta Sans" |
| `{{PHONE}}` | WhatsApp number (no +) | "60123456789" |
| `{{ENTITY_NAME}}` | PascalCase singular | "Teacher", "Product" |
| `{{ENTITIES}}` | camelCase plural | "teachers", "products" |
| `{{ENTITY_LOWER}}` | camelCase singular | "teacher", "product" |
| `{{TABLE_NAME}}` | snake_case plural (DB) | "teachers", "order_details" |
| `{{TABLE_ID}}` | UPPER_SNAKE_LIST | "TEACHER_LIST" |
| `{{SCHEMA}}` | DB schema name | "labour", "quizLaa" |
| `{{ROUTE_PREFIX}}` | kebab-case plural | "teachers", "order-details" |
| `{{MENU_ICON}}` | Lucide icon name | "lucide:users" |
| `{{FIRST_LETTER}}` | Brand initial | "L", "Z" |
| `{{DESCRIPTION}}` | Meta description | Auto-inferred from project |

---

_Knowledge Router V1.0 — Master Index (2026-03-27)_
_Use this to find any file in the knowledge system in <2 seconds_
