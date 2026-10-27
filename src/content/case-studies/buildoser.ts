import type { CaseStudy } from "../types";

const buildoser: CaseStudy = {
  slug: "buildoser",
  name: "BUILDOSER",
  category: "REAL ESTATE",
  thumbnail: "/work/buildoser.webp",
  subtitle: "A quiet, architectural identity drawn from the lines of a blueprint.",
  cover: {
    src: "/case-studies/buildoser/cover.webp",
    alt: "Contemporary concrete building with sand-toned details in soft daylight",
    ai: true,
  },
  overview: [
    "BUILDOSER works across the built environment, taking projects from early design through to construction and handover.",
    "In a sector where many brands lean on hard hats and heavy machinery, BUILDOSER wanted to be seen as a considered partner: closer to an architecture studio than a site contractor, and credible with developers, investors and private clients.",
    "CRACKWITS developed a restrained identity built on the construction line: a light lowercase wordmark, a sand-and-graphite palette and a linear pattern taken from setting-out drawings, applied across stationery, documents and site communication.",
  ],
  services: ["Brand Position", "Brand Identity", "Creative Direction", "Content Production"],
  stats: [
    { value: null, label: "Brand Touchpoints Delivered" },
    { value: null, label: "Projects Branded On Site" },
    { value: null, label: "New Business Enquiries" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "buildoser",
      typeface: "Outfit",
      palette: [
        { name: "Graphite", hex: "#3A3B3D" },
        { name: "Sandstone", hex: "#CDB491" },
        { name: "Survey Grey", hex: "#9C9EA1" },
        { name: "Plaster", hex: "#E4E4E2" },
        { name: "Drafting White", hex: "#F6F6F4" },
      ],
      line: "Every line has a purpose.",
      pattern: "diagonal",
      voice: ["Considered", "Precise", "Calm", "Assured"],
    },
    images: ["/case-studies/buildoser/duo.webp", "/case-studies/buildoser/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Building an Identity", "From the Drawing Board Up"],
      body: [
        "Every building starts as a set of lines on paper, and the identity starts there too. Fine intersecting construction lines, the kind used to set out a plan, form the brand's signature pattern. A light lowercase wordmark and a single band of warm sandstone give the system a calm, crafted quality that feels closer to design than to heavy industry.",
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
      title: ["Letting Architecture", "Carry the Brand Story"],
      body: [
        "The art direction favours finished space over construction chaos: clean concrete, natural light, honest materials and room to breathe. Photography is framed around proportion and detail so that the work, not the machinery, signals capability.",
        "Sandstone is used sparingly as a highlight, echoing the warm stone and timber finishes BUILDOSER brings to its projects, while graphite and plaster tones keep the palette grounded.",
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
      title: ["Speaking to Clients", "With the Confidence of a Studio"],
      body: [
        "Communication follows the same restraint as the identity. Project stories focus on process, materials and the people who make decisions on site, written in a measured voice that builds trust with developers and private clients alike.",
        "Social and presentation templates reuse the construction-line grid, so a progress update, a tender document and a finished-project feature all share one visual rhythm.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/buildoser/duo.webp",
          handle: "@buildoser",
          caption: "From first line to final finish.",
          alt: "Architect reviewing drawings on a bright construction site",
          ai: true,
        },
        { kind: "poster", line: "Every line has a purpose.", alt: "BUILDOSER brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["A System That Holds Up", "From Notebook to Hoarding"],
      body: [
        "Notebooks, letterheads, business cards and proposal folders bring the identity into meetings, while site hoardings and safety signage carry it into public view. The same proportions and line pattern scale from a pocket notebook to a full-length site fence.",
        "Clear rules for colour, line weight and wordmark placement let BUILDOSER brand each new site and document consistently, without starting from scratch.",
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
    "BUILDOSER now presents itself with the clarity and care it brings to every project. The identity gives the company a calm, recognisable presence from the first proposal to the finished building, and a flexible system that can expand with every new development it takes on.",
  more: ["burj-al-tojjar", "cubix"],
  draft: true,
  review: [
    "Section image experience.webp is an additional AI placeholder (generated so the cover is not repeated) — replace with real imagery.",
    "The thumbnail shows only a branded notebook; assumed CRACKWITS delivered positioning, identity, stationery, site hoardings, signage and social/presentation templates. Confirm scope.",
    "Assumed BUILDOSER is a construction/development company (design through to handover) based on the name and REAL ESTATE category. Confirm exact business and services.",
    "Wordmark appears lowercase ('buildoser', possibly with a diaeresis on the 'o') with a small descriptor line that is not legible. Confirm exact wordmark spelling and descriptor.",
    "Handle @buildoser is assumed. Market/location not stated; copy kept location-neutral.",
    "Palette sampled from the notebook (white, light grey, sand/beige, graphite); hex values approximate. Outfit chosen to approximate the light geometric lowercase wordmark.",
    "The construction-line pattern rationale (setting-out drawings) is an interpretation of the notebook graphic. Brand line 'Every line has a purpose' is new copy.",
  ],
};

export default buildoser;
