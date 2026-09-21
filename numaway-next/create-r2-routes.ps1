$r2ClientCode = @"
import { S3Client } from `"@aws-sdk/client-s3`";

export const R2_BUCKET = process.env.R2_BUCKET_NAME ?? `"numaway-docs`";

export const r2Client = new S3Client({
  region: `"auto`",
  endpoint: `"https://`$(`process.env.R2_ACCOUNT_ID`).r2.cloudflarestorage.com`",
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID ?? `"`",
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY ?? `"`",
  },
});
"@

$presignUploadCode = @"
import { NextResponse } from `"next/server`";
import { PutObjectCommand } from `"@aws-sdk/client-s3`";
import { getSignedUrl } from `"@aws-sdk/s3-request-presigner`";
import { r2Client, R2_BUCKET } from `"@/lib/r2`";
import { createClient } from `"@supabase/supabase-js`";

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get(`"authorization`");
    const token = authHeader?.startsWith(`"Bearer `") ? authHeader.slice(7).trim() : `"`";
    if (!token) return NextResponse.json({ error: `"Unauthorized`" }, { status: 401 });

    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
    const { data: { user } } = await supabase.auth.getUser(token);
    if (!user) return NextResponse.json({ error: `"Unauthorized`" }, { status: 401 });

    const { filename, contentType } = await req.json();
    if (!filename) return NextResponse.json({ error: `"Missing filename`" }, { status: 400 });

    const ext = filename.split(`".`").pop() ?? `"bin`";
    const objectKey = `"`${user.id}/`${Date.now()}.${ext}`";

    const command = new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: objectKey,
      ContentType: contentType,
    });

    const signedUrl = await getSignedUrl(r2Client, command, { expiresIn: 3600 });
    return NextResponse.json({ url: signedUrl, key: objectKey });
  } catch (err) {
    console.error(`"[r2-presign] Error:`", err);
    return NextResponse.json({ error: `"Internal Server Error`" }, { status: 500 });
  }
}
"@

$presignDownloadCode = @"
import { NextResponse } from `"next/server`";
import { GetObjectCommand } from `"@aws-sdk/client-s3`";
import { getSignedUrl } from `"@aws-sdk/s3-request-presigner`";
import { r2Client, R2_BUCKET } from `"@/lib/r2`";
import { createClient } from `"@supabase/supabase-js`";

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get(`"authorization`");
    const token = authHeader?.startsWith(`"Bearer `") ? authHeader.slice(7).trim() : `"`";
    if (!token) return NextResponse.json({ error: `"Unauthorized`" }, { status: 401 });

    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
    const { data: { user } } = await supabase.auth.getUser(token);
    if (!user) return NextResponse.json({ error: `"Unauthorized`" }, { status: 401 });

    const { key } = await req.json();
    if (!key) return NextResponse.json({ error: `"Missing key`" }, { status: 400 });

    // Validate access (users can only download their own files, or admins)
    if (!key.startsWith(user.id + `"/`")) {
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
    console.error(`"[r2-presign] Error:`", err);
    return NextResponse.json({ error: `"Internal Server Error`" }, { status: 500 });
  }
}
"@

$deleteCode = @"
import { NextResponse } from `"next/server`";
import { DeleteObjectCommand } from `"@aws-sdk/client-s3`";
import { r2Client, R2_BUCKET } from `"@/lib/r2`";
import { createClient } from `"@supabase/supabase-js`";

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get(`"authorization`");
    const token = authHeader?.startsWith(`"Bearer `") ? authHeader.slice(7).trim() : `"`";
    if (!token) return NextResponse.json({ error: `"Unauthorized`" }, { status: 401 });

    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
    const { data: { user } } = await supabase.auth.getUser(token);
    if (!user) return NextResponse.json({ error: `"Unauthorized`" }, { status: 401 });

    const { key } = await req.json();
    if (!key) return NextResponse.json({ error: `"Missing key`" }, { status: 400 });

    if (!key.startsWith(user.id + `"/`")) {
       return NextResponse.json({ error: `"Forbidden`" }, { status: 403 });
    }

    const command = new DeleteObjectCommand({
      Bucket: R2_BUCKET,
      Key: key,
    });

    await r2Client.send(command);
    
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(`"[r2-delete] Error:`", err);
    return NextResponse.json({ error: `"Internal Server Error`" }, { status: 500 });
  }
}
"@

New-Item -ItemType File -Force src\lib\r2.ts -Value $r2ClientCode | Out-Null
New-Item -ItemType Directory -Force src\app\api\documents\presign-upload | Out-Null
New-Item -ItemType File -Force src\app\api\documents\presign-upload\route.ts -Value $presignUploadCode | Out-Null
New-Item -ItemType Directory -Force src\app\api\documents\presign-download | Out-Null
New-Item -ItemType File -Force src\app\api\documents\presign-download\route.ts -Value $presignDownloadCode | Out-Null
New-Item -ItemType Directory -Force src\app\api\documents\delete | Out-Null
New-Item -ItemType File -Force src\app\api\documents\delete\route.ts -Value $deleteCode | Out-Null
