import type { CaseStudy } from "../types";

const burjAlTojjar: CaseStudy = {
  slug: "burj-al-tojjar",
  name: "BURJ AL TOJJAR",
  category: "REAL ESTATE",
  thumbnail: "/work/burj-al-tojjar.webp",
  subtitle: "An emblem, a brand and a 2,000 sqm executive floor for a Kuwait City landmark.",
  cover: {
    src: "/case-studies/burj-al-tojjar/cover.webp",
    alt: "Commercial tower facade catching warm golden light at dusk",
    ai: true,
  },
  overview: [
    "Burj Al Tojjar is a distinctive panoramic tower in the heart of Kuwait’s business district. At its summit, beneath a skylit high ceiling, sits a 2,000 sqm multi-functional corporate space designed to balance refined natural materials with calm, symmetrical composition.",
    "The tower wanted that top floor finished in a contemporary, luxurious style worthy of the senior executives who would lead from it. It also needed an identity to mark the building’s opening: an emblematic logo, supporting brand assets, stationery and a website.",
    "CRACKWITS designed the emblem and the brand around it, built a website that works as an online brochure for prospective tenants, and took the top-floor interior from concept through 3D renders to architectural drawings and control sheets.",
  ],
  services: ["Strategy", "Brand Identity", "UX/UI", "Web Development", "Interior Design", "Digital Media"],
  stats: [
    { value: null, label: "Tenant Enquiries" },
    { value: null, label: "Monthly Website Visits" },
    { value: null, label: "Brand Touchpoints" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "BURJ AL TOJJAR",
      typeface: "IBM Plex Sans Arabic",
      palette: [
        { name: "Deep Bronze", hex: "#5A4A2E" },
        { name: "Brushed Gold", hex: "#C9AE6E" },
        { name: "Champagne", hex: "#E3CF97" },
        { name: "Vein Grey", hex: "#8E8A84" },
        { name: "Marble White", hex: "#F3F1EC" },
      ],
      line: "Made to inspire those who lead.",
      pattern: "grid",
      voice: ["Refined", "Exclusive", "Harmonious", "Inspiring"],
    },
    images: ["/case-studies/burj-al-tojjar/duo.webp", "/case-studies/burj-al-tojjar/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["An Emblem Written", "in Two Scripts"],
      body: [
        "The emblem had to stand for the tower, the business it houses and the clients it brings together. We explored directions drawn from the building’s sleek, luxurious form and from modern Arabic calligraphy, and fused Latin and Arabic letterforms into a single geometric mark. Simple in outline and refined in detail, it reflects both the structure and the calibre of business inside it.",
      ],
      media: [
        { kind: "image", src: "/work/burj-al-tojjar.webp", alt: "Burj Al Tojjar emblem engraved on brushed gold plates" },
        {
          kind: "image",
          src: "/case-studies/burj-al-tojjar/lead.webp",
          alt: "Marble hall with brushed-brass panels and floor-to-ceiling daylight",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["A Website That Opens", "the Tower’s Doors"],
      body: [
        "To announce the opening, we designed an informative website that doubles as an online brochure for prospective tenants. It is straightforward and easy to navigate, presenting the tower and its spaces with the polish expected of a premium business address.",
        "The site gives Burj Al Tojjar a professional presence from day one and helps spread the word about the newly completed building.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/burj-al-tojjar/experience.webp",
          alt: "Tower entrance with bronze-framed doors and a gold geometric screen at dusk",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Brand Assets as Refined", "as the Address"],
      body: [
        "From the emblem, we built a concise but flexible set of brand assets: colours, typefaces, stationery, collaterals and graphic elements that carry the same richness and harmony.",
        "The system takes its cues from the tower’s interiors and exterior and from the corporate, upper-tier nature of its occupants, so every piece feels at home in the boardroom.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/burj-al-tojjar/duo.webp",
          handle: "@burjaltojjar",
          caption: "A new address for those who lead. Now open in the heart of Kuwait’s business district.",
          alt: "Executive walking through a sunlit marble corridor",
          ai: true,
        },
        { kind: "poster", line: "Made to inspire those who lead.", alt: "Burj Al Tojjar brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["A Top Floor Designed", "for Those Who Lead"],
      body: [
        "The crowning floor needed to express the tower’s luxury and suit the law, real estate and other firms that would occupy it. We presented several design approaches inspired by the building’s form, each carrying the same elegance into every detail.",
        "The project was delivered in phases — concept design, 3D renders, architectural design and drawings, and control sheets — so the vision could be realised precisely across all 2,000 sqm.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/burj-al-tojjar/feature.webp",
          alt: "Brushed-brass panels and a bronze handrail set against white marble, an interior material detail",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "Burj Al Tojjar opened with an emblem that captures its character, a brand and website that present it with authority, and a top floor designed to inspire the executives who work there — one consistent expression of the tower, from the business card to the boardroom.",
  more: ["buildoser", "homey-ways"],
  draft: true,
  review: [
    "From crackwits.com case study: panoramic tower in Kuwait’s business hub with a 2,000 sqm multi-functional corporate space on the top floor under a skylit ceiling; aimed at top management in law, real estate and other industries.",
    "From crackwits.com case study: scope was the emblematic logo (modern Arabic calligraphy, Latin/Arabic fusion), brand assets, stationery and collaterals, an informative website for tenants, and the top-floor interior (concepts, 3D renders, architectural drawings, control sheets). Wayfinding/signage and event claims removed.",
    "From crackwits.com case study: brand line adapted from the punchline about inspiring top management.",
    "'Kuwait City' in the subtitle inferred from 'heart of Kuwait’s business hub' — confirm.",
    "Handle '@burjaltojjar' and the phone caption are assumed/invented.",
    "Palette sampled from the thumbnail (brushed gold, champagne, marble); bronze and grey added. IBM Plex Sans Arabic chosen for bilingual setting.",
    "All AI images are illustrative; none shows the actual top-floor interior — replace with the real renders if available.",
  ],
};

export default burjAlTojjar;
