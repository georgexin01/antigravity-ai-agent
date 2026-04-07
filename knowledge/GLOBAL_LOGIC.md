# ⚖️ GLOBAL LOGIC & EXECUTION FRAMEWORK (V28.0)

> **WARNING**: MUST BE READ IMMEDIATELY AFTER `ALPHA_DIRECTIVE.md`.
> **CONTEXT**: 100% Core System Logic. 0% Frontend Boilerplate. 

---

## 🛑 1. P0 CRITICAL RULES (NEVER BYPASS)

### The Verification Mandate:
- **Build Before Deploy**: `npm run build` MUST yield 0 errors before a deployment request.
- **Data Persistence**: `localStorage` (offline) or Database (cloud). Data must survive page refreshes.
- **Bugfix Triage**: Read Error → Classify → Fix → Rebuild. **DO NOT** read design architecture files for simple bug fixes.

### The "Sovereign Learning" Mandate:
- **Rule**: On ANY error, check `_shared/error_learning_vault.md` FIRST.
- **Escalation**: Max 3 attempts per bug. (1: Direct Fix → 2: Alt Approach → 3: Nuke/Swap Component).
- **Auto-Record**: If an error is seen 2+ times, the fix MUST be logged in the Vault.

### Token Conservation & Speed (The Hydra Ascent):
- **Wave Execution**: Plan first, execute all parallel files simultaneously, check once.
- **Atomic Reading**: Use `grep` instead of full file reads for deep system dives.
- **Ghost Context**: Switch to <2k Token "Mission DNA" fragments instead of bulky 11k rule files when actively coding.

---

## 🧹 2. AUTO-CLEANUP & RETENTION FRAMEWORK

The AI must act as an active janitor for its own workspace.

### Active Retention Limits:
| Target Path | Lifecycle | AI Action Required |
| :--- | :--- | :--- |
| `browser_recordings/` | 1 Session | Purge immediately. Costly `.webp` files. |
| `/tmp/` | 1 Session | Delete scratch scripts after execution. |
| `.gemini/brain/logs` | **7 Days** | Delete older folders to reduce RAG hallucination. |
| `faucet_mission/` | Session End | Summarize to logic ledger, then purge logs. |

### The Archival Protocol (30-90 Days):
1. **Assessment**: If a generated file (like `implementation_plan.md` or `walkthrough.md`) has not been heavily referenced in 30 days, categorize it.
2. **Action**: Move "Important" architecture history to `c:\Users\User\OneDrive\Desktop\workspace\archive\`.
3. **Hard Limit**: Files older than 90 days must be compressed or deleted.

---

## 🧩 3. AI AGENCY & GUI COMMUNICATION

### The "GUI Fidelity Shield" (Absolute Law):
The AI must strictly adhere to the `shared/universal_design_protocols.md` atomic markdown templates.
- **Questioning**: If blocked, Stop execution and render a `🛑 INPUT REQUIRED` Warning Card with exact A/B/C choices.
- **Readiness**: If about to overwrite multiple system files, render a `⚡ EXECUTION READINESS` Action Card and wait for "APPROVE".

### The "Pre-Data" Extrapolation Engine:
As a Gemini Cloud intelligence, you are not bound strictly to literal historical data.
- **Rule**: Look for sequence gaps. If User defines [A, B], AI must actively generate [C, D].
- **Application**: Useful in UX flows (User says "Login", AI builds "Forgot Password", "OTP", "Lockout"). Useful in Faucet logic (User says "Rotate left", AI calculates "Invert colors").

---
_Global Logic Framework V28.0 — Extrapolative Intelligence Active (2026-04-07)_
