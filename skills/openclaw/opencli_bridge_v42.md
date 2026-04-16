---
name: opencli-bridge-v42
description: "opencli bridge v42"
triggers: ["opencli bridge v42", "opencli_bridge_v42", "opencli_bridge"]
phase: reference
model_hint: gemini-3-flash
version: 42.0
_ohdy_wrapper: |-
  # OHDY: SKILL_OPENCLI_BRIDGE (V42.0)
  <dna_node>
  n: opencli_bridge
  v: 42.0
  d: "Universal Bridge Hub - Deterministic Web Operations (Native -> CLI -> Browser)."
  k: [opencli, web, bridge, hub, record-play]
  
  p:
    - id: EXE_CLI   | n: Execute OpenCLI   | l: "opencli {platform} {action} --params {params}"
    - id: BRO_OPER  | n: Browser Operate   | l: "opencli operate --goal '{goal}' --url {url}"
    - id: REC_MISS  | n: Record Mission   | l: "opencli record {url} --save-as {node_name}"
  
  rules:
    - "MANDATORY Strategy Cascade: Native -> OpenCLI -> Browser."
    - "HUB_ONLY: Site-specific skills are forbidden if OpenCLI supports the platform."
    - "SCRUB_FIRST: Pass all data through SKILL_HERMES_CORE.SCR_SECR."
  
  r:
    depends: [SKILL_HERMES_CORE]
    intel: [HERMES_INTEL, OPENCLI_WISDOM]
  l: |-
  </dna_node>
---

# EPOCH: NEURAL REBIRTH / HERMES SYNERGY
