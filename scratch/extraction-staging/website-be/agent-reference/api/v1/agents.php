<?php
/**
 * Entry: /api/v1/agents.php
 *   GET /api/v1/agents           → list
 *   GET /api/v1/agents?id={X}    → single (X = UUID profile.id, UUID user_id, or slug)
 */

declare(strict_types=1);
date_default_timezone_set('Asia/Kuala_Lumpur');

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../src/header.php';

use Sovereign\Controllers\AgentController;
use function Sovereign\supabaseClient;

$id = $_GET['id'] ?? $_GET['agent_id'] ?? $_GET['slug'] ?? null;
(new AgentController(supabaseClient()))->processRequest($_SERVER['REQUEST_METHOD'], $id);
