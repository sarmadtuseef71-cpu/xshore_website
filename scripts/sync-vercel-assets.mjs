// scripts/sync-vercel-assets.mjs
// Copies dist/client/assets → public/assets after vite build.
// This lets Vercel serve compiled CSS/JS as static files from public/
// without needing /dist/client/* rewrites in vercel.json.

import { cpSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const src  = join(root, "dist/client/assets");
const dest = join(root, "public/assets");

// Safely clean public/assets first to remove stale hashed builds
rmSync(dest, { recursive: true, force: true });

mkdirSync(dest, { recursive: true });
cpSync(src, dest, { recursive: true, force: true });

console.log("✓ Synced dist/client/assets → public/assets");
