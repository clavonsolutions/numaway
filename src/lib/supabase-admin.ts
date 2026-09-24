import { createClient } from "@supabase/supabase-js";

// Uses the service role key to bypass RLS.
// This client MUST ONLY be used on the server, never on the client.
export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
