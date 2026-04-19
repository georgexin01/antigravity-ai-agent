# Implementation Plan: Sovereign Vault Hydration (V1.0)

This plan focuses on "Hydrating" the new Sovereign Vault with all available API keys from your chat history, legacy files, and system environment. Once populated, these keys will be sequestered in your global `.gemini/` repository and automatically linked to Nanobrowser.

## User Review Required

> [!IMPORTANT]
> **Key Harvesting**: I have performed an initial scan of your workspace and current history. No live keys (other than a default Gemini key) were detected in plaintext. 
> 
> **Handshake Required**: To proceed with maximum velocity, please confirm if there is a specific conversation or file where you previously pasted your keys.

## Proposed Changes

### 🕵️ 1. Multi-Tier Key Harvesting
- **Chat History Mining**: I will perform a deep, recursive scan of all `overview.txt` files in your [brain](file:///C:/Users/User/.gemini/antigravity/brain/) directory using specific cryptographic patterns (e.g. `sk-`, `gsk_`).
- **Legacy File Audit**: I will search for common credential filenames (e.g. `.env`, `apikey.txt`) in your User Home directory.

### 🛡️ 2. Vault Hydration (Encryption)
- **Drafting the Vault**: Once keys are found, I will convert them into the `LLMKeyRecord` format.
- **Encryption Step**: I will manually generate the encrypted `vault_{hash}.enc` file in your **Global Sovereign Repository** (`C:/Users/User/.gemini/antigravity/vault/`) using your identity as the key.

### 🛰️ 3. Tool Reconnection
- **Nanobrowser Sync**: I will ensure [llmProviderStore](file:///C:/Users/User/OneDrive/Desktop/NanoBrowser/packages/storage/lib/settings/llmProviders.ts) is configured to prioritize the vault on boot.
- **MCP Verification**: If any MCP servers (like Stitch) are using these keys, I will update their configurations to pull from the centralized vault.

## Open Questions

> [!WARNING]
> **Specific Keys**: Which providers are we targeting today? (OpenAI, Anthropic, Gemini, Groq, etc.)
> 
> **History Pointer**: Do you remember which conversation (ID or Topic) contains the keys?

## Verification Plan

### Automated Verification
- Verify that the Pulse Server detects the new `.enc` file in the global directory.
- Verify that `llmProviderStore.syncVault()` successfully hydrates the keys in the user's browser.

### Manual Verification
- You can check the "API Keys" section in Nanobrowser settings to confirm the keys are populated.
