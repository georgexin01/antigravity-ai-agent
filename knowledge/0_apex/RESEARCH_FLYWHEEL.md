---
name: research-flywheel
description: "🌀 LIBRARY INTELLIGENCE (V1.0) — KNOWLEDGE EVOLUTION ARCHITECTURE"
version: 1.0
status: authoritative
---

# 🌀 1. THE RESEARCH FLYWHEEL (V1.0)

The system for institutionalizing knowledge from NotebookLM and other high-fidelity sources into the `.gemini` ecosystem.

## 🏗️ THE 3-LAYER ARCHITECTURE

### Layer 1: RAW SOURCES (`implicit/`, `brain/logs/`)
- **Type**: Unstructured.
- **Content**: YouTube transcripts, research papers, conversation logs, raw documentation.
- **Retention**: Transient (Liquidation target after 48h).

### Layer 2: GENERATED WIKI (`knowledge/3_domains/`)
- **Type**: Semi-Structured (Markdown).
- **Process**: AI performs "Deep Synthesis" on Layer 1 to create high-density "Knowledge Items" (KIs).
- **Goal**: 100% accurate extraction of facts, patterns, and lessons learned.

### Layer 3: GOVERNANCE SCHEMA (`knowledge/0_apex/`, `knowledge/1_core/`)
- **Type**: Structured (YAML/Constitutional MD).
- **Process**: Patterns from Layer 2 are distilled into executable Rules (APEX Principles) and Skills.
- **Goal**: Institutionalize intelligence so it becomes "Ground Truth" for future turns.

## 🔄 THE EVOLUTION LOOP
1. **INGEST**: Paste URL/File into NotebookLM.
2. **EXTRACT**: Extract 10/10 fidelity transcript/summary to Layer 1.
3. **SYNTHESIZE**: Run a "Wiki-Sync" mission to promote findings to Layer 2.
4. **ENFORCE**: Update `GROUND_KERNEL.md` or a Skill to encode the new pattern into Layer 3.

## 🛡️ FIDELITY ASSURANCE
- **Closed-World Constraint**: Layer 2 and Layer 3 MUST be derived *exclusively* from Layer 1 sources.
- **Audit Trail**: Every update to Layer 3 MUST include a `source_id` or link to the Layer 2 Wiki entry.
