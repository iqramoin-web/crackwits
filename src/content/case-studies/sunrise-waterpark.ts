import type { CaseStudy } from "../types";

const sunriseWaterpark: CaseStudy = {
  slug: "sunrise-waterpark",
  name: "Sunrise WATERPARK",
  category: "ENTERTAINMENT",
  thumbnail: "/work/sunrise.webp",
  subtitle: "Launching West Africa’s largest waterpark before its gates opened.",
  cover: {
    src: "/case-studies/sunrise-waterpark/cover.webp",
    alt: "Orange, blue and pink water slides above a pool at golden hour",
    ai: true,
  },
  overview: [
    "SUNRISE WATERPARK began as a vision for a 55,000-square-metre destination — the largest waterpark in West Africa.",
    "Launching a place that doesn’t exist yet means selling a feeling from blueprints. The park needed a brand, a digital home and a campaign that could build real anticipation long before the first guest arrived.",
    "CRACKWITS took SUNRISE from blank canvas to opening day and beyond: strategy and brand inception, a website with an interactive park map, social channels built from scratch, a full launch campaign with production and paid media, and on-the-ground activations.",
  ],
  services: ["Strategy", "Brand Identity", "UX/UI", "Web Development", "Social Media", "Digital Media"],
  stats: [
    { value: null, label: "Website Visitors at Launch" },
    { value: null, label: "Reel Views" },
    { value: null, label: "Branded Touchpoints" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "Sunrise",
      typeface: "Bricolage Grotesque",
      palette: [
        { name: "Deep Royal", hex: "#1F3BD1" },
        { name: "Sunrise Orange", hex: "#F7A21B" },
        { name: "Flamingo Pink", hex: "#F2609C" },
        { name: "Pool Aqua", hex: "#3EC6E8" },
        { name: "Splash White", hex: "#FFFFFF" },
      ],
      line: "A World of Marvels.",
      pattern: "dots",
      voice: ["Wonder", "Movement", "Discovery", "Joy"],
    },
    images: ["/case-studies/sunrise-waterpark/duo.webp", "/case-studies/sunrise-waterpark/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Building a World", "Before the Walls Went Up"],
      body: [
        "The brief was to create a whole universe from nothing and make it feel welcoming well ahead of opening day. CRACKWITS scanned the competition, set the strategic positioning, designed the logo and built an identity around wonder, movement and discovery — joyful colour and a visual language that flows like water — all steered by one big idea: “A World of Marvels”.",
      ],
      media: [
        { kind: "image", src: "/work/sunrise.webp", alt: "SUNRISE WATERPARK branded swim rings floating in a pool" },
        {
          kind: "image",
          src: "/case-studies/sunrise-waterpark/lead.webp",
          alt: "Aerial view of swimmers on orange and blue rings in a turquoise wave pool",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["An Identity Designed", "to Scale Beyond the Logo"],
      body: [
        "The identity was built to become an ecosystem. It runs through on-site signage and wayfinding, flyers, brochures and printed collateral, merchandise and branded items, and a multi-visual outdoor campaign.",
        "It even greets travellers on arrival, with large-format airport banners announcing SUNRISE — so the park’s promise is felt well before anyone reaches the gate.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/sunrise-waterpark/feature.webp",
          alt: "Colour-blocked wayfinding totem and striped parasols beside a pool deck",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Opening the Gates", "Online First"],
      body: [
        "The digital world opened before the park did. A “Coming Soon” page sparked curiosity and drew thousands of visitors within days, then gave way to a vibrant, fluid website where guests explore attractions, plan their day and buy tickets. At its centre sits an interactive animated park map, designed and built by CRACKWITS, that lets people hover and discover each ride before setting foot inside.",
        "Social channels were set up from the ground up, with a defined tone of voice and content foundations in place long before launch — then filled with teaser edits, story-led posts, early-bird ticket pushes and influencer collaborations.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/sunrise-waterpark/duo.webp",
          handle: "@sunrisewaterpark",
          caption: "A world of marvels is almost here. Early-bird tickets are open.",
          alt: "Two friends laughing at the bottom of an orange water slide",
          ai: true,
        },
        { kind: "poster", line: "A World of Marvels.", alt: "SUNRISE WATERPARK brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Turning Anticipation", "Into Footfall"],
      body: [
        "After storyboarding and creative direction, CRACKWITS coordinated the production house and led the launch shoot on site, among the splashes, to build a content bank of photography, video and cut-downs for long-term use. A structured paid plan across META and Google Ads, with a 360° rollout through digital and outdoor, carried it to audiences.",
        "On the ground, billboards announced the opening while branded booths, flags, umbrellas and apparel extended the brand around the park. After launch, CRACKWITS stayed on for SEO, website maintenance and ongoing collateral as the park kept evolving.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/sunrise-waterpark/experience.webp",
          alt: "Family walking past colour-blocked lockers and parasols at the waterpark entrance",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "SUNRISE WATERPARK opened as a destination people already knew and talked about — a brand, digital experience and campaign moving together, giving the park a consistent, joyful presence from airport arrivals to the last slide of the day.",
  more: ["kcamp", "pointe-anglaise"],
  draft: true,
  review: [
    "From crackwits.com case study: West Africa’s largest waterpark, 55,000 m²; competitor scan, positioning, logo and identity; big idea 'A World of Marvels'.",
    "From crackwits.com case study: signage/wayfinding, print, merchandise, airport banners, outdoor; coming-soon page then ticketing website; interactive animated park map; social set-up.",
    "From crackwits.com case study: teasers, early-bird and influencer campaigns; production and shoot oversight; META and Google Ads; billboards, booths, flags, umbrellas, apparel; post-launch SEO and maintenance.",
    "'Thousands of visitors within days' is from the reference; no figures shown in stats. The reference also mentions reels reaching millions of views — not used in copy.",
    "Country within West Africa not stated — not claimed. Bilingual English/French rings in the thumbnail not mentioned in copy.",
    "Palette sampled from the thumbnail; typeface 'Bricolage Grotesque' is a stand-in for the rounded wordmark.",
    "Handle '@sunrisewaterpark' and post caption are assumed/illustrative; domain sunrisewaterpark.com per reference (not used in a mockup).",
    "All four case-study images are AI-generated placeholders.",
  ],
};

export default sunriseWaterpark;
