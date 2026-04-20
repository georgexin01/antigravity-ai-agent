<?php
/**
 * ReviewModel — agent_reviews CRUD with template-key aliases.
 */

namespace Sovereign\Models;

class ReviewModel extends BaseModel
{
    public function __construct(\Sovereign\Core\SupabaseClient $api)
    {
        parent::__construct($api, 'agent_reviews');
    }

    /** All reviews for one agent profile, newest first. */
    public function byAgentProfile(string $agentProfileId): array
    {
        $resp = $this->api->from($this->table)
            ->select('*')
            ->eq('agent_profile_id', $agentProfileId)
            ->eq('isDelete', 'false')
            ->order('review_date', false) // DESC
            ->get();

        $rows = $resp['data'] ?? [];
        return array_map([$this, 'format'], $rows);
    }

    protected function format(array $row): array
    {
        $row['name']   = $row['reviewer_name']  ?? 'Anonymous';
        $row['photo']  = $row['reviewer_photo'] ?? '';
        $row['text']   = $row['review_text']    ?? '';
        $row['rating'] = (int)($row['rating']   ?? 5);
        $row['date']   = !empty($row['review_date'])
            ? date('M d, Y', strtotime($row['review_date']))
            : '';
        return $row;
    }
}
