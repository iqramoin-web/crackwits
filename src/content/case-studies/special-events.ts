import type { CaseStudy } from "../types";

const specialEvents: CaseStudy = {
  slug: "special-events",
  name: "SPECIAL EVENTS",
  category: "ENTERTAINMENT",
  thumbnail: "/work/special-events.webp",
  subtitle: "A precise, quietly confident identity for an event production house.",
  cover: {
    src: "/case-studies/special-events/cover.webp",
    alt: "Gala dining hall set with navy tables under violet stage light",
    ai: true,
  },
  overview: [
    "Special Events is a Kuwait-based event company delivering productions for corporate, institutional and private clients.",
    "Event businesses are judged on their ability to control every detail, yet many present themselves with the same generic glamour. Special Events needed an identity that communicated precision and creativity in equal measure — one that could sit on a business card as comfortably as on a stage.",
    "CRACKWITS shaped a restrained brand system around a single violet triangle, a deep ink palette and a clean geometric wordmark, then extended it across stationery, event collateral, digital presence and social content.",
  ],
  services: ["Brand Position", "Brand Identity", "Web Development", "Social Media"],
  stats: [
    { value: null, label: "Events Delivered" },
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
      line: "Innovate every moment.",
      pattern: "grid",
      voice: ["Precise", "Assured", "Inventive", "Discreet"],
    },
    images: ["/case-studies/special-events/duo.webp", "/case-studies/special-events/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Reducing a Spectacle", "To a Single Mark"],
      body: [
        "Rather than borrowing the visual noise of the events it produces, the identity takes a step back. A bold violet triangle — part stage, part spotlight, part forward arrow — stands alone on a field of deep ink, with a widely spaced wordmark that signals calm control behind the scenes.",
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
      title: ["Presenting Production", "As a Discipline"],
      body: [
        "The website was structured to show clients how an event comes together — capabilities, process and past productions — rather than relying on atmosphere alone.",
        "Dark, cinematic imagery frames each project, with the violet accent reserved for calls to action, keeping the experience as considered as the events themselves.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/special-events/cover.webp",
          url: "havespecialevents.com",
          nav: ["Services", "Projects", "About", "Contact"],
          headline: "Every Detail, Produced",
          cta: "Plan an Event",
          alt: "Special Events website hero over a gala dining setup",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Capturing the Room", "Not Just the Stage"],
      body: [
        "Events live on in the people who attended them. Social content focuses on guests and atmosphere — the laugh across a table, the moment the lights change — giving prospective clients a sense of how a Special Events night feels.",
        "A consistent ink-and-violet treatment ties posts from very different productions back to one recognisable brand.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/special-events/duo.webp",
          handle: "@havespecialevents",
          caption: "The best part of the night is always the room.",
          alt: "Guest laughing at an evening event under violet light",
          ai: true,
        },
        { kind: "poster", line: "Innovate every moment.", alt: "Special Events brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Setting the Tone", "Before Guests Arrive"],
      body: [
        "The first touchpoint of any event is often printed. Invitations, passes and stationery carry the triangle and ink palette with tactile finishes, setting expectations long before doors open.",
        "Paired with uncoated whites and warm kraft, the system feels premium without being ornate — flexible enough to sit behind any client’s own branding when the event demands it.",
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
    "Special Events now presents itself with the same control it brings to every production — a clear, restrained identity that builds trust with clients, adapts across print and digital, and leaves room for each event to shine.",
  more: ["mainstage-signature", "quest"],
  draft: true,
  review: [
    "Thumbnail shows business cards (navy card with violet triangle mark, white card with 'SPECIAL' wordmark and 'INNOVATE ·…' tagline, address in Ardiya, Kuwait, havespecialevents.com, @havespecialevents) — assumed CRACKWITS designed the identity and stationery; confirm.",
    "Assumed Special Events is an event production/management company (name + industrial-area address); confirm what the business actually does.",
    "Website (havespecialevents.com, taken from the card) and social content scope are assumptions — confirm CRACKWITS built the site / ran social.",
    "Nav, headline 'Every Detail, Produced', CTA 'Plan an Event' are placeholders.",
    "Brand line 'Innovate every moment.' extrapolated from the partially visible tagline 'INNOVATE ·…' — replace with the real tagline.",
    "Invitations/event passes collateral are assumed applications.",
    "Palette sampled from the thumbnail; typeface 'Montserrat' approximates the geometric wordmark.",
    "Stat labels are suggestions; values intentionally empty.",
    "All four case-study images are AI-generated placeholders.",
  ],
};

export default specialEvents;
