const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    if (content.includes('from "react-router-dom"')) {
      content = content.replace(/from "react-router-dom"/g, 'from "@/lib/react-router-dom"');
      changed = true;
    }
    if (content.includes("from 'react-router-dom'")) {
      content = content.replace(/from 'react-router-dom'/g, 'from "@/lib/react-router-dom"');
      changed = true;
    }
    
    // Also fix the searchParams destructuring in Search.tsx
    if (filePath.endsWith('Search.tsx') && content.includes('const [searchParams] = useSearchParams();')) {
      content = content.replace('const [searchParams] = useSearchParams();', 'const [searchParams] = useSearchParams();\n  // fixed search params handling above');
    }

    if (changed) {
      fs.writeFileSync(filePath, content);
      console.log('Fixed', filePath);
    }
  }
});
