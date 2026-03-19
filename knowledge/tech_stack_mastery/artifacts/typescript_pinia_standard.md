# TypeScript + Pinia Standard — Vue App Data Architecture

> **Source**: Learned from `admin-panel-wms-v2` (user's production admin panel)
> **Rule**: ALL future Vue app projects MUST follow this structure for types, stores, and data
> **Database**: Supabase (future) — dummy data for now, structure must be Supabase-ready
> **Created**: 2026-03-19

---

## 1. PROJECT STRUCTURE (Mandatory)

```
src/
├── types/          # Pure type definitions (1 file per entity)
├── stores/         # Pinia stores (1 file per entity)
├── data/           # Dummy data (JSON or TS, Supabase-ready structure)
├── api/            # API layer (mock now, Supabase later)
├── composables/    # Shared logic hooks
├── views/          # Page components
├── components/     # Reusable UI components
├── router/         # Route definitions
└── assets/         # Static assets
```

---

## 2. TYPE DEFINITION PATTERN (Per Entity)

Every entity type file MUST contain these 4 exports:

```typescript
// src/types/products.ts

// 1. STATUS ENUM (string literal union)
export const ProductStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  OUT_OF_STOCK: 'OUT_OF_STOCK',
} as const;
export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus];

// 2. ENTITY INTERFACE (database model — what comes FROM the database)
export interface Product {
  id: string;                    // UUID primary key
  name: string;
  nameEn?: string;               // Optional bilingual
  category: string;
  price: number;
  unit: string;                  // 'kg' | 'pcs' | 'pkt'
  description?: string;
  image?: string | null;
  minOrder?: string;
  status: ProductStatus;

  // Relations (denormalized for display)
  categoryId?: string;
  categoryName?: string;

  // === AUDIT FIELDS (MANDATORY ON ALL ENTITIES) ===
  isDelete: boolean;             // Soft-delete flag (NOT deletedAt)
  createdAt: string;             // ISO 8601 timestamp
  updatedAt: string;             // ISO 8601 timestamp
}

// 3. FORM VALUES INTERFACE (user input — excludes read-only/system fields)
export interface ProductFormValues {
  name: string;
  nameEn?: string;
  category: string;
  price: number;
  unit: string;
  description?: string;
  image?: string | null;
  minOrder?: string;
  status: ProductStatus;
  // NO id, NO isDelete, NO createdAt, NO updatedAt
}

// 4. PAGE PARAMS INTERFACE (pagination + filtering)
export interface ProductPageParams {
  page?: number;
  pageSize?: number;
  name?: string;                 // Filter by name (ilike)
  category?: string;             // Filter by category (eq)
  status?: ProductStatus;        // Filter by status (eq)
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// 5. OPTIONS ARRAY (for dropdowns/badges — with color mapping)
export const productStatusOptions = [
  { label: '上架中', value: ProductStatus.ACTIVE, color: 'green' },
  { label: '已下架', value: ProductStatus.INACTIVE, color: 'gray' },
  { label: '缺货', value: ProductStatus.OUT_OF_STOCK, color: 'red' },
];
```

---

## 3. AUDIT FIELDS (MANDATORY ON ALL ENTITIES)

Every single entity interface MUST include these 3 fields:

```typescript
{
  isDelete: boolean;    // Soft-delete. Default: false. Set true to "delete"
  createdAt: string;    // ISO 8601. Set on creation. Never changes.
  updatedAt: string;    // ISO 8601. Updated on every edit.
}
```

**Rules**:
- NEVER use `deletedAt` — use `isDelete: boolean` instead
- NEVER use number status codes — use string enums
- ALWAYS filter `.eq('isDelete', false)` on all list queries
- `id` is always `string` (UUID), never `number`

---

## 4. PINIA STORE PATTERN (Per Entity)

```typescript
// src/stores/products.ts
import { defineStore } from 'pinia';
import type { Product, ProductFormValues, ProductPageParams } from '../types/products';

// Re-export types (single source of truth)
export * from '../types/products';

export const useProductsStore = defineStore('products', {
  state: () => ({
    version: 0,  // Cache-bust for reactivity
  }),

  actions: {
    // === HELPERS ===
    getStatusColor(status: string): string { /* map status to color */ },
    getStatusLabel(status: string): string { /* map status to label */ },

    // === READ ===
    async getList(params?: ProductPageParams) {
      // 1. Query from data source
      // 2. Filter by isDelete === false
      // 3. Apply filters (name ilike, category eq, status eq)
      // 4. Sort (sortBy/sortOrder, default: createdAt desc)
      // 5. Paginate (page/pageSize)
      // 6. Return { items: Product[], total: number }
    },

    async getDetail(id: string): Promise<Product | null> {
      // Single record, check isDelete === false
    },

    // === WRITE ===
    async create(data: ProductFormValues): Promise<Product> {
      // 1. Generate id (crypto.randomUUID())
      // 2. Set isDelete: false, createdAt: now, updatedAt: now
      // 3. Insert into data source
      // 4. this.version++ (invalidate cache)
      // 5. Return created entity
    },

    async update(id: string, data: ProductFormValues): Promise<Product | null> {
      // 1. Find entity by id
      // 2. Merge data + set updatedAt: now
      // 3. this.version++
      // 4. Return updated entity
    },

    // === DELETE (Soft) ===
    async remove(id: string): Promise<boolean> {
      // Set isDelete = true, updatedAt = now
      // this.version++
    },

    async restore(id: string): Promise<boolean> {
      // Set isDelete = false, updatedAt = now
      // this.version++
    },

    // === OPTIONS (for dropdowns) ===
    async fetchOptions(): Promise<{ label: string; value: string }[]> {
      // Return simplified { label: name, value: id } array
      // Filter isDelete === false
    },

    // === CACHE ===
    invalidate() {
      this.version++;
    },
  },
});
```

---

## 5. DUMMY DATA PATTERN (Supabase-Ready)

```typescript
// src/data/products.ts
import type { Product } from '../types/products';

export const dummyProducts: Product[] = [
  {
    id: 'prod-001',
    name: '五花肉',
    nameEn: 'Pork Belly',
    category: 'belly',
    price: 28.00,
    unit: 'kg',
    description: '新鲜进口五花肉',
    image: null,
    minOrder: '2kg 起订',
    status: 'ACTIVE',
    isDelete: false,
    createdAt: '2026-03-19T08:00:00.000Z',
    updatedAt: '2026-03-19T08:00:00.000Z',
  },
  // ... more products
];
```

**Rules for dummy data**:
- ALWAYS include `id`, `isDelete`, `createdAt`, `updatedAt` on every record
- Use realistic data, not lorem ipsum
- Match the exact TypeScript interface (no extra/missing fields)
- Use UUID-style ids or descriptive ids (`prod-001`, `cat-belly`)
- When user commands "connect database" → swap dummy imports with Supabase queries

---

## 6. NAMING CONVENTIONS

| Component | Pattern | Example |
|---|---|---|
| Type files | `kebab-case.ts` | `products.ts`, `order-details.ts` |
| Store names | `use[PascalCase]Store` | `useProductsStore` |
| Enums | `PascalCase` values | `ProductStatus.ACTIVE` |
| Interfaces | `PascalCase` | `Product`, `ProductFormValues` |
| DB fields | `camelCase` | `companyName`, `createdAt`, `isDelete` |
| Functions | `camelCase` | `getStatusColor()`, `fetchOptions()` |

---

## 7. RELATION PATTERN (Denormalized)

When entity A references entity B:
```typescript
interface Order {
  customerId: string;          // Foreign key (always store)
  customerName?: string;       // Denormalized display field (optional)
  customerPhone?: string;      // Denormalized display field (optional)
}
```

**Why**: Avoids JOIN queries for simple display. Supabase select syntax:
```
*, customer:customers(companyName, phone)
```
Then flatten in store's getList/getDetail.

---

## 8. AI WORKFLOW FOR NEW PROJECTS

When building a new Vue app with product/data listings:

```
STEP 1: Define types FIRST (src/types/*.ts)
  → Entity, FormValues, PageParams, StatusOptions
  → Include ALL audit fields (id, isDelete, createdAt, updatedAt)

STEP 2: Create dummy data (src/data/*.ts)
  → Match type interface exactly
  → Realistic data, not placeholders
  → Include audit fields on every record

STEP 3: Create Pinia stores (src/stores/*.ts)
  → Re-export types from store file
  → CRUD actions reading from dummy data
  → Soft-delete pattern (isDelete toggle, not array filter)
  → version++ on mutations for cache invalidation

STEP 4: Build views consuming stores
  → Views import from stores (which re-export types)
  → Single import path: import { useProductsStore, type Product } from '../stores/products'

STEP 5: When user says "connect database" or "use Supabase"
  → Replace dummy data imports with Supabase client queries
  → Store interface stays the same — only data source changes
```

**Key Principle**: Build the TypeScript structure + Pinia store BEFORE any UI. The types are the contract. The dummy data proves the contract works. The UI consumes the contract. Swapping to Supabase later only changes the data source, not the UI.

---

## 9. REFERENCE PROJECT

For implementation examples, study:
- **Types**: `C:/Users/user/Desktop/antigravity/admin-panel-wms-v2/apps/web-antd/src/types/`
- **Stores**: `C:/Users/user/Desktop/antigravity/admin-panel-wms-v2/apps/web-antd/src/stores/`
- **API**: `C:/Users/user/Desktop/antigravity/admin-panel-wms-v2/apps/web-antd/src/api/supabase.ts`

---

_TypeScript + Pinia Standard V1.0 — Created 2026-03-19_
_Source: admin-panel-wms-v2 production patterns_
