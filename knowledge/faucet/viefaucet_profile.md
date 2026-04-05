# Viefaucet Profile — V4.0 (Universal Optimizer)

> **PURPOSE**: Provide detailed context and operational strategy for AI Faucet V4.0.
> **SOURCE**: https://viefaucet.com/
> **AUTHORIZED EMAIL**: `nelesp3@gmail.com`

## 1. USER AUTHENTICATION
- **Primary Method**: Login with Google (OAuth).
- **Authorized Email**: `nelesp3@gmail.com`
- **Rule**: AI inserts email and WAITS for User password/MFA entry if required.

## 2. MISSION EXECUTION STRATEGY (V4.0)
- **Turbo Mode**: Enabled (30s Cool Gap between browser calls).
- **Watchdog**: Active (Checks timer every 3-5 seconds).
- **Single Session**: Strictly one persistent browser instance.

## 3. PAGE LOGIC (V4.0)

### Faucet Page (`/app/faucet`)
- **Antibot**: Order-based selection.
- **Verification**: reCAPTCHA checkbox.

### PTC Page (`/app/ptc/iframe`)
- **Strategy**: Precision Antibot + Upside-Down Selection.
- **V4.0 Mandate**: **PULSE-RESCAN** after *each* Anti-Bot interaction.
- **Verification**: DUAL-VERIFY (Gemini 3 + Gemma-4) required.
- **Captcha**: ROTATION_ONLY (Target: 180-degree variance icon).

- **Action**: "View" button -> New tab/viewer opens.
- **Stealth Protocol (v2.2 - VISION PRO)**: 
    1. Close bottom ads/widgets (e.g. Gemshop/Play Now) if possible.
    2. WAIT for timer to reach 0 on the viewer page.
    3. **Singularity Vision Sync (V2.3 - ZERO ERRORS)**:
       a. Capture full-page screenshot of the 5 icons.
       b. **EXCLUSION_FIRST_V2.3**: Scan the `captcha_vault/` for known upright characters.
       c. If match found -> Identify the unique "Upside Down" pattern (April 2026 update).
       d. **Verification**: If certainty < 100% -> Perform "Census Phase" to record image DNA.
       e. Solve with 30s Turbo Gap safety active.
    4. Click 'Verify' within the viewer tab.
    5. **AUDIT**: Verify balance delta increase.
    6. **CLOSE**: Terminate viewer tab immediately on verification.
    7. Return focus to Primary Task List.

### Bonus Page (`/app/bonus`)
- **Action**: "Claim" in the streak table.

---

_V4.0 Universal Optimizer Profile — 2026-04-01_
