/**
 * Phase 1A: Convert all JPG/JPEG images in public/images/ to WebP
 * - Keeps original JPG files (backup)
 * - Uses quality 82 for hero/card images (larger originals)
 * - Uses quality 78 for gallery images (smaller originals)
 * - Reports full conversion stats
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMAGE_ROOT = join(__dirname, '..', 'public', 'images');

// Quality tiers based on original file size
// Hero/card candidates (>300 KB original) → quality 82
// Gallery images (≤300 KB) → quality 78
const QUALITY_LARGE = 82;  // for bigger originals (heroes, cards)
const QUALITY_SMALL = 78;  // for smaller originals (gallery)

async function getAllJpgs(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      const sub = await getAllJpgs(fullPath);
      files.push(...sub);
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (ext === '.jpg' || ext === '.jpeg') {
        files.push(fullPath);
      }
    }
  }
  return files;
}

function formatBytes(bytes) {
  if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  return Math.round(bytes / 1024) + ' KB';
}

async function main() {
  console.log('='.repeat(60));
  console.log(' Phase 1A: WebP Conversion');
  console.log('='.repeat(60));
  console.log(`Image root: ${IMAGE_ROOT}\n`);

  const jpgFiles = await getAllJpgs(IMAGE_ROOT);
  console.log(`Found ${jpgFiles.length} JPG/JPEG files.\n`);

  let totalOriginalBytes = 0;
  let totalWebpBytes = 0;
  let successCount = 0;
  const failures = [];
  const webpResults = []; // { file, originalBytes, webpBytes }

  for (const jpgPath of jpgFiles) {
    const webpPath = jpgPath.replace(/\.(jpg|jpeg)$/i, '.webp');
    const webpFilename = basename(webpPath);

    try {
      // Get original file size
      const origStat = await stat(jpgPath);
      const origBytes = origStat.size;
      totalOriginalBytes += origBytes;

      // Choose quality based on original size (>300 KB = hero/card tier)
      const quality = origBytes > 300 * 1024 ? QUALITY_LARGE : QUALITY_SMALL;

      // Convert
      await sharp(jpgPath)
        .webp({ quality, effort: 6 })
        .toFile(webpPath);

      // Get new size
      const webpStat = await stat(webpPath);
      const webpBytes = webpStat.size;
      totalWebpBytes += webpBytes;

      const pct = ((1 - webpBytes / origBytes) * 100).toFixed(1);
      webpResults.push({ file: webpFilename, originalBytes: origBytes, webpBytes, pct });

      console.log(`✓ ${webpFilename.padEnd(60)} ${formatBytes(origBytes).padStart(9)} → ${formatBytes(webpBytes).padStart(9)}  (${pct}% saved, q${quality})`);
      successCount++;

    } catch (err) {
      console.error(`✗ FAILED: ${jpgPath}`);
      console.error(`  Error: ${err.message}`);
      failures.push({ path: jpgPath, error: err.message });

      // Still count original size for totals
      try {
        const s = await stat(jpgPath);
        totalOriginalBytes += s.size;
      } catch {}
    }
  }

  // Sort webpResults by webpBytes descending for top-10
  const top10 = [...webpResults]
    .sort((a, b) => b.webpBytes - a.webpBytes)
    .slice(0, 10);

  const totalSaved = totalOriginalBytes - totalWebpBytes;
  const totalPct = ((1 - totalWebpBytes / totalOriginalBytes) * 100).toFixed(1);

  console.log('\n' + '='.repeat(60));
  console.log(' CONVERSION REPORT');
  console.log('='.repeat(60));
  console.log(`A. Total JPG files found:       ${jpgFiles.length}`);
  console.log(`B. Total WebP files created:    ${successCount}`);
  console.log(`C. Original total size:         ${formatBytes(totalOriginalBytes)}`);
  console.log(`D. New total WebP size:         ${formatBytes(totalWebpBytes)}`);
  console.log(`E. Percentage reduction:        ${totalPct}% (saved ${formatBytes(totalSaved)})`);

  console.log('\nF. Top 10 largest WebP files:');
  top10.forEach((r, i) => {
    console.log(`   ${String(i + 1).padStart(2)}. ${r.file.padEnd(60)} ${formatBytes(r.webpBytes).padStart(9)}  (was ${formatBytes(r.originalBytes)}, ${r.pct}% saved)`);
  });

  if (failures.length > 0) {
    console.log(`\nG. Conversion failures (${failures.length}):`);
    failures.forEach(f => console.log(`   ✗ ${f.path}\n     ${f.error}`));
  } else {
    console.log('\nG. Conversion failures:         None ✅');
  }

  console.log('\n' + '='.repeat(60));
  console.log(' Done. JPG originals preserved as backup.');
  console.log('='.repeat(60));
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
