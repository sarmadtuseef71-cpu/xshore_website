import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SVG_PATH = 'public/images/logo/xshore_logo.svg';
const OUTPUT_DIR = 'public/images/og';
const OUTPUT_PNG = path.join(OUTPUT_DIR, 'xshore-og-image.png');

async function main() {
  console.log('Reading logo SVG...');
  const logoSvg = fs.readFileSync(SVG_PATH, 'utf-8');

  // Extract paths/elements from logo SVG (everything inside <svg>...</svg>)
  const pathsMatch = logoSvg.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
  if (!pathsMatch) {
    throw new Error('Could not parse SVG paths from logo');
  }
  const logoContents = pathsMatch[1];

  // Make sure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Construct the parent SVG for the 1200x630 OG image
  const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gold Gradient definition -->
    <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFA72E" />
      <stop offset="50%" stop-color="#FEA92C" />
      <stop offset="100%" stop-color="#B87D1B" />
    </linearGradient>
    
    <!-- Dark background gradient for a subtle premium vignette effect -->
    <radialGradient id="bg-gradient" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#141212" />
      <stop offset="100%" stop-color="#070606" />
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg-gradient)" />

  <!-- Elegant gold frame border -->
  <rect x="20" y="20" width="1160" height="590" rx="8" fill="none" stroke="url(#gold-gradient)" stroke-width="4" stroke-opacity="0.85" />

  <!-- Logo Group -->
  <g transform="translate(100, 115) scale(0.39)">
    ${logoContents}
  </g>

  <!-- Vertical Divider Line -->
  <line x1="535" y1="160" x2="535" y2="470" stroke="url(#gold-gradient)" stroke-width="3" stroke-linecap="round" opacity="0.8" />

  <!-- Typography Group -->
  <g transform="translate(585, 0)">
    <!-- Line 1: Equipment and Tools Rental -->
    <text x="0" y="265" font-family="system-ui, -apple-system, sans-serif" font-size="38" font-weight="bold" fill="#FFFFFF" letter-spacing="0.5">Equipment and Tools Rental</text>
    
    <!-- Line 2: Certified Containers -->
    <text x="0" y="335" font-family="system-ui, -apple-system, sans-serif" font-size="38" font-weight="bold" fill="#FFFFFF" letter-spacing="0.5">Certified Containers</text>
    
    <!-- Line 3: and Welding Supplies (Gold Accent) -->
    <text x="0" y="405" font-family="system-ui, -apple-system, sans-serif" font-size="38" font-weight="bold" fill="url(#gold-gradient)" letter-spacing="0.5">and Welding Supplies</text>
  </g>
</svg>
  `;

  console.log('Rendering OG image to PNG...');
  await sharp(Buffer.from(ogSvg))
    .png()
    .toFile(OUTPUT_PNG);

  console.log(`Successfully generated OG image at: ${OUTPUT_PNG}`);
}

main().catch(console.error);
