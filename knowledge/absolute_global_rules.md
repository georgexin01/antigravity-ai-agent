# Absolute Global Rules V1.5 — ZETA Advanced Design Taxonomy

> **PURPOSE**: Final session authority & 16,000-token context optimization.
> **MANDATORY**: READ [GLOBAL_READ_ME_FIRST.md](file:///C:/Users/User/.gemini/antigravity/knowledge/GLOBAL_READ_ME_FIRST.md) BEFORE ANY OTHER ACTION.
> **Current Context**: 16,000 Tokens (Local 26B Authority).
> **Updated**: 2026-04-07 (Synergy V1.5 Advanced Design Expansion)

---

## §1 — P0 CRITICAL RULES (23 rules — NEVER skip)

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
         generic Bootstrap look, auto-play sounds, CUSTOM CURSOR

P0-05  Build must succeed before deploy
       → npm run build → 0 errors → then deploy. No exceptions.

P0-06  Mobile viewport MUST use width=412 (NOT device-width)
       → <meta name="viewport" content="width=412, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
       → Why: device-width causes oversized layout on real phones (Display Zoom/Font Size)
       → 412px = S20 Ultra/FE standard. Matches Chrome F12 simulation exactly.
       → If existing app has width=device-width → upgrade to width=412 immediately
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

P0-13  ERROR LEARNING: On ANY error:
       → FIRST: Check _shared/error_learning_vault.md for known fix
       → If found: apply recorded fix immediately (skip debugging)
       → If not found: debug → fix → RECORD in error_learning_vault.md
       → Escalation (max 3 attempts per error):
         Attempt 1: Fix directly
         Attempt 2: Try alternative method/approach
         Attempt 3: Swap/remove component, use different one
         After 3 fails: Cancel + tell user what was tried
       → Error seen 2+ times = vault fix mandatory (no re-debugging)
       → Error seen 4+ times + vault fix fails = auto-swap component

P0-14  BATCH EXECUTION (V3.1 16K Authority):
       → Gemini 3 (Director): Strategic Planning & Final Audit. 
       → Gemma-4 (Architect): MANDATORY structural drafting for ALL tasks.
       → 16K Wall: Architect can maintain 100% coherence for files up to 12,000 tokens.
       → Multi-file drafts? → ALWAYS delegate to Gemma-4.

P0-15  TOKEN CONSERVATION (16K OPTIMAL):
       → Use "Mission Briefing" syntax for high-density structural updates.
       → Offload 100% of repetitive boilerplate to the local engine.
       → Goal: Preserve Cloud context for Strategic Direction only.

P0-16  CONTEXT COMPRESSION (MASTER RESET):
       → At 14,000 local tokens → Proactively summarize and reset session.
       → Summaries MUST be saved to 'evolving_knowledge.md' before reset.

P0-17  NO CUSTOM CURSOR (USER MANDATE):
       → NEVER implement custom liquid cursors or mouse-followers.
       → Respect system cursor (auto/default/pointer).
       → Why: High friction, performance cost, poor user UX on touch.

P0-18  REVEAL STANDARD (AOS 2.3.1):
       → Default to Animate On Scroll (AOS) for all section entry animations.
       → Why: Stable, globally recognized, avoids "hidden content" bugs.
       → Config: duration: 1200, easing: 'ease-out-back', once: true.

P0-19  MOTION SCOPE (HERO DISPLAY ONLY):
       → Complex 3D/Video must be confined to the Home/Hero `div` (Mode A).
       → Stop using global fixed/z-index backgrounds for 3D/Video.
       → Exception: Mode D (Product Cinema) full-screen scrollytelling.

P0-20  LAYERED DEPTH (10% PROTOCOL):
       → Use solid theme colors with 10% deltas for layer separation.
       → Hierarchy: Base (#050505) → Surface 1 (#0c0c0c) → Surface 2 (#121212).
       → Source: Reference [ZETA Advanced Design Taxonomy V15] for all modes.

P0-21  DESIGN HIERARCHY (THE 6 LAYERS):
       → Apply Layer 0 (Atmosphere) through Layer 5 (Reactive) sequentially.
       → Layer 6 (Intelligence) drafts the logic before any component writing.

P0-22  SCROLLYTELLING (CANVAS SCRUB):
       → Peak "Level 10" interaction: Scroll-Controlled Frame Sequences.
       → Logic: Draw to `<canvas>` based on `ScrollTrigger` frame-scrub.
       → Why: Maximum cinematic impact + user-driven pacing.

P0-23  ASSET OPTIMIZATION (FRAMES):
       → WebP sequences only. Max 150KB/frame. lazy-loaded IntersectionObserver.
       → Why: Ensures no layout shift or stuttering during motion transitions.

P0-24  TEXTURE BAN (USER MANDATE):
       → NEVER use noisy, grainy, or sandy textures for backgrounds.
       → High-fidelity smooth gradients or solid slate only.
       → Why: Noisy backgrounds conflict with the 'Clean Industrial' brand.

P0-25  BODY GRADIENT STANDARD:
       → The `body` MUST use a fixed linear gradient (Slate-Dark → True Black).
       → background: linear-gradient(180deg, #1a1a1a 0%, #000000 100%) fixed;
       → Why: Provides a deep, professional foundation for Glass 3.0 layering.
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

_Hot Rules Cache V1.2 — Synergy V3.0 Hardened (2026-04-07)_
_Read this FIRST every session. Expand to full files ONLY when needed._
