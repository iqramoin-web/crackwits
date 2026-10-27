import type { CaseStudy } from "../types";

const mylkMaam: CaseStudy = {
  slug: "mylk-maam",
  name: "MYLK MA’AM",
  category: "F&B",
  thumbnail: "/work/milkman.webp",
  subtitle: "Making plant-based milk feel fresh, warm and part of everyday rituals.",
  cover: {
    src: "/case-studies/mylk-maam/cover.webp",
    alt: "Glass bottles of plant-based milk on a stone ledge beside a sunlit pool",
    ai: true,
  },
  overview: [
    "MYLK MA’AM makes fresh, organic plant-based milks, bottled in glass and made in small batches for people who care about what goes into their day.",
    "In a category crowded with long-life cartons and clinical health claims, the brand needed a presence that felt handmade and generous, and a reason for people to choose it again every morning.",
    "CRACKWITS shaped the brand world around ritual rather than nutrition: a warm visual identity, a packaging language built on the glass bottle, and a content programme that places the product inside real routines.",
  ],
  services: ["Brand Identity", "Packaging", "Content Production", "Social Media"],
  stats: [
    { value: null, label: "Monthly Impressions" },
    { value: null, label: "Repeat Order Rate" },
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
      line: "Fresh, organic, made with care.",
      pattern: "arcs",
      voice: ["Warm", "Honest", "Unhurried", "Playful"],
    },
    images: ["/case-studies/mylk-maam/duo.webp", "/case-studies/mylk-maam/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Starting From the Ingredients", "Not the Health Claim"],
      body: [
        "Plant-based milk is often sold on what it leaves out. We built MYLK MA’AM around what goes in: whole nuts, oats and a short list of honest ingredients, presented with the warmth of a kitchen rather than the coolness of a lab. Every visual decision starts from that idea of something made by hand.",
      ],
      media: [
        { kind: "image", src: "/work/milkman.webp", alt: "Three MYLK MA’AM bottles on a terrazzo tray in morning light" },
        {
          kind: "image",
          src: "/case-studies/mylk-maam/lead.webp",
          alt: "Almonds, oats and fresh plant milk being strained into a glass jug",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Giving the Glass Bottle", "a Voice of Its Own"],
      body: [
        "The glass bottle is the brand’s most recognisable asset, so the identity was designed to work with it. A soft lowercase wordmark, a sprouting leaf symbol and a colour-coded neck tag let each flavour read clearly while keeping the shelf calm and consistent.",
        "The same system extends online, where the storefront leads with the product in natural light and makes choosing and reordering a favourite blend effortless.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/mylk-maam/cover.webp",
          url: "mylkmaam.com",
          nav: ["Shop", "Our Mylks", "Subscribe", "Story"],
          headline: "Fresh mylk, made with care.",
          cta: "Shop the range",
          alt: "MYLK MA’AM storefront hero with bottles by a sunlit pool",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Placing Every Bottle", "Inside a Daily Ritual"],
      body: [
        "Rather than staged product shots alone, the content shows MYLK MA’AM where it actually lives: after a morning stretch, beside a coffee, in a gym bag. The bottle stays the hero, but the moment around it does the persuading.",
        "A consistent palette of cream, latte and teal ties the feed together, so each post feels unmistakably part of the brand even when the setting changes.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/mylk-maam/duo.webp",
          handle: "@mylkmaam",
          caption: "Post-stretch, pre-everything. Cocoa mylk o’clock.",
          alt: "Woman on a yoga mat holding a bottle of chocolate plant milk",
          ai: true,
        },
        { kind: "poster", line: "Fresh, organic, made with care.", alt: "MYLK MA’AM brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Designing an Unboxing", "Worth Reordering"],
      body: [
        "For a fresh product delivered to the door, the box is the first handshake. Kraft cartons, paper fill and tagged bottles keep the experience natural and low-waste, echoing the brand’s ingredient-first story.",
        "Companion products such as granola pouches follow the same restrained system, so the range can grow without diluting the bottle at its centre.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/mylk-maam/feature.webp",
          alt: "Kraft delivery box holding glass milk bottles beside granola pouches",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "MYLK MA’AM now has a brand world that feels as fresh as the product itself — an identity, packaging system and content voice that turn a plant-based staple into a small daily ritual people want to return to.",
  more: ["tobys-estate", "ovo"],
  draft: true,
  review: [
    "Assumed MYLK MA’AM is a fresh, organic plant-based (nut/oat) milk brand — inferred from the “mylk” spelling and “Fresh | Organic” bottle copy in the thumbnail. Confirm.",
    "Assumed CRACKWITS delivered brand identity, packaging, content production and social media — confirm actual scope (identity may pre-date CRACKWITS).",
    "Thumbnail shows glass bottles with neck tags, a leaf/sprout symbol and a kraft granola pouch (“Oh My Gut!”); copy describes these as brand assets — confirm they are CRACKWITS work.",
    "Assumed an e-commerce storefront with subscriptions/reordering exists; domain “mylkmaam.com” and nav items are placeholders.",
    "Assumed home delivery in kraft boxes; the unboxing section is illustrative.",
    "Instagram handle “@mylkmaam” is assumed.",
    "Flavours (almond, oat, cocoa) are assumed from bottle colours.",
    "Market not stated (assumed Kuwait/GCC); no launch date given.",
    "Palette sampled from the thumbnail (espresso caps, latte, cream, teal mat); typeface Fraunces chosen to approximate the soft lowercase wordmark.",
    "Original test cover.png (labelled dairy bottles with legible text) was replaced with a text-free plant-milk image.",
  ],
};

export default mylkMaam;
