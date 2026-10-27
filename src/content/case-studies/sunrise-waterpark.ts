import type { CaseStudy } from "../types";

const sunriseWaterpark: CaseStudy = {
  slug: "sunrise-waterpark",
  name: "Sunrise WATERPARK",
  category: "ENTERTAINMENT",
  thumbnail: "/work/sunrise.webp",
  subtitle: "A bright, bilingual identity built to be worn, floated and splashed.",
  cover: {
    src: "/case-studies/sunrise-waterpark/cover.webp",
    alt: "Orange, blue and pink water slides above a pool at golden hour",
    ai: true,
  },
  overview: [
    "Sunrise Waterpark is a family leisure destination built around slides, pools and long, sunny days out.",
    "A waterpark brand lives almost entirely outdoors and in motion — on rings, towels, signage and wristbands, in two languages, under direct sun. It needed an identity that stays bold and legible in water and remains joyful from the entrance gate to the last slide.",
    "CRACKWITS created a colour-led identity system for Sunrise: an energetic wordmark, a palette drawn from the first light of the day, playful graphic shapes, and a bilingual guest language applied across the park’s physical touchpoints and social channels.",
  ],
  services: ["Brand Identity", "Creative Direction", "Packaging", "Social Media"],
  stats: [
    { value: null, label: "Season Visitors" },
    { value: null, label: "Social Engagement Rate" },
    { value: null, label: "Branded Touchpoints" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "Sunrise",
      typeface: "Bricolage Grotesque",
      palette: [
        { name: "Deep Royal", hex: "#1F3BD1" },
        { name: "Sunrise Orange", hex: "#F7A21B" },
        { name: "Flamingo Pink", hex: "#F2609C" },
        { name: "Pool Aqua", hex: "#3EC6E8" },
        { name: "Splash White", hex: "#FFFFFF" },
      ],
      line: "Forward, into the water.",
      pattern: "dots",
      voice: ["Sunny", "Playful", "Welcoming", "Bold"],
    },
    images: ["/case-studies/sunrise-waterpark/duo.webp", "/case-studies/sunrise-waterpark/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Designing a Brand", "That Lives in the Water"],
      body: [
        "The most-seen surface of a waterpark brand isn’t a screen — it’s a ring spinning down a slide. The identity was designed from that object outwards: big blocks of colour that read from a distance, shapes that survive curves and seams, and type that stays clear on wet vinyl in full sun.",
      ],
      media: [
        { kind: "image", src: "/work/sunrise.webp", alt: "Sunrise Waterpark branded swim rings floating in a pool" },
        {
          kind: "image",
          src: "/case-studies/sunrise-waterpark/lead.webp",
          alt: "Aerial view of swimmers on orange and blue rings in a turquoise wave pool",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Guiding Guests", "In Two Languages"],
      body: [
        "Sunrise welcomes guests in English and French, so every instruction had to work twice without doubling the noise. Bilingual pairs such as Left – Gauche and Forward – Vers l’avant were set as a single typographic unit, with colour and arrow shapes doing most of the work.",
        "The same logic extends to wayfinding: colour-coded totems and simple pictograms let families navigate the park at a glance, whichever language they read first.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/sunrise-waterpark/feature.webp",
          alt: "Colour-blocked wayfinding totem and striped parasols beside a pool deck",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Turning a Day Out", "Into a Summer Feed"],
      body: [
        "Every splash is a potential post. Social content was built around real guest moments — the drop at the bottom of a slide, the first jump of the day — framed with the brand’s colour and kept loose, sunny and spontaneous.",
        "Graphic dots and droplet shapes from the identity give each post a recognisable signature, so the feed reads as Sunrise even before the name appears.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/sunrise-waterpark/duo.webp",
          handle: "@sunrisewaterpark",
          caption: "Last slide of the day hits different.",
          alt: "Two friends laughing at the bottom of an orange water slide",
          ai: true,
        },
        { kind: "poster", line: "Forward, into the water.", alt: "Sunrise Waterpark brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Painting the Park", "In the Colours of Morning"],
      body: [
        "The palette takes its cue from the name: warm orange for the sun, deep royal blue for the sky before it, pink for the glow in between, set against the aqua of the pools themselves.",
        "Applied across slides, parasols, rings and merchandise, the colours turn the whole park into a single brand environment — cheerful, easy to remember and unmistakable in every guest photo.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/sunrise-waterpark/experience.webp",
          alt: "Family walking past colour-blocked lockers and parasols at the waterpark entrance",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "Sunrise now has an identity that works where the brand is actually experienced — on the water, in the sun and in two languages — giving the park a joyful, consistent presence from the first ring to the last photo shared.",
  more: ["kcamp", "pointe-anglaise"],
  draft: true,
  review: [
    "Section image experience.webp is an additional AI placeholder (generated so the cover is not repeated) — replace with real imagery.",
    "Thumbnail shows branded swim rings with bilingual English/French copy ('Left – Gauche', 'Forward – Vers l'avant') — assumed CRACKWITS designed the identity and applied it to rings/merch; confirm scope.",
    "Assumed a francophone/bilingual market from the rings; location of the park not stated — confirm.",
    "No website evidence, so no browser mockup used. Wayfinding/signage and social content scope are assumptions.",
    "Services 'Packaging' (used for merch/ring graphics) and 'Social Media' are assumptions.",
    "Handle '@sunrisewaterpark' and brand line 'Forward, into the water.' are placeholders (line riffs on the 'Forward' copy on the rings).",
    "Palette sampled from the thumbnail (royal blue, orange, pink, aqua); typeface 'Bricolage Grotesque' is a stand-in for the rounded wordmark.",
    "Stat labels are suggestions; values intentionally empty.",
    "All four case-study images are AI-generated placeholders.",
  ],
};

export default sunriseWaterpark;
