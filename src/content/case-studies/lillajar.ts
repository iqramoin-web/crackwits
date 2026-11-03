import type { CaseStudy } from "../types";

const lillajar: CaseStudy = {
  slug: "lillajar",
  name: "LILLAJAR",
  category: "RETAIL",
  thumbnail: "/work/lillajar.webp",
  subtitle: "Relaunching Kuwait’s first event rental provider as a modern brand you can book online.",
  cover: {
    src: "/case-studies/lillajar/cover.webp",
    alt: "Elegantly furnished outdoor event lounge at dusk",
    ai: true,
  },
  overview: [
    "LILLAJAR is the relaunch of THE RENTAL COMPANY, Kuwait’s first premium event rental provider. It supplies furniture, décor, equipment and utilities for everything from exhibitions, conferences and iftars to weddings, ghabgas and baby showers, with thousands of items kept in over 2,000 square metres of warehouse space and a trained team that handles installation and dismantling.",
    "Entering the market under a new name, the business needed a fresher identity that matched the sophistication of its set-ups, plus a way for clients to browse and order without a round of calls, and a social presence that could build awareness from day one.",
    "CRACKWITS relaunched the brand end to end: a revamped identity with stationery and collaterals, vehicle branding, an e-commerce website, a social media strategy with daily management, and supervision of a new product shoot.",
  ],
  services: ["Strategy", "Brand Identity", "UX/UI", "Web Development", "Social Media", "Digital Media"],
  stats: [
    { value: null, label: "Online Rental Orders" },
    { value: null, label: "Social Leads" },
    { value: null, label: "Monthly Website Visits" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "lillajar",
      typeface: "Syne",
      palette: [
        { name: "Event Emerald", hex: "#009A57" },
        { name: "Graphite", hex: "#4A4A4C" },
        { name: "Natural Oak", hex: "#D8B98C" },
        { name: "Mist", hex: "#E2E7EC" },
        { name: "Gallery White", hex: "#FAFAF9" },
      ],
      line: "From simple to sophisticated.",
      pattern: "dots",
      voice: ["Sophisticated", "Minimal", "Glamorous", "Reliable"],
    },
    images: ["/case-studies/lillajar/duo.webp", "/case-studies/lillajar/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["A Fresh Identity", "for a Familiar Name"],
      body: [
        "Relaunching an established rental business meant giving it a look as polished as the events it furnishes. We revamped every brand asset, from the logo, colours and fonts to the stationery, collaterals and supporting graphics, and presented the client with several directions before refining the final kit. A supervised product shoot then gave the new brand a consistent library of images, capturing the quality and character of each piece.",
      ],
      media: [
        { kind: "image", src: "/work/lillajar.webp", alt: "LILLAJAR furniture rental website homepage on a laptop" },
        {
          kind: "image",
          src: "/case-studies/lillajar/lead.webp",
          alt: "Rows of white modern chairs, oak stools and an emerald armchair in a bright studio",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Booking an Event Set-up", "in a Few Clicks"],
      body: [
        "LILLAJAR needed an online hub that could spread awareness and reach new clients. We designed and developed an e-commerce website where customers browse the collection and place an order directly, with a user experience that stays functional and an interface that draws on the new identity.",
        "The range is organised into furniture and utilities, with English and Arabic versions and prices in KWD, so planners can move from inspiration to a confirmed order quickly.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/lillajar/cover.webp",
          url: "lillajar.com",
          nav: ["Furniture", "Utilities", "About", "Contact"],
          headline: "Furniture rental provider.",
          cta: "Discover Items",
          alt: "LILLAJAR website mockup with outdoor event lounge hero",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Launching the Brand", "Into the Social Sphere"],
      body: [
        "Social media carried the relaunch: building awareness, growing a community and turning interest into leads and sales. We set the digital marketing strategy and content calendars, pairing informative posts with dynamic designs.",
        "We also managed daily posting across all platforms and handled the paid boosting, keeping LILLAJAR visible to the people planning their next event.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/lillajar/duo.webp",
          handle: "@lillajar",
          caption: "From intimate gatherings to grand celebrations, set the scene with LILLAJAR.",
          alt: "LILLAJAR social post showing a styled event table setting with white chairs",
          ai: true,
        },
        { kind: "poster", line: "From simple to sophisticated.", alt: "LILLAJAR brand poster in emerald and white" },
      ],
    },
    {
      layout: "feature",
      title: ["Taking the Brand", "on the Road"],
      body: [
        "For a rental company, the delivery vehicle is often the first thing a client sees on event day. We presented several vehicle-branding options drawn from the new brand assets, carrying the company’s details and headlines in both English and Arabic.",
        "Every delivery becomes a moving advertisement, and a reassuring signal to hosts that the LILLAJAR team has arrived.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/lillajar/feature.webp",
          alt: "Delivery van with emerald brand graphics being loaded with event furniture",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "LILLAJAR re-entered the market with a brand that matches the quality of its set-ups: a refreshed identity, branded vehicles, a library of new product photography, an online store where clients can order directly, and an active social presence built to generate leads.",
  more: ["special-events", "mainstage-signature"],
  draft: true,
  review: [
    "Business description (relaunch of THE RENTAL COMPANY, Kuwait’s first premium event rental provider, event types, 2,000+ sq m warehouse, installation and dismantling team) from crackwits.com case study.",
    "Scope (branding relaunch with logo, colours, fonts, stationery and collaterals; vehicle branding in English and Arabic; e-commerce website; social strategy, daily posting and boosting; product photography supervision) from crackwits.com case study.",
    "Brand line 'From simple to sophisticated.' and voice words paraphrase the crackwits.com punchline.",
    "Category left as RETAIL; the business is event rental — confirm.",
    "Domain 'lillajar.com' and handle '@lillajar' assumed; the reference gives no domain.",
    "Website details (Furniture/Utilities nav, En/Arabic, KWD, hero 'Furniture Rental Provider') read from the thumbnail.",
    "Palette sampled from the thumbnail; typeface 'Syne' is a stand-in for the logotype.",
    "Stat labels are suggestions; values intentionally empty.",
    "All case-study images except the thumbnail are AI-generated placeholders; feature.webp currently shows an unbranded van and should be regenerated.",
  ],
};

export default lillajar;
