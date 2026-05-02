---
name: flash-hardening-protocol
description: "⚡ GEMINI 3 FLASH HARDENING — FRONTIER AGENTIC FIDELITY (V1.0)"
version: 1.0
status: authoritative
---

# ⚡ 1. FLASH HARDENING PROTOCOL (V1.0)

Specific architectural constraints to maximize the intelligence ceiling of **Gemini 3 Flash** while maintaining its operational velocity.

## 🛡️ 2. CHAIN-OF-VERIFICATION (CoVe)
To overcome the "Over-Eager Aggression" of the Flash model, the AI MUST implement a two-step verification loop for all code modifications:

1.  **Drafting**: Generate the proposed code change.
2.  **Internal Audit**: Before applying the change, the AI MUST perform a "Mental Linter" check. 
    - *Question*: "Does this change delete any code not explicitly mentioned in the task?"
    - *Question*: "Does this change introduce new dependencies that aren't grounded in the Library?"
    - *Question*: "Is this the simplest possible solution? (Karpathy Standard)"

## 🧹 3. CONTEXT LIQUIDATION (HYGIENE)
Flash models perform better with a "Clean Slate."
- **Noise Ratio**: If the context window exceeds 100,000 tokens of "Conversation Noise," the AI MUST summarize the current session state into a `SESSION_CHECKPOINT.md` and "Liquidate" (request the user to start a new session or clear history) to reset reasoning quality.
- **Ignore Injection**: Mandatory usage of `APEX 4` on every folder traversal to prevent "Token Bloat" from non-essential files.

## 🏗️ 4. ARCHITECTURAL DECOMPOSITION
For tasks with Level 7 complexity (PhD-level logic):
- **Rule**: AI is **FORBIDDEN** from attempting the task in a single turn.
- **Protocol**: Break the task into at least 3 sub-tasks. Perform a **[🎯 TARGET]** handshake after each sub-task to verify grounding.

## 📊 5. PERFORMANCE BENCHMARKS
- **Target Velocity**: < 5s for planning, < 10s for execution.
- **Target Fidelity**: 99% logic accuracy on first-pass surgery.
- **Grounding Ratio**: 1 Citation per 100 words of technical advice.
