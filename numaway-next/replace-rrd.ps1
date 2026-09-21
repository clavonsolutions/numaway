$files = Get-ChildItem -Path src\views -Recurse -Filter *.tsx
foreach ($file in $files) {
  $content = Get-Content $file.FullName -Raw
  $newContent = $content -replace 'from\s+["'']react-router-dom["'']', 'from "@/lib/react-router-dom"'
  if ($newContent -cne $content) {
    Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
  }
}
