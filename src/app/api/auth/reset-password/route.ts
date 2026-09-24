import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { token, password } = await request.json();

    if (!token || !password) {
      return NextResponse.json({ error: "Token and password are required" }, { status: 400 });
    }

    // Find the user with this token
    const { data: profile, error } = await supabaseAdmin
      .from("profiles")
      .select("id, reset_token_expires")
      .eq("reset_token", token)
      .single();

    if (error || !profile) {
      return NextResponse.json({ error: "Invalid or expired reset token" }, { status: 400 });
    }

    // Check expiration
    if (new Date(profile.reset_token_expires) < new Date()) {
      return NextResponse.json({ error: "Reset token has expired" }, { status: 400 });
    }

    // Hash the new password
    const password_hash = await bcrypt.hash(password, 10);

    // Update the profile
    const { error: updateError } = await supabaseAdmin
      .from("profiles")
      .update({
        password_hash,
        reset_token: null,
        reset_token_expires: null,
      })
      .eq("id", profile.id);

    if (updateError) {
      throw updateError;
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Reset password error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
