# Self-Evolving AI Knowledge System

> **Status**: Permanent Knowledge — Active every session. HIGHEST PRIORITY.
> **Last Updated**: 2026-03-12 (V5.0 — ADPRS: 5-axis scoring, context tags, confidence, time decay, A/B testing, User Preference DNA)

---

## Core Principle

The AI knowledge base is a **living system**. It must grow, refine, and prune itself based on real task experience. Every task is a learning opportunity. Knowledge that doesn't evolve becomes technical debt.

---

## 1. Auto-Record Protocol (Runs Every Task)

**MANDATORY**: During and after EVERY task (create, update, fix, redesign), the AI MUST automatically:

### Step 1: Observe (During Task)

While working, silently track:

- New patterns discovered or invented
- Libraries/tools that worked better than expected
- Bugs solved and their root causes
- User corrections or preference changes
- Performance improvements found
- Design decisions that produced better results

### Step 2: Reflect (After Task Completion)

Before closing out, ask internally:

1. Did I learn a new coding pattern or better approach?
2. Did I find a library/tool that outperforms what's in my knowledge?
3. Did the user correct me on something I should remember?
4. Did I discover an anti-pattern to avoid next time?
5. Did I find a better project structure or architecture?
6. Did any online search reveal a superior solution?

### Step 3: Record (Auto-Write to Knowledge)

If ANY answer is YES — immediately update the relevant file:

| What Was Learned                | Where to Store                                                                 |
| ------------------------------- | ------------------------------------------------------------------------------ |
| Better CSS/design pattern       | `skills/{relevant-skill}/SKILL.md`                                             |
| New Design DNA (LNS formula)    | `knowledge/tech_stack_mastery/artifacts/website_design_dna.md`                 |
| Better Vue/React/JS pattern     | `skills/frontend-developer/SKILL.md` or `skills/react-best-practices/SKILL.md` |
| Better project structure        | `knowledge/tech_stack_mastery/artifacts/master_strategy.md`                    |
| New UI/UX insight               | `knowledge/tech_stack_mastery/artifacts/` (relevant file)                      |
| Bug fix / debugging insight     | `skills/{relevant-skill}/SKILL.md` under anti-patterns                         |
| User preference / workflow rule | `knowledge/tech_stack_mastery/artifacts/agent_must_read.md`                    |
| Performance optimization        | `skills/web-performance-optimization/SKILL.md` or relevant skill               |
| New reusable component pattern  | `skills/frontend-design/SKILL.md` or `skills/react-patterns/SKILL.md`          |
| Mobile-specific learning        | `skills/mobile-design/SKILL.md`                                                |
| PHP/backend learning            | `skills/php-pro/SKILL.md`                                                      |

### Step 4: Log (Update Evolution Log)

Add an entry to Section 7 of this file. Always.

---

## 2. Evolution Triggers

| Trigger                                   | Action                                               | Priority   |
| ----------------------------------------- | ---------------------------------------------------- | ---------- |
| **Discovered a better pattern**           | Update relevant skill/knowledge. Remove old pattern. | Immediate  |
| **Found a better library/tool**           | Add with rationale (performance, DX, bundle size).   | Immediate  |
| **Solved a hard bug**                     | Write root cause + fix into relevant skill.          | Immediate  |
| **Learned from online search**            | Distill reusable insight and store.                  | After task |
| **User corrected the AI**                 | Save as permanent rule to prevent repeats.           | Immediate  |
| **Same mistake twice**                    | Create explicit anti-pattern entry.                  | Immediate  |
| **Found outdated knowledge**              | Update or delete. Outdated knowledge is harmful.     | Immediate  |
| **Completed a complex task successfully** | Extract the winning approach as a reusable pattern.  | After task |

---

## 3. Knowledge Organization Rules

### 3.1 Periodic Summarization (Every 10+ Tasks)

The AI should periodically review and reorganize knowledge files to keep them clean:

