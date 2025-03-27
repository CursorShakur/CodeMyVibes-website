const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
];

async function generateIcons() {
  const inputFile = path.join(__dirname, '../public/logo.svg');
  
  for (const { size, name } of sizes) {
    const outputFile = path.join(__dirname, '../public', name);
    
    await sharp(inputFile)
      .resize(size, size)
      .png()
      .toFile(outputFile);
      
    console.log(`Generated ${name}`);
  }
}

generateIcons().catch(console.error); 