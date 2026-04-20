# Implementation Plan: Identity-Bound Isolation (V1.5)

This plan ensures absolute multi-user isolation within your Global Vault. Each user identity (email) will now have its own cryptographically separated storage file, automatically managed by the bridge.

## User Review Required

> [!IMPORTANT]
> **Automatic Fingerprinting**: I will implement a "Silent Handshake" where the extension hashes your email to create a unique file ID (e.g., `vault_e3b0...`).
> 
> **Zero Overlap**: User-B will never see or overwrite your `nelesp3@gmail.com` keys because their email will resolve to a different filename entirely.
> 
> **Migration Pulse**: I will automatically migrate your current `vault_master.enc` to your new identity-bound filename so you lose zero data.

## Proposed Changes

### 🛡️ 1. Extension: Identity Fingerprinting
- **[MODIFY] [Vault Index](../../../scratch/extraction-staging/webapp-bakery/src/i18n/index.ts)**:
    - Add a `getVaultId()` helper that generates a SHA-256 hash of the logged-in email.
    - Update `push` and `pull` to include `?id={hash}` in the Pulse Server requests.

### 📡 2. Pulse Server: Identity Support
- **[MODIFY] [sovereign_pulse.cjs](file:///C:/Users/User/OneDrive/Desktop/NanoBrowser/sovereign_pulse.cjs)**:
    - Update endpoints to check for the `id` parameter.
    - Load/Save to `vault_{id}.enc` if present.
    - Maintain `vault_master.enc` logic as a safety fallback.

### 🧪 3. Identity Migration
- **[EXECUTE]**: Rename the current `vault_master.enc` to the new identity-bound hash for `nelesp3@gmail.com` to ensure a seamless transition.

## Open Questions
- *None. This fulfills the hard-isolation requirement while keeping the connection effortless.*

## Verification Plan

### Automated Verification
- Simulate a login with a different email (test@example.com) and verify that a new, separate `.enc` file is created without touching the master/nelesp3 file.
