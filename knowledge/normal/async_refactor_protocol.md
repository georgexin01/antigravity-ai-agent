---
name: async-refactor-protocol
description: "async refactor protocol"
triggers: ["async refactor protocol", "async_refactor_protocol"]
phase: reference
model_hint: gemini-3-flash
version: 1.0
_ohdy_wrapper: |-
  <dna_node>
  v: 1.0
  n: async_refactor_protocol
  pillars:
    1:
      id: context_ingestion
      goal: "Ingest entire application source tree into Vertex AI's 2M context window."
      action: "Use Sovereign_Archi_Dump.ps1 to generate a unified mission context."
    2:
      id: parallel_refactor
      goal: "Execute multi-file changes (e.g., JS to TS) in a single autonomous pass."
      action: "Tag task in task.md with [V] to trigger Sovereign_Vertex_Thinker.ps1."
    3:
      id: sovereign_verification
      goal: "Automated linting and type-checking after the refactor wave."
      action: "Deploy Sovereign_Neural_Compiler.ps1 to verify build integrity."
  
  execution_logic:
    trigger: "Presence of [V] tag in Sovereign Dispatcher."
    engine: "Vertex AI Gemini 1.5 Pro (Enterprise Tier)."
    benefit: "Bypasses Antigravity consumer quotas and local RAM limits."
  l: |-
  </dna_node>
---

# ASYNC REFACTOR PROTOCOL (V1.0) — ENTERPRISE ACTION MODEL
# Mandate: Wave 04_26 (Massive Context Refactoring)
