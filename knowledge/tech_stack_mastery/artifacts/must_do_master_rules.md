# Must-Do Master Rules V13.0 — Sequential Execution Checklist

> **PURPOSE**: Step-by-step execution gates. AI MUST follow this sequence.
> **V13.0**: Rewritten with Claude Skills DNA — each rule has trigger, action, and verification.
> **Upgraded**: 2026-03-27

---

## HOW TO USE THIS FILE

This file is a **sequential gate system**. Each phase BLOCKS the next phase.
- Phase 1 (BEFORE) must complete before Phase 2 (DURING)
- Phase 2 (DURING) must complete before Phase 3 (AFTER)
- If any REQUIRED gate fails → STOP and resolve before continuing

---

## PHASE 1: BEFORE CODING (Gates — Must Pass Before Writing Any Code)

### Gate 1.1: Task Classification
```
Action:   Classify task type (see agent_core_protocol.md §1)
Output:   task_type = "admin" | "app" | "website" | "design" | "bugfix" | "enhancement"
Gate:     If task_type = "admin" → load ONLY claude-code/ skills, SKIP all design DNA
          If task_type = "bugfix" → jump to Error Recovery (agent_core_protocol.md §6)
          Otherwise → continue to Gate 1.2
```

### Gate 1.2: Context Loading
```
Action:   Read these files (parallel, not sequential):
          - user_preference_dna.md → extract taste scores ≥ 90
          - skill_path_router.md → identify which skills match task_type
          - Reference project (if user mentioned one) → study FULL source
Verify:   List loaded context items. If reference project given but not read → STOP
```

### Gate 1.3: Brand Kit
```
Trigger:  Any UI task (app, website, design)
Action:   Extract or request: primary color, secondary color, font family, logo
Source:   Check existing files first (index.html, theme.css, tailwind.config)
          If not found → ask user ONE question: "What's your brand color and font?"
          If user doesn't respond → use professional defaults (blue #3b82f6, Inter)
Gate:     Brand Kit must be resolved before ANY component code is written
```

### Gate 1.4: Design Research
```
Trigger:  New app or website (not bugfix, not admin)
Action:   If reference URL given → clone structure and style
          If reference image given → clean background, extract layout
          If neither → search Mobbin/Awwwards for same category, study top 3
Output:   Design direction decided. Layout structure defined
WRONG:    Designing from scratch without any reference
CORRECT:  Always start from proven patterns, then customize
```

### Gate 1.5: Inspiration Cleaning
```
Trigger:  User provides reference image for design
Action:   Before using, verify: pure black background, simplified structure
          Remove "slop" (noisy elements, watermarks, cluttered backgrounds)
Gate:     Clean reference ready before extracting patterns
```

### Gate 1.6: Page Planning
```
Trigger:  Any app or website task
Action:   List EVERY route/page before writing any code
Output:   Complete route map (path, component name, layout, auth requirement)
Example:
  /           → Home.vue          (public, bottom-nav)
  /menu       → Menu.vue          (public, bottom-nav)
  /cart       → Cart.vue          (auth, bottom-nav)
  /orders     → Orders.vue        (auth, bottom-nav)
  /login      → Login.vue         (public, no-nav)
Gate:     All routes listed. No "will add later" allowed
```

### Gate 1.7: Type System
```
Trigger:  Any app with data entities
Action:   Define TypeScript types BEFORE any UI code
Output:   For each entity: interface, FormValues, PageParams, StatusOptions, enums
Template:
  export interface {{Entity}} {
    id: string
    {{fields}}
    isDelete: boolean
    createdAt: string
    updatedAt: string
  }
  export type {{Entity}}FormValues = Omit<{{Entity}}, 'id' | 'isDelete' | 'createdAt' | 'updatedAt'>
Gate:     Types defined. Stores can now be written
```

