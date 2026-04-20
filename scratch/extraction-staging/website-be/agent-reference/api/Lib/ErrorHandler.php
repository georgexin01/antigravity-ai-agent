<?php
/**
 * Sovereign ErrorHandler — uniform crash + log handling.
 *
 * Converts raw PHP errors to ErrorException so they bubble to
 * handleException(), which serializes them into our JSON envelope.
 */

namespace Sovereign\Lib;

use function Sovereign\respond;
use function Sovereign\writeLog;

class ErrorHandler
{
    /**
     * Top-level exception catcher.
     * Masks internal details in production; verbose in dev.
     */
    public static function handleException(\Throwable $e): void
    {
        $env = \Sovereign\getConfig()['__env'] ?? 'dev';
        $isDev = ($env === 'dev');

        $code = $e->getCode() ?: 500;
        if ($code < 400 || $code > 599) $code = 500;

        $detail = [
            'code'    => $code,
            'message' => $isDev ? $e->getMessage() : 'Internal server error',
        ];
        if ($isDev) {
            $detail['file'] = $e->getFile();
            $detail['line'] = $e->getLine();
        }

        writeLog('[Exception] ' . $e->getMessage() . ' @ ' . $e->getFile() . ':' . $e->getLine(), 'ERROR');
        respond(false, null, $detail, null, $code);
    }

    /**
     * Converts PHP errors (E_NOTICE, E_WARNING, etc.) to exceptions
     * so handleException() can format them uniformly.
     */
    public static function handleError(int $no, string $str, string $file, int $line): bool
    {
        // Respect @-suppressed errors
        if (!(error_reporting() & $no)) return false;
        throw new \ErrorException($str, 0, $no, $file, $line);
    }
}
