# Vision Sync Protocol — V1.0 (Advanced Exclusion)

> **Identity**: VISION_ENGINE_V22.2
> **Strategy**: EXCLUDE_UPRIGHT -> TARGET_UNCHECKED -> LEARN_MISMATCH

## 1. VISION REASONING LOOP (Exclusion-First)

The AI must follow this specific sequence for every icon-based captcha:

1.  **CAPTURE (Modal Scan)**: Take a high-resolution screenshot of the 5-6 icons in the grid.
2.  **AUDIT (Upright Identification)**:
    - Compare each icon against the `captcha_vault/` reference (Known Upright).
    - **Mark** all matching icons as `EXCLUDED_CANDIDATE`.
3.  **TRIAGE (Unchecked Icons)**:
    - Identify icons that do NOT match any "Known Upright" references.
    - If **ONLY ONE** un-checked icon remains -> **TARGET LIKELY FOUND**.
    - If multiple remain -> Perform a rotation/symmetry check to find the upside-down character.
4.  **CLICK (Verification)**: Execute the click on the identified target.

---

## 2. LEARNING & CORRECTION (PDL Sync)

### If CLICK = SUCCESS (Delta > 0)
- **SAVE**: If the candidate was previously un-labeled, crop and save the **UPRIGHT** version of that character to the vault.
- **LABEL**: `VALID_UPRIGHT_{ASSET_ID}`.

### If CLICK = FAIL (Lockout/Error)
- **CORRECT**: If the candidate was clicked and failed, it means the icon was likely NOT upside-down (or the orientation was misunderstood).
- **RELABEL**: Mark that specific character/rotation as `KNOWN_NOT_UPSIDE_DOWN`.
- **UPDATE**: Ensure the vault image for this character is oriented in the **UPRIGHT** position for future reference.

---

## 3. VAULT MANAGEMENT (80+ Characters)

- **Storage**: `C:/Users/User/.gemini/antigravity/knowledge/faucet/captcha_vault/{char_id}/`
- **Asset Standard**:
    - `ref_upright.png`: The correctly oriented character.
    - `metadata.json`: Stores `times_encountered`, `misclick_history`, and `associated_missions`.
- **Orientation Control**: If a saved image is found to be upside-down during a manual check or automated audit, the AI MUST rotate it 180° and resave as `ref_upright.png`.

---

_Vision Sync Protocol V1.0 — Future-Ready Mastery (2026-04-05)_
