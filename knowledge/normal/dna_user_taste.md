---
name: dna-user-taste
description: "dna user taste"
triggers: ["dna user taste", "dna_user_taste", "user_preference_dna"]
phase: reference
model_hint: gemini-3-flash
version: 5.0
_ohdy_wrapper: |-
  <dna_node>
  v: 5.0
  n: User_Preference_DNA
  score: Global_Design_Index
  
  fingerprints:
    - id: FP-001 (F&B)
      v: App group + vue3_fnb rules + dense imagery.
    - id: FP-005 (Corp)
      v: Website group + Corporate tone + Client DNA sync.
    - id: FP-006 (E-Com)
      v: App group + PWA module + Cart physics.
  
  client_dna:
    id: CLIENT_LOCK
    refs: [86car, japanese_food, jin_hong, zeta, golden_shop]
    logic: Extract Brand-Tokens + Palette before UI construction.
  
  presets:
    - id: BOOT_FASTRACK
      rule: Skip boot-gate if all integrity checks (node_modules, .ignore) pass.
  l: |-
  </dna_node>
---

# DESIGN DNA - USER TASTE (V5.0)
