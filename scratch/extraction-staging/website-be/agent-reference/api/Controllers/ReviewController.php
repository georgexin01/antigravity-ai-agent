<?php
/**
 * ReviewController
 *   GET  /api/v1/reviews?agent_profile_id=X  — list reviews for an agent
 *   POST /api/v1/reviews                     — submit a new review
 */

namespace Sovereign\Controllers;

use Sovereign\Models\ReviewModel;

use function Sovereign\respondError;
use function Sovereign\uploadImage;

class ReviewController extends BaseController
{
    private ReviewModel $model;

    public function __construct(\Sovereign\Core\SupabaseClient $api)
    {
        parent::__construct($api);
        $this->model = new ReviewModel($api);
        $this->requiredFields = ['agent_profile_id', 'reviewer_name', 'review_text', 'rating'];
    }

    /** GET /reviews?agent_profile_id=X  or  POST /reviews */
    protected function processCollectionRequest(string $method): void
    {
        switch ($method) {
            case 'GET':
                $agentProfileId = $_GET['agent_profile_id'] ?? '';
                if ($agentProfileId === '') { respondError(400, 'agent_profile_id is required'); return; }
                $this->ok($this->model->byAgentProfile($agentProfileId));
                return;

            case 'POST':
                $data = $this->validate(false);

                // Rating must be 1–5
                $rating = (int)($data['rating'] ?? 0);
                if ($rating < 1 || $rating > 5) { respondError(400, 'rating must be between 1 and 5'); return; }

                // Optional photo upload
                $photoPath = '';
                if (!empty($_FILES['review_photo']['tmp_name'])) {
                    try {
                        $photoPath = uploadImage($_FILES['review_photo'], 'reviews');
                    } catch (\RuntimeException $e) {
                        respondError(400, 'Photo upload failed: ' . $e->getMessage());
                        return;
                    }
                }

                $row = $this->model->create([
                    'agent_profile_id' => $data['agent_profile_id'],
                    'reviewer_name'    => $data['reviewer_name'],
                    'reviewer_photo'   => $photoPath,
                    'review_text'      => $data['review_text'],
                    'rating'           => $rating,
                    'isDelete'         => false,
                ]);

                if (!$row) { respondError(500, 'Failed to save review'); return; }
                $this->created($row);
                return;

            default:
                $this->methodNotAllowed();
        }
    }
}
