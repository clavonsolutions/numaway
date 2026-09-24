/**
 * Supabase client singleton — Custom JWT Integration
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const HTTPS_RE = /^https?:\/\//i;
const SENTINEL_STRINGS = new Set(["undefined", "null"]);
const MIN_KEY_LENGTH = 20;

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string | undefined;
const rawKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string | undefined;

const supabaseUrl: string =
  rawUrl && HTTPS_RE.test(rawUrl) ? rawUrl : "https://placeholder.supabase.co";

const supabaseAnonKey: string =
  rawKey && !SENTINEL_STRINGS.has(rawKey) && rawKey.length >= MIN_KEY_LENGTH
    ? rawKey
    : "placeholder-anon-key";

// Helper to get cookie on the client side
function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return null;
}

// Custom fetch wrapper to dynamically inject our JWT
const customFetch = async (url: RequestInfo | URL, options?: RequestInit) => {
  const token = getCookie("numaway_jwt");
  
  const headers = new Headers(options?.headers);
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  
  return fetch(url, { ...options, headers });
};

export const supabase: SupabaseClient<Database> = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: false, // We handle our own session via cookies
      autoRefreshToken: false,
    },
    global: {
      fetch: customFetch,
    }
  }
);
