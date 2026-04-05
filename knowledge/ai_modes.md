# AI Interaction Modes

This file defines the primary operational modes for the AI assistant and the local AI co-processor synergy. These modes dictate which knowledge subdirectories and rules should be prioritized.

## 🚀 UNIVERSAL BOOT RULES (MANDATORY)
Before any mode is activated (Normal, Faucet, or Claude), the AI MUST synchronize with the `_shared/` directory:
1. [GLOBAL_READ_ME_FIRST.md](file:///C:/Users/User/.gemini/antigravity/knowledge/GLOBAL_READ_ME_FIRST.md) (Entry point)
2. All contents of `C:\Users\User\.gemini\antigravity\knowledge\_shared\`
3. [absolute_global_rules.md](file:///C:/Users/User/.gemini/antigravity/knowledge/absolute_global_rules.md)
4. [master_rules_v15.md](file:///C:/Users/User/.gemini/antigravity/knowledge/master_rules_v15.md)
5. [gemma_protocol.md](file:///C:/Users/User/.gemini/antigravity/knowledge/gemma_protocol.md) (Local AI Co-Processor)

---

## 🛠️ MODE DEFINITIONS

### 💧 `ai faucet`
**Trigger**: User input starts with `ai faucet` or mentions "faucet mode."
- **Action**: Open AI Faucet Mode.
- **Knowledge Depth**: Read [master_rules_faucet_v22.md](file:///C:/Users/User/.gemini/antigravity/knowledge/master_rules_faucet_v22.md) and all files in the `faucet/` knowledge directory.
- **Focus**: Sub-Second Triage (SST), ROI Telemetry, and Stealth protocols.

### 🤖 `ai claude`
**Trigger**: User input starts with `ai claude` or mentions "claude mode."
- **Action**: Open AI Claude Mode.
- **Knowledge Depth**: Read all files in the `claude/` knowledge directory and the `claude-code` skill.
- **Focus**: Advanced coding, system-level optimization, and model-specific protocols.

### 🧠 `ai`
**Trigger**: User input starts with `ai` (general) or "agent knowledge."
- **Action**: Open AI Agent Knowledge.
- **Knowledge Depth**: Read all files in the `normal/` knowledge directory and `normal/` skills.
- **Focus**: Global synthesis, cross-domain problem solving, and total system awareness.

---

## ⚡ GEMMA SYNERGY (CORE)
Across all modes, Gemini 3 is authorized to use the local **Gemma-4** co-processor for:
- Summarizing massive files (>1,500 tokens).
- Generating repetitive boilerplate code.
- Offloading data scouring and analysis.
- Saving main context tokens for high-level reasoning.

---

## 📜 KNOWLEDGE MAP (DIRECT READ)
The following files are now located in the root of the `knowledge/` directory for immediate access:
- `absolute_global_rules.md` (Formerly `hot_rules_cache.md`)
- `master_rules_v15.md` (Formerly `_shared/master_rules.md`)
- `master_rules_faucet_v22.md` (Formerly `faucet_mission/MASTER_RULES_V22.md`)

_Version 1.2 — Gemma Synergy & Mode Configuration (2026-04-05)_
