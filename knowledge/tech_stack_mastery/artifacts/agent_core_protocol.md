# Antigravity Agent — Core Protocol V13.0

> **Replaces**: V12.0 Agent Core Protocol
> **V13.0** — Rewritten with Claude Skills DNA: trigger → input → pre-check → execute → verify
> **Upgraded**: 2026-03-27

---

## 0. WHEN TO APPLY THIS PROTOCOL

**Trigger**: This protocol activates on EVERY task. It is the root protocol.
**Priority**: Rules in this file override all other skills when there is a conflict.

---

## 1. TASK CLASSIFICATION (Step 0 — Before Anything)

Before writing ANY code, classify the task:

| User Says | Task Type | Mode | Skills to Load |
|-----------|-----------|------|----------------|
| "create module X", "new entity" | Admin Module | Claude-Code | `claude-code/create-module`, `claude-code/generate-*` |
| "build app", "create app" | App/Website | V13 High-End | `ui-ux-pro-max`, `frontend-developer`, `tailwind-design-system` |
| "design X", "redesign X" | Design Task | Design-First | `design-logic-system`, `ui-ux-designer`, `frontend-design` |
| "fix X", "bug in X" | Bug Fix | Quick Fix | Jump to §6 Error Recovery |
| "add feature X to Y" | Enhancement | Read-First | Read existing code → apply relevant skills |

**CRITICAL GATE**: If task type = "Admin Module" → use ONLY `claude-code/` skills. STOP reading design DNA or other skills.

---

## 2. INPUT COLLECTION (Step 1 — Gather Before Building)

### For App/Website Tasks:

Before generating any code, collect or infer these inputs:

| Input | Required | How to Get |
|-------|----------|-----------|
| Project type | YES | Classify: F&B / E-commerce / SaaS / Portfolio / Admin |
| Brand Kit (colors, fonts) | YES | Ask user, OR extract from existing files, OR research category defaults |
| Target language | YES | Check existing files. Default: 简体中文 for MY market |
| Page list | YES | Infer from project type. List ALL routes before coding |
| Reference URL/image | NO | If provided, research + clone structure. If not, search Mobbin/Awwwards top 3 |
| `user_preference_dna.md` | YES | Read ALWAYS. Apply taste scores ≥ 90 automatically |

**Pre-check**: If any REQUIRED input is missing and cannot be inferred → ask ONE consolidated question. Never ask multiple rounds.

### For Admin Module Tasks:

Inputs are defined in `/create-module` skill. Follow that skill's input checklist.

---

## 3. EXECUTION SEQUENCE (Step 2 — Build in Order)

### Phase 1: Architecture (files that other files depend on)
```
Step 3.1: Design tokens         → CSS variables / Tailwind @theme config
Step 3.2: TypeScript types      → Entity, FormValues, PageParams, enums, options
Step 3.3: Pinia stores          → CRUD methods, re-export types, localStorage persistence
Step 3.4: Router config         → ALL routes defined. Detail = hideInMenu. List = keepAlive
```

### Phase 2: Views (depend on Phase 1)
```
Step 3.5: Layout shell          → Header (fixed 56px) + Bottom Nav (fixed 60px) + Container (540px)
Step 3.6: Pages (ALL at once)   → Each page PRODUCTION-READY. No skeletons, no TODOs
Step 3.7: Shared components     → Cards, Modals, Toast, Status badges, Empty states
Step 3.8: Connect everything    → Store ↔ Views ↔ Router ↔ Nav — all wired
```

### Phase 3: Polish (depends on Phase 2)
```
Step 3.9: Interactions          → Hover effects, transitions (cubic-bezier(0.16, 1, 0.3, 1))
Step 3.10: WhatsApp CTA         → Floating button on ALL B2B/B2C pages
Step 3.11: PWA + Meta           → manifest.json, sw.js, OG tags, favicon, noindex
Step 3.12: SPA fallback         → .htaccess + _redirects + 404.html + catch-all route
```

### Phase 4: Verify (depends on Phase 3)
```
Step 3.13: npm run build        → ONLY NOW. Must pass with zero errors
Step 3.14: Route check          → Every route renders (no blank pages)
Step 3.15: Auth flow            → Login → OTP → Home → Profile → Logout works
Step 3.16: Persistence          → localStorage survives refresh
Step 3.17: Mobile check         → 540px container, bottom nav, 44px touch targets, safe-area
Step 3.18: npm run dev          → Auto-run on first build to show result
```

**WRONG**: Build mid-creation, create skeleton pages, leave TODOs
**CORRECT**: Finish ALL files → build once → verify all → present

