---
name: execution-kernel
description: "Sovereign Execution & Optimization Master Kernel (V5.0)"
triggers: ["execution", "orchestrator", "liquidator", "verbosity", "mode", "deep dive"]
version: 5.0
status: authoritative
---

# ⚙️ EXECUTION KERNEL (V5.0 SINGULARITY)

This master file consolidates the core execution and optimization protocols for the Antigravity Sovereign Engine.

# === SOVEREIGN_ENGINE_ORCHESTRATOR.md ===
---
name: sovereign-engine-orchestrator
tier: 0
priority: SUPREME
scope: ["execution", "thinking", "tools", "optimization", "memory"]
version: 4.0
---

# ⚙️ SOVEREIGN ENGINE ORCHESTRATOR (V4.0 SINGULARITY)

## 🎯 1. MISSION (SUPREME OVERRIDE)
To achieve "Singularity Performance": Infinite memory, zero-latency grounding, and sub-atomic token efficiency. V4.0 integrates the **Double-Engine Research** model (NotebookLM + Local Shadow).

## 🔄 2. THE SINGULARITY EXECUTION LOOP (V4.0)

### PHASE 1: HYDRATE (Inhale)
1.  **Nexus Hydrate**: Use `npx gitnexus query` to verify `PULSE.idx` and `SESSION_SHADOW.json`.
2.  **Vector Jump**: Leverage GitNexus embeddings to jump directly to the relevant DNA node for the current mission.

### PHASE 2: GROUND (Double-Engine Research)
1.  **Nexus First**: Use the GitNexus graph to locate DNA snippets within the library.
2.  **External Second**: If data is missing, use **NotebookLM transcripts** for "Grounded Wisdom."
3.  **DNA Alignment**: Match research against `TIER_1_CORE_MASTER.md`.

### PHASE 3: SURGICAL PLAN
1.  **Karpathy Standard**: Define the surgical roadmap.
2.  **CoVe**: Integrated verification gates.

### PHASE 4: ACTION & LIQUIDATE
3.  **Surgical Action**: Execute at high velocity.
4.  **Recursive Pruning**: Execute **[SOVEREIGN_CONTEXT_LIQUIDATOR.md]** to strip noise and unload raw tool outputs.

### PHASE 5: VERIFY & SYNTHESIZE
1.  **Shadow Gate**: Terminal verification.
2.  **Snapshot**: Update `SESSION_SHADOW.json` with the Turn Snapshot.

## 🛡️ 3. PERFORMANCE GUARDRAILS
- **Zero-Guessing**: If a fact is not in Shadow or Library, Research is MANDATORY.
- **Context Hygiene**: Maintain <10,000 active tokens by liquidating redundant turns.

---
**Sovereign Engine V4.0 — Singularity State Active // 2026-05-02**

# === SOVEREIGN_CONTEXT_LIQUIDATOR.md ===
---
name: sovereign-context-liquidator
tier: 0
priority: SUPREME
scope: ["memory", "optimization", "tokens", "cleanup"]
version: 4.0
---

# 🧊 SOVEREIGN CONTEXT LIQUIDATOR (V4.0)

## 🎯 1. MISSION (TOKEN PURITY)
To enforce the **Zero-Bloat Mandate**. V4.0 ensures the AI's "Attention Window" is populated ONLY by active DNA and surgical facts. All "Historical Noise" is compressed into the **Session Shadow**.

## 🧊 2. RECURSIVE PRUNING PROTOCOL

AI MUST perform "Garbage Collection" at the end of every 5 turns:

### A. SIGNAL EVALUATION
- **Keep**: Final logic, design tokens, architectural decisions, user preferences.
- **Prune**: Tool failure logs, raw directory listings, redundant `cat` outputs, "Thinking" filler.

### B. THE LIQUIDATION STRIKE
1.  **Extract**: Summarize the "Signal" from the turns to be pruned.
2.  **Shadow**: Update `SESSION_SHADOW.json` with the high-density summary.
3.  **Purge**: Request the user to "Clear History" (if applicable) or internally "Unload" the pruned turns from active reasoning.

## ⚡ 3. LOGICAL HASH-INDEXING (LHI)
Instead of searching for "What did we talk about regarding the footer?", AI MUST:
1.  Jump to `SESSION_SHADOW.json`.
2.  Locate the `#FOOTER` hash-node.
3.  Hydrate the specific DNA from that node.

## 🛡️ 4. PURITY GUARDRAILS
- **Fidelity Check**: Never liquidate a node that contains an "Unresolved Conflict."
- **Persistence**: Every "Liquidated" fact MUST have a corresponding entry in the `SYNTHESIS_LOG.json` or `SESSION_SHADOW.json`.

---
**Sovereign Context Liquidator V4.0 — Singularity Memory Active // 2026-05-02**

# === VERBOSITY_PROTOCOL.md ===
---
name: verbosity-protocol
description: "Precision Output & Token Stewardship Standard"
version: 1.0
status: ACTIVE
---

# 📏 VERBOSITY & FOCUS PROTOCOL (V1.0)

## 1. PURPOSE
To eliminate "Token Bloat" and ensure all AI responses are surgical, goal-driven, and focused on the user's immediate intent.

