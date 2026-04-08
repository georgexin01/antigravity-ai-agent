# Pinia Store Pipeline: Supabase CRUD Store (V2.0)

> **Location**: `src/stores/{entity}.ts`
> **Rule**: One Entity = One Store. Setup syntax only. $reset required.
> **API**: Supabase PostgREST via Axios (requestClient)

---

## 1. COMPLETE STORE TEMPLATE

```typescript
// src/stores/{entity}.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { requestClient } from '@/api/request'
import type { Entity, EntityView, EntityFormValues } from '@/types'

// ---- DB -> App Transforms ----

function toView(raw: Entity): EntityView {
  return {
    id: raw.id,
    name: raw.name,
    // ... transform fields for UI
    createdAt: new Date(raw.created_at).toLocaleDateString(),
  }
}

// ---- Store ----

export const useEntityStore = defineStore('entity', () => {
  // --- State ---
  const items = ref<EntityView[]>([])
  const current = ref<EntityView | null>(null)
  const loading = ref(false)

  // --- Actions ---

  /** Fetch all active (non-deleted) records */
  async function getList(): Promise<EntityView[]> {
    loading.value = true
    try {
      const data: Entity[] = await requestClient.get('/entity', {
        params: {
          select: '*',
          is_delete: 'eq.false',
          status: 'eq.1',
          order: 'created_at.desc',
        },
      })
      items.value = data.map(toView)
      return items.value
    } catch (error) {
      console.error('Failed to fetch entity list:', error)
      items.value = []
      return []
    } finally {
      loading.value = false
    }
  }

  /** Fetch single record by ID */
  async function getDetail(id: string): Promise<EntityView | null> {
    // Check local cache first
    const cached = items.value.find((item) => item.id === id)
    if (cached) {
      current.value = cached
      return cached
    }
    // Fetch from API
    loading.value = true
    try {
      const data: Entity = await requestClient.get('/entity', {
        params: { select: '*', id: `eq.${id}` },
        headers: { Accept: 'application/vnd.pgrst.object+json' },
      })
      current.value = toView(data)
      return current.value
    } catch (error) {
      console.error('Failed to fetch entity detail:', error)
      current.value = null
      return null
    } finally {
      loading.value = false
    }
  }

  /** Create new record */
  async function create(values: EntityFormValues): Promise<Entity | null> {
    try {
      const [data]: Entity[] = await requestClient.post('/entity', values, {
        headers: { Prefer: 'return=representation' },
      })
      // Refresh list to include new record
      await getList()
      return data
    } catch (error) {
      console.error('Failed to create entity:', error)
      return null
    }
  }

  /** Update existing record */
  async function update(id: string, values: Partial<EntityFormValues>): Promise<Entity | null> {
    try {
      const [data]: Entity[] = await requestClient.patch('/entity', {
        ...values,
        updated_at: new Date().toISOString(),
      }, {
        params: { id: `eq.${id}` },
        headers: { Prefer: 'return=representation' },
      })
      // Refresh list
      await getList()
      return data
    } catch (error) {
      console.error('Failed to update entity:', error)
      return null
    }
  }

  /** Soft delete (set is_delete = true) */
  async function remove(id: string): Promise<boolean> {
    try {
      await requestClient.patch('/entity', {
        is_delete: true,
        updated_at: new Date().toISOString(),
      }, {
        params: { id: `eq.${id}` },
      })
      // Remove from local state
      items.value = items.value.filter((item) => item.id !== id)
      if (current.value?.id === id) {
        current.value = null
      }
      return true
    } catch (error) {
      console.error('Failed to delete entity:', error)
      return false
    }
  }

  /** Toggle status (active/disabled) */
  async function toggleStatus(id: string, newStatus: number): Promise<boolean> {
    try {
      await requestClient.patch('/entity', {
        status: newStatus,
        updated_at: new Date().toISOString(),
      }, {
        params: { id: `eq.${id}` },
      })
      await getList()
      return true
    } catch (error) {
      console.error('Failed to toggle status:', error)
      return false
    }
  }

  // --- Required $reset ---
  function $reset() {
    items.value = []
    current.value = null
    loading.value = false
  }

  return {
    // State
    items,
    current,
    loading,
    // Actions
    getList,
    getDetail,
    create,
    update,
    remove,
    toggleStatus,
    // Reset
    $reset,
  }
})
```

