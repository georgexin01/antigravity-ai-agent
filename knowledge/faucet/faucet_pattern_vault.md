# Faucet Pattern Vault — V5.0 Synergy

> **PURPOSE**: Store recognized earning patterns for zero-learning execution.
> **V5.0**: Added Agent tag per pattern (G3 Director / G4 Analyst) per Future Knowledge Rule.

## 1. IDENTIFIED PATTERNS (QUEST/CAPTCHA)

| Pattern ID | Description | Resolution Strategy | Agent | Efficiency |
|---|---|---|---|---|
| CAPTCHA_LO_ICON | "Least Often" verification modal | Scan icon elements and compare frequency in DOM | G3 Primary + G4 Dual-Check | High |
| FAUCET_ORDER_3 | 3-item identification sequence | Match text string to button IDs sequentially | G3 Director | High |
| PTC_STAY_TIMEOUT | Minimum view duration for PTC | Sync with browser network idle and local timer | G3 Director | Medium |
| **TIMER_STUCK** | Timer stops or slows down | WATCHDOG: Refresh/Re-focus or Alert User | G3 Director | 🆕 NEW |
| **OAUTH_GOOGLE** | Login via Google redirection | AUTHORIZED: Click button → Wait for Dashboard | G3 Director | 🆕 NEW |
| **AUTOLOGIN_MAIL** | Email field detection | INSERT: `nelesp3@gmail.com` → Stop/Wait | G3 Director | 🆕 NEW |
| PTC_TAB_FOCUS | Timer requires focus on ad tab | Stay on ad tab for duration + buffer | G3 Director | High |

## 2. SITE STRUCTURE PATTERNS (V4.2 Optimized)
- **Ad Dismissal**: `div[class*='play-now'] x button` or pixel offset `-10, -10` from widget corner.
- **Turbo Gap**: Dynamic (Currently 30s).
- **Speed Bands**:
    - **Safe**: Buffer +10s
    - **Balanced**: Buffer +5s
    - **Turbo**: Buffer +2s

## 3. FAILURE LOG (AUTO-MANAGED)
| Ad Name | Failures | Cooldown Left | Status |
|---|---|---|---|
| (none yet) | 0 | 0 | Ready |

---

## 4. TRAINING LOGS (v22.2.1 PDL)
- **Current Speed Mode**: Agile Training (Wait: 8s)
- **Recent Failures**: Platform Lockout (18m).
- **Mystery Identified**: Multi-viewer tab collision or rapid captcha failure.
- **Resolution**: Implemented "Incremental Fallback" and "Tab-Closure" to prevent lockout re-trigger.

---

## 📋 FUTURE KNOWLEDGE RULE (PERMANENT)

> Any new pattern added here MUST include an **Agent** column entry:
> - `G3 Director` = Gemini 3 Flash handles execution
> - `G4 Analyst` = Gemma-4 handles logic/analysis
> - `G3 Primary + G4 Dual-Check` = Both agents required (captcha verification)
