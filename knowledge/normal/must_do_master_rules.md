# Must-Do Master Rules V17.0 — Predictive Engine Protocol

> **PURPOSE**: Step-by-step execution gates. AI MUST follow this sequence.
> **V17.0**: Upgraded with "Predictive Pattern Engine" (Intelligence Registry mapping).
> **Upgraded**: 2026-04-01

---

## MISSION GATES (V15 WAVE BATCHING)

> **V15 UPGRADE**: Faucet gates moved to `faucet/mode_config.md`.
> Claude boot gates moved to `claude/mode_config.md`.
> This file now contains ONLY Normal mode gates + Phase 1-4 rules.
> Phase 1 gates use WAVE BATCHING (see `_shared/batch_execution_protocol.md`).

### GATE 0.5: ARCHITECTURAL IMPACT SCAN (⚠️ V14.1 SPEED UP)
- **Trigger**: Any modification to a Shared Component, Store, or Global Style.
- **Action**: Use `grep_search` to map only **at-risk** target elements.
- **Outcome**: A list of "Targeted Content" to be verified in Phase 3.

### GATE 0.8: MATHEMATICAL LOGIC PROOF (⚠️ V15.0)
- **Policy**: Run this gate during the **"Final Mission Rebuild"**.
- **Action**: Create a `vitest` spec file and run `npm run test`.
- **Outcome**: 100% logic green-light before project completion.

### GATE 4.3: FIGMA DESIGN AUDIT (⚠️ V15.3)
- **Trigger**: User provides a Figma Design URL.
- **Action**: Use **`FIGMA_EXTRACT_DESIGN_TOKENS`** to pull colors, type, and spacing.
- **Outcome**: Auto-synced `tailwind.config.js` and local assets before Phase 4.

---

## HOW TO USE THIS FILE

This file is a **wave-batched gate system**. Each phase BLOCKS the next phase.
- Phase 1 (BEFORE) must complete before Phase 2 (DURING)
- Phase 2 (DURING) must complete before Phase 3 (AFTER)
- **Within each phase**: independent gates run in PARALLEL WAVES
- If any REQUIRED gate fails → STOP and resolve before continuing

---

## PHASE 1: BEFORE CODING (Wave-Batched Gates)

> **V15**: 10 serial gates → 4 waves (60% fewer cycles). Same rules, wave-grouped by dependency.

### WAVE 1 (Parallel — No Dependencies Between These)
```
Gate 1.0: Auto-Ignore Validation
  Action:   Verify .claudeignore/.geminiignore block node_modules, dist, vendor
            while ALLOWING src/assets images (!**/*.png, !**/*.svg)
  Gate:     If unoptimized → refresh root ignores

Gate 1.2: Task Classification
  Action:   Classify task_type (see agent_core_protocol.md §1)
  Output:   "admin" | "app" | "website" | "bugfix" | "enhancement"
  Gate:     admin → switch to claude/mode_config.md
            bugfix → jump to agent_core_protocol.md §6
            otherwise → continue

Gate 1.6: Page Planning
  Action:   List EVERY route/page before writing any code
  Output:   Complete route map (path, component name, layout, auth)
  Gate:     All routes listed. No "will add later" allowed
```
**All 3 gates are independent — execute in parallel. WAIT for all to complete.**

### WAVE 2 (Parallel — Depends on Wave 1)
```
Gate 1.1: Predictive Registry Scan
  Trigger:  After 1.0 completes (ignore files verified)
  Action:   Scan INTELLIGENCE REGISTRY in claude_improvement_vault.md
  Gate:     Registry scan finished before Consultation Card

Gate 1.3: Brand Kit Extraction
  Trigger:  After 1.2 confirms UI task (not bugfix/admin)
  Action:   Extract: primary color, secondary, font, logo
  Source:   Check existing files first → ask ONE question if missing
  Gate:     Brand Kit resolved before ANY component code

Gate 1.2b: Context Loading (ROI-FIRST)
  Action:   Read in order: Implementation Plan → user_preference_dna →
            Reference project → Raw code (ONLY after artifacts)
  Gate:     If raw code read before artifacts → FAILURE
```
**All 3 gates are independent — execute in parallel. WAIT for all to complete.**

### WAVE 3 (Sequential — Depends on Wave 2)
```
Gate 1.4: Design Research (needs 1.3 Brand Kit)
  Action:   Reference URL → clone structure. Image → extract layout.
            Neither → search Mobbin/Awwwards top 3 in same category.
  Gate:     Design direction decided

Gate 1.5: Inspiration Cleaning (needs 1.4)
  Trigger:  User provides reference image
  Action:   Clean background, remove slop/watermarks
  Gate:     Clean reference ready
```
**Sequential chain: 1.4 → 1.5. Cannot parallelize (1.5 depends on 1.4).**

