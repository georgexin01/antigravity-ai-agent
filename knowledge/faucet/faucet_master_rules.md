# Faucet Master Rules — Sovereign Elite V30.0

These are the global directives governing all AI Faucet operations. They override any local script settings and prioritize system efficiency, token minimization, and autonomous evolution.

## 🛠️ CORE LAWS (SM-Protocol)

### SM-01: ZeroCloud Vision (Local-First)
- **Constraint**: Never send raw browser screenshots to cloud models (Gemini/Claude).
- **Execution**: Trigger `Snipaste` (F1) to `workspace/snipaste/active_mission.png` via `auto_pulse.ps1`.
- **Solving**: Use local **Gemma-4** for coordinate mapping and captcha decryption.
- **Bridge**: Only metadata (JSON coordinates) may be sent to the Cloud Bridge for final click execution.

### SM-02: RAM-Aware Intelligence
- **Constraint**: The AI must sense available system memory before engaging local LLMs.
- **Tiers**:
  - **Level A (>10GB free)**: Engage `gemma4:e4b` (High Precision).
  - **Level B (4GB - 10GB free)**: Engage `gemma4:e2b` (Standard Precision).
  - **Level C (<4GB free)**: Enter **Safe Buffer Mode** (15s wait delay) or Cloud Fallback.

### SM-03: Token Conservation Protocol
- **Limit**: Max 500 tokens total per claim cycle for the Cloud Bridge.
- **Optimization**: Use concise, system-level prompts. Avoid conversational filler in background missions.

### SM-04: Autonomous Learning Loop
- **Action**: After every 10 successful missions, the AI must research the `faucet_session_ledger.md` and propose a **Speed Band Upgrade** (-2s buffer).
- **Update**: Auto-update the `faucet/platform_vault.md` with new anti-bot patterns discovered.

---

## 🛡️ MISSION CONDUCT
- **Stealth**: Always use human-like randomized click offsets (±3px).
- **Stability**: If any mission fails 3 times, enter a **600s lockout** to prevent account flagging.
- **Reporting**: All deltas MUST be logged in the session ledger immediately upon claim.

---
_Sovereign Elite V30.0 — Established 2026-04-09_
