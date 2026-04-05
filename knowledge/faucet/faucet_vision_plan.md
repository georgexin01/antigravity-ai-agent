# Implementation Plan: AI Faucet Captcha Vault (Vision v1.1)

This plan integrates a visual reference library into the AI Faucet, allowing the engine to recognize and solve "upside-down" captchas with high precision by learning from previous successes.

## User Review Required

> [!IMPORTANT]
> **VISUAL LEARNING**: The AI will now record screenshots of every captcha encounter. 
> **PATTERN MATCHING**: Future missions will perform a visual comparison against the `captcha_vault` before the first click.

## Proposed Components

### 1. The Captcha Vault (Knowledge Layer)
Creating a dedicated directory for visual references.
*   **Target**: `C:/Users/User/.gemini/antigravity/knowledge/faucet/captcha_vault/`
*   **Capacity**: **80 Characters** (Expanded from 20).
*   **Logic**: 
    - **Live Tagging**: Capture and label assets during active missions.
    - **Historical Synthesis**: Sync assets from previous session screenshots (`Wave 4`, `Wave 5`).

### 2. The Verification Protocol (Exclusion-First — V22.2)
Upgrading `viefaucet_profile.md` with visual-first logic.
*   **Step 1 (Scan)**: Capture screenshot of the captcha modal.
*   **Step 2 (Exclude Upright)**: Identify "Known Upright" characters from the `captcha_vault/` and mark them as non-targets.
*   **Step 3 (Target Unchecked)**: Focus on the remaining icons that do NOT match the upright references.
*   **Step 4 (Validation)**: If an icon's orientation deviates from the "Known Upright" reference -> **TARGET IDENTIFIED**.
*   **Step 5 (Correction)**: If a click results in an error/fail -> Relabel the candidate as "NOT_UPSIDE_DOWN" and save as a reference upright image.

### 3. Training Wave 2 Strategy
Once the 18m lockout expires:
1.  Establish the vault skeleton.
2.  Perform 5 "Census Missions" to capture the first batch of character assets.
3.  Label and store assets for Wave 3 (Turbo Mode).

## Open Questions

1. **Automation Depth**: Should I autonomously label the icons (e.g. "Skunk", "Doge") or just use generic IDs (e.g. "Asset_01")?
2. **First-Try Accuracy**: Are you comfortable with a 5s "Vision Delay" while I analyze the images to ensure 100% accuracy?

## Verification Plan

### Accuracy Tracking
*   Logging "Visual Match Success" in the ledger.
*   Comparing the number of "Failed Captchas" before vs. after Vault implementation.
