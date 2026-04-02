# Faucet Mode — V15 Configuration

> Trigger: "ai faucet", "faucet mode", "claim", "viefaucet", "99faucet", "earn", "mission"
> This mode is for: Faucet website earning automation ONLY.
> Folder lock: `_shared/` + `faucet/` + `skills/faucet/` only.
> Blocked: `normal/`, `claude/`, `skills/normal/`, `skills/claude-code/`

---

## FILE INDEX (What's In This Folder)

```
CONFIG:
  viefaucet_profile.md         → VieFaucet platform config + credentials
  99faucet_profile.md          → 99Faucet Solana platform config
  faucet_pattern_vault.md      → Success patterns + timing strategies
  viefaucet_strategy_v2.md     → Advanced earning strategy

TRACKING:
  faucet_session_ledger.md     → Token verification ledger (append-only)

SKILL:
  skills/faucet/SKILL.md       → V5.5 Precision Audit Protocol
```

---

## BOOT SEQUENCE (Faucet-Specific)

```
Step 0.1: Load viefaucet_profile.md + 99faucet_profile.md
Step 0.2: Load faucet_pattern_vault.md (success patterns)
Step 0.3: Load faucet_session_ledger.md (current balance state)
Step 0.4: Check platform status:
  □ VieFaucet available? → primary target
  □ VieFaucet on 429/empty? → shift to 99Faucet Solana
Step 0.5: Resume from session fingerprint if same faucet session
```

---

## EXECUTION PROTOCOL

### VieFaucet (Primary Platform)

```
CLAIM_VIEFAUCET_PRECISION:
  1. Faucet-First: Complete /app/faucet (Antibot + Captcha)
  2. Pre-Mission Sync:
     - Record Initial_Balance
     - Record Target_Ad (name, expected_reward, duration)
  3. Ghost Execution:
     - Inject Stealth V4.4
     - Click 'View'
     - Stay on tab for Duration + 10s buffer
  4. TRIPLE-LAYER AUDIT:
     - Audit A (Delta): Final_Balance - Initial_Balance == Expected_Reward
     - Audit B (Removal): Refresh → ad slot GONE
     - Audit C (Label): Both pass → "VERIFIED SUCCESS"
     - If Delta < Expected → "PARTIAL CREDIT / FAILED"
```

### 99Faucet Solana (Fallback Platform)

```
CLAIM_99FAUCET_SOL:
  - Focus: 1-minute Solana frequency claims
  - Trigger: VieFaucet on 429 or empty ad queue
  - Rule: Shift 100% to 99Faucet when VieFaucet unavailable
```

---

## RULES (Faucet Mode Specific)

```
F-01  ALL reward deltas logged in faucet_session_ledger.md
F-02  ZERO TOLERANCE: 0.01 token deviation → flag for review
F-03  Authorized email: nelesp3@gmail.com
F-04  Never skip Triple-Layer Audit
F-05  Duration buffer: always +10s beyond stated ad duration
F-06  Platform priority: VieFaucet first → 99Faucet fallback
```

---

## SESSION END (Faucet-Specific)

```
1. Append all claim results to faucet_session_ledger.md
2. Update _shared/session_cache.md with:
   - Total earned this session
   - Platform used
   - Success/fail count
   - Next session prediction
3. Update faucet_pattern_vault.md if new success pattern discovered
```

---

## CROSS-READ EXCEPTIONS

```
CROSS-READ ALLOWED:
  None. Faucet mode is fully self-contained.

CROSS-READ BLOCKED:
  Everything in normal/ and claude/ folders.
```

---

## P0 RULES OVERRIDE (Faucet Mode)

```
Faucet mode SKIPS these P0 rules from boot.md:
  P0-01 (Design tokens) → NOT APPLICABLE
  P0-02 (Types/stores) → NOT APPLICABLE
  P0-03 (LOVES) → NOT APPLICABLE
  P0-04 (HATES) → NOT APPLICABLE
  P0-06 (Mobile test) → NOT APPLICABLE
  P0-09 (No skeleton pages) → NOT APPLICABLE

Faucet mode KEEPS these P0 rules:
  P0-05 (Build succeed) → if faucet website development
  P0-10 (Mode gate) → ALWAYS
  P0-12 (Error triage) → if errors occur
```

---

_Faucet Mode V15 Config — Precision Earning Automation (2026-04-02)_
