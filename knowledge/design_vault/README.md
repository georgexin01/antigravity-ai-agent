# Design Vault — 3 Vaults + Smart Matching System

> **Token Savings**: Copy-paste = ~50 tokens. Rebuild = ~500-1000 tokens. **90% savings per reuse.**
> **Rule**: AI checks vault → runs match score → ≥55% = use vault, <55% = create fresh design
> **Created**: 2026-03-19 | **Version**: V3.0

---

## VAULT MATCHING ENGINE

### How AI Decides: Use Vault or Create Fresh

```
STEP 1: AI identifies what component is needed (card, hero, nav, button, etc.)
STEP 2: AI scans vault for matching component type
STEP 3: For each vault match, AI calculates MATCH SCORE:

  Match Score = (Project Type Match × 30%)
              + (Visual Style Match × 25%)
              + (Mood/Tone Match × 20%)
              + (Layout Structure Match × 15%)
              + (Interaction Pattern Match × 10%)

STEP 4: Decision
  → Match ≥ 85%  = USE DIRECTLY (copy + swap text/colors only)
  → Match 55-84% = USE AS BASE (copy + modify 30-50% of the design)
  → Match < 55%  = DO NOT USE (create completely fresh, research first)
```

### Match Criteria Explained

| Criteria | Weight | What AI Checks |
|---|---|---|
| **Project Type Match** | 30% | Is vault item's target project type same as current? (F&B→F&B = 100%, F&B→SaaS = 20%) |
| **Visual Style Match** | 25% | Light/dark mode? Gradient/flat? Minimal/rich? Premium/playful? |
| **Mood/Tone Match** | 20% | Professional/casual? Chinese/English? Young/mature audience? |
| **Layout Structure Match** | 15% | Mobile app / website? Card-based / list-based? Single-col / multi-col? |
| **Interaction Pattern Match** | 10% | Tap/click behavior same? Scroll direction? Animation style? |

---

## VAULT 1: DESIGN VAULT — S-CORE Components

| # | Component | Score | Uses | Match Profile | File |
|---|---|---|---|---|---|
| D1 | **Gradient Status Order Card** | 95 | 1 | See below | [order-card-gradient.md](order-card-gradient.md) |
| D2 | **Auth Login (Dark Gradient)** | 95 | 1 | See below | [auth-login-gradient.md](auth-login-gradient.md) |
| D3 | **Mobile Nav Fullscreen Dark** | 95 | 1 | See below | [mobile-nav-fullscreen-dark.md](mobile-nav-fullscreen-dark.md) |
| D4 | **Phone Showcase Sticky Scroll** | 95 | 1 | See below | [phone-showcase-sticky.md](phone-showcase-sticky.md) |

### D1: Gradient Status Order Card
```
Rating:     95/100 (S-CORE)
Uses:       1 (lee-ming-pork)
Source:     lee-ming-pork OrdersView

PROJECT TYPE MATCH (high score if):
  ✅ F&B ordering app          → 95% match
  ✅ E-commerce order history   → 85% match
  ✅ Booking confirmation list  → 75% match
  ✅ Delivery tracking          → 70% match
  ⚠️ SaaS dashboard            → 40% match (too playful for SaaS)
  ❌ Corporate website          → 15% match (wrong context)
  ❌ Portfolio site             → 10% match

VISUAL STYLE: Gradient top (status-colored) + white bottom, glassmorphism icon
MOOD: Premium mobile app, status-driven, colorful but professional
LAYOUT: Vertical card, 2-section split, rounded-[28px]
INTERACTION: Tap → navigate to detail, hover reveals chevron

BEST WHEN: App has multiple statuses (pending/confirmed/shipped) that need visual distinction
AVOID WHEN: Simple list without status, minimal/flat design preference, web (not app)
```

### D2: Auth Login (Dark Gradient)
```
Rating:     95/100 (S-CORE)
Uses:       1 (lee-ming-pork)
Source:     lee-ming-pork LoginView

PROJECT TYPE MATCH:
  ✅ ANY mobile app login       → 90% match (universal pattern)
  ✅ F&B app                    → 95% match
  ✅ E-commerce app             → 90% match
  ✅ Booking/travel app         → 85% match
  ✅ SaaS login                 → 70% match (may need more fields)
  ⚠️ Admin panel login          → 50% match (too decorative for admin)
  ❌ Corporate website          → 20% match (websites don't need app login)

VISUAL STYLE: Dark gradient bg + ambient circles + glassmorphism logo + white card form
MOOD: Premium, trustworthy, brand-forward
LAYOUT: Full-screen centered, single form card, logo above
INTERACTION: Phone input with prefix, loading state, error validation

BEST WHEN: Mobile-first app that needs a strong first impression
AVOID WHEN: Multi-step registration (this is single-field), admin/internal tools
```

