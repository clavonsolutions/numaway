import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { verifyToken } from "@/lib/jwt";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("numaway_jwt")?.value;

    if (!token) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    let payload;
    try {
      payload = await verifyToken(token);
    } catch {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    const { data: profile, error } = await supabaseAdmin
      .from("profiles")
      .select("id, email, role, full_name, avatar_url")
      .eq("id", payload.sub)
      .single();

    if (error || !profile) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    return NextResponse.json({ user: profile });
  } catch (error: unknown) {
    console.error("Auth check error:", error);
    return NextResponse.json({ user: null }, { status: 500 });
  }
}
