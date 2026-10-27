import type { CaseStudy } from "../types";

const smile965: CaseStudy = {
  slug: "965smile",
  name: "965SMILE",
  category: "HEALTHCARE",
  thumbnail: "/work/965smile.webp",
  subtitle: "A dental clinic that takes smiles seriously — and patients at ease.",
  cover: {
    src: "/case-studies/965smile/cover.webp",
    alt: "965SMILE clinic interior — a bright, calm treatment space in teal and warm white",
    ai: true,
  },
  overview: [
    "965SMILE is a cosmetic and general dental clinic in Kuwait City, built around a simple ambition carried in its name: to make Kuwait smile.",
    "Dentistry is a category where anxiety often outweighs aspiration. The clinic needed a presence that felt expert and reassuring at once — and that made booking a visit as easy as possible, in English and Arabic.",
    "CRACKWITS shaped a warm, confident brand language and a bilingual website that leads with people rather than procedures, bringing the clinic’s doctors and their personality to the front.",
  ],
  services: ["Brand Identity", "UX/UI", "Web Development", "Content Production", "Social Media"],
  stats: [
    { value: null, label: "Online Bookings" },
    { value: null, label: "Monthly Website Visits" },
    { value: null, label: "Social Engagement Rate" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "965smile",
      typeface: "Manrope",
      palette: [
        { name: "Clinic Teal", hex: "#0E8A8F" },
        { name: "Ink", hex: "#1A1A1A" },
        { name: "Smile Amber", hex: "#F5B14C" },
        { name: "Mist Grey", hex: "#E4E8E8" },
        { name: "Warm White", hex: "#F7F5F1" },
      ],
      line: "Serious about smiles.",
      pattern: "arcs",
      voice: ["Reassuring", "Warm", "Expert", "Human"],
    },
    images: ["/case-studies/965smile/duo.webp", "/case-studies/965smile/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Leading With People,", "Not Procedures"],
      body: [
        "The homepage opens with a doctor, not a drill. A candid portrait in a soft rounded frame sits beside a direct, slightly playful promise — “We are serious about smiles” — with the key word set in clinic teal. Warm amber is reserved for booking actions, so the next step is always obvious, while a slim utility bar keeps the phone number, address and Arabic toggle within reach.",
      ],
      media: [
        { kind: "image", src: "/work/965smile.webp", alt: "965SMILE website homepage on a desktop display" },
        {
          kind: "image",
          src: "/case-studies/965smile/lead.webp",
          alt: "A bright reception area with curved teal seating and soft daylight",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Booking a Visit", "in a Few Calm Steps"],
      body: [
        "For most patients, the website is the first conversation with the clinic. The structure follows the questions people actually ask: what treatments are available, who will see me, and how soon can I come in.",
        "Specialities, team profiles and FAQs each live one click from the main navigation, and every page closes on the same amber booking prompt — fully mirrored for Arabic readers so the experience feels native in both languages.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/965smile/cover.webp",
          url: "965smile.com",
          nav: ["Specialities", "Our Team", "About", "FAQ"],
          headline: "We are serious about smiles.",
          cta: "Book Now",
          alt: "965SMILE website mockup with clinic interior hero",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Making Dental Care", "Feel Approachable"],
      body: [
        "Social content softens the clinic experience: behind-the-scenes moments with the team, simple care tips and real smiles in natural light, rather than clinical close-ups that put people on edge.",
        "The teal-and-amber palette and rounded shapes carry across every post, giving the feed a friendly, consistent rhythm that mirrors the tone patients meet in the chair.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/965smile/duo.webp",
          handle: "@965smile",
          caption: "Comfort first. Confidence follows.",
          alt: "965SMILE social post showing a woman laughing in warm natural light",
          ai: true,
        },
        { kind: "poster", line: "Serious about smiles.", alt: "965SMILE brand poster in teal and amber" },
      ],
    },
    {
      layout: "feature",
      title: ["Carrying the Smile", "Through the Clinic"],
      body: [
        "The identity extends from screen to space — appointment cards, aftercare kits and wayfinding that share the same rounded forms and restrained palette.",
        "Every touchpoint is designed to lower the temperature of a dental visit: clear information, generous white space and small moments of warmth that remind patients they are in caring hands.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/965smile/feature.webp",
          alt: "Teal and amber aftercare kit and appointment cards arranged on a white surface",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "965SMILE now presents itself the way it treats patients — expert, personal and at ease. The bilingual website and consistent brand language give the clinic a clear, welcoming front door, and a system that can grow with new specialists and services.",
  more: ["homey-ways", "ovo"],
  draft: true,
  review: [
    "Assumed 965SMILE is a cosmetic/general dental clinic in Kuwait City (thumbnail shows 'Cosmetic Dentistry', a Kuwait City address and the line 'An initiative to make Kuwait smile') — confirm.",
    "Assumed CRACKWITS delivered the website (UX/UI and development) — thumbnail shows the site. Confirm whether brand identity, social media and content production were also in scope.",
    "Bilingual (English/Arabic) website assumed from the Arabic toggle in the thumbnail.",
    "Domain '965smile.com' assumed — confirm.",
    "Section 4 (appointment cards, aftercare kits, wayfinding) assumes offline identity applications — confirm or replace.",
    "Palette sampled from the thumbnail (teal headline accent, amber CTAs); hex values approximate. Typeface 'Manrope' is a stand-in for the site's rounded geometric sans — confirm.",
    "Brand line 'Serious about smiles.' adapted from the site headline 'We are serious about smiles' — confirm usage.",
    "Social handle '@965smile' assumed.",
  ],
};

export default smile965;
