import type { CaseStudy } from "../types";

const smile965: CaseStudy = {
  slug: "965smile",
  name: "965SMILE",
  category: "HEALTHCARE",
  thumbnail: "/work/965smile.webp",
  subtitle: "Relaunching an ethical cosmetic dentistry clinic, from identity to online booking.",
  cover: {
    src: "/case-studies/965smile/cover.webp",
    alt: "965SMILE clinic interior — a bright, calm treatment space in teal and warm white",
    ai: true,
  },
  overview: [
    "965SMILE is a dental clinic focused on ethical, world-class cosmetic and restorative dentistry, with the aim of improving both the look of a smile and the health behind it.",
    "Each treatment is planned and shaped around the individual, so patients leave with a smile that still feels like their own — and the confidence that comes with it. The clinic wanted its brand, website and channels to express that same care.",
    "CRACKWITS delivered a full brand relaunch: a revamped identity, a website with patient login and online booking, a suite of administrative forms, day-to-day social media management, and paid boosting across social and Google Ads.",
  ],
  services: ["Brand Identity", "UX/UI", "Web Development", "Social Media", "Paid Media"],
  stats: [
    { value: null, label: "Online Appointments" },
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
      line: "Ethical work, delicate hands.",
      pattern: "arcs",
      voice: ["Ethical", "Delicate", "Personal", "Confident"],
    },
    images: ["/case-studies/965smile/duo.webp", "/case-studies/965smile/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["An Identity Shaped", "With Care"],
      body: [
        "The identity had to capture the spirit of a clinic that pairs ethical practice with a careful, delicate touch. CRACKWITS designed the core brand assets — logo, colour palette, typefaces and supporting graphics — and walked the client through several variations before settling on a calm teal-led system, with warm amber held back for the moments that invite patients to act.",
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
      title: ["A Website That", "Books the Visit"],
      body: [
        "The website acts as the clinic’s central online hub: informative enough to explain treatments and the team, and simple enough that anyone can find their way around.",
        "Its interface grows out of the new identity, and beneath it sit two practical features — a patient login and a booking system — so a visit can be arranged online without picking up the phone.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/965smile/cover.webp",
          url: "965smile.com",
          nav: ["Treatments", "Our Team", "About", "Contact"],
          headline: "Smiles shaped with care.",
          cta: "Book an Appointment",
          alt: "965SMILE website mockup with clinic interior hero",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Keeping the Clinic", "in the Conversation"],
      body: [
        "The relaunch carried onto social media, with a strategy aimed at raising awareness, building a community and turning engagement into enquiries and bookings. Content mixes useful, informative posts with lively design, and CRACKWITS handled daily posting across every platform.",
        "Selected posts were boosted on social and supported by Google Ads, putting the clinic in front of people actively looking for cosmetic dental care.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/965smile/duo.webp",
          handle: "@965smile",
          caption: "Your smile, refined — never replaced.",
          alt: "965SMILE social post showing a woman laughing in warm natural light",
          ai: true,
        },
        { kind: "poster", line: "Ethical work, delicate hands.", alt: "965SMILE brand poster in teal and amber" },
      ],
    },
    {
      layout: "feature",
      title: ["Paperwork That", "Puts Patients First"],
      body: [
        "Good care also depends on good paperwork. CRACKWITS produced a set of standardised administrative forms covering the information a dental practice needs to gather from patients and the processes it has to manage.",
        "Designed in the same visual language as the rest of the brand, the forms help the clinic run smoothly, stay compliant, communicate clearly with patients and keep attention on treatment rather than admin.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/965smile/feature.webp",
          alt: "Teal pouch, folded patient leaflet and appointment cards arranged on a white surface",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "965SMILE now has one consistent brand from first ad to patient form — an identity that reflects its ethical, delicate approach, a website that takes bookings online, and social and search activity that keeps new patients finding their way to the clinic.",
  more: ["homey-ways", "ovo"],
  draft: true,
  review: [
    "From crackwits.com case study: ethical cosmetic and restorative dentistry with personalised treatment; scope = brand relaunch (logo, colours, fonts, graphics with variations), website UX/UI and development with login and booking system, administrative forms, social media management, social and Google Ads boosting.",
    "From crackwits.com case study: punchline about ethical work performed with utmost delicacy — board line 'Ethical work, delicate hands.' is a shortened paraphrase; confirm.",
    "Market (Kuwait) inferred from the name and the thumbnail's Kuwait City address — not stated in the reference.",
    "Domain '965smile.com', handle '@965smile', nav, headline, CTA and social caption are placeholders.",
    "Section 4 image shows clinic stationery rather than the actual forms — illustrative only.",
    "Palette sampled from the thumbnail; Manrope is a stand-in for the site's rounded sans.",
    "All four case-study images are AI-generated placeholders.",
  ],
};

export default smile965;
