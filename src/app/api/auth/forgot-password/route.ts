import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { sendResetPasswordEmail } from "@/lib/email";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const { data: profile, error } = await supabaseAdmin
      .from("profiles")
      .select("id")
      .eq("email", email)
      .single();

    if (error || !profile) {
      // Return success anyway to prevent email enumeration
      return NextResponse.json({ success: true });
    }

    // Generate token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpires = new Date(Date.now() + 3600000).toISOString(); // 1 hour

    const { error: updateError } = await supabaseAdmin
      .from("profiles")
      .update({
        reset_token: resetToken,
        reset_token_expires: resetTokenExpires,
      })
      .eq("id", profile.id);

    if (updateError) {
      throw updateError;
    }

    // Send Reset Email
    await sendResetPasswordEmail(email, resetToken);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Forgot password error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
