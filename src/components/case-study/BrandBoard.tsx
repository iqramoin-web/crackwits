import type { BrandTokens } from "@/content/types";
import { BOARD_FONTS } from "@/lib/fonts";
import { patternStyle } from "./patterns";

/**
 * Code-built equivalent of the RAWBANK brand-system board (1580×996):
 * photography, typography specimen, logo, palette, graphic device and voice.
 * Everything scales with the board width via container query units.
 */
export function BrandBoard({ name, tokens, images }: { name: string; tokens: BrandTokens; images: string[] }) {
  const font = BOARD_FONTS[tokens.typeface];
  const [primary, second = primary, third = second] = tokens.palette.map((p) => p.hex);
  const [photoA, photoB = photoA] = images;

  return (
    <figure className="cs-board" role="img" aria-label={`${name} brand system: logo, typography, colour palette and graphic language`}>
      <div className="cs-board-grid">
        <div className="cs-board-tile cs-board-photo cs-board-photo--a">
          <img src={photoA} alt="" loading="lazy" decoding="async" />
        </div>

        <div className="cs-board-tile cs-board-type">
          <span className="cs-board-label">Typography</span>
          <p className="cs-board-type-name" style={{ fontFamily: font }}>
            {tokens.typeface}
          </p>
          <p className="cs-board-type-glyphs" style={{ fontFamily: font }}>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz
            <br />
            0123456789
          </p>
        </div>

        <div className="cs-board-tile cs-board-logo" style={{ background: primary }}>
          <span className="cs-board-label cs-board-label--light">Logo</span>
          <p style={{ fontFamily: font }}>{tokens.wordmark}</p>
        </div>

        <div className="cs-board-tile cs-board-palette">
          {tokens.palette.map((swatch) => (
            <div key={swatch.hex + swatch.name} className="cs-board-swatch">
              <span className="cs-board-chip" style={{ background: swatch.hex }} />
              <span className="cs-board-swatch-name">{swatch.name}</span>
              <span className="cs-board-swatch-hex">{swatch.hex.toUpperCase()}</span>
            </div>
          ))}
        </div>

        <div className="cs-board-tile cs-board-photo cs-board-photo--b">
          <img src={photoB} alt="" loading="lazy" decoding="async" />
        </div>

        <div className="cs-board-tile cs-board-pattern" style={{ background: second }}>
          <div style={patternStyle(tokens.pattern, third === second ? primary : third, 0.9)} />
          <span className="cs-board-label cs-board-label--light">Graphic Device</span>
        </div>

        <div className="cs-board-tile cs-board-voice">
          <span className="cs-board-label">Voice</span>
          <ul>
            {tokens.voice.map((word) => (
              <li key={word} style={{ fontFamily: font }}>
                {word}
              </li>
            ))}
          </ul>
          <p className="cs-board-line">{tokens.line}</p>
        </div>
      </div>
    </figure>
  );
}
