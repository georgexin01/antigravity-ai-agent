# Antigravity V15 — Universal Boot Protocol

> Read this FIRST every session. All modes. No exceptions.
> Version: V15.0 | Engine: Gemini 2.5 Flash | Updated: 2026-04-02

---

## GLOBAL RULE #1 — FIRST RUN CHECK (Before Everything)

```
IF _shared/session_cache.md is EMPTY or MISSING or has no "first_run_completed: true":
  → STOP. Read _shared/first_run.md FIRST.
  → Complete full system initialization.
  → THEN return here.

IF session_cache has "first_run_completed: true":
  → Skip first_run.md. Proceed to Step 1 below.
```

---

## STEP 1: MODE DETECTION (< 1 sec)

Read user's first message. Match keyword. Lock ONE mode.

```
KEYWORD                               → MODE     → READ FOLDER
─────────────────────────────────────────────────────────────────
"ai claude" / "claude mode"           → CLAUDE   → _shared/ + claude/
"create module" / "entity" / "CRUD"   → CLAUDE   → _shared/ + claude/
"vben" / "admin panel" / "supabase"   → CLAUDE   → _shared/ + claude/

"ai faucet" / "faucet mode"           → FAUCET   → _shared/ + faucet/
"claim" / "viefaucet" / "99faucet"    → FAUCET   → _shared/ + faucet/
"earn" / "mission" / "solana faucet"  → FAUCET   → _shared/ + faucet/

Everything else                        → NORMAL   → _shared/ + normal/
"build app" / "website" / "design"    → NORMAL   → _shared/ + normal/
"fix bug" / "deploy" / "update"       → NORMAL   → _shared/ + normal/
```

**GATE LOCKED**: After mode detected, BLOCK all other mode folders.
**EXCEPTION**: `CROSS-READ: [file]` directive inside current mode allows 1 specific file only.

---

## STEP 2: RESTORE SESSION (< 2 sec)

Read `_shared/session_cache.md`:
- If user mentions SAME project → resume from saved fingerprint
- If user mentions NEW project → clear predictions, start fresh

Session fingerprint format:
```json
{
  "mode": "NORMAL|CLAUDE|FAUCET",
  "project": "project-name",
  "last_step": "step description",
  "next_predicted": ["step1", "step2"],
  "mode_switch_hint": null,
  "timestamp": "ISO-8601"
}
```

---

## STEP 3: LOAD MODE CONFIG (< 3 sec)

Read `[mode]/mode_config.md`:
- Contains: file list, build order, mode-specific rules, predictions
- AI knows EVERYTHING about this mode from mode_config.md alone
- Only drill into individual files when actually building that part

---

## STEP 4: EXECUTE

Follow mode_config.md instructions.

---

## P0 CRITICAL RULES (15 Rules — All Modes — Never Skip)

