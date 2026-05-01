---
name: multi-agent-patterns
description: "🛠️ MULTI-AGENT STACK PATTERNS — ENGINEERING RIGOR & COST ROUTING (V1.0)"
triggers: ["multi-agent", "sub-agent", "agentic", "gv-loop", "cost-routing", "context-hygiene"]
version: 1.0
status: authoritative
---

# 🛠️ MULTI-AGENT STACK PATTERNS (V1.0)

Governed by the **Apex Principle of Engineering Rigor**. Agents are not magical; they are modular components in a high-fidelity pipeline.

## ⚖️ 1. CORE COORDINATION MODES

### 1.1 Generator-Verifier (GV) Loop
- **Definition**: A recursive cycle where one logic block generates a solution and another validates it against project constraints (BLUEPRINT, APEX principles, etc.).
- **Mandate**: Mandatory for all Tier-1 and Tier-0 modifications.
- **Workflow**: `GENERATE` -> `INTERNAL_AUDIT` -> `SHADOW_DRAFT` -> `APPLY`.

### 1.2 Context Hygiene (Context Engineering)
- **Definition**: The aggressive reduction of noise in the context window to maximize reasoning fidelity.
- **Mandate**: AI MUST use `.geminiignore` and surgical `grep` extraction instead of bulk file reads.
- **Metric**: Targeted context results in a 58% reduction in "Hallucination Drift."

### 1.3 Cost Routing Architecture
- **Definition**: The autonomous selection of models based on task complexity.
- **Rules**:
    - **Flash-Tier (Gemini 3 Flash)**: Directory listing, file reading, formatting, simple code edits, research summaries.
    - **Pro/Ultra-Tier**: Structural refactoring, multi-file architectural planning, security auditing.

## 🧬 2. RESEARCH & STATE HYDRATION

### 2.1 NotebookLM Bridge (APEX 17 - MANDATORY)
- **RESEARCH MANDATE**: In accordance with APEX 17, NotebookLM is the AUTHORITATIVE tool for all data retrieval and high-fidelity research (Small/Medium/Large).
- **Authoritative Hub**: [Antigravity Master Notebook](https://notebooklm.google.com/notebook/a2ba712a-1285-4f23-bedf-a6b866f32fc3)
- **Cooperation Logic (LI Layering)**:
    - **Flash-Tier (The Hand)**: Performs surgical ingestion of code, executes logic blocks, and synthesizes "Wiki Patches" for the library.
    - **Notebook-Tier (The Mind)**: Manages "Library Intelligence" (Layer 2). Provides pattern recognition, concept mapping, and cross-project context.
- **Zero-Live-View Protocol**:
    - **Silent Harvesting**: AI performs research via browser subagent without requiring human live-monitoring.
    - **Knowledge Liquidation**: Findings MUST be persisted to local `knowledge/` files to eliminate redundant browser sessions.

### 2.2 Deep-Surgical Orchestration (V1.2 - FIDELITY FIRST)
- **Fidelity Mandate**: Surgical reading MUST achieve 99%+ accuracy compared to dense reading. Efficiency never sacrifices completeness.
- **Sliding Window Protocol**: Mandatory for all file-tree operations > 50 files to maintain "Big Picture" awareness.
- **Sparse CSA Selection**: High-fidelity retrieval of sub-task DNA only, anchored by a **Global Intent Check**.
- **Residual State Links**: Hard-locking **Root Intent** across all Agentic Relays to prevent "Task Drift" or missing requirements.
- **Verification Mandate**: Every surgical action block MUST conclude with an internal "Audit Turn" to verify all user requirements have been met.
- **Design-Verifier Loop**: For all UI/Frontend tasks, the Verifier MUST audit generated code against the `DESIGN.md` tokens and "Anti-Slop" standards.
- **Token-First Engineering**: AI is prohibited from hard-coding visual values; MUST retrieve tokens from `DESIGN.md` before style generation.
- **Taste Learning Loop**: If a user approves a specific visual variation, the AI MUST analyze the specific HSL/CSS patterns and update the project's `DESIGN.md` to institutionalize the "approved taste."

### 2.2 Neural State Maintenance
- Use `memory/PULSE.json` to store the *pointers* to active research notebooks.
- State hydration occurs on Turn 1 of every session by reading the current pulse and active notebook references.

---
*Multi-Agent Patterns V1.0 — Antigravity Tier-1 Core // 2026-05-01*
