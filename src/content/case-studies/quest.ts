import type { CaseStudy } from "../types";

const quest: CaseStudy = {
  slug: "quest",
  name: "QUEST",
  category: "ENTERTAINMENT",
  thumbnail: "/work/quest.webp",
  subtitle: "A neon brand language that turns a venue into the game itself.",
  cover: {
    src: "/case-studies/quest/cover.webp",
    alt: "Dark entertainment arena lit by geometric neon light installations",
    ai: true,
  },
  overview: [
    "QUEST is an indoor entertainment destination built around games, challenges and nights out with friends.",
    "In a category full of loud venues competing for the same weekend, QUEST needed an identity that could do more than sit on a sign. It had to shape the atmosphere of the space and make the venue recognisable in every photo guests take inside it.",
    "CRACKWITS developed a graphic system of bars, chevrons, rings and dot grids, translated it into light, and carried it through the venue environment, merchandise and social content — so the brand is something guests walk through, not just look at.",
  ],
  services: ["Brand Identity", "Creative Direction", "Event Journeys", "Social Media", "Content Production"],
  stats: [
    { value: null, label: "Weekly Footfall" },
    { value: null, label: "User-Generated Posts" },
    { value: null, label: "Repeat Visit Rate" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "QUEST",
      typeface: "Unbounded",
      palette: [
        { name: "Arena Black", hex: "#0B0710" },
        { name: "Signal Red", hex: "#FF1E50" },
        { name: "Ultra Violet", hex: "#7B2FF2" },
        { name: "Amber Glow", hex: "#F5B700" },
        { name: "Circuit Blue", hex: "#2E6BFF" },
      ],
      line: "Level up your night.",
      pattern: "diagonal",
      voice: ["Bold", "Competitive", "Electric", "Social"],
    },
    images: ["/case-studies/quest/duo.webp", "/case-studies/quest/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Building an Identity", "Out of Light"],
      body: [
        "The QUEST identity was designed to be built, not just printed. Its core shapes — stacked bars, arrow chevrons, open rings and dot grids — are simple enough to become neon tubes and LED installations, giving the venue a ceiling-to-floor brand presence that reads instantly in a dark room.",
      ],
      media: [
        { kind: "image", src: "/work/quest.webp", alt: "QUEST venue interior with neon brand graphics" },
        {
          kind: "image",
          src: "/case-studies/quest/lead.webp",
          alt: "Friends competing on a glowing light-tile floor",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Turning Brand Assets", "Into Things Players Carry"],
      body: [
        "Inside QUEST, the brand travels with the guest. Game cards, wristbands and merchandise borrow the same chevrons and colour codes used in the space, so every object feels like part of the game rather than an add-on.",
        "A tight colour system — signal red, ultra violet and amber against black — keeps physical items consistent with the lighting, even under the venue’s low, saturated conditions.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/quest/feature.webp",
          alt: "Game cards, wristbands, token and chevron-pattern hoodie on a black surface",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Making Every Visit", "Worth Posting"],
      body: [
        "The venue was treated as a content studio. Neon installations were positioned to frame faces and groups, giving guests natural photo moments that carry the brand without a logo in sight.",
        "Social content follows the same rules: close, candid and lit by the brand’s own colours, keeping the feed competitive in tone and unmistakably QUEST.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/quest/duo.webp",
          handle: "@quest",
          caption: "New high score. Who’s next?",
          alt: "Young woman smiling under magenta and amber neon light",
          ai: true,
        },
        { kind: "poster", line: "Level up your night.", alt: "QUEST brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Choreographing the Journey", "From Entrance to Arena"],
      body: [
        "Arrows and chevrons double as wayfinding, pulling guests from the entrance through the bar and into the game zones. Light intensity and colour shift by area, signalling where to relax and where the action starts.",
        "The result is a venue where navigation, atmosphere and identity are the same system — a space that feels designed as one experience from the moment the doors open.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/quest/experience.webp",
          alt: "Venue reception with neon chevrons and guests checking in",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "QUEST now has a brand that guests experience physically — in light, objects and space — giving the venue a distinctive atmosphere, an identity that travels naturally through social media and a system that can extend to new game zones as the offer grows.",
  more: ["tekzone", "special-events"],
  draft: true,
  review: [
    "Section image experience.webp is an additional AI placeholder (generated so the cover is not repeated) — replace with real imagery.",
    "Thumbnail shows a neon-lit indoor venue (arcade/game zones, bar with 'Drink' graphic, entrance) with large brand graphics on the ceiling — assumed QUEST is an indoor entertainment/game venue and CRACKWITS designed the identity and its environmental application; confirm scope.",
    "Assumed environmental graphics/neon installations were CRACKWITS work (vs. interior architect) — confirm.",
    "Merchandise (game cards, wristbands, hoodies), wayfinding and social content scope are assumptions.",
    "Location/market not stated — confirm (likely Kuwait).",
    "No website evidence, so no browser mockup.",
    "Handle '@quest' and line 'Level up your night.' are placeholders.",
    "Palette sampled from the thumbnail (black, red, violet, amber, blue); typeface 'Unbounded' is a stand-in.",
    "Stat labels are suggestions; values intentionally empty.",
    "All four case-study images are AI-generated placeholders.",
  ],
};

export default quest;
