import type { CaseStudy } from "../types";

const trsPolymers: CaseStudy = {
  slug: "trs-polymers",
  name: "TRS Polymers",
  category: "INDUSTRIAL",
  thumbnail: "/selected-work/trs-polymers.webp",
  subtitle: "Turning end-of-life tyres into a brand built for the circular economy.",
  cover: {
    src: "/case-studies/trs-polymers/cover.webp",
    alt: "Macro view of recycled rubber granules lit with a green edge glow",
    ai: true,
  },
  overview: [
    "TRS Polymers recovers end-of-life tyres and processes them into engineered rubber materials for new industrial uses.",
    "Recycling is often seen as waste management rather than material innovation. TRS needed a brand that could speak to engineers, procurement teams and sustainability leads in one clear voice, and show recycled rubber as a product worth specifying.",
    "CRACKWITS built an identity and campaign system around one idea: from waste to worth. The work runs from the wordmark and visual language through to out-of-home, digital and sales touchpoints.",
  ],
  services: ["Brand Position", "Brand Identity", "Creative Direction", "Holistic Campaign", "Web Development"],
  stats: [
    { value: null, label: "Campaign Reach" },
    { value: null, label: "Qualified B2B Enquiries" },
    { value: null, label: "Website Sessions" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "trs",
      typeface: "Space Grotesk",
      palette: [
        { name: "Carbon Black", hex: "#0B0D0C" },
        { name: "Tread Graphite", hex: "#2A2E2C" },
        { name: "Circuit Lime", hex: "#8FD43A" },
        { name: "Signal Green", hex: "#4CAF2E" },
        { name: "Mineral White", hex: "#F2F4F1" },
      ],
      line: "From waste to worth.",
      pattern: "arcs",
      voice: ["Engineered", "Circular", "Precise", "Assured"],
    },
    images: ["/case-studies/trs-polymers/duo.webp", "/case-studies/trs-polymers/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Giving Recycled Rubber", "the Presence of a Premium Material"],
      body: [
        "The art direction treats granulate the way a luxury brand treats its product: macro photography, deep carbon blacks and one line of lime light tracing the curve of a tyre. The arcs drawn from that curve became the graphic device used across every application, so the brand keeps the shape of the material it starts from.",
      ],
      media: [
        { kind: "image", src: "/selected-work/trs-polymers.webp", alt: "TRS Polymers out-of-home poster in a metro corridor" },
        {
          kind: "image",
          src: "/case-studies/trs-polymers/lead.webp",
          alt: "Recycled rubber granulate and a tyre tread on a dark studio surface",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["A Digital Front Door", "for Industrial Buyers"],
      body: [
        "Buyers arrive with technical questions: grades, particle sizes, applications and certifications. The website puts those answers first, organising the range by end use so a flooring manufacturer and a civil contractor can each reach the right material quickly.",
        "The process story, from collection to finished granulate, runs alongside the product pages. It shows the circular model without pushing the specification content further down the page.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/trs-polymers/cover.webp",
          url: "trspolymers.com",
          nav: ["Materials", "Process", "Applications", "Contact"],
          headline: "Tyre recycling, infinite possibilities.",
          cta: "Explore materials",
          alt: "TRS Polymers website hero",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Making the Circular Economy", "Tangible in Everyday Places"],
      body: [
        "Recycled rubber ends up underfoot, in playgrounds, running tracks and sports surfaces, so the campaign followed it there. Content shows the finished surfaces people use every day and links each one back to the tyre it came from.",
        "Lime green appears only where value is created, as a highlight on the material and never as a background. That restraint keeps the palette serious enough for B2B while still being recognisable in a feed.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/trs-polymers/duo.webp",
          handle: "@trspolymers",
          caption: "Every surface has a second life.",
          alt: "Runner on a rubberised track at dusk",
          ai: true,
        },
        { kind: "poster", line: "Engineered materials for a circular future.", alt: "TRS Polymers brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["An Identity Built", "to Work on Site and in the Boardroom"],
      body: [
        "The system had to hold up on bulk bags, vehicles and site hoardings as well as on investor decks and spec sheets. A compact lowercase wordmark, a pill-shaped descriptor and a strict two-colour rule keep it legible on rough surfaces and at small sizes.",
        "Templates for packaging, signage and technical documents let the TRS team apply the brand themselves, so each new product line launches looking like it belongs.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/trs-polymers/feature.webp",
          alt: "Branded bulk bags of rubber granulate stacked in an industrial warehouse",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "TRS Polymers now presents recycled rubber as an engineered material with a story worth telling. The identity gives the company one confident voice for industrial buyers, partners and the public, and a system that can grow with every new grade and application it brings to market.",
  more: ["ogl", "cubix"],
  draft: true,
  review: [
    "Assumed CRACKWITS delivered brand identity, OOH campaign, website and social content; the thumbnail only shows an OOH poster. Confirm scope.",
    "Assumed TRS Polymers recycles end-of-life tyres into rubber granulate/crumb for flooring, sports surfaces and civil uses, based on the poster copy. Confirm product range and applications.",
    "Domain trspolymers.com taken from the poster; confirm it is live. Social handle @trspolymers is assumed.",
    "Taglines 'From waste to worth', 'Tyre recycling, infinite possibilities' and 'Engineered materials for a circular future' taken from the poster.",
    "Palette sampled from the poster (black and lime green); hex values approximate. Typeface Space Grotesk is a stand-in for the geometric sans on the poster.",
    "Market/location of TRS Polymers not stated; copy kept location-neutral.",
    "Website navigation, packaging (bulk bags), signage and document templates are assumed deliverables.",
    "Category kept as INDUSTRIAL per brands.ts.",
  ],
};

export default trsPolymers;