### D3: Mobile Nav Fullscreen Dark
```
Rating:     95/100 (S-CORE)
Uses:       1 (zeta-website-v4)
Source:     zeta-website-v4

PROJECT TYPE MATCH:
  ✅ Corporate dark website     → 95% match
  ✅ Portfolio site              → 90% match
  ✅ Tech/SaaS marketing site   → 85% match
  ✅ Agency website              → 85% match
  ⚠️ E-commerce website         → 55% match (may need cart icon in nav)
  ⚠️ Light-themed website       → 45% match (invert colors needed)
  ❌ Mobile app (Vue/React)     → 15% match (apps use bottom nav, not hamburger)
  ❌ F&B app                    → 10% match

VISUAL STYLE: Fullscreen black overlay, backdrop-blur, large centered links, X-close animation
MOOD: Premium, editorial, dramatic, luxury brand feel
LAYOUT: Fixed hamburger → fullscreen modal, centered vertical nav links
INTERACTION: Hamburger→X CSS transform, slide-in modal, link hover scale+color

BEST WHEN: Multi-page website (5+ pages) with dark/premium theme
AVOID WHEN: Mobile apps (use BottomNav instead), light themes, simple 1-3 page sites
```

### D4: Phone Showcase Sticky Scroll
```
Rating:     95/100 (S-CORE)
Uses:       1 (zeta-website-v4)
Source:     zeta-website-v4

PROJECT TYPE MATCH:
  ✅ Portfolio/agency website    → 95% match
  ✅ App showcase page           → 90% match
  ✅ Corporate "our work" section→ 85% match
  ✅ Product landing page        → 75% match
  ⚠️ SaaS features page         → 50% match (may prefer laptop frame)
  ❌ Mobile app (internal)       → 10% match (you're IN the app already)
  ❌ E-commerce product page     → 10% match

VISUAL STYLE: Realistic iPhone frame, camera dot, reflection overlay, physical buttons
MOOD: Showcase, demonstration, "look what we built", impressive
LAYOUT: Sticky right column (desktop), centered (mobile), GSAP scroll-triggered
INTERACTION: Auto-slide 4s, manual prev/next, scroll-synced image swap

BEST WHEN: Showing off mobile app screenshots on a website
AVOID WHEN: Inside mobile apps, showing website screenshots (use laptop frame instead)
```

---

## VAULT 2: THEME VAULT — Color Palettes

| # | Theme | Score | Uses | Match Profile | File |
|---|---|---|---|---|---|
| T1 | **Crimson Fire** | 95 | 2 | F&B, food, restaurant, bold | [theme-system.md](theme-system.md) §1A |
| T2 | **Ocean Trust** | 90 | 1 | Travel, fintech, health, calm | [theme-system.md](theme-system.md) §1B |
| T3 | **Cyber Onyx** | 95 | 3 | Corporate, tech, SaaS, dark | [theme-system.md](theme-system.md) §1C |
| T4 | **Emerald Fresh** | 85 | 0 | Grocery, organic, eco, health | [theme-system.md](theme-system.md) §1D |
| T5 | **Sunset Blaze** | 90 | 0 | Night market, street food, vibrant | [theme-system.md](theme-system.md) §1E |

### Theme Match Rules
```
AI checks new project's:
  1. Industry → which theme was designed for this?
  2. Client brand color → which theme's primary is closest?
  3. Light or dark mode → which theme supports the target mode?
  4. Audience → young/fun (Sunset) vs professional (Ocean/Cyber) vs warm (Crimson)

Match ≥ 70% → Use theme directly (swap exact hex to client brand)
Match 40-69% → Use theme as starting point, adjust primary/accent
Match < 40%  → Create new theme, add to vault if approved
```

---

## VAULT 3: BUTTON VAULT — 20 Variants

