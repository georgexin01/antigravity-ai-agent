# VUE-TS MASTERY: Sovereign AI-Interaction Rules

This document defines the mandatory patterns for TypeScript usage in Vue 3 (Script Setup) for the Antigravity system. Adherence to these rules ensures architectural integrity and zero-any compliance.

## 1. The Core Directives (Rule of Zero)

1.  **NO `any`**: The use of `any` is strictly prohibited in source code.
    - If a type is unknown (e.g., Error, API response), use `unknown` and implement type guards.
    - If a library is missing types, create a `.d.ts` shim.
2.  **INTERFACE-FIRST**: Always define the data model in `@/types` BEFORE implementing the logic.
3.  **EXPLICIT BINDING**: Every `ref`, `computed`, and `defineProps` must be explicitly typed.
4.  **SIGNATURE MANDATE**: All functions (internal or exported) must have explicit parameter and return types.

---

## 2. Store Architecture (Pinia Best Practices)

Inspired by the `Bakery-v2` pattern, all stores should follow this high-density layout:

### 2.1 State Typing
Avoid implicit typing. Use type assertions for empty arrays.
```typescript
state: () => ({
  items: [] as Course[], // ✅ Explicit
  user: null as User | null, // ✅ Explicit
})
```

### 2.2 Action Integrity
Every action must declare its return type, especially if asynchronous.
```typescript
async function fetchItems(): Promise<Course[]> {
  const { data, error } = await supabase.from('...').select('*');
  if (error) return [];
  return (data as DBItem[]).map(transform); // ✅ Cast raw data to DB type immediately
}
```

---

## 3. Data Transformation Layer (Hydration)

Never use raw DB objects directly in the UI. Always implement a transformation function.

### 3.1 Mapping Pattern
```typescript
/** DB type — raw input */
interface DBPet { id: string; pet_name: string; }

/** App type — transformed for UI */
interface Pet { id: string; name: string; }

function dbToPet(raw: DBPet): Pet {
  return {
    id: raw.id,
    name: raw.pet_name
  };
}
```

---

## 4. Vue Component Standards (Script Setup)

### 4.1 Ref & Computed Binding
```vue
<script setup lang="ts">
import type { User } from '@/types';

// ✅ Explicit Refs
const user = ref<User | null>(null);
const list = ref<string[]>([]);

// ✅ Explicit Computed
const isActive = computed<boolean>(() => !!user.value);

// ✅ Typed Prop Handling
const props = defineProps<{
  id: string;
  count?: number;
}>();
</script>
```

### 4.2 Safe Error Handling
```typescript
try {
  await someAsyncAction();
} catch (err: unknown) {
  const msg = err instanceof Error ? err.message : 'Unknown Error';
  console.error(msg);
}
```

---

## 5. AI Prompt Guidance for Claude/Gemini

When asking the AI to build features, use these "Master Hooks":
- *"Analyze @/types/X.ts before implementing the UI."*
- *"Ensure zero-any compliance in the new store."*
- *"Use explicit return types for the transformation logic."*
