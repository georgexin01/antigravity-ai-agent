<?php
/**
 * LeadModel — agent_leads CRUD for inquiry form submissions.
 */

namespace Sovereign\Models;

class LeadModel extends BaseModel
{
    public function __construct(\Sovereign\Core\SupabaseClient $api)
    {
        parent::__construct($api, 'agent_leads');
    }

    protected function format(array $row): array
    {
        if (isset($row['isDelete'])) {
            $row['isDelete'] = $row['isDelete'] === true
                || $row['isDelete'] === 'true'
                || $row['isDelete'] === 't';
        }
        return $row;
    }
}
