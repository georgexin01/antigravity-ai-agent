# AI Faucet: Performance Velocity Wave (V24.1)

This plan outlines the execution of a 5-mission wave to fulfill the **Phase 8: Performance Velocity** requirements, prioritizing high-ROI targets and maintaining the Sovereign Stealth protocol.

## User Review Required

> [!IMPORTANT]
> The automation will interact with `free-bonk.com` and `onlyfaucet.com`. Ensure you are logged in with the authorized identity (`nelesp3@gmail.com`) if prompted.
> The `auto_pulse.ps1` script will be used to capture the screen for visual analysis.

## Proposed Changes

### 1. 🚀 Sovereign Boot Sequence
- **Step 1**: Navigate to `https://free-bonk.com/` (Priority 1).
- **Step 2**: Check for 'Ready' status on the Faucet page.
- **Step 3**: If unavailable, fallback to `https://onlyfaucet.com/`.

### 2. 🎯 Mission Execution (The Pulse)
- **Step 4**: Trigger `auto_pulse.ps1` to capture the current captcha/layout.
- **Step 5**: Analyze the screenshot in `workspace/snipaste/active_mission.png`.
- **Step 6**: Identify the 180° rotated icon (OnlyFaucet) or the unique once-appearing icon (Free-Bonk).
- **Step 7**: Execute click on coordinates or use DOM selectors if feasible.
- **Step 8**: Click 'Verify/Claim'.

### 3. 📊 Audit & Evolution
- **Step 9**: Record session delta in `faucet_session_ledger.md`.
- **Step 10**: Repeat for a total of 5 successful missions.
- **Step 11**: Trigger **Phase 8 Velocity Audit** (Rotate Speed Bands).

## Open Questions

- Should I pause for manual verification before the final 'Claim' click during the first mission of the wave?
- Are there any specific coins on OnlyFaucet you want to prioritize (BTC/LTC/SOL)?

## Verification Plan

### Automated Tests
- Verification of "Success" toast messages in the browser.
- Matching balance increase in `faucet_session_ledger.md` with the dashboard display.

### Manual Verification
- User can observe the browser automation in real-time.
- Check `workspace/snipaste/` for visual audit logs.
