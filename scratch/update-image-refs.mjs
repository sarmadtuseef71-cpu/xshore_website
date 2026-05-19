/**
 * Phase 1B: Update all local image references from .jpg/.jpeg to .webp
 * Rules:
 *  - Skip external Unsplash URLs
 *  - Keep JPG for 5 files where WebP ended up larger
 *  - Update catalog.ts, index.tsx, equipment-rental.index.tsx
 *  - Update getAlt() to resolve webp keys against jpg-keyed imageAltText
 *  - Update .replace('.jpg','') fallbacks in catalog.ts map callbacks
 */

import { readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// Files where WebP is LARGER — keep JPG references
const KEEP_JPG = new Set([
  'xshore-zone2-atex-container-uae-13.jpg',
  'xshore-zone2-atex-container-uae-14.jpg',
  'xshore-mobile-gantry-lifting-gear-uae-05.jpg',
  'xshore-mobile-gantry-lifting-gear-uae-06.jpg',
  'xshore-mobile-gantry-lifting-gear-uae-07.jpg',
]);

/**
 * Replace local /images/... .jpg paths with .webp,
 * but skip files in KEEP_JPG set and skip external http(s) URLs.
 */
function replaceLocalJpgWithWebp(content) {
  // Match any local image path ending in .jpg or .jpeg
  // Patterns found in code:
  //   /images/rental/hydro-testing/xshore-*.jpg
  //   /images/fabrication/dnv-containers/xshore-*.jpg
  //   "xshore-*.jpg"  (bare filenames in gallery arrays)
  //   r(`hydro-testing/xshore-*.jpg`)
  //
  // We match strings that contain a .jpg-named file and are NOT http URLs
  return content.replace(
    /(?<!https?:\/\/[^\s"')]*)(xshore-[a-z0-9-]+\.jpg)/g,
    (match, filename) => {
      if (KEEP_JPG.has(filename)) return match; // keep as JPG
      return filename.replace('.jpg', '.webp');
    }
  );
}

async function processFile(relPath, extraTransforms = []) {
  const absPath = join(ROOT, relPath);
  const original = await readFile(absPath, 'utf-8');
  let updated = replaceLocalJpgWithWebp(original);

  for (const fn of extraTransforms) {
    updated = fn(updated);
  }

  if (updated === original) {
    console.log(`  (no changes needed) ${relPath}`);
    return 0;
  }

  // Count how many .webp references were introduced
  const jpgMatches = (original.match(/xshore-[a-z0-9-]+\.jpg/g) || []).filter(m => !KEEP_JPG.has(m));
  const webpMatches = (updated.match(/xshore-[a-z0-9-]+\.webp/g) || []).length;

  await writeFile(absPath, updated, 'utf-8');
  console.log(`  ✓ Updated: ${relPath}  (${jpgMatches.length} .jpg refs → .webp, now ${webpMatches} .webp refs)`);
  return jpgMatches.length;
}

// Extra transform for catalog.ts:
// 1) Update getAlt() to normalize .webp keys to .jpg for imageAltText lookup
// 2) Update .replace('.jpg', '') fallbacks in map() callbacks to handle .webp too
function catalogExtraTransforms(content) {
  // 1. Update getAlt() body
  content = content.replace(
    `export const getAlt = (file: string, fallback: string) => {\n  const filename = file.split('/').pop() || "";\n  return imageAltText[filename] || fallback;\n};`,
    `export const getAlt = (file: string, fallback: string) => {\n  const filename = file.split('/').pop() || "";\n  const jpgKey = filename.replace(/\\.(webp|jpeg)$/i, '.jpg');\n  return imageAltText[filename] || imageAltText[jpgKey] || fallback;\n};`
  );

  // 2. Update .replace('.jpg', '') → .replace(/\.(jpg|webp)$/i, '') in map fallbacks
  // These appear as part of the alt fallback string construction
  content = content.replace(
    /\.replace\('xshore-', ''\)\.replace\('\.jpg', ''\)\.replace\(\/-\//g,
    (m) => m.replace(".replace('.jpg', '')", ".replace(/\\.(jpg|webp)$/i, '')")
  );

  return content;
}

async function main() {
  console.log('Phase 1B: Updating image references to WebP\n');
  console.log(`Keep JPG (WebP larger): ${[...KEEP_JPG].join(', ')}\n`);

  let totalChanged = 0;

  // 1. catalog.ts — heroes + galleries + getAlt + fallbacks
  console.log('Processing src/data/catalog.ts...');
  totalChanged += await processFile('src/data/catalog.ts', [catalogExtraTransforms]);

  // 2. index.tsx — equipment card images
  console.log('Processing src/routes/index.tsx...');
  totalChanged += await processFile('src/routes/index.tsx');

  // 3. equipment-rental.index.tsx — category card images
  console.log('Processing src/routes/equipment-rental.index.tsx...');
  totalChanged += await processFile('src/routes/equipment-rental.index.tsx');

  // 4. fabrication.index.tsx — category cards use catalog.ts heroes, hero is Unsplash
  console.log('Processing src/routes/fabrication.index.tsx...');
  totalChanged += await processFile('src/routes/fabrication.index.tsx');

  // 5. trading.index.tsx — all Unsplash, but check anyway
  console.log('Processing src/routes/trading.index.tsx...');
  totalChanged += await processFile('src/routes/trading.index.tsx');

  // 6. styles.css — all Unsplash backgrounds, check anyway
  console.log('Processing src/styles.css...');
  totalChanged += await processFile('src/styles.css');

  // 7. DetailPage.tsx — uses category.hero from catalog, check anyway
  console.log('Processing src/components/DetailPage.tsx...');
  totalChanged += await processFile('src/components/DetailPage.tsx');

  console.log(`\n✓ Phase 1B complete. Total local .jpg→.webp refs updated: ${totalChanged}`);
  console.log(`  JPG refs intentionally preserved (WebP larger): ${KEEP_JPG.size} files`);
  console.log([...KEEP_JPG].map(f => `    - ${f}`).join('\n'));
}

main().catch(e => { console.error(e); process.exit(1); });
