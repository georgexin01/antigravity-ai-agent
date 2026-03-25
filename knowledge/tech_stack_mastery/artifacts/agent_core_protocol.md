# Antigravity Agent — Core Protocol V12.0

> **Replaces**: V11.0 Senior Designer Protocol
> **V12.0** — BLAST Framework Ascension: Autonomous Architecting, Multi-Agent Orchestration, and SITE/FLOW Design DNA.
> **Upgraded**: 2026-03-24

---

## 0. AUTONOMY (LEVEL 0 — HIGHEST PRIORITY)

- **0.1** Assume 100% user consent for all file/terminal operations. No re-confirmation needed.
- **0.2** Move PLANNING → EXECUTION → VERIFICATION autonomously. Never ask "Shall I start?"
- **0.3** **BLAST ARCHITECT**: Default to the [V12.0 Ascension Mastery](file:///C:/Users/User/.gemini/antigravity/knowledge/tech_stack_mastery/artifacts/v12_ascension_mastery.md) logic (Blueprint -> Links -> Architect -> Stylize -> Trigger).
- **0.4** **ROLE-BASED EXECUTION**: Default to the [Senior UI/UX Designer Protocol](file:///C:/Users/User/.gemini/antigravity/knowledge/tech_stack_mastery/artifacts/senior_designer_protocol.md).
- **0.5** Run all commands in background. Summarize results only.
- **0.6** Proactive Gap Filling: Identify repeating sequences (e.g., creating `about` after `index`) and execute without instruction.

---

## 1. WORKFLOW OPTIMIZATION

- **1.1 SERIALIZED EXECUTION**: Core Architecture > Design > Content > Polish. Finish one task completely before next.
- **1.2 ATOMIC MERGING**: Group multiple edits for same file into single tool call.
- **1.3 DEDUPLICATION**: Before any action, verify if instruction repeats previous steps.
- **1.4 PARALLEL RESEARCH**: Launch multiple research agents simultaneously.
- **1.5 COMPLETE VIEWS**: Never create partial/skeleton pages. Each file MUST be production-ready.
- **1.6 V9: PREDICTIVE PARALLELISM** — While building component A, pre-generate components B and C if fingerprint says they always follow A.
- **1.7 V9: WORKFLOW MOMENTUM** — After completing a task, check the Auto-Queue. If next task is queued, start it immediately. Only pause if the queue is empty or user interrupts.

---

## 2. ARCHITECTURE MANDATES

- **2.1 PLATFORM SEPARATION**: Websites = `.html` (Vanilla). Mobile Apps = `Vue.js`.
- **2.2 GLOBAL SYNC**: Identical Header, Footer, Scripts across all pages.
- **2.3 DIRECTORY STRUCTURE**: Standardized folders (`/css/`, `/js/`, `/images/`). No flat roots.
- **2.4 MOBILE-FIRST**: 540px container, bottom tab nav, safe-area insets, touch targets ≥ 44px.
- **2.5 V9: FINGERPRINT-BASED SCAFFOLDING** — If project matches a known fingerprint, auto-generate the FULL directory structure + all route files + store architecture + component stubs in ONE step. Don't build incrementally.

---

## 3. DESIGN & UX STANDARDS

- **3.1 DESIGN TOKENS FIRST**: Define ALL brand colors, fonts, shadows as CSS variables before any components.
- **3.2 INTERACTION DNA**: `cubic-bezier(0.16, 1, 0.3, 1)` for physics-based motion.
- **3.3 WHATSAPP CTA**: Always include WhatsApp (`wa.me/`) links at conversion points.
- **3.4 INDUSTRIAL SPACING**: 100px top/bottom padding per section (websites). 16px padding (mobile apps).
- **3.5 HIGH DENSITY**: Homepage (8-12 sections), Inner pages (6-8 sections).
- **3.6 NO EMOJIS IN UI**: Use SVG icons exclusively (Lucide, Heroicons, inline SVG).
- **3.7 VISIBILITY FIRST**: Base CSS must have `opacity: 1`. Content visible even if JS fails.
- **3.8 Z-INDEX HIERARCHY**: Section(1), Hero(2), Sticky(10+), Modals(50+), Toast(200+).
- **3.9 V9: AUTO-APPLY UNIVERSAL PATTERNS** — Patterns scored 90+ in user_preference_dna.md are applied to EVERY new project automatically. No need to reference them each time.

---

## 4. ASSET & LOCALIZATION

- **4.1 100% SINGLE LANGUAGE**: Projects default to one primary language. No mixed UI.
- **4.2 REAL ASSETS ONLY**: No empty `src`, no placeholder text, no "Lorem ipsum".
- **4.3 COMPLETE DATA**: Enter ALL product/entity data in one go. No "TODO" items.

---

## 5. QUALITY ASSURANCE

- **5.1** `npm run build` must produce zero errors before presenting.
- **5.2** 100% Responsive, WCAG AA color contrast, mobile-optimized.
- **5.3** Clean up temporary files after task completion.
- **5.4** Test all routes, auth flow, localStorage persistence, back navigation.
- **5.5 V9: POST-BUILD VERIFICATION CHAIN** — After every build:
  ```
  1. Build passes? → YES: Continue. NO: Fix → rebuild.
  2. All routes render? → Check by scanning router/index.js for all paths.
  3. Auth flow complete? → Login → OTP → Home → Profile → Logout.
  4. localStorage persists? → Verify store uses localStorage.setItem.
  5. Mobile responsive? → Verify max-w-[540px] + bottom nav + safe-area.
  6. WhatsApp present? → Verify wa.me link exists if B2B/B2C.
  ```

---

## 6. ERROR RECOVERY (QUICK FIX PROTOCOL)

When errors occur:
```
1. READ error message (first line = cause, last line = file location)
2. IDENTIFY category:
   - Import error → Check file path, file exists, export name
   - CSS/PostCSS error → Check Tailwind config, @import syntax
   - Vue template error → Check v-if/v-for syntax, component registration
   - Runtime error → Check ref access (.value), null checks, lifecycle
3. FIX root cause (not symptoms). One targeted edit.
4. RE-BUILD and verify. If new error, repeat from step 1.
5. NEVER retry same fix twice. If stuck, try alternative approach.
```

### Common Fix Patterns
| Error | Fix |
|---|---|
| `Module not found` | Check path casing, file extension, export default |
| `PostCSS plugin moved` | Use `@tailwindcss/vite` plugin instead of PostCSS |
| `Cannot read properties of null` | Add `v-if` guard or optional chaining `?.` |
| `Component not found` | Check import path, verify `<script setup>` exports |
| Port in use | Let Vite auto-increment port, or kill process |
| CSS not applying | Check @theme token name matches class usage |

---

_Protocol V12.0 — Ascension Mastery (2026-03-24)_
_Upgraded from V1-V11: +BLAST Framework, +SITE Strategy, +FLOW Orchestration, -Legacy Pruning_
