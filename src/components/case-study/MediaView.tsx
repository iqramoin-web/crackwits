import type { BrandTokens, CaseStudy, Media } from "@/content/types";
import { BOARD_FONTS } from "@/lib/fonts";
import { patternStyle } from "./patterns";

/** Renders one section image: a plain image or a code-built mockup in the brand's tokens. */
export function MediaView({ media, study }: { media: Media; study: CaseStudy }) {
  const tokens = study.brandBoard.kind === "tokens" ? study.brandBoard.tokens : null;

  if (media.kind === "image" || !tokens) {
    return "src" in media ? <img src={media.src} alt={media.alt} loading="lazy" decoding="async" /> : null;
  }

  if (media.kind === "browser") return <BrowserMock media={media} tokens={tokens} />;
  if (media.kind === "phone") return <PhoneMock media={media} tokens={tokens} />;
  return <Poster line={media.line} alt={media.alt} tokens={tokens} />;
}

function colors(tokens: BrandTokens) {
  const [primary, second = primary, third = second, fourth = third] = tokens.palette.map((p) => p.hex);
  return { primary, second, third, fourth };
}

function BrowserMock({ media, tokens }: { media: Extract<Media, { kind: "browser" }>; tokens: BrandTokens }) {
  const { primary, fourth } = colors(tokens);
  const font = BOARD_FONTS[tokens.typeface];
  return (
    <figure className="cs-browser" role="img" aria-label={media.alt} style={{ background: fourth }}>
      <div className="cs-browser-window">
        <div className="cs-browser-bar" aria-hidden="true">
          <span className="cs-browser-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="cs-browser-url">{media.url}</span>
        </div>
        <div className="cs-browser-page">
          <img src={media.src} alt="" loading="lazy" decoding="async" />
          <div className="cs-browser-shade" />
          <nav className="cs-browser-nav" aria-hidden="true">
            <span className="cs-browser-logo" style={{ fontFamily: font }}>
              {tokens.wordmark}
            </span>
            <span className="cs-browser-links">
              {media.nav.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </span>
          </nav>
          <div className="cs-browser-hero" aria-hidden="true">
            <p style={{ fontFamily: font }}>{media.headline}</p>
            <span className="cs-browser-cta" style={{ background: primary }}>
              {media.cta}
            </span>
          </div>
        </div>
      </div>
    </figure>
  );
}

function PhoneMock({ media, tokens }: { media: Extract<Media, { kind: "phone" }>; tokens: BrandTokens }) {
  const { primary, third, fourth } = colors(tokens);
  return (
    <figure className="cs-phone-stage" role="img" aria-label={media.alt} style={{ background: fourth }}>
      <div className="cs-phone-stage-pattern" style={patternStyle(tokens.pattern, third, 0.18)} aria-hidden="true" />
      <div className="cs-phone" aria-hidden="true">
        <div className="cs-phone-screen">
          <div className="cs-phone-header">
            <span className="cs-phone-avatar" style={{ background: primary }}>
              {tokens.wordmark.charAt(0)}
            </span>
            <span className="cs-phone-handle">{media.handle}</span>
          </div>
          <img src={media.src} alt="" loading="lazy" decoding="async" />
          <div className="cs-phone-actions">
            <i />
            <i />
            <i />
          </div>
          <p className="cs-phone-caption">
            <b>{media.handle.replace(/^@/, "")}</b> {media.caption}
          </p>
        </div>
      </div>
    </figure>
  );
}

export function Poster({ line, alt, tokens }: { line: string; alt: string; tokens: BrandTokens }) {
  const { primary, second, fourth } = colors(tokens);
  const font = BOARD_FONTS[tokens.typeface];
  return (
    <figure className="cs-poster" role="img" aria-label={alt} style={{ background: primary, color: fourth }}>
      <div className="cs-poster-pattern" style={patternStyle(tokens.pattern, second, 0.55)} aria-hidden="true" />
      <span className="cs-poster-mark" style={{ fontFamily: font }} aria-hidden="true">
        {tokens.wordmark}
      </span>
      <p className="cs-poster-line" style={{ fontFamily: font }} aria-hidden="true">
        {line}
      </p>
    </figure>
  );
}
