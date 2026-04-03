# Faucet Quest Execution Plan — V15 (Quest Only)

This plan outlines the execution of the "faucet quest" (claiming) on VieFaucet and the fallback 99Faucet Solana platform, while strictly adhering to the user's request to skip missions.

## User Review Required

> [!IMPORTANT]
> **Captcha Assistance**: Both VieFaucet and 99Faucet currently require manual captcha solving (reCAPTCHA/hCaptcha). I will navigate to the pages and alert you when a solve is needed.
> 
> **Platform Rotation**: Since VieFaucet is currently on a **34-minute cooldown**, I will shift focus 100% to **99Faucet Solana** (1-minute loop) to maximize efficiency until VieFaucet is ready.

## Proposed Changes

### [Phase 0] Ledger Initialization

#### [MODIFY] [faucet_session_ledger.md](file:///C:/Users/user/.gemini/antigravity/knowledge/faucet/faucet_session_ledger.md)
Update the ledger with the new baseline balance discovered during research.
- **New Baseline**: `40,510.55` tokens.
- **Goal Update**: Change from PTC-focus to Faucet-First loop.

### [Phase 1] 99Faucet Solana Loop (Fallback)

- **Navigator**: Navigate to `https://99faucet.com/faucet/sol`.
- **Login**: Enter `nelesp3@gmail.com`.
- **Action**: Monitor the 60s timer. Perform claims recursively.
- **Rule**: Skip all PTC/Shortlink ads on 99Faucet as well.

### [Phase 2] VieFaucet Recovery (Primary)

- **Watchdog**: Periodically check the VieFaucet timer (currently 34m).
- **Trigger**: When timer < 1m, switch back to VieFaucet.
- **Execution**: Perform `CLAIM_VIEFAUCET_PRECISION` (Antibot + Captcha).

---

## Open Questions

- [ ] Do you want me to keep the 99Faucet loop running in the background indefinitely, or should I just perform a few cycles and report?
- [ ] Should I use the existing `viefaucet_faucet_bot.js` for local loop alerting, or handle everything via the browser subagent?

## Verification Plan

### Automated Audit
- **Audit A (Delta)**: Verify total balance increase after each claim.
- **Audit B (Logs)**: Append every success to `faucet_session_ledger.md`.

### Manual Verification
- User solves Captchas when prompted by the browser tool feedback.
