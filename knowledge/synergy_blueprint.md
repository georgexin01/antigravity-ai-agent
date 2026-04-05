# 🧩 ANTIGRAVITY SYNERGY BLUEPRINT (V1.0)

> **Identity**: SYNERGY_ORCHESTRATOR
> **Scope**: Gemini ↔ Gemma-4 Automated Cooperation

## ⚓ 1. THE AUTOMATED DISCOVERY & FALLBACK (BOOT)
At each session start, Gemini must execute `ollama show gemma4:e2b` to:
- **Phase A**: Verify `ollama` is installed and running.
- **Phase B**: Check if `gemma4:e2b` is present in the model list.
- **Phase C (The Fallback)**: If Phase A or B fails, Gemini MUST automatically transition to **"Cloud-Only Mode"** (Native Gemini 3). The user must be notified only once per session.
- **Phase D (Baton Lock Recovery)**: If a command hangs (>10 minutes), Gemini MUST ask for an Ollama restart.
- **Phase E (Baton Lock Mitigation)**: To prevent hangs, Gemini MUST implement the **"8k Wall"** (Task Atomization) and **Complexity Triage**.
- **Phase F (Cloud Rerun Mandate)**: ANY failed or hung local task **MUST** be re-executed in the Cloud.
- **Phase G (Dynamic Precision)**: Gemini MUST implement the **"Pulse-Rescan"** (Layout Sync after every click) and **"Dual-Verify"** for all mission-critical interactions.




---

## 🏛️ 2. HYBRID DECISION TREE (TRIAGE)

| Task Category | Recommendation | Logic |
| :--- | :--- | :--- |
| **Online Research** | Gemini 3 (Cloud) | Needs Browser / Search API. |
| **Deep Thinking** | Gemma-4 (Local) | Local hardware + "--think high" mode. |
| **HTML/Vue Build** | Gemma-4 (Local) | High token density, local compute. |
| **Complex Orchestration** | Gemini 3 (Cloud) | Managing multiple files, planning logic. |
| **Environment Action** | Gemini 3 (Cloud) | Writing files, running build commands. |
| **Security Review** | Gemini 3 (Cloud) | High-fidelity cross-check with vault. |

---

## 🧠 3. THE DECISION ENGINE (ORCHESTRATION)

### Thresholds (Auto-Switch)
- **Token Arbitrage**: Tasks involving file read/summaries > 1,500 tokens should be automatically offloaded to Gemma unless speed is the primary constraint.
- **Complexity Handover**: Gemma-4 handles "Raw Data Scouring," "Summarization," and "Initial Boilerplate Generation." Gemini handles "Refining," "Architecture Planning," and "S-CORE 95 Verification."

### The "Baton Pass" Logic (V3.0 Precision)
1. **Analyze (8k Wall)**: If the prompt payload exceeds 8,000 tokens, Gemini MUST atomize the task into discrete, smaller sub-tasks for Gemma.
4. **Wait (Baton Monitor)**: Gemini acknowledges the handoff and monitors the 10-minute lock threshold.
5. **Pulse-Rescan (Dynamic)**: After *every* successful sub-task click, Gemini **MUST** perform a fresh layout capture (Screenshot + DOM) to solve the next step using updated coordinates.
6. **Dual-Verify (Confidence)**: Captcha challenges require a 2-pass agreement between Gemini 3 and Gemma-4. If answers diverge -> Trigger 3rd pass or Refresh.
7. **Recovery**: If any local error occurs, Gemini is mandated to **"Solve or Skip."** Gemini MUST immediately re-run the failed logic using Cloud compute to finalize the task.
8. **Finalize**: Gemini summarizes and continues.




## 📈 4. THE SELF-EVOLVING LEARNING LOOP (AUTO-IMPROVE)

### Proactive Evolution
- **Gemini's Role**: If Gemini 3 discovers a new trend (e.g., Liquid Glass 2.0), it MUST proactively update the `gemma_context_window.md` or `absolute_global_rules.md` without waiting for a user request.
- **Gemma's Role**: If Gemma generates a high-performance code pattern, Gemini acts as the "Gatekeeper," verifying it and promoting it to the `modular_component_registry.md`.
- **Knowledge Sync**: Every session conclusion triggers a "Knowledge Hardening" review, where the AI assesses if any local insights should be codified into the root rules.

## 🛠️ 5. COORDINATION SCRIPTS
- **Gemma Sync**: `Get-ModelMetadata.ps1`.
- **Gemma Execution**: [antigravity.ps1](file:///C:/Users/User/.gemini/antigravity/scripts/antigravity.ps1) (Official CLI Bridge).
- **Usage**: `.\antigravity.ps1 -Prompt "[TASK]" -ThinkHigh $true`

---

_Antigravity Synergy Engine — Self-Evolving & Professional Orchestration active (2026-04-05)_