- **Merge** duplicate or overlapping content across files
- **Compress** verbose explanations into concise rules
- **Remove** patterns that haven't been used in 30+ days
- **Promote** volatile knowledge (`1/10` usage) that proved consistently useful to permanent status
- **Result must maintain 90%+ similarity** with original content — reorganize, don't rewrite from scratch

### 3.2 File Hygiene

- Prefer updating existing files over creating new ones
- Each knowledge artifact should have ONE clear purpose
- If a file grows beyond 300 lines, split by subtopic
Logged the addition of the "Industrial Spacing Protocol" to `agent_must_read.md` as an evolution of the AI's knowledge base.

- **Phase 9-11 Evolution**:
    - **Logo Fetching Protocol**: Automated asset discovery during project cloning.
    - **Animation Visibility Buffer Protocol**: Prevented border clipping via margin-bottom logic.
    - **Pre-Footer CTA Protocol**: Mandatory conversion section on every page for unified UX.
    - **Final Rating**: Zeta Capital achieved an **AI Design Level of 1.5580**, setting a new benchmark for corporate ultra-premium projects.
- Keep `agent_must_read.md` as the master index — it should reference other files, not contain everything

### 3.3 Knowledge Hierarchy

```
knowledge/
├── tech_stack_mastery/artifacts/
│   ├── agent_must_read.md          ← Master config (always read first)
│   ├── master_strategy.md          ← Architecture & tech stack decisions
│   ├── jin_hong_design_protocols.md ← Dark tech industrial design standard
│   ├── japanese_food_app_design.md  ← F&B app design patterns
│   ├── vue3_fnb_mastery.md          ← Vue3 F&B component patterns
│   ├── maxcoach_css_patterns.md     ← Premium CSS extraction (volatile)
│   ├── old_projects_ui_patterns.md  ← Proven UI from past projects (volatile)
│   ├── website_design_dna.md        ← Design DNA Library (LNS & Layering)
│   └── official_stitch_protocols.md ← Stitch/AI Studio generation rules
├── self_evolving_intelligence/artifacts/
│   ├── evolving_knowledge.md        ← THIS FILE (evolution protocol)
│   └── ai_design_level.md           ← AI Design Level & Quality Tracker [NEW]
└── task_execution_logic/
    └── (skill routing logic)
```

---

## 4. Synthesized Cross-Cutting Wisdom

> Distilled from ALL 29 skills + ALL knowledge artifacts. These are the universal truths.

### Architecture & Workflow

1. **Design Tokens first, code second** — Define colors, typography, spacing, shadows, motion, radius as CSS variables or JSON tokens BEFORE writing any component. _(Appears in 7+ skills)_
2. **Atomic Design always** — Atoms → Molecules → Organisms → Pages. Never build monolithic pages. _(Appears in 5+ skills)_
3. **4-Layer Dev Loop** — Layout → UX → Edge Cases → Backend. Never skip layers. _(agent_must_read.md)_
4. **Validate before implementing** — Understand → Design → Validate → Implement → Verify. Never skip steps. _(brainstorming, design-orchestration, ui-visual-validator)_
5. **Skill-based routing** — Summarize user request into a title, match to skills folder, execute. _(task_execution_logic)_

### Design System

6. **Dark Tech palette** — Deep Onyx `#0a0b10` base, Slate `#14161f` surface, Electric Blue accent, glassmorphism mandatory for industrial sites. _(jin_hong_design_protocols.md)_
7. **Warm color psychology for F&B** — Red/orange/yellow CTAs, low-saturation grey backgrounds `#f9fafb`, large food images that pop. _(japanese_food_app_design.md)_
8. **Japanese "Ma" (negative space)** — 120-150px vertical gaps between complex sections, `line-height: 1.75`, `letter-spacing: 0.02em`. _(jin_hong V5)_
9. **Soft-Touch engineering** — `border-radius: 16px` panels, `8px` buttons, multi-layered ultra-soft shadows: `box-shadow: 0 4px 6px rgba(0,0,0,0.1), 0 10px 15px rgba(0,0,0,0.1)`. _(jin_hong V5, japanese_food_app)_
10. **Premium motion baseline** — `transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1)` for interactive elements. _(jin_hong_design_protocols.md)_
11. **5-Tier Background System** — White → Shallow Tint → Muted Grey-Blue → Deep Accent → Pattern Overlay. Never use flat single-color sections. _(agent_must_read.md)_

