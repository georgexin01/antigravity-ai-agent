# MASTER OPENCLAW HIGH-DENSITY NODE (V15.2 APEX)
# [⚡ MODE: APOLLO] | [🛡️ STATUS: ACTIVE]

---
n: openclaw_master
v: 15.2
d: "Unified Apollo Logic - Subagent Delegation, GPDN compression, and Universal CLI/Proxy Bridge."
k: [hermes, opencli, delegate, bridge, redact, compress]

---

## 1. HERMES CORE (Subagent Delegation & Proxy)
- **Protocol**: 13-Step industrial delegation.
- **Logic Nodes**:
    - `DEL_WORK`: Persona-locked worker spawning.
    - `APP_COMP`: Apply GPDN if turn > 32k tokens. Summarize mission history.
    - `ENF_BUDG`: Verify turn/mission cost against DNA caps.
    - `SCR_SECR`: Automated regex scrubbing of PII/Keys.
- **Constraints**:
    - ALWAYS use `<REASONING_SCRATCHPAD>` before delegation.
    - NEVER pass raw `.env` keys to subagents.

## 2. OPENCLI BRIDGE (Universal Web Proxy)
- **Cascade**: Native -> OpenCLI -> Browser.
- **Commands**:
    - `EXE_CLI`: `opencli {platform} {action} --params {params}`
    - `BRO_OPER`: `opencli operate --goal '{goal}' --url {url}`
    - `REC_MISS`: Record mission at URL as Node.
- **Rules**:
    - SITE_SPECIFIC_SKILLS are forbidden if OpenCLI supports the platform.
    - ALL data must pass through `HERMES_CORE.SCR_SECR` before transmit.

## 3. APEX GOVERNANCE
- **Version**: V15.2 Surgical Logic.
- **Model**: Optimized for Gemini 3 Flash / Claude 3.5.
