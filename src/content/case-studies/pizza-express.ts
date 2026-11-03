import type { CaseStudy } from "../types";

const pizzaExpress: CaseStudy = {
  slug: "pizza-express",
  name: "PIZZA EXPRESS",
  category: "F&B",
  thumbnail: "/work/pizza-express.webp",
  subtitle: "A fresher printed menu for a pizzeria that has been handcrafting since 1965.",
  cover: {
    src: "/case-studies/pizza-express/cover.webp",
    alt: "Pizzas, dough balls and drinks on a long marble restaurant table",
    ai: true,
  },
  overview: [
    "PizzaExpress has been making pizza since 1965 and still carries a lively, sociable appeal around the world — a pizzeria known for lovingly handcrafted food and spirited teams who bring people together.",
    "Memorable moments at the table start with a good ordering experience. The restaurant’s printed menu needed a fresher look and an easier read, so choosing feels as enjoyable as eating.",
    "CRACKWITS redesigned the physical menu, drawing on the brand’s existing assets to make it more appealing and more user-friendly for guests.",
  ],
  services: ["UX/UI", "Menu Design", "Print Design"],
  stats: [
    { value: null, label: "Menu Pages Redesigned" },
    { value: null, label: "Dishes Featured" },
    { value: null, label: "Restaurants Using the Menu" },
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
      line: "Handmade Happiness.",
      pattern: "arcs",
      voice: ["Warm", "Sociable", "Handcrafted", "Spirited"],
    },
    images: ["/case-studies/pizza-express/duo.webp", "/case-studies/pizza-express/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Designing From", "the Brand’s Own Assets"],
      body: [
        "The roundel, the 1965 heritage and the black-and-cream palette already carry decades of affection, so the redesign didn’t reinvent them. CRACKWITS used those existing assets as the menu’s building blocks, giving the pages a fresher look that still feels unmistakably PizzaExpress and true to its promise of handmade happiness.",
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
      title: ["Making Every Page", "Easier to Order From"],
      body: [
        "A menu is a tool before it is a showcase. The layout was reworked so guests can scan sections quickly, find the dishes they came for and discover something new without losing their place.",
        "Clear hierarchy, considered spacing and a calmer rhythm across the pages turn ordering into part of the experience rather than a pause before it.",
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
      title: ["Fresh Out", "the Oven"],
      body: [
        "The redesign leans into what makes PizzaExpress sociable: food meant to be shared across a busy table. Warm, simple presentation lets the handcrafted dishes take centre stage on the page.",
        "Because the menu draws on the brand’s own colours and imagery, the same look sits comfortably wherever guests meet the brand — including the photos they take and share at the table.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/pizza-express/duo.webp",
          handle: "@pizzaexpress",
          caption: "Fresh out the oven and straight to the middle of the table.",
          alt: "Hands reaching for pizzas and dough balls on a marble table",
          ai: true,
        },
        { kind: "poster", line: "Handmade Happiness.", alt: "PizzaExpress brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["A Menu Made", "for the Room It Lives In"],
      body: [
        "Printed menus are handled, passed around and read in every kind of light, from a sunny terrace at lunch to a glowing dining room at night.",
        "The fresher design was set up to stay legible and inviting in all of those moments, so the ordering experience feels as positive as the welcome from the team.",
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
    "PizzaExpress now has a printed menu that looks as fresh as the food it describes — rooted in the brand’s own assets, easier to navigate, and ready to make every order part of a memorable moment of connection.",
  more: ["coya", "ovo"],
  draft: true,
  review: [
    "From crackwits.com case study: established 1965; sociable pizzeria known for handcrafted pizza and spirited teams; scope limited to revamping the printed menu, inspired by the brand’s assets; punchline 'Handmade Happiness.'; 'Fresh Out the Oven!'.",
    "Previous draft’s social, content and digital marketing scope removed — the reference lists menu design only.",
    "Market/country not stated in the reference — no location claimed.",
    "Phone mockup is illustrative of how the menu look carries into guest photos; it does not claim CRACKWITS ran social. Handle '@pizzaexpress' and caption are placeholders.",
    "Menu specifics (hierarchy, spacing, legibility in different light) are descriptive interpretations — confirm with the actual menu.",
    "Palette based on the roundel and 1965 plaque; Playfair Display is a stand-in for the custom logotype.",
    "No image shows the redesigned menu itself — replace a placeholder with real menu photography if available.",
  ],
};

export default pizzaExpress;