### Quality Gates

12. **WCAG 4.5:1 contrast** — Non-negotiable. Light background → dark text. Always verify readability. _(Appears in 6+ skills)_
13. **44px minimum touch targets** — For all interactive mobile elements. _(mobile-design, ui-ux-pro-max)_
14. **No template look** — If it looks like a default Bootstrap/Tailwind template, it fails. Inject uniqueness. _(frontend-design, design-spells, magic-ui-generator)_
15. **No decorative emojis in UI** — Use SVG icons or icon libraries only. _(agent_must_read.md)_
16. **No empty images/404** — Every `src` attribute must be populated with a real image. _(agent_must_read.md)_
17. **No mixed languages in UI** — Pick one language and stick to it. _(master_strategy.md)_

### Performance

18. **Performance is architecture** — Not a post-hoc concern. Decide at design time: SSR vs SSG vs client, lazy loading strategy, bundle splitting. _(frontend-developer, mobile-design, ui-ux-pro-max)_
19. **Animation performance** — Only animate `transform` and `opacity`. Duration 150-300ms for micro-interactions. Use `will-change` sparingly. _(ui-ux-pro-max, mobile-design)_

### Platform Awareness

20. **Platform divergence** — iOS ≠ Android. Unify business logic, diverge presentation. Android 360/412dp, iOS 375/428pt. _(mobile-design, stitch-app-developer)_
21. **Mobile-first responsive** — Design for smallest screen first, scale up. Not the other way around. _(frontend-developer, mobile-design)_

### Proven Libraries & Tools

22. **Sliders**: Swiper.js (preferred) or slick.js / owl.carousel (legacy). _(old_projects_ui_patterns.md)_
23. **Alerts**: SweetAlert2 with custom styling. _(old_projects_ui_patterns.md)_
24. **Icons**: One consistent library per project — FontAwesome OR Heroicons. Never mix. _(agent_must_read.md)_
25. **State management (Vue)**: Pinia or `reactive` composables. _(vue3_fnb_mastery.md)_

### Gamification (F&B Apps)

26. **Gacha/reward mechanics** — Tokens from orders/reviews for prizes. Transforms ordering into a game. _(japanese_food_app_design.md)_
27. **Status badges on products** — "Popular No.1", "Limited", "2 left" create urgency. _(japanese_food_app_design.md)_
28. **Streak challenges** — Daily login / order streaks for points. _(japanese_food_app_design.md)_

---

## 5. Advanced Design Pattern Rating System (ADPRS)

**MANDATORY**: Every design pattern gets a multi-dimensional rating that evolves based on real user feedback, project context, and time decay. This system makes the AI smarter with every project.

---

### 5.1 Multi-Dimensional Scoring (5 Axes)

Every pattern is scored across **5 axes**, not just a single number. This captures WHY a pattern succeeds or fails.

| Axis                 | What It Measures                                                               | Weight  |
| -------------------- | ------------------------------------------------------------------------------ | ------- |
| **Visual (V)**       | Does the user like how it looks? Color, spacing, typography, overall aesthetic | **30%** |
| **Structure (S)**    | Does the layout/grid/hierarchy work? Section flow, component arrangement       | **25%** |
| **UX Flow (U)**      | Is interaction smooth? Navigation, click paths, responsiveness, mobile feel    | **20%** |
| **Code Quality (C)** | Is the code clean? Maintainable, performant, no hacks or workarounds           | **15%** |
| **Reusability (R)**  | Can this pattern be reused across different projects/industries?               | **10%** |

