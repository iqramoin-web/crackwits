// Builds the favicon set from the white Crackwits emblem
// (assets/originals/brand/crackwits-emblem-white.png):
//   favicon.svg       — one icon that is ink on light browser chrome, white on dark
//   icon-light.png    — ink emblem, for light themes (fallback)
//   icon-dark.png     — white emblem, for dark themes (fallback)
//   apple-touch-icon  — white emblem on ink, for home screens
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const root = join(import.meta.dirname, "..");
const source = join(root, "assets/originals/brand/crackwits-emblem-white.png");
const out = (name) => join(root, "public", name);
const INK = "#232122";

// Emblem alpha channel, trimmed to the shape and centred on a square canvas.
async function squareMask(size, padding) {
  const alpha = await sharp(source).extractChannel("alpha").trim({ threshold: 10 }).toBuffer();
  const inner = Math.round(size * (1 - padding * 2));
  const pad = Math.floor((size - inner) / 2);
  return sharp(alpha)
    .resize(inner, inner, { fit: "contain", background: "#000" })
    .extend({ top: pad, bottom: size - inner - pad, left: pad, right: size - inner - pad, background: "#000" })
    .extractChannel(0)
    .png()
    .toBuffer();
}

async function tinted(size, padding, color, background) {
  const mask = await squareMask(size, padding);
  const fill = sharp({ create: { width: size, height: size, channels: 3, background: color } }).joinChannel(mask);
  const icon = await fill.png().toBuffer();
  if (!background) return icon;
  return sharp({ create: { width: size, height: size, channels: 4, background } })
    .composite([{ input: icon }])
    .png()
    .toBuffer();
}

writeFileSync(out("icon-light.png"), await tinted(64, 0.04, INK));
writeFileSync(out("icon-dark.png"), await tinted(64, 0.04, "#ffffff"));
writeFileSync(out("apple-touch-icon.png"), await tinted(180, 0.2, "#ffffff", INK));

// SVG: the emblem as a luminance mask over a rect whose fill follows the theme.
const mask = (await squareMask(256, 0.04)).toString("base64");
writeFileSync(
  out("favicon.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <style>rect{fill:${INK}}@media (prefers-color-scheme:dark){rect{fill:#fff}}</style>
  <mask id="m"><image href="data:image/png;base64,${mask}" width="256" height="256"/></mask>
  <rect width="256" height="256" mask="url(#m)"/>
</svg>
`,
);
console.log("favicons written");
