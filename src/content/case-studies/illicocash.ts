import type { CaseStudy } from "../types";

const illicocash: CaseStudy = {
  slug: "illicocash",
  name: "ILLICOCASH",
  category: "FINANCE",
  thumbnail: "/work/illicocash.webp",
  subtitle: "Putting everyday money movement in the palm of every hand.",
  cover: {
    src: "/case-studies/illicocash/cover.webp",
    alt: "ILLICOCASH campaign hero — friends sharing a moment on a sunlit Kinshasa street, phones in hand",
    ai: true,
  },
  overview: [
    "ILLICOCASH is a mobile-money service connected to the RAWBANK ecosystem in the Democratic Republic of Congo, built for a market where the phone is often the first and most-used financial tool.",
    "Sending money, buying airtime, paying for TV or withdrawing cash all had to feel immediate and familiar — for first-time users and seasoned customers alike, across a broad mix of devices and connectivity.",
    "CRACKWITS shaped the app experience and the communication around it: a clear, icon-led interface, a confident visual language and campaigns that speak to people in their own everyday moments.",
  ],
  services: ["UX/UI", "App Development", "Creative Direction", "Social Media", "Digital Marketing"],
  stats: [
    { value: null, label: "App Downloads" },
    { value: null, label: "Monthly Active Wallets" },
    { value: null, label: "Monthly Impressions" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "illicocash",
      typeface: "Outfit",
      palette: [
        { name: "Night Graphite", hex: "#1C1D1F" },
        { name: "Illico Yellow", hex: "#FFC629" },
        { name: "Lagoon Teal", hex: "#3DB9C8" },
        { name: "Coral Signal", hex: "#F0645A" },
        { name: "Paper White", hex: "#F6F4EF" },
      ],
      line: "Your money, right away.",
      pattern: "dots",
      voice: ["Immediate", "Warm", "Clear", "Everyday"],
    },
    images: ["/case-studies/illicocash/duo.webp", "/case-studies/illicocash/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Designing a Wallet", "That Speaks Everyone’s Language"],
      body: [
        "The home screen was built as a single, scannable grid: send money, international transfer, withdrawal, airtime, TV renewal, virtual cards and top-ups each get a dedicated tile and a bespoke duotone icon. A dark interface keeps the yellow and teal accents legible in bright daylight, while a rotating banner gives the brand room to talk about offers without crowding the tools people came for.",
      ],
      media: [
        { kind: "image", src: "/work/illicocash.webp", alt: "ILLICOCASH app home screen with service tiles and promotional banner" },
        {
          kind: "image",
          src: "/case-studies/illicocash/lead.webp",
          alt: "A shopkeeper in a vibrant Kinshasa market stall checking a payment on her phone",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["A Front Door", "for Mobile Money"],
      body: [
        "Beyond the app, ILLICOCASH needed a place where new users could understand what the wallet does, how to open one and where to find an agent nearby — before they ever download anything.",
        "The site mirrors the app’s structure, so every service introduced online maps directly to a tile in the wallet. Clear steps, plain French and a persistent download prompt keep the path from curiosity to first transaction short.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/illicocash/cover.webp",
          url: "illicocash.cd",
          nav: ["Services", "Agents", "Tarifs", "Aide"],
          headline: "Votre argent, tout de suite.",
          cta: "Télécharger l’app",
          alt: "ILLICOCASH website mockup with campaign hero image",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Campaigns Built", "Around Real Moments"],
      body: [
        "Communication focuses on the small, specific moments where mobile money matters: settling up with a friend, sending support to family, topping up airtime before a call. The people come first and the product follows.",
        "Saturated yellow backdrops and natural, unposed photography give every post a recognisable signature in the feed, while offer-led messages — such as fee-free wallet-to-wallet transfers — stay short enough to read at a glance.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/illicocash/duo.webp",
          handle: "@illicocash",
          caption: "Envoyer, recevoir, recharger. Tout se passe ici.",
          alt: "ILLICOCASH social post showing a young woman smiling at her phone against a yellow wall",
          ai: true,
        },
        { kind: "poster", line: "Your money, right away.", alt: "ILLICOCASH brand poster in yellow and graphite" },
      ],
    },
    {
      layout: "feature",
      title: ["Carrying the Wallet", "Into the Street"],
      body: [
        "Mobile money lives offline too — at agent kiosks, shop counters and market stalls where people cash in and cash out. The identity had to work as confidently on a painted storefront as it does on a screen.",
        "The yellow-and-graphite system scales from app icon to agent signage and point-of-sale material, giving customers a consistent cue that ILLICOCASH is available, trusted and close by.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/illicocash/feature.webp",
          alt: "A yellow-painted mobile-money agent kiosk on a lively street at golden hour",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "ILLICOCASH now has a coherent product and communication language that makes everyday transactions feel simple and familiar — giving the service a clear, recognisable presence on phones, in feeds and on the street, and a foundation that can grow as new financial services are added.",
  more: ["rawbank", "twig"],
  draft: true,
  review: [
    "Relationship to RAWBANK described lightly as 'connected to the RAWBANK ecosystem' (the app UI shows an 'Appro Rawbank' tile) — confirm the correct ownership/partnership wording.",
    "Assumed CRACKWITS delivered the app UX/UI (thumbnail shows the app home screen) — confirm whether CRACKWITS also handled app development, or design only.",
    "Assumed CRACKWITS delivered social media and campaign creative (thumbnail banner shows '0% de frais' campaign) — confirm scope.",
    "Website section is assumed; no website evidence in the thumbnail. Domain 'illicocash.cd' and nav items are placeholders — confirm or replace with an image section.",
    "Agent/kiosk signage section assumes CRACKWITS touched offline identity applications — confirm or remove.",
    "Market assumed to be the DRC, French-language UI and communication (per thumbnail).",
    "'Fee-free wallet-to-wallet transfers' referenced from the thumbnail banner ('0% de frais … illicocash à illicocash') — confirm the offer is still current/appropriate to mention.",
    "Services listed from the thumbnail tiles (send, international transfer, withdrawal, airtime, TV renewal, virtual cards, top-ups) — confirm.",
    "Palette sampled from the thumbnail (graphite UI, yellow, teal, coral accents); hex values approximate. Typeface 'Outfit' chosen as a stand-in — confirm the actual brand typeface.",
    "Brand line 'Your money, right away.' / 'Votre argent, tout de suite.' is invented — replace with the official tagline if one exists.",
    "Social handle '@illicocash' assumed.",
  ],
};

export default illicocash;
