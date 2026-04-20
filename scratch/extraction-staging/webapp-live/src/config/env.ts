/**
 * Typed environment wrapper — single source of truth for all VITE_* reads.
 *
 * Benefits vs scattered `import.meta.env.VITE_*`:
 *   1. One place to validate required keys at boot
 *   2. Typed access (IDE autocomplete)
 *   3. Easy to mock in tests
 *   4. Clear list of env dependencies for deployment
 */

interface AppEnv {
  /** Supabase REST URL, e.g. http://localhost:54321 */
  SUPABASE_URL: string;
  /** Anon JWT (public — safe to expose) */
  SUPABASE_ANON_KEY: string;
  /** Project schema name, e.g. "quizLaa" */
  SUPABASE_SCHEMA: string;
  /** UUID of public.project row for this project — used by auth flow */
  PROJECT_ID: string;
  /** Optional app title for HTML head / nav */
  APP_TITLE?: string;
}

function readEnv(key: string, required = true): string {
  const val = import.meta.env[`VITE_${key}`] as string | undefined;
  if (required && (!val || val.trim() === '')) {
    throw new Error(`[env] Missing required VITE_${key} — check .env.*`);
  }
  return val ?? '';
}

export const env: AppEnv = {
  SUPABASE_URL: readEnv('SUPABASE_URL'),
  SUPABASE_ANON_KEY: readEnv('SUPABASE_ANON_KEY'),
  SUPABASE_SCHEMA: readEnv('SUPABASE_SCHEMA'),
  PROJECT_ID: readEnv('PROJECT_ID'),
  APP_TITLE: readEnv('APP_TITLE', false) || 'LAA Training Quiz',
};
