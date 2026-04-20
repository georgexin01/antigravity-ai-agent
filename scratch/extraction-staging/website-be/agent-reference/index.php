<?php
/**
 * Sovereign Router Entry Point
 */

// PHP built-in server static file passthrough — MUST run before autoload/routing
// so /js/*, /css/*, /assets/*, /uploads/* are served as static files, not
// handled by the router (which would return HTML for JS/CSS URLs).
if (PHP_SAPI === 'cli-server') {
    $path = realpath(__DIR__ . parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
    if ($path && is_file($path)) {
        return false;
    }
}

require_once __DIR__ . '/api/vendor/autoload.php';
require_once __DIR__ . '/router.php';

use Sovereign\Core\SupabaseClient;
use Sovereign\Controllers\AgentController;

$request_uri = $_SERVER['REQUEST_URI'];
error_log("[Sovereign Router] Processing: " . $request_uri);

// Bootstrap
$api = new SupabaseClient();

// Agent landing page
get(route: '/agents/{agent_id}', path_to_include: '/home.php');

// Review page
get(route: '/agents/{agent_id}/review', path_to_include: '/review.php');

// Default home
get(route: '/', path_to_include: '/home.php');

// 404 fallback
route('/404', '/404.php');
?>