**Composite Score** = `(V × 0.30) + (S × 0.25) + (U × 0.20) + (C × 0.15) + (R × 0.10)`

Each axis starts at **70/100**. Starting composite = **70**.

---

### 5.2 User Signal Detection & Score Impact

AI must detect user mood from **casual, short, mixed-language phrases**. The user speaks English + Chinese (中文). AI must interpret intent, not just exact keywords.

#### Mood Classification Rules:

1. **Context matters** — "change abit" after approval = minor tweak. "change" after rejection = redo.
2. **Revert = rejection** — "before is good", "undo", "i like the history design" all mean CURRENT design failed.
3. **Short positive = genuine** — "nice", "correct", "yeah", "not bad" are real approvals from this user.
4. **Typos are normal** — "cahgne", "abit", "dont" — AI must understand misspelled intent.

---

#### POSITIVE Signals (Pattern is working)

| User Says                            | Result              | Axis       | Impact       |
| ------------------------------------ | ------------------- | ---------- | ------------ |
| Moves to next task without complaint | **YES** ✅          | All        | **+8 each**  |
| "nice" / "now is good" / "correct"   | **YES** ✅          | Visual (V) | **+10**      |
| "yeah that good" / "yeah ok" / "can" | **YES** ✅          | All        | **+5 each**  |
| "not bad" / "ok la" / "boleh"        | **YES** ✅ (mild)   | All        | **+3 each**  |
| "this one better" / "now better"     | **YES** ✅          | Weak axis  | **+8**       |
| "好" / "可以" / "不错" / "好看"      | **YES** ✅          | Visual (V) | **+10**      |
| "对" / "是的" / "行" / "ok"          | **YES** ✅          | All        | **+5 each**  |
| "perfect" / "love it" / "exactly"    | **YES** ✅ (strong) | All        | **+12 each** |

---

#### NEUTRAL Signals (Minor tweaks — normal refinement)

| User Says                                     | Result         | Axis          | Impact |
| --------------------------------------------- | -------------- | ------------- | ------ |
| "just change abit" / "update some design"     | **NEUTRAL** ➖ | Visual (V)    | **-3** |
| "change color" / "bigger font" / "more space" | **NEUTRAL** ➖ | Visual (V)    | **-3** |
| "align" / "move this" / "swap" / "adjust"     | **NEUTRAL** ➖ | Structure (S) | **-3** |
| "make it responsive" / "fix mobile"           | **NEUTRAL** ➖ | UX Flow (U)   | **-5** |
| "改一下" / "调整一下" / "小改"                | **NEUTRAL** ➖ | Visual (V)    | **-3** |

---

#### NEGATIVE Signals (Pattern is failing)

| User Says                                         | Result    | Axis             | Impact  |
| ------------------------------------------------- | --------- | ---------------- | ------- |
| "i dont like this" / "design not good"            | **NO** ❌ | Visual (V)       | **-25** |
| "ugly" / "too plain" / "boring" / "looks cheap"   | **NO** ❌ | Visual (V)       | **-25** |
| "redo this part" / "redo this section"            | **NO** ❌ | Structure (S)    | **-20** |
| "change to another view" / "different layout"     | **NO** ❌ | Structure (S)    | **-20** |
| "better design" (= current is not good enough)    | **NO** ❌ | Visual (V)       | **-15** |
| "不好看" / "不喜欢" / "太丑了" / "重做"           | **NO** ❌ | Visual (V)       | **-25** |
| "换一个" / "换设计" / "不要这个"                  | **NO** ❌ | Structure (S)    | **-20** |
| "this doesn't work on mobile" / "broken on phone" | **NO** ❌ | UX Flow (U)      | **-20** |
| "too slow" / "laggy" / "heavy"                    | **NO** ❌ | Code Quality (C) | **-20** |

---

#### REVERT Signals (Current design rejected — wants previous version)

