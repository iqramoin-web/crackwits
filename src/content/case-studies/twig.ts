import type { CaseStudy } from "../types";

const twig: CaseStudy = {
  slug: "twig",
  name: "TWIG",
  category: "FINANCE",
  thumbnail: "/work/twig.webp",
  subtitle: "Launching a personal finance app into the UAE’s crowded fintech market.",
  cover: {
    src: "/case-studies/twig/cover.webp",
    alt: "TWIG campaign hero — morning light over a calm, modern Dubai apartment",
    ai: true,
  },
  overview: [
    "TWIG is a personal finance management app that helps people take charge of their money decisions and reach the goals they set for themselves.",
    "Combining automated saving, goal-setting, budget tracking and data-led insights, it aims to build healthier financial habits while opening up wider opportunities, securely and with little effort. As a new name in Dubai’s competitive fintech scene, it needed a launch that was both smart and strategic.",
    "CRACKWITS developed the big idea, crafted the logo and brand, set the communication strategy and delivered a transparent 360° digital experience — teaser and full website, social media, and app preview screens and video — to position TWIG as the partner of choice.",
  ],
  services: ["Brand Strategy", "Brand Identity", "UX/UI", "Web Development", "Social Media", "Digital Media"],
  stats: [
    { value: null, label: "Waitlist Sign-ups" },
    { value: null, label: "Monthly Impressions" },
    { value: null, label: "Preview Video Views" },
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
      line: "Take control of your finances.",
      pattern: "grid",
      voice: ["In Control", "Smart", "Transparent", "Encouraging"],
    },
    images: ["/case-studies/twig/duo.webp", "/case-studies/twig/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Showing a New App", "Before Anyone Has Used It"],
      body: [
        "A brand-new product has to explain itself quickly. CRACKWITS produced a set of app preview screenshots and a short video that walk through TWIG’s core features — saving plans, goals, budgets and insights — so the audience understands what the app does and why it matters before they ever download it. Each screen puts progress first, with clear numbers and plain-language rules people can trust with their money.",
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
      title: ["From Teaser Site", "to First Testers"],
      body: [
        "TWIG needed a public, informative platform ahead of launch. CRACKWITS designed and developed the website in two stages — a teaser followed by the full site.",
        "It introduces the app in a few concise sections and invites visitors to register their interest, giving early adopters the chance to be among the first to test TWIG.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/twig/cover.webp",
          url: "twig.ae",
          nav: ["How It Works", "Features", "Security", "FAQ"],
          headline: "Take control of your finances.",
          cta: "Register Interest",
          alt: "TWIG website mockup with calm interior hero image",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Growing a Community", "From Day One"],
      body: [
        "On social, the goal was to introduce TWIG, build a community around it and turn that attention into leads. CRACKWITS shaped a digital marketing strategy of clear, informative content and dynamic design, and managed daily posting across every platform.",
        "A restrained palette of indigo, aqua and soft glass-blue keeps the feed calm and recognisable, positioning TWIG as an encouraging companion rather than a lecturing bank.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/twig/duo.webp",
          handle: "@twig.ae",
          caption: "Small habits today, bigger goals tomorrow.",
          alt: "TWIG social post showing a relaxed young man in a sunlit café",
          ai: true,
        },
        { kind: "poster", line: "Take control of your finances.", alt: "TWIG brand poster in indigo and aqua" },
      ],
    },
    {
      layout: "feature",
      title: ["A Big Idea Built", "to Stand Out in Fintech"],
      body: [
        "To stand apart from similar brands in Dubai, CRACKWITS developed a creative strategic approach for TWIG and an identity with room to stay dynamic while remaining consistent.",
        "The brand was extended with tailor-made assets — including a custom iconography set and illustrations — that support the existing branding and keep every touchpoint, from app to website to feed, speaking with one clear voice.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/twig/feature.webp",
          alt: "Aqua envelope, indigo card and frosted glass panel arranged on a pale blue surface",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "TWIG entered the UAE market with a complete launch toolkit — a distinctive brand, a website that turns curiosity into early sign-ups, an active social presence and preview content that makes a new app easy to understand.",
  more: ["illicocash", "buildoser"],
  draft: true,
  review: [
    "From crackwits.com case study: personal finance management app (automated saving, goal-setting, budget tracking, insights) launching in the Dubai/UAE fintech market; domain twig.ae.",
    "From crackwits.com case study: scope = big idea, logo and branding, communication strategy, iconography and illustrations, teaser and full website with register-interest, social media strategy and daily management, app preview screenshots and short video.",
    "From crackwits.com case study: punchline 'Take control of your finances with TWIG!' — shortened on the board.",
    "App development is not in the reference scope and has been removed; the thumbnail app screen is shown as preview material.",
    "Website nav and social caption/handle '@twig.ae' are placeholders.",
    "Palette sampled from the thumbnail; Montserrat approximates the app UI typeface.",
    "Stat labels are suggestions; values intentionally empty.",
    "All four case-study images are AI-generated placeholders.",
  ],
};

export default twig;
