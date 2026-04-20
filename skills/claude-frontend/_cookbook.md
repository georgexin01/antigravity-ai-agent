---
name: claude-frontend-cookbook
description: "Reusable snippets referenced by multiple step files. Keeps per-step files lean; avoid duplicating these patterns. Linked from SKILL.md and individual steps."
triggers: ["cookbook", "frontend cookbook", "reusable snippets", "pagination", "seo head"]
phase: reference
version: 2.0
status: authoritative
last_updated: "2026-04-20"
---

# claude-frontend — Cookbook

Reusable snippets that span multiple step files. Each recipe lives here once; step files reference by anchor (e.g., Step 01 points at [§SEO-Head](#seo-head)).

---

## SEO-Head
<a name="seo-head"></a>

Full `index.html` head block with SEO + Open Graph + Twitter + JSON-LD. Step 01 Code Vault §4 ships the essentials; use this when a site needs full social + crawler metadata.

```html
<head>
  <meta charset="UTF-8">

  <!-- SEO -->
  <meta name="robots" content="noindex,nofollow">
  <meta name="description" content="PROJECT_DESCRIPTION">
  <meta name="keywords" content="KEYWORDS">
  <link rel="canonical" href="https://PROJECT_URL/">

  <!-- PWA + viewport (width=412 per global rule) -->
  <meta name="viewport" content="width=412, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="theme-color" content="#PRIMARY_HEX" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#PRIMARY_DARK_HEX" media="(prefers-color-scheme: dark)">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://PROJECT_URL/">
  <meta property="og:title" content="PROJECT_TITLE">
  <meta property="og:description" content="PROJECT_DESCRIPTION">
  <meta property="og:image" content="https://PROJECT_URL/assets/favicon/web-app-manifest-512x512.png">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://PROJECT_URL/">
  <meta name="twitter:title" content="PROJECT_TITLE">
  <meta name="twitter:description" content="PROJECT_DESCRIPTION">

  <!-- JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "PROJECT_TITLE",
    "description": "PROJECT_DESCRIPTION",
    "url": "https://PROJECT_URL/",
    "applicationCategory": "education",
    "operatingSystem": "Any",
    "offers": {"@type": "Offer", "price": "0", "priceCurrency": "USD"}
  }
  </script>

  <link rel="manifest" href="/site.webmanifest">
  <link rel="icon" type="image/svg+xml" href="/assets/favicon/favicon.svg">
  <title>PROJECT_TITLE</title>
</head>
```

## Pagination
<a name="pagination"></a>

Cursor-style pagination over a Bakery store (Step 06). PostgREST uses `range()` — offset + limit inline.

```ts
// In a store action:
async getPage(userId: string, page = 1, pageSize = 20) {
  if (!userId) { this.items = []; return; }

  const from = (page - 1) * pageSize;
  const to   = from + pageSize - 1;

  try {
    // Parallel: data + count
    const [rowsRes, countRes] = await Promise.all([
      supabase.from('lessons')
        .select('*')
        .eq('userId', userId).eq('isDelete', false)
        .order('createdAt', { ascending: false })
        .range(from, to),
      supabase.from('lessons')
        .select('id', { count: 'exact', head: true })
        .eq('userId', userId).eq('isDelete', false),
    ]);
    if (rowsRes.error) throw rowsRes.error;

    this.items     = (rowsRes.data || []).map(dbToApp);
    this.total     = countRes.count ?? 0;
    this.page      = page;
    this.pageSize  = pageSize;
    this.hasMore   = to + 1 < this.total;
  } catch (err) {
    console.error('[lessons] getPage failed:', err);
    this.items = [];
  }
}
```

## Fail-Closed Guard (view-level)
<a name="fail-closed-guard"></a>

Standard `onMounted` for any protected route. Referenced from Steps 09 and 11.

```ts
onMounted(async () => {
  loading.value = true;
  try {
    await authStore.fetchUser();
    if (!authStore.user?.id) {
      return router.replace('/login');     // unauthed → login
    }

    const result = await store.getDetail(
      route.params.id as string,
      authStore.user.id,
    );
    if (!result) {
      return router.replace('/courses');   // missing or unassigned → list
    }
    item.value = result;
  } catch (err) {
    console.error('[view] onMounted failed:', err);
    router.replace('/courses');
  } finally {
    loading.value = false;
  }
});
```

## Soft-Delete Filter (store action snippet)
<a name="soft-delete-filter"></a>

Every query against a `quizLaa.*` business table includes `.eq('isDelete', false)`. Step 06 enforces it per-store; include in any new action.

```ts
const { data, error } = await supabase
  .from('<table>')
  .select('*')
  .eq('userId', userId)
  .eq('isDelete', false);    // ← always
```

## Bakery Store Template
<a name="bakery-store"></a>

See Step 06 Code Vault §1 for the canonical template. Condensed reminder:

```ts
export const useXStore = defineStore('x', {
  state: () => ({ items: [] as X[], current: null as X | null }),
  actions: {
    async getList(userId?: string): Promise<X[]> {
      if (!userId) { this.items = []; return []; }
      try {
        const { data, error } = await supabase
          .from('x_table').select('*')
          .eq('userId', userId).eq('isDelete', false);
        if (error) throw error;
        this.items = (data || []).map(dbToX);
        return this.items;
      } catch (err) { console.error(err); this.items = []; return []; }
    },
    $reset() { this.items = []; this.current = null; },
  },
});
```

## Two-Query Join (avoid embedded selects on local Docker)
<a name="two-query-join"></a>

Local Docker Supabase's FK schema cache is flaky — `.select('*, parent(name)')` often returns PGRST200. Always two-query + Map lookup.

```ts
// 1. Children
const { data: children } = await supabase.from('questions')
  .select('id, lessonId, text').eq('isDelete', false);

// 2. Parents (deduped)
const parentIds = [...new Set(children!.map((c) => c.lessonId))];
const { data: parents } = await supabase.from('lessons')
  .select('id, title').in('id', parentIds).eq('isDelete', false);

// 3. Fold via Map
const parentMap = new Map(parents!.map((p) => [p.id, p.title]));
return children!.map((c) => ({ ...c, parentTitle: parentMap.get(c.lessonId) ?? '' }));
```

## Intersection Filter (assignment + non-empty)
<a name="intersection-filter"></a>

Showing lessons that are BOTH assigned to this user AND have ≥1 question. Referenced from Steps 06 and 11.

```ts
// A: lessonIds with ≥1 question
const { data: q } = await supabase.from('questions')
  .select('lessonId').eq('isDelete', false);
const hasQs = new Set((q || []).map((r) => r.lessonId));

// B: lessonIds assigned to this user
const { data: a } = await supabase.from('user_lessons')
  .select('lessonId').eq('userId', userId).eq('isDelete', false);
const assigned = new Set((a || []).map((r) => r.lessonId));

// Intersect
const allowedIds = [...assigned].filter((id) => hasQs.has(id));
```

## JWT Decode (extract a single claim)
<a name="jwt-decode"></a>

Used in Step 04 auth store for project-context switching.

```ts
function getJwtClaim(token: string, claim: string): string | undefined {
  try {
    const payload = JSON.parse(atob(token.split('.')[1] ?? ''));
    return payload[claim];
  } catch {
    return undefined;
  }
}
```

## Toast via useUiStore
<a name="toast"></a>

Feedback for all user-visible success/error moments. Referenced from Steps 04 / 09.

```ts
import { useUiStore } from '@/stores';
const ui = useUiStore();

ui.addToast('Saved',   'Your changes were saved.',   'success');
ui.addToast('Error',   'Something went wrong.',      'error');
ui.addToast('Info',    'New version available.',     'info');
```

## Resetting Pinia on Logout
<a name="reset-all-stores"></a>

Every store must implement `$reset()`. `resetAllStores()` iterates the active Pinia registry. Called from `authStore.logout()`.

```ts
import { getActivePinia } from 'pinia';

export function resetAllStores() {
  const pinia: any = getActivePinia();
  pinia?._s?.forEach((store: any) => store.$reset?.());
}
```

## Mobile Shell (max-w-[480px] + sticky header + bottom nav)
<a name="mobile-shell"></a>

See Step 08 Code Vault §1. Condensed:

```vue
<div class="relative flex min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-background-dark">
  <header class="sticky top-0 z-50 ..."></header>
  <main   class="flex-1 overflow-y-auto pb-24"></main>
  <nav    class="fixed bottom-0 w-full max-w-[480px] ..."></nav>
</div>
```
