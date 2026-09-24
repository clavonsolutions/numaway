import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/jwt";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    const { data: profile, error } = await supabaseAdmin
      .from("profiles")
      .select("id, email, password_hash, role, full_name, avatar_url")
      .eq("email", email)
      .single();

    if (error || !profile) {
      return NextResponse.json({ error: "Invalid login credentials" }, { status: 401 });
    }

    if (!profile.password_hash) {
      return NextResponse.json({ error: "Please reset your password to log in" }, { status: 401 });
    }

    const passwordMatch = await bcrypt.compare(password, profile.password_hash);
    
    if (!passwordMatch) {
      return NextResponse.json({ error: "Invalid login credentials" }, { status: 401 });
    }

    // Generate JWT
    const token = await signToken({
      sub: profile.id,
      email: profile.email,
      role: "authenticated",
    });

    // Set HTTP-only cookie
    const cookieStore = await cookies();
    cookieStore.set("numaway_jwt", token, {
      httpOnly: false, // Must be false so the client-side supabase instance can read it
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    });

    const userProfile = {
      id: profile.id,
      email: profile.email,
      role: profile.role,
      full_name: profile.full_name,
      avatar_url: profile.avatar_url
    };

    return NextResponse.json({ success: true, user: userProfile });
  } catch (error: unknown) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
