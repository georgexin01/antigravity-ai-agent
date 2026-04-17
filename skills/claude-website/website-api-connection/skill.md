---
name: website-api-connection
description: "12-step flow to build/connect a PHP/HTML website to Docker-local Supabase via REST. Current V2 architecture (2026-04-17) — Sovereign namespace, Composer PSR-4 autoload, UUID-only routing, strict project-schema isolation. Grounded in website-LAA-agent live code."
triggers: ["website api connection", "php supabase rest", "new website", "agent profile site", "website 12 step", "connect website to supabase", "sovereign php"]
phase: 2-scaffold
requires: []
unlocks: []
inputs: [supabase_url, anon_key, schema_name, entity_list]
output_format: step_checklist_result
model_hint: gemini-3-flash
version: 2.0
status: authoritative
date_created: "2026-04-17"
source: "Reverse-engineered from website-LAA-agent current state (2026-04-17)"
---

# website-api-connection V2 — Sovereign PHP + Supabase REST

## When to Use

Building a PHP/HTML website that reads/writes a Docker-local Supabase (or similar PostgREST). Follow this for the agent-profile pattern and any similar public-landing-page + admin-managed-data scenario.

**MASTER RULE #1 applies** — every table/FK/seed stays inside the project schema (e.g. `quizLaa`). Never modify `public.*` or other project schemas from this website's migrations.

## STEP 1 — Project Skeleton

```
/
├── .env (project root — OPTIONAL; usually api/core/.env wins)
├── index.php                # router entry with static passthrough
├── router.php               # get() dispatcher, dynamic {param} extraction
├── home.php                 # landing template (bootstraps AgentModel)
├── review.php               # detail template
├── 404.php
├── lib/                     # template partials, JS-inline helpers
├── api/
│   ├── composer.json        # PSR-4 + files autoload
│   ├── .gitignore           # block /vendor + /core/.env
│   ├── Config.php           # const Sovereign\Config [env blocks]
│   ├── Helper.php           # Sovereign\* procedural (respond, uploadImage, isUuid, etc.)
│   ├── src/
│   │   └── header.php       # CORS + error handler bootstrap
│   ├── core/                # Sovereign\Core\* — low-level
│   │   ├── .env             # SUPABASE_URL / ANON_KEY / SCHEMA / PROJECT_ID / APP_ENV
│   │   ├── SupabaseConfig.php
│   │   ├── SupabaseClient.php
│   │   ├── SovereignQuery.php
│   │   └── SovereignStorage.php
│   ├── Lib/
│   │   └── ErrorHandler.php
│   ├── Models/              # Sovereign\Models\*
│   │   ├── BaseModel.php
│   │   └── {Entity}Model.php per resource
│   ├── Controllers/         # Sovereign\Controllers\*
│   │   ├── BaseController.php
│   │   └── {Entity}Controller.php per resource
│   └── v1/                  # thin endpoint adapters
│       └── {entity}.php per resource
├── assets/                  # CSS, JS, img (served static)
└── uploads/                 # user uploads (written by API)
```

**Verify:** every file in place; `api/composer.json` exists.

## STEP 2 — composer.json with PSR-4 + files autoload

```json
{
  "name": "laa/website-agent-api",
  "require": { "php": "^8.0" },
  "autoload": {
    "psr-4": { "Sovereign\\": "" },
    "files": [
      "Helper.php",
      "Config.php",
      "core/SupabaseConfig.php",
      "core/SovereignQuery.php",
      "core/SovereignStorage.php",
      "core/SupabaseClient.php"
    ]
  },
  "config": { "optimize-autoloader": true }
}
```

Run `cd api && composer install && composer dump-autoload -o`. Vendor lives at `api/vendor/`.

**NEVER** create a second `vendor/` at project root — double autoload causes "Cannot redeclare class" fatal on Windows.

## STEP 3 — Env Keys (`api/core/.env`)

```
SUPABASE_URL=http://localhost:54321
SUPABASE_ANON_KEY=<local-dev-anon-jwt>
SUPABASE_SCHEMA=quizLaa
PROJECT_ID=<uuid from public.project>
APP_ENV=dev
```

**Gitignore:** `/api/vendor/` and `/api/core/.env`.

## STEP 4 — SupabaseClient (core)

