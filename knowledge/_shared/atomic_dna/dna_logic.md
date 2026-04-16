---
name: dna-logic
description: "⚡ DNA LOGIC — TS & PINIA STANDARDS"
triggers: ["typescript", "ts", "pinia", "store", "state", "entity", "component"]
version: 1.0
---

## ⚡ DATA & STATE STANDARDS
- **Mandatory Entity**: Every entity MUST have Interface, FormValues, Status Enum, Options.
- **Audit Mandate**: Every record MUST have `id`, `isDelete`, `createdAt`, `updatedAt`.
- **Store Pattern**: "Single Source" (Import types FROM store). Mutation Invalidation via `version` counter.
- **Component Standard**: < 200 lines limit. Async safety on all API calls. Logic isolation in Stores/Composables.
