# AI Faucet Skill — V5.5 (Precision Audit Protocol)

> **PURPOSE**: Master multi-platform faucet earning with exact token verification.
> **V5.5**: Integrated "Value Match" (Expected vs. Actual) for all missions.

---

## 0. BOOT PROTOCOL

**Trigger**: "ai faucet" → Load all platforms.
**Assets**: `viefaucet_profile.md` | `99faucet_profile.md` | `faucet_pattern_vault.md`.

---

## 1. VIEFAUCET.COM (PRECISION MISSIONS)

### `CLAIM_VIEFAUCET_PRECISION`
1. **Faucet-First (P0)**: Complete `/app/faucet` first. Solve Antibot + Captcha.
2. **Pre-Mission Sync**:
   - Record `Initial_Balance`.
   - Record `Target_Ad` (Name, Expected_Reward, Duration).
3. **Ghost Execution**:
   - Inject **Stealth V4.4**.
   - Click 'View'.
   - Stay on the VieFaucet tab for `Duration + 10s`.
4. **TRIPLE-LAYER AUDIT (V5.5)**:
   - **Audit A (Delta Check)**: `(Final_Balance - Initial_Balance) == Expected_Reward`.
   - **Audit B (Removal Check)**: Refresh page. Verify ad slot is GONE.
   - **Audit C (Success Label)**: Only label as **"VERIFIED SUCCESS"** if both audits match 100%.
   - **Label Failure**: If `Delta < Expected`, mark as **"PARTIAL CREDIT / FAILED"**.

---

## 2. 99FAUCET.COM (SOLANA FREQUENCY)

### `CLAIM_99FAUCET_SOL`
- Focus: 1-minute Solana frequency.
- Rule: Shift 100% to 99Faucet Solana if VieFaucet is on 429 or empty.

---

## 3. MASTER RULES

1. **PRECISION RECORDING**: All reward deltas MUST be logged in `faucet_value_ledger.md`.
2. **ZERO TOLERANCE**: If the reward is even 0.01 tokens off, the mission is flagged for review.
3. **EMAIL MASTER**: Authorized email is `nelesp3@gmail.com`.

---

_V5.5 Precision Multi-Mode Faucet Brain — 2026-04-01_
