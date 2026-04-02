# Normal Mode — V15 Configuration

> This mode handles: APP, WEBSITE, DESIGN, BUGFIX, ENHANCE, DEPLOY tasks.
> Folder lock: `_shared/` + `normal/` only.
> Blocked: `claude/`, `faucet/`, `skills/claude-code/`, `skills/faucet/`

---

## FILE INDEX (What's In This Folder)

```
CORE PROTOCOLS:
  agent_core_protocol.md        → Execution sequence, architecture rules, error recovery
  must_do_master_rules.md       → Sequential gates (Phase 1→2→3→4)
  v12_ascension_mastery.md      → BLAST/SITE frameworks for new projects

APP BUILDING:
  unified_app_blueprint.md      → Vue 3 + Vite + Tailwind scaffold, 8-step build order
  typescript_pinia_standard.md  → Types + Pinia store patterns

WEBSITE BUILDING:
  website_design_dna.md         → VSS syntax, density rules, template DNA
  website_full_sequence_audit.md → QA checklist (after coding)
  website_stored_samples.md     → Copy-paste reference components

DESIGN SYSTEM:
  design_vault/README.md        → Match engine (≥85% copy, 55-84% modify, <55% create)
  design_vault/theme-system.md  → 5 themes + 20 buttons + cards
  design_vault/micro-interactions.md → 10 animation categories
  design_vault/auth-login-gradient.md → S-CORE 95 auth page
  design_vault/order-card-gradient.md → S-CORE 95 order card
  design_vault/mobile-nav-fullscreen-dark.md → S-CORE 95 dark nav
  design_vault/phone-showcase-sticky.md → S-CORE 95 showcase

DESIGN & UX:
  user_preference_dna.md        → Full taste profile + scores + fingerprints
  design_research_engine.md     → AI research: Mobbin/Awwwards → clone → customize
  mobile_design_mastery.md      → Native feel mobile patterns
  senior_designer_protocol.md   → High-end design review
  stitch_visual_protocol.md     → Google Stitch integration

FEATURE MODULES:
  i18n_multilingual_mastery.md  → vue-i18n patterns (lazy-load when "i18n" triggered)
  pwa_offline_first_patterns.md → PWA manifest + SW (lazy-load when "PWA" triggered)

CLIENT DNA:
  client_dna/86car_design_dna.md
  client_dna/japanese_food_app_design.md
  client_dna/jin_hong_design_protocols.md
  client_dna/zeta_branding_authority_dna.md
  client_dna/golden_shop_design_dna.md
```

---

## TASK ROUTING (Pick ONE Group)

```
task_type = APP:
  READ: unified_app_blueprint.md + typescript_pinia_standard.md + user_preference_dna.md
  BUILD ORDER: tokens → types → stores → layout → views → polish → verify
  SKILLS: skills/normal/ui-ux-pro-max, mobile-design, tailwind-design-system

task_type = WEBSITE:
  READ: website_design_dna.md + user_preference_dna.md
  BUILD ORDER: hero → sections → nav+footer → animations → mobile → SEO → build
  SKILLS: skills/normal/frontend-design, ui-ux-pro-max, web-design-guidelines

task_type = DESIGN:
  READ: design_vault/README.md + design_vault/theme-system.md + user_preference_dna.md
  FLOW: match vault ≥85% → copy. 55-84% → modify. <55% → research → create.
  SKILLS: skills/normal/design-logic-system, stitch-ui-design, ui-ux-pro-max

task_type = BUGFIX:
  READ: Nothing extra. Use _shared/boot.md error triage table.
  FLOW: Read error → classify → fix → rebuild → verify

task_type = ENHANCE:
  READ: agent_core_protocol.md (relevant section only)
  FLOW: Read existing code FIRST → apply changes → verify

task_type = DEPLOY:
  READ: Nothing extra. Use _shared/boot.md verify chain.
  FLOW: Run verification → build → deploy
```

---

## FINGERPRINT SHORTCUTS

```
FP-001 F&B App:      APP group + vue3_fnb rules from unified_blueprint
FP-002 B2B Platform:  APP group standard
FP-003 Travel/Booking: APP group + i18n module
FP-004 Dashboard:     APP group standard
FP-005 Corporate Site: WEBSITE group + client DNA if matched
FP-006 E-Commerce PWA: APP group + pwa module
FP-007 MLM/Referral:  APP group + i18n module
```

---

## PREDICTIONS (After Completing Step → Pre-Load Next)

```
Login done       → auth chain (OTP, signup, guards)     100%
Products done    → cart patterns                         100%
Cart done        → checkout + orders                     100%
Scaffold done    → all view templates                    100%
Website hero     → remaining sections                     95%
Design match     → theme tokens + animations              90%
Bug fix          → related files same pattern              75%
```

---

## CROSS-READ EXCEPTIONS

```
CROSS-READ ALLOWED:
  If user says "check module registry" → READ: claude/ai_claude_protocol.md §3 ONLY
  If user says "check faucet ledger"   → READ: faucet/faucet_session_ledger.md ONLY

CROSS-READ BLOCKED:
  Everything else in claude/ and faucet/ folders.
```

---

_Normal Mode V15 Config — APP, WEBSITE, DESIGN, BUGFIX, ENHANCE, DEPLOY (2026-04-02)_
