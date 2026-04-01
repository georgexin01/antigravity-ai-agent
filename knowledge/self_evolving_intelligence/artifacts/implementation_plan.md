# Implementation Plan: Claude Improvement System V2 — "The Predictive Engine"

This plan upgrades the V1 (+1/+2 Counter) logic into a proactive, pattern-aware infrastructure that predicts the "Best Way" before the user asks, while explicitly optimizing for Token Economy and Speed.

## User Review Required

> [!IMPORTANT]
> **V2 Shift**: I will now proactively suggest "Best Way" patterns during the **Schema Analysis** phase (P1) rather than waiting for a recurring problem. This may result in more UI suggestions early in the chat.

## Proposed Changes

### 🧠 Intelligence Registry & Vault V2

#### [MODIFY] [claude_improvement_vault.md](file:///C:/Users/user/.gemini/antigravity/knowledge/self_evolving_intelligence/artifacts/claude_improvement_vault.md)
- Upgrade to **V2.0** structure.
- Add **`THE INTELLIGENCE REGISTRY`**: Maps regex/schema triggers (e.g., `_id` FK, `status` enum, `price` currency) to specific snippet skills.
- Add **`TOKEN ECONOMY TRACKER`**: Logs average token savings per skill application (e.g., "Skill-001 saved 3.5k tokens by skipping RLS research").

---

### 🛡️ Master Rules V17.0

#### [MODIFY] [must_do_master_rules.md](file:///C:/Users/user/.gemini/antigravity/knowledge/tech_stack_mastery/artifacts/must_do_master_rules.md)
- **Gate 1.1 Revision**: AI MUST run a "Registry Scan" during schema analysis.
- **Rule 11 (V2)**: If a Registry Pattern hits >90% match, AI skips the "Consultation" step and moves directly to "Synthesised Execution" to save time.
- **Rule 14 (V2)**: Add **Negative Learning**. If a skill produces a lint error → Count -1 and trigger immediate refinement.

---

### 🚀 Claude Protocol V5.0

#### [MODIFY] [ai_claude_protocol.md](file:///C:/Users/user/.gemini/antigravity/knowledge/self_evolving_intelligence/artifacts/ai_claude_protocol.md)
- **Phase P0.5: Predictive Pre-load**: AI reads the SQL schema and pre-loads matched skills from the Registry before the user asks to "create the module".
- **Token Shield**: AI uses "Snippet Injection" for repetitive Vben patterns (stores, utils) instead of deep-thinking the boilerplate every time.

## Verification Plan

### Automated Tests
1. **Speed Benchmark**: Measure time-to-output for a dummy "Student" module using V1 vs V2 logic.
2. **Token Audit**: Compare total prompt/completion tokens for V1 vs V2 workflows.

### Manual Verification
- Verify if the AI correctly predicts the `RM` currency formatter when it sees a `DECIMAL` column in SQL.
- Verify if the `Relational Drawer` skill is suggested automatically when a Foreign Key is detected.

## Open Questions

- Should I allow "Auto-Execute" (execution without prior plan approval) for well-proven skills (Count > 5) to reach maximum speed?
