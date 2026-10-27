import type { CaseStudy } from "../types";

const kcamp: CaseStudy = {
  slug: "kcamp",
  name: "KCAMP",
  category: "ENTERTAINMENT",
  thumbnail: "/work/kcamp.webp",
  subtitle: "Bringing a long-running Kuwait summer camp online, with its energy intact.",
  cover: {
    src: "/case-studies/kcamp/cover.webp",
    alt: "Children in orange camp t-shirts running across a sunny courtyard",
    ai: true,
  },
  overview: [
    "K-Camp, Kuwait Camp, has been part of children’s summers in Kuwait for a generation, marking 25 years of activities, programmes and friendships.",
    "Parents now research, compare and register online, often on their phones and often at the last minute. The camp needed a digital presence that matched the warmth families already knew, while making age groups, programmes and registration straightforward to navigate.",
    "CRACKWITS designed and built a new website for K-Camp, organised around the questions parents ask, led by real camp photography and anchored by a registration path that stays one tap away throughout the experience.",
  ],
  services: ["UX/UI", "Web Development", "Content Production", "Social Media"],
  stats: [
    { value: null, label: "Online Registrations" },
    { value: null, label: "Returning Families" },
    { value: null, label: "Mobile Traffic Share" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "K·Camp",
      typeface: "Bricolage Grotesque",
      palette: [
        { name: "Coral Red", hex: "#E8463A" },
        { name: "Camp Orange", hex: "#F7941D" },
        { name: "Sky Blue", hex: "#58B7E6" },
        { name: "Leaf Green", hex: "#6CBF4B" },
        { name: "Lavender", hex: "#8C7BD6" },
      ],
      line: "25 summers of good times.",
      pattern: "dots",
      voice: ["Warm", "Energetic", "Trusted", "Fun"],
    },
    images: ["/case-studies/kcamp/duo.webp", "/case-studies/kcamp/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Leading With Faces", "Instead of Features"],
      body: [
        "For a summer camp, the strongest argument is the children themselves. The homepage opens on a full-bleed group photo in the camp’s signature orange, with the name set large and simple — Kuwait Camp — so parents feel the atmosphere before reading a single line about programmes.",
      ],
      media: [
        { kind: "image", src: "/work/kcamp.webp", alt: "K-Camp website shown on a laptop" },
        {
          kind: "image",
          src: "/case-studies/kcamp/lead.webp",
          alt: "Children in orange t-shirts doing a craft project with a counsellor",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Making Registration", "The Easiest Step"],
      body: [
        "Navigation follows a parent’s decision process: about the camp, age groups, the KIT programme, activities, team and gallery. Each page answers one question clearly and points back to the same place.",
        "A persistent Register Now button, set in the brand’s lavender, sits in the header across every page and screen size, turning interest into sign-ups without making families hunt for the form.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/kcamp/cover.webp",
          url: "kcamp.com.kw",
          nav: ["Age Groups", "Programs", "Activities", "Gallery"],
          headline: "Kuwait Camp",
          cta: "Register Now",
          alt: "K-Camp website hero with children running outdoors",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Sharing the Summer", "One Day at a Time"],
      body: [
        "Parents want to see what their children are doing; children want to see themselves. Daily content captures small wins — a finished project, a painted face, a team cheer — and turns them into posts families look forward to.",
        "A consistent multicolour palette and loose, hand-drawn energy keep the feed playful while remaining recognisably K-Camp.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/kcamp/duo.webp",
          handle: "@kcampkw",
          caption: "Built it, painted it, launching it tomorrow.",
          alt: "Boy in an orange t-shirt holding up a handmade paper rocket",
          ai: true,
        },
        { kind: "poster", line: "25 summers of good times.", alt: "K-Camp brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Celebrating 25 Years", "Without Growing Up"],
      body: [
        "The 25-year milestone was integrated into the wordmark lock-up, adding a sense of heritage and trust without losing the camp’s playful character.",
        "The same palette of coral, orange, sky blue, green and lavender carries through to camp kits and merchandise, so the brand children wear every day matches the one their parents discovered online.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/kcamp/feature.webp",
          alt: "Camp welcome kit with orange t-shirt, drawstring bag, bottle, cap and lanyard",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "K-Camp now has a digital home as welcoming as the camp itself — one that lets parents understand the offer quickly, register with confidence and stay connected to their children’s summer, while honouring 25 years of history.",
  more: ["kidzania", "sunrise-waterpark"],
  draft: true,
  review: [
    "Thumbnail shows the K-Camp website (logo 'K·Camp 25 years', hero 'KUWAIT CAMP', nav About / Age Groups / KIT Program / Activities / Team / Gallery / Contact, lavender 'Register Now' button) — assumed CRACKWITS designed and built the site; confirm.",
    "Assumed 'KCAMP' = Kuwait Camp, a children's summer camp with a 25-year history (from the logo) — confirm name/history wording.",
    "Social content, content production and merch/camp kit scope are assumptions.",
    "Assumed CRACKWITS integrated the 25-years mark into the logo lock-up — confirm who designed the logo.",
    "Domain 'kcamp.com.kw', handle '@kcampkw', nav labels (shortened) and line '25 summers of good times.' are placeholders.",
    "Palette sampled from the logo (coral, orange, blue, green) and the lavender CTA; typeface 'Bricolage Grotesque' is a stand-in.",
    "Stat labels are suggestions; values intentionally empty.",
    "All four case-study images are AI-generated placeholders (children shown are AI-generated, not camp attendees).",
  ],
};

export default kcamp;
