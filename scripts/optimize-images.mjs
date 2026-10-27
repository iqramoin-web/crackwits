// Converts heavy PNG/JPG portfolio imagery in public/ to WebP (max 2048px wide),
// moves the originals to assets/originals/ (kept out of the deployed build),
// and rewrites references in src/ to the new .webp paths.
//
//   node scripts/optimize-images.mjs            # convert + rewrite
//   node scripts/optimize-images.mjs --dry-run  # just report
import { existsSync, mkdirSync, readdirSync, readFileSync, renameSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import sharp from "sharp";

const root = join(import.meta.dirname, "..");
const publicDir = join(root, "public");
const originalsDir = join(root, "assets/originals");
const DIRS = ["case-studies", "work", "selected-work", "about", "insights", "industries"];
const MIN_BYTES = 150 * 1024; // leave small files alone
const dryRun = process.argv.includes("--dry-run");

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const renamed = new Map(); // "/work/x.png" -> "/work/x.webp"
let before = 0;
let after = 0;

for (const d of DIRS) {
  const dir = join(publicDir, d);
  if (!existsSync(dir)) continue;
  for (const file of walk(dir)) {
    if (!/\.(png|jpe?g)$/i.test(file)) continue;
    const size = statSync(file).size;
    if (size < MIN_BYTES) continue;
    const out = file.replace(/\.(png|jpe?g)$/i, ".webp");
    const webPath = "/" + relative(publicDir, file).split("\\").join("/");
    renamed.set(webPath, webPath.replace(/\.(png|jpe?g)$/i, ".webp"));
    before += size;
    if (dryRun) continue;
    await sharp(file).resize({ width: 2048, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
    after += statSync(out).size;
    const archived = join(originalsDir, relative(publicDir, file));
    mkdirSync(dirname(archived), { recursive: true });
    renameSync(file, archived);
  }
}

if (!dryRun && renamed.size) {
  const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  for (const file of walk(join(root, "src"))) {
    if (!/\.(tsx?|css)$/.test(file)) continue;
    const text = readFileSync(file, "utf8");
    let next = text;
    for (const [from, to] of renamed) {
      // also matches cache-busting suffixes like ?v=2
      next = next.replace(new RegExp(escape(from) + "(?=[?\"'`)])", "g"), to);
    }
    if (next !== text) writeFileSync(file, next);
  }
}

const mb = (n) => (n / 1024 / 1024).toFixed(1) + " MB";
console.log(`${renamed.size} images ${dryRun ? "would be converted" : "converted"}: ${mb(before)}${dryRun ? "" : " → " + mb(after)}`);