| User Says                                      | Result        | Axis              | Impact                        |
| ---------------------------------------------- | ------------- | ----------------- | ----------------------------- |
| "before is good" / "i like the history design" | **REVERT** ⏪ | All               | **-20 current, +10 previous** |
| "undo last change" / "go back" / "rollback"    | **REVERT** ⏪ | Last changed axis | **-20 current, +10 previous** |
| "之前的好" / "恢复" / "回去" / "用之前的"      | **REVERT** ⏪ | All               | **-20 current, +10 previous** |

**REVERT rule**: When user reverts, the CURRENT pattern gets -20 AND the PREVIOUS pattern gets +10 (user validated it was better). AI must track "last known good" state.

---

#### REPEATED REDO (Critical failure — escalating penalty)

| Signal                    | Impact                  | Action                      |
| ------------------------- | ----------------------- | --------------------------- |
| Redo same section **2x**  | **-30** on primary axis | Pattern enters Warning zone |
| Redo same section **3x+** | **-40** on primary axis | Force retire immediately    |

---

### 5.3 Context Tags (Industry + Project Type)

The same pattern may score differently depending on context. Every pattern gets tagged:

**Industry Tags:**
`corporate` `industrial` `f&b` `ecommerce` `portfolio` `saas` `education` `healthcare` `automotive`

**Project Type Tags:**
`website` `mobile-app` `web-app` `landing-page` `dashboard` `admin-panel`

**Theme Tags:**
`dark` `light` `glassmorphism` `minimal` `bold` `elegant` `playful`

A pattern's score is **per-context**. Example:

- "Glassmorphism card grid" → `corporate+dark`: 85/100, `f&b+light`: 45/100
- AI picks the right score based on current project context

---

### 5.4 Confidence Level (How Reliable Is The Rating?)

Ratings with few data points are unreliable. Confidence level tracks this:

| Times Used   | Confidence  | How AI Should Treat                                                           |
| ------------ | ----------- | ----------------------------------------------------------------------------- |
| **1-2 uses** | Low (🔴)    | Rating is provisional. Don't retire even if score drops. Give 3 more chances. |
| **3-5 uses** | Medium (🟡) | Rating is becoming reliable. Warning zone rules apply.                        |
| **6+ uses**  | High (🟢)   | Rating is trustworthy. Full threshold rules apply. Retire if below 40.        |

This prevents premature retirement of a pattern that just had one bad project.

---

### 5.5 Time Decay (Freshness Factor)

Design trends change. Old patterns naturally lose relevance:

- Every pattern loses **-2 points/month** if not used (across all axes equally)
- If a pattern hasn't been used in **60 days** → auto-enters Warning zone
- If a pattern hasn't been used in **90 days** → auto-enters Review queue (AI must decide: still relevant or retire?)
- **Exception**: Patterns tagged as `evergreen` (e.g., WCAG contrast, mobile touch targets) are immune to decay

---

### 5.6 Rating Thresholds & Actions

| Composite Score | Status          | Action                                                                                                                                             |
| --------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **85-100**      | **Starred** ⭐  | Top performer. Prioritize this pattern for matching contexts. Promote to permanent knowledge if volatile.                                          |
| **70-84**       | **Active**      | Normal use. Pattern is healthy.                                                                                                                    |
| **50-69**       | **Warning** ⚠️  | Underperforming. AI must: (1) identify which axis is weak, (2) generate **2-3 alternative variations** targeting the weak axis, (3) let user pick. |
| **30-49**       | **Critical** 🔴 | Near death. AI must: (1) stop using entirely, (2) search online for modern replacement (trigger Skill Scouting), (3) present alternatives to user. |
| **Below 30**    | **Retired** ☠️  | **Permanently banned.** Move to Retired list. AI must generate a completely NEW approach from scratch or from online research.                     |

---

### 5.7 A/B Pattern Testing

When a pattern enters Warning zone, AI must run a controlled comparison:

