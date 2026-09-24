import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import bcrypt from "bcryptjs";
import { sendWelcomeEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const { email, password, full_name } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    // Hash the password
    const password_hash = await bcrypt.hash(password, 10);

    // Insert into profiles (bypass RLS using service role key)
    const { data: profile, error } = await supabaseAdmin
      .from("profiles")
      .insert({
        email,
        full_name,
        password_hash,
        role: "student", // default role
      })
      .select()
      .single();

    if (error) {
      if (error.code === '23505') { // Unique violation
        return NextResponse.json({ error: "Email already exists" }, { status: 409 });
      }
      throw error;
    }

    // Send Welcome Email
    if (full_name) {
      await sendWelcomeEmail(email, full_name);
    }

    return NextResponse.json({ success: true, user: { id: profile.id, email: profile.email, full_name: profile.full_name } });
  } catch (error: unknown) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
