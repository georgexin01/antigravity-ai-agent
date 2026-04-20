<?php
/**
 * Entry: /api/v1/leads.php
 *   POST /api/v1/leads → submit inquiry
 */

declare(strict_types=1);
date_default_timezone_set('Asia/Kuala_Lumpur');

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../src/header.php';

use Sovereign\Controllers\LeadController;
use function Sovereign\supabaseClient;

(new LeadController(supabaseClient()))->processRequest($_SERVER['REQUEST_METHOD'], null);
