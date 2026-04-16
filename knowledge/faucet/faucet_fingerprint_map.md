---
name: faucet-fingerprint-map
description: "faucet fingerprint map"
triggers: ["faucet fingerprint map", "faucet_fingerprint_map", "fingerprint_map"]
phase: reference
model_hint: gemini-3-flash
version: 1.0
_ohdy_wrapper: |-
  <dna_node>
  v: 1.0
  n: fingerprint_map
  summary: "Metadata map for faucet platform signatures. Sensitive coordinates are stored in faucet_secrets.bin."
  
  platforms:
    - id: FBK_V1
      name: "Free-Bonk Standard"
      anchor: "button: Collect your reward"
      vault_status: "ENCRYPTED"
    - id: FBK_V2_ANIMALS
      name: "Free-Bonk Alpha-Numeric"
      anchor: "anti_bot: animals (cow/cat/ant)"
      vault_status: "ENCRYPTED"
    - id: OFT_V1
      name: "OnlyFaucet V1"
      anchor: "span: faucet"
      vault_status: "ENCRYPTED"
  
  usage_protocol:
    1: "AI must read this map for mission intent."
    2: "AI must call Sovereign_Faucet_Vault_Push -Read to extract real-time coordinates."
  l: |-
  </dna_node>
---

# FAUCET FINGERPRINT MAP (V1.0) — HUMAN REFERENCE
# Mandate: Wave 04_26 (Vault Partitioning V46.3)
