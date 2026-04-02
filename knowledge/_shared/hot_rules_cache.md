# Hot Rules Cache V1.0 — Universal Rules in One File

> **PURPOSE**: Single file replacing 4 separate reads at session start.
> **Read FIRST every session**. Contains ALL P0 + P1 rules + error triage + verify chain.
> **Replaces**: agent_core_protocol (P0/P1 extraction), must_do_master_rules (gates extraction),
>              user_taste_dna (deleted), v12_ascension_mastery (BLAST extraction)
> **Token cost**: ~400 tokens (vs ~2,500 from 4 separate files)
> **Updated**: 2026-04-02

---

## §1 — P0 CRITICAL RULES (12 rules — NEVER skip)

```
P0-01  Design tokens FIRST before any component
       → Define colors, spacing, fonts in @theme BEFORE writing views

P0-02  Types BEFORE stores, stores BEFORE views
       → types/*.ts → stores/*.ts → views/*.vue (strict order)

P0-03  LOVES auto-applied (+12 score)
       → Dark gradient headers, white content cards, rounded corners (16-20px),
         Plus Jakarta Sans, bottom sheet modals, glassmorphism on dark,
         subtle shadows, micro-interactions, mobile-first

P0-04  HATES auto-blocked (-20 score)
       → Flat boring layouts, aggressive colors, tiny text (<14px),
         cluttered sidebars, popup modals on mobile, skeleton pages,
         generic Bootstrap look, auto-play sounds

P0-05  Build must succeed before deploy
       → npm run build → 0 errors → then deploy. No exceptions.

P0-06  Mobile responsive test
       → Test at: 375px (iPhone SE), 390px (iPhone 14), 414px (iPhone Plus)
       → Touch targets: min 44x44px

P0-07  Auth flow must complete
       → Login → session storage → protected routes → logout → redirect
       → Test: Can user login, stay logged in, and logout cleanly?

P0-08  Data must persist
       → localStorage for offline, Supabase for server
       → Test: Refresh page → data still there?

P0-09  No skeleton pages
       → Build COMPLETE views with real components, not empty placeholder pages
       → Every page must have: header, content, navigation, loading state

P0-10  Follow task_type routing — never load ALL knowledge files
       → BUGFIX: hot_rules_cache §6 ONLY
       → APP: unified_blueprint + typescript_pinia + preference_dna
       → WEBSITE: website_design_dna + preference_dna
       → ADMIN: ai_claude_protocol + relevant skill
       → DESIGN: design_vault + theme-system + preference_dna

P0-11  Smart Consultation Card before complex modules (ADMIN mode)
       → Show: Entity name, fields, relationships, RLS requirements
       → Confirm with user before generating 14-step pipeline

P0-12  BUGFIX: Read error → classify → fix → rebuild
       → Do NOT read design files for bug fixes
       → Do NOT restructure code unless fix requires it
```

---

## §2 — P1 IMPORTANT RULES (15 rules — skip only for BUGFIX)

```
P1-01  Meta tags on every page
       → <title>, <meta description>, <meta og:title>, <meta og:image>

P1-02  PWA manifest + service worker (if PWA task)
       → manifest.json, registerSW, icons (192+512), theme-color

P1-03  Favicon + apple-touch-icon
       → /favicon.ico + /apple-touch-icon.png + manifest icons

P1-04  WhatsApp CTA integration (if F&B/commerce)
       → Floating button, pre-filled message, correct country code

P1-05  i18n with vue-i18n (if multi-language)
       → Locale files per language, useI18n() composable, <i18n> blocks

P1-06  Tailwind tokens in @theme (not hardcoded)
       → @theme { --color-primary: #xxx } not class="bg-[#xxx]"

P1-07  Single-responsibility components
       → 1 component = 1 purpose. Split if >200 lines.

P1-08  Router lazy-loading
       → () => import('./views/XView.vue') for all routes

P1-09  Pinia composable pattern
       → defineStore with setup syntax, return getters + actions

P1-10  Error boundaries on async
       → try/catch on all API calls, show toast on failure

P1-11  Loading states on data fetch
       → Skeleton OR spinner while loading. Never blank screen.

P1-12  Empty states with CTA
       → "No items yet" + illustration + action button

P1-13  60fps animations
       → Use transform + opacity only. No width/height animations.
       → GSAP for scroll, CSS for micro-interactions.

P1-14  Batch file writes
       → Write multiple files in one message, not one-at-a-time

P1-15  Background long-running commands
       → Dev server, builds, installs → run in background
```

