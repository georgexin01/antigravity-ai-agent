# Faucet Pattern Vault — V4.0 (Universal Optimizer)

> **PURPOSE**: Store recognized earning patterns for zero-learning execution.
> **V4.0**: Added Watchdog and Login Redirect patterns.

## 1. IDENTIFIED PATTERNS (QUEST/CAPTCHA)

| Pattern ID | Description | Resolution Strategy | Efficiency |
|---|---|---|---|
| CAPTCHA_LO_ICON | "Least Often" verification modal | Scan icon elements and compare frequency in DOM | High |
| FAUCET_ORDER_3 | 3-item identification sequence | Match text string to button IDs sequentially | High |
| PTC_STAY_TIMEOUT | Minimum view duration for PTC | Sync with browser network idle and local timer | Medium |
| **TIMER_STUCK** | **Timer stops or slows down** | **WATCHDOG: Refresh/Re-focus or Alert User.** | **🆕 NEW** |
| **OAUTH_GOOGLE** | **Login via Google redirection** | **AUTHORIZED: Click button -> Wait for Dashboard.** | **🆕 NEW** |
| **AUTOLOGIN_MAIL** | **Email field detection** | **INSERT: `nelesp3@gmail.com` -> Stop/Wait.** | **🆕 NEW** |
| PTC_TAB_FOCUS | Timer requires focus on ad tab | Stay on ad tab for duration + buffer. | High |

## 2. SITE STRUCTURE PATTERNS (V4.0)
- **Menu ID**: Sidebar links for Dashboard, Faucet, etc.
- **Balance Element**: Header balance displayed in points. Read before/after EVERY mission.
- **Mission Instance**: Single Persistent Live View (Shared Tab session).
- **Turbo Gap**: 30s cooldown between browser calls when Quota > 50%.

## 3. FAILURE LOG (AUTO-MANAGED)
| Ad Name | Failures | Cooldown Left | Status |
|---|---|---|---|
| (none yet) | 0 | 0 | Ready |

---

_V4.0 Universal Optimizer Pattern Vault — 2026-04-01_
