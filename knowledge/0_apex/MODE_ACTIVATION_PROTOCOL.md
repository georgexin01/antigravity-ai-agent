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