```
P0-01  Design tokens FIRST before any component
P0-02  Types BEFORE stores, stores BEFORE views
P0-03  LOVES auto-applied: dark gradient headers, white cards, rounded 16-20px,
       Plus Jakarta Sans, bottom sheets, glassmorphism, micro-interactions
P0-04  HATES auto-blocked: flat layouts, aggressive colors, tiny text <14px,
       cluttered sidebars, popup modals on mobile, skeleton pages
P0-05  Build must succeed (0 errors) before deploy
P0-06  Mobile test: 375px, 390px, 414px. Touch targets min 44x44px.
P0-07  Auth flow: login → session → protected routes → logout → redirect
P0-08  Data persist: localStorage or Supabase. Refresh → data still there.
P0-09  No skeleton pages. Build COMPLETE views.
P0-10  Follow mode gate. NEVER read files outside your mode folder.
P0-11  Consultation Card before complex modules (CLAUDE mode).
P0-12  BUGFIX: read error → classify → fix → rebuild. No design files.
P0-13  ERROR LEARNING: On ANY error → check _shared/error_learning_vault.md FIRST.
       If vault has fix → use it immediately (skip debugging).
       If vault has no fix → debug → record fix in vault after solving.
       Escalation: Attempt 1 (fix) → Attempt 2 (alternative method) →
       Attempt 3 (swap component) → Cancel + notify user.
       Same error 2+ times = vault fix mandatory. 4+ times = auto-swap.
P0-14  BATCH EXECUTION: For tasks with 2+ files:
       → PLAN all files + dependencies first (before touching any file)
       → GROUP into parallel batches (independent files = same batch)
       → EXECUTE batch by batch (write multiple files per response)
       → CHECK once after all edits (not after each file)
       → FIX in waves (all errors at once, not one-by-one)
       → NEVER do serial: edit→check→edit→check for known multi-file tasks
       Full protocol: _shared/batch_execution_protocol.md

P0-15  MINIMIZE SCREENSHOTS & LIVE VIEW:
       Screenshots and browser live view are EXPENSIVE (time + tokens).
       → NEVER capture screenshots for: text changes, CSS tweaks, config edits,
         type definitions, store logic, router changes, i18n updates
       → ONLY use live view / screenshots when:
         ✓ Major feature completion (full page built, needs visual verify)
         ✓ Complex layout debugging (elements overlapping, alignment broken)
         ✓ User explicitly asks "show me" or "take screenshot"
         ✓ Final QA verification (Phase 3 mobile responsive check)
       → For everything else: trust the code. Build → check terminal → done.
       → Default: NO live view. Code-only verification.
```

---

## P1 IMPORTANT RULES (Normal + Claude — Skip for Faucet/Bugfix)

```
P1-01  Meta tags: <title>, <meta description>, og:title, og:image
P1-02  PWA manifest + service worker (if PWA task)
P1-03  Favicon + apple-touch-icon
P1-04  WhatsApp CTA (if F&B/commerce)
P1-05  i18n with vue-i18n (if multi-language)
P1-06  Tailwind tokens in @theme, not hardcoded
P1-07  Single-responsibility components (<200 lines)
P1-08  Router lazy-loading: () => import('./views/X.vue')
P1-09  Pinia composable pattern (setup syntax)
P1-10  Error boundaries on async ops (try/catch + toast)
P1-11  Loading states (skeleton/spinner, never blank)
P1-12  Empty states with illustration + CTA
P1-13  60fps animations (transform + opacity only)
P1-14  Batch file writes (multiple files per message)
P1-15  Background long-running commands
```

---

## ERROR TRIAGE (Fast Path — 0 Extra File Reads)

```
Import error        → file path + extension + export name
PostCSS error       → @tailwindcss/vite instead of PostCSS plugin
Template error      → v-if/v-for syntax, component import, closing tags
Runtime null        → ?. optional chaining OR v-if guard
Port in use         → Vite auto-increment OR kill PID
Build warning       → Usually safe — verify output
CSS not applying    → class name, @theme token, specificity
CORS error          → Supabase URL, API key, RLS policy
Auth redirect loop  → route guard logic, session token
White screen        → console errors, main.ts imports
Type error          → interface vs API response shape
```

---

## TASTE QUICK-REF

```
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

## VERIFY CHAIN (After Coding — All Modes Except Faucet)

```
MUST PASS:
  □ npm run build → 0 errors
  □ All routes load
  □ Auth: login → dashboard → logout
  □ Data persists after refresh
  □ Mobile responsive at 375px

SHOULD PASS:
  □ Meta tags present
  □ Favicon loads
  □ PWA works (if applicable)
  □ Animations at 60fps
  □ Empty/loading states work
```

---

## MODE SWITCH PROTOCOL

```
User says "switch to [mode]":
  1. Save current session fingerprint to _shared/session_cache.md
  2. UNLOCK new mode folder
  3. BLOCK old mode folder
  4. Read new [mode]/mode_config.md
  5. Resume with new mode context

User says "switch back":
  → Restore previous session fingerprint
  → Resume where left off
```

---

_Antigravity V15 — Universal Boot Protocol (2026-04-02)_
_3 modes. Strict isolation. ~400 tokens to boot. Gemini 2.5 Flash optimized._