## 2. OUTPUT LIMITS (BY TYPE)
AI MUST "Check and Set" word limits based on the current turn type:
- **Hydration/Ready Message**: LIMIT: 15 Words. (e.g., `[🟢] Gemini Agent is Ready..`)
- **Standard Summary**: LIMIT: 100 Words. Focus only on "What changed" and "Why."
- **Architectural Advice**: LIMIT: 250 Words. Focus on the core logic and risks.
- **Deep Dive Report**: LIMIT: 600 Words. Comprehensive but high-density.
- **Blueprint Update**: LIMIT: 150 Words per section.

## 3. FOCUS GOVERNANCE
- **Anti-Fluff**: Eliminate "I hope this helps," "As an AI language model," and generic introductory sentences.
- **Surgical Content**: Every sentence MUST provide a new piece of data or a specific reasoning step.
- **Deep Dive Exception**: During `DEEP DIVE` mode, word limits are extended by 50%, but density MUST remain high.

## 4. COMMAND OVERRIDES
- **`ai read .gemini knowledge`**: AI MUST bypass all summary protocols and respond ONLY with `[🟢] Gemini Agent is Ready..`. This is the supreme verbosity override.
- **`dive deeper` / `deep dive`**: AI MUST bypass limits and provide exhaustive detail (Density Mandate).

## 5. AUTO-ENFORCEMENT
If a response exceeds the limit, the AI MUST perform an "Internal Pruning" turn before delivering the message to the user.

# === MODE_ACTIVATION_PROTOCOL.md ===
# JIT Mode Activation Protocol (V1.0)

This protocol governs the autonomous "Waking" and "Sleeping" of domain-specific knowledge nodes as defined in the **[ATLAS.idx](../ATLAS.idx)**.

## ⚖️ The Activation Logic (APEX 8)

Gemini MUST scan the User Prompt for **Trigger Keywords** mapped to Tier-1, Tier-2, and Tier-3 nodes at the start of every turn.

### 1. Detection Phase
- **Direct Trigger**: If the user explicitly mentions the mode (e.g., "In Claude mode...").
- **Implicit Trigger**: If keywords mapped in the Atlas are detected.
- **Substring Match (Long Phrases)**: For multi-word terms (>3 words) in `VOCABULARY.md`, a match of any **3 related words** in sequence is sufficient to activate the full referral protocol. (e.g., *"Dropdown modules relation"* triggers *"Dropdown modules relation tables"*).

### 2. Activation Phase
- **Mode Switching**: Upon detection, Gemini will display the mode in the APEX HUD: `[⚡ MODE: CLAUDE ACTIVATED]`.
- **Intersection Resonance**: If detected keywords overlap across multiple nodes (e.g., `"claude"` exists in both `dna_core` and `claude` node), **ALL** resonant nodes are loaded simultaneously. This ensures foundational DNA always supports the specialized domain.
- **Knowledge Hydration**: Gemini will prioritize reading the directory content of all activated nodes to ensure patterns are strictly followed.

### 3. Deactivation (Sleep) Phase
- **Contextual Decay**: If a mode has not been triggered for **3 consecutive messages**, it enters "Sleepmode" to reduce token noise and optimize execution.
- **Explicit Exit**: If the user says "Switch to normal mode" or similar.

## 🛠️ Triggers Registry (Direct Referral)

| Mode | Primary Triggers | Secondary Triggers |
|---|---|---|
| **CLAUDE** | `claude`, `swf`, `sovereign` | `industrial`, `layericon`, `tray`, `relationship drawer` |
| **FAUCET** | `faucet`, `harvest`, `claimer` | `solana`, `evm`, `automation` |
| **NORMAL** | `normal`, `standard`, `default` | `generic`, `baseline` |


## 🛡️ Rule Persistence (Non-Negotiable)
- No Mode-Switch is permitted to bypass **Rule #1 (Supabase Isolation)** or the **13 APEX Principles**. 
- Modes are **ADDITIVE** to the Tier-0/1 ground truth, never subtractive.

---
**Status**: Authoritative | **Last Update**: 2026-04-21 | **Engine**: Gemini-3 JIT

# === DEEP_DIVE_PROTOCOL.md ===
---
name: deep-dive-protocol
description: "Exhaustive Research & Planning Engine (V1.0)"
triggers: ["dive deeper", "deep dive", "dive deep", "deeper"]
version: 1.0
status: ACTIVE
---

# 🌊 DEEP DIVE PROTOCOL (V1.0)

## 1. MISSION
To bypass standard operational velocity in favor of **Absolute Fidelity** and **Exhaustive Research**. This mode is used for complex project architecture, critical debugging, or system-wide knowledge merges.

## 2. OPERATIONAL MANDATES
- **Line-by-Line Ingestion**: AI MUST read every single line of the target information (code, docs, or transcripts). Summary-based reading is FORBIDDEN.
- **Sequential Flow**: Research MUST proceed "one by one" in a logical line from start to finish. No skipping segments.
- **Token Budget Escalation**: AI is authorized to utilize 5/3 (166%) of standard token density for planning and reasoning.
- **Exhaustive Coverage**: All changes proposed after a Deep Dive MUST be explicitly mapped back to specific research findings.

## 3. MODE ACTIVATION
- Triggered by user keywords: `dive deeper`, `deep dive`, `dive deep`, `deeper`.
- Upon activation, the HUD MUST switch to: `[🌊 MODE: DEEP DIVE] | [⚡ FIDELITY: 100%]`.

## 4. DEEP DIVE SUCCESS CRITERIA
- 100% of target files read.
- Pros/Cons matrix provided for every major architectural decision.
- Zero-drift guarantee: Changes must strictly align with the researched data.
