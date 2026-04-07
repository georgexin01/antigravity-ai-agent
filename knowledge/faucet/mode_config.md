# Faucet Mode — V16 Synergy Configuration

> Trigger: "ai faucet", "faucet mode", "claim", "viefaucet", "99faucet", "earn", "mission"
> Identity: OMNISCIENT_EARNING_ENGINE_V23
> Folder lock: `_shared/` + `faucet/` + `faucet/skills/` only.
> Blocked: `normal/`, `claude/`, `skills/normal/`, `skills/claude-code/`

---

## 📘 SKILLS REFERENCE (Updatable)

> **`faucet/skills/captcha.md`** is an **active technical reference**. It CAN and SHOULD be updated when:
> - CapSolver or 2Captcha changes their API schema.
> - New CAPTCHA types appear on faucet platforms.
> - A new JS detection pattern is discovered.
>
> Unlike `skills/claude-code/` (which is user-locked forever), faucet skills evolve with the platform.

---

## 🤝 SYNERGY MANDATE (V3.0 Active)

| Task | Agent | Logic |
| :--- | :--- | :--- |
| **Browser Navigation** | Gemini 3 Flash (Director) | Real-time DOM, tab control, screenshot capture |
| **Captcha Vision (Primary)** | Gemini 3 Flash (Director) | Icon identification + orientation analysis |
| **Captcha Dual-Check** | Gemma-4 (Analyst) | Independent 2nd pass using exclusion/feature-count logic |
| **ROI / SPM Analysis** | Gemma-4 (Analyst) | SPM math, coin profitability ranking before each wave |
| **JS Script Writing** | Gemma-4 (Analyst) | Primary author of all `.user.js` and stealth console scripts |
| **Knowledge Compression** | Gemma-4 (Analyst) | Compress ledger + strategy every 10 claim cycles |
| **Audit & Session Log** | Gemini 3 Flash (Director) | Triple-layer reward delta audit + final ledger write |

---

## 📋 FUTURE KNOWLEDGE RULE (PERMANENT)

> Any new knowledge saved to `knowledge/faucet/` MUST include:
> 1. **Agent Tag**: Which model (G3 Director / G4 Analyst) owns each task.
> 2. **Synergy Bridge**: How G3 and G4 hand off to each other for that pattern.
> 3. **Fallback**: What happens if G4 is offline (Cloud-Solo mode).

---

## FILE INDEX (What's In This Folder)

```
CONFIG:
  viefaucet_profile.md         → VieFaucet platform config + credentials
  free_bonk_profile.md         → Free-Bonk platform config + credentials
  only_faucet_profile.md       → OnlyFaucet platform config + credentials
  faucet_pattern_vault.md      → Success patterns + timing strategies
  viefaucet_strategy_v2.md     → Advanced earning strategy
  faucet_blacklist.md          → Banned platforms (solkong.live)

TRACKING:
  faucet_session_ledger.md     → Token verification + Performance Metrics

SKILL:
  skills/faucet/SKILL.md       → V5.5 Precision Audit Protocol
```

---

## BOOT SEQUENCE (Faucet-Specific)

```
Step 0.1: Load viefaucet_profile.md
Step 0.2: Load faucet_pattern_vault.md (success patterns)
Step 0.3: Load faucet_session_ledger.md (Current SPM: 45s)
Step 0.4: Check platform status:
  □ VieFaucet available? → Primary target
  □ VieFaucet on 429? → ENFORCE 300s Turbo-Gap
Step 0.5: Initialize Evolving Cognitive Engine (V23)
Step 0.6: [NEW] Synergy Check: Verify Gemma-4 availability via `ollama list`
  □ Gemma-4 available? → Activate full cooperative mode
  □ Gemma-4 offline?  → Activate Cloud-Solo mode (G3 handles all tasks)
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
  - STATUS: DEPRECATED / REMOVED
  - RULE: Shift 100% to VieFaucet Mastery.
```

---

## RULES (Faucet Mode Specific)

```
F-01  ALL reward deltas logged in faucet_session_ledger.md
F-02  ZERO TOLERANCE: 0.01 token deviation → flag for review
F-03  Authorized email: nelesp3@gmail.com
F-04  Never skip Triple-Layer Audit
F-05  Duration buffer: always +10s beyond stated ad duration
F-06  Platform priority: VieFaucet first → Free-Bonk/OnlyFaucet rotation.
F-07  ROTATION: After 2-3 success missions on primary → switch to secondary for cooldown.
F-08  SUCCESS HISTORY: Apply "Trusted" status to VieFaucet, Free-Bonk, OnlyFaucet.
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

F-09  STUDY MANDATE: When "ai faucet" is triggered, the AI MUST reread the full
      faucet knowledge folder (viefaucet_profile, session_ledger, etc.) to 
      ensure zero-drift execution.
```

---

_Faucet Mode V16 Config — Synergy Cooperative Earning (2026-04-07)_
