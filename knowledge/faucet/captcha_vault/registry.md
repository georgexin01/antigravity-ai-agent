# Captcha Vault Registry (V22.2)

> **Goal**: 80 Unique Character Reference Sets.
> **Status**: CENSUS_PHASE_ACTIVE
> **Strategy**: EXCLUSION_FIRST

## Character Index

| ID | Name | Upright Ref | Misclick Count | Last Encounter |
|---|---|---|---|---|
| C_01 | | `None` | 0 | - |
| C_02 | | `None` | 0 | - |
| C_03 | | `None` | 0 | - |
| ... | ... | ... | ... | ... |

## Instructions for AI
1.  **Encounter**: If a new character is detected, capture the modal.
2.  **Crop**: Extract the icon (32x32 or similar).
3.  **Orient**: Rotate until UPRIGHT.
4.  **Saves**: Store as `ref_upright.png` in `/captcha_vault/C_XX/`.
5.  **Exclusion**: Next time this character appears UPRIGHT, exclude it from being the target.
