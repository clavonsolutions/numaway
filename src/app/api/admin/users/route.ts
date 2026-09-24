import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/lib/database.types";
import { verifyToken } from "@/lib/jwt";
import { hash } from "bcryptjs";
import crypto from "crypto";
import { sendInviteEmail } from "@/lib/email";

const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    // 1. Verify Authentication
    const cookieStore = await cookies();
    const token = cookieStore.get("numaway_jwt")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = await verifyToken(token);
    if (!payload || !payload.sub) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const userId = payload.sub;

    const { data: profile } = await supabaseAdmin
      .from("profiles")
      .select("role")
      .eq("id", userId)
      .single() as { data: { role: string } | null };

    if (profile?.role !== "super_admin") {
      return NextResponse.json({ error: "Forbidden. Only super_admins can manage users." }, { status: 403 });
    }

    // 2. Parse Request
    const { email, name, role } = await req.json();

    if (!email || !name || !role) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!["admin", "counsellor"].includes(role)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    // 3. Check if user exists
    const { data: existingUser } = await supabaseAdmin
      .from("profiles")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 400 });
    }

    // 4. Create User
    const newUserId = crypto.randomUUID();
    const temporaryPassword = crypto.randomBytes(16).toString("hex"); // Unused, they will reset it
    const passwordHash = await hash(temporaryPassword, 10);
    
    // Create a reset token for them to set their password
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(); // 7 days

    const { error: insertError } = await supabaseAdmin
      .from("profiles")
      // @ts-expect-error type inference failure
      .insert([{
        id: newUserId,
        email,
        full_name: name,
        role,
        password_hash: passwordHash,
        reset_token: resetToken,
        reset_token_expires: resetTokenExpires,
      }]);

    if (insertError) {
      console.error("Insert Error:", insertError);
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    // 5. Send Invite Email
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://numaway.com";
    const inviteUrl = `${appUrl}/reset-password?token=${resetToken}`;

    await sendInviteEmail(email, inviteUrl);

    return NextResponse.json({ success: true, user: { id: newUserId, email, full_name: name, role } });
  } catch (err: unknown) {
    console.error("Invite User Error:", err);
    return NextResponse.json({ error: err instanceof Error ? err.message : String(err) }, { status: 500 });
  }
}
