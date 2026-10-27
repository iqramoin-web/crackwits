import type { CaseStudy } from "../types";

const pizzaExpress: CaseStudy = {
  slug: "pizza-express",
  name: "PIZZA EXPRESS",
  category: "F&B",
  thumbnail: "/work/pizza-express.webp",
  subtitle: "Keeping a heritage pizzeria relevant to a new generation of diners.",
  cover: {
    src: "/case-studies/pizza-express/cover.webp",
    alt: "Pizzas, dough balls and drinks on a long marble restaurant table",
    ai: true,
  },
  overview: [
    "PizzaExpress has been serving pizza since 1965, and its art nouveau roundel, marble tables and open kitchens are recognised far beyond its London origins.",
    "For a brand with that much history, the challenge is staying present in a fast-moving local dining scene — feeling familiar to longtime fans while giving younger diners and families a reason to choose it tonight.",
    "CRACKWITS developed a content and digital marketing approach that leans on the brand’s heritage and rituals, from dough balls to the open oven, and turns them into a steady rhythm of social storytelling.",
  ],
  services: ["Strategy", "Social Media", "Content Production", "Digital Marketing"],
  stats: [
    { value: null, label: "Monthly Impressions" },
    { value: null, label: "Engagement Rate" },
    { value: null, label: "Reservations & Orders" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "PIZZA EXPRESS",
      typeface: "Playfair Display",
      palette: [
        { name: "Roundel Black", hex: "#141312" },
        { name: "Marble", hex: "#F1ECE3" },
        { name: "Heritage Gold", hex: "#C9A23F" },
        { name: "Ivy", hex: "#3E6B35" },
        { name: "Brick", hex: "#A5533A" },
      ],
      line: "Since 1965, made to share.",
      pattern: "arcs",
      voice: ["Warm", "Familiar", "Spirited", "Timeless"],
    },
    images: ["/case-studies/pizza-express/duo.webp", "/case-studies/pizza-express/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Treating Heritage", "as a Living Asset"],
      body: [
        "The roundel, the 1965 date and the black-and-cream palette carry decades of memories. Rather than modernising them away, we treated them as storytelling tools: the craft of the open kitchen, the pizzaiolo’s hands and the marble table became recurring characters that make the brand feel both rooted and current.",
      ],
      media: [
        { kind: "image", src: "/work/pizza-express.webp", alt: "PizzaExpress roundel sign with 1965 plaque" },
        {
          kind: "image",
          src: "/case-studies/pizza-express/lead.webp",
          alt: "Pizzaiolo stretching dough in front of a glowing tiled oven",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Putting the Menu Classics", "Back in the Spotlight"],
      body: [
        "Some dishes are part of the brand’s identity as much as the logo. Content gives favourites such as the Margherita and dough balls the hero treatment they deserve — styled simply, lit warmly and always shown ready to share.",
        "Seasonal launches and new dishes are introduced through the same lens, so novelty never feels at odds with the classics people come back for.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/pizza-express/experience.webp",
          alt: "Chef stretching dough on a marble counter beside the oven",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Turning Dinner Tables", "Into Shareable Moments"],
      body: [
        "PizzaExpress is where families celebrate and friends catch up, so the social feed was built around shared tables: many hands, many plates, one moment. The format works across reels, stories and paid placements without losing warmth.",
        "A disciplined palette of black, marble and gold keeps every post recognisably PizzaExpress, even in a crowded feed.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/pizza-express/duo.webp",
          handle: "@pizzaexpress",
          caption: "Dough balls first. Always. Tag who you’re sharing with.",
          alt: "Hands reaching for pizzas and dough balls on a marble table",
          ai: true,
        },
        { kind: "poster", line: "Since 1965, made to share.", alt: "PizzaExpress brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Inviting the City", "Back to the Terrace"],
      body: [
        "Beyond the food, the restaurants themselves are part of the appeal. Content showcases terraces at golden hour, ivy-framed facades and the glow of the dining room, giving people a sense of place before they arrive.",
        "These location-led stories support local awareness and give each venue its own personality within the shared brand.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/pizza-express/feature.webp",
          alt: "Restaurant terrace with marble tables and black awning at golden hour",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "The work gives PizzaExpress a consistent, heritage-led voice in local channels — one that honours what people already love about the brand while giving it fresh reasons to be part of everyday plans.",
  more: ["coya", "ovo"],
  draft: true,
  review: [
    "Section image experience.webp is an additional AI placeholder (generated so the cover is not repeated) — replace with real imagery.",
    "The thumbnail only shows the PizzaExpress roundel sign (“1965”) — no evidence of a website, app or campaign. Assumed CRACKWITS handled strategy, social media, content production and digital marketing for a regional franchise — confirm actual scope and market (assumed Kuwait/GCC).",
    "Default browser mockup replaced with image media because there is no website evidence.",
    "Public facts used: founded 1965 in London, art nouveau roundel, marble tables, open kitchens, dough balls and Margherita as signature items — confirm they are appropriate for the regional menu.",
    "CRACKWITS is not claimed to have created the identity; copy frames the roundel and heritage as existing brand assets.",
    "Instagram handle “@pizzaexpress” is a placeholder — the regional handle likely differs (e.g. a country suffix).",
    "Terrace/location section assumes venues with outdoor seating.",
    "Palette based on the black/cream roundel and gold “1965” plaque, with ivy green and brick sampled from the thumbnail; Playfair Display chosen as a refined serif (the real logotype is a custom art nouveau face).",
  ],
};

export default pizzaExpress;
