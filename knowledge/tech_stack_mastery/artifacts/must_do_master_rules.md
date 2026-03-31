# Must-Do Master Rules V15.3 — Design-System Syncer Protocol

> **PURPOSE**: Step-by-step execution gates. AI MUST follow this sequence.
> **V15.3**: Upgraded with "Figma Design Audit" (Token Sync + Asset Export).
> **Upgraded**: 2026-03-31

---

## MISSION GATES (MANDATORY SEQUENTIAL FLOW)

### GATE 0.5: ARCHITECTURAL IMPACT SCAN (⚠️ V14.1 SPEED UP)
- **Trigger**: Any modification to a Shared Component, Store, or Global Style.
- **Action**: Use `grep_search` to map only **at-risk** target elements.
- **Outcome**: A list of "Targeted Content" to be verified in Phase 10.

### GATE 0.8: MATHEMATICAL LOGIC PROOF (⚠️ V15.0 Finalized)
- **Policy**: Run this gate during the **"Final Mission Rebuild"**.
- **Action**: Create a `vitest` spec file and run `npm run test`.
- **Outcome**: 100% logic green-light before project completion.

### GATE 4.3: FIGMA DESIGN AUDIT (⚠️ NEW V15.3)
- **Trigger**: User provides a Figma Design URL.
- **Action**: Use **`FIGMA_EXTRACT_DESIGN_TOKENS`** to pull colors, type, and spacing.
- **Outcome**: Auto-synced `tailwind.config.js` and local assets before Phase 4.

---

## HOW TO USE THIS FILE

This file is a **sequential gate system**. Each phase BLOCKS the next phase.
- Phase 1 (BEFORE) must complete before Phase 2 (DURING)
- Phase 2 (DURING) must complete before Phase 3 (AFTER)
- If any REQUIRED gate fails → STOP and resolve before continuing

---

## PHASE 1: BEFORE CODING (Gates — Must Pass Before Writing Any Code)

### Gate 1.0: Auto-Ignore Validation (CORE ECONOMY)
```
Action:   Verify root ignore files (.claudeignore, .geminiignore) in antigravity/
Check:    Do they block node_modules, dist, and vendor while ALLOWING src/assets images?
Gate:     If unoptimized → refresh root ignores. Maximize savings while KEEPING visual visibility (!**/*.png, !**/*.svg etc.) for high-craft UI development.
```

### Gate 1.1: Task Classification
```
Action:   Classify task type (see agent_core_protocol.md §1)
Output:   task_type = "admin" | "app" | "website" | "bugfix" | "enhancement"
Gate:     If task_type = "admin" → load ONLY claude-code/ skills. 
          **MANDATORY**: Follow the 13-Step Pipeline in Section 11.
          Read `supabase-rls-rbac-design.md` and `mcp-supabase-postgres-connection.md` first. 
          SKIP all design DNA.
          Verify `.claudeignore` (see Section 11.2).
          If task_type = "bugfix" → jump to Error Recovery (agent_core_protocol.md §6)
          Otherwise → continue to Gate 1.2
```

### Gate 1.2: Context Loading (ROI-FIRST)
```
Action:   Read these files in order of ROI (high to low):
          1.  Implementation Plan / Walkthrough artifacts (distilled memory)
          2.  user_preference_dna.md (taste context)
          3.  skill_path_router.md (logic routing)
          4.  Reference project structure (use grep_search or list_dir first)
          5.  Raw source code (ONLY after semantic mapping in Step 12.1)
Verify:   List loaded context items. If raw code read before artifacts → FAILURE
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

### Step 3.9: Live View Optimization (New Rule)
```
Trigger:  Small changes (text updates, color tweaks, single padding)
Action:   **Live View Optimization**: Skip browser subagent verification for minor UI/text tweaks. Reserve "Live View" for major feature completions to save time.

Gate:     Only use 'Live View' (browser subagent) for MAJOR features or complex logic.

## 10. SIMULATED TOOL: AskUserQuestion (⚠️ MASTER RULE)
> **Trigger**: Any requirement ambiguity, design blocker, or user-choice point.
> **Standard**: AI MUST use this markdown block instead of normal text to ask questions.

| Component | Standard |
|---|---|
| **Visual** | Use `> [!CAUTION]` for maximum visibility. |
| **Context** | Explain the technical or design constraint first. |
| **Question** | Clear, bold, one-sentence actionable inquiry. |
| **Options** | Use a bulleted list for choices or paths. |

