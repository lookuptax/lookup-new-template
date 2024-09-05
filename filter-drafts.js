const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'dist');

function removeDraftPages(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      removeDraftPages(filePath);
    } else if (file.endsWith('.html')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('<meta name="draft" content="true">')) {
        console.log(`Removing draft page: ${file}`);
        fs.unlinkSync(filePath);  // Ensure draft pages are removed
      }
    }
  });
}

removeDraftPages(outputDir);
