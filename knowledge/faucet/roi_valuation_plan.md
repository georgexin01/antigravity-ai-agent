# Implementation Plan: AI Faucet ROI Valuation (v22.2.3)

This plan integrates real-time currency conversion into the AI Faucet, providing the user with a clear view of their earnings in Solana and USD.

## User Review Required

> [!IMPORTANT]
> **WITHDRAW SYNC**: The AI will now navigate to `/app/withdraw` during every major session sync to capture the live exchange rate.
> **MARKET AUDIT**: The AI will perform a `search_web` query for the current SOL/USD price to ensure valuation accuracy.

## Proposed Components

### 1. The Valuation Ledger (Data Layer)
Updating `faucet_session_ledger.md` to include a financial summary.
*   **New Section**: `## 5. FINANCIAL ROI VALUATION`
*   **Fields**: `Live SOL Rate`, `Live USD/SOL`, `Total Balance (USD)`.

### 2. The Sync Protocol (Action Layer)
Upgrading the Dashboard Sync task.
1.  **Step 1**: Check `/app/withdraw` -> Capture "Tokens per 1 SOL" text.
2.  **Step 2**: Search for "SOL price in USD".
3.  **Step 3**: Calculate: `(Tokens / SOL_Rate) * SOL_USD_Price`.
4.  **Step 4**: Update the ledger and the session report.

### 3. Reporting Schema
Integrating the valuation into the final session audit table.

| Metric | Tokens | Solana (Est.) | USD (Est.) |
| :--- | :--- | :--- | :--- |
| **Total Balance** | 47,708.62 | X.XXXX SOL | $Y.YY |

## Open Questions

1. **Precision**: Are you comfortable with a **+/- 2% variance** in the USD estimation due to market volatility?
2. **Timing**: Should we perform this sync during the 18-minute lockout to maximize downtime productivity?

## Verification Plan

### Accuracy Check
*   Compare the calculated SOL amount against the visual "Received" amount shown on the withdraw page.
*   Verify the USD rate against a standard oracle (e.g. CoinGecko/CoinMarketCap).
