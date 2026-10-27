import type { CaseStudy } from "../types";

const tekzone: CaseStudy = {
  slug: "tekzone",
  name: "TEKZONE",
  category: "ENTERTAINMENT",
  thumbnail: "/work/tekzone.webp",
  subtitle: "A neon-charged gaming destination with a mascot built to compete.",
  cover: {
    src: "/case-studies/tekzone/cover.webp",
    alt: "Gaming arena bathed in violet and teal neon light",
    ai: true,
  },
  overview: [
    "TEKZONE is a gaming and entertainment destination where friends, families and competitive players come together around arcade, console and esports experiences.",
    "In a market full of screens competing for attention, TEKZONE needed more than a venue identity. It needed a personality that could carry from the arena floor to social feeds and make every visit feel like an event.",
    "CRACKWITS built TEKZONE's brand world around a character: ZO, a screen-faced robot host. Together with a high-energy neon visual language and bilingual content, ZO turns the venue into an ongoing story.",
  ],
  services: ["Creative Direction", "Dynamic Branding", "Social Media", "Content Production", "Brand Activations"],
  stats: [
    { value: null, label: "Monthly Impressions" },
    { value: null, label: "Video Views" },
    { value: null, label: "Footfall Growth" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "TEKZONE",
      typeface: "Unbounded",
      palette: [
        { name: "Arena Black", hex: "#0E0A1A" },
        { name: "Neon Violet", hex: "#B455E6" },
        { name: "Pixel Teal", hex: "#3FD6D0" },
        { name: "Power-Up Green", hex: "#2EE86B" },
        { name: "Controller Blue", hex: "#2F4FD8" },
      ],
      line: "Game on. Every visit.",
      pattern: "diagonal",
      voice: ["Electric", "Playful", "Competitive", "Social"],
    },
    images: ["/case-studies/tekzone/duo.webp", "/case-studies/tekzone/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Giving a Gaming Venue", "a Face People Remember"],
      body: [
        "Instead of a logo on a wall, TEKZONE got a host. ZO's screen face can display any expression, his chest panel doubles as a play button, and he moves through the venue greeting players, starting tournaments and appearing in content. The motion lines and violet glow around him became the brand's signature framing device: speed, light and a sense that something is about to start.",
      ],
      media: [
        { kind: "image", src: "/work/tekzone.webp", alt: "TEKZONE robot mascot ZO in the venue" },
        {
          kind: "image",
          src: "/case-studies/tekzone/lead.webp",
          alt: "Rows of gaming stations glowing in violet and teal light",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Designing a Space That", "Feels Like Entering the Game"],
      body: [
        "The identity is built to live in light as much as on screen. Neon violet, teal and a hit of power-up green move from LED arches and wayfinding to the scoreboards and screens around the venue, so the visual language stays consistent across the space.",
        "Each zone, from casual arcade play to competitive stations, has its own lighting intensity within one palette. Visitors can read the space at a glance, and every corner works as a backdrop for photos.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/tekzone/feature.webp",
          alt: "Neon-lit gaming venue interior with LED arches",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Turning Every Match", "Into Shareable Content"],
      body: [
        "Social content is built for thumb-stopping speed: short vertical videos, bold Arabic and English captions, and ZO at the centre of challenges, tournament calls and reactions. Lines like 'Time to compete!' turn a visit into an invitation.",
        "A bilingual tone of voice that is playful, competitive and never too serious lets TEKZONE speak to teenage gamers and parents planning a weekend outing in the same feed.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/tekzone/duo.webp",
          handle: "@tekzone",
          caption: "Time to compete! Who's taking the crown this weekend?",
          alt: "Friends celebrating a win in front of a glowing gaming screen",
          ai: true,
        },
        { kind: "poster", line: "Game on. Every visit.", alt: "TEKZONE brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Activations That Bring", "the Arena to the Audience"],
      body: [
        "ZO is designed to travel. Tournaments, launch nights and pop-up appearances take the character and his neon world beyond the venue, into malls, schools and community events.",
        "A modular kit of light frames, motion-line graphics and challenge formats lets each activation feel like part of the same universe and brings new players back to TEKZONE.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/tekzone/experience.webp",
          alt: "Pop-up gaming booth with violet and teal light in a mall atrium",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "TEKZONE now has a brand that people meet rather than just see. With ZO as its host and a neon visual language that works across the venue, social media and live events, TEKZONE has a lasting platform for building a community of players who keep coming back.",
  more: ["quest", "ogl"],
  draft: true,
  review: [
    "Section image experience.webp is an additional AI placeholder (generated so the cover is not repeated) — replace with real imagery.",
    "Assumed the robot mascot (chest reads 'ZO') is a TEKZONE brand character created or art-directed by CRACKWITS. The name 'ZO' and its role as host are assumptions. Confirm.",
    "Assumed scope covers creative direction, social media/video content, venue branding and activations. Only a social-style frame is visible. Confirm.",
    "Arabic caption on thumbnail translates to 'Time to compete!'; used in copy. Confirm translation and usage.",
    "Venue offering (arcade, console, esports, tournaments) and audience (teens, families) are assumptions.",
    "Market assumed to be Arabic-speaking/GCC (likely Kuwait) from the Arabic caption; not stated in copy. Confirm.",
    "No website evidence, so section 2 uses an AI venue image instead of a browser mockup.",
    "Handle @tekzone is assumed. Palette sampled from the thumbnail (violet, teal, green, blue); hex values approximate. Unbounded chosen for a gaming display feel.",
    "Brand line 'Game on. Every visit.' is new copy.",
  ],
};

export default tekzone;
