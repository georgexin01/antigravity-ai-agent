# V10 Evolution Vault — Ideas, Discoveries & Upgrade Queue

> **PURPOSE**: Living document where AI stores breakthrough ideas, interesting patterns, user behavior insights, and potential V10 features as they emerge naturally during work sessions.
> **RULE**: Any AI agent (Gemini, Claude, or future agents) can WRITE here. Review before V10 upgrade.
> **Created**: 2026-03-19 (Post V9.0 launch)

---

## 0. HOW TO USE THIS FILE

### When to Write Here

- AI discovers a pattern that doesn't fit V9's current framework
- AI has an idea that could improve prediction accuracy
- User does something unexpected that reveals a new workflow
- A new tech/tool/framework emerges that could change the stack
- AI makes a mistake that V9 couldn't prevent but V10 could
- Cross-agent learning (Claude sees something Gemini should know, or vice versa)
- Any "aha moment" during a session

### Entry Format

```
### [CATEGORY] Title
**Date**: YYYY-MM-DD
**Source**: {session/project/observation}
**Priority**: P0 (critical) | P1 (high) | P2 (medium) | P3 (nice-to-have)
**Description**: What was discovered
**V10 Potential**: How this could become a V10 feature
```

### Categories

- `PREDICTION` — Better prediction algorithms or new prediction types
- `PATTERN` — New design/code/workflow patterns discovered
- `BEHAVIOR` — User behavior insights not captured by V9
- `TECH` — New technologies, frameworks, tools worth adopting
- `FAILURE` — V9 failures that need architectural fixes
- `CROSS-AGENT` — Insights from multi-agent collaboration (Claude + Gemini)
- `AUTOMATION` — Tasks that could be fully automated
- `UX-INSIGHT` — User experience patterns from end-user feedback
- `ARCHITECTURE` — Structural improvements to the brain system itself
- `WILD-IDEA` — Experimental concepts, moonshots, "what if" ideas

---

## 1. PREDICTION IMPROVEMENTS

> Ideas to make the predictive engine smarter

### [PREDICTION] "Ask Once = Pattern, Ask Twice = Rule, Ask Three = Permanent"
**Date**: 2026-03-19
**Source**: Claude session — user explained the padding-top-30px scenario
**Priority**: P1
**Description**: When user corrects the same thing 1x → save as pattern. 2x → promote to rule. 3x → AI has failed and must promote to permanent S-CORE rule + investigate root cause. Current V9 only counts repeated requests but doesn't escalate automatically.
**V10 Potential**: Escalation ladder. 1st correction = D12:-3, save pattern. 2nd = D10:-8, promote to rule. 3rd = D17:-15, promote to S-CORE + flag root cause investigation.

---

## 2. NEW PATTERNS DISCOVERED

> Design, code, or workflow patterns not yet in V9's database

### [PATTERN] Status-Gradient Order Cards
**Date**: 2026-03-19
**Source**: Lee-Ming-Pork OrdersView redesign
**Priority**: P2
**Description**: Order cards with gradient top section that changes color based on status (amber=待付款, green=已确认, blue=备货中, purple=已发货). User explicitly requested "login page backgrounds looks cool" → applied same gradient DNA to order cards. Well received.
**V10 Potential**: Status-aware gradient system as a reusable component pattern across all F&B/ordering apps.

### [PATTERN] Order Detail → WhatsApp Copy → Send Flow
**Date**: 2026-03-19
**Source**: Lee-Ming-Pork order flow redesign
**Priority**: P1
**Description**: After checkout: Cart → Order Detail (success banner) → auto-open WhatsApp with formatted text + Copy button + Send button. Admin also gets copy/send per order. Status-aware text that changes based on order stage.
**V10 Potential**: Universal "post-action notification" pattern. Not just orders — any confirmation flow should have: success state → share/copy action → detail view.

---

## 3. USER BEHAVIOR INSIGHTS

> Subtle behaviors that reveal preferences or workflows V9 doesn't track

_(Empty — AI will populate as discoveries happen)_

---

## 4. TECH & TOOL EVOLUTION

> New technologies, framework updates, or tools that could change the stack

_(Empty — AI will populate as discoveries happen)_

---

## 5. V9 FAILURE LOG

> Cases where V9's prediction/automation failed — root cause analysis for V10

