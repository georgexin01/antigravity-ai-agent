# Data Model DNA: TypeScript Interfaces (V2.0)

> **Location**: `src/types/{entity}.ts`
> **Re-export**: `src/types/index.ts`
> **Rule**: Every entity has TWO interfaces: DB type (raw) + App type (transformed)

---

## 1. THE DUAL-INTERFACE PATTERN

Every entity needs two interfaces:

```typescript
// src/types/lessons.ts

/** DB type - raw record from Supabase (matches SQL columns exactly) */
export interface Lesson {
  id: string              // uuid PK
  title: string
  description: string
  duration: number
  sort: number
  images: string[]        // jsonb -> string[]
  video: string
  status: number          // 1=Active, 0=Disabled
  is_delete: boolean      // Soft delete flag
  created_at: string      // ISO timestamp
  updated_at: string      // ISO timestamp
}

/** App type - transformed for UI consumption */
export interface Course {
  id: string
  title: string
  description: string
  duration: string        // "3 hrs" (formatted)
  questionsCount: number  // computed from other data
  image: string           // first image from array
  tag?: string            // computed from sort
  progress?: number       // computed from user data
}
```

**Why two interfaces?**
- DB type = 1:1 mirror of the SQL columns. Never modify this based on UI needs.
- App type = what the Vue component actually renders. Can have computed/formatted fields.
- The **store** is responsible for transforming DB -> App.

---

## 2. THE GOLDEN FIVE COLUMNS

Every Supabase table includes these 5 system columns. They MUST appear in every DB interface:

| Column | TS Type | SQL Type | Default | Purpose |
|--------|---------|----------|---------|---------|
| `id` | `string` | `uuid` | `gen_random_uuid()` | Primary key |
| `status` | `number` | `int` | `1` | 1=Active, 0=Disabled |
| `is_delete` | `boolean` | `boolean` | `false` | Soft delete flag |
| `created_at` | `string` | `timestamptz` | `now()` | Creation timestamp |
| `updated_at` | `string` | `timestamptz` | `now()` | Last update timestamp |

---

## 3. SQL-TO-TYPESCRIPT TYPE MAPPING

| SQL Type | TypeScript Type | Notes |
|----------|----------------|-------|
| `uuid` | `string` | Always string, never custom UUID type |
| `text` / `varchar` | `string` | |
| `integer` / `int4` | `number` | |
| `numeric(12,2)` | `number` | Money fields |
| `boolean` | `boolean` | |
| `timestamptz` | `string` | ISO format string |
| `jsonb` | `Record<string, any>` or typed | Define specific type if structure is known |
| `text[]` | `string[]` | PostgreSQL array |
| `jsonb` (array) | `string[]` | When storing array of strings |

---

## 4. FK RELATIONSHIP INTERFACES

When a table has foreign keys, include the join type:

```typescript
// src/types/students.ts

/** DB type - raw from Supabase */
export interface Student {
  id: string
  name: string
  email: string
  teacherId: string           // FK -> teachers.id
  status: number
  is_delete: boolean
  created_at: string
  updated_at: string
}

/** DB type with FK join (from PostgREST ?select=*,teacher:teacherId(*)) */
export interface StudentWithTeacher extends Student {
  teacher: {
    id: string
    name: string
  } | null
}

/** App type for UI */
export interface StudentView {
  id: string
  name: string
  email: string
  teacherName: string         // Resolved from join
  status: number
  createdAt: string           // Formatted date
}
```

---

## 5. FORM VALUE INTERFACES

For create/edit forms, define a separate FormValues type (subset of DB columns):

```typescript
/** Form values for create/edit (excludes system columns) */
export interface LessonFormValues {
  title: string
  description: string
  duration: number
  sort: number
  images: string[]
  video: string
}
```

**Rule**: FormValues NEVER includes: `id`, `status`, `is_delete`, `created_at`, `updated_at`.
These are managed by the database or the store's create/update actions.

---

## 6. AUTH INTERFACES (Standard)

```typescript
// src/types/auth.ts

export interface LoginParams {
  email: string
  password: string
}

export interface LoginResult {
  accessToken: string
  id: string
  agentId: string
  name: string
  nameEn: string
  title: string
  titleEn: string
  avatar: string
}

export interface UserInfoResult {
  id: string
  agentId: string
  name: string
  nameEn: string
  title: string
  titleEn: string
  avatar: string
}

export interface UserProfile {
  id: string
  agentId: string
  name: string
  nameEn: string
  title: string
  titleEn: string
  avatar: string
  monthlyProgress: number
  completedModules: number
  totalModules: number
  remainingHours: number
}
```

---

## 7. INDEX RE-EXPORT

```typescript
// src/types/index.ts
export type { LoginParams, LoginResult, UserInfoResult, UserProfile } from './auth'
export type { Lesson, Course } from './lessons'
export type { Student, StudentWithTeacher, StudentView, StudentFormValues } from './students'
// ... add each entity type here
```

---

## 8. NULLABLE FIELDS CONVENTION

```typescript
// Optional field that may be null from DB
email?: string | null

// Required field that is always present
name: string

// Array that defaults to empty
images: string[]  // Never null, use [] as default in store transform
```

**Rule**: Prefer `string[]` over `string[] | null`. Transform nulls to `[]` in the store.

---

_Claude-Frontend Master Manual V2.0 (2026-04-08)_
