import { NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
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

    const { filename, contentType } = await req.json();
    if (!filename) return NextResponse.json({ error: "Missing filename" }, { status: 400 });

    const ext = filename.split(".").pop() ?? "bin";
    const objectKey = "${user.id}/${Date.now()}.";

    const command = new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: objectKey,
      ContentType: contentType,
    });

    const signedUrl = await getSignedUrl(r2Client, command, { expiresIn: 3600 });
    return NextResponse.json({ url: signedUrl, key: objectKey });
  } catch (err) {
    console.error("[r2-presign] Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}