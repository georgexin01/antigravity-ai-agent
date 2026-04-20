<?php
/**
 * Sovereign BaseController — HTTP dispatch + validation primitives.
 *
 * Child controllers override processResourceRequest / processCollectionRequest
 * and use the inherited validate() + response helpers.
 */

namespace Sovereign\Controllers;

use function Sovereign\getRequestData;
use function Sovereign\respond;
use function Sovereign\respondError;
use function Sovereign\writeLog;

abstract class BaseController
{
    /** Supabase client injected by the endpoint adapter. */
    protected \Sovereign\Core\SupabaseClient $api;

    /** Child sets this in constructor; used by validate() on create. */
    protected array $requiredFields = [];

    public function __construct(\Sovereign\Core\SupabaseClient $api)
    {
        $this->api = $api;
    }

    /**
     * Single public entry point. Dispatches by (method, id) pair
     * exactly like website-BE's BaseController::processRequest.
     */
    public function processRequest(string $method, ?string $id = null): void
    {
        writeLog(sprintf('%s %s (id=%s)', $method, $_SERVER['REQUEST_URI'] ?? '?', $id ?? '-'));

        if ($id !== null && $id !== '') {
            $this->processResourceRequest($method, $id);
        } else {
            $this->processCollectionRequest($method);
        }
    }

    /** Override for single-record routes: /resource?id=X */
    protected function processResourceRequest(string $method, string $id): void
    {
        $this->methodNotAllowed();
    }

    /** Override for list-or-create routes: /resource */
    protected function processCollectionRequest(string $method): void
    {
        $this->methodNotAllowed();
    }

    /** Short-circuit 405 response. */
    protected function methodNotAllowed(): void
    {
        respondError(405, 'Method not allowed');
    }

    /**
     * Parse body + check required fields.
     * On create (isUpdate=false) every required field must be present.
     * On update (isUpdate=true) missing fields are OK (partial update).
     */
    protected function validate(bool $isUpdate = false): array
    {
        $data = getRequestData();

        if (empty($data) && !$isUpdate) {
            respondError(400, 'Request body is required');
        }

        if (!$isUpdate) {
            $missing = [];
            foreach ($this->requiredFields as $field) {
                if (!isset($data[$field]) || $data[$field] === '') $missing[] = $field;
            }
            if (!empty($missing)) {
                respondError(400, 'Missing required fields: ' . implode(', ', $missing));
            }
        }

        return $data;
    }

    /** Convenience wrappers. */
    protected function ok($results = null, ?array $pagination = null): void
    {
        respond(true, $results, null, $pagination, 200);
    }

    protected function created($results = null): void
    {
        respond(true, $results, null, null, 201);
    }
}
