<?php
/**
 * Sovereign Helper — procedural helpers used across the API layer.
 *
 * Mirrors website-BE's api/Website/Helper.php pattern: functions live here
 * instead of in a service class so they are globally available via
 * composer.json `files` autoload entry.
 */

namespace Sovereign;

/**
 * Resolve active environment config block.
 * Reads APP_ENV from core/.env (dev | production), falls back to 'dev'.
 */
function getConfig(): array
{
    static $cached = null;
    if ($cached !== null) return $cached;

    $envPath = __DIR__ . '/core/.env';
    $env = 'dev';
    if (file_exists($envPath)) {
        $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            if (strpos(trim($line), '#') === 0) continue;
            if (strpos($line, 'APP_ENV=') === 0) {
                $env = trim(substr($line, 8));
                break;
            }
        }
    }

    $all = Config;
    $cached = $all[$env] ?? $all['dev'];
    $cached['__env'] = $env;
    return $cached;
}

/**
 * Return a ready SupabaseClient instance.
 * Lazy-initialized; reused across the request.
 */
function supabaseClient(): \Sovereign\Core\SupabaseClient
{
    static $client = null;
    if ($client === null) $client = new \Sovereign\Core\SupabaseClient();
    return $client;
}

/**
 * Standard JSON response envelope.
 * Matches website-BE shape: { success, results, pagination?, error? }
 * Emits headers + echoes + exits.
 */
function respond(bool $success, $results = null, ?array $error = null, ?array $pagination = null, int $httpCode = 200): void
{
    if (!headers_sent()) {
        header('Content-Type: application/json; charset=utf-8');
        http_response_code($httpCode);
    }

    $payload = ['success' => $success];
    $payload['results'] = $results;
    if ($pagination !== null) $payload['pagination'] = $pagination;
    if ($error !== null)      $payload['error'] = $error;

    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

/** Shortcut: respond with an error envelope. */
function respondError(int $code, string $message, int $httpCode = 0): void
{
    respond(false, null, ['code' => $code, 'message' => $message], null, $httpCode ?: $code);
}

/**
 * Parse incoming request body.
 * Priority: JSON body → multipart form-data fields → $_GET.
 */
function getRequestData(): array
{
    $raw = file_get_contents('php://input');
    if ($raw && strlen($raw) > 0) {
        $decoded = json_decode($raw, true);
        if (is_array($decoded)) return $decoded;
    }
    if (!empty($_POST)) return $_POST;
    return [];
}

/** Validate an email address. */
function isValidEmail(string $email): bool
{
    return (bool) filter_var($email, FILTER_VALIDATE_EMAIL);
}

/** Validate a Malaysian mobile number (60X). */
function isValidPhoneMY(string $phone): bool
{
    $digits = preg_replace('/\D/', '', $phone);
    return (bool) preg_match('/^60\d{8,10}$/', $digits);
}

/** Sanitize a slug — keep a-z, 0-9, hyphens only. */
function sanitizeSlug(string $input): string
{
    return preg_replace('/[^a-z0-9\-]/i', '', strtolower($input));
}

/** Detect UUID v4 format. */
function isUuid(string $input): bool
{
    return (bool) preg_match('/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i', $input);
}

/**
 * Upload a single image to the local uploads directory.
 * Validates MIME + size against config. Returns relative path on success.
 * Throws \RuntimeException on validation failure.
 */
function uploadImage(array $fileEntry, string $folder): string
{
    $cfg = getConfig()['storage'];

    if (!isset($fileEntry['tmp_name']) || !is_uploaded_file($fileEntry['tmp_name'])) {
        throw new \RuntimeException('No file uploaded.');
    }
    if ($fileEntry['size'] > $cfg['maxPhotoBytes']) {
        throw new \RuntimeException('File exceeds max size.');
    }
    // Server-side MIME detection (client-supplied 'type' is untrustworthy)
    $finfo = new \finfo(FILEINFO_MIME_TYPE);
    $mime  = $finfo->file($fileEntry['tmp_name']);
    if (!in_array($mime, $cfg['allowedMime'], true)) {
        throw new \RuntimeException('File type not allowed.');
    }

    $ext = strtolower(pathinfo($fileEntry['name'], PATHINFO_EXTENSION)) ?: 'bin';
    $destDir = rtrim($cfg['uploadsDir'], '/') . '/' . trim($folder, '/');
    if (!is_dir($destDir)) @mkdir($destDir, 0775, true);

    $fileName = bin2hex(random_bytes(8)) . '_' . time() . '.' . $ext;
    $destFull = $destDir . '/' . $fileName;
    if (!@move_uploaded_file($fileEntry['tmp_name'], $destFull)) {
        throw new \RuntimeException('Failed to save upload.');
    }

    return rtrim($cfg['publicPrefix'], '/') . '/' . trim($folder, '/') . '/' . $fileName;
}

/** Append a message to the api log file. Auto-rotates at ~5 MB. */
function writeLog(string $message, string $level = 'INFO'): void
{
    $path = getConfig()['logPath'];
    $dir  = dirname($path);
    if (!is_dir($dir)) @mkdir($dir, 0775, true);

    if (file_exists($path) && filesize($path) > 5 * 1024 * 1024) {
        @rename($path, $path . '.' . date('Ymd_His'));
    }
    $line = sprintf("[%s] [%s] %s\n", date('c'), $level, $message);
    @file_put_contents($path, $line, FILE_APPEND | LOCK_EX);
}
