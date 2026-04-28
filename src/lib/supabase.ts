/**
 * Supabase client singleton — ADR-015 (Database: Supabase PostgreSQL)
 * Uses VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.
 * Only the public anon key is exposed to the browser.
 * Service-role key is server-side only (Sage proxy, Edge Functions).
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

// Fall back to placeholder strings during SSG prerender (no browser env available).
// The client will exist but API calls will fail at runtime — caught by AuthContext.
// In the browser, the env vars must be set via .env.local (see .env.local.example).
const supabaseUrl =
  (import.meta.env.VITE_SUPABASE_URL as string | undefined) ||
  "https://placeholder.supabase.co";
const supabaseAnonKey =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ||
  "placeholder-anon-key";

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