```php
namespace Sovereign\Core;

class SupabaseClient {
  public function request($path, $method='GET', $data=null, $prefer='return=representation') {
    $headers = [
      "apikey: {$this->anonKey}",              // ← apikey ONLY
      "Content-Type: application/json",
      "Accept-Profile: {$this->schema}",
      "Content-Profile: {$this->schema}",
    ];
    // Authorization: Bearer DELIBERATELY OMITTED
    // Local Supabase rejects duplicate JWT with "No suitable key or wrong key type".
    if (in_array($method, ['POST','PATCH'], true) && $prefer) {
      $headers[] = "Prefer: {$prefer}";
    }
    // ... curl_exec, decode, return ['status', 'data']
  }
}
```

- Default `$prefer = 'return=representation'` for most POSTs
- Pass `'return=minimal'` when the target table has anon INSERT but no anon SELECT (e.g. `agent_leads`) — avoids RETURNING-clause RLS violation
- **NO** `Authorization: Bearer {$this->anonKey}` header

## STEP 5 — Entry + Router

`index.php`:
```php
<?php
// CRITICAL: static file passthrough MUST be first
if (PHP_SAPI === 'cli-server') {
  $path = realpath(__DIR__ . parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
  if ($path && is_file($path)) return false;
}

require_once __DIR__ . '/api/vendor/autoload.php';  // ← api/vendor, NOT /vendor
require_once __DIR__ . '/router.php';

use Sovereign\Core\SupabaseClient;
$api = new SupabaseClient();

get('/agents/{agent_id}',        '/home.php');
get('/agents/{agent_id}/review', '/review.php');
get('/',                          '/home.php');
route('/404',                     '/404.php');
```

Without the `cli-server` passthrough, JS/CSS requests get HTML back → `Uncaught SyntaxError: Unexpected token '<'`.

## STEP 6 — UUID-only route handling in templates

Router's `get()` puts `{agent_id}` into `$_GET['agent_id']`. BUT for nested routes like `/agents/{agent_id}/review`, naive suffix extraction yields `uuid/review` — wrong. Use manual `$parts[1]` split in `home.php` and `review.php`:

```php
$request_uri = strtok($_SERVER['REQUEST_URI'], '?');
$parts       = explode('/', trim($request_uri, '/'));
$agent_id    = $parts[1] ?? $_GET['agent_id'] ?? '';

$agent = $agentModel->resolve($agent_id);
if (!$agent) { http_response_code(404); include '404.php'; exit; }
```

`AgentModel::resolve()` rejects non-UUID input immediately:
```php
if ($identifier === '' || !isUuid($identifier)) return null;
$row = $this->api->from($this->table)
  ->select($this->embedDefault)
  ->eq('isDelete', 'false')
  ->or("id.eq.{$identifier},user_id.eq.{$identifier}")
  ->limit(1)->single()->get();
```

**NO slug fallback** — only UUID routes. Slug would re-introduce non-project-scoped lookups.

## STEP 7 — BaseModel + BaseController skeletons

`BaseModel` methods (all auto-apply `.eq('isDelete','false')`):
- `find($id)` — by PK
- `all($filters)` / `paginate($page, $pageSize, $filters)` — multi-row
- `create($data, $returnRow = true)` — INSERT with Prefer header
- `update($id, $data)` — PATCH
- `softDelete($id)` — sets `isDelete=true`
- `format($row)` — override per-child (decode JSONB, alias fields)

`BaseController`:
- `processRequest($method, $id)` — dispatches to `processResourceRequest` or `processCollectionRequest`
- `validate($isUpdate=false)` — parses body, checks `$requiredFields`
- `ok($results)` / `created($results)` / `methodNotAllowed()` — JSON envelope

## STEP 8 — Per-resource layer (3 files per entity)

Adding `agent_certifications` = 3 files:

1. `api/Models/CertModel.php`:
```php
namespace Sovereign\Models;
class CertModel extends BaseModel {
  public function __construct(\Sovereign\Core\SupabaseClient $api) {
    parent::__construct($api, 'agent_certifications');
  }
  protected function format(array $row): array { /* aliases + JSONB decoding */ return $row; }
}
```

2. `api/Controllers/CertController.php`:
```php
namespace Sovereign\Controllers;
class CertController extends BaseController {
  public function __construct(\Sovereign\Core\SupabaseClient $api) {
    parent::__construct($api);
    $this->model = new \Sovereign\Models\CertModel($api);
    $this->requiredFields = ['agent_profile_id', 'title'];
  }
  protected function processCollectionRequest(string $method): void {
    // GET → list, POST → create
  }
}
```

