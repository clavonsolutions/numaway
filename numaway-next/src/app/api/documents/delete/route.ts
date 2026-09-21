import { NextResponse } from "next/server";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
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

    if (!key.startsWith(user.id + "/")) {
       return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const command = new DeleteObjectCommand({
      Bucket: R2_BUCKET,
      Key: key,
    });

    await r2Client.send(command);
    
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[r2-delete] Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}