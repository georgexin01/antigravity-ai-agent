<?php
/**
 * AgentModel — resolves agent_profiles + hydrates reviews, social, skills,
 * services, achievements, videos to the exact shape home.php / review.php
 * templates expect.
 *
 * Universal Matcher: resolve($id) accepts UUID (profile.id OR user_id) OR slug.
 */

namespace Sovereign\Models;

use function Sovereign\isUuid;

class AgentModel extends BaseModel
{
    public function __construct(\Sovereign\Core\SupabaseClient $api)
    {
        parent::__construct($api, 'agent_profiles');
        $this->embedDefault = '*,agent_reviews(*)';
    }

    /**
     * Resolve by UUID ONLY (agent_profiles.id OR agent_profiles.user_id).
     * Slug lookups have been disabled per user directive (2026-04-17) —
     * /agents/{non-uuid} always 404s now.
     */
    public function resolve(string $identifier): ?array
    {
        if ($identifier === '' || !isUuid($identifier)) return null;

        $row = $this->api->from($this->table)
            ->select($this->embedDefault)
            ->eq('isDelete', 'false')
            ->or("id.eq.{$identifier},user_id.eq.{$identifier}")
            ->limit(1)
            ->single()
            ->get();

        return $row ? $this->format($row) : null;
    }

    /**
     * Format raw DB row into template-ready shape.
     * Guarantees ALL keys home.php / review.php / initData.php consume.
     */
    protected function format(array $row): array
    {
        $row['url']         = $row['slug']        ?? '';
        $row['name']        = $row['title']       ?? '';
        $row['title']       = $row['tagline']     ?? '';
        $row['company']     = $row['company']     ?? 'LAA';
        $row['tagline']     = $row['tagline']     ?? '';
        $row['description'] = $row['description'] ?? '';
        $row['photo']       = $row['photo']       ?? '';
        $row['video_url']   = $row['video_url']   ?? '';
        $row['phone']       = $row['phone']       ?? '';
        $row['email']       = $row['email']       ?? '';
        $row['address']     = $row['address']     ?? '';

        $row['social']       = $this->decodeJsonb($row['social_links'] ?? null, []);
        $row['skills']       = $this->decodeJsonb($row['skills']       ?? null, []);
        $row['services']     = $this->decodeJsonb($row['services']     ?? null, []);
        $row['achievements'] = $this->decodeJsonb($row['achievements'] ?? null, []);
        $row['videos']       = $this->decodeJsonb($row['videos']       ?? null, []);

        $reviews = $row['agent_reviews'] ?? [];
        usort($reviews, fn($a, $b) =>
            strtotime($b['review_date'] ?? '0') - strtotime($a['review_date'] ?? '0')
        );
        foreach ($reviews as &$r) {
            $r['name']   = $r['reviewer_name']  ?? 'Anonymous';
            $r['photo']  = $r['reviewer_photo'] ?? '';
            $r['text']   = $r['review_text']    ?? '';
            $r['rating'] = (int)($r['rating']   ?? 5);
            $r['date']   = !empty($r['review_date'])
                ? date('M d, Y', strtotime($r['review_date']))
                : '';
        }
        unset($r);
        $row['reviews'] = $reviews;

        if (isset($row['isDelete'])) {
            $row['isDelete'] = $row['isDelete'] === true
                || $row['isDelete'] === 'true'
                || $row['isDelete'] === 't';
        }

        return $row;
    }

    private function decodeJsonb($val, $default)
    {
        if ($val === null) return $default;
        if (is_array($val)) return $val;
        if (is_string($val)) {
            $decoded = json_decode($val, true);
            return $decoded === null ? $default : $decoded;
        }
        return $default;
    }
}
