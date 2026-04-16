---
name: hermes-core-v42
description: "hermes core v42"
triggers: ["hermes core v42", "hermes_core_v42", "hermes_core"]
phase: reference
model_hint: gemini-3-flash
version: 42.0
_ohdy_wrapper: |-
  # OHDY: SKILL_HERMES_CORE (V42.0)
  <dna_node>
  n: hermes_core
  v: 42.0
  d: "Subagent delegation, context compression (GPDN), and PII scrubbing."
  k: [hermes, subagent, delegate, budget, redact]
  
  p:
    - id: DEL_WORK  | n: Delegate Worker  | l: "Persona-locked worker spawning."
    - id: APP_COMP  | n: Apply GPDN       | l: "Trigger at >32k tokens. Summarize history."
    - id: ENF_BUDG  | n: Budget Watchdog  | l: "Verify turn/mission cost against DNA."
    - id: SCR_SECR  | n: PII Redaction    | l: "Automated regex scrubbing of keys."
  
  rules:
    - "ALWAYS use <REASONING_SCRATCHPAD> before delegation."
    - "NEVER pass raw .env keys to subagents."
  l: |-
  </dna_node>
---

# EPOCH: NEURAL REBIRTH / HERMES SYNERGY
