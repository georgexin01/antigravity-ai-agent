<?php
namespace Sovereign\Core;

/**
 * Supabase Environment Configuration Loader
 * 
 * Securely loads the .env variables for the Sovereign REST Client.
 */

class SupabaseConfig {
    private static $envCache = null;

    public static function loadEnv($envFile = '.env') {
        if (self::$envCache !== null) {
            return self::$envCache;
        }

        // Logic Change: Check in the same directory as this file (api/core/)
        $path = __DIR__ . '/' . $envFile;
        
        if (!file_exists($path)) {
            // Fallback: check one level up if not found locally
            $path = __DIR__ . '/../../' . $envFile;
        }

        if (!file_exists($path)) {
             return []; // Silent fail for safety
        }

        $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        $config = [];

        foreach ($lines as $line) {
            if (strpos(trim($line), '#') === 0) continue;
            if (strpos($line, '=') !== false) {
                list($key, $value) = explode('=', $line, 2);
                $config[trim($key)] = trim($value);
            }
        }

        self::$envCache = $config;
        return $config;
    }

    public static function get($key, $default = null) {
        $env = self::loadEnv();
        return isset($env[$key]) ? $env[$key] : $default;
    }
}
?>