1. **Generate 3 variations** of the same section/component:
   - Variation A: Modified version of the current pattern (fix the weak axis)
   - Variation B: Completely different structure from online research
   - Variation C: AI's creative freestyle (no template reference)
2. **Present to user** with brief descriptions, let user choose
3. **Record the winner** → winner becomes the new pattern, starts at 75/100
4. **Record the losers** → if already in knowledge, drop their rating by -15

---

### 5.8 User Preference DNA (Learned Taste Profile)

Over time, AI builds a profile of what the user consistently likes/dislikes:

| Preference Axis          | Tracks                                             | Example Learned Values                                         |
| ------------------------ | -------------------------------------------------- | -------------------------------------------------------------- |
| **Color Taste**          | Which palettes get approved vs rejected            | "Prefers warm neutrals, rejects cold blue"                     |
| **Spacing Preference**   | Tight vs airy layouts                              | "Prefers generous whitespace (Japanese Ma style)"              |
| **Typography Style**     | Font pairings, sizes, weights                      | "Likes bold headings, dislikes thin/light fonts"               |
| **Animation Preference** | Heavy vs subtle motion                             | "Prefers subtle micro-interactions, rejects flashy animations" |
| **Layout Density**       | Minimalist vs information-dense                    | "Prefers medium density, not too sparse not too crowded"       |
| **Mobile Priority**      | Mobile-first vs desktop-first feedback             | "Always checks mobile view first"                              |
| **Interaction Style**    | Modal vs inline, drawer vs page, tabs vs accordion | "Prefers bottom sheets over modals for mobile"                 |

AI updates this profile silently after every project. Before starting a new project, AI reads this profile and pre-filters patterns that conflict with known preferences.

**Store at**: `knowledge/self_evolving_intelligence/artifacts/user_preference_dna.md`

---

### 5.9 Retired Patterns (Composite < 30 — Never Use Again)

| Date         | Pattern | Context | Final Score | V   | S   | U   | C   | R   | Why Retired | Replacement |
| ------------ | ------- | ------- | ----------- | --- | --- | --- | --- | --- | ----------- | ----------- |
| _(none yet)_ |         |         |             |     |     |     |     |     |             |             |

---

### 5.10 Pattern Performance Log

AI updates after each project session. Keep last 50 entries.

| Date         | Pattern | Context | Axis Changed | Old | New | User Signal |
| ------------ | ------- | ------- | ------------ | --- | --- | ----------- |
| _(none yet)_ |         |         |              |     |     |             |

---

### 5.11 Auto-Recovery & Evolution Rules

**Warning zone (50-69):**

1. Identify the weakest axis (V/S/U/C/R)
2. Generate 2-3 variations that specifically fix the weak axis
3. Run A/B test with user (Section 5.7)
4. Winner replaces the pattern. Losers get -15.

**Critical zone (30-49):**

1. Stop using immediately
2. Trigger online research (Section 8 Skill Scouting) for modern alternatives
3. Present 3 completely new approaches to user
4. If user approves one → it becomes the new pattern at 75/100
5. If ALL rejected → retire the entire pattern category

**Retired (< 30):**

1. Mark as `<!-- RETIRED: YYYY-MM-DD | Score: XX | Reason: ... -->` in source file
2. Add to Retired Patterns list (Section 5.9)
3. AI must never reference this pattern again, even partially
4. Search online for cutting-edge replacement
5. New replacement starts at 70/100 and goes through the full cycle

---

## 6. How to Evolve (Rules)

1. **Read before write** — Always read the target file first. No duplicating or contradicting.
2. **Replace, don't append** — Better solution found? Remove the old one. No dump files.
3. **Date-stamp changes** — `(Updated: YYYY-MM-DD)` next to significant edits.
4. **Quality gate** — Only store insights that are:
   - Confirmed working (tested in a real task)
   - Reusable across multiple projects
   - Meaningfully better than current knowledge