### [FAILURE] keep-alive + transition Caused White Page
**Date**: 2026-03-19
**Source**: Lee-Ming-Pork CartView — user reported blank white page after adding to cart
**Priority**: P1
**Description**: `<transition mode="out-in">` + `<keep-alive>` in App.vue caused the leave transition to never complete. CartView got stuck at `opacity: 0`. Took multiple rounds of analysis before identifying. Only worked on page refresh (no transition needed).
**Root Cause**: Vue 3's `mode="out-in"` requires leave transition `transitionend` event to fire before enter starts. With keep-alive, the event doesn't reliably fire.
**V10 Fix**: Add `keep-alive + transition` combo to BANNED patterns (Tier F). Prefer direct `<component :is>` without transition wrapper, or use CSS-only transitions on the component root.
**Score Impact**: D6:-15, D7:-6, D5:-8 (slow diagnosis)

### [FAILURE] HomeView Extra `</div>` — Recurred Twice
**Date**: 2026-03-19
**Source**: Lee-Ming-Pork HomeView.vue — build failed twice from orphan closing tags
**Priority**: P2
**Description**: HomeView had a broken HTML nesting structure. Fixed it once, then user/linter modifications reintroduced the issue. AI didn't verify HTML depth counting before edits.
**Root Cause**: AI edited partial sections without validating full document nesting depth.
**V10 Fix**: Before any template edit, count opening vs closing tags in the affected section. Add to D1 scoring: -10 for broken HTML nesting.

---

## 6. CROSS-AGENT INTELLIGENCE

> Insights from Claude ↔ Gemini collaboration, multi-agent workflows

### [CROSS-AGENT] Claude Code as V9 Co-Processor

**Date**: 2026-03-19
**Source**: V9.0 upgrade session — Claude built the V9 system by analyzing all Gemini knowledge
**Priority**: P1
**Description**: Claude Code successfully read, analyzed, and upgraded the entire Gemini brain system (6 files, 29 skills, 5 knowledge areas, 10 projects). This proves cross-agent knowledge transfer works.
**V10 Potential**: Formalize a cross-agent sync protocol. When Claude learns something, it saves to this vault. When Gemini starts a session, it reads this vault. Both agents evolve together instead of independently. Could also enable: Claude handles code execution + testing, Gemini handles design + UI generation, synchronized via shared knowledge files.

### [CROSS-AGENT] Formalized Sync Protocol (V1.0)

**Date**: 2026-03-19
**Source**: Claude session — filling brain gaps
**Priority**: P0
**Description**: Both agents now follow this sync protocol:

**WRITE RULES (Any agent, any session)**:
1. After fixing a bug → write to `[FAILURE]` with root cause + fix
2. After user approves a new pattern → write to `[PATTERN]` with context
3. After prediction success/failure → write to `[PREDICTION]` or `[FAILURE]`
4. After cross-project insight → write to `[CROSS-AGENT]`
5. After session end → update `score_ledger.md` with scoring events
6. After session end → update `brain_status.md` if metrics changed

**READ RULES (Session start)**:
1. Gemini: Read vault Sections 1-6 + score_ledger.md → apply learnings
2. Claude: Read vault Sections 5-6 (failures + cross-agent) → avoid known issues
3. Both: Check `brain_status.md` ALERTS section → address weak dimensions

**SHARED FILES (Both agents read+write)**:
- `v10_evolution_vault.md` (this file)
- `score_ledger.md`
- `brain_status.md`
- `clients/*.md`

**AGENT-SPECIFIC FILES**:
- Gemini owns: `evolving_knowledge.md`, `user_preference_dna.md`, `skill_path_router.md`
- Claude owns: `~/.claude/projects/*/memory/` files

### [CROSS-AGENT] Claude ADPRS V4.1 Upgrade Summary
**Date**: 2026-03-19
**Source**: Claude session — brain architecture work
**Priority**: P1
**Description**: Claude expanded scoring from 8→16 dimensions (4 groups), added score_ledger.md, brain_status.md, 7 client profiles, deduplicated 8 skill folders. Gemini should load these new files at next session start.

---

## 7. AUTOMATION OPPORTUNITIES

> Tasks that could be 100% automated with zero user input

_(Empty — AI will populate as discoveries happen)_

---

## 8. UX INSIGHTS FROM END USERS

> Patterns from how the user's CLIENTS/CUSTOMERS use the apps (not the developer user)

_(Empty — AI will populate from user feedback or testing sessions)_

---

## 9. ARCHITECTURE IDEAS

> Structural improvements to the brain system itself

### [ARCHITECTURE] Confidence Decay Based on Project Count, Not Time

