# Task: Sovereign Master Registry (SSR) Expansion

- [ ] **Phase 1: Architecture Expansion**
    - [ ] Update `VaultData` interface and `SovereignVault` class logic.
    - [ ] Ensure backward compatibility with existing LLM provider sync.
- [ ] **Phase 2: Persistence Integration**
    - [ ] Update `llmProviderStore.syncVault()` to handle nested `registry` schema.
    - [ ] Update `llmProviderStore.push()` to wrap providers in the new registry container.
- [ ] **Phase 3: Template Generation**
    - [ ] Generate `master_template.json` in the Global Vault directory.
    - [ ] Verify template structure includes Stitch, AI Studio, and Drive.
- [ ] **Phase 4: Verification**
    - [ ] Full sync test (Handshake) between Pulse Server and Registry.
    - [ ] Identity lockdown confirmation (email binding).