---

## §3 — BLAST FRAMEWORK QUICK-REF (New Projects)

```
B — Blueprint    → Define scope, features, user flows, data model
L — Links        → Map dependencies, APIs, 3rd-party integrations
A — Architect    → Folder structure, component tree, state design
S — Stylize      → Design tokens, theme, brand colors, typography
T — Trigger      → Build, deploy, verify, iterate

For WEBSITES specifically (SITE framework):
S — Strategy     → Target audience, conversion goal, CTA placement
I — Interface    → Layout density, hero, sections, responsive breakpoints
T — Text         → Copywriting, headings, microcopy, SEO keywords
E — Engine       → Performance, animations, PWA, analytics
```

---

## §4 — TASTE QUICK-REF (From Deleted user_taste_dna.md)

```
STYLE FINGERPRINT:
  Premium Mobile App = dark gradient header + white content cards + bottom nav
  Corporate Website  = dark hero + light sections + glassmorphism accents

QUICK DECISIONS:
  Header?      → Dark gradient (primary → black)
  Cards?       → White bg, rounded-2xl, shadow-sm
  Buttons?     → Rounded-full, primary gradient, min-h-[44px]
  Modal?       → Bottom sheet (mobile), centered (desktop)
  Font?        → Plus Jakarta Sans (primary), Inter (fallback)
  Spacing?     → 16px padding, 12px gap, 24px section gap
  Animation?   → Fade-up on scroll (GSAP), scale on press
  Navigation?  → Bottom tab bar (app), hamburger overlay (website)
```

---

## §5 — VERIFICATION CHAIN (After Coding)

```
P0 MUST PASS:
  □ npm run build → 0 errors
  □ All routes load (click every nav link)
  □ Auth: login → dashboard → logout → redirect works
  □ Data: refresh page → data persists
  □ Mobile: test 375px width → nothing overflows

P1 SHOULD PASS:
  □ <title> and <meta description> present on all pages
  □ Favicon loads in browser tab
  □ PWA: "Add to Home Screen" works (if PWA task)
  □ WhatsApp button links correctly (if commerce)
  □ Animations run at 60fps (no janky scroll)
  □ Empty states show when no data
  □ Loading states show during fetch
  □ Error toast shows on API failure
```

---

## §6 — ERROR TRIAGE (Fast Path — 0 File Reads)

```
ERROR TYPE          → FIX
───────────────────────────────────────────────
Import error        → Check: file path + extension + export name
PostCSS error       → Use @tailwindcss/vite instead of PostCSS plugin
Template error      → Check: v-if/v-for syntax, component import, closing tags
Runtime null        → Add ?. optional chaining OR v-if guard
Port in use         → Let Vite auto-increment OR kill -9 PID
Build warning       → Usually safe — verify output works before fixing
CSS not applying    → Check: class name typo, @theme token, specificity conflict
CORS error          → Check: Supabase URL, API key, RLS policy
Auth redirect loop  → Check: route guard logic, session token validity
White screen        → Check: console errors, main.ts imports, App.vue template
Hydration mismatch  → Check: v-if on client-only content, use <ClientOnly>
Type error          → Check: interface definition matches API response shape
```

---

## §7 — CROSS-REFERENCE (When To Read Full Files)

```
Need full architecture rules?     → agent_core_protocol.md §4
Need full execution sequence?     → agent_core_protocol.md §3
Need full gate system?            → must_do_master_rules.md Phase 1-4
Need app scaffold commands?       → unified_app_blueprint.md §1
Need full taste profile?          → user_preference_dna.md
Need full design vault matching?  → design_vault/README.md
Need Claude-Code pipeline?       → ai_claude_protocol.md
Need research methodology?        → design_research_engine.md

RULE: Only expand to full file when hot_rules_cache doesn't cover your case.
Most tasks (80%+) can be completed with hot_rules_cache alone.
```

---

_Hot Rules Cache V1.0 — 27 rules + error triage + verification in one file (2026-04-02)_
_Read this FIRST every session. Expand to full files ONLY when needed._
