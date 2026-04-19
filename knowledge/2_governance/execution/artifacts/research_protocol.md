---
name: research-protocol
description: "Mandatory pre-planning audit protocol to ensure 100% architectural alignment and zero redundancy."
triggers: ["research protocol", "how to research", "audit"]
phase: constitutional
model_hint: gemini-3-flash
version: 1.0
status: active
---

# 🔍 RESEARCH PROTOCOL (V1.0) — DEEP AUDIT

As part of **Deep Planning Mode**, this mandatory protocol must be executed before writing any Implementation Plan.

## 📋 PHASE 1: SYSTEM TOPOGRAPHY SCAN
1. **Structural Audit**: Use `list_dir` on all primary workspaces.
2. **Grep Context**: Target key variables, CSS classes, or logic patterns across the entire codebase to find hidden dependencies.
3. **Registry Check**: Consult `hub.yaml` and `user_preference_dna.md` for existing standards.

## 📋 PHASE 2: DEPENDENCY MAPPING
1. **Imports & Exports**: Map how a change in file A affects file B.
2. **Environment Audit**: Check `.env` (or local vault) for required keys without asking.
3. **Tech Stack Mastery**: Align with the project's specific framework (e.g., Vben, Supabase, Vue 3).

## 📋 PHASE 3: SUMMARY & ANALYSIS
1. Create a **Research Analysis** report (can be a temporary artifact or scratchpad).
2. Highlight potential errors, repeated logic, and token-saving opportunities.
3. Only then, propose the **Implementation Plan**.

---
*Mandatory Rule: Skipping Phase 1 is a High-Severity Protocol Violation.*