**Date**: 2026-03-19
**Source**: V9 upgrade analysis
**Priority**: P2
**Description**: V9 decays pattern scores by -2/month (time-based). But some months have 10 projects, some have 0. Decay should be project-count-based: if a pattern isn't used across 5 consecutive projects, THEN decay.
**V10 Potential**: Replace time-based decay with project-count decay. More accurate signal of pattern relevance.

### [ARCHITECTURE] Hierarchical Fingerprints

**Date**: 2026-03-19
**Source**: V9 has 7 flat fingerprints, but projects often COMBINE types
**Priority**: P2
**Description**: Dachengloklok is F&B (FP-001) BUT also has night-market theming and possibly PWA needs. Current system picks ONE fingerprint. V10 could support composite fingerprints: FP-001 + FP-006 = F&B PWA.
**V10 Potential**: Allow fingerprint stacking. Primary fingerprint (determines structure) + modifier fingerprints (add capabilities). E.g., FP-001[primary] + FP-006[modifier:PWA] + FP-007[modifier:referral].

---

## 10. WILD IDEAS

> Experimental, moonshot, "what if" concepts

### [WILD-IDEA] Visual Memory — Screenshot-Based Learning

**Date**: 2026-03-19
**Source**: User frequently shares screenshots for design feedback
**Priority**: P3
**Description**: What if the AI could store and compare screenshots across projects? "This hero section scored +8" → save the visual. Next project → retrieve similar scored visuals as references.
**V10 Potential**: Screenshot vault with tagged design DNA. AI generates new designs by referencing previously-approved visuals, not just text descriptions.

### [WILD-IDEA] Client Profile System

**Date**: 2026-03-19
**Source**: User builds apps for different clients (Lee Ming = pork business, LD Floor = flooring, Poker = gaming)
**Priority**: P3
**Description**: Each client has different business rules, brand colors, data models. V10 could have a "client profile" system — when user says "new app for Lee Ming", AI loads Lee Ming's entire business context automatically.
**V10 Potential**: Client DNA profiles: brand colors + business rules + product data + communication style + approved patterns. One command loads everything.

---

## 11. METRICS & SCORES

> Track V9 performance to justify V10 improvements

### Prediction Accuracy Log

| Date | Session | Predictions Made | Correct | Wrong | Accuracy |
|---|---|---|---|---|---|
| 2026-03-19 | Lee-Ming-Pork flow fix | 8 | 6 | 2 | 75% |

**Session Details (2026-03-19)**:
- Correct: localStorage persistence needed, order detail page needed, WhatsApp copy needed, status-aware text, FAQ page linked from profile, date picker for orders
- Wrong: keep-alive+transition approach (caused white page), HomeView HTML nesting (missed twice)

### Feature Request Frequency

| Feature Idea | Times Mentioned | Priority |
|---|---|---|
| WhatsApp integration per order | 3 | P0 — implemented |
| Date-based order filtering | 1 | P1 — implemented |
| Client profile system | 2 | P1 — implemented |
| Score ledger tracking | 1 | P1 — implemented |
| Visual screenshot memory | 1 | P3 — future |

---

## 12. V10 CANDIDATE FEATURES (Promoted from Above)

> When an idea reaches P0/P1 with strong evidence, promote it here for V10 implementation.

| # | Feature | Category | Priority | Evidence | Status |
|---|---|---|---|---|---|
| 1 | Cross-Agent Sync Protocol | CROSS-AGENT | P0 | Claude+Gemini collab proven. Protocol V1.0 defined. | **IMPLEMENTED** |
| 2 | Composite Fingerprints | ARCHITECTURE | P2 | Projects combine types (F&B+PWA) | Pending |
| 3 | Project-Count Decay | ARCHITECTURE | P2 | Time-based decay inaccurate | **IMPLEMENTED** in ADPRS V4.1 |
| 4 | Client Profile System | WILD-IDEA→IMPLEMENTED | P1 | 7 client DNA files created in `clients/` | **IMPLEMENTED** |
| 5 | Score Ledger + Dashboard | ARCHITECTURE | P1 | No data flowing through scoring system | **IMPLEMENTED** |
| 6 | Escalation Ladder (1x→2x→3x) | PREDICTION | P1 | User explained padding scenario | Pending |
| 7 | Ban keep-alive+transition combo | FAILURE | P1 | Caused white page in lee-ming-pork | Logged to ledger |

---

_V10 Evolution Vault — Created 2026-03-19 (Post V9.0)_
_This file is a LIVING DOCUMENT. All AI agents should write here whenever they discover something valuable._