| Group | Buttons | Match Profile |
|---|---|---|
| **A — Solid** (5) | Standard, CTA, Pill, Gradient, Icon | Universal — all apps/sites, match ≥ 80% always |
| **B — Outline** (4) | Border, Ghost, Pill, Large | Secondary actions, cancel, filters. Match ≥ 70% always |
| **C — Special** (6) | WhatsApp, Glass, Danger, Success, Dark, Gold | Context-specific. WhatsApp=F&B 95%, Glass=dark theme 90% |
| **D — Icon** (4) | Circle, Square, FAB, Stepper | Functional. Stepper=e-commerce 95%, FAB=apps 85% |

### Button Match Rules
```
Buttons are mostly UNIVERSAL — match score is rarely below 55%.
Exception: C2 (Glassmorphism) only works on dark backgrounds.
Exception: C6 (Gold Accent) only works with warm-tone themes (A, E).
AI should always CHECK button vault before creating custom buttons.
```

---

## VAULT SCORING SYSTEM

### Per-Item Metrics (AI updates after each use)

```
Rating:         0-100 (from ADPRS composite, starts at 95 for S-CORE entry)
Uses:           Number of times used across projects
Last Used:      Date of last use
Freshness:      100% (new) → decays 5% per quarter if unused → review at 50%
Match History:  [project: match%, outcome: used/skipped/modified]
```

### Rating Adjustments

| Event | Rating Change |
|---|---|
| Used successfully, user approved | +3 |
| Used but user said "change it" | -5, log what was changed |
| Skipped (match < 55%) | No change |
| Used 3x in a row without modification | -2 (overuse penalty) |
| Modified version scores 95+ | +5 to original, new version enters vault |
| Unused for 5+ projects | -3 per quarter (freshness decay) |
| User explicitly says "don't use this anymore" | Set rating to 0, archive |

### Decision Log Format

AI logs every vault decision to `score_ledger.md`:
```
[VAULT-USE]  {date} | {vault_item} | {project} | match: {X%} | decision: USED
[VAULT-MOD]  {date} | {vault_item} | {project} | match: {X%} | decision: MODIFIED (changed: {what})
[VAULT-SKIP] {date} | {vault_item} | {project} | match: {X%} | decision: SKIPPED → created fresh
[VAULT-NEW]  {date} | {new_item}   | {project} | score: {X}  | added to vault
```

---

## AI DECISION FLOWCHART

```
Need a component?
│
├── Scan vault for same component TYPE
│   ├── Found match(es)
│   │   ├── Calculate match score for each
│   │   │   ├── Best match ≥ 85% → USE DIRECTLY (copy + swap text/colors)
│   │   │   ├── Best match 55-84% → USE AS BASE (copy + modify 30-50%)
│   │   │   └── Best match < 55% → SKIP ALL VAULT ITEMS
│   │   │       └── Research (Mobbin/Awwwards) → create fresh → if 95+ → add to vault
│   │   │
│   │   └── OVERUSE CHECK: Has this item been used 3+ times recently?
│   │       ├── YES → Force fresh design even if match > 55%
│   │       └── NO → Proceed with match decision
│   │
│   └── No match found → Create fresh → Research first → if 95+ → add to vault
│
└── Log decision to score_ledger.md
```

---

### VAULT 4: MICRO-INTERACTION VAULT — Premium Feel
> Animations, hovers, transitions, loading states. Apply 3-5 per page minimum.

| Category | Items | File |
|---|---|---|
| Button press/hover | 3 effects | [micro-interactions.md](micro-interactions.md) §1 |
| Card press/hover/reveal | 3 effects | [micro-interactions.md](micro-interactions.md) §2 |
| Page transitions (Vue) | 2 effects | [micro-interactions.md](micro-interactions.md) §3 |
| Loading states | 4 variants | [micro-interactions.md](micro-interactions.md) §4 |
| Scroll animations (GSAP) | 2 effects | [micro-interactions.md](micro-interactions.md) §5 |
| Accordion expand | 1 effect | [micro-interactions.md](micro-interactions.md) §6 |
| Toast notification | 1 component | [micro-interactions.md](micro-interactions.md) §7 |
| Count-up animation | 1 effect | [micro-interactions.md](micro-interactions.md) §9 |
| Chevron rotate | 1 effect | [micro-interactions.md](micro-interactions.md) §10 |

---

_Design Vault V4.0 — Smart Matching System (2026-03-19)_
_4 Vaults (Design + Theme + Button + Micro-Interaction) + Match Engine (55% threshold) + Rating/Usage + Anti-overuse_
