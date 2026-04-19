---
name: openclaw-integration
description: "openclaw integration"
triggers: ["openclaw integration", "openclaw_integration"]
phase: reference
model_hint: gemini-3-flash
version: 30.0
_ohdy_wrapper: |-
  <dna_node>
  v: 30.0
  id: OPENCLAW_AUTOMATOR
  core:
    - automation: [Claim_Recursive_Protocol, Captcha_Visual_Pulse, SPM_Optimization]
    - logic: [History_Audit_Sync, Phoenix_Post_Mortem, Local_LLM_Consensus]
    - connectivity: [Ollama_Direct_API, Snipaste_Bridge, WebSocket_Telemetry]
  
  safety:
    - id: AUTO.SAFE.01
      v: "Never bypass User Approval for Destructive File Operations."
    - id: AUTO.SAFE.02
      v: "Maintain 100% YAML format integrity during auto-patching."
  l: |-
  </dna_node>
---

# SKILL: OPENCLAW INTEGRATION & AUTOMATION (V30.0)