3. `api/v1/certifications.php`:
```php
declare(strict_types=1);
require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../src/header.php';
(new \Sovereign\Controllers\CertController(\Sovereign\supabaseClient()))
  ->processRequest($_SERVER['REQUEST_METHOD'], $_GET['id'] ?? null);
```

Run `cd api && composer dump-autoload` — classes auto-registered.

## STEP 9 — RLS Policies (MUST)

Every new table MUST have RLS set up correctly. The combo matters:

| Use case | anon SELECT | anon INSERT | Prefer header |
|---|---|---|---|
| Public listing (e.g. agent_profiles) | `USING (isDelete=false)` | (deny) | `return=representation` |
| Submit-only (e.g. agent_leads) | (deny) | `WITH CHECK (true)` | **`return=minimal`** (avoids RETURNING RLS) |
| Submit + public listing (e.g. agent_reviews) | `USING (isDelete=false)` | `WITH CHECK (true)` | `return=representation` |

Authenticated admin always gets `FOR ALL USING (true) WITH CHECK (true)`.

## STEP 10 — Template integration

`home.php` after resolving `$agent`:
```php
<?= htmlspecialchars($agent['name']) ?>       // from model alias
<?= htmlspecialchars($agent['tagline']) ?>
<img src="<?= htmlspecialchars($agent['photo']) ?>" alt="...">
<!-- social[], skills[], services[], achievements, videos[], reviews[] all JSONB-decoded in format() -->
```

Review form POSTs multipart/form-data to `/api/v1/reviews.php` with `review_photo` optional file. Lead form POSTs JSON to `/api/v1/leads.php`.

## STEP 11 — Error visibility

- Every failed Supabase call is logged to `api/logs/api.log` by `SupabaseClient::request()` when HTTP >= 400
- `ErrorHandler::handleException()` catches all uncaught throwables, emits JSON envelope `{success:false, error:{code, message}}` with file/line in dev, scrubbed in production
- Never enable `display_errors=1` in production

## STEP 12 — Local dev run

```bash
cd website-LAA-agent
php -S localhost:8080 index.php
```

Visit `http://localhost:8080/agents/{uuid}` — should return 200 with full HTML.

## Guardrails

- DO NOT add `Authorization: Bearer` header alongside `apikey` — PostgREST rejects duplicate JWT
- DO NOT use `require_once __DIR__ . '/vendor/autoload.php'` at project root — use `api/vendor/autoload.php` everywhere
- DO NOT add slug fallback to UUID-only routes — project policy
- DO NOT modify `public.*` or other project schemas from this project's migrations (MASTER RULE #1)
- DO NOT use `return=representation` when inserting into a table without anon SELECT RLS
- STOP if `composer dump-autoload` reports PSR-4 violations on ALL core files — check composer.json files array
- NEVER commit `api/core/.env` or `api/vendor/`

## Verify

- [ ] `curl http://localhost:8080/agents/{uuid}` → HTTP 200, full HTML rendered
- [ ] `curl http://localhost:8080/agents/not-a-uuid` → HTTP 404
- [ ] `curl http://localhost:8080/assets/js/main.js` → HTTP 200, `Content-Type: application/javascript`
- [ ] `curl -X POST http://localhost:8080/api/v1/leads.php -d '{...}'` → HTTP 201, `{success:true}`
- [ ] `api/logs/api.log` contains request lines
- [ ] Browser DevTools shows zero `Unexpected token '<'` JS errors

## Rollback

- `rm -rf api/vendor/ composer.lock && composer install` — restore deps
- `mv api/core/.env api/core/.env.bak && cp .env.example api/core/.env` — reset config
- Revert SQL migrations per-resource

## Known Gotchas (2026-04-17 state)

1. **review.php bug**: uses `$_GET['agent_id']` which router sets to `uuid/review`. Must use `$parts[1]` pattern like `home.php`.
2. **Composer files vs require_once**: NEVER `require_once` the core/ files manually. Composer's `files` autoload handles them. Manual `require_once` + Composer = double-load fatal on Windows (case-insensitive paths).
3. **SovereignConfig.php doesn't exist** — don't import it. Config is split between `api/Config.php` (constant) and `api/core/SupabaseConfig.php` (secrets).
4. **Double autoload bug**: if you see "Cannot declare class X" — check for both a root `/vendor/` AND `/api/vendor/`. Delete root one.

---
**website-api-connection V2.0 — 2026-04-17 · Current state snapshot**
