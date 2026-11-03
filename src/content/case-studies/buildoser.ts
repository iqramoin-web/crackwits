import type { CaseStudy } from "../types";

const buildoser: CaseStudy = {
  slug: "buildoser",
  name: "BUILDOSER",
  category: "REAL ESTATE",
  thumbnail: "/work/buildoser.webp",
  subtitle: "Relaunching a Kuwaiti contractor with an identity built to last.",
  cover: {
    src: "/case-studies/buildoser/cover.webp",
    alt: "Contemporary concrete building with sand-toned details in soft daylight",
    ai: true,
  },
  overview: [
    "BUILDOSER is a contracting and trading corporation in Kuwait, standing on 15 years of contracting, fit-out and interior design work. Its projects range from residential extensions, loft conversions and renovations to commercial landscaping and shop fitting, all delivered with care, rigour and efficiency.",
    "Relaunching as BUILDÖSER, the company needed its existing branding refreshed into an identity that matched the quality of its work, a portfolio that brought its projects together in one place, and a first presence online.",
    "CRACKWITS revamped the brand from logo to stationery, presenting several variations for the team to choose from, compiled a detailed portfolio of past projects, and designed and developed an under-construction page to hold the web address until the full site was ready.",
  ],
  services: ["Strategy", "Brand Identity", "UX/UI", "Portfolio Design"],
  stats: [
    { value: null, label: "Brand Assets Revamped" },
    { value: null, label: "Projects in the Portfolio" },
    { value: null, label: "Identity Variations Presented" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "buildöser",
      typeface: "Outfit",
      palette: [
        { name: "Graphite", hex: "#3A3B3D" },
        { name: "Sandstone", hex: "#CDB491" },
        { name: "Survey Grey", hex: "#9C9EA1" },
        { name: "Plaster", hex: "#E4E4E2" },
        { name: "Drafting White", hex: "#F6F6F4" },
      ],
      line: "Fifteen years of building, made new.",
      pattern: "diagonal",
      voice: ["Meticulous", "Thorough", "Efficient", "Dependable"],
    },
    images: ["/case-studies/buildoser/duo.webp", "/case-studies/buildoser/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Refreshing an Identity", "Fifteen Years in the Making"],
      body: [
        "BUILDOSER already had a brand, but it no longer reflected the standard of the company behind it. We revisited every element — logo, colours, typefaces and graphic language — and presented the client with several variations before settling on a fresher, more precise system. The result keeps the credibility of a decade and a half on site while giving the relaunch a clean, contemporary start.",
      ],
      media: [
        { kind: "image", src: "/work/buildoser.webp", alt: "BUILDOSER branded notebook with construction-line pattern" },
        {
          kind: "image",
          src: "/case-studies/buildoser/lead.webp",
          alt: "Architectural drawings, a scale model and sand-toned material samples on a desk",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["A Portfolio That Lets", "the Finished Work Speak"],
      body: [
        "Fifteen years of projects are the company’s strongest argument, so we gathered them into one carefully structured portfolio. Residential extensions, loft conversions, renovations, landscaping and shop fit-outs each sit within a consistent layout that makes the breadth of BUILDOSER’s work easy to take in.",
        "Clean photography and generous space let each project show its detail, giving prospective clients a clear picture of what the team delivers.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/buildoser/experience.webp",
          alt: "Calm residential interior with board-formed concrete and sandstone floor",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Holding the Address", "While the Site Takes Shape"],
      body: [
        "A new brand needs somewhere to point people from day one. We designed and developed an under-construction page that introduces the relaunched identity and keeps the company reachable while the full website is in progress.",
        "The revamped graphic elements were built to work on screen as well as in print, so the brand carries the same clarity wherever it appears next.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/buildoser/duo.webp",
          handle: "@buildoser",
          caption: "Built on 15 years of contracting, fit-out and interiors. Something new is on the way.",
          alt: "Site engineer holding drawings on a bright construction site",
          ai: true,
        },
        { kind: "poster", line: "Fifteen years of building, made new.", alt: "BUILDOSER brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Stationery and Collaterals", "Built for Daily Use"],
      body: [
        "The relaunch came to life in everyday materials: stationery, collaterals and supporting graphics designed to be used in meetings, proposals and on site.",
        "Consistent use of the refreshed logo, colours and typefaces means every document BUILDOSER sends out reflects the same precision the team brings to its projects.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/buildoser/feature.webp",
          alt: "Stationery suite with sand-toned details on a graphite surface",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "BUILDOSER relaunches with an identity that finally matches the standard of its work, a portfolio that brings 15 years of projects together, and an online placeholder that keeps the new brand visible from the start — a solid base for its next phase of growth.",
  more: ["burj-al-tojjar", "cubix"],
  draft: true,
  review: [
    "From crackwits.com case study: contracting and trading corporation in Kuwait; 15 years of contracting, fit-out and interior design; residential extensions, loft conversions, renovations, commercial landscaping, shop fitting.",
    "From crackwits.com case study: scope was a brand revamp/relaunch (logo, colours, fonts, collaterals, stationery, graphic elements, several variations), a project portfolio and an under-construction web page. Site hoardings, signage and social templates removed.",
    "Reference spells the relaunched name 'BUILDÖSER'; board wordmark set to 'buildöser' — confirm exact spelling and casing.",
    "Brand line 'Fifteen years of building, made new.' is new copy based on the punchline about 15 years of contracting.",
    "Handle '@buildoser' and the phone caption are invented; social media is not in the reference scope — the phone mockup is illustrative.",
    "Palette sampled from the notebook thumbnail; hex values approximate. Outfit chosen to approximate the wordmark.",
    "All AI images are illustrative placeholders.",
  ],
};

export default buildoser;
