# OpenClaw: Data Governance Matrix (P0)

This document defines the strict boundaries between **Shared (Global)** and **Local (Private)** intelligence within the OpenClaw ecosystem.

## 🧭 1. STORAGE DECISION TREE

When the AI discovers a new pattern or rule, it must follow this logic:

### IF Data Is: -> THEN Store In:
| Data Category | Example | Target Folder | Sync Permission |
| :--- | :--- | :--- | :--- |
| **Logic Scaffolding** | New Vite config, Vue layout rules | `Shared (.gemini)` | ✅ ALLOWED |
| **Hardware ID** | GPU VRAM, Motherboard Serial | `Local (.openclaw)` | ❌ BLOCKED |
| **Mission Logs** | Failed captcha images, SPM logs | `Local (.openclaw)` | ❌ BLOCKED |
| **Golden Rules** | General captcha solving heuristic | `Shared (.gemini)` | ✅ ALLOWED |
| **Secrets** | API Keys, local ENV variables | `Local (.openclaw)` | ❌ BLOCKED |

## 🛡️ 2. IDENTITY PRESERVATION
- **Rule**: Never leak the Unique Hardware ID (XIN Serial) into the Shared Brain.
- **Rule**: If a skill is "Project Specific" but "Machine Agnostic", it belongs in the Shared Brain.

## ⚡ 3. PRIORITY LOADING
At the start of an `ai openclaw` session, the AI must:
1. Load `Shared/.gemini/knowledge/openclaw/mode_config.md`.
2. Overlay `Local/.openclaw/local_intelligence.md`.
3. If a conflict exists (e.g., local model override), the **Local Rule ALWAYS wins**.
