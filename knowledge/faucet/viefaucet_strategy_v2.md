# Viefaucet Strategy — V5.0 (Unified Earning Engine)

> **PURPOSE**: Drive AI Faucet Brain V5 with high-yield, dual-platform earning.
> **V5.0**: Added 99Faucet Solana Fallback and TURBO_GAP (30s) protocol.

## 1. PERFORMANCE METRICS (TPS)
| Earning Channel | Avg. Tokens | Avg. Time | **Tokens / Sec (TPS)** | Priority |
| :--- | :--- | :--- | :--- | :--- |
| **TURBO PTC (Tier 1)** | ~20 | ~5s | **4.00** | ⭐⭐⭐⭐⭐ (P1) |
| **99FAUCET SOLANA** | ~0.0001 | 60s | **0.50** | ⭐⭐⭐⭐ (P2) |
| **Manual Faucet** | 65 | 300s | **0.22** | ⭐⭐⭐⭐⭐⭐ (P0) |

## 2. THE CHALLENGE ROADMAP (ACTIVE)
- **DAILY 50**: Target **50x PTC Claims** and **50x Faucet Claims**.
- **SOLANA_LOOP**: Mandatory fallback when VieFaucet Quota hit (429).
- **TURBO_GAP**: 30s delay between VieFaucet missions for account safety.

## 3. PRIORITY PIPELINE
1. **Faucet-First**: Complete `/app/faucet` once every 300s.
2. **PTC Cycle**: Perform missions ONLY while Faucet timer > 0.
3. **429 Switch**: If VieFaucet hits 429, shift 100% to 99Faucet Solana loop.
4. **Milestone harvesting**: Automatic claim of rewards in `/app/challenge`.

---

_V5.0 Unified Earning Engine Assets — 2026-04-03_