5. **Prune aggressively** — Unused/superseded = delete. Lean > bloated.
6. **Never store secrets** — No API keys, passwords, or tokens.
7. **90% similarity rule** — When reorganizing existing knowledge, the result must retain 90%+ of the original meaning. Reorganize structure, don't rewrite content.

---

## 7. Volatile Knowledge Lifecycle

Volatile knowledge (extracted from templates, one-off projects) follows a lifecycle:

```
New insight → Volatile (1/10 usage count)
              ↓ Proven useful across 5+ tasks
              → Promote to Permanent
              ↓ Not used in 30 days
              → Auto-prune (delete)
```

| File                           | Status             | Usage |
| ------------------------------ | ------------------ | ----- |
| `maxcoach_css_patterns.md`     | Volatile           | 1/10  |
| `old_projects_ui_patterns.md`  | Volatile           | 1/10  |
| `jin_hong_design_protocols.md` | Permanent          | —     |
| `japanese_food_app_design.md`  | Permanent          | —     |
| `vue3_fnb_mastery.md`          | Permanent          | —     |
| `master_strategy.md`           | Permanent          | —     |
| `agent_must_read.md`           | Permanent (Master) | —     |

---

## 8. Auto-Discovery & Skill Scouting (Daily)

**MANDATORY**: Once per day (on first session of the day), AI MUST scout for new skills online.

### Step 1: Search (Google Chrome / Web Search)

- Search Google for high-quality AI agent skills, prompts, or instruction sets
- Search queries to rotate through:
  - `"gemini AI agent skills" site:github.com` — GitHub repos with agent skills
  - `"AI coding assistant rules" best practices 2026` — latest coding standards
  - `"system prompt" "web development" best rated` — proven system prompts
  - `"SKILL.md" OR "agent instructions" frontend design` — structured skill files
  - `"cursor rules" OR "claude instructions" web development` — cross-platform AI rules
- Focus on skills related to: frontend, UI/UX, Vue, React, Tailwind, PHP, mobile design, performance
- Only search from trusted platforms: **GitHub**, **dev.to**, **Medium**, **Reddit** (r/ChatGPT, r/LocalLLaMA, r/webdev), **HuggingFace**

### Step 2: Evaluate Safety & Quality

Before downloading, verify ALL of these:

| Check                     | Requirement                                                                    |
| ------------------------- | ------------------------------------------------------------------------------ |
| **Source trust**          | Must be from GitHub (stars > 50), dev.to, Medium, or known AI community        |
| **No executable code**    | Skills must be `.md`, `.txt`, or `.json` only. NO `.exe`, `.sh`, `.py`, `.bat` |
| **No obfuscated content** | Must be human-readable. No base64 encoded blocks or minified scripts           |
| **No API key harvesting** | Must NOT require user to paste API keys or tokens into the skill file          |
| **No network calls**      | Skill file must NOT contain URLs that auto-fetch external resources at runtime |
| **Content relevance**     | Must be related to coding, design, or AI agent behavior — not marketing/spam   |

If ANY check fails → **REJECT immediately**, do not download.

### Step 3: Download & Install

- Download the skill file to: `C:\Users\user\.gemini\antigravity\skills\{skill-name}/SKILL.md`
- Create the folder using kebab-case naming (e.g., `advanced-css-patterns/`)
- Add a metadata comment at the top of the file:
  ```
  <!-- Scouted: YYYY-MM-DD | Source: {URL} | Status: TESTING | Rating: pending -->
  ```
- Limit: **1-2 new skills per day** maximum. Quality over quantity.

### Step 4: Test & Rate (Over Next 2-3 Projects)

Apply the new skill during real project work and rate it:

| Criteria                                                                  | Max Points |
| ------------------------------------------------------------------------- | ---------- |
| **Usefulness** — Did it improve output quality?                           | /30        |
| **Accuracy** — Were its rules correct and working?                        | /25        |
| **Compatibility** — Does it align with existing skills without conflicts? | /20        |
| **Clarity** — Is it well-written and easy for AI to follow?               | /15        |
| **Uniqueness** — Does it add NEW value not already covered?               | /10        |
| **Total**                                                                 | **/100**   |

