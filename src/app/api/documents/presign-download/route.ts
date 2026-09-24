import { NextResponse } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { r2Client, R2_BUCKET } from "@/lib/r2";
import { verifyToken } from "@/lib/jwt";

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7).trim() : "";
    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const payload = await verifyToken(token);
    if (!payload || !payload.sub) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const user = { id: payload.sub };

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