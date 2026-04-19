# Implementation Plan: Sovereign 'Master Vault' Simplification (V1.4)

This plan implements the "Easy One" protocol. It simplifies the connection between Nanobrowser and your Global Vault by removing the complex UserID hash requirement. The system will now use a standardized **Master Vault** file, while maintaining security via your Email Identity Binding.

## User Review Required

> [!IMPORTANT]
> **No UserID Required**: You no longer need to find or copy your UserID. Nanobrowser will automatically "see" the master vault on boot.
> 
> **Identity Binding**: The vault is still encrypted with your email (`nelesp3@gmail.com`). This means only you can "unlock" the master vault contents, even though the filename is standardized.

## Proposed Changes

### 🛰️ 1. Pulse Server Simplification
- **[MODIFY] [sovereign_pulse.cjs](file:///C:/Users/User/OneDrive/Desktop/NanoBrowser/sovereign_pulse.cjs)**:
    - Update the `/vault` GET/POST endpoints to use `vault_master.enc` as the default filename.

### 🧪 2. Extension Bridge Update
- **[MODIFY] [Vault Index](file:///C:/Users/User/OneDrive/Desktop/NanoBrowser/packages/storage/lib/vault/index.ts)**:
    - Remove the `userId` dependency for the Pulse Server requests.
    - Default to the master path while retaining the email-based encryption handshake.

### 🔒 3. Instant Hydration
- **[EXECUTE]**: I will run the [vault_generator.mjs](file:///C:/Users/User/.gemini/antigravity/scratch/vault_generator.mjs) immediately to populate `C:/Users/User/.gemini/antigravity/vault/vault_master.enc` with your provided identity.

## Open Questions
- *None. You have already provided the 'GO' for this simplification.*

## Verification Plan

### Automated Verification
- Verify that `vault_master.enc` exists in the global vault directory.
- Verify that the Pulse Server correctly serves this file on a GET request.
