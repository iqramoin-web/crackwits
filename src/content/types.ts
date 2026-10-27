/**
 * Content model for case studies. Every case study page is rendered from one
 * of these objects by `components/case-study/CaseStudyPage.tsx`, following
 * the section rhythm of the original RAWBANK case study.
 */

export type Category =
  | "F&B"
  | "ENTERTAINMENT"
  | "FINANCE"
  | "REAL ESTATE"
  | "INDUSTRIAL"
  | "HEALTHCARE"
  | "RETAIL"
  | "HOME SERVICES";

/** Typefaces available to code-built brand boards (loaded in `lib/fonts.ts`). */
export type BoardTypeface =
  | "Montserrat"
  | "Playfair Display"
  | "DM Serif Display"
  | "Cormorant Garamond"
  | "Fraunces"
  | "Space Grotesk"
  | "Syne"
  | "Manrope"
  | "Archivo Black"
  | "Unbounded"
  | "Outfit"
  | "Bricolage Grotesque"
  | "IBM Plex Sans Arabic";

export type Media =
  /** A plain image. `ai: true` marks AI-generated placeholder imagery. */
  | { kind: "image"; src: string; alt: string; ai?: boolean }
  /** Code-built website mockup: browser chrome + brand nav over a hero image. */
  | {
      kind: "browser";
      src: string;
      alt: string;
      url: string;
      nav: string[];
      headline: string;
      cta: string;
      ai?: boolean;
    }
  /** Code-built social post shown in a phone frame. */
  | { kind: "phone"; src: string; alt: string; handle: string; caption: string; ai?: boolean }
  /** Code-built brand poster (pattern + typography) from the brand tokens. */
  | { kind: "poster"; alt: string; line: string };

/**
 * lead    — title, one paragraph, two images side by side (1292:1112)
 * feature — title, paragraphs, one full-width image
 * duo     — title, paragraphs, two portrait images (640:551 desktop crop)
 */
export type Section = {
  layout: "lead" | "feature" | "duo";
  /** Two-line headline, rendered with a line break between the parts. */
  title: [string, string];
  body: string[];
  media: Media[];
};

export type Stat = {
  /** `null` renders an em dash — used until a verified figure is supplied. */
  value: number | null;
  decimals?: number;
  suffix?: string;
  label: string;
};

export type BrandTokens = {
  /** Wordmark text used on the code-built brand board. */
  wordmark: string;
  /** Typeface the wordmark and specimen are set in. */
  typeface: BoardTypeface;
  /** 4–5 swatches, darkest/primary first. */
  palette: { name: string; hex: string }[];
  /** Short brand line shown on the board and poster. */
  line: string;
  /** Graphic device used on the board/poster. */
  pattern: "stripes" | "dots" | "grid" | "arcs" | "waves" | "diagonal";
  /** Keywords shown as the board's "voice" tile. */
  voice: string[];
};

export type CaseStudy = {
  slug: string;
  name: string;
  category: Category;
  /** Existing grid thumbnail (1348x1000), reused on /work and More Work. */
  thumbnail: string;
  subtitle: string;
  cover: { src: string; alt: string; ai?: boolean };
  /** Three short paragraphs: background, need, what CRACKWITS did. */
  overview: string[];
  services: string[];
  stats: Stat[];
  /** Either a supplied board image (RAWBANK) or tokens for a code-built board. */
  brandBoard: { kind: "image"; src: string; alt: string } | { kind: "tokens"; tokens: BrandTokens; images: string[] };
  sections: Section[];
  outcome: string;
  /** Slugs of the two "More Work" cards. */
  more: [string, string];
  /**
   * True while copy/imagery are temporary. Draft pages show a small review
   * badge and are listed in REVIEW.md.
   */
  draft: boolean;
  /** Assumptions made while drafting — every item must be verified or replaced. */
  review: string[];
};
