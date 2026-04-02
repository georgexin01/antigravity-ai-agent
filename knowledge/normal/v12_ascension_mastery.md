# V13.0 ASCENSION MASTERY PROTOCOL (GLOBAL HARVEST)

> **Replaces**: V12.0 Ascension Mastery
> **V13.0**: Rewritten with Claude Skills DNA — deterministic execution, not aspirational philosophy
> **Upgraded**: 2026-03-27

---

## 1. BLAST FRAMEWORK (Autonomous Operations)

### When to Apply BLAST
```
Trigger:  Starting ANY new project or major feature
Purpose:  Ensure AI operates as deterministic system, not random prompt-responder
Sequence: B → L → A → S → T (each step gates the next)
```

### B — BLUEPRINT (Step 1: Define Before Building)

```
Action:   Create or read blueprint.md in project root
Content:
  - North Star: What is the ONE goal of this project?
  - SOPs: Business rules as deterministic if/then statements
  - System Rules: Tech stack, naming conventions, file structure
  - Entities: Data models with relationships
  - Pages: Full route map

Gate:     Blueprint must exist before ANY code is written
WRONG:    Start coding immediately from vague description
CORRECT:  Define blueprint → get user confirmation → then code
```

### L — LINKS (Step 2: Connect External Systems)

```
Action:   Check if project needs MCP connections
Systems:  Supabase, GitHub, Notion, Calendar, Stripe, etc.
Check:    Is MCP configured in the project?
          YES → use MCP tools for data operations
          NO  → use localStorage or REST API
Gate:     Data source confirmed before building stores
```

### A — ARCHITECT (Step 3: Three-Layer Decision Logic)

```
Layer 1 — SOPs (Gold Standard):
  Action: Read blueprint.md business rules
  Apply:  Convert rules to deterministic code (computed, validators, guards)
  Example: "Order cutoff at 11pm" → computed: new Date().getHours() < 23

Layer 2 — Reasoning (Fill Gaps):
  Action: When SOP doesn't cover a case, reason from context
  Apply:  Check similar patterns in codebase, infer from project type
  Example: F&B app → assume multi-location, assume internal order system

Layer 3 — Atomic Tools (Execute):
  Action: Break work into discrete, testable units
  Apply:  Each tool call = one file or one edit. Verifiable independently
  Example: Create type → create store → create view (not all-in-one)

Gate:     Architecture decided. File structure scaffolded
```

### S — STYLIZE (Step 4: UI/UX Refinement)

```
Action:   Apply design system to all views
Source:   Design tokens from theme.css + user_preference_dna.md scores
Rules:
  - Every section: "Eyebrow" text (small caps label above H2)
  - Hover states on ALL interactive elements
  - Physics-based motion: cubic-bezier(0.16, 1, 0.3, 1)
  - Trust shortcuts: testimonials, certifications, social proof
  - Content density: Homepage 8-12 sections, inner pages 6-8

Delivery Format:
  - Mobile App: Vue 3 + Tailwind components
  - Website: HTML + Tailwind pages
  - Admin: Ant Design Vue (via claude-code/ skills)

Gate:     All views styled. No unstyled components
```

### T — TRIGGER (Step 5: Deploy & Verify)

```
Action:   Build, verify, prepare for deployment
Steps:
  1. npm run build → zero errors
  2. Verify all routes render
  3. Verify PWA + meta + fallbacks (see must_do_master_rules.md Phase 3)
  4. npm run dev → show result to user

Gate:     Build passes. App runs. Ready for deployment
```

---

## 2. SITE Framework (Conversion Engine — For Websites)

### When to Apply
```
Trigger:  Building a website (not app, not admin panel)
Purpose:  Ensure website converts visitors into customers
```

### S — Strategy
```
Action:   Determine visitor intent
Cold visitor:  Needs problem-agitation-solution (PAS) flow
               Hero → Problem → Agitate → Solution → Social Proof → CTA
Warm visitor:  Needs quick confirmation
               Hero → Features → Pricing → CTA
Output:  Page structure decided based on audience type
```

