---
name: faucet
description: "AI Faucet Skill — V5.5 (Precision Audit Protocol)"
triggers: ["faucet", "skill", "faucet precision audit"]
phase: reference
model_hint: gemini-3-flash
version: 42.0
_ohdy_wrapper: |-
  # OHDY COMPRESSED NODE (V42.0)
  <dna_node>
  v: 42.0
  n: SKILL
  graph:
    req: []
    rel: []
  l: |-
  </dna_node>
---

# AI Faucet Skill — V5.5 (Precision Audit Protocol)

PURPOSE: Master multi-platform faucet earning with exact token verification.
V5.5: Integrated "Value Match" (Expected vs. Actual) for all missions.

---

## 0. BOOT PROTOCOL

Trigger: "ai faucet" → Load all platforms.
Assets: `viefaucetprofile.yaml` | `99faucetprofile.yaml` | `faucetpatternvault.yaml`.

---

## 1. VIEFAUCET.COM (PRECISION MISSIONS)

### `CLAIMVIEFAUCETPRECISION`
1. Faucet-First (P0): Complete `/app/faucet` first. Solve Antibot + Captcha.
2. Pre-Mission Sync:
   - Record `Initial_Balance`.
   - Record `TargetAd` (Name, ExpectedReward, Duration).
3. Ghost Execution:
   - Inject Stealth V4.4.
   - Click 'View'.
   - Stay on the VieFaucet tab for `Duration + 10s`.
4. TRIPLE-LAYER AUDIT (V5.5):
   - Audit A (Delta Check): `(FinalBalance - InitialBalance) == Expected_Reward`.
   - Audit B (Removal Check): Refresh page. Verify ad slot is GONE.
   - Audit C (Success Label): Only label as "VERIFIED SUCCESS" if both audits match 100%.
   - Label Failure: If `Delta < Expected`, mark as "PARTIAL CREDIT / FAILED".

---

## 2. 99FAUCET.COM (SOLANA FREQUENCY)

### `CLAIM99FAUCETSOL`
- Focus: 1-minute Solana frequency.
- Rule: Shift 100% to 99Faucet Solana if VieFaucet is on 429 or empty.

---

## 3. MASTER RULES

1. PRECISION RECORDING: All reward deltas MUST be logged in `faucetvalueledger.yaml`.
2. ZERO TOLERANCE: If the reward is even 0.01 tokens off, the mission is flagged for review.
3. EMAIL MASTER: Authorized email is `nelesp3@gmail.com`.

---

V5.5 Precision Multi-Mode Faucet Brain — 2026-04-01
