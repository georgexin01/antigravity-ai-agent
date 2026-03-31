# Skill Path Router V2.0 — Zero-Waste + Predictive Routing

> **PURPOSE**: Route AI to relevant knowledge + predict what files will be needed NEXT.
> **V2.0**: Added Predictive Queue, Fingerprint Routing, Cross-Session State.
> **Upgraded**: 2026-03-19

---

## HOW TO USE

1. Identify task type from user request (or use Intent Classifier)
2. Match Project Fingerprint if applicable (Section 3)
3. Load ONLY the files listed for that task type
4. Check Prediction Queue for pre-loaded context
5. Start building — do NOT read additional files unless blocked

---

## 1. TASK ROUTING TABLE

### ADMIN MODE / CLAUDE-CODE (Admin Panels / CRM / ERP)
```
ALWAYS READ (3 files):
  skills/claude-code/supabase-rls-rbac-design.md (Must read FIRST)
  skills/claude-code/mcp-supabase-postgres-connection.md (Must read FIRST)
  knowledge/self_evolving_intelligence/artifacts/ai_claude_protocol.md

READ IF RELEVANT:
  skills/claude-code/supabase-auth-architecture/SKILL.md
  skills/claude-code/create-module/SKILL.md
  skills/claude-code/ui-standardization/SKILL.md

SKIP:
  All design DNA, taste profiles, brand kits, vanilla website skills.

V9 — AUTO-PREDICT NEXT FILES:
  → After SQL: module creation skill + types needed next
  → After types: Pinia store + shared utils needed next
  → After store: Drawer/List/Form views needed next
  → After i18n: workflow testing needed next
```

### MOBILE APP CREATION (Vue 3 / React)
```
ALWAYS READ (4 files):
  knowledge/tech_stack_mastery/artifacts/agent_core_protocol.md
  knowledge/tech_stack_mastery/artifacts/must_do_master_rules.md
  knowledge/tech_stack_mastery/artifacts/app_creation_masterplan.md
  knowledge/tech_stack_mastery/artifacts/unified_app_blueprint.md

READ IF RELEVANT:
  knowledge/tech_stack_mastery/artifacts/i18n_multilingual_mastery.md  → if multi-language
  knowledge/tech_stack_mastery/artifacts/pwa_offline_first_patterns.md → if PWA needed
  knowledge/tech_stack_mastery/artifacts/vue3_fnb_mastery.md           → if F&B app
  knowledge/self_evolving_intelligence/artifacts/user_preference_dna.md → always check taste

SKILLS TO READ:
  skills/ui-ux-pro-max/SKILL.md
  skills/mobile-design/SKILL.md
  skills/tailwind-design-system/SKILL.md
  skills/design-logic-system/SKILL.md

V9 — AUTO-PREDICT NEXT FILES:
  → After scaffold: data files + store files needed next
  → After stores: view files needed next
  → After views: build verify needed next
```

### WEBSITE CREATION (HTML/Vanilla)
```
ALWAYS READ (3 files):
  knowledge/tech_stack_mastery/artifacts/agent_core_protocol.md
  knowledge/tech_stack_mastery/artifacts/must_do_master_rules.md
  knowledge/tech_stack_mastery/artifacts/website_design_dna.md

READ IF RELEVANT:
  knowledge/tech_stack_mastery/artifacts/content_localization_protocol.md → if multi-lang
  knowledge/tech_stack_mastery/artifacts/jin_hong_design_protocols.md  → if corporate/tech
  knowledge/tech_stack_mastery/artifacts/zeta_branding_authority_dna.md → if Zeta project

SKILLS TO READ:
  skills/frontend-design/SKILL.md
  skills/ui-ux-pro-max/SKILL.md
  skills/web-design-guidelines/SKILL.md

V9 — AUTO-PREDICT:
  → After index.html: all inner pages needed next
  → After pages: CSS + JS + animations needed next
  → After build: mobile responsive check needed next
```

### DESIGN ONLY (No Code)
```
ALWAYS READ (2 files):
  knowledge/tech_stack_mastery/artifacts/website_design_dna.md OR mobile_app_design_dna.md
  knowledge/self_evolving_intelligence/artifacts/user_preference_dna.md

SKILLS TO READ:
  skills/frontend-design/SKILL.md
  skills/design-logic-system/SKILL.md
  skills/ui-ux-pro-max/SKILL.md
  skills/stitch-ui-design/SKILL.md → if using Stitch
```

### BUG FIX / UPDATE EXISTING APP
```
ALWAYS READ (1 file):
  knowledge/tech_stack_mastery/artifacts/agent_core_protocol.md (Section 6)

THEN:
  Read error message/logs → Read affected source → Fix → Rebuild → Verify
  Do NOT read design files unless fix requires restructuring

V9 — AUTO-PREDICT:
  → After fix: check same pattern in other files
  → After rebuild: test related features that might break
```

### PRODUCT DATA UPDATE / PRICE CHANGE
```
READ NOTHING FROM KNOWLEDGE.
Just read the data file, update values, rebuild.
```

---

## 2. PERMISSION OPTIMIZATION

1. **Batch all file operations** — write multiple files in one message
2. **Chain npm commands** — `npm install a b c` not separate installs
3. **Auto-proceed on non-destructive ops** — file creation, edits, builds
4. **Only pause for**: git push, deployment, deleting user files, financial actions
5. **Background all long-running commands** — dev server, builds