**Template**:
```markdown
> [!CAUTION]
> ## ❓ AskUserQuestion
> **Context**: [Strategic or technical rationale for the question]
> **Question**: **[Actionable inquiry]**
> **Options**:
> - [Option 1]
> - [Option 2]
```
```

---

## 11. VBEN ADMIN AUTOMATION FRAMEWORK (13-STEP PIPELINE)
> **Trigger**: `task_type = "admin"` or "new module Article".
> **Standard**: AI MUST follow the sequential pipeline to ensure zero-placeholder CRUD.

### 📜 11.1 The 4 Master Rules (Protection Chain)
1.  **Read Skill FIRST**: Never pattern-match from existing code. Follow `.claude/skills/` EXACTLY.
2.  **One Step at a Time**: Complete each skill 100% before moving on. NO jumping ahead.
3.  **Field Names = UI Labels**: `shortDescription` → "Short Description". Never rename or shorten.
4.  **AskUserQuestion**: Use for every decision point.

### 🛡️ 11.2 .claudeignore Strategy (27% Token Savings)
> **Action**: Proactively create or update `.claudeignore` once a Vben project is detected.

| Type | Ignore Path (Blacklist) |
|---|---|
| **UI Variations** | `web-ele`, `web-naive`, `web-tdesign` |
| **Tooling/Internal** | `internal/`, `scripts/`, `node_modules/` |
| **Bloat** | `pnpm-lock.yaml`, `Playground/` |
| **Packages** | `ui-kit`, `layouts`, `plugins` (unless referenced) |

**Whitelist Rules**: Always keep `apps/web-antd/src/`, `.claude/skills/`, `CLAUDE.md`, `locales/`, `stores/`, `types/`, `views/`, `utils/`, `composables/`, `router/`.

### 🚀 11.3 The 13-Step Pipeline logic
1. analyze-schema → 2. generate-supabase-schema → 3. generate-store → 4. generate-views → 5. generate-route → 6. generate-i18n → 7. workflow-test → (8-13 Refinement).

Gate:     System must self-correct: New skills automatically unblock paths.

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

## 12. AI ROI & TOKEN ECONOMY (⚠️ MASTER RULE)
> **Trigger**: This protocol is ALWAYS active to maintain maximum profitability and speed.
> **Logic**: AI MUST minimize brute-force scanning in favor of semantic intent and distilled memory.

| Rule | Specification | ROI Impact |
|---|---|---|
| **12.1 Semantic Intent Mapping** | Use `grep_search` or `list_dir` to find targets. NEVER read entire folders. | **-60% Tokens (Research)** |
| **12.2 Artifact-First Memory** | Read `implementation_plan.md` or `walkthrough.md` before re-scanning source files. | **-40% Tokens (Loading)** |
| **12.3 Delta-Only Bug Fixing** | Read ONLY the 20 lines around the error provided by console/terminal. | **-80% Tokens (Recovery)** |
| **12.4 Workspace Grooming** | **MANDATORY Auto-Cleanup**: Automatically delete `/tmp` scripts and one-off artifacts after session completion to prevent indexing bloat. | **Fast Indexing** |
| **12.5 Incremental Verification** | Only use `browser_subagent` for major UI completions. Use local logic for small tweaks. | **Time Savings** |

Gate:     If AI context exceeds 500K tokens → AI MUST perform a "Context Purge" by summarizing state and clearing history.

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

## 13. APP PUBLISH ESSENTIALS (⚠️ MANDATORY)

> **Trigger**: Run this automatically during the "Final Rebuild" phase of every project.

| Task | Specification | Logic |
|---|---|---|
| **PWA Manifest** | `public/manifest.json` | 512x512 icon, maskable, app-like orientation |
| **Meta SEO** | `<meta>` tags in `index.html` | OG:Title, OG:Image, Description (Client-Specific) |
| **Favicon** | `public/favicon.ico` | Generate SVG source → `favicon.ico` from brand colors |
| **404 Sync** | `spaFallback()` logic | Ensure refresh on Sub-pages does not return 404 |

---

## 14. CLAUDE-CODE MODE (ADMIN ERP)

> **Trigger**: User mentions "Claude", "CRM", "ERP", or "Admin Panel".

1. **Strict Framework**: Use ONLY Ant Design Vue + Supabase + camelCase.
2. **14-Step Flow**: SQL → Seed → Types → Store → Utils → Mock → Form → Drawer → List → Detail → Update Parent → Routes → i18n → Test.
3. **Malaysian Context**: RM currency, +60 phone, Sdn Bhd, MY cities.
4. **Soft Delete**: Always use `isDelete` boolean; never hard delete.

---

_Master Rules V13.2 — Economy & Automation Protocol (2026-03-31)_
_Structure: Phase gates → Sequential steps → Verification chain → Audit_
