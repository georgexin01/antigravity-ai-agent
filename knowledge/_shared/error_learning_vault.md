# Error Learning Vault — V15

> AI learns from mistakes. Record every fix. Never repeat the same error blindly.
> Location: `_shared/` — ALL modes use this vault.
> Updated: 2026-04-02

---

## RULE: ERROR ESCALATION PROTOCOL (Mandatory)

```
ENCOUNTER ERROR:
  │
  ├─ Step 1: CHECK THIS VAULT FIRST
  │    → Search error_log below for matching error
  │    → If FOUND: apply recorded fix immediately (skip debugging)
  │    → If NOT FOUND: proceed to Step 2
  │
  ├─ Step 2: DEBUG + FIX (Attempt 1)
  │    → Read error message carefully
  │    → Identify root cause
  │    → Apply fix
  │    → Test: does it work?
  │    → YES → Record fix in this vault → continue
  │    → NO → proceed to Step 3
  │
  ├─ Step 3: ALTERNATIVE METHOD (Attempt 2)
  │    → Try a DIFFERENT approach to solve the same problem
  │    → Different library, different pattern, different logic
  │    → Test: does it work?
  │    → YES → Record both the failed method AND the working fix → continue
  │    → NO → proceed to Step 4
  │
  ├─ Step 4: SWAP COMPONENT (Attempt 3)
  │    → Remove the problematic component/library/approach entirely
  │    → Replace with an alternative that achieves the same goal
  │    → Example: If Chart.js keeps failing → swap to ApexCharts
  │    → Example: If custom modal keeps breaking → swap to Radix/Headless UI
  │    → Test: does it work?
  │    → YES → Record: "SWAPPED [old] → [new] because [reason]" → continue
  │    → NO → proceed to Step 5
  │
  └─ Step 5: CANCEL + NOTIFY USER (Final)
       → Stop trying
       → Tell user: "I attempted 3 approaches for [problem]. None worked."
       → Show: what was tried, what failed, why
       → Ask user: skip this feature? try manually? different requirement?
       → Record in vault as UNRESOLVED with all attempts logged

TIMING RULES:
  → Maximum 3 attempts per error before escalating
  → Maximum 5 minutes per attempt (do not loop forever)
  → If same error occurs 2+ times across sessions → vault fix is MANDATORY (no re-debugging)
  → If same error occurs 4+ times AND vault fix doesn't work → auto-escalate to Step 4 (swap)
```

---

## HOW TO RECORD AN ERROR FIX

When AI fixes an error, append to the ERROR LOG section below using this format:

```
### ERR-[number]: [Short Error Description]
- **Error**: [exact error message or pattern]
- **Cause**: [root cause in 1 line]
- **Fix**: [exact fix — command, code change, or config change]
- **Mode**: NORMAL | CLAUDE | FAUCET | ALL
- **Occurrences**: [count] times
- **Status**: FIXED | SWAPPED | UNRESOLVED
- **Date**: [first seen date]
- **Alt tried**: [alternative methods attempted if any]
```

---

## ERROR LOG (Append New Entries Below)

> AI: Add new error fixes here. Never delete old entries.
> Sort: Most recent at bottom. Search by error message keyword.

_No errors recorded yet. Vault initialized 2026-04-02._

<!-- 
TEMPLATE — Copy this when adding new entry:

### ERR-001: [Short Description]
- **Error**: ``
- **Cause**: 
- **Fix**: 
- **Mode**: ALL
- **Occurrences**: 1
- **Status**: FIXED
- **Date**: 2026-04-02
- **Alt tried**: none
-->

---

## COMMON PATTERNS (Pre-Loaded From V15 Knowledge)

These are known error patterns extracted from existing knowledge. AI should check these FIRST before debugging.

### PRE-001: PostCSS Plugin Error with Tailwind v4
- **Error**: `postcss plugin error` or `Unknown at rule @tailwind`
- **Cause**: Using old PostCSS plugin instead of Vite plugin
- **Fix**: Use `@tailwindcss/vite` instead of `postcss-tailwindcss`. Remove `tailwind.config.js`, use `@theme` in CSS.
- **Mode**: ALL
- **Occurrences**: Known pattern
- **Status**: FIXED

