import type { CaseStudy } from "../types";

const lillajar: CaseStudy = {
  slug: "lillajar",
  name: "LILLAJAR",
  category: "RETAIL",
  thumbnail: "/work/lillajar.webp",
  subtitle: "Furnishing every event space through a simple online rental store.",
  cover: {
    src: "/case-studies/lillajar/cover.webp",
    alt: "LILLAJAR campaign hero — an elegantly furnished outdoor event lounge at dusk",
    ai: true,
  },
  overview: [
    "LILLAJAR is a furniture and event-utilities rental company in Kuwait, supplying chairs, tables, lounges and essentials for gatherings of every scale.",
    "Event planners and hosts work against the clock. Renting furniture needed to feel as straightforward as shopping online — browse, compare, add to cart — rather than a chain of phone calls and catalogues.",
    "CRACKWITS designed and built a bilingual rental e-commerce platform and a clean, contemporary brand presence, turning a large inventory into an easy, visual shopping experience.",
  ],
  services: ["Brand Identity", "UX/UI", "Web Development", "Content Production", "Digital Marketing"],
  stats: [
    { value: null, label: "Online Rental Orders" },
    { value: null, label: "Average Basket Size" },
    { value: null, label: "Monthly Website Visits" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "lillajar",
      typeface: "Syne",
      palette: [
        { name: "Event Emerald", hex: "#009A57" },
        { name: "Graphite", hex: "#4A4A4C" },
        { name: "Natural Oak", hex: "#D8B98C" },
        { name: "Mist", hex: "#E2E7EC" },
        { name: "Gallery White", hex: "#FAFAF9" },
      ],
      line: "Every space, ready to host.",
      pattern: "dots",
      voice: ["Effortless", "Reliable", "Modern", "Ready"],
    },
    images: ["/case-studies/lillajar/duo.webp", "/case-studies/lillajar/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Turning a Warehouse", "Into a Showroom"],
      body: [
        "The homepage treats each piece like a product in a design store: a single chair on a soft grey field, framed by a bold emerald circle that echoes the logo. Navigation splits the range into furniture and utilities, a currency selector shows prices in KWD and the English/Arabic switch sits beside the cart — while three simple promises, prime quality, diverse collection and reliable service, answer a planner’s first questions in one glance.",
      ],
      media: [
        { kind: "image", src: "/work/lillajar.webp", alt: "LILLAJAR furniture rental website homepage on a laptop" },
        {
          kind: "image",
          src: "/case-studies/lillajar/lead.webp",
          alt: "Rows of white modern chairs and oak tables arranged in a bright studio space",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Renting Furniture as Easily", "as Shopping Online"],
      body: [
        "The core challenge was translating rental logistics — quantities, dates, delivery and collection — into a familiar e-commerce flow. Every item lives on a clean product page with clear imagery and specifications, and can be added to the cart in a couple of taps.",
        "Categories are organised the way event planners think: seating, tables, lounge, utilities. Full Arabic support and a persistent chat button make it easy to move from browsing to a confirmed order, or to a conversation when an event needs something bespoke.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/lillajar/cover.webp",
          url: "lillajar.com",
          nav: ["Furniture", "Utilities", "About", "Contact"],
          headline: "Furniture rental for every occasion.",
          cta: "Discover Items",
          alt: "LILLAJAR website mockup with outdoor event lounge hero",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Showing the Event,", "Not Just the Inventory"],
      body: [
        "Content moves between two modes: crisp, isolated product shots that make the range easy to browse, and styled event scenes that show what the pieces become once they are set up — a garden reception, a majlis-style lounge, a corporate gathering.",
        "A disciplined palette of emerald, graphite and natural oak keeps every post clean and recognisable, so the furniture always remains the hero.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/lillajar/duo.webp",
          handle: "@lillajar",
          caption: "Set the scene. We’ll bring the seats.",
          alt: "LILLAJAR social post showing a styled event table setting with white chairs",
          ai: true,
        },
        { kind: "poster", line: "Every space, ready to host.", alt: "LILLAJAR brand poster in emerald and white" },
      ],
    },
    {
      layout: "feature",
      title: ["Delivering the Brand", "With Every Order"],
      body: [
        "For a rental business, the brand is experienced on delivery day as much as online. The identity extends to delivery vehicles, protective packaging and crew uniforms, each marked with the same emerald accent.",
        "That consistency gives hosts a reassuring signal when the team arrives on site, and turns every set-up into a quiet showcase for the next potential client in the room.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/lillajar/feature.webp",
          alt: "Emerald-accented delivery crates and wrapped furniture ready for an event set-up",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "LILLAJAR now has a rental platform that works the way its customers plan — visual, organised and quick to order — and a clean brand system that carries from the product page to the event floor, ready to grow with new collections and services.",
  more: ["special-events", "mainstage-signature"],
  draft: true,
  review: [
    "Product category names 'seating, tables, lounge, utilities' are partly assumed; only 'Furniture' and 'Utilities' are visible — confirm.",
    "Assumed Kuwait market from the KWD currency selector and En/Arabic toggle in the thumbnail — confirm.",
    "Assumed CRACKWITS designed and built the website (UX/UI, web development) — confirm, and confirm whether brand identity, content production and digital marketing were in scope.",
    "Rental flow details (dates, delivery, collection, quantities) are assumed from the e-commerce structure — confirm actual functionality.",
    "Section 4 (delivery vehicles, packaging, crew uniforms) is assumed — confirm or replace.",
    "Domain 'lillajar.com' assumed.",
    "Palette sampled from the thumbnail (emerald green, graphite text, grey hero, oak chair legs); hex values approximate. Typeface 'Syne' chosen as a stand-in for the thin geometric logotype — confirm.",
    "Brand line 'Every space, ready to host.' and web headline invented; the site's actual hero reads 'Furniture Rental Provider'.",
    "Social handle '@lillajar' assumed.",
  ],
};

export default lillajar;
