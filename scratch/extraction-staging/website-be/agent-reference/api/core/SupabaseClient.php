<?php
namespace Sovereign\Core;

/**
 * THE SOVEREIGN FRAMEWORK CLIENT
 * 
 * The "Perfect API" orchestrator for Supabase + PHP.
 * Provides a unified entry point for Fluent Queries and Storage Management.
 */

// Core dependencies (SupabaseConfig, SovereignQuery, SovereignStorage) are
// loaded by Composer's `files` autoload entry in composer.json — do NOT use
// require_once here. On Windows it triggers "Cannot declare class" double-load
// errors when path casing differs between composer and manual includes.

class SupabaseClient {
    private $url;
    private $anonKey;
    private $schema;
    private $storage;

    public function __construct() {
        $this->url = rtrim(SupabaseConfig::get('SUPABASE_URL'), '/');
        $this->anonKey = SupabaseConfig::get('SUPABASE_ANON_KEY');
        $this->schema = SupabaseConfig::get('SUPABASE_SCHEMA');
        
        $this->storage = new SovereignStorage($this->url);
    }

    /**
     * Start a fluent query.
     * Usage: $api->from('table')->select('*')->eq('id', 1)->get();
     */
    public function from($table) {
        return new SovereignQuery($this, $table);
    }

    /**
     * Asset / Storage Manager
     */
    public function storage() {
        return $this->storage;
    }

    /**
     * Low-level cURL Engine
     * 
     * @param string $path The REST path (e.g. 'users')
     * @param string $method HTTP method (GET, POST, PATCH, DELETE)
     * @param mixed $data Data for POST/PATCH
     * @param string $prefer PostgREST Prefer header (e.g. return=representation)
     * @param array $customHeaders Additional HTTP headers to merge
     */
    public function request($path, $method = 'GET', $data = null, $prefer = 'return=representation', $customHeaders = []) {
        $ch = curl_init();

        // NOTE: Do NOT duplicate the JWT in `Authorization: Bearer`. PostgREST in
        // local Supabase rejects the request when both headers carry the same
        // anon JWT ("No suitable key or wrong key type"). The `apikey` header
        // alone is authoritative for anon access.
        $headers = [
            "apikey: {$this->anonKey}",
            "Content-Type: application/json",
            "Accept-Profile: {$this->schema}",
            "Content-Profile: {$this->schema}"
        ];

        // Merge custom headers
        if (!empty($customHeaders)) {
            $headers = array_merge($headers, $customHeaders);
        }

        // Ensure we are hitting the REST endpoint
        $fullUrl = "{$this->url}/rest/v1/{$path}";

        // `return=representation` triggers RETURNING, which requires SELECT RLS
        // to pass on the inserted row. Pass `return=minimal` when anon-writing
        // to tables where anon has no SELECT policy (e.g. agent_leads).
        if (\in_array($method, ['POST', 'PATCH'], true) && $prefer) {
            $headers[] = "Prefer: {$prefer}";
        }

        curl_setopt($ch, CURLOPT_URL, $fullUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        if ($data) {
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        }

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);
        curl_close($ch);

        // Sovereign Diagnostic Log (Visible to AI for debugging)
        $logHeader = "[Sovereign Debug] " . date('Y-m-d H:i:s');
        $logMsg = "{$logHeader} | URL: {$fullUrl} | Code: {$httpCode}";
        
        if ($httpCode >= 400 || $error) {
            $logMsg .= " | Error: {$error} | Response: {$response}";
            error_log($logMsg);
        } else {
            // Success Log
            $decoded = json_decode($response, true);
            $count = is_array($decoded) ? count($decoded) : (isset($decoded['id']) ? 1 : 0);
            $logMsg .= " | Success | Records: {$count}";
            error_log($logMsg);
        }

        return [
            'status' => $httpCode,
            'data' => json_decode($response, true),
            'error' => $error
        ];
    }

    // Legacy method maintained for backward compatibility during transition
    public function get($table, $query = '') {
        return $this->request($table . ($query ? '?' . $query : ''), 'GET');
    }
}
?>
