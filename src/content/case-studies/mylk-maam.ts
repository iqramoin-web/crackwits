import type { CaseStudy } from "../types";

const mylkMaam: CaseStudy = {
  slug: "mylk-maam",
  name: "MYLK MA’AM",
  category: "F&B",
  thumbnail: "/work/milkman.webp",
  subtitle: "Launching a homemade plant-based brand in Kuwait, from the first post to the online store.",
  cover: {
    src: "/case-studies/mylk-maam/cover.webp",
    alt: "Glass bottles of plant-based mylk on a stone ledge beside a sunlit pool",
    ai: true,
  },
  overview: [
    "MYLK MA’AM is a homemade, organic, plant-based brand born in a home kitchen in Kuwait and rooted in a mother’s love for her family. Its range spans almond, oat, coconut and chocolate mylks with no additives, nutrient boosters to add to them, and new products such as yogurt and granola on the way.",
    "As a new entrant in the vegan market — and one of the few locally made brands in it — MYLK MA’AM needed to build awareness quickly, stand out from direct and indirect competitors, and lead people to its online store.",
    "CRACKWITS shaped the launch strategy and ran social media, supervised product photography, designed branded collaterals and event materials, managed print production and built a Shopify store, giving the brand one consistent presence online and in person.",
  ],
  services: ["Strategy", "Social Media", "UX/UI", "Web Development", "Digital Media", "Brand Collaterals"],
  stats: [
    { value: null, label: "Monthly Reach" },
    { value: null, label: "Store Visits From Social" },
    { value: null, label: "Community Growth" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "mylk ma’am",
      typeface: "Fraunces",
      palette: [
        { name: "Espresso", hex: "#2B211C" },
        { name: "Cocoa Latte", hex: "#B98A68" },
        { name: "Almond Cream", hex: "#F3EAD9" },
        { name: "Oat", hex: "#E2D3B8" },
        { name: "Pool Teal", hex: "#2FA6A0" },
      ],
      line: "The perfect healthy snack for everyone.",
      pattern: "arcs",
      voice: ["Motherly", "Fun", "Educational", "Fresh"],
    },
    images: ["/case-studies/mylk-maam/duo.webp", "/case-studies/mylk-maam/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Introducing a Local Brand", "With Teasers and Reveals"],
      body: [
        "The strategy started from the brand’s core values and big idea: wholesome food made with a mother’s care. We introduced MYLK MA’AM through a sequence of teasers and reveals that built curiosity before launch, then kept the conversation going with content that explains the benefits of plant-based mylk — speaking to a selective audience on each channel while setting the brand apart from competitors offering similar products locally.",
      ],
      media: [
        { kind: "image", src: "/work/milkman.webp", alt: "Three MYLK MA’AM bottles on a terrazzo tray in morning light" },
        {
          kind: "image",
          src: "/case-studies/mylk-maam/lead.webp",
          alt: "Almonds, oats and fresh plant mylk being strained into a glass jug",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["An Online Store", "That Feels Like Home"],
      body: [
        "MYLK MA’AM needed one place to tell its story, explain each product and let customers buy, with room to add subscriptions later. We designed a user-friendly Shopify store in the brand’s look and feel, with clear product information and a simple path to checkout.",
        "Shopify also gave the team a back end they already found familiar, and CRACKWITS provided technical support throughout so the store could be run with confidence from day one.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/mylk-maam/cover.webp",
          url: "mylkmaam.com",
          nav: ["Shop", "Our Mylks", "Boosters", "Our Story"],
          headline: "Homemade mylk, made with love.",
          cta: "Shop now",
          alt: "MYLK MA’AM online store hero with bottles by a sunlit pool",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Content With", "a Motherly Touch"],
      body: [
        "To reach beyond vegans and health enthusiasts, the content is warm, playful and informative in equal measure. Monthly calendars and daily posts mix static and animated formats with bilingual headlines and captions, backed by a targeted boosting plan.",
        "A lifestyle photoshoot gave the mylks and wider range natural, appetising imagery for the feed and website, while ongoing community support and monthly reports kept the pages responsive and on track as the business grew.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/mylk-maam/duo.webp",
          handle: "@mylkmaam",
          caption: "Stretch done, chocolate mylk earned. A snack for everyone — and we mean everyone.",
          alt: "Woman on a yoga mat holding a bottle of chocolate plant mylk",
          ai: true,
        },
        { kind: "poster", line: "The perfect healthy snack for everyone.", alt: "MYLK MA’AM brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["From the Print Run", "to the Pop-Up Stand"],
      body: [
        "The brand carries into the physical world through staff uniforms, banners, QR code menus, table designs and vehicle branding, each matched to the social look and feel and paired with lines drawn from the brand’s values.",
        "Working with in-house and external suppliers, we oversaw production from woodwork to bottle, sticker and uniform printing with eco-friendliness in mind, and coordinated arches, banners, furniture and QR menus for events throughout the year.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/mylk-maam/feature.webp",
          alt: "Tagged glass mylk bottles packed in a kraft box beside granola pouches",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "MYLK MA’AM launched with a clear strategy, a social presence that speaks well beyond the vegan niche, a Shopify store the team can run itself and branded materials that hold together at every event — a foundation that can grow as quickly as the range does.",
  more: ["tobys-estate", "ovo"],
  draft: true,
  review: [
    "From crackwits.com case study: homemade, organic, plant-based brand from a home kitchen in Kuwait; almond, oat, coconut and chocolate mylks, boosters, yogurt and granola in development.",
    "From crackwits.com case study: scope was strategy, social media (bilingual content, boosting, monthly reports), lifestyle photoshoot, collaterals (uniforms, banners, QR menus, tables, vehicles), Shopify store, print production and event support. Packaging/identity design claims removed.",
    "From crackwits.com case study: brand line adapted from the punchline 'the perfect healthy snack for everyone'.",
    "Domain 'mylkmaam.com', store nav items and handle '@mylkmaam' are assumed (reference shows no brand domain). Phone caption invented.",
    "Palette sampled from the thumbnail; Fraunces chosen to approximate the soft lowercase wordmark.",
    "AI images (cover, lead, duo, feature) are illustrative; /work/milkman.webp is a real client image.",
  ],
};

export default mylkMaam;
