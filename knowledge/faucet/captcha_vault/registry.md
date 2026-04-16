---
name: registry
description: "Captcha Vault Registry (V22.2)"
triggers: ["registry", "captcha vault registry"]
phase: reference
model_hint: gemini-3-flash
version: 42.0
_ohdy_wrapper: |-
  # OHDY COMPRESSED NODE (V42.0)
  <dna_node>
  v: 42.0
  n: registry
  graph:
    req: []
    rel: []
  l: |-
  </dna_node>
---

# Captcha Vault Registry (V22.2)

Goal: 80 Unique Character Reference Sets.
Status: CENSUSPHASEACTIVE
Strategy: EXCLUSION_FIRST

## Character Index

| ID | Name | Upright Ref | Misclick Count | Last Encounter |
|---|---|---|---|---|
| C_01 | | `None` | 0 | - |
| C_02 | | `None` | 0 | - |
| C_03 | | `None` | 0 | - |
| ... | ... | ... | ... | ... |

## Instructions for AI
1.  Encounter: If a new character is detected, capture the modal.
2.  Crop: Extract the icon (32x32 or similar).
3.  Orient: Rotate until UPRIGHT.
4.  Saves: Store as `refupright.png` in `/captchavault/C_XX/`.
5.  Exclusion: Next time this character appears UPRIGHT, exclude it from being the target.
