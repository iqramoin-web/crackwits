import type { CaseStudy } from "../types";

const coya: CaseStudy = {
  slug: "coya",
  name: "COYA",
  category: "F&B",
  thumbnail: "/work/coya.webp",
  subtitle: "Bringing the energy of a Peruvian dining room to every screen.",
  cover: {
    src: "/case-studies/coya/cover.webp",
    alt: "Ceviche on a black ceramic plate under a warm spotlight",
    ai: true,
  },
  overview: [
    "COYA is a Peruvian restaurant, bar and lounge known for its fusion of Latin American flavour, music and art, with venues across several international cities.",
    "Guests often meet COYA online before they ever see a dining room. The brand needed a digital experience that carried the same atmosphere as its venues while making it simple to choose a location and book a table.",
    "CRACKWITS designed a dark, cinematic web experience led by food and mood, built a location-aware booking journey, and extended the language into social content that keeps the brand present between visits.",
  ],
  services: ["UX/UI", "Web Development", "Content Production", "Social Media"],
  stats: [
    { value: null, label: "Online Reservations" },
    { value: null, label: "Monthly Site Visitors" },
    { value: null, label: "Social Engagement Rate" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "COYA",
      typeface: "Cormorant Garamond",
      palette: [
        { name: "Obsidian", hex: "#0E0C0B" },
        { name: "Burnt Orange", hex: "#C2521F" },
        { name: "Terracotta", hex: "#7A3520" },
        { name: "Inca Gold", hex: "#C9A24B" },
        { name: "Bone", hex: "#F4EFE6" },
      ],
      line: "Discover Peruvian fusion delights.",
      pattern: "diagonal",
      voice: ["Sensual", "Spirited", "Crafted", "Worldly"],
    },
    images: ["/case-studies/coya/duo.webp", "/case-studies/coya/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Translating a Dining Room", "Into a Digital Mood"],
      body: [
        "A COYA evening is defined by low light, warm colour and the theatre of the open kitchen. Our starting point was to capture that feeling rather than describe it: near-black canvases, rich burnt orange and a refined serif voice that lets the food and the room speak first.",
      ],
      media: [
        { kind: "image", src: "/work/coya.webp", alt: "COYA website on a laptop resting on an orange velvet chair" },
        {
          kind: "image",
          src: "/case-studies/coya/lead.webp",
          alt: "Warmly lit Latin American restaurant interior with orange banquettes",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Designing a Website", "That Leads to the Table"],
      body: [
        "The homepage opens on full-bleed dishes and a single line of intent, with the location selector and booking button held in a calm, persistent header. Wherever a guest is in the site, the next step is always one tap away.",
        "Behind the atmosphere sits a practical structure: each venue gets its own menus, opening hours and events, so the same experience scales cleanly as new locations open.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/coya/cover.webp",
          url: "coyarestaurant.com",
          nav: ["Locations", "Menus", "Events", "Private Dining"],
          headline: "Discover Peruvian fusion delights.",
          cta: "Book a table",
          alt: "COYA website hero featuring ceviche on a dark background",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Keeping the Bar Alive", "Between Reservations"],
      body: [
        "On social, COYA’s story is told through movement: a shaker mid-pour, a plate arriving at the pass, a room filling up at dusk. Short, tactile moments that feel like an invitation rather than an advertisement.",
        "Each post follows the same lighting and colour discipline as the website, so the feed reads as one continuous evening across every venue.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/coya/duo.webp",
          handle: "@coyarestaurant",
          caption: "Pisco o’clock. Shaken, poured, gone in minutes.",
          alt: "Bartender pouring a pisco sour into a coupe glass",
          ai: true,
        },
        { kind: "poster", line: "Discover Peruvian fusion delights.", alt: "COYA brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Carrying the Identity", "From Screen to Service"],
      body: [
        "The digital language was built to sit comfortably beside COYA’s physical touchpoints. Menus, reservation cards and bill folders share the same restraint: deep blacks, warm accents and generous space.",
        "The result is a guest journey that feels continuous, from the first scroll on a phone to the last pisco sour at the bar.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/coya/feature.webp",
          alt: "Restaurant menu cards, bill folder and pisco sour on dark stone",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "COYA now has a digital presence that feels like an extension of its dining rooms — atmospheric enough to set the mood, and structured enough to move guests from discovery to a confirmed table at any of its locations.",
  more: ["pizza-express", "cheesecake-factory"],
  draft: true,
  review: [
    "Assumed CRACKWITS designed and built the COYA website (the thumbnail shows a website with a “City of London” location selector and “Book A Table” CTA) plus social content — confirm scope and which markets/venues were covered.",
    "COYA is described generally as a Peruvian restaurant, bar and lounge with venues in several international cities (public knowledge); no specific cities named.",
    "Domain “coyarestaurant.com”, nav items and handle “@coyarestaurant” are assumed — verify.",
    "The website hero headline “Discover Peruvian fusion delights.” is taken from the thumbnail.",
    "The physical touchpoints section (menus, bill folders, reservation cards) assumes CRACKWITS influenced or aligned with print collateral — remove if out of scope.",
    "Thumbnail shows a “Diners’ Choice” badge; deliberately not mentioned as an award.",
    "Palette sampled from the thumbnail (black, burnt orange velvet) plus assumed gold accent from the logo; typeface Cormorant Garamond chosen to approximate the site’s serif.",
  ],
};

export default coya;
