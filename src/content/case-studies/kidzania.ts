import type { CaseStudy } from "../types";

const kidzania: CaseStudy = {
  slug: "kidzania",
  name: "KidZania",
  category: "ENTERTAINMENT",
  thumbnail: "/work/kidszania.webp",
  subtitle: "A digital front door for a city built at children’s scale.",
  cover: {
    src: "/case-studies/kidzania/cover.webp",
    alt: "Child in a pilot's uniform at the controls of a cockpit simulator",
    ai: true,
  },
  overview: [
    "KidZania is an edutainment concept where children step into a city made to their size — flying planes, running clinics, cooking in kitchens and earning their own currency along the way.",
    "With a growing family of cities around the world, the brand needed a digital home that could explain the concept in seconds, speak to parents and partners alike, and guide every visitor to the KidZania nearest to them.",
    "CRACKWITS designed and built a web experience centred on the child’s journey: an immersive hero that puts role-play first, a location finder that routes visitors to their city, and a content structure that tells the concept, company and careers story with clarity.",
  ],
  services: ["Strategy", "UX/UI", "Web Development", "Content Production", "Social Media"],
  stats: [
    { value: null, label: "Monthly Site Visits" },
    { value: null, label: "Location Finder Searches" },
    { value: null, label: "Average Session Duration" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "KidZania",
      typeface: "Outfit",
      palette: [
        { name: "Midnight Navy", hex: "#1B1F3B" },
        { name: "KidZania Crimson", hex: "#D6114A" },
        { name: "Cockpit Violet", hex: "#7B6FD0" },
        { name: "Passport Orange", hex: "#F39200" },
        { name: "Clean White", hex: "#FFFFFF" },
      ],
      line: "Get ready for a better world.",
      pattern: "arcs",
      voice: ["Curious", "Empowering", "Playful", "Clear"],
    },
    images: ["/case-studies/kidzania/duo.webp", "/case-studies/kidzania/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Explaining a Whole City", "In a Single Scroll"],
      body: [
        "KidZania is easier to experience than to describe. The design challenge was to let the concept explain itself — leading with real role-play moments, then answering the simple question every parent asks first: what is KidZania? Everything else on the site was organised to follow that answer.",
      ],
      media: [
        { kind: "image", src: "/work/kidszania.webp", alt: "KidZania website shown on a laptop" },
        {
          kind: "image",
          src: "/case-studies/kidzania/lead.webp",
          alt: "Child-scale city street with miniature building facades",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Routing Every Visitor", "To Their Nearest City"],
      body: [
        "A global brand with many locations creates a simple but critical problem: getting people to the right city quickly. The location finder sits directly inside the hero, so choosing a destination is the first action available, not a buried menu item.",
        "Behind it, navigation was split into clear paths — the concept, the KidZania nation, the company and careers — so families, partners and future team members each find their own route without competing for attention.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/kidzania/cover.webp",
          url: "kidzania.com",
          nav: ["Concept", "Locations", "Company", "Careers"],
          headline: "Get Ready for a Better World",
          cta: "Find Your City",
          alt: "KidZania website hero with location finder",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Turning Role-Play", "Into Shareable Moments"],
      body: [
        "Every visit produces small stories: a first shift as a chef, a first flight, a first salary. Content was framed around these moments, captured at a child’s eye level and told from the child’s point of view.",
        "The result is a visual language that parents recognise instantly and want to share — warm, candid and focused on what children do rather than on the venue itself.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/kidzania/duo.webp",
          handle: "@kidzania",
          caption: "First shift in the kitchen. Head chef in the making.",
          alt: "Girl in a chef's uniform tasting from a wooden spoon",
          ai: true,
        },
        { kind: "poster", line: "Get ready for a better world.", alt: "KidZania brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Carrying One Identity", "From Screen to City"],
      body: [
        "KidZania’s world has its own passports, currency, wristbands and uniforms. The digital system was built to sit naturally alongside these physical touchpoints, sharing the same crimson, navy and violet accents and the same confident, friendly tone.",
        "Consistent components and imagery rules mean each city can extend the experience locally while the brand still reads as one nation, wherever a family first meets it.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/kidzania/feature.webp",
          alt: "Passports, wristbands, play currency and ID lanyard arranged in a grid",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "The new KidZania web experience gives a global concept a clear, child-centred front door — one that explains the idea at a glance, routes every visitor to their city and gives the brand a consistent digital language to grow with.",
  more: ["kcamp", "quest"],
  draft: true,
  review: [
    "Thumbnail shows a website (hero 'Get Ready for a Better World!', 'Choose your KidZania' finder, nav: KidZania Concept / KidZania Nation / KidZania Company / Careers / Contact) — assumed CRACKWITS designed and built this site; confirm scope (UX/UI, web dev).",
    "Assumed this is the global/corporate KidZania site rather than a single-city (e.g. Kuwait) site — confirm which market(s).",
    "Social Media and Content Production in services are assumptions — confirm whether CRACKWITS produced social content.",
    "Domain 'kidzania.com', handle '@kidzania', CTA 'Find Your City' and nav labels in the mockup are placeholders.",
    "Palette sampled/estimated from the thumbnail (crimson, navy, violet hero overlay) plus an assumed orange accent; not official brand values.",
    "Typeface 'Outfit' chosen as a stand-in for the rounded sans in the site; not the official brand font.",
    "Passports, currency, wristbands referenced as public KidZania concept elements — confirm CRACKWITS did not design these (copy implies alignment, not authorship).",
    "Stat labels are suggestions; values intentionally empty.",
    "All four case-study images are AI-generated placeholders.",
  ],
};

export default kidzania;
