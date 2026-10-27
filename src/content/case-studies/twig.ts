import type { CaseStudy } from "../types";

const twig: CaseStudy = {
  slug: "twig",
  name: "TWIG",
  category: "FINANCE",
  thumbnail: "/work/twig.webp",
  subtitle: "Making saving a small, steady habit that grows on its own.",
  cover: {
    src: "/case-studies/twig/cover.webp",
    alt: "TWIG campaign hero — morning light over a calm, modern Dubai apartment",
    ai: true,
  },
  overview: [
    "TWIG is a savings app for the UAE that turns putting money aside into something automatic — rounding up everyday spending and moving small amounts into dedicated plans.",
    "Savings products tend to feel either intimidating or forgettable. TWIG needed an experience calm enough to trust with money, yet light enough that people would come back to it every week.",
    "CRACKWITS designed the product experience and the brand language around it: a clear, airy interface built on simple rules, and communication that frames saving as a quiet daily ritual rather than a sacrifice.",
  ],
  services: ["Brand Identity", "UX/UI", "App Development", "Social Media", "Digital Marketing"],
  stats: [
    { value: null, label: "App Downloads" },
    { value: null, label: "Active Saving Plans" },
    { value: null, label: "Monthly Impressions" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "twig",
      typeface: "Montserrat",
      palette: [
        { name: "Deep Indigo", hex: "#3A2DB0" },
        { name: "Midnight", hex: "#14143A" },
        { name: "Growth Aqua", hex: "#4DD4DC" },
        { name: "Sky Glass", hex: "#BFE3F2" },
        { name: "Cloud", hex: "#F4F5F8" },
      ],
      line: "Small steps. Steady growth.",
      pattern: "grid",
      voice: ["Calm", "Smart", "Encouraging", "Light"],
    },
    images: ["/case-studies/twig/duo.webp", "/case-studies/twig/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Turning Small Change", "Into a Saving Rhythm"],
      body: [
        "The savings dashboard puts progress first: one balance, a weekly bar chart in growth aqua, and two clear actions — deposit and withdraw — with deposit given the weight of the brand indigo. Below, each saving plan reads like a simple rule in plain language, such as rounding purchases up to the nearest AED 5 or sweeping anything above a set balance, so users always understand what the app is doing with their money.",
      ],
      media: [
        { kind: "image", src: "/work/twig.webp", alt: "TWIG app savings dashboard with weekly chart and saving plans" },
        {
          kind: "image",
          src: "/case-studies/twig/lead.webp",
          alt: "A young professional checking her phone over coffee on a sunlit balcony",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Explaining Automatic Saving", "in a Single Scroll"],
      body: [
        "Automatic saving is easy to use but harder to explain. The website had to make the idea of rules-based plans tangible within seconds, then lead naturally to download.",
        "Each plan is introduced as a short, visual scenario — a coffee rounded up, a payday sweep — with the same cards and colour cues used in the app, so the transition from site to product feels seamless.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/twig/cover.webp",
          url: "twig.ae",
          nav: ["How It Works", "Plans", "Security", "FAQ"],
          headline: "Save without thinking about it.",
          cta: "Get the App",
          alt: "TWIG website mockup with calm interior hero image",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Celebrating the Quiet", "Wins of Everyday Saving"],
      body: [
        "Social content treats saving as a series of small, satisfying moments rather than distant financial goals: the coffee that funded a weekend away, the routine that built a cushion without anyone noticing.",
        "A restrained palette of indigo, aqua and soft glass-blue keeps the feed calm and recognisable, while light, friendly copy positions TWIG as an encouraging companion rather than a lecturing bank.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/twig/duo.webp",
          handle: "@twig.ae",
          caption: "Your coffee just rounded up to a weekend away.",
          alt: "TWIG social post showing a relaxed young man in a sunlit café",
          ai: true,
        },
        { kind: "poster", line: "Small steps. Steady growth.", alt: "TWIG brand poster in indigo and aqua" },
      ],
    },
    {
      layout: "feature",
      title: ["A Brand Built on", "Clarity and Light"],
      body: [
        "The identity borrows from the product itself: frosted glass, clean grids and generous white space that signal transparency in a category often clouded by fine print.",
        "Carried across onboarding cards, welcome packs and out-of-home placements, the system keeps a consistent tone — clear numbers, soft light and a single confident indigo accent wherever the user is asked to act.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/twig/feature.webp",
          alt: "Frosted glass and indigo welcome-pack cards arranged on a pale blue surface",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "TWIG now has a product and brand that make saving feel effortless and reassuring — a clear, rules-based experience people can trust with their money, and a calm visual language that can stretch to new plans and features as the app grows.",
  more: ["illicocash", "buildoser"],
  draft: true,
  review: [
    "Assumed TWIG is a UAE savings app (thumbnail shows AED amounts) — confirm market and whether it is a standalone app or part of a bank.",
    "Assumed CRACKWITS delivered brand identity, UX/UI and app development — confirm scope (thumbnail only shows the app savings screen).",
    "Saving plan descriptions ('The Roundup' — round up to nearest AED 5; 'The Routine' — save amounts over a balance threshold) are interpreted from the thumbnail — confirm wording.",
    "Website section is assumed; no website evidence in the thumbnail. Domain 'twig.ae' and nav items are placeholders.",
    "Social media and digital marketing scope assumed — confirm.",
    "Welcome packs / OOH applications in section 4 are assumed — confirm or replace.",
    "Palette sampled from the thumbnail (indigo CTA, aqua chart bars, glass-blue backdrop); hex values approximate.",
    "Typeface 'Montserrat' chosen because the app UI appears set in a geometric sans similar to it — confirm.",
    "Brand line 'Small steps. Steady growth.' and website headline are invented.",
    "Social handle '@twig.ae' assumed.",
  ],
};

export default twig;
