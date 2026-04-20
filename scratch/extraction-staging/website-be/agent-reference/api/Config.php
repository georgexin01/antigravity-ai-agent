<?php
namespace Sovereign;

/**
 * Sovereign Config — environment-specific config blocks.
 * Active environment resolved by APP_ENV in core/.env (default 'dev').
 *
 * Secrets (Supabase URL/anon key) live in core/.env — this file only
 * holds non-secret defaults + per-environment overrides.
 */

const Config = [
    'dev' => [
        'allowedOrigins' => [
            'http://localhost:8080',
            'http://localhost:3000',
            'http://localhost:5666',
            'http://127.0.0.1:8080',
        ],
        'storage' => [
            'bucket'        => 'quizLaa',
            'uploadsDir'    => __DIR__ . '/../uploads',
            'publicPrefix'  => '/uploads',
            'maxPhotoBytes' => 2097152,
            'allowedMime'   => ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
        ],
        'mail' => [
            'enabled' => false,
            'from'    => 'noreply@laa.com.my',
        ],
        'logPath' => __DIR__ . '/logs/api.log',
    ],

    'production' => [
        'allowedOrigins' => [
            'https://laa.com.my',
            'https://www.laa.com.my',
        ],
        'storage' => [
            'bucket'        => 'quizLaa',
            'uploadsDir'    => __DIR__ . '/../uploads',
            'publicPrefix'  => '/uploads',
            'maxPhotoBytes' => 2097152,
            'allowedMime'   => ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
        ],
        'mail' => [
            'enabled' => true,
            'from'    => 'noreply@laa.com.my',
        ],
        'logPath' => __DIR__ . '/logs/api.log',
    ],
];
