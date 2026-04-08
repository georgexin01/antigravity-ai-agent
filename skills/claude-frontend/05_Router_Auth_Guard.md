# Router & Auth Guard: Navigation System (V2.0)

> **Location**: `src/router/index.ts`
> **Auth Storage**: `localStorage.accessToken` (JWT from Supabase)
> **Guard Rule**: All routes require auth unless `meta.requiresAuth: false`

---

## 1. COMPLETE ROUTER TEMPLATE

```typescript
// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // ---- Public Routes (no auth) ----
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue'),
      meta: { requiresAuth: false },
    },

    // ---- Protected Routes ----
    {
      path: '/courses',
      name: 'CourseList',
      component: () => import('@/views/courses/list.vue'),
      meta: { requiresAuth: true, title: 'Courses' },
    },
    {
      path: '/courses/:id',
      name: 'CourseDetail',
      component: () => import('@/views/courses/detail.vue'),
      meta: { requiresAuth: true, title: 'Course Detail' },
    },

    // ---- Default Redirects ----
    {
      path: '/',
      redirect: '/courses', // Default landing after login
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/login', // Catch-all -> login
    },
  ],
})

// ---- Auth Navigation Guard ----
router.beforeEach((to) => {
  const token = localStorage.getItem('accessToken')
  const isAuthenticated = !!token

  // Redirect to login if not authenticated
  if (to.meta.requiresAuth && !isAuthenticated) {
    return { name: 'Login', query: { redirect: to.fullPath } }
  }

  // Redirect to home if already logged in and trying to access login
  if (to.name === 'Login' && isAuthenticated) {
    return { name: 'CourseList' }
  }

  return true
})

export default router
```

---

## 2. ROUTE DEFINITION RULES

### Naming Conventions:

| Element | Convention | Example |
|---------|-----------|---------|
| Route `name` | PascalCase | `CourseList`, `CourseDetail` |
| Route `path` | kebab-case | `/courses`, `/courses/:id` |
| Component path | kebab-case folder + file | `@/views/courses/list.vue` |
| Dynamic params | camelCase | `:id`, `:lessonId` |

### Meta Fields:

```typescript
interface RouteMeta {
  requiresAuth: boolean    // true for protected routes
  title?: string           // Page title (for document.title)
  roles?: string[]         // Role-based access (optional)
  keepAlive?: boolean      // Cache component (optional)
}
```

---

## 3. ADDING A NEW MODULE'S ROUTES

When adding a new entity module, add routes in this order:

```typescript
// 1. List route (main entry)
{
  path: '/{entity}',
  name: '{Entity}List',
  component: () => import('@/views/{entity}/list.vue'),
  meta: { requiresAuth: true, title: '{Entity}' },
},

// 2. Detail route (with dynamic ID)
{
  path: '/{entity}/:id',
  name: '{Entity}Detail',
  component: () => import('@/views/{entity}/detail.vue'),
  meta: { requiresAuth: true, title: '{Entity} Detail' },
},

// 3. Create route (optional - if not using modal/drawer)
{
  path: '/{entity}/create',
  name: '{Entity}Create',
  component: () => import('@/views/{entity}/form.vue'),
  meta: { requiresAuth: true, title: 'Create {Entity}' },
},

// 4. Edit route (optional - if not using modal/drawer)
{
  path: '/{entity}/:id/edit',
  name: '{Entity}Edit',
  component: () => import('@/views/{entity}/form.vue'),
  meta: { requiresAuth: true, title: 'Edit {Entity}' },
},
```

---

## 4. AUTH FLOW (JWT Token Lifecycle)

```
1. User enters email/password on Login page
2. authStore.login() -> POST /auth/v1/token?grant_type=password
3. Supabase returns { access_token, refresh_token, user }
4. Store access_token in localStorage
5. Axios interceptor adds: Authorization: Bearer {access_token}
6. On 401 response -> clear token + redirect to /login
7. On logout -> POST /auth/v1/logout + clear token + redirect
```

### Login Page Integration:

```typescript
// In login/index.vue
async function handleLogin() {
  try {
    await authStore.login({ email: email.value, password: password.value })
    // authStore.login handles redirect to /courses
  } catch (error) {
    errorMessage.value = 'Invalid email or password'
  }
}
```

### Post-Login Redirect:

```typescript
// In authStore.login():
const redirect = router.currentRoute.value.query.redirect as string
router.push(redirect || '/courses')
```

---

## 5. ROLE-BASED ACCESS (Optional)

For apps with role-based routing:

```typescript
// In router guard:
router.beforeEach(async (to) => {
  const token = localStorage.getItem('accessToken')
  if (!token && to.meta.requiresAuth) {
    return { name: 'Login' }
  }

  // Check role if route requires specific roles
  if (to.meta.roles && to.meta.roles.length > 0) {
    const authStore = useAuthStore()
    if (!authStore.user) {
      await authStore.fetchUser()
    }
    const userRole = authStore.user?.role
    if (!to.meta.roles.includes(userRole)) {
      return { name: 'Forbidden' } // or redirect to home
    }
  }

  return true
})
```

---

## 6. NAVIGATION PATTERNS IN COMPONENTS

```typescript
// Programmatic navigation
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Navigate to detail
router.push(`/courses/${item.id}`)

// Navigate with route name
router.push({ name: 'CourseDetail', params: { id: item.id } })

// Go back
router.back()

// Read route param
const courseId = route.params.id as string

// Read query param
const redirect = route.query.redirect as string
```

---

_Claude-Frontend Master Manual V2.0 (2026-04-08)_
