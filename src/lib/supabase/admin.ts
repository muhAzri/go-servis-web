import { createClient } from "@supabase/supabase-js";

/**
 * Service-role client using the Supabase secret key. Bypasses RLS, so it must
 * ONLY ever run on the server (e.g. the /api/feedback route). Never import this
 * into a Client Component.
 */
export function createAdminClient() {
  const secretKey = process.env.SUPABASE_SECRET_KEY;
  if (!secretKey) {
    throw new Error(
      "SUPABASE_SECRET_KEY is not set. Add it to .env.local (Supabase Dashboard > Settings > API Keys > secret key).",
    );
  }

  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, secretKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
