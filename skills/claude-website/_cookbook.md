---
name: claude-website-cookbook
description: "Reusable PHP snippets referenced by multiple step files. Keeps per-step files lean; avoid duplicating. Linked from SKILL.md and individual steps."
triggers: ["cookbook", "website cookbook", "reusable snippets", "sovereign query", "model format", "static passthrough"]
phase: reference
version: 2.0
status: authoritative
last_updated: "2026-04-20"
---

# claude-website — Cookbook

Reusable PHP snippets that span multiple step files. Each recipe lives here once; step files reference by anchor.

---

## SovereignQuery chain — common shapes
<a name="sovereign-query"></a>

Full docs in Step 07. Patterns you'll reach for often:

```php
// LIST — non-deleted, ordered, first 20
$rows = $api->from('agent_profiles')
    ->select('id, display_name, bio')
    ->eq('isDelete', false)
    ->order('display_name')
    ->limit(20)
    ->get();

// SINGLE — envelope-guarded, returns the row or null
$row = $api->from('agent_profiles')
    ->select('*')
    ->eq('id', $id)
    ->single()
    ->get();

// SINGLE with OR — UUID (profile.id) OR user_id
$row = $api->from('agent_profiles')
    ->select('*')
    ->eq('isDelete', false)
    ->or("id.eq.{$id},user_id.eq.{$id}")
    ->limit(1)
    ->single()
    ->get();

// PAGINATE — offset + limit combined
$rows = $api->from('agent_reviews')
    ->select('*')
    ->eq('agent_profile_id', $profileId)
    ->eq('isDelete', false)
    ->order('review_date', false)    // false = desc
    ->range(0, 9)                    // first page, 10 items
    ->get();

// INSERT
$api->from('agent_leads')->insert([
    'agent_profile_id' => $profileId,
    'name'             => 'Test',
    'isDelete'         => false,
]);

// UPDATE
$api->from('agent_profiles')->eq('id', $id)->update(['title' => 'New']);

// DELETE (soft — recommended; use Model::softDelete())
$api->from('agent_reviews')->eq('id', $id)->update(['isDelete' => true]);
```

## Model::format() alias pattern
<a name="model-format"></a>

Every Model overrides `format()` to alias DB keys, decode JSONB, hydrate nested rows, normalize booleans. Full example in Step 08 Code Vault §2.

```php
protected function format(array $row): array
{
    // 1. Alias DB keys → template keys
    $row['name']  = $row['title']   ?? '';
    $row['photo'] = $row['avatar']  ?? '';

    // 2. Decode JSONB defensively
    $row['skills'] = $this->decodeJsonb($row['skills'] ?? null, []);

    // 3. Boolean cast (PostgREST returns inconsistent shapes)
    if (isset($row['isDelete'])) {
        $row['isDelete'] = $row['isDelete'] === true
            || $row['isDelete'] === 'true'
            || $row['isDelete'] === 't';
    }

    // 4. Sort nested collection
    $children = $row['children_table'] ?? [];
    usort($children, fn($a, $b) => strtotime($b['createdAt']) - strtotime($a['createdAt']));
    $row['children'] = $children;

    return $row;
}

private function decodeJsonb($val, $default)
{
    if ($val === null)   return $default;
    if (is_array($val))  return $val;
    if (is_string($val)) {
        $decoded = json_decode($val, true);
        return $decoded === null ? $default : $decoded;
    }
    return $default;
}
```

## Static passthrough guard
<a name="static-passthrough"></a>

Must run BEFORE `require 'vendor/autoload.php'` in `index.php`. Without it, `/js/app.js` returns HTML.

```php
if (PHP_SAPI === 'cli-server') {
    $path = realpath(__DIR__ . parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
    if ($path && is_file($path)) {
        return false;   // let cli-server serve the file as-is
    }
}
```

## Error envelope — uniform response shape
<a name="error-envelope"></a>

Every endpoint responds with this shape (success OR error). Helpers live in `api/Helper.php`.

