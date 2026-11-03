import type { CaseStudy } from "../types";

const specialEvents: CaseStudy = {
  slug: "special-events",
  name: "SPECIAL EVENTS",
  category: "ENTERTAINMENT",
  thumbnail: "/work/special-events.webp",
  subtitle: "A fresher identity, website and voice for an agency that runs events end to end.",
  cover: {
    src: "/case-studies/special-events/cover.webp",
    alt: "Gala dining hall set with navy tables under violet stage light",
    ai: true,
  },
  overview: [
    "Special Events is a full-service events agency that takes an occasion from first idea to final execution, shaping the experience guests move through along the way.",
    "The agency works methodically, bringing everyone around the table to assess a project before delivering it with total ownership. Its brand, however, had fallen behind that standard, and it needed a sharper look, a proper online home for its portfolio and a consistent presence on social.",
    "CRACKWITS led the brand revamp, designed and developed the website, managed the social media channels and produced a brand film — bringing every touchpoint into one cohesive experience.",
  ],
  services: ["Brand Revamp", "UX/UI", "Web Development", "Social Media", "Brand Film"],
  stats: [
    { value: null, label: "Projects Showcased" },
    { value: null, label: "Inbound Enquiries" },
    { value: null, label: "Social Reach" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "SPECIAL",
      typeface: "Montserrat",
      palette: [
        { name: "Ink Navy", hex: "#121826" },
        { name: "Signal Violet", hex: "#7A3FD1" },
        { name: "Paper White", hex: "#FFFFFF" },
        { name: "Felt Grey", hex: "#A6A8AB" },
        { name: "Kraft", hex: "#D8C3A0" },
      ],
      line: "Innovate. Engage. Exhilarate.",
      pattern: "grid",
      voice: ["Innovative", "Engaging", "Exhilarating", "Accountable"],
    },
    images: ["/case-studies/special-events/duo.webp", "/case-studies/special-events/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Refreshing the Brand", "Without Losing Its Spark"],
      body: [
        "The brief was to refresh, not reinvent. CRACKWITS reworked the full set of brand assets — logo, colours, typefaces, stationery, collateral and supporting graphics — and presented the client with several directions to choose from. The result keeps the energy people already associated with Special Events, set in a cleaner, more confident system built around a violet mark on deep ink.",
      ],
      media: [
        { kind: "image", src: "/work/special-events.webp", alt: "Special Events business cards in navy and white" },
        {
          kind: "image",
          src: "/case-studies/special-events/lead.webp",
          alt: "Production crew rigging violet stage lights in an event hall",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Putting the Portfolio", "Front and Centre"],
      body: [
        "The website was designed as an informative hub that builds awareness and gives prospective clients an easy way to get in touch.",
        "Its interface draws directly on the refreshed identity, while the structure puts past projects at the heart of the experience — letting the agency’s track record do the convincing and strengthening its credibility in the market.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/special-events/cover.webp",
          url: "havespecialevents.com",
          nav: ["About", "Services", "Projects", "Contact"],
          headline: "Innovate. Engage. Exhilarate.",
          cta: "Start a Project",
          alt: "Special Events website hero over a gala dining setup",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Bringing the Brand", "to the Social Feed"],
      body: [
        "CRACKWITS launched Special Events on social media with a strategy built to grow awareness, gather a community and turn followers into leads. Content pairs clear, useful information with dynamic design, and the team managed daily posting across every platform.",
        "Alongside the feed, a brand film shows how the agency approaches its work — capturing the creativity and care behind each experience in a way still images cannot.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/special-events/duo.webp",
          handle: "@havespecialevents",
          caption: "Tailor-made, from the first idea to the last guest out.",
          alt: "Guest laughing at an evening event under violet light",
          ai: true,
        },
        { kind: "poster", line: "Innovate. Engage. Exhilarate.", alt: "Special Events brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Carrying the Refresh", "Into Every Detail"],
      body: [
        "A revamp only works if it reaches every touchpoint. The refreshed system was rolled out across stationery and event collateral, so cards, invitations and passes speak with the same voice as the website and the feed.",
        "Deep ink, crisp white and a single violet accent keep each piece recognisably Special Events, while staying simple enough to sit alongside a client’s own branding on the day.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/special-events/feature.webp",
          alt: "Navy invitations, event passes and violet wax seal on kraft paper",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "Special Events now shows up as consistently as it delivers — a refreshed identity, a portfolio-led website, an active social presence and a brand film that together give clients a clear reason to trust the agency with their next occasion.",
  more: ["mainstage-signature", "quest"],
  draft: true,
  review: [
    "From crackwits.com case study: full-service events agency (ideation to execution); scope = brand revamp (logo, colours, fonts, collateral, stationery, graphics, multiple variations), website design and development, social media launch and daily management, brand ('expression') film.",
    "From crackwits.com case study: punchline 'Innovate. Engage. Exhilarate.' and the 'handled with ownership, tailor-made' positioning.",
    "Market (Kuwait) and domain havespecialevents.com / handle @havespecialevents taken from the business-card thumbnail, not the reference — confirm.",
    "Website nav, CTA 'Start a Project' and social caption are placeholders.",
    "Invitations and event passes in section 4 are illustrative applications of the stationery/collateral work.",
    "Palette sampled from the thumbnail; Montserrat approximates the wordmark.",
    "Stat labels are suggestions; values intentionally empty.",
    "All four case-study images are AI-generated placeholders; no still from the brand film is shown.",
  ],
};

export default specialEvents;