---

## 3. FINGERPRINT ROUTING (NEW V9)

When project matches a fingerprint, auto-load its FULL knowledge stack:

### FP-001: F&B Ordering App
```
LOAD: agent_core_protocol + must_do_master_rules + app_creation_masterplan
     + unified_app_blueprint + vue3_fnb_mastery + user_preference_dna
SKILLS: ui-ux-pro-max, mobile-design, tailwind-design-system
PREDICT: Auth → Products → Cart → Orders → Admin → WhatsApp → Build
```

### FP-002: B2B Inventory Platform
```
LOAD: agent_core_protocol + must_do_master_rules + app_creation_masterplan
     + unified_app_blueprint + user_preference_dna
SKILLS: ui-ux-pro-max, mobile-design, tailwind-design-system
PREDICT: Roles → Inventory → Stock mgmt → Order flow → Reports → Build
```

### FP-003: Travel/Booking App
```
LOAD: agent_core_protocol + must_do_master_rules + app_creation_masterplan
     + unified_app_blueprint + i18n_multilingual_mastery + user_preference_dna
SKILLS: ui-ux-pro-max, mobile-design, tailwind-design-system
PREDICT: Auth → Tours → Booking → i18n → Payment → Referral → Build
```

### FP-004: Dashboard/Management
```
LOAD: agent_core_protocol + must_do_master_rules + app_creation_masterplan
     + unified_app_blueprint + user_preference_dna
SKILLS: ui-ux-pro-max, mobile-design, tailwind-design-system
PREDICT: Auth → Roles → Dashboard → Live data → Transactions → Reports → Build
```

### FP-005: Corporate Website
```
LOAD: agent_core_protocol + must_do_master_rules + website_design_dna
     + user_preference_dna
SKILLS: frontend-design, ui-ux-pro-max, web-design-guidelines
PREDICT: Home → About → Services → Portfolio → Contact → Animations → Mobile → Build
```

### FP-006: E-Commerce PWA
```
LOAD: agent_core_protocol + must_do_master_rules + app_creation_masterplan
     + unified_app_blueprint + pwa_offline_first_patterns + user_preference_dna
SKILLS: ui-ux-pro-max, mobile-design, tailwind-design-system
PREDICT: Auth → Catalog → Cart → Checkout → Orders → PWA → Build
```

### FP-007: MLM/Referral App
```
LOAD: agent_core_protocol + must_do_master_rules + app_creation_masterplan
     + unified_app_blueprint + i18n_multilingual_mastery + user_preference_dna
SKILLS: ui-ux-pro-max, mobile-design, tailwind-design-system
PREDICT: Auth → Referral tree → Commission calc → Dashboard → Multi-lang → Build
```

---

## 4. PREDICTION QUEUE (NEW V9)

### 4.1 How It Works

After completing any task, AI predicts the next likely request and PRE-LOADS context:

```
COMPLETED: User asked for login page
PRE-LOAD: OTP view template, signup view template, auth store pattern, route guard pattern
REASON: Auth chain ALWAYS follows login (95% confidence from 4 projects)
```

### 4.2 Prediction Accuracy Tracking

| Prediction | Correct Count | Wrong Count | Accuracy | Status |
|---|---|---|---|---|
| Login → full auth chain | 4 | 0 | 100% | STARRED |
| Products → cart integration | 3 | 0 | 100% | STARRED |
| Cart → checkout + orders | 3 | 0 | 100% | STARRED |
| New app → full scaffold chain | 4 | 0 | 100% | STARRED |
| Website → all 5 pages | 2 | 0 | 100% | PROVEN |
| Fix error → check related files | 3 | 1 | 75% | PROVEN |
| Admin → reports + charts | 2 | 1 | 67% | WARNING |

### 4.3 Cross-Session Memory

At session end, save to user_preference_dna.md → Active Projects:
```
| Project | State | Last Action | Next Predicted | Date |
```

At next session start, if user mentions same project → resume prediction from saved state.

---

## 5. ERROR TRIAGE (Fast Path — No Knowledge Load)

```
Error Type → Action
─────────────────────────────────────────────────────
Import error      → Check file path + extension + export name
PostCSS error     → Use @tailwindcss/vite instead of PostCSS plugin
Template error    → Check v-if/v-for syntax, component import
Runtime null      → Add ?.  optional chaining or v-if guard
Port in use       → Let Vite auto-increment or kill -9 PID
Build warning     → Usually safe to ignore, verify output works
CSS not applying  → Check class name, Tailwind @theme token, specificity
```

---

## 6. INTELLIGENCE METRICS (NEW V9)

Track routing efficiency:

```
SESSION METRICS:
  - Files loaded: count (fewer = better)
  - Files actually used: count (should be close to loaded)
  - Predictions correct: count
  - Predictions wrong: count
  - User had to ask for something predicted: missed prediction
  - User undid something proactive: wrong prediction

TARGET:
  - Load efficiency: >85% (files loaded = files used)
  - Prediction accuracy: >75%
  - Zero unnecessary knowledge reads per session
```

---

_Router V2.0 — Zero-Waste + Predictive Routing (2026-03-19)_
_Upgraded from V1.0: +Fingerprint Routing, +Prediction Queue, +Cross-Session Memory, +Intelligence Metrics_
