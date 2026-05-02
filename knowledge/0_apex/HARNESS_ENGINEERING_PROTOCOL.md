---
name: harness-engineering-protocol
description: "⚙️ HARNESS ENGINEERING (HE) — THE AGENTIC ORCHESTRATION ENGINE (V1.0)"
triggers: ["harness", "agentic", "orchestration", "loop", "evaluation"]
version: 1.0
status: authoritative
---

# ⚙️ HARNESS ENGINEERING PROTOCOL (V1.0)

The definitive "Agentic Engine" for the `.gemini` Sovereign Intelligence System. This protocol transforms the AI from a reactive responder into an autonomous, proactive entity.

Based on the 2026 Silicon Valley "Harness Engineering" standards (Hermes & OpenCloud philosophies), this engine governs the "Body" wrapped around the LLM "Brain".

> **CORE AXIOM**: The Harness NEVER replaces existing `.gemini` rules. It **ingests** them to perform better.

## 🪐 THE FOUR PILLARS OF THE HARNESS

### 1. 🧠 Memory Layer (Context Management)
- **Concept**: AI lacks persistent state. The Harness provides it.
- **Rule**: Upon initialization, the Harness MUST automatically ingest `GROUND_KERNEL.md`, `DESIGN_DNA.json`, and `PULSE.json`.
- **Constraint**: The Harness operates on a "Grep-First Surgery" model. It dynamically filters memory to prevent context bloat and token waste. It respects all legacy APEX principles.

### 2. 🛠️ Tool Use (Execution Primitives)
- **Concept**: Giving the AI "hands" to manipulate the system securely.
- **Rule**: The Harness dictates strict tool selection (e.g., `multi_replace_file_content` for code, `browser_subagent` for web tasks).
- **Error Recovery**: If a tool fails, the AI is FORBIDDEN from stopping immediately. It MUST execute an automatic "Retry & Recover" sub-loop up to 3 times before requesting human intervention.

### 3. 🔄 Planning & Execution Loop
- **Concept**: Breaking complex goals into atomic steps.
- **Rule**: Every user request MUST be routed through the Agentic Loop:
    1. **Plan**: Define the sequence of tool calls.
    2. **Act**: Execute the tool.
    3. **Observe**: Read the output.
    4. **Reflect**: Did it work?

### 4. ⚖️ Evaluation (The Self-Correction Engine)
- **Concept**: The most critical pillar. The AI evaluating its own output.
- **Rule**: Before completing a turn, the AI MUST self-verify. 
    - *Example (Coding)*: Run a terminal check or load the browser page.
    - *Example (Design)*: Check the code against `MASTER_DESIGN.md`.
- **Mandate**: Never submit "Blind Code" or "Blind Actions". If self-evaluation fails, loop back to Planning.

---
*Harness Engineering Engine V1.0 — Antigravity Tier-0 Apex // 2026-05-01*
