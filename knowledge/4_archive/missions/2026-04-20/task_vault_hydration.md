# Task: Sovereign Vault Hydration

- [ ] **Phase 1: Deep History Mining**
    - [ ] Scan all context/overview logs for `sk-`, `gsk_`, `AIzaSy`.
    - [ ] Search for `.env` backups in the home directory.
- [ ] **Phase 2: Key Consolidation**
    - [ ] Map discovered keys to `LLMKeyRecord` structure.
    - [ ] Request user confirmation for any ambiguous keys.
- [ ] **Phase 3: Vault Generation**
    - [ ] Extract user identity (email) from session.
    - [ ] Generate encrypted `vault_{hash}.enc` in AppData.
- [ ] **Phase 4: Verification**
    - [ ] Smoke test the Pulse Server response for the new vault.
    - [ ] Final cleanup of any plaintext key remnants in temporary files.
