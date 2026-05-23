import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Path configuration
const SVG_PATH = 'public/images/logo/xshore_logo.svg';
const OUTPUT_ICO = 'public/favicon.ico';
const OUTPUT_PNG = 'public/favicon.png';

// Generate ICO buffer from PNG buffers
function createIco(pngBuffers, sizes) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(pngBuffers.length, 4); // Number of images

  const entries = [];
  let offset = 6 + pngBuffers.length * 16;

  for (let i = 0; i < pngBuffers.length; i++) {
    const buf = pngBuffers[i];
    const size = sizes[i];
    
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // Width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // Height
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(buf.length, 8); // Size of image data
    entry.writeUInt32LE(offset, 12); // Offset
    
    entries.push(entry);
    offset += buf.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers]);
}

async function main() {
  console.log('Reading SVG...');
  const svgBuffer = fs.readFileSync(SVG_PATH);
  
  // We will generate the following sizes for the ICO: 16x16, 32x32, 48x48, 256x256
  const sizes = [16, 32, 48, 256];
  const pngBuffers = [];

  for (const size of sizes) {
    console.log(`Rendering size ${size}x${size}...`);
    
    // For smaller sizes (16, 32, 48), we want a high-quality resize.
    // We can render the SVG at a higher resolution first, then resize with sharp.
    // Sharp renders SVGs by setting the density based on the target size.
    // Since the SVG has a transparent background, we composite it onto a solid black background.
    const rendered = await sharp(svgBuffer, { density: Math.round((size / 1024) * 72 * 10) }) // scale density
      .resize({
        width: size,
        height: size,
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      })
      .flatten({ background: { r: 0, g: 0, b: 0 } })
      .png()
      .toBuffer();
      
    pngBuffers.push(rendered);
  }

  console.log('Generating ICO file...');
  const icoBuffer = createIco(pngBuffers, sizes);
  fs.writeFileSync(OUTPUT_ICO, icoBuffer);
  console.log(`Saved ICO to ${OUTPUT_ICO}`);

  // Save the main PNG version (use 256x256 size for compatibility)
  console.log('Generating PNG file...');
  const pngBuffer = await sharp(svgBuffer)
    .resize({
      width: 256,
      height: 256,
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 1 }
    })
    .flatten({ background: { r: 0, g: 0, b: 0 } })
    .png()
    .toBuffer();
    
  fs.writeFileSync(OUTPUT_PNG, pngBuffer);
  console.log(`Saved PNG to ${OUTPUT_PNG}`);
  
  console.log('Done!');
}

main().catch(console.error);
