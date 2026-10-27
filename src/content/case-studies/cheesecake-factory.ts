import type { CaseStudy } from "../types";

const cheesecakeFactory: CaseStudy = {
  slug: "cheesecake-factory",
  name: "The Cheesecake Factory",
  category: "F&B",
  thumbnail: "/work/cheesecake-factory.webp",
  subtitle: "Turning a legendary dessert menu into reasons to celebrate together.",
  cover: {
    src: "/case-studies/cheesecake-factory/cover.webp",
    alt: "A row of cheesecake slices on a polished walnut bar in warm golden light",
    ai: true,
  },
  overview: [
    "The Cheesecake Factory is an American dining icon, known for its generous menu, grand interiors and a dessert case with dozens of cheesecakes.",
    "In the region, the brand sits at the heart of birthdays, family gatherings and long catch-ups. The task was to keep it top of mind for those occasions, and to make a famously large menu feel exciting rather than overwhelming.",
    "CRACKWITS built an always-on content and campaign programme centred on celebration: hero dessert storytelling, occasion-led campaigns and social content that captures the warmth of the dining room.",
  ],
  services: ["Holistic Campaign", "Social Media", "Content Production", "Digital Media"],
  stats: [
    { value: null, label: "Monthly Impressions" },
    { value: null, label: "Video Views" },
    { value: null, label: "Whole-Cake Orders" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "The Cheesecake Factory",
      typeface: "Cormorant Garamond",
      palette: [
        { name: "Espresso", hex: "#2A1A12" },
        { name: "Bronze", hex: "#B36A2E" },
        { name: "Burnished Gold", hex: "#D9A35B" },
        { name: "Cream Cheese", hex: "#F5ECDC" },
        { name: "Strawberry", hex: "#B7273A" },
      ],
      line: "Every occasion deserves a slice.",
      pattern: "grid",
      voice: ["Generous", "Celebratory", "Warm", "Indulgent"],
    },
    images: ["/case-studies/cheesecake-factory/duo.webp", "/case-studies/cheesecake-factory/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Building on a Sense", "of Occasion"],
      body: [
        "Bronze lettering, glowing amber lamps and soaring painted ceilings make every visit feel like an event. We used that grandeur as the visual anchor for all content: warm, golden light, rich wood and copper tones, and compositions that always leave room for the dessert to take the stage.",
      ],
      media: [
        { kind: "image", src: "/work/cheesecake-factory.webp", alt: "The Cheesecake Factory bronze logo on a brass mesh wall" },
        {
          kind: "image",
          src: "/case-studies/cheesecake-factory/lead.webp",
          alt: "Grand restaurant dining room with painted ceilings and a cheesecake display case",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Making a Famous Menu", "Easy to Fall For"],
      body: [
        "With so many cheesecakes to choose from, the content strategy treats the dessert case like a cast of characters. Each flavour gets its own moment, lighting and story, building anticipation instead of listing options.",
        "Rotating spotlights and seasonal features give the audience a reason to keep coming back to the feed, and to the restaurant, to try the next one.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/cheesecake-factory/experience.webp",
          alt: "Friends sharing dishes and a slice of strawberry cheesecake",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Capturing the First Bite", "and the Laughter Around It"],
      body: [
        "The most persuasive content is the moment the fork goes in. Short-form video and close-up photography focus on texture and indulgence, framed by the friends and families sharing the table.",
        "Every piece is graded to the same golden palette, so the feed feels like one long, generous evening at the restaurant.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/cheesecake-factory/duo.webp",
          handle: "@thecheesecakefactory",
          caption: "One slice, two forks, zero regrets. What’s your go-to?",
          alt: "Fork lifting a bite of chocolate cookie cheesecake in a warm booth",
          ai: true,
        },
        { kind: "poster", line: "Every occasion deserves a slice.", alt: "The Cheesecake Factory campaign poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Taking the Celebration", "Home With You"],
      body: [
        "Birthdays, Eid gatherings and family milestones are natural moments for a whole cheesecake. Occasion-led campaigns position the brand as the centrepiece of celebrations beyond the restaurant, from takeaway to gifting.",
        "Ribboned boxes, candles and shared slices give these campaigns a consistent, festive look that can flex across seasons.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/cheesecake-factory/feature.webp",
          alt: "Whole strawberry cheesecake in a ribboned gift box beside a birthday slice",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "The programme gives The Cheesecake Factory a celebratory, consistent presence in local channels — one that turns a vast dessert menu into a series of irresistible moments and keeps the brand at the centre of the region’s special occasions.",
  more: ["tobys-estate", "coya"],
  draft: true,
  review: [
    "Section image experience.webp is an additional AI placeholder (generated so the cover is not repeated) — replace with real imagery.",
    "The thumbnail only shows the bronze logo on a brass mesh wall — no evidence of a website, app or specific campaign. Assumed CRACKWITS delivered social media, content production, occasion campaigns and digital media for the regional franchise — confirm scope and market (assumed Kuwait/GCC).",
    "Default browser mockup replaced with image media because there is no website evidence.",
    "Public facts used: American restaurant brand, large menu, grand interiors, dozens of cheesecake flavours — no specific counts stated.",
    "Whole-cake takeaway/gifting and Eid/birthday campaigns are assumed — confirm they were part of the work.",
    "Instagram handle “@thecheesecakefactory” is a placeholder — the regional handle likely differs.",
    "CRACKWITS is not claimed to have created the identity or interiors.",
    "Palette sampled from the thumbnail (bronze lettering, gold mesh, warm light) plus assumed espresso, cream and strawberry; Cormorant Garamond chosen as a classic serif (the real wordmark is a custom script/serif).",
  ],
};

export default cheesecakeFactory;
