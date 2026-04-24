# Implementation Plan: Instant Vault Generation (V1.3)

This plan enables the AI to surgically generate your encrypted `vault_{hash}.enc` file directly in your Global Vault directory, bypassing the need for you to manually trigger a sync from the extension.

## User Review Required

> [!IMPORTANT]
> **UserID Handshake**: I need your **Nanobrowser User ID** to name the file correctly. You can find this in **Nanobrowser Settings > Profile** or by looking at the "User ID" field in the Side Panel. 
> 
> **Identity Binding**: I will use your email `nelesp3@gmail.com` as the master password for the AES-GCM encryption, ensuring it is 100% compatible with the extension's `decrypt()` logic.

## Proposed Changes

### 🛠️ 1. Cryptographic Engine Replication
- **[NEW] `C:/Users/User/.gemini/antigravity/scratch/vault_generator.mjs`**:
    - Create a Node.js script using `crypto.webcrypto` to replicate the PBKDF2 (100k iterations) and AES-GCM (256-bit) logic from the extension.
    - This script will take the master_registry_template.json `(file removed)` as input.

### 🛡️ 2. Vault Generation
- **Execution**: Run the generator script to produce the encrypted Base64 blob.
- **Persistence**: Save the output to `C:/Users/User/.gemini/antigravity/vault/vault_{YOUR_ID}.enc`.

### 🛰️ 3. Verification
- Verify that the [Sovereign Pulse Server](file:///C:/Users/User/OneDrive/Desktop/NanoBrowser/sovereign_pulse.cjs) recognizes the file.

## Open Questions

> [!WARNING]
> **What is your Nanobrowser User ID?** (Format: usually a UUID or a unique string). If you provide it now, I can generate the file in one turn.

## Verification Plan

### Automated Verification
- Run a `pull` test using a custom Node script to ensure the generated file can be decrypted with your email.
