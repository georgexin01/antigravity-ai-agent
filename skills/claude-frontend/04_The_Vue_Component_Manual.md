# Vue Component Manual: View Architecture (V2.0)

> **Style**: `<script setup lang="ts">`
> **Lifecycle**: `onMounted` -> Store Trigger -> Reactive UI
> **Rule**: Follow the 1-to-6 Order strictly. No exceptions.

---

## 1. THE 1-TO-6 ORDER OF OPERATIONS

Every Vue component MUST follow this exact ordering in `<script setup>`:

```typescript
// ========================================
// 1. IMPORTS
// ========================================
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useLessonsStore } from '@/stores/lessons'
import type { Course } from '@/types'
// UI components last
import LoadingSpinner from '@/components/LoadingSpinner.vue'

// ========================================
// 2. DEFINES (props, emits, slots)
// ========================================
interface Props {
  entityId?: string
  mode?: 'page' | 'embedded'
}
const props = withDefaults(defineProps<Props>(), {
  entityId: '',
  mode: 'page',
})
const emit = defineEmits<{
  selected: [item: Course]
}>()

// ========================================
// 3. STORES
// ========================================
const router = useRouter()
const route = useRoute()
const lessonsStore = useLessonsStore()

// ========================================
// 4. LOCAL STATE
// ========================================
const loading = ref(false)
const searchQuery = ref('')
const { items, current } = storeToRefs(lessonsStore)

const filteredItems = computed(() =>
  items.value.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
  ),
)

// ========================================
// 5. LIFECYCLE
// ========================================
onMounted(async () => {
  loading.value = true
  try {
    await lessonsStore.getList()
  } finally {
    loading.value = false
  }
})

// ========================================
// 6. FUNCTIONS (event handlers)
// ========================================
function handleSelect(item: Course) {
  if (props.mode === 'embedded') {
    emit('selected', item)
  } else {
    router.push(`/courses/${item.id}`)
  }
}

function handleDelete(id: string) {
  // confirm then delete
}
```

---

## 2. LIST VIEW TEMPLATE PATTERN

```vue
<!-- views/{entity}/list.vue -->
<script setup lang="ts">
// ... 1-to-6 order as above
</script>

<template>
  <div class="p-4">
    <!-- Search -->
    <div class="mb-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search..."
        class="w-full rounded-lg border p-2"
      />
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center py-8">
      <LoadingSpinner />
    </div>

    <!-- Empty State -->
    <div v-else-if="filteredItems.length === 0" class="py-8 text-center text-gray-500">
      No records found
    </div>

    <!-- Card Grid -->
    <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="item in filteredItems"
        :key="item.id"
        class="cursor-pointer rounded-lg border p-4 transition hover:shadow-md"
        @click="handleSelect(item)"
      >
        <img
          v-if="item.image"
          :src="item.image"
          :alt="item.title"
          class="mb-3 h-40 w-full rounded-md object-cover"
        />
        <h3 class="text-lg font-semibold">{{ item.title }}</h3>
        <p class="text-sm text-gray-500">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
```

---

## 3. DETAIL VIEW TEMPLATE PATTERN

```vue
<!-- views/{entity}/detail.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLessonsStore } from '@/stores/lessons'
import type { Course } from '@/types'

interface Props {
  entityId?: string
  mode?: 'page' | 'embedded'
}
const props = withDefaults(defineProps<Props>(), {
  entityId: '',
  mode: 'page',
})

const route = useRoute()
const router = useRouter()
const lessonsStore = useLessonsStore()

const loading = ref(false)
const item = ref<Course | null>(null)

// Resolve ID from props (embedded) or route (page)
const resolvedId = props.mode === 'embedded'
  ? props.entityId
  : (route.params.id as string)

onMounted(async () => {
  if (!resolvedId) return
  loading.value = true
  try {
    item.value = await lessonsStore.getDetail(resolvedId)
  } finally {
    loading.value = false
  }
})

function handleBack() {
  router.back()
}
</script>

<template>
  <div class="p-4">
    <!-- Back button (page mode only) -->
    <button v-if="mode === 'page'" class="mb-4 text-blue-500" @click="handleBack">
      &larr; Back
    </button>

    <div v-if="loading" class="py-8 text-center">Loading...</div>

    <div v-else-if="!item" class="py-8 text-center text-gray-500">
      Record not found
    </div>

    <div v-else>
      <h1 class="mb-2 text-2xl font-bold">{{ item.title }}</h1>
      <p class="text-gray-600">{{ item.description }}</p>
      <!-- ... more fields -->
    </div>
  </div>
</template>
```

