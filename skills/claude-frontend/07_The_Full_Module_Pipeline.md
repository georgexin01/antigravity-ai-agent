# The Full Module Pipeline: 10-Step WebApp Module Creation (V2.0)

> **Goal**: Automated, repeatable process to add a new data module to the WebApp
> **Prerequisite**: The Supabase table MUST already exist (created by Admin Panel / claude-code skills)
> **Output**: Types + Store + Views + Route — fully connected to Supabase REST API

---

## OVERVIEW: THE 10-STEP PIPELINE

```
Step 1:  DISCOVER  — Read the Supabase table schema (columns, types, FKs)
Step 2:  TYPES     — Generate TypeScript interfaces (DB + App + FormValues)
Step 3:  STORE     — Generate Pinia store (CRUD + transforms)
Step 4:  LIST VIEW — Generate list page (card grid or table)
Step 5:  DETAIL    — Generate detail page (with page/embedded dual mode)
Step 6:  FORM      — Generate create/edit form (if entity supports writes)
Step 7:  ROUTE     — Add routes to router/index.ts
Step 8:  INDEX     — Update type/store index re-exports
Step 9:  VERIFY    — Run dev server, check no TypeScript errors
Step 10: REVIEW    — Quality checklist pass
```

---

## STEP 1: DISCOVER — Read the Database Schema

**Input**: Table name (e.g., `lessons`, `students`)
**Action**: Query Supabase to understand the table structure

### How to Read Schema:

**Option A: From Admin Panel SQL** (if accessible)
- Read the SQL migration file in `admin-panel-quizLaa/supabase/migrations/`
- Extract: column names, types, FKs, constraints, defaults

**Option B: From PostgREST** (if app is running)
- `GET /rest/v1/{table}?select=*&limit=1` — inspect response shape
- `GET /rest/v1/` — list all available tables

**Option C: From existing types** (if Admin Panel has types)
- Read `apps/web-antd/src/api/{entity}.ts` — the Admin Panel's type definitions

### Discovery Checklist:
- [ ] Table name and schema (`quizLaa.{entity}`)
- [ ] All columns with SQL types
- [ ] Which columns are required vs nullable
- [ ] Foreign key relationships (parentTable, parentColumn)
- [ ] Does it have the Golden Five? (id, status, is_delete, created_at, updated_at)
- [ ] Any special column types? (jsonb arrays, numeric money, image URLs)
- [ ] What data already exists? (sample records help understand the shape)

### Discovery Output (Consultation Card):

```
Entity: lessons
Schema: quizLaa
Table: "quizLaa"."lessons"

Columns:
  id          uuid        PK, gen_random_uuid()
  title       text        NOT NULL
  description text        nullable
  duration    integer     NOT NULL
  sort        integer     default 0
  images      jsonb       default '[]' (string array)
  video       text        nullable
  status      integer     default 1
  is_delete   boolean     default false
  created_at  timestamptz default now()
  updated_at  timestamptz default now()

Foreign Keys: none
Special: images is jsonb array of URL strings
```

**STOP**: Present the consultation card to the user for confirmation before proceeding.

---

## STEP 2: TYPES — Generate TypeScript Interfaces

**File**: `src/types/{entity}.ts`
**Rule**: Generate from Step 1 discovery. Three interfaces minimum.

### Template:

```typescript
// src/types/{entity}.ts

/** DB type — raw record from Supabase (matches SQL columns exactly) */
export interface {Entity} {
  id: string
  // ... all columns from discovery, mapped per 02_Data_Model_Pattern.md
  status: number
  is_delete: boolean
  created_at: string
  updated_at: string
}

/** App type — transformed for UI rendering */
export interface {Entity}View {
  id: string
  // ... only fields the UI needs, with formatted values
}

/** Form values — for create/edit (no system columns) */
export interface {Entity}FormValues {
  // ... only user-editable fields
}
```

### Then update index:

```typescript
// src/types/index.ts — add export
export type { Entity, EntityView, EntityFormValues } from './{entity}'
```

---

## STEP 3: STORE — Generate Pinia Store

**File**: `src/stores/{entity}.ts`
**Template**: Follow `03_Pinia_Store_Pipeline.md` exactly

### Required Actions:
1. `getList()` — GET with `is_delete=eq.false` filter
2. `getDetail(id)` — GET single with cache check
3. `create(values)` — POST with `Prefer: return=representation`
4. `update(id, values)` — PATCH with `updated_at`
5. `remove(id)` — Soft delete (PATCH `is_delete: true`)
6. `$reset()` — Reset all refs

### Transform Function:
- Create a `toView(raw: Entity): EntityView` function
- Handle: date formatting, image fallbacks, FK name resolution, null defaults

### Then update index:

