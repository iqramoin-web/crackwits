import type { CaseStudy } from "../types";

const cubix: CaseStudy = {
  slug: "cubix",
  name: "CUBIX",
  category: "INDUSTRIAL",
  thumbnail: "/work/overcubic.webp",
  subtitle: "An uplifted identity and company profile for Kuwait’s makers of bespoke interiors.",
  cover: {
    src: "/case-studies/cubix/cover.webp",
    alt: "Minimal exhibition stand with a red sculptural volume in a dark hall",
    ai: true,
  },
  overview: [
    "CUBIX manufactures luxury, bespoke fitted interiors for commercial and non-commercial projects across Kuwait, from branded interior environments to exhibition stands designed and fabricated in-house.",
    "Its craftsmen hold their work to an exceptionally high standard, and the brand needed to look just as considered. CUBIX wanted a sharper identity without losing the recognition it had already built, and a profile that could show its projects in detail without burying them in text.",
    "CRACKWITS uplifted the logo, built a complete set of brand assets, designed the stationery and collaterals, and put together a visual-first company profile.",
  ],
  services: ["Strategy", "Brand Identity", "Stationery & Collaterals", "Company Profile"],
  stats: [
    { value: null, label: "Brand Assets Delivered" },
    { value: null, label: "Projects Showcased" },
    { value: null, label: "Profile Pages" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "CUBIX",
      typeface: "Montserrat",
      palette: [
        { name: "Workshop Slate", hex: "#343A44" },
        { name: "Cubix Red", hex: "#E3263F" },
        { name: "Steel Grey", hex: "#8A9099" },
        { name: "Primer Light", hex: "#DADCE0" },
        { name: "Paper White", hex: "#FFFFFF" },
      ],
      line: "Brand interiors, designed and built.",
      pattern: "diagonal",
      voice: ["Precise", "Crafted", "Luxurious", "Committed"],
    },
    images: ["/case-studies/cubix/duo.webp", "/case-studies/cubix/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Uplifting the Mark", "Without Losing the Maker"],
      body: [
        "The brief was a makeover, not a reinvention. We refined the existing CUBIX logo and built a fresh set of brand assets around it, keeping the identity clients already knew intact while giving it the finish of a company that builds luxury interiors. Small shapes drawn from the mark became a flexible graphic device, carrying a lot of recognition in very little space.",
      ],
      media: [
        { kind: "image", src: "/work/overcubic.webp", alt: "CUBIX company profile and stationery spreads" },
        {
          kind: "image",
          src: "/case-studies/cubix/lead.webp",
          alt: "Fabrication workshop with lacquered panels and precise joinery",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Letting the Projects", "Do the Talking"],
      body: [
        "The company profile had to display a broad body of work in a balanced way, showing the detail of each project without turning into a wall of text. We selected the strongest assets and planned the flow so images lead and words support.",
        "Each spread gives a project room to breathe, so prospective clients can see the quality of the finish for themselves, whether the profile is opened in print or on screen.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/cubix/cover.webp",
          url: "cubixpro.com",
          nav: ["Interiors", "Stands", "Projects", "Contact"],
          headline: "Brand interiors, designed and built.",
          cta: "View profile",
          alt: "CUBIX company profile presented on screen",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Precision, Passion", "and Progress"],
      body: [
        "Behind every CUBIX interior is a team of committed craftsmen, and the profile puts them at the centre of the story. Workshop detail, materials and finished spaces sit side by side to show how the company works, not just what it delivers.",
        "Deep slate pages and sharp red accents keep the tone confident and premium, closer to a design practice than a supplier.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/cubix/duo.webp",
          handle: "@cubixpro",
          caption: "Every detail finished by hand, every stand built to brief.",
          alt: "Craftsman finishing a lacquered display podium",
          ai: true,
        },
        { kind: "poster", line: "Brand interiors, designed and built.", alt: "CUBIX brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["One Identity, Applied", "From Letterhead to Collateral"],
      body: [
        "We devised a full stationery suite and set of collaterals from the new assets: letterheads, envelopes, business cards and the supporting materials the team uses every day.",
        "Each piece follows the same clear rules, so CUBIX looks consistent wherever its name appears, and the in-house team can produce new materials without diluting the brand.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/cubix/feature.webp",
          alt: "Red and white stationery suite on a slate desk",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "CUBIX now presents itself with the same care it brings to every fit-out. The uplifted identity, consistent stationery and a visual-first company profile give the team a polished way to introduce the business and let its craftsmanship make the case.",
  more: ["trs-polymers", "buildoser"],
  draft: true,
  review: [
    "Business description (luxury bespoke fitted interiors for commercial and non-commercial projects across Kuwait; brand interior environments, stand design and fabrication; committed craftsmen) from crackwits.com case study.",
    "Scope (logo uplift keeping the identity intact, brand assets, stationery and collaterals, company profile with fewer words and more visuals) from crackwits.com case study.",
    "Brand line 'Brand interiors, designed and built.' paraphrases the crackwits.com punchline; 'Precision. Passion. Progress.' theme from the same source.",
    "No website or social media in the reference scope. The browser mockup is now framed as the profile viewed on screen and the phone as a social-format crop — consider replacing both media items with profile spread images.",
    "Domain cubixpro.com and handle @cubixpro read from the letterhead in the thumbnail; confirm.",
    "Palette sampled from the thumbnail (red ~#E3263F, slate ~#343A44); Montserrat is the closest available typeface.",
    "Stat labels are suggestions; values intentionally empty.",
    "All case-study images except the thumbnail are AI-generated placeholders.",
  ],
};

export default cubix;