---

## 4. FORM VIEW TEMPLATE PATTERN

```vue
<!-- views/{entity}/form.vue -->
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useEntityStore } from '@/stores/entity'
import type { EntityFormValues, Entity } from '@/types'

interface Props {
  entity?: Entity | null   // null = create mode, object = edit mode
}
const props = withDefaults(defineProps<Props>(), {
  entity: null,
})

const emit = defineEmits<{
  submit: [values: EntityFormValues]
  cancel: []
}>()

const entityStore = useEntityStore()

// Form state (initialize with empty values)
const form = ref<EntityFormValues>({
  title: '',
  description: '',
  duration: 0,
})

const submitting = ref(false)

// Watch for entity changes (edit mode)
watch(
  () => props.entity,
  (entity) => {
    if (entity) {
      form.value = {
        title: entity.title,
        description: entity.description,
        duration: entity.duration,
      }
    }
  },
  { immediate: true },
)

async function handleSubmit() {
  submitting.value = true
  try {
    if (props.entity) {
      // Edit mode
      await entityStore.update(props.entity.id, form.value)
    } else {
      // Create mode
      await entityStore.create(form.value)
    }
    emit('submit', form.value)
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <form class="space-y-4 p-4" @submit.prevent="handleSubmit">
    <div>
      <label class="mb-1 block text-sm font-medium">Title</label>
      <input
        v-model="form.title"
        type="text"
        required
        class="w-full rounded-lg border p-2"
      />
    </div>

    <div>
      <label class="mb-1 block text-sm font-medium">Description</label>
      <textarea
        v-model="form.description"
        rows="3"
        class="w-full rounded-lg border p-2"
      />
    </div>

    <div class="flex gap-2">
      <button
        type="submit"
        :disabled="submitting"
        class="rounded-lg bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
      >
        {{ props.entity ? 'Save' : 'Create' }}
      </button>
      <button
        type="button"
        class="rounded-lg border px-4 py-2"
        @click="emit('cancel')"
      >
        Cancel
      </button>
    </div>
  </form>
</template>
```

---

## 5. LOADING & ERROR STATE RULES

| State | Pattern | UI |
|-------|---------|-----|
| Loading (initial) | `v-if="loading"` | Spinner or skeleton |
| Empty data | `v-else-if="items.length === 0"` | "No records found" message |
| Has data | `v-else` | Render content |
| Error | Store catches, logs, sets empty state | Component shows empty state |
| Submitting | `submitting` ref disables button | `:disabled="submitting"` |

**Rule**: Always use `v-if` / `v-else-if` / `v-else` chain. Never show stale data while loading.

---

## 6. IMAGE FALLBACK PATTERN

```typescript
// Fallback: Letter avatar when no image
const getAvatar = (name: string, image?: string) => {
  if (image) return image
  const letter = name.charAt(0).toUpperCase()
  return `https://ui-avatars.com/api/?name=${letter}&background=random&size=128`
}
```

```html
<img
  :src="getAvatar(item.name, item.image)"
  :alt="item.name"
  class="h-12 w-12 rounded-full object-cover"
  @error="(e) => (e.target as HTMLImageElement).src = '/fallback.png'"
/>
```

---

## 7. MOBILE-FIRST RESPONSIVE

WebApps are mobile-first. Use this grid pattern:

```html
<!-- 1 col mobile, 2 col tablet, 3 col desktop -->
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
```

**Viewport**: All WebApps use `width=412` (Samsung S20 Ultra) not `device-width`:
```html
<meta name="viewport" content="width=412, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
```

---

_Claude-Frontend Master Manual V2.0 (2026-04-08)_
