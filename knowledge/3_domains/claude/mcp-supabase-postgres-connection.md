---
name: mcp-supabase-postgres-connection
description: "Sovereign SSH Tunnel & MCP PostgreSQL Tunneling Logic (V15.1 Apex)"
triggers: ["mcp postgres", "ssh tunnel postgres", "postgres tunnel"]
phase: reference
model_hint: gemini-3-flash
version: 15.1
status: authoritative
---

# 🛡️ MCP POSTGRES CONNECTION (V15.1 APEX)

The secure tunneling protocol for connecting Claude-mode to self-hosted Supabase instances. All connections are strictly governed by **Principle 12 (Data Sovereignty)**.

## ⚙️ GUARDRAILS
1. **Principle 12 (Security)**: NEVER store production passwords in plain text within `.claude.json` or any knowledge file. Use environment variables or placeholders.
2. **Principle 1**: Before editing the Docker config, verify the existing port mapping via `sudo docker port supabase-db`.

## 🗺️ THE TUNNEL PROTOCOL

### 1. Server-Side: Port Exposure
By default, Supavisor (Port 5432) requires tenant IDs. Bypass it by exposing the DB directly:
```yaml
# docker-compose.yml
db:
  ports:
    - "5433:5432" # Direct DB exposure
```

### 2. Local-Side: SSH Tunnel (PuTTY)
- **Source Port**: `5433`.
- **Destination**: `localhost:5433`.

### 3. MCP Handshake (`.claude.json`)
Target the local tunnel endpoint with encoded credentials:
```json
"mcpServers": {
  "supabase-db": {
    "type": "stdio",
    "command": "npx",
    "args": [
      "-y",
      "@modelcontextprotocol/server-postgres",
      "postgresql://postgres:{ENCODED_PW}@127.0.0.1:5433/postgres"
    ]
  }
}
```

## 🛡️ ERROR RECALL
- **32603 Error**: Usually means you are hitting the pooler (5432) instead of the DB (5433).
- **Restart Requirement**: MCP changes require a hard restart of the AI interface.

## 🧪 APEX VERIFICATION
AI MUST execute a **Sovereign Comparison Table (SCP)** to verify:
- [ ] SSH Tunnel Persistence (1/10).
- [ ] Password Redaction Status (10/10).
- [ ] Port Conflict Rating (1/10).
