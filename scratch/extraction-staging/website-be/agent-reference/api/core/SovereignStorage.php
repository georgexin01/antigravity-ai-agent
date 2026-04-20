<?php
namespace Sovereign\Core;

/**
 * Sovereign Storage Manager
 * 
 * Handles URL generation and asset management for Supabase Storage buckets.
 */

class SovereignStorage {
    private $url;

    public function __construct($url) {
        $this->url = rtrim($url, '/');
    }

    /**
     * Get a public URL for a file in a bucket.
     * Standardizes local dev vs production URL structures.
     */
    public function getPublicUrl($bucket, $path) {
        if (!$path) return '';
        if (strpos($path, 'http') === 0) return $path;

        $cleanPath = ltrim($path, '/');
        
        // Supabase Storage Public URL structure: {URL}/storage/v1/object/public/{bucket}/{path}
        return "{$this->url}/storage/v1/object/public/{$bucket}/{$cleanPath}";
    }
}
?>
