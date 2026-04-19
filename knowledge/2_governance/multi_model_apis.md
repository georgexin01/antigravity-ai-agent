---
name: multi-model-apis
description: "Sovereign Multi-Model Constraints & Protocol (V15.1 Apex)"
triggers: ["claude api", "openai api", "multi model", "offloading"]
phase: reference
model_hint: gemini-3-flash
version: 15.1
status: authoritative
---

# 🛡️ MULTI-MODEL API CONSTRAINTS (V15.1 APEX)

The governance protocol for external API utilization. Guided by **Principle 12 (Data Sovereignty)**.

## ⚖️ AGENTIC CONSTRAINTS
- **Singleton Brain**: The Sovereign Apex Intelligence is powered exclusively by the primary model (Gemini 3 Flash). It cannot autonomously delegate core thinking to other models.
- **Security**: API Keys (Claude, OpenAI) MUST be stored in `.env.local` and never committed or displayed in logs.

## ⚡ OFFLOADING PROTOCOLS
1. **Script Offloading**: Use `run_command` to execute Node.js/Python scripts using `@anthropic-ai/sdk` or `openai` libraries for heavy data transformations.
2. **MCP Isolation**: External APIs can be accessed via specific MCP servers to bypass context window limitations.

## 🧪 APEX VERIFICATION
AI MUST execute a **Sovereign Comparison Table (SCP)** before offloading logic to verify:
- [ ] Token ROI of script vs Main Brain (1/10).
- [ ] Data Purity Rating (Principle 12) (10/10).
