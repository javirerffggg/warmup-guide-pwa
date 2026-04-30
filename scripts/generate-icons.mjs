// Run with: node scripts/generate-icons.mjs
// Requires: npm install sharp
import sharp from 'sharp';
import { readFileSync, mkdirSync } from 'fs';

mkdirSync('icons', { recursive: true });

const svgBuffer = readFileSync('icons/icon.svg');
const sizes = [180, 192, 512];

for (const size of sizes) {
  await sharp(svgBuffer)
    .resize(size, size)
    .png()
    .toFile(`icons/icon-${size}.png`);
  console.log(`✅ icons/icon-${size}.png`);
}
