# Implementation Plan: Sovereign Master Registry (V1.2)

This plan upgrades the Sovereign Vault into a comprehensive **System Registry**. It provides a structured, JSON-based vault for all your API keys, Cloud Services (Stitch, AI Studio), and Workspace Assets (Drive, Sheets), unified under your identity-bound encryption.

## User Review Required

> [!IMPORTANT]
> **Schema Evolution**: The current `VaultData` will be migrated to a modular `registry` structure.
> 
> **Identity Multi-Lock**: Your encryption is currently bound to your email (`chrome.identity`). I will enforce a protocol where the system verifies your session email matches the vault's `identity` metadata before providing access.

## Proposed Changes

### ⚙️ 1. Registry Architecture expansion
- **[MODIFY] [Vault Index](../../../scratch/extraction-staging/webapp-bakery/src/i18n/index.ts)**:
    - Update `VaultData` interface to include `registry`, `cloud_services`, and `workspace_assets`.
    - Implement an `exportTemplate()` method to generate the JSON boilerplate you requested.

### 🏛️ 2. Global Vault Preparation
- **[NEW] `C:/Users/User/.gemini/antigravity/vault/master_template.json`**:
    - Create a surgical JSON template with all fields (Google Stitch, AI Studio, Drive, etc.) initialized with empty strings for your manual input.

### 🛰️ 3. Persistence Logic Update
- **[MODIFY] [llmProviders.ts](file:///C:/Users/User/OneDrive/Desktop/NanoBrowser/packages/storage/lib/settings/llmProviders.ts)**:
    - Update the `syncVault()` and `push()` methods to handle the nested `registry.api_providers` layer.
    - Ensure existing settings are backward compatible or migrated to the new schema.

## Open Questions

> [!WARNING]
> **Access Restriction**: You specified "access only by my email account". Should I implement a "Hard Lock" that completely deletes the local extension storage if a different email is detected, or is the "Standard Lock" (which just prevents decryption) enough?

## Verification Plan

### Automated Verification
- Verify that `SovereignVault.pull()` correctly hydrates LLM providers from the new nested registry.
- Confirm the `master_template.json` is generated with correct "Usage Paths".

### Manual Verification
- You will be asked to fill the `master_template.json` in your AppData directory and trigger a `Sync` from the extension.
