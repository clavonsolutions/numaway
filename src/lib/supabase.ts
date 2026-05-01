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
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const HTTPS_RE = /^https?:\/\//i;

const rawUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const rawKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Explicit format guard — handles undefined, "", and the string "undefined"
// that Vite substitutes for missing vars in SSR/SSG Node.js context.
const supabaseUrl: string =
  rawUrl && HTTPS_RE.test(rawUrl) ? rawUrl : "https://placeholder.supabase.co";

const supabaseAnonKey: string =
  rawKey && rawKey !== "undefined" ? rawKey : "placeholder-anon-key";

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