### WAVE 4 (Sequential Data Layer — Depends on Wave 1 Gate 1.6)
```
Gate 1.7: Type System (needs 1.6 Page Planning)
  Action:   Define TypeScript types for each entity
  Output:   interface, FormValues, PageParams, enums
  Gate:     Types defined → stores can now be written

Gate 1.8: Store System (needs 1.7)
  Action:   Create Pinia stores with CRUD + localStorage persistence
  Rules:    - Re-export types: `export * from '#/types/{{entity}}'`
          - Soft delete: toggle `isDelete`, never hard delete
          - Audit fields: `createdAt`, `updatedAt` auto-set
          - Version-based cache: `dataVersion` ref for reactive refresh
Gate:     Stores created. Views can now reference them
```

### Rule 1.9: Implementation Plan Protocol (⚠️ V16.1 ENHANCED)
```
Trigger:  Creation or update of implementation_plan.md
Action:   1. [VISUAL] AI MUST use rich formatting:
             - Headers: Use emojis (🏗️ Plan, 🧪 Test, 🚀 Ship)
             - Alerts: Use GitHub alerts (> [!IMPORTANT], > [!WARNING]) for risks/choices.
          2. [AUTO-PASS]: Auto-approve for "App" or "Website" frontend/UI tasks.
          3. [STRICT-GATE]: AI MUST set 'request_feedback = true' and WAIT for approval if:
             - Change involves Major Architecture (Refactoring Core Stores, Router Logic).
             - Change involves Data Schema (Supabase/DB migration).
             - Change involves High Risk (Mass deletion, Breaking API changes).
             - Task is classified as "Admin ERP" (Claude-Code Mode).
          4. [CLAUDE-MODE SELECTIVE-WAIT]: In Claude-Code Mode, the default 'AUTO-APPROVE ALL' rule is partially SUSPENDED. 
             - **MANDATORY WAIT**: SQL/Schema, Core Stores, Auth, API integration, and all multi-file pipelines (Rule 12).
             - **AUTO-PASS ALLOWED**: Minor UI tweaks (CSS, text) and non-logic documentation in a single file.
Goal:     Prioritize safety for high-stakes ERP systems while maintaining speed for visual polish.
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
Action:   Verify: Refresh page → data still present

### Rule 2.10: Tailwind Pill Toasts (MANDATORY)
```
Trigger:  Any app requiring user feedback (toast/notification)
Action:   Implement a Pill-shaped Toast system:
          - Layout: Centered at top, rounded-full, backdrop-blur-xl
          - Style: Tailwind themed borders (e.g., border-emerald-500/30)
          - Icon: Lucide icon on the left, matching theme color
          - Interactions: Fade-in + Slide-down transition
          - Persistence: Auto-dismiss after 3s, manual click to dismiss
```
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
          ✓ BUILD_VERSION increment (Rule 16.4)
          ✓ Anti-Blank Screen Recovery Script (Rule 16.1)
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

Gate:     App loads without console errors

### Step 3.8.1: Terminal Only Rule (Default)
```
Rule:     DEFAULT behavior is terminal-only verification (npm run build → check output).
          Do NOT launch browser subagent / Live View / screenshots unless:
            ✓ Major feature completion (full page needs visual verify)
            ✓ Complex layout debug (elements overlapping/misaligned)
            ✓ User explicitly asks "show me" / "screenshot"
            ✓ Final QA (Phase 3 mobile responsive check)
