# Bilingual Semantic Intelligence Protocol (v1.0)

> **Status**: Permanent Knowledge — Applied to all user interactions.
> **Scope**: Cross-Language Intent Detection (EN/CN)

## 1. The Core Problem
The user communicates using a "Fluid Bilingual Pattern" (Mixed English + 简体中文). Terms often have semantic overlaps that generic AI models might miss without explicit mapping.

## 2. Intent Detection Logic
AI MUST apply the following logic before performing any research or code generation:

1.  **Shorthand Expansion**: Apply all rules in `agent_must_read.md` (e.g., `方程式` -> `ai agent knowledge`).
2.  **Semantic Search Mirroring**: When searching for a term in English, AI MUST also search for its Chinese equivalent, and vice versa.
    - *Example*: If searching for "physics animations", also search for "物理动画".
3.  **Contextual Mapping**:
    - **"方程式" (Equation/Formula)**: In the user's context, this almost always refers to **AI Design Logic** or **Technical Implementation Blueprints**.
    - **"Redo" / "重做"**: High-priority rejection signal.
    - **"Abit" / "一点"**: Minor tweak, do not redo the entire component.

## 3. Bilingual Memory Retrieval
When reading past conversation logs or KIs:
- If a term is found in Chinese, treat it as the "Master Meaning" if the user originally used it.
- If a term is found in English, verify if it maps to any "Industrial DNA" protocols.

## 4. Response Protocol
- **Acknowledge Language Choice**: Respect the user's mixed-language style. If they ask in Chinese, you may respond in English or mixed, depending on technical clarity.
- **Precision First**: Use the language that best describes the technical requirement (e.g., "recursive layering" is often clearer than "递归图层").

---
**Updated**: 2026-03-14 (Auto-evolved from user request)