---

## 4. ARCHITECTURE RULES (Apply During Step 2)

### 4.1 Platform Detection
| Project Type | Stack | Container |
|-------------|-------|-----------|
| Website (multi-page) | HTML + Tailwind + Vanilla JS | No container limit |
| Mobile App | Vue 3 + Pinia + Tailwind | `max-w-[540px] mx-auto` |
| Admin Panel | Ant Design Vue + Supabase | Full-width sidebar layout |

### 4.2 File Structure (Auto-Scaffold)

**Mobile App:**
```
src/
├── assets/css/theme.css         ← Design tokens FIRST
├── types/{{entity}}.ts          ← TypeScript types
├── stores/{{entity}}.ts         ← Pinia store + re-export types
├── views/
│   ├── {{page}}.vue             ← Production-ready pages
│   └── components/              ← Shared components
├── router/index.ts              ← ALL routes
├── App.vue                      ← Layout shell
└── main.ts                      ← App bootstrap
public/
├── manifest.json                ← PWA manifest
├── sw.js                        ← Service worker (PROD only)
├── .htaccess                    ← Apache SPA fallback
├── _redirects                   ← Netlify/CF SPA fallback
└── favicon.svg                  ← Auto-generate if missing
```

### 4.3 Design Token Template
```css
/* theme.css — ALWAYS define before any components */
@theme {
  --color-primary: {{BRAND_COLOR}};
  --color-primary-light: {{BRAND_LIGHT}};
  --color-bg: #ffffff;
  --color-text: #1a1a1a;
  --color-text-dim: #6b7280;
  --color-border: #e5e7eb;
  --font-sans: {{BRAND_FONT}}, system-ui, sans-serif;
  --shadow-card: 0 1px 3px rgba(0,0,0,0.08);
  --radius-card: 12px;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --z-section: 1;
  --z-sticky: 10;
  --z-modal: 50;
  --z-toast: 200;
}
```

**WRONG**: `bg-[#FF6B35]` hardcoded in component
**CORRECT**: `bg-primary` using design token

### 4.4 Component Standards

| Component | Specification |
|-----------|--------------|
| Header | Fixed top, 56px, dynamic title, back button, cart badge |
| Bottom Nav | Fixed bottom, 60px, 4 tabs, active indicator bar, safe-area |
| Card | `rounded-xl border border-gray-100`, hover shadow transition |
| Button Primary | Brand bg, white text, `rounded-lg`, `active:scale-[0.97]` |
| Modal | Teleport to body, `bg-black/40` overlay, slide-up content |
| Toast | Teleport, auto-dismiss 3s, color-coded (green/red/blue) |
| Price | Brand color, `font-bold`, RM prefix |
| Status Badge | `rounded-full text-[10px] font-bold px-2`, color by status |
| Empty State | Centered SVG icon + gray text + CTA button |
| Product Grid | `grid grid-cols-2 gap-3` with ProductCard component |

### 4.5 Spacing Rules

| Context | Spacing |
|---------|---------|
| Website sections | `py-[100px]` top/bottom |
| Mobile app sections | `p-4` (16px) |
| Card internal | `p-4` |
| Between cards | `gap-3` |
| Touch targets | Min `h-11` (44px) |

---

## 5. MANDATORY INCLUSIONS (Auto-Apply — Never Ask)

### 5.1 Every Build Must Have:
```
✓ <meta charset="UTF-8">
✓ <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
✓ <meta name="robots" content="noindex, nofollow">  ← Remove ONLY when user says "allow crawling"
✓ <meta name="theme-color" content="{{BRAND_COLOR}}">
✓ <meta name="apple-mobile-web-app-capable" content="yes">
✓ <title>{{APP_NAME}}</title>
✓ <meta name="description" content="{{INFERRED_DESCRIPTION}}">
✓ <link rel="icon" type="image/svg+xml" href="/favicon.svg">
✓ <link rel="manifest" href="/manifest.json">
✓ Open Graph tags (og:title, og:description, og:type)
```

### 5.2 Router Must Have:
```typescript
// CORRECT — clean URLs
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({ history: createWebHistory() })

// WRONG — hash mode
// createWebHashHistory() ← NEVER USE THIS

// Catch-all fallback (LAST route)
{ path: '/:pathMatch(.*)*', redirect: '/' }
```

### 5.3 PWA Files (Auto-Generate in `public/`):
- `manifest.json` — name, short_name, start_url, display: standalone, icons
- `sw.js` — cache-first for static assets, activate ONLY in PROD
- `.htaccess` — Apache rewrite rules for SPA
- `_redirects` — `/*  /index.html  200`