```typescript
// src/stores/index.ts — add export
export { useEntityStore } from './{entity}'
```

---

## STEP 4: LIST VIEW — Generate List Page

**File**: `src/views/{entity}/list.vue`
**Template**: Follow `04_Vue_Component_Manual.md` Section 2

### Must Include:
- Loading state with spinner
- Empty state message
- Card grid or table layout
- Search/filter input (if entity has a name/title field)
- Click handler to navigate to detail
- `onMounted` -> `store.getList()`

### Layout Decision:

| Data Shape | Layout | When |
|-----------|--------|------|
| Visual (has images/cards) | Card grid | Courses, products, galleries |
| Tabular (many text fields) | Table | Students, transactions, logs |
| Mixed | Cards with expandable detail | Orders, lessons |

---

## STEP 5: DETAIL VIEW — Generate Detail Page

**File**: `src/views/{entity}/detail.vue`
**Template**: Follow `04_Vue_Component_Manual.md` Section 3

### Must Include:
- Dual mode: `page` (reads from route.params.id) + `embedded` (reads from props.entityId)
- Loading state
- Not-found state
- Back button (page mode only)
- All entity fields displayed
- Edit button -> navigates to form or opens modal
- Delete button -> confirms then soft-deletes

---

## STEP 6: FORM VIEW — Generate Create/Edit Form

**File**: `src/views/{entity}/form.vue`
**Template**: Follow `04_Vue_Component_Manual.md` Section 4
**Skip if**: Entity is read-only in the WebApp (no user writes)

### Must Include:
- Props: `entity` (null=create, object=edit)
- Watch `entity` for edit mode population
- Form state initialized from `EntityFormValues`
- Submit handler: create or update based on mode
- Cancel handler: emits `cancel`
- Validation: required fields, format checks
- Submitting state: disables button during API call

---

## STEP 7: ROUTE — Add Routes

**File**: `src/router/index.ts`
**Template**: Follow `05_Router_Auth_Guard.md` Section 3

### Add in this order:
1. List route: `/{entity}` -> `{Entity}List`
2. Detail route: `/{entity}/:id` -> `{Entity}Detail`
3. Create route (optional): `/{entity}/create` -> `{Entity}Create`
4. Edit route (optional): `/{entity}/:id/edit` -> `{Entity}Edit`

All routes: `meta: { requiresAuth: true }`

---

## STEP 8: INDEX — Update Re-exports

Update these index files:

```typescript
// src/types/index.ts
export type { Entity, EntityView, EntityFormValues } from './{entity}'

// src/stores/index.ts
export { useEntityStore } from './{entity}'
```

---

## STEP 9: VERIFY — Run and Check

### Verification Steps:
1. `pnpm dev` — starts without errors
2. Navigate to `/{entity}` — list page loads
3. Check browser DevTools Network tab — API calls go to correct PostgREST URL
4. Check response data matches expected shape
5. Click an item — detail page loads
6. If form exists: create a record, verify it appears in list
7. No TypeScript errors in terminal

### Common Issues:

| Issue | Cause | Fix |
|-------|-------|-----|
| 404 on API call | Wrong table name in store | Check exact table name in Supabase |
| Empty response | RLS blocks anonymous access | Check RLS policies allow SELECT for authenticated users |
| CORS error | Supabase not configured for localhost | Add `http://localhost:5173` to Supabase CORS settings |
| Schema not found | Missing `Accept-Profile` header | Verify request.ts sets schema headers |
| 401 Unauthorized | Token expired or missing | Check localStorage has valid accessToken |

---

## STEP 10: REVIEW — Quality Checklist

Run through the checklist in `08_Quality_Checklist.md`:

- [ ] Types match SQL schema exactly
- [ ] Store has all 6 required actions + $reset
- [ ] List view has loading/empty/data states
- [ ] Detail view supports dual mode
- [ ] Form validates required fields
- [ ] Routes are registered with auth guard
- [ ] Index files re-export new types/stores
- [ ] No hardcoded URLs or API keys
- [ ] Mobile-responsive layout (412px viewport)
- [ ] Image fallbacks for missing images

---

## PARALLEL EXECUTION (Wave Batching)

Steps that can run in parallel:

```
Wave 1: Step 1 (discover)           — must be first
Wave 2: Step 2 (types)              — depends on Step 1
Wave 3: Step 3 (store) + Step 7 (route)  — both depend on Step 2, not each other
Wave 4: Step 4 (list) + Step 5 (detail) + Step 6 (form)  — all depend on Step 3
Wave 5: Step 8 (index)              — depends on Steps 2-3
Wave 6: Step 9 (verify) + Step 10 (review)  — final
```

---

_Claude-Frontend Master Manual V2.0 (2026-04-08)_
