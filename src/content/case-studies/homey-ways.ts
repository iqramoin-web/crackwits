import type { CaseStudy } from "../types";

const homeyWays: CaseStudy = {
  slug: "homey-ways",
  name: "HOMEY WAYS",
  category: "HOME SERVICES",
  thumbnail: "/work/homey-ways.webp",
  subtitle: "A spotless home, booked in a few friendly taps.",
  cover: {
    src: "/case-studies/homey-ways/cover.webp",
    alt: "HOMEY WAYS campaign hero — a freshly cleaned, sunlit living room",
    ai: true,
  },
  overview: [
    "HOMEY WAYS is a home-services platform that lets households book cleaning and specialised care for their homes on demand.",
    "Inviting someone into your home requires trust. The service needed a booking experience that felt personal and effortless, and a brand warm enough to sit comfortably in people’s private spaces.",
    "CRACKWITS designed the app experience and a cheerful visual language around it — clear service categories, a bespoke illustration system and communication that celebrates the feeling of coming home to a clean space.",
  ],
  services: ["Brand Identity", "UX/UI", "App Development", "Social Media", "Content Production"],
  stats: [
    { value: null, label: "App Downloads" },
    { value: null, label: "Monthly Bookings" },
    { value: null, label: "Repeat Booking Rate" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "homey ways",
      typeface: "Bricolage Grotesque",
      palette: [
        { name: "Home Navy", hex: "#1C1E86" },
        { name: "Fresh Blue", hex: "#2E8BE0" },
        { name: "Sunshine", hex: "#F2C417" },
        { name: "Leaf", hex: "#3DAA52" },
        { name: "Lilac", hex: "#A98BEB" },
      ],
      line: "Impeccable, every time.",
      pattern: "stripes",
      voice: ["Friendly", "Tidy", "Trustworthy", "Bright"],
    },
    images: ["/case-studies/homey-ways/duo.webp", "/case-studies/homey-ways/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["A Personal Greeting", "Before Every Booking"],
      body: [
        "The app opens by name — “Hello Leila! What can we help you with?” — turning a service menu into a conversation. Below, each category from general cleaning to specialised services gets its own illustrated tile in a distinct colour, so the right option is recognisable at a glance, while a rotating banner sets the promise: impeccable, neat and spotless, every time.",
      ],
      media: [
        { kind: "image", src: "/work/homey-ways.webp", alt: "HOMEY WAYS app home screen with illustrated service categories" },
        {
          kind: "image",
          src: "/case-studies/homey-ways/lead.webp",
          alt: "A bright, freshly tidied kitchen with morning light on clean surfaces",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Turning Household Chores", "Into a Simple Choice"],
      body: [
        "Most people know what they need — a deep clean, a move-out, help with a specific room — but not how to ask for it. The website translates that into a short sequence: pick a service, choose a time, confirm.",
        "Service pages reuse the app’s illustrated categories and colour coding, so every route online leads to the same familiar booking flow and a single, clear call to action.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/homey-ways/cover.webp",
          url: "homeyways.com",
          nav: ["Services", "How It Works", "Pricing", "Contact"],
          headline: "Come home to spotless.",
          cta: "Book a Clean",
          alt: "HOMEY WAYS website mockup with sunlit living room hero",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Selling the Feeling", "of a Fresh Home"],
      body: [
        "Rather than showing mops and buckets, communication focuses on the result: the first coffee in a calm, tidy kitchen, crisp linen, a living room ready for guests. The service is the enabler; the feeling is the story.",
        "Bright primary accents from the illustration system punctuate soft, airy photography, giving the feed a cheerful, ordered rhythm that echoes the brand’s promise of care and precision.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/homey-ways/duo.webp",
          handle: "@homeyways",
          caption: "Fresh sheets. Clear mind. Leave the rest to us.",
          alt: "HOMEY WAYS social post showing a woman relaxing on a freshly made bed",
          ai: true,
        },
        { kind: "poster", line: "Impeccable, every time.", alt: "HOMEY WAYS brand poster in navy, blue and sunshine yellow" },
      ],
    },
    {
      layout: "feature",
      title: ["A Uniform of Trust", "at Every Doorstep"],
      body: [
        "The service is delivered in person, so the brand has to arrive with the team. Uniforms, supply kits and vehicles carry the navy-and-blue identity with bright accent colours drawn from the app.",
        "Seeing the same colours on the doorstep as on the booking screen gives customers immediate reassurance that the right people have arrived — and makes every visit a consistent brand moment.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/homey-ways/feature.webp",
          alt: "Navy and blue cleaning supply kit and folded uniform arranged on a light surface",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "HOMEY WAYS now has a booking experience and brand that make home care feel personal, organised and trustworthy — from the first greeting in the app to the team at the door — with an illustration-led system that can expand as new services are added.",
  more: ["965smile", "burj-al-tojjar"],
  draft: true,
  review: [
    "Assumed CRACKWITS delivered the app UX/UI and illustration system (thumbnail shows the app home screen) — confirm scope, including app development and brand identity.",
    "Market not stated; assumed a Gulf market (Kuwait/UAE) — no location claims made in copy. Confirm.",
    "Website section assumed — no website evidence in the thumbnail. Domain 'homeyways.com' and nav items are placeholders.",
    "Section 4 (uniforms, supply kits, vehicles) is assumed — confirm or replace.",
    "Service categories referenced only as 'general cleaning' and 'specialised services' (visible in thumbnail); others are implied — confirm full list.",
    "Palette sampled from the logo and illustrations (navy, blue, yellow, green, lilac); hex values approximate. Typeface 'Bricolage Grotesque' is a stand-in — confirm.",
    "Brand line 'Impeccable, every time.' adapted from the app banner 'Impeccable, neat and spotless… every time!'. Web headline is invented.",
    "Social handle '@homeyways' assumed.",
  ],
};

export default homeyWays;