### Gate 1.8: Store System
```
Trigger:  After Gate 1.7 (types exist)
Action:   Create Pinia stores with CRUD + localStorage persistence
Rules:    - Re-export types: `export * from '#/types/{{entity}}'`
          - Soft delete: toggle `isDelete`, never hard delete
          - Audit fields: `createdAt`, `updatedAt` auto-set
          - Version-based cache: `dataVersion` ref for reactive refresh
Gate:     Stores created. Views can now reference them
```

---

## PHASE 2: DURING CODING (Rules — Apply While Writing Every File)

### Rule 2.1: Design Tokens First
```
Trigger:  Writing any component with visual styles
Check:    Are CSS variables / @theme tokens defined?
          YES → use tokens: bg-primary, text-dim, shadow-card
          NO  → STOP. Create theme.css first (see agent_core_protocol.md §4.3)
WRONG:    bg-[#FF6B35] hardcoded in component
CORRECT:  bg-primary using design token
```

### Rule 2.2: Complete Data
```
Trigger:  Any component that displays data (products, menu items, team, etc.)
Action:   Enter ALL items in one go. Count: minimum matches real-world expectation
WRONG:    3 products with "TODO: add more"
CORRECT:  12+ products with real names, prices, descriptions, images
```

### Rule 2.3: Production-Ready Views
```
Trigger:  Creating any page/view
Action:   Page must be FULLY functional when created. All states handled:
          - Loading state
          - Empty state (centered icon + text + CTA)
          - Error state
          - Data state (populated with real data)
WRONG:    Skeleton page with "Coming Soon" text
CORRECT:  Full page with all states, interactions, and data
```

### Rule 2.4: Language Consistency
```
Trigger:  Any UI text
Check:    What is the project language?
Action:   100% of ALL UI text in that language. Zero mixing
WRONG:    Chinese app with English button "Submit" and label "Name"
CORRECT:  Chinese app: "提交" button, "姓名" label — 100% 简体中文
```

### Rule 2.5: Icon Standard
```
Trigger:  Any icon needed in UI
Action:   Use inline SVG (Lucide style). Never emoji
WRONG:    <span>🏠</span>
CORRECT:  <svg>...(house icon)</svg> or <LucideHome />
```

### Rule 2.6: Mobile-First Dimensions
```
Trigger:  Mobile app views
Apply:    - Container: max-w-[540px] mx-auto
          - Touch targets: min h-11 (44px)
          - Safe area: pb-[env(safe-area-inset-bottom)]
          - Bottom nav: fixed, 60px, 4 tabs
```

### Rule 2.7: Chain Completion
```
Trigger:  Building page A that links to page B or C
Action:   Build B and C too. Don't leave dead links
Example:  Building ProductList → also build ProductDetail
          Building Home → also build all pages linked from Home
WRONG:    "Page B coming in next task"
CORRECT:  All linked pages built in same session
```

### Rule 2.8: WhatsApp Integration
```
Trigger:  Any B2B or B2C app
Action:   Add floating WhatsApp button on all pages
Template:
  <a href="https://wa.me/{{PHONE}}" target="_blank"
     class="fixed bottom-20 right-4 z-50 w-14 h-14 bg-[#25D366] rounded-full
            flex items-center justify-center shadow-lg">
    <svg ...whatsapp icon... />
  </a>
```

### Rule 2.9: localStorage Persistence
```
Trigger:  Any app with auth, cart, orders, or user preferences
Action:   All critical state must survive page refresh
Pattern:  Pinia store with localStorage sync in `$subscribe`
Verify:   Refresh page → data still present
```

---

## PHASE 3: AFTER CODING (Verification Chain — Execute Sequentially)

### Step 3.1: Build
```
Trigger:  ALL files written (Phase 2 complete)
Action:   npm run build
Gate:     MUST pass with zero errors
          If fails → run Error Recovery (agent_core_protocol.md §6) → rebuild
WRONG:    Building mid-creation
CORRECT:  Finish everything → build once
```