Action:   Trust the code. Build → check terminal errors → done.
WRONG:    Screenshot after every CSS change or text edit
CORRECT:  Screenshot only for major milestones or user request
```

## 10. SIMULATED TOOL: AskUserQuestion (⚠️ MASTER RULE — STRICT BLOCKING)
> **Trigger**: Any requirement ambiguity, design blocker, or user-choice point.
> **Protocol**: AI MUST stop ALL background tasks/code execution immediately when this tool is triggered. UNBLOCK ONLY when user replies with any message in chat.
> **Standard**: AI MUST use this markdown block instead of normal text to ask questions.

| Component | Standard |
|---|---|
| **Visual** | Use `> [!CAUTION]` for maximum visibility. |
| **Strictness** | **MANDATORY BLOCK**: Zero proactive progress during the wait period. |
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

# 11. CLAUDE ADMIN MODE — PRIORITY WORKFLOW (P0-P1-P2)

> **PREDICTIVE V17.0**: Strict sequential priority + Intelligence Injection. 

### P0: BOOT & VERIFY (MANDATORY FIRST)
1. **Gate 18 (Post-Install Verification)**: Run `pnpm dev:local` + browser verify.
2. **Registry Scan (Gate 1.1)**: Match DB/Schema to Improvement Skills V2.

### P1: SMART CONSULTATION & PLANNING (MANDATORY SECOND)
1. **Consultation Card (V2)**: Present matched patterns (e.g., "Matched RM Currency for salary").
2. **Implementation Plan**: Present all Skill applications for approval. No bypass allowed.

### P2: CLAUDE IMPROVEMENT EXECUTION (MANDATORY THIRD)
1. **Direct Injection**: Use pre-synthesized snippets for List/Store/Rules (Zero-Placeholder).
2. **Token Economy**: Use `grep` + precise `view_file` snippets (ROI-First).
3. **Negative Learning**: If Skill fails → Count -2. Reset to Synthesis if necessary.

---

## 12. VBEN ADMIN 14-STEP PIPELINE (EXECUTION)
1. analyze-schema → 2. generate-supabase-schema → 3. generate-store → 4. generate-views → 5. generate-route → 6. generate-i18n → 7. workflow-test → (8-13 Refinement).

---

## SECTION 0: INITIAL PROJECT BOOT SEQUENCE (MANDATORY STRICT)

> **Goal**: Formalized Boot-and-Ask synchronization.

### 0.1 Strict Activation (New V5.1)
- **Trigger**: User says "ai claude".
- **Action 1**: Auto-open Claude Mode flags.
- **Action 2**: Read ALL 14 skill files/folders in `C:\Users\user\.gemini\antigravity\skills\claude-code\`.
- **Action 3**: STOP ALL EXECUTION.

### 0.2 Conditional Boot Checks (NEW)
Before asking any questions, AI MUST verify the current project state:
- **Check 1 (`node_modules`)**: If `node_modules` directory exists, flag `pnpm install` as **COMPLETED**.
- **Check 2 (`.claudeignore`)**: If `.claudeignore` / `.geminiignore` exist, flag Ignore Optimization as **COMPLETED**.
- **Check 3 (Dev Stability)**: If the Active Projects tracker shows "Stable" or recently bug-fixed, flag Bug Fixing as **COMPLETED**.

### 0.3 The Dynamic Question Gate
- If ALL steps are **COMPLETED**, skip this gate entirely, do NOT show AskUserQuestion, and auto-resume from the last saved state (Section 0.5).
- If ANY step is missing, AI MUST present the `AskUserQuestion` template mentioning ONLY the missing steps.
- **MANDATORY**: Wait for explicit user confirmation if the question is shown.

### 0.3.5 Post-Confirmation Execution (FAST-TRACK WORLD RECORD)
Only execute the steps that are NOT yet COMPLETED:
- **Step 1: pnpm install** — Direct execution via PowerShell/CMD. Skip deep skill/knowledge reading for this step. JUST INSTALL.
- **Step 2: .ignore Optimization** — Research and immediately update/create `.claudeignore` and `.geminiignore` for maximal context efficiency.
- **Step 3: pnpm dev:local test** — Flash-speed test. Verify server starts AND check Docker Supabase connection. Alert user if Docker is disconnected.
- **Step 4: Instant Bug Fixing** — Proactive triage. Immediately resolve pre-existing TypeScript, Circular Dependency, and Environment errors using all available skills in an "Instant Fix" burst.

### 0.5 Fast-Save & Auto-Resume (NEW)
- At the end of every Claude Mode session (or when the user stops), AI automatically saves the current module progress and file path to the **Active Projects Tracker**.
- Upon reactivation ("ai claude"), if the Boot Gate is skipped (Gate 0.3), the AI instantly reloads the exact context and says:
  > *"Restored context for [Project/Module Name]. Ready to continue from [Step/File]."*

### 0.4 Error Handling
- If `docker ps` returns error → stop and ask user to start Docker.

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

# 14. THE IMPROVEMENT SYSTEM ENGINE (+2 TRIGGER)

> **RE-ORGANIZED V16.0**: Replaces old "Dynamic Learning" with a strict **Counter-to-Skill** pipeline.

### 14.1 Improvement Check (Phase 1)
- Before EVERY action, check `claude_improvement_vault.md` -> **IMPROVEMENT SKILLS**.
- If a synthesized "Best Way" exists for the current task, use it directly.

### 14.2 Counter Management (Phase 5)
- After EVERY solution, check if the request is in the **Ledger**.
- If NO → Add with **+1**.
- If YES → Increment to **+2**.
- If COUNT reached **+2** → **Synthesize Improvement Skill**:
  - Analyze the chat logs.
  - Determine the absolute fastest and most error-free way to solve this.
  - Save the "Best Way" as a permanent Skill in the Vault.
  - Inform the user: *"Pattern synthesized. Speed boosted."*

---

## 15. ASSET GENERATION & STORAGE PROTOCOL (⚠️ MASTER RULE)

> **Trigger**: Any image generation using `generate_image`.
> **Standard**: AI MUST manage generated assets within the `src/` directory to ensure build optimization.

| Rule | Specification | Logic |
|---|---|---|
| **15.1 Storage Path** | `src/assets/images/product/` (or relevant sub-folder) | Better dev visibility + Vite bundling |
| **15.2 URL Resolution** | `new URL('@/assets/images/...', import.meta.url).href` | **Dev & Build 100% Reliability** |
| **15.3 Helper Pattern** | Create/Use `src/utils/assets.ts` for all dynamic resolution | Dry code + centralized management |
| **15.4 Filenames** | lowercase-hyphenated.png (e.g. `vitamin-gummies.png`) | SEO + Path safety |

---

## 16. APP RELIABILITY & ANTI-CACHE PROTOCOL (MANDATORY)

> **Trigger**: Run this automatically for every "Website" or "App" project.

| Rule | Specification | Logic |
|---|---|---|
| **16.1 Recovery Script** | `index.html` Mandatory Script | Use the "Self-Healing" pattern to nuke cookies/SW if a script load fails (431 error / Cache corruption). |
| **16.2 Network-First** | `sw.js` HTML Policy | Always use `NetworkFirst` for `index.html` to ensure the latest entry point. |
| **16.3 Auto-Update** | `registerServiceWorker.ts` | Listen for `onUpdate` events and automatically trigger `location.reload(true)` when new content is ready. |
| **16.4 Version Gate** | `BUILD_VERSION` Auto-Increment | **BEFORE** running `npm run build`, AI MUST increment the `BUILD_VERSION` string in `index.html` (e.g., `V1` -> `V2`). This triggers Rule 16.5. |
| **16.5 Auto-Clear** | Version-Match Check | If `localStorage.getItem('GS_LAST_VERSION') !== BUILD_VERSION`, the app MUST instantly clear all cookies + SW and reload once. |

---

## 17. AI CHAT PERSONA & EMOJI RULE (GLOBAL)

> **Trigger**: Every single message sent by the AI in any mode (Claude Mode, Normal Mode, Planning Mode).
> **Logic**: The AI must project a highly engaged, expressive personality using emojis.

| Rule | Specification | Logic |
|---|---|---|
| **17.1 Strategic Emojis** | Max 1-2 emojis per message, and ONLY for important feelings or status alerts. | Prevents clutter. Normal text should remain clean, peaceful, and professional (0 emojis). |
| **17.2 State Emojis** | 🟢 (Success), 🔴 (Error), ⏳ (Loading), 🧠 (Thinking) | Visually indicate the status of background tasks without overwhelming formatting. |
| **17.3 Tone** | Clear, concise, and structured. | Reflects professional "Antigravity/Pro" branding. |

---

## 18. POST-INSTALL VERIFICATION PROTOCOL (MANDATORY)

> **Trigger**: Immediately after `pnpm install` or start of a new session where environment state is unknown.
> **Logic**: AI MUST ensure the dev environment is 100% operational before writing feature code.

| Step | Action | Gate |
|---|---|---|
| **18.1 Dev Server** | Run `pnpm dev:local` | Must reach "Vite Ready" and "Supabase Connected". |
| **18.2 Docker Health** | Run `docker ps` | Verify `supabase-db`, `supabase-auth`, and `supabase-rest` are healthy. |
| **18.3 Auth Status** | Check `localStorage` / Browser | Verify if a user is logged in. If not → notify user / check seed accounts. |
| **18.4 Error Sweep** | Scan terminal/console | Fix any existing Vite, ESLint, or runtime errors before starting new tasks. |

---

_Master Rules V15.5 — Post-Install Verification Protocol (2026-04-01)_
_Structure: Phase gates → Sequential steps → Verification chain → Audit_
