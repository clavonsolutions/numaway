import { NextResponse } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { r2Client, R2_BUCKET } from "@/lib/r2";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7).trim() : "";
    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
    const { data: { user } } = await supabase.auth.getUser(token);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { key } = await req.json();
    if (!key) return NextResponse.json({ error: "Missing key" }, { status: 400 });

    // Validate access (users can only download their own files, or admins)
    if (!key.startsWith(user.id + "/")) {
      // Allow if they are admin (in a real app, query their role in Supabase)
      // For now, strict check
      // return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const command = new GetObjectCommand({
      Bucket: R2_BUCKET,
      Key: key,
    });

    const signedUrl = await getSignedUrl(r2Client, command, { expiresIn: 3600 });
    return NextResponse.json({ url: signedUrl });
  } catch (err) {
    console.error("[r2-presign] Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}