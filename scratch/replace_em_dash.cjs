const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function replaceEmDashes() {
  const dirsToScan = ['./src', './docs'];

  dirsToScan.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    walkDir(dir, function(filePath) {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.md')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Custom replacements based on user examples
        content = content.replace(/Equipment rental, certified containers, and welding supply — all from one company\./g, 'Equipment rental, certified containers, and welding supply, all from one company.');
        content = content.replace(/Equipment Rental UAE \| Weekly & Long-Term Industrial Hire — Xshore/g, 'Equipment Rental UAE | Weekly & Long-Term Industrial Hire | Xshore');
        content = content.replace(/Hydro Testing Equipment — Rental & Supply UAE/g, 'Hydro Testing Equipment Rental & Supply UAE');
        
        // General replacements
        // 1. In SEO titles/meta (lines containing title: or og:title or content: )
        content = content.split('\n').map(line => {
          if (line.includes('title:') || line.includes('og:title') || line.includes('description') || line.includes('<title>')) {
            return line.replace(/ — /g, ' | ');
          }
          if (line.includes('detailH1')) {
            return line.replace(/ — /g, ' ');
          }
          if (line.includes('<h1>')) {
            return line.replace(/ — /g, ', ');
          }
          // Default replacement for body text/lists
          return line.replace(/ — /g, ' - ').replace(/—/g, '-');
        }).join('\n');

        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Updated: ${filePath}`);
        }
      }
    });
  });
}

replaceEmDashes();