### PRE-002: Port Already In Use
- **Error**: `EADDRINUSE` or `Port XXXX is already in use`
- **Cause**: Previous dev server not terminated
- **Fix**: Let Vite auto-increment port. Or `kill -9 $(lsof -t -i:XXXX)` / `npx kill-port XXXX`
- **Mode**: ALL
- **Occurrences**: Known pattern
- **Status**: FIXED

### PRE-003: Runtime Null Reference on Optional Data
- **Error**: `Cannot read properties of null/undefined`
- **Cause**: Data not loaded yet when template renders
- **Fix**: Add `?.` optional chaining in template OR wrap with `v-if="data"` guard
- **Mode**: NORMAL | CLAUDE
- **Occurrences**: Known pattern
- **Status**: FIXED

### PRE-004: CORS Error with Supabase
- **Error**: `CORS policy: No 'Access-Control-Allow-Origin'`
- **Cause**: Wrong Supabase URL, missing API key, or RLS blocking
- **Fix**: Check `.env` for `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY`. Check RLS policies. Ensure table has `SELECT` permission.
- **Mode**: NORMAL | CLAUDE
- **Occurrences**: Known pattern
- **Status**: FIXED

### PRE-005: Auth Redirect Loop
- **Error**: Page keeps redirecting between login and dashboard
- **Cause**: Route guard checks session but session not persisted, OR guard runs before auth state resolves
- **Fix**: Add `await` on auth check. Use `onAuthStateChange` listener. Store session in Pinia + localStorage.
- **Mode**: NORMAL | CLAUDE
- **Occurrences**: Known pattern
- **Status**: FIXED

### PRE-006: White Screen After Build
- **Error**: Blank page in production, console shows script errors
- **Cause**: Wrong `base` in `vite.config.ts`, or dynamic import path broken
- **Fix**: Check `base: '/'` in vite config. Check all lazy imports use correct relative paths. Check `index.html` script src.
- **Mode**: NORMAL
- **Occurrences**: Known pattern
- **Status**: FIXED

### PRE-007: TypeScript Type Mismatch with API Response
- **Error**: `Type 'X' is not assignable to type 'Y'`
- **Cause**: Interface definition doesn't match actual API/Supabase response shape
- **Fix**: Check API response with `console.log`. Update interface to match actual shape. Use `Partial<T>` for optional fields.
- **Mode**: NORMAL | CLAUDE
- **Occurrences**: Known pattern
- **Status**: FIXED

### PRE-008: Hydration Mismatch (SSR/Nuxt)
- **Error**: `Hydration node mismatch` or `hydration completed but contains mismatches`
- **Cause**: Client-only content rendered on server (dates, random IDs, browser APIs)
- **Fix**: Wrap with `<ClientOnly>` component. Use `onMounted` for browser-only code. Avoid `Math.random()` in templates.
- **Mode**: NORMAL
- **Occurrences**: Known pattern
- **Status**: FIXED

### PRE-009: CSS Not Applying (Tailwind)
- **Error**: Class exists in code but styles not visible
- **Cause**: Tailwind purge missed the class, or specificity conflict, or wrong `@theme` token
- **Fix**: Check class name spelling. Ensure file is in Tailwind content paths. Use `!important` only as last resort. Check `@theme` token exists.
- **Mode**: ALL
- **Occurrences**: Known pattern
- **Status**: FIXED

### PRE-010: Docker Not Running (Claude Mode)
- **Error**: `Cannot connect to Docker daemon` or Supabase local connection refused
- **Cause**: Docker Desktop not started
- **Fix**: Start Docker Desktop. Wait for it to initialize. Then `supabase start` or `docker ps` to verify.
- **Mode**: CLAUDE
- **Occurrences**: Known pattern
- **Status**: FIXED

---

## SWAP REGISTRY (When Components Were Replaced)

> AI: Record here when Step 4 (swap) was used.

```
SWAP LOG:
  [No swaps recorded yet]

TEMPLATE:
  SWAP-001: [date] Swapped [old component] → [new component]
  Reason: [why old failed after 3+ attempts]
  Result: [new component works? any limitations?]
```

---

## STATISTICS (Updated By AI)

```
Total errors recorded: 10 (pre-loaded)
Total errors fixed: 10
Total swaps: 0
Total unresolved: 0
Vault hit rate: N/A (new vault)
```

---

_Error Learning Vault V15 — AI learns from every mistake (2026-04-02)_
_Rule: Check vault FIRST. Fix and record. Escalate after 3 attempts. Never loop forever._
