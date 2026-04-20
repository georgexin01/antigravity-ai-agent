/**
 * Supabase clients — centralized in src/config/ per project convention.
 *
 * Two clients by design (one client = one schema binding):
 *   - `supabase`      → quizLaa business schema (all business tables)
 *   - `publicClient`  → public schema (auth/role/project RBAC bridge)
 */

import { createClient } from '@supabase/supabase-js';

import { env } from './env';

/** Business schema client — default for all data stores. */
export const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
  },
  db: {
    schema: env.SUPABASE_SCHEMA,
  },
});

/** Public schema client — auth.users / public.user / public.project lookups. */
export const publicClient = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
  db: {
    schema: 'public',
  },
});
