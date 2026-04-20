<?php
/**
 * LeadController
 *   POST /api/v1/leads — submit an inquiry form
 *   GET  /api/v1/leads — (admin only; anon gets 401) — list leads
 */

namespace Sovereign\Controllers;

use Sovereign\Models\LeadModel;

use function Sovereign\isValidEmail;
use function Sovereign\respondError;

class LeadController extends BaseController
{
    private LeadModel $model;

    public function __construct(\Sovereign\Core\SupabaseClient $api)
    {
        parent::__construct($api);
        $this->model = new LeadModel($api);
        $this->requiredFields = ['lead_name', 'lead_phone', 'lead_email'];
    }

    protected function processCollectionRequest(string $method): void
    {
        switch ($method) {
            case 'POST':
                $data = $this->validate(false);

                if (!isValidEmail($data['lead_email'])) {
                    respondError(400, 'Invalid email address'); return;
                }

                // Leads use return=minimal — anon has no SELECT policy on agent_leads
                $row = $this->model->create([
                    'agent_profile_id' => $data['agent_profile_id'] ?? null,
                    'lead_name'        => $data['lead_name'],
                    'lead_phone'       => $data['lead_phone'],
                    'lead_email'       => $data['lead_email'],
                    'lead_message'     => $data['lead_message'] ?? '',
                    'status'           => 'new',
                    'isDelete'         => false,
                ], false);

                if (!$row) { respondError(500, 'Failed to save lead'); return; }
                $this->created(['created' => true, 'message' => 'Thank you — we will contact you shortly.']);
                return;

            case 'GET':
                // Anon cannot list leads (RLS blocks it; also a defense-in-depth guard here)
                respondError(401, 'Authentication required');
                return;

            default:
                $this->methodNotAllowed();
        }
    }
}