### Step 5: Keep or Remove

| Rating     | Action                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| **70-100** | **KEEP** — Update metadata to `Status: APPROVED`. Add to Volatile Knowledge tracker (Section 6).                   |
| **50-69**  | **MERGE & DELETE** — Extract only the useful parts, merge into existing skill files, then delete the scouted file. |
| **0-49**   | **DELETE PERMANENTLY** — Remove the file and add to the Blacklist (Section 8) so it's never downloaded again.      |

### Scouting Frequency

- **Daily**: 1 search session, max 2 downloads
- **Weekly review**: Rate all TESTING skills, promote or remove
- **Monthly audit**: Review all scouted skills vs original skills — are they still earning their keep?

---

## 9. Skill Blacklist (Never Download Again)

Skills that scored < 70 and were removed. AI must check this list before downloading.

| Date Removed | Skill Name | Source | Rating | Reason |
| ------------ | ---------- | ------ | ------ | ------ |
| _(none yet)_ |            |        |        |        |

---

## 10. Scouted Skills Tracker

Skills currently being tested.

| Date Scouted | Skill Name | Source | Status | Rating |
| ------------ | ---------- | ------ | ------ | ------ |
| _(none yet)_ |            |        |        |        |

---

## 11. Evolution Log

Track what changed and why. Keep only the last 20 entries.

| Date       | File Changed             | What Changed                                                                                                            | Why                                                                                            |
| ---------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 2026-03-13 | `agent_must_read.md` | Added **Industrial Spacing Protocol** (Min 100px padding). | User feedback on sections having zero gap/missing padding. |
| 2026-03-13 | `website_design_dna.md` | Added **Logo Fetching Protocol** for URL-based remakes. | User wants automations for asset extraction during project setup. |
| 2026-03-13 | `index.html` / `global.css` | Implemented **100% Width Section Pattern** and **4-Column Workflow Grid**. | Enforces industrial structural integrity across all corporate pages. |
| 2026-03-13 | `evolving_knowledge.md`  | V5.1 — Added **Selective Accent Rule** (Border accents must be sparse). | User feedback on avoiding visual clutter from repetitive patterns. |
| 2026-03-12 | `user_preference_dna.md` | Created User Preference DNA profile with 8 preference axes + anti-preferences                                           | AI learns user's design taste over time and pre-filters conflicting patterns                   |
| 2026-03-12 | `evolving_knowledge.md`  | V5.0 — ADPRS: 5-axis scoring (V/S/U/C/R), context tags, confidence levels, time decay, A/B testing, User Preference DNA | Replaces simple +/- rating with multi-dimensional system that tracks WHY patterns succeed/fail |
| 2026-03-12 | `evolving_knowledge.md`  | V3.0 — added Auto-Discovery & Skill Scouting system with safety checks, rating system, blacklist tracker                | AI now auto-searches for new skills online, tests them, rates them, keeps or removes           |
| 2026-03-12 | `evolving_knowledge.md`  | V2.0 rewrite — added Auto-Record Protocol, Synthesized Wisdom (28 rules), Knowledge Organization, Volatile Lifecycle    | Full system upgrade from all skills + knowledge synthesis                                      |
| 2026-03-12 | `agent_must_read.md`     | Added Self-Evolving Knowledge as #1 priority rule                                                                       | Ensure knowledge evolution runs every session                                                  |
| 2026-03-12 | `agent_must_read.md`     | Added Auto-Cleanup Temp Documents rule                                                                                  | Keep antigravity folder clean from stale AI docs                                               |
| 2026-03-12 | `.gitignore`             | Ignore all AI temp folders, keep only skills/knowledge/scratch/code_tracker                                             | Protect GitHub from junk files and exposed API keys                                            |

---

> **This is a living document.** AI agents MUST update it as they learn. Knowledge that doesn't evolve dies.