---

## 2. STORE WITH FK JOINS

When an entity has foreign keys, fetch joined data:

```typescript
// src/stores/students.ts

async function getList(): Promise<StudentView[]> {
  loading.value = true
  try {
    // PostgREST join syntax: parent:fkColumn(fields)
    const data: StudentWithTeacher[] = await requestClient.get('/students', {
      params: {
        select: '*,teacher:teacherId(id,name)',
        is_delete: 'eq.false',
        order: 'created_at.desc',
      },
    })
    items.value = data.map((raw) => ({
      id: raw.id,
      name: raw.name,
      email: raw.email,
      teacherName: raw.teacher?.name ?? 'Unassigned',
      status: raw.status,
      createdAt: new Date(raw.created_at).toLocaleDateString(),
    }))
    return items.value
  } catch (error) {
    console.error('Failed to fetch students:', error)
    items.value = []
    return []
  } finally {
    loading.value = false
  }
}
```

---

## 3. CROSS-STORE DEPENDENCIES

When one store needs data from another:

```typescript
// Inside students store
async function getListWithOptions(): Promise<StudentView[]> {
  const teacherStore = useTeacherStore()

  // Fetch in parallel if both needed
  await Promise.all([
    getList(),
    teacherStore.getList(),
  ])

  return items.value
}
```

**Rule**: Import the other store inside the action function, NOT at the top level.
This prevents circular dependency issues.

---

## 4. DB -> APP TRANSFORM PATTERNS

| DB Field | App Transform | Example |
|----------|--------------|---------|
| `created_at` (ISO string) | Formatted date | `new Date(raw.created_at).toLocaleDateString()` |
| `images` (string[]) | First image or fallback | `raw.images[0] ?? '/default-avatar.png'` |
| `status` (number) | Label string | `raw.status === 1 ? 'Active' : 'Disabled'` |
| `numeric(12,2)` | Formatted money | `RM ${raw.amount.toFixed(2)}` |
| FK join object | Display name | `raw.teacher?.name ?? 'Unassigned'` |
| `null` array | Empty array | `raw.tags ?? []` |

---

## 5. STORE CHECKLIST

Before completing a store, verify:

- [ ] `defineStore` uses setup syntax `('name', () => { ... })`
- [ ] `$reset()` function exists and resets ALL refs
- [ ] `$reset()` is returned from the store
- [ ] All async actions have try/catch
- [ ] `loading` ref is set true/false in getList/getDetail
- [ ] `getList()` filters `is_delete=eq.false`
- [ ] `getDetail()` checks local cache before API call
- [ ] `create()` returns the created record and refreshes list
- [ ] `update()` sets `updated_at` and refreshes list
- [ ] `remove()` does soft delete (not hard delete)
- [ ] DB -> App transform function is separate and testable
- [ ] FK joins use PostgREST syntax `parent:fkColumn(fields)`

---

## 6. NAMING CONVENTIONS

| Item | Convention | Example |
|------|-----------|---------|
| Store file | `src/stores/{entity}.ts` | `src/stores/lessons.ts` |
| Store name | `use{Entity}Store` | `useLessonsStore` |
| defineStore ID | kebab-case singular or plural | `'lessons'` |
| List state | `items` | `const items = ref<EntityView[]>([])` |
| Single state | `current` | `const current = ref<EntityView \| null>(null)` |
| Loading state | `loading` | `const loading = ref(false)` |
| Fetch list | `getList()` | Returns transformed array |
| Fetch detail | `getDetail(id)` | Returns single transformed item |
| Create | `create(values)` | Takes FormValues, returns DB record |
| Update | `update(id, values)` | Takes partial FormValues |
| Delete | `remove(id)` | Soft delete, returns boolean |

---

_Claude-Frontend Master Manual V2.0 (2026-04-08)_
