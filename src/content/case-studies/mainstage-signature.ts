import type { CaseStudy } from "../types";

const mainstageSignature: CaseStudy = {
  slug: "mainstage-signature",
  name: "MAINSTAGE SIGNATURE",
  category: "ENTERTAINMENT",
  thumbnail: "/work/the-same-maker.png",
  subtitle: "An identity that moves like sound, from the main stage to merchandise.",
  cover: {
    src: "/case-studies/mainstage-signature/cover.webp",
    alt: "Crowd facing a festival main stage lit in red and amber",
    ai: true,
  },
  overview: [
    "Mainstage Signature works in live entertainment, where sound, light and production come together to create the moments audiences remember.",
    "In an industry where the brand is usually hidden behind the artist, Mainstage Signature needed a mark that could hold its own — clear on a dark stage, small on a piece of merchandise and instantly linked to the idea of live sound.",
    "CRACKWITS created an identity built on a single continuous line that draws the M and S like a sound wave, paired with an equaliser-inspired dot motif, and extended it across merchandise, event touchpoints and social content.",
  ],
  services: ["Brand Identity", "Creative Direction", "Brand Activations", "Social Media"],
  stats: [
    { value: null, label: "Events Produced" },
    { value: null, label: "Merchandise Units" },
    { value: null, label: "Social Reach" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "mainstage signature",
      typeface: "Manrope",
      palette: [
        { name: "Stage Black", hex: "#0E0E0F" },
        { name: "Signal Red", hex: "#D7191C" },
        { name: "Amp Orange", hex: "#F28C1E" },
        { name: "House White", hex: "#FFFFFF" },
        { name: "Soundcheck Grey", hex: "#E0E0E0" },
      ],
      line: "Every show has a signature.",
      pattern: "waves",
      voice: ["Rhythmic", "Confident", "Crafted", "Live"],
    },
    images: ["/case-studies/mainstage-signature/duo.webp", "/case-studies/mainstage-signature/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Drawing a Monogram", "With a Single Sound Wave"],
      body: [
        "The mark is one unbroken line that rises and falls to form the letters M and S, like a waveform on a screen. Beside it, a small cascade of red and orange dots borrows the language of level meters, adding a pulse of energy without complicating the monogram. Set in white on black, it reads as cleanly on a speaker as on a stage screen.",
      ],
      media: [
        { kind: "image", src: "/work/the-same-maker.png", alt: "Mainstage Signature logo on a black portable speaker" },
        {
          kind: "image",
          src: "/case-studies/mainstage-signature/lead.webp",
          alt: "Sound engineer's hands on a mixing console with glowing level meters",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Taking the Brand", "Off the Stage"],
      body: [
        "Merchandise was approached as part of the identity rather than an afterthought. Matte black objects — speakers, cases, passes, totes and caps — carry the monogram in white, with the equaliser dots appearing as small accents of colour.",
        "The restraint is deliberate: products feel like considered audio gear rather than promotional giveaways, so audiences and crews actually want to keep them.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/mainstage-signature/feature.webp",
          alt: "Black speaker, earbuds case, backstage pass, tote and cap on a grey backdrop",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Turning the Crowd", "Into the Campaign"],
      body: [
        "The most powerful image in live entertainment is the audience. Social content centres on the people in the room — lit by the stage, caught mid-chorus — and lets the production speak through atmosphere.",
        "Warm red and amber light ties every post back to the brand palette, giving the feed a recognisable glow from one event to the next.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/mainstage-signature/duo.webp",
          handle: "@mainstagesignature",
          caption: "That moment the whole room sings the chorus back.",
          alt: "Young man singing along at a concert in amber stage light",
          ai: true,
        },
        { kind: "poster", line: "Every show has a signature.", alt: "Mainstage Signature brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Built for Dark Rooms", "And Bright Lights"],
      body: [
        "Live environments are unforgiving: low light, fast motion, giant screens and tiny badges in the same night. The identity was tested across all of them, from LED walls to lanyards.",
        "A high-contrast black-and-white base with a tightly controlled warm accent keeps Mainstage Signature legible and consistent, however intense the production around it.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/mainstage-signature/experience.webp",
          alt: "Crew member preparing matte-black flight cases backstage",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "Mainstage Signature now has an identity as expressive as the productions it delivers — a distinctive sound-wave monogram and a disciplined system that carries from stage screens to merchandise, giving the brand a presence audiences recognise and remember.",
  more: ["special-events", "kidzania"],
  draft: true,
  review: [
    "Section image experience.webp is an additional AI placeholder (generated so the cover is not repeated) — replace with real imagery.",
    "Thumbnail file is named 'the-same-maker.png' but shows a 'mainstage signature' logo (wave-line MS monogram with red/orange equaliser dots) on a black portable speaker — confirm this is the correct brand/thumbnail.",
    "Assumed Mainstage Signature is a live entertainment / event production or audio business — confirm what the company actually does.",
    "Assumed CRACKWITS designed the logo/identity and merchandise; event touchpoints, brand activations and social content are assumptions — confirm scope.",
    "Market/location not stated — confirm.",
    "No website evidence, so no browser mockup.",
    "Handle '@mainstagesignature' and line 'Every show has a signature.' are placeholders.",
    "Palette sampled from the logo (black, white, red, orange); typeface 'Manrope' approximates the rounded lowercase wordmark.",
    "Stat labels are suggestions; values intentionally empty.",
    "All four case-study images are AI-generated placeholders.",
  ],
};

export default mainstageSignature;
