<?php
/**
 * Entry: /api/v1/reviews.php
 *   GET  /api/v1/reviews?agent_profile_id={X}  → list reviews
 *   POST /api/v1/reviews                        → submit review (multipart for file)
 */

declare(strict_types=1);
date_default_timezone_set('Asia/Kuala_Lumpur');

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../src/header.php';

use Sovereign\Controllers\ReviewController;
use function Sovereign\supabaseClient;

(new ReviewController(supabaseClient()))->processRequest($_SERVER['REQUEST_METHOD'], null);