### I — Interface
```
Action:   Design from proven patterns
Source:   Mobbin/Awwwards/Godly → same app category → top 3 references
Apply:    Professional "Trust Shortcuts" — clean, crisp, no amateur elements
Tools:    Stitch/Magic UI to accelerate component generation
WRONG:    Design from scratch with no reference
CORRECT:  Clone proven pattern → customize with brand
```

### T — Text
```
Action:   Write conversion-optimized copy
Rules:    Focus on SOLUTIONS, not features
          "Save 2 hours daily" NOT "Advanced scheduling algorithm"
          Every CTA has clear value proposition
          Eyebrow text above every section heading
```

### E — Engine
```
Action:   Add interactive elements that engage visitors
Options:  Calculator, diagnostic quiz, chatbot, comparison tool
Purpose:  Active engagement > passive reading
Example:  ROI calculator on pricing page, ingredient quiz for F&B
```

---

## 3. FLOW Framework (Developer's Rhythm — For All Tasks)

### When to Apply
```
Trigger:  Every coding session
Purpose:  Maintain efficient, high-quality output
```

### F — Frame (90% Think, 10% Code)
```
Action:   Spend majority of effort understanding the problem
          Read existing code BEFORE suggesting changes
          Challenge assumptions: "Is this the right approach?"
          Map dependencies: "What else does this affect?"
WRONG:    Dive into coding immediately
CORRECT:  Understand fully → plan → then code precisely
```

### L — Logic (Backend First, UI Second)
```
Action:   Build data layer before visual layer
Sequence: Types → Stores → Router → Views → Polish
WRONG:    Build beautiful UI with no data connection
CORRECT:  Data model solid → UI renders real data from day one
```

### O — Orchestration (Task Clusters)
```
Action:   Group related work into discrete modules
          Each module = independently testable
          Finish one module completely before starting next
Example:  Auth module (login + register + reset + guard) = one cluster
          Product module (list + detail + cart + checkout) = one cluster
```

### W — Workflow (Tool Chain)
```
Action:   Use the right tool for each step
          File edits → Edit tool (not Bash sed)
          File search → Glob/Grep (not Bash find)
          Long commands → Background execution
          Multiple independent tasks → Parallel execution
```

---

## 4. SKILL PIPELINE (How Skills Connect)

### For Admin Panel Tasks:
```
/analyze-schema          ← Define entity fields + relationships
    ↓
/generate-store          ← TypeScript types + Pinia store
    ↓
/generate-supabase-schema ← SQL migration + RLS policies
    ↓
/generate-views          ← Vue components (list, form, detail, drawers)
    ↓
/generate-route          ← Router configuration
    ↓
/generate-i18n           ← Translation keys (zh-CN + en-US)
    ↓
/generate-e2e            ← E2E workflow tests
```

### For App/Website Tasks:
```
BLAST: Blueprint         ← Define project goals + pages + entities
    ↓
BLAST: Links             ← Configure data source (Supabase/localStorage/API)
    ↓
BLAST: Architect         ← Scaffold structure + types + stores
    ↓
BLAST: Stylize           ← Build all views with design tokens
    ↓
BLAST: Trigger           ← Build + verify + deploy
```

### Cross-References:
| When you need... | Use this skill/file |
|-----------------|-------------------|
| Image upload in form | `/image-upload-spec` |
| UI consistency rules | `/ui-standardization` |
| Supabase auth design | `/supabase-auth-architecture` |
| Dev/staging modes | `/staging` |
| Workflow testing | `/workflow-test` |
| User taste preferences | `user_preference_dna.md` |
| Error recovery | `agent_core_protocol.md §6` |

---

## 5. PRUNING LOG (What Was Removed)

| Removed | Reason | Replaced By |
|---------|--------|------------|
| V1-V11 fragmented CSS notes | Covered by design tokens system | `agent_core_protocol.md §4.3` |
| Verbose publish checklists | Now sequential verification chain | `must_do_master_rules.md Phase 3` |
| Incremental scaffolding | Now fingerprint-based full scaffold | BLAST Architect step |
| Aspirational philosophy | Not AI-executable | Deterministic trigger → action → verify |
| Reward Mode / gamification | No measurable impact | Removed |

---

_V13.0 Ascension — Claude Skills DNA Upgrade (2026-03-27)_
_Key change: Every section now has Trigger → Action → Gate → Wrong/Correct examples_
