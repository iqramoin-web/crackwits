import type { CaseStudy } from "../types";

const ovo: CaseStudy = {
  slug: "ovo",
  name: "OVO",
  category: "F&B",
  thumbnail: "/work/ovo.webp",
  subtitle: "A light-touch brand refresh and a new website for a plant-forward, globally inspired kitchen.",
  cover: {
    src: "/case-studies/ovo/cover.webp",
    alt: "Avocado and rocket thin-crust pizza on a wooden board over cream linen",
    ai: true,
  },
  overview: [
    "OVO is a restaurant born from a love of flavour, a creative streak and a commitment to wholesome food — a vegan, vegetarian and flexitarian kitchen in a light, friendly setting made for gathering.",
    "Its menu travels from the Silk Road and beyond, drawing on different culinary traditions and changing with the seasons without ever trading on quality. The brand needed to look as considered as the food, and OVO had no website to show it off.",
    "CRACKWITS refreshed the brand with a light touch, designed and built a website from scratch, art-directed the photoshoot behind it and created a QR code menu standee for the restaurant floor.",
  ],
  services: ["Brand Strategy", "Brand Refresh", "UX/UI", "Web Development", "Art Direction"],
  stats: [
    { value: null, label: "Monthly Site Visitors" },
    { value: null, label: "QR Menu Scans" },
    { value: null, label: "Online Orders" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "OVO",
      typeface: "DM Serif Display",
      palette: [
        { name: "Ink", hex: "#1C1B19" },
        { name: "Avocado", hex: "#6E8B3D" },
        { name: "Flour Cream", hex: "#F6F0E6" },
        { name: "Olive Wood", hex: "#B87A44" },
        { name: "Terracotta", hex: "#C8634A" },
      ],
      line: "Vegan. Vegetarian. Flexitarian.",
      pattern: "waves",
      voice: ["Vegan", "Vegetarian", "Flexitarian", "Wholesome"],
    },
    images: ["/case-studies/ovo/duo.webp", "/case-studies/ovo/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Refreshing a Brand", "Without Starting Over"],
      body: [
        "The aim was to modernise OVO, not replace it. CRACKWITS audited the existing brand, set a new strategic direction and introduced an updated logo, palette, typography and graphic elements, then sharpened the messaging around three equal words — vegan, vegetarian, flexitarian — so every guest feels the menu is meant for them. The refreshed look was rolled out across all of OVO’s platforms for a consistent, more recognisable presence.",
      ],
      media: [
        { kind: "image", src: "/work/ovo.webp", alt: "OVO website shown on a laptop in a café" },
        {
          kind: "image",
          src: "/case-studies/ovo/lead.webp",
          alt: "Chef rolling out dough beside bowls of fresh seasonal vegetables",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["A Website Built", "From the First Bite"],
      body: [
        "OVO’s website was designed and developed from a blank page, launched first as a teaser and then as the full site. A warm cream canvas lets top-down dishes become graphic shapes on the page, with short, sensory copy and a rolling-pin button that adds a touch of kitchen character.",
        "Online ordering sits in the header throughout, so moving from browsing the menu to placing an order is never more than a click away.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/ovo/cover.webp",
          url: "ovo-kitchen.com",
          nav: ["Menu", "Our Story", "Visit Us", "Order Online"],
          headline: "Love at first bite.",
          cta: "Explore",
          alt: "OVO website hero featuring an avocado pizza on cream",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Directing a Shoot", "That Tastes Like OVO"],
      body: [
        "Food imagery carries much of the brand, so CRACKWITS supervised the photoshoot to keep every frame aligned with the refreshed identity — natural light, generous plates and the relaxed company of people sharing a table.",
        "The resulting images give OVO a consistent visual library to draw on, from the website to its social channels.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/ovo/duo.webp",
          handle: "@ovo.kitchen",
          caption: "Vegan, vegetarian or flexitarian — there’s a seat for everyone.",
          alt: "Two friends sharing pizza and salads at a sunny restaurant table",
          ai: true,
        },
        { kind: "poster", line: "Vegan. Vegetarian. Flexitarian.", alt: "OVO brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Taking the Menu", "to the Table"],
      body: [
        "Inside the restaurant, CRACKWITS designed a QR code menu standee that lets guests open the menu on their phones the moment they sit down.",
        "Built from the refreshed brand assets — the wordmark, cream ground and natural palette — the standee brings the identity onto every table and links the dining room directly to the new digital experience.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/ovo/feature.webp",
          alt: "Cream QR menu standee on a light wooden restaurant table beside a shared plate and a glass of water",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "OVO now has a brand and a digital home that match the care behind its kitchen — a refreshed identity, a purpose-built website and in-restaurant touchpoints that make it easy for every kind of eater to discover the menu and come back for more.",
  more: ["pizza-express", "mylk-maam"],
  draft: true,
  review: [
    "From crackwits.com case study: vegan/vegetarian/flexitarian restaurant with a menu drawing on Silk Road and wider culinary traditions, seasonal and quality-led, light and friendly setting; scope = website from scratch (teaser and full site), minimal brand refresh (logo, palette, graphics, typography, messaging), photoshoot supervision, QR code menu standee.",
    "From crackwits.com case study: punchline 'Vegan. Vegetarian. Flexitarian.'",
    "Market and domain unknown (reference shows only a shared-footer link) — 'ovo-kitchen.com' and '@ovo.kitchen' are placeholders.",
    "'Love at first bite', the rolling-pin button and Order Online come from the website thumbnail; other nav items are placeholders.",
    "Social posting is illustrative — the reference lists social media as a service tag but no social deliverable; confirm.",
    "Palette sampled from the thumbnail plus an assumed terracotta; DM Serif Display approximates the wordmark.",
    "Stat labels are suggestions; values intentionally empty.",
    "All four case-study images are AI-generated placeholders; feature.webp needs regenerating as the QR standee.",
  ],
};

export default ovo;
