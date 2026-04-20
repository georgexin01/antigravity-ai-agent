<?php
/**
 * AgentController — GET /api/v1/agents + GET /api/v1/agents?id={uuid|slug}
 */

namespace Sovereign\Controllers;

use Sovereign\Models\AgentModel;

class AgentController extends BaseController
{
    private AgentModel $model;

    public function __construct(\Sovereign\Core\SupabaseClient $api)
    {
        parent::__construct($api);
        $this->model = new AgentModel($api);
    }

    /** GET /agents?id=X */
    protected function processResourceRequest(string $method, string $id): void
    {
        if ($method !== 'GET') { $this->methodNotAllowed(); return; }

        $agent = $this->model->resolve($id);
        if (!$agent) { \Sovereign\respondError(404, 'Agent not found'); return; }

        $this->ok($agent);
    }

    /** GET /agents */
    protected function processCollectionRequest(string $method): void
    {
        if ($method !== 'GET') { $this->methodNotAllowed(); return; }

        $rows = $this->model->all([], '*');
        $this->ok($rows, ['total' => count($rows)]);
    }
}
