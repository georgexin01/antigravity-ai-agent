# Implementation Plan: Sovereign Vault Relocation (V1.1)

This update relocates the Vault's physical store from the NanoBrowser workspace to the **Global Sovereign Repository** to ensure architectural purity and project isolation.

## User Review Required

> [!IMPORTANT]
> **New Permanent Location**: `C:\Users\User\.gemini\antigravity\vault\`
> 
> **NanoBrowser Impact**: The local `.gemini/` folder and Vault whitelists in the project repository will be deleted. The project will now have NO local relation to your API storage.

## Proposed Changes

### 🛰️ 1. Pulse Server Path Re-routing

Modify [sovereign_pulse.cjs](file:///C:/Users/User/OneDrive/Desktop/NanoBrowser/sovereign_pulse.cjs) to use an absolute path for the vault.

#### [MODIFY] [sovereign_pulse.cjs](file:///C:/Users/User/OneDrive/Desktop/NanoBrowser/sovereign_pulse.cjs)
- Import `os` module.
- Change `VAULT_DIR` to `path.join(os.homedir(), '.gemini', 'antigravity', 'vault')`.

### 🧹 2. Workspace Cleanup

#### [DELETE] `.gemini/apikey/` (Workspace)
#### [MODIFY] [.gitignore](../../../.gitignore)
- Revert the whitening of `.gemini/` as it is no longer hosted in the project.

### 🏛️ 3. Vault Genesis

#### [NEW] `C:\Users\User\.gemini\antigravity\vault\`
- Ensure the directory exists in the Global Sovereign Repository.

## Verification Plan

### Manual Verification
1. Verify `C:\Users\User\.gemini\antigravity\vault\` exists.
2. Confirm `POST /vault` still works by checking the new global location.
3. Verify NanoBrowser folder is clean.