### Step 3.2: Auto-Include Check (Scan & Add Missing)
```
Action:   Scan index.html, public/, main.ts for these items:
          ✓ Meta tags (charset, viewport, description, theme-color, apple-mobile)
          ✓ Robots noindex (unless user said "allow crawling")
          ✓ Favicon (generate SVG if missing)
          ✓ Manifest.json (PWA)
          ✓ Service worker (PROD only)
          ✓ SPA fallback files (.htaccess, _redirects, 404.html)
          ✓ Open Graph tags
          ✓ Catch-all router route
Gate:     If any missing → add them → rebuild
```

### Step 3.3: Route Verification
```
Action:   Scan router config. For each route:
          - Does the component file exist?
          - Does it import correctly?
          - Does it render (not blank)?
Gate:     All routes verified. No dead routes
```

### Step 3.4: Auth Flow Test
```
Trigger:  App has authentication
Action:   Verify: Login → OTP/Password → Home → Profile → Logout
          Verify: Protected routes redirect to login when not authed
          Verify: Back navigation works (router.back() with fallback)
```

### Step 3.5: Persistence Test
```
Action:   Verify localStorage items:
          - Auth token survives refresh
          - Cart items survive refresh
          - Language preference survives refresh
```

### Step 3.6: Mobile Responsiveness
```
Action:   Verify:
          - Container: max-w-[540px] centered
          - Bottom nav visible, not overlapping content
          - Touch targets ≥ 44px
          - No horizontal scroll
          - safe-area-inset applied
```

### Step 3.7: Visual Polish Check
```
Action:   Verify:
          - Hover effects on all interactive elements
          - Transitions use cubic-bezier(0.16, 1, 0.3, 1)
          - No static buttons (all have active:scale feedback)
          - Gradient blends for video backgrounds (if any)
          - Typography hierarchy (H1 > H2 > body > caption)
```

### Step 3.8: First Run
```
Action:   npm run dev (run in background)
Purpose:  Show user the running result
Gate:     App loads without console errors
```

---

## PHASE 4: PUBLISH CHECKLIST (When User Says "publish" or "deploy")

### 4.1 Final Meta Audit
```
Action:   Verify index.html has ALL meta tags from Step 3.2
          If user says "allow crawling" → remove noindex
          Generate accurate <title> and <meta description> from project context
```

### 4.2 PWA Completeness
```
Action:   Verify:
          ✓ manifest.json has: name, short_name, start_url, display: standalone, icons (192+512)
          ✓ sw.js registered (PROD only)
          ✓ Fullscreen mode on first tap (PROD only, with try/catch)
```

### 4.3 SPA Fallback
```
Action:   Verify ALL 4 fallback mechanisms:
          ✓ .htaccess (Apache)
          ✓ _redirects (Netlify/CF)
          ✓ 404.html (GitHub Pages — via spaFallback() Vite plugin)
          ✓ Catch-all route: { path: '/:pathMatch(.*)*', redirect: '/' }
```

### 4.4 Build & Ship
```
Action:   npm run build → verify zero errors → ready for deployment
```

---

## SMART BRAIN AUDIT (Final Compliance — Run After Phase 3)

| Category | Check | Pass Criteria |
|----------|-------|---------------|
| Grid/Layout | Mobile-first responsive | No horizontal scroll, 540px container |
| PWA/SEO | Manifest + SW + meta | All files present in public/ |
| Language | UI text consistency | 100% single language, zero mixing |
| CTA | WhatsApp integration | Floating button on all B2B/B2C pages |
| Content | Data density | Real data, no placeholders, no TODOs |
| Tokens | Design system | Zero hardcoded colors/fonts in components |

---

_Master Rules V13.0 — Claude Skills DNA Upgrade (2026-03-27)_
_Structure: Phase gates → Sequential steps → Verification chain → Audit_