### 5.4 Favicon (Auto-Generate if Missing):
If no favicon exists → generate SVG using brand color + first letter:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="8" fill="{{BRAND_COLOR}}"/>
  <text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle"
        fill="white" font-family="system-ui" font-size="18" font-weight="700">
    {{FIRST_LETTER}}
  </text>
</svg>
```

---

## 6. ERROR RECOVERY (Quick Fix Protocol)

**Trigger**: Build fails OR runtime error

### Execution Sequence:
```
Step 6.1: READ error    → First line = cause, last line = file:line location
Step 6.2: CLASSIFY      → See table below
Step 6.3: FIX           → One targeted edit at root cause
Step 6.4: RE-BUILD      → Verify fix. If new error → repeat from 6.1
Step 6.5: ESCALATE      → If same fix tried twice → try alternative approach
```

### Fix Lookup Table:
| Error Pattern | Root Cause | Fix |
|--------------|------------|-----|
| `Module not found` | Wrong path or casing | Check path casing + file extension + export name |
| `@tailwindcss/postcss` | Wrong plugin | Switch to `@tailwindcss/vite` in vite.config |
| `Cannot read properties of null` | Missing null guard | Add `v-if` guard or `?.` optional chaining |
| `Component not found` | Missing import | Check import path in `<script setup>` |
| Port in use | Another dev server | Let Vite auto-increment |
| CSS not applying | Token mismatch | Verify @theme variable name matches class |
| Template depth error | Unclosed tags | Count opening/closing tags, fix balance |
| `keep-alive` not working | Missing component name | Add `name` option or check `:exclude` |

**WRONG**: Retry same fix, add try/catch around symptom, ask user to debug
**CORRECT**: Read error → find root cause → one edit → rebuild

---

## 7. WORKFLOW RULES (Apply During All Phases)

| Rule | Description |
|------|-------------|
| **Serialized execution** | Finish Phase 1 completely before Phase 2. No jumping ahead |
| **Atomic merging** | Multiple edits to same file → combine into single tool call |
| **No deduplication** | Before any action, check if already done. Never repeat work |
| **Complete views** | Every page production-ready when created. No skeletons |
| **Single language** | 100% one language in UI. No mixed English/Chinese labels |
| **Real data only** | No "Lorem ipsum", no empty `src`, no placeholder images |
| **SVG icons only** | Never use emoji in UI. Use Lucide/Heroicons inline SVG |
| **Build LAST** | `npm run build` ONLY after ALL files written. Never mid-creation |
| **Background commands** | Dev server, builds → run in background |
| **Auto-proceed** | Default to Option 1 if no reply within 5 mins |
| **ROI First** | Search before reading. Artifacts before code |

---

## 10. AI ROI & TOKEN ECONOMY (⚠️ MASTER RULE)

> **Directive**: AI MUST prioritize token-efficiency to maintain speed and minimize user costs.

1. **Strategic Research**: Use `grep_search` before `view_file` to narrow scope.
2. **Memory Recycling**: Read `implementation_plan.md` first to avoid re-scanning the entire codebase.
3. **Targeted Recovery**: When fixing bugs, read only the immediate context of the error.
4. **Auto-Cleanup**: Delete `/tmp/` scripts once the task is verified.
5. **Session Pruning**: If context > 500K tokens → perform a "Context Purge" (Summarize → Clear).

---

## 11. GLOBAL SYNC & PATH ABSTRACTION

> **Directive**: Decouple the AI "Brain" from a single machine. Ensure multi-device coordination.

1. **Absolute-Agnostic Pathing**: Locate `/knowledge` and `/brain` dynamically at session start. Use `${KNOWLEDGE_ROOT}` placeholders in internal discussion.
2. **Conflict-Free Merging**: Use timestamped, append-only logs for scoring and DNA updates to prevent data loss during Cloud/Git sync.
3. **Environment Awareness**: Upon hostname or path change, perform a **Migration Audit** to re-verify artifact links and project states.

---

## 12. MISSION-BASED STRATEGY (PARTNER FRAMEWORK)

> **Directive**: Move from "following tasks" to "leading missions." Anticipate the business, master the DNA.

1. **Strategic Objective**: Define *why* the user is asking (e.g., "Pivoting to Corporate Scale").
2. **Success Criteria**: Define "God-Tier" completion (e.g., "Full POS flow + 404 stability").
3. **Leading Missions**: If a task is part of a 14-step module flow, execute all subsequent steps without being asked.
4. **DNA Fingerprinting**: Identify the project's soul (F&B = Appetite/Cleanliness) to apply specialized protocols.

---

---

## 13. THE SKEPTICAL AUDITOR PROTOCOL (⚠️ V14.1 SPEED UP)

> **Directive**: Assume all UI/UX modifications have FAILED until visually proven.

1. **Targeted Visual Proof**: Focus `browser_subagent` on the **exact component** or **affected viewport** (e.g., `.cart-modal` or `Header`). Avoid full-page scans for localized changes.
2. **Analysis Process**: Describe what you SEE objectively. Do not assume code intent = visual reality.
3. **Audit Specs**: Verify 8px spacing, 44px touch targets, and responsive behavior (540px container).
4. **Lazy Auditing**: Skip visual proofing for 100% logic-only changes (Props, API calls) unless it affects visibility/states.

---

## 14. AUTONOMOUS REFINEMENT (ROI FIRST)

> **Directive**: Proactively upgrade and clean the workspace to maintain "Master" status.

1. **High-Velocity Batching**: If a change affects 3+ files, write them all in a single turn without waiting.
2. **Self-Healing Code**: If you find low-GPA code (e.g., hardcoded styles in a DNA project), fix it immediately.
3. **Semantic Integrity**: Use `grep_search` before every edit to ensure the "Impact Graph" is mapped.

---

---

## 17. EXTERNAL PRO-PARTNER COOPERATION (⚠️ NEW V15.1)

> **Directive**: Leverage professional external platforms (Stitch, Magic UI) to deliver elite UI/UX results.

1. **Design Before Execution**: For any new visible feature, first generate a prototype in **Google Stitch** to establish the "Pro" layout.
2. **Component Variations**: Use **Magic UI (21st.dev)** to fetch 3+ distinct, unconventional variations of a component (e.g., pricing cards, hero sliders).
3. **Immersive Sourcing**: Always search for immersive, animated, and "Wow" elements from these platforms before building standard HTML.

---

## 18. RESILIENT MISSION LOGIC (FINAL REBUILD POLICY)

> **Directive**: Batch testing and audits into the final delivery phase for maximum development speed.

1. **Logical Verification**: Run all `vitest` logic proofs at the end of a mission to identify root-cause calculation errors.
2. **Performance Audit**: Run `npm run build` and check for asset warnings only during the "Final Rebuild" phase.
3. **Speed over Interruptions**: Maintain high momentum during the coding phase; verify quality before final handoff.

---

---

## 21. FIGMA AUTOMATION & TOKEN SYNC (⚠️ NEW V15.3)

> **Directive**: Treat Figma as the Absolute Source of Truth for all Design-to-Code missions.

1. **Mandatory Token Audit**: If a Figma URL is provided, the AI MUST use `FIGMA_EXTRACT_DESIGN_TOKENS` to fetch colors, typography, and spacing.
2. **Auto-Tailwind Sync**: Immediately propose a `tailwind.config.js` or CSS variable update based on the Figma style palette.
3. **Automated Asset Gate**: Identify and download SVG icons and WebP images directly from the Figma nodes into the local project.
4. **Variable Persistence**: Use Figma variable names as the key for CSS/Tailwind variables (e.g. `--color-brand-primary`) to maintain design context.

---

_Protocol V15.3 — Design-System Syncer Protocol (2026-03-31)_

## 8. USER LEXICON (Custom Mappings)

| User Says | AI Interprets As |
|-----------|-----------------|
| "div" | Card component |
| "section div" | Card inside a section |
| "make it nice" | Apply design tokens + interactions + spacing rules from §4 |
| "fix it" | Run §6 Error Recovery |
| "publish" | Run §5 Mandatory Inclusions + `npm run build` |

---

## 9. F&B APP OVERRIDE (When project type = Food & Beverage)

**Trigger**: Project involves food ordering, restaurant, F&B

| Rule | Specification |
|------|--------------|
| Background | `#FFFFFF` or very light gray. NO dark themes |
| Hero image | 1-2 high-impact realistic food photos |
| Multi-location | Assume by default. Add "Branches" section |
| Order system | Internal receipt logic. WhatsApp for consultation only |
| Order history | Clickable cards → itemized receipt detail |
| Category nav | 76px left sidebar with active indicator (86car Standard) |
| Layout | Fixed Left Sidebar (categories) + Right Scroll (products) |

---

_Protocol V13.0 — Claude Skills DNA Upgrade (2026-03-27)_
_Structure: trigger → classify → collect input → pre-check → execute in sequence → verify_
