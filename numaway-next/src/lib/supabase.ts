/**
 * Supabase client singleton — ADR-015 (Database: Supabase PostgreSQL)
 * Uses VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.
 * Only the public anon key is exposed to the browser.
 * Service-role key is server-side only (Sage proxy, Edge Functions).
 *
 * SSG SAFETY NOTE:
 * @supabase/supabase-js v2 calls validateSupabaseUrl() inside createClient(),
 * which throws "Invalid supabaseUrl" if the URL does not match ^https?://.
 * Vite's SSR/SSG transform replaces undefined VITE_* env vars with the string
 * "undefined" (not the JS value undefined). Since "undefined" is truthy, the
 * || operator fallback does NOT fire. We must use an explicit regex test to
 * detect any value that is not a valid HTTP(S) URL before calling createClient.
 *
 * GUARD RATIONALE:
 * - URL: HTTPS_RE.test() rejects undefined, "", "undefined", and "null"
 *   in one pass — no separate string checks needed.
 * - Key: must not be the strings "undefined" or "null" (Vite / CI substitutions)
 *   and must be at least 20 characters; Supabase anon keys are JWTs and are
 *   several hundred characters long — anything shorter is clearly malformed.
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const HTTPS_RE = /^https?:\/\//i;

// Sentinel strings that Vite or CI pipelines may substitute for a missing var.
const SENTINEL_STRINGS = new Set(["undefined", "null"]);

// Minimum plausible length for a Supabase anon key (real JWTs are 200+ chars).
const MIN_KEY_LENGTH = 20;

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string | undefined;
const rawKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string | undefined;

// URL guard: HTTPS_RE already rejects "", "undefined", and "null" — all fail
// the regex — so no separate sentinel check is required for the URL.
const supabaseUrl: string =
  rawUrl && HTTPS_RE.test(rawUrl) ? rawUrl : "https://placeholder.supabase.co";

// Key guard: reject missing, empty, sentinel strings, and obviously short values.
const supabaseAnonKey: string =
  rawKey &&
  !SENTINEL_STRINGS.has(rawKey) &&
  rawKey.length >= MIN_KEY_LENGTH
    ? rawKey
    : "placeholder-anon-key";

export const supabase: SupabaseClient<Database> = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  }
);
