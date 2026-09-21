const fs = require('fs');
const path = require('path');

const directoriesToScan = ['src/components', 'src/views', 'src/hooks'];

function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const needsClient = /from\s+['"](framer-motion|lucide-react|react-router-dom)['"]/.test(content) || 
                          /import\s+{[^}]*(useState|useEffect|useRef|useContext|useCallback|useMemo|useRouter|usePathname|useSearchParams|useAnimation|useInView)[^}]*}\s+from/.test(content) ||
                          /useRouter|usePathname|useSearchParams/.test(content) ||
                          /framer-motion/.test(content) ||
                          /onClick=|onChange=|onSubmit=/.test(content);
      
      const hasClient = content.trim().startsWith('"use client"') || content.trim().startsWith("'use client'");
      
      if (needsClient && !hasClient) {
        fs.writeFileSync(fullPath, `"use client";\n${content}`, 'utf8');
        console.log(`Added "use client" to ${fullPath}`);
      }
    }
  }
}

directoriesToScan.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  processDirectory(fullPath);
});

console.log('Finished adding use client directives.');
