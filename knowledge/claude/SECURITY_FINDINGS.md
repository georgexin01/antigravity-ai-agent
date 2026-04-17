---
name: security-findings
description: "Active Security & Correctness Audit — WebApp-LAA & Website-Agent (V15.1 Apex)"
triggers: ["security findings", "webapp bugs", "website bugs", "laa audit issues"]
phase: reference
model_hint: gemini-3-flash
version: 15.1
status: authoritative
---

# 🛡️ SECURITY & CORRECTNESS FINDINGS (V15.1)

This node tracks real-world vulnerabilities and logic bugs discovered in the LAA project ecosystem. **Principle 1 (Micro-Verification)** must be used to audit all fixes.

## 🔴 HIGH-SEVERITY BUGS

### webApp-LAA-quiz-v2
- **H1. Logout Memory Leak**: `logout()` misses Pinia store resets. User A data persists for User B.
    - **Fix**: Use `resetAllStores()` helper in `logout()`.
- **H2. Weak Auth Guard**: Router guard only checks for token presence, not validity.
    - **Fix**: Parse JWT `exp` claim in the guard.
- **H3. Hardcoded Credentials**: `agent1@quizlaa.com` / `123456` in `login.vue`.
    - **Fix**: Purge defaults.

### website-LAA-agent (PHP)
- **H4. Unprotected `.env`**: Not blocked in monorepo `.gitignore`.
    - **Fix**: Add `api/core/.env` to project `.gitignore` immediately.
- **H5. SSL Verification Disabled**: `CURLOPT_SSL_VERIFYPEER = false` in production.
    - **Fix**: Set `SSL_VERIFY=true` in `.env.production`.
- **H6. Missing CSRF**: public form handlers (`sendLead.php`) lack CSRF verification.
    - **Fix**: Invoke `is_csrf_valid()` check.

## 🟡 MEDIUM-SEVERITY BUGS
- **M1. Non-Deterministic Shuffle**: `dbToAppQuestion` re-shuffles on every fetch, breaking key consistency.
    - **Fix**: Seed shuffle with `questionId + sessionId`.
- **M2. Local-Only Reviews**: Submissions are saved to local JSON but never synced to Supabase.
- **M3. Ghost Scaffolding**: `api/v1/` exists but is empty. Drift risk.

## 🛡️ APEX SECURITY MANDATE
All fixes MUST follow the **13 Apex Principles**. Before committing any fix, run the **Sovereign Comparison Table (SCP)** to verify performance and security rating (1/10).
