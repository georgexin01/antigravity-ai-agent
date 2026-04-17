---
name: security-findings
description: "Security + correctness issues found during 2026-04-17 audit of webApp-LAA-quiz-v2 and website-LAA-agent. Not hypothetical — actual bugs in running code. Reference this before shipping either project to production."
triggers: ["security findings", "webapp bugs", "website bugs", "laa audit issues", "production readiness"]
phase: reference
model_hint: gemini-3-flash
version: 1.0
status: authoritative
date_created: "2026-04-17"
---

# Security & Correctness Findings — LAA WebApp + Website (2026-04-17)

Real bugs found while studying projects to write skill flows. Fix before production ship.

## 🔴 HIGH — webApp-LAA-quiz-v2

### H1. Logout doesn't reset non-auth stores
- **Where:** `src/stores/auth.ts:227`
- **Issue:** `logout()` only nulls `this.user`. `lessonsStore.courses`, `questionsStore.questionPool`, `qaStore.historyList` retain previous user's data in memory.
- **Impact:** User A logs out → User B logs in on same tab → sees User A's data until each store's next fetch overwrites it. Cross-user data leak.
- **Fix:** Add `resetAllStores()` helper (see `webapp-api-connection` Step 11) and call it inside `logout()`.

### H2. Router guard is token-presence only
- **Where:** `src/router/index.ts:67`
- **Issue:** Guard checks `localStorage.getItem('accessToken')` truthy — any non-empty string passes. Expired/revoked tokens get through.
- **Impact:** Session invalidity only discovered on first DB call — before that, route access is illusory.
- **Fix:** Parse JWT `exp` claim in the guard. Reject if expired.

### H3. Hardcoded credentials in login view
- **Where:** `src/views/login/index.vue:13–14`
- **Issue:** `email = ref('agent1@quizlaa.com')` and `password = ref('123456')` as defaults.
- **Impact:** Visible in production builds. Any visitor can log in as `agent1` if that user exists in DB.
- **Fix:** Replace defaults with empty strings.

## 🔴 HIGH — website-LAA-agent

### H4. `.env` NOT in `.gitignore`
- **Where:** Project root `.gitignore` (inherited from monorepo)
- **Issue:** Default blocks only `*.local`/`.env.local`. `api/core/.env` and `api/core/.env.production` are NOT covered.
- **Impact:** Anon key (and anything else in `.env`) at risk of being pushed to GitHub.
- **Fix:** Add to project-specific `.gitignore`:
  ```
  api/core/.env
  api/core/.env.*
  .env
  .env.*
  ```

### H5. SSL peer verification disabled
- **Where:** `api/core/SupabaseClient.php` — `CURLOPT_SSL_VERIFYPEER = false`
- **Issue:** Intentional for local Docker dev, but dangerous if deployed to public HTTPS as-is.
- **Impact:** MITM attackers can intercept/modify Supabase traffic in production.
- **Fix:** Make it env-driven. In `.env.production`, set `SSL_VERIFY=true`. In `SupabaseClient.php`:
  ```php
  CURLOPT_SSL_VERIFYPEER => SupabaseConfig::get('SSL_VERIFY', 'true') === 'true',
  ```

### H6. No CSRF on public form handlers
- **Where:** `lib/sendReview.php`, `lib/sendLead.php`
- **Issue:** `router.php` defines `set_csrf()` and `is_csrf_valid()` helpers but neither handler calls them.
- **Impact:** Cross-site forgery: attacker page can submit reviews/leads on victim's behalf.
- **Fix:** Call `is_csrf_valid()` at top of each handler. Reject with 403 if invalid.

### H7. `htmlspecialchars()` missed on image src
- **Where:** `home.php:129`
- **Issue:** `<img src="<?= $agent['photo'] ?>">` — DB value inserted without escape.
- **Impact:** If DB value contains `" onerror=alert(1) x="`, XSS payload runs.
- **Fix:** `<img src="<?= htmlspecialchars($agent['photo'], ENT_QUOTES, 'UTF-8') ?>">`

## 🟡 MEDIUM

### M1. webApp — `isMock` dead code
- **Where:** `src/api/supabase.ts:7`
- **Issue:** `const isMock = false` declared, never read.
- **Fix:** Delete.

### M2. webApp — `.env.production` keys inert
- **Where:** `.env.production` — `VITE_GLOB_API_URL`, `VITE_NITRO_MOCK`, etc.
- **Issue:** Vben scaffold leftovers, not consumed by any file in `src/`.
- **Fix:** Remove to avoid confusion.

### M3. webApp — `dbToAppQuestion` non-deterministic shuffle
- **Where:** `src/stores/questions.ts`
- **Issue:** Shuffles answer options on every fetch. `correctKey` ('A','B','C','D') changes per fetch. Snapshot is correct; mid-session re-fetch from another call breaks key consistency.
- **Fix:** Shuffle once per quiz session, cache. Or seed shuffle with `questionId + sessionId`.

### M4. website — Review lock via localStorage only
- **Where:** `review.php` — `localStorage.setItem('laa_review_' + slug, 'submitted')`
- **Issue:** Client-side-only guard, devtools can clear.
- **Fix:** Server-side check — store submitter fingerprint (IP + UA hash + time window) in `uploads/reviews/{slug}.json` and reject duplicates.

### M5. website — Two `SupabaseConfig.php` files
- **Where:** `api/core/SupabaseConfig.php` AND `lib/SupabaseConfig.php`
- **Issue:** Slightly different fallback behavior. Drift risk.
- **Fix:** Keep `api/core/` as canonical. Make `lib/SupabaseConfig.php` a one-liner `require_once __DIR__ . '/../api/core/SupabaseConfig.php';`.

### M6. website — Dual review data source
- **Where:** `home.php:273–279` — `array_merge` of Supabase `agent_reviews` + local `uploads/reviews/{slug}.json`
- **Issue:** Reviews submitted via form are saved ONLY to local JSON, not synced back to Supabase. Two sources of truth.
- **Fix:** Either (A) write all reviews to Supabase via edge function OR (B) document the split and add moderation tooling that promotes local → Supabase.

### M7. website — Google Apps Script ID hardcoded in page source
- **Where:** `lib/sendEmail.php` (JavaScript fetch block)
- **Issue:** Google Script deployment ID visible in page source.
- **Impact:** Attacker can spam the endpoint directly.
- **Fix:** Proxy through PHP handler with CSRF + rate limit instead of client-side fetch.

## 🟢 LOW

### L1. website — `api/v1/` is empty ghost scaffolding
- **Where:** `api/v1/profiles/` and `api/v1/reviews/` — no PHP files
- **Fix:** Delete or implement the REST endpoints.

### L2. website — No Apache/Nginx config in repo
- **Where:** Missing `.htaccess` or nginx conf
- **Issue:** URL rewriting to `index.php` must be configured externally. If someone deploys to a raw webserver, clean URLs break.
- **Fix:** Add `.htaccess` + nginx example snippet in README.

## Suggested next action

Prioritize: H4 (gitignore) → H6 (CSRF) → H7 (XSS) → H1 (logout reset) → H3 (hardcoded creds). H4 in particular is a one-line fix with high severity.
