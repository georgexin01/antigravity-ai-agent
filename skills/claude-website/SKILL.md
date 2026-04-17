---
name: claude-website
description: "V6.1 Sovereign orchestrator for PHP + Supabase REST. Hardens the Sovereign CRUD engine with single-record data extraction and custom header support. Mandates relational UUID binding for all persistence layers."
triggers: ["claude website", "php supabase", "api re-architecture", "dynamic routing", "sovereign rest", "composer autoload", "psr-4", "crud-engine", "single-record-lookup"]
phase: 0-orchestrator
version: 6.1
---

# `claude-website` — Sovereign PHP + Supabase REST Protocol V6.1

## When to Use

Initializing or refactoring a Sovereign PHP backend (Agents, Profiles, Reviews). Acts as the authoritative orchestrator for industrial-grade namespaced architecture and hardened relational persistence.

## 🚀 The 12-Step Sovereign Migration (V6.1 Update)

### Phase 1 — Industrial Foundation
1. **Config Generation** (.env) using VITE_ prefixed keys for cross-project compatibility.
2. **Env Loader** (Config.php) supporting `dotenv` parsing.
3. **Autoloading** (Composer PSR-4 `Sovereign\`). Runs `composer dump-autoload` after any Model/Controller creation.
4. **Relational Schema** (SQL). Binding via UUIDs (e.g. `agent_profile_id`).

### Phase 2 — Sovereign Engine Layer
5. **REST Client Construction**: `SupabaseClient.php` MUST support custom headers for PostgREST orchestration.
6. **Query Builder Logic**: `SovereignQuery.php` MUST handle the `single()` flag by extracting and returning the record data directly instead of the full API envelope.
7. **Model Mapping**: All Models must implement a `format()` method to alias database keys to template-friendly keys.
8. **Security Lock**: Implementation of RLS Policies with `anon_insert_access` for public submissions.

### Phase 3 — Orchestration & UI
9. **Controller Orchestration**: Separation of concern between Data retrieval and UI logic.
10. **Dynamic Routing**: Resolution of entities via both Slugs AND UUIDs.
11. **UI Refactoring**: Implementation of high-fidelity "No Profile Image" fallbacks in all PHP templates.
12. **Brain Hardening**: Summarize the architecture into the `.gemini` DNA.

## 🛠️ Mandatory Execution Rules

- **ENVELOPE GUARD**: `SovereignQuery::get()` must surgically return the record data when `single()` is used. Never force the Page to parse `data['data']`.
- **UUID AUTHORITATIVE**: Prioritize relational binding via UUIDs over string-based slugs for all POST/PATCH operations.
- **AESTHETIC DEGRADATION**: All image rendering must include a `personal-image-placeholder` or icon-based fallback for missing media.

## Verify

- `SupabaseClient` successfully passes custom `Accept` headers.
- `AgentModel::resolve` returns a flat array of agent data, not a response object.
- Reviews correctly `INSERT` using the `agent_profile_id` UUID.

## 📦 📦 Boilerplate Vault (COPY & ADAPT)

### 1. `SovereignQuery.php` (The Hardened Get)
```php
public function get($headers = []) {
    if ($this->single) { $headers[] = "Accept: application/vnd.pgrst.object+json"; }
    $queryString = implode('&', $params);
    $response = $this->client->request($this->table . ($queryString ? '?' . $queryString : ''), 'GET', null, 'return=representation', $headers);
    if ($this->single) {
        $status = $response['status'] ?? 500;
        return ($status >= 200 && $status < 300) ? $response['data'] : null;
    }
    return $response;
}
```

### 2. `SupabaseClient.php` (Header Support)
```php
public function request($path, $method = 'GET', $data = null, $prefer = 'return=representation', $customHeaders = []) {
    $headers = ["apikey: {$this->anonKey}", "Content-Type: application/json", "Accept-Profile: {$this->schema}", "Content-Profile: {$this->schema}"];
    if (!empty($customHeaders)) { $headers = array_merge($headers, $customHeaders); }
    // ... curl execution ...
}
```

---
**Protocol Status**: V6.1 Active | **Architect**: Claude-Website | **Requirement**: Relational Persistence & CRUD Hardening
