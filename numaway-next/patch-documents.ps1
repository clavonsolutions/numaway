$content = Get-Content "src\views\app\Documents.tsx" -Raw

$content = $content -replace 'const StudentDocuments = \(\): JSX\.Element => \{', "const StudentDocuments = (): JSX.Element => {`r`n  const { profile, session } = useAuth();"
$content = $content -replace 'const { profile } = useAuth\(\);', ''

$uploadRegex = '(?s)const \{ error: storageError \}.*?if \(storageError\) \{.*?\}'
$uploadReplacement = @"
    const presignRes = await fetch('/api/documents/presign-upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"Bearer ${session?.access_token}`"
      },
      body: JSON.stringify({ filename: file.name, contentType: file.type || `"application/octet-stream`" })
    });
    
    if (!presignRes.ok) {
      setUploading(false);
      toast({ title: `"Upload failed`", description: `"Could not get upload URL`", variant: `"destructive`" });
      return;
    }
    
    const { url, key } = await presignRes.json();
    
    const uploadRes = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': file.type || `"application/octet-stream`"
      },
      body: file
    });

    if (!uploadRes.ok) {
      setUploading(false);
      toast({ title: `"Upload failed`", description: `"Storage upload failed`", variant: `"destructive`" });
      return;
    }
    
    const path = key;
"@
$content = $content -replace $uploadRegex, $uploadReplacement

$content = $content -replace 'const ext = file\.name\.split\("\."\)\.pop\(\) \?\? "bin";\s*const path = `\$\{profile\.id\}/\$\{Date\.now\(\)\}\.\$\{ext\}`;', ''

$downloadRegex = '(?s)const \{ data \} = await supabase\.storage\s*\.from\(DOC_BUCKET\)\s*\.createSignedUrl\(doc\.storage_path, 60\);\s*if \(data\?\.signedUrl\) \{\s*window\.open\(data\.signedUrl, "_blank"\);\s*\}'
$downloadReplacement = @"
    const presignRes = await fetch('/api/documents/presign-download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"Bearer ${session?.access_token}`"
      },
      body: JSON.stringify({ key: doc.storage_path })
    });
    if (presignRes.ok) {
      const { url } = await presignRes.json();
      if (url) window.open(url, `"_blank`");
    }
"@
$content = $content -replace $downloadRegex, $downloadReplacement

$deleteRegex = 'await supabase\.storage\.from\(DOC_BUCKET\)\.remove\(\[doc\.storage_path\]\);'
$deleteReplacement = @"
    await fetch('/api/documents/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"Bearer ${session?.access_token}`"
      },
      body: JSON.stringify({ key: doc.storage_path })
    });
"@
$content = $content -replace $deleteRegex, $deleteReplacement

[IO.File]::WriteAllText((Join-Path (Get-Location) "src\views\app\Documents.tsx"), $content, [System.Text.Encoding]::UTF8)
