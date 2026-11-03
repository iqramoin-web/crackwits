import type { CaseStudy } from "../types";

const coya: CaseStudy = {
  slug: "coya",
  name: "COYA",
  category: "F&B",
  thumbnail: "/work/coya.webp",
  subtitle: "Turning a Latin American lifestyle brand’s strategy into bookings.",
  cover: {
    src: "/case-studies/coya/cover.webp",
    alt: "Ceviche on a black ceramic plate under a warm spotlight",
    ai: true,
  },
  overview: [
    "COYA is a global luxury dining and lifestyle brand that takes guests on a journey to Latin America through authentic Peruvian food, pisco infusions, cultural events and late-night parties, with venues from Mayfair and Monte Carlo to Dubai, Doha and Riyadh.",
    "To keep that experience as transformative online as it is in the room, COYA needed a clear strategic foundation and a digital presence that would turn interest into bookings and tickets.",
    "CRACKWITS started with the core concept, brandmark and identity, then built a coming-soon page and full website, ran social media from art direction to boosting, designed billboard campaigns and planned the media to put it all in front of the right audience.",
  ],
  services: ["Brand Strategy", "UX/UI", "Web Development", "Social Media", "Digital Media"],
  stats: [
    { value: null, label: "Online Reservations" },
    { value: null, label: "Social Engagement Rate" },
    { value: null, label: "Campaign Reach" },
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
      line: "Find your inner Inca.",
      pattern: "diagonal",
      voice: ["Immersive", "Spirited", "Authentic", "Worldly"],
    },
    images: ["/case-studies/coya/duo.webp", "/case-studies/coya/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Starting With", "a Timeless Strategy"],
      body: [
        "Before any screen was designed, CRACKWITS defined the idea behind the brand: its essence, its big idea and the pillars that hold it up. The brandmark and identity were then shaped to express that thinking and to anticipate how COYA will grow, so the look stays timeless — near-black canvases, rich burnt orange and a refined serif that lets the food and the room speak first.",
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
      title: ["A Website That Tells", "the Story of COYA"],
      body: [
        "A coming-soon landing page opened the conversation, building curiosity while the full site was in the making.",
        "The custom website that followed gives the public a place to understand what COYA is — its food, its culture, its nights — with a location selector and booking button always close at hand, so atmosphere and action live side by side.",
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
      title: ["A Social Strategy", "That Fills the Room"],
      body: [
        "Social was built with a clear job: drive engagement, ticket sales and bookings. CRACKWITS handled it end to end — art direction, content creation, design, copy and boosting.",
        "Every post follows the same lighting and colour discipline as the website, so the feed reads as one continuous evening and steadily grows COYA’s online presence and the bookings that come with it.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/coya/duo.webp",
          handle: "@coyarestaurant",
          caption: "Pisco in hand, music up. Find your inner Inca tonight.",
          alt: "Bartender pouring a pisco sour into a coupe glass",
          ai: true,
        },
        { kind: "poster", line: "Find your inner Inca.", alt: "COYA brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Taking the Brand", "to the Billboard"],
      body: [
        "Static billboard visuals were designed to be fresh, positive and enticing at a glance, giving COYA a constant, high-visibility presence that widens its reach well beyond its regulars.",
        "A complete media plan tied outdoor and digital together, with Google Ads, META and other channels working alongside the billboards for maximum awareness.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/coya/feature.webp",
          alt: "Large roadside billboard glowing at dusk with a warm, dark food-led campaign visual",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "COYA now has a strategy, identity and digital presence that work as one — atmospheric enough to carry the brand’s Latin American spirit, and focused enough to turn awareness on billboards and feeds into bookings at the table.",
  more: ["pizza-express", "cheesecake-factory"],
  draft: true,
  review: [
    "From crackwits.com case study: Peruvian food, pisco infusions, cultural events and parties; venues in Mayfair, Dubai, Abu Dhabi, London City, Monte Carlo, Paris, Mykonos, Doha and Riyadh; punchline 'Find your inner Inca.'; domain coyarestaurant.com.",
    "From crackwits.com case study: core concept, logo and branding; coming-soon page and website; social strategy (art direction, content, design, copy, boosting) to push tickets, engagement and bookings; billboard design; media plan with Google Ads and META.",
    "Reference says CRACKWITS created the logo and branding for an established global brand — confirm which market/venue the work covered and how to phrase it.",
    "Website headline is from the thumbnail; nav items and handle '@coyarestaurant' are assumed.",
    "Palette sampled from the thumbnail plus an assumed gold; Cormorant Garamond approximates the site serif.",
    "feature.webp (billboard scene) needs regenerating — current image shows menus and a bill folder.",
  ],
};

export default coya;
