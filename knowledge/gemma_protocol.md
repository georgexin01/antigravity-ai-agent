# 🚀 GEMMA CO-PROCESSOR PROTOCOL (V1.0)

> **IDENTITY: GEMINI_GEMMA_SYNERGY**
> **ORCHESTRATION: GEMINI 3 (Main Brain) ↔ GEMMA-4 (Local Sub-Brain)**

## ⚓ SYSTEM OVERVIEW
This protocol enables Gemini 3 to offload specific, token-heavy sub-tasks to the local `gemma4:e2b` model running on the user's hardware via Ollama. This saves main context tokens and leverages local compute for raw data## 🛡️ SAFETY & LIMITS
- **Availability Gate**: Before every call, Gemini MUST verify "Gemma Readiness." If unreachable, the system reverts to **Native Gemini 3** automatically.
- **Baton Lock Recovery**: If Gemma-4 takes >10 minutes without output, Gemini MUST offer to restart the Ollama service: `stop-process -name "ollama*" -force; ollama list`.
- **Context Limit**: Gemma-4 (e2b) contextual preference: **< 8,000 tokens** per pulse.
- **8k Wall (Atomization)**: If a prompt exceeds the 8k threshold, Gemini 3 **MUST** atomize (separate) it into manageable sub-tasks.
- **Complexity Triage (Bypass)**: If atomization is unviable, Gemini 3 **MUST** skip Gemma and execute via **Cloud (Native Gemini 3)** to prevent "Baton Lock."
- **VRAM Management (Proactive)**: Gemini 3 **MUST** offer to restart Ollama after every 5 dense ( > 4k token) missions to clear VRAM fragmentation.
- **Immediate Cloud Rerun**: If a local pulse fails or stalls, Gemini 3 **MUST** automatically and immediately re-run the mission using Cloud (Gemini 3) models.





---

## 🛠️ ORCHESTRATION LOGIC

### 🧠 TRIGGER: WHEN TO OFFLOAD
The Gemini main brain should offload to Gemma in the following scenarios:
- **Massive File Summarization**: Any file > 1,500 tokens.
- **Boilerplate Generation**: Standard Vue/React components, Pinia/Redux stores, CRUD logic.
- **Log Scouring**: Searching through large terminal outputs or log files for specific errors.
- **Repetitive Formatting**: Transforming large JSON structures or CSV data.

 ### 📥 EXECUTION COMMAND
 Gemini will use the following terminal syntax to invoke the co-processor:
 ```powershell
 # Standard (Boilerplate/Quick)
 ollama run gemma4:e2b "[PROMPT]"

 # Deep Reasoning (Thinking Mode)
 ollama run gemma4:e2b --think high "[PROMPT]"
 ```

### 🖼️ CONTEXT MANDATE
Before every prompt, Gemini MUST prepend the [gemma_context_window.md](file:///C:/Users/User/.gemini/antigravity/knowledge/gemma_context_window.md) to ensure Gemma has the full project DNA.

---### 📊 DASHBOARD TRIGGER
- **Keyword**: `gemma4 token saved`
- **Action**: Gemini reads `gemma_ledger.md` and presents a high-fidelity summary table of all token savings and task outcomes.


---

## 📋 COMMAND TEMPLATES

### 📄 Summarization (TOKEN OPTIMIZER)
"Summarize the core architectural rules and state management patterns in the following file. Focus ONLY on actionable code rules: [FILE_CONTENT]"

### 🏗️ Boilerplate (PRODUCTION ACCELERATOR)
"Generate a standard Vue 3 + Tailwind CSS component for a [UI_ELEMENT] with the following fields: [FIELDS]. Follow S-CORE 95 design DNA (dark gradients, glassmorphism)."

---

- **Context Limit**: Gemma-4 (e2b) has a 131k context window. However, Gemini prefers smaller, optimized chunks ( < 8,000 tokens) for faster local generation.

---

- **Synergy Triage (V3.0)**: Every offload follows the **"Solve or Skip"** mandate. Proactive cloud fallback is triggered if hardware fragmentation is detected.


---

_Antigravity Local AI Synergy Protocol — Quantum Co-Processing Active (2026-04-05)_