```php
// Success
\Sovereign\respond(true, ['id' => '...', 'name' => '...']);
// → {"success":true,"results":{"id":"...","name":"..."}}

// Success with pagination
\Sovereign\respond(true, $rows, null, ['total' => 42, 'page' => 1, 'pageSize' => 10]);
// → {"success":true,"results":[...],"pagination":{"total":42,...}}

// Error — explicit HTTP status
\Sovereign\respondError(404, 'Agent not found');
// → HTTP 404, {"success":false,"error":{"code":404,"message":"Agent not found"}}

// Error — via thrown exception (handled by Lib/ErrorHandler)
throw new \RuntimeException('Bad data', 400);
// → HTTP 400, {"success":false,"error":{"code":400,"message":"Bad data",...}}
```

## CORS preflight — per entry point
<a name="cors-preflight"></a>

Every `api/v1/*.php` starts with this block. Origin list comes from `api/Config.php`.

```php
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allow  = \Sovereign\getConfig()['allowedOrigins'] ?? [];
if ($origin && in_array($origin, $allow, true)) {
    header("Access-Control-Allow-Origin: {$origin}");
    header('Access-Control-Allow-Methods: GET, POST, PATCH, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
}
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}
```

## Anon INSERT — return=minimal
<a name="return-minimal"></a>

When writing to a table that has anon INSERT but no anon SELECT (e.g., `agent_leads`), Model::create() MUST pass `returnRow: false` — otherwise the RETURNING triggered by `return=representation` is blocked by RLS and the response is empty.

```php
// Wrong — PostgREST returns [] even though the INSERT succeeded
$result = $model->create($data);

// Right — Prefer: return=minimal, no RETURNING attempted
$result = $model->create($data, returnRow: false);
if (!$result) {
    \Sovereign\respondError(500, 'Lead submission failed');
}
```

## UUID validation
<a name="uuid-validation"></a>

AgentModel::resolve() rejects non-UUID inputs. The helper lives in `api/Helper.php`.

```php
use function Sovereign\isUuid;

if (!isUuid($_GET['agent_id'] ?? '')) {
    http_response_code(404);
    include __DIR__ . '/404.php';
    exit;
}
```

## Casing-sync COALESCE (RLS)
<a name="casing-sync"></a>

Always use this when filtering by JWT project_id — different apps mint JWTs with different casing.

```sql
USING (
  "isDelete" = false
  AND "project_id" = COALESCE(
    auth.jwt() ->> 'project_id',
    auth.jwt() ->> 'projectId'
  )::uuid
)
```

## HTML-escape every dynamic echo
<a name="html-escape"></a>

Every `<?php echo $var ?>` in a template uses `out()`. This is the XSS gate.

```php
<!-- Right -->
<h1><?php out($agent['name']); ?></h1>
<a href="/agents/<?php out($agent['id']); ?>">link</a>

<!-- Wrong -->
<h1><?= $agent['name'] ?></h1>
<?php echo $agent['description']; ?>
```

## No Profile Image fallback
<a name="no-profile-image"></a>

Every `<img>` wrapped. CSS class `personal-image-placeholder` renders a grey circle + icon. No broken image icons.

```php
<?php if (!empty($row['photo'])): ?>
  <img src="<?php out($row['photo']); ?>" alt="<?php out($row['name']); ?>">
<?php else: ?>
  <div class="personal-image-placeholder" aria-label="No profile image">
    <span class="material-symbols-outlined">person</span>
  </div>
<?php endif; ?>
```

## Log every important boundary
<a name="logging"></a>

`writeLog()` from Helper.php auto-rotates at 5 MB. Use at every boundary (request, controller dispatch, exception).

```php
use function Sovereign\writeLog;

writeLog('[Auth] Login attempt for ' . $email);
writeLog('[Lead] Submitted for agent ' . $agentId);
writeLog('[Exception] ' . $e->getMessage(), 'ERROR');
```
