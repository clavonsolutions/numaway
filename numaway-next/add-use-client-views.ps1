$files = Get-ChildItem -Path src\views -Recurse -Filter *.tsx
foreach ($file in $files) {
  $content = Get-Content $file.FullName -Raw
  if ($content -notmatch "^\s*`"use client`";") {
    Set-Content -Path $file.FullName -Value ("`"use client`";`n" + $content) -Encoding UTF8
  }
}
