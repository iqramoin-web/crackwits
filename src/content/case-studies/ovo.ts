import type { CaseStudy } from "../types";

const ovo: CaseStudy = {
  slug: "ovo",
  name: "OVO",
  category: "F&B",
  thumbnail: "/work/ovo.webp",
  subtitle: "Serving plant-forward Italian comfort food with an appetite for joy.",
  cover: {
    src: "/case-studies/ovo/cover.webp",
    alt: "Avocado and rocket thin-crust pizza on a wooden board over cream linen",
    ai: true,
  },
  overview: [
    "OVO is a vegan, vegetarian and flexitarian kitchen built on the comfort of Italian food: thin-crust pizzas, fresh pasta and generous plates where vegetables lead.",
    "Plant-based dining is often framed as a sacrifice. OVO needed to be seen as the opposite — indulgent, warm and inclusive enough for everyone at the table, whatever they usually eat — and to make ordering as easy as craving.",
    "CRACKWITS designed and built a bright, appetite-led website with direct online ordering, and set a content direction that puts the food, and the people sharing it, at the centre.",
  ],
  services: ["Brand Position", "UX/UI", "Web Development", "Social Media"],
  stats: [
    { value: null, label: "Online Orders" },
    { value: null, label: "Monthly Site Visitors" },
    { value: null, label: "Social Followers Growth" },
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
      line: "Love at first bite.",
      pattern: "waves",
      voice: ["Generous", "Inclusive", "Playful", "Fresh"],
    },
    images: ["/case-studies/ovo/duo.webp", "/case-studies/ovo/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Leading With Comfort", "Not Compromise"],
      body: [
        "We positioned OVO around a simple truth: everyone loves Italian comfort food. Vegan, vegetarian and flexitarian are welcomed equally rather than used as warnings, and the tone celebrates abundance — the stretch of a slice, the colour of a fresh plate — so the menu speaks to appetite before it speaks to diet.",
      ],
      media: [
        { kind: "image", src: "/work/ovo.webp", alt: "OVO website shown on a laptop in a café" },
        {
          kind: "image",
          src: "/case-studies/ovo/lead.webp",
          alt: "Chef rolling out pizza dough beside bowls of fresh vegetables",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Building a Website", "You Can Almost Taste"],
      body: [
        "The site pairs a warm cream canvas with top-down hero dishes, letting each plate become a graphic shape on the page. Copy is short and sensory, and a rolling-pin button turns the call to action into a small moment of kitchen character.",
        "Ordering sits in the header on every page, so moving from inspiration to checkout never takes more than a click.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/ovo/cover.webp",
          url: "ovo-kitchen.com",
          nav: ["Menu", "Our Kitchen", "Locations", "Order Online"],
          headline: "Love at first bite.",
          cta: "Explore",
          alt: "OVO website hero featuring an avocado pizza on cream",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Making Every Table", "Feel Like an Invitation"],
      body: [
        "Social content captures OVO as a place for sharing: friends splitting pizzas, salads passed across the table, the unplanned moments that make a meal memorable. Food stays in sharp focus, but the people around it tell the story.",
        "A consistent palette of cream, avocado green and terracotta keeps the feed fresh and instantly recognisable as OVO.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/ovo/duo.webp",
          handle: "@ovo.kitchen",
          caption: "Plant-powered, cheese-pull approved. Who’s sharing?",
          alt: "Two friends sharing pizza and salads at a sunny restaurant table",
          ai: true,
        },
        { kind: "poster", line: "Love at first bite.", alt: "OVO brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Carrying the Kitchen", "All the Way Home"],
      body: [
        "With online ordering at the heart of the experience, delivery had to feel as considered as dine-in. Clean cream boxes, natural twine and kraft bags carry the same honest, ingredient-first character as the restaurant.",
        "The visual system is deliberately simple, so it adapts easily across menus, packaging and seasonal launches.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/ovo/feature.webp",
          alt: "Cream pizza boxes tied with twine beside a kraft bag and olive oil",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "OVO now presents plant-forward dining as something to crave rather than consider — a warm, inclusive brand voice and an ordering experience that make it easy for anyone to choose vegetables first.",
  more: ["pizza-express", "mylk-maam"],
  draft: true,
  review: [
    "Thumbnail shows an OVO website (“Love at first bite”, “Vegan.Vegetarian.Flexitarian”, rolling-pin “Explore” button, “Order Online”). Assumed CRACKWITS designed and built the website plus brand positioning and social — confirm scope.",
    "Assumed OVO serves Italian-inspired comfort food (pizza, pasta) from the site copy; other menu items are assumed.",
    "Market and number of locations unknown (assumed Kuwait/GCC); “Locations” nav item is a placeholder.",
    "Domain “ovo-kitchen.com” and handle “@ovo.kitchen” are placeholders — verify.",
    "Delivery packaging section is illustrative; no packaging evidence in the thumbnail.",
    "Palette sampled from the thumbnail (cream background, avocado greens, wooden board, black type) plus an assumed terracotta accent; DM Serif Display chosen to approximate the decorative serif wordmark.",
  ],
};

export default ovo;
