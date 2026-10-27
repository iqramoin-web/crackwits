import type { CaseStudy } from "../types";

const burjAlTojjar: CaseStudy = {
  slug: "burj-al-tojjar",
  name: "BURJ AL TOJJAR",
  category: "REAL ESTATE",
  thumbnail: "/work/burj-al-tojjar.webp",
  subtitle: "A square Kufic mark in brushed gold for a tower built for merchants.",
  cover: {
    src: "/case-studies/burj-al-tojjar/cover.webp",
    alt: "Commercial tower facade catching warm golden light at dusk",
    ai: true,
  },
  overview: [
    "Burj Al Tojjar, the 'Tower of Merchants', is a commercial address built around trade, enterprise and the business community it hosts.",
    "The tower needed an identity with the presence of a landmark: rooted in the region's heritage of commerce and calligraphy, but contemporary enough to attract today's businesses and tenants.",
    "CRACKWITS created a bilingual identity anchored by a square Kufic monogram, then carried it into materials, signage and leasing communication so the brand feels as permanent as the building.",
  ],
  services: ["Brand Position", "Brand Identity", "Creative Direction", "Event Journeys"],
  stats: [
    { value: null, label: "Leasing Enquiries" },
    { value: null, label: "Wayfinding Touchpoints" },
    { value: null, label: "Tenant Occupancy" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "BURJ AL TOJJAR",
      typeface: "IBM Plex Sans Arabic",
      palette: [
        { name: "Deep Bronze", hex: "#5A4A2E" },
        { name: "Brushed Gold", hex: "#C9AE6E" },
        { name: "Champagne", hex: "#E3CF97" },
        { name: "Vein Grey", hex: "#8E8A84" },
        { name: "Marble White", hex: "#F3F1EC" },
      ],
      line: "Where commerce finds its address.",
      pattern: "grid",
      voice: ["Established", "Refined", "Enduring", "Welcoming"],
    },
    images: ["/case-studies/burj-al-tojjar/duo.webp", "/case-studies/burj-al-tojjar/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Writing the Tower's Name", "in the Language of Architecture"],
      body: [
        "Square Kufic, the geometric script once laid in tile and brick across the region's buildings, was the natural starting point. We built the tower's Arabic name into a square monogram whose stepped, interlocking strokes read as both calligraphy and floor plan, then paired it with an open, widely spaced Latin wordmark. Engraved into brushed gold and set against white marble, the mark behaves like an architectural material rather than a logo printed on top.",
      ],
      media: [
        { kind: "image", src: "/work/burj-al-tojjar.webp", alt: "Burj Al Tojjar Kufic monogram engraved on brushed gold plates" },
        {
          kind: "image",
          src: "/case-studies/burj-al-tojjar/lead.webp",
          alt: "Marble lobby with brushed-gold wall panels and soft daylight",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["A Landmark Presence", "at Every Scale"],
      body: [
        "The square format of the monogram was designed to scale cleanly: it works as a rooftop mark seen from the street, an engraved plate at the entrance and a small seal on a business card.",
        "Brushed gold, warm bronze and marble white form a restrained palette that reflects the building's materials and gives the tower a calm, premium presence on its skyline.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/burj-al-tojjar/experience.webp",
          alt: "Tower entrance with bronze-framed doors and a gold geometric screen at dusk",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Welcoming a Community", "of Merchants and Makers"],
      body: [
        "Leasing communication focuses on the people the tower is built for: traders, founders and established family businesses. Imagery is warm and human, showing meetings, arrivals and everyday business in light-filled spaces.",
        "Copy runs in Arabic and English with equal weight, using a measured, hospitable tone that reflects the tower's role as a meeting place as well as an office address.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/burj-al-tojjar/duo.webp",
          handle: "@burjaltojjar",
          caption: "Where commerce finds its address.",
          alt: "Business owner arriving in a sunlit marble lobby",
          ai: true,
        },
        { kind: "poster", line: "Where commerce finds its address.", alt: "Burj Al Tojjar brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Crafting a Journey", "From Entrance to Every Floor"],
      body: [
        "Wayfinding extends the identity through the building. Engraved gold directories, floor markers and tenant plaques use the monogram's square grid to organise information, so the system stays clear in both scripts.",
        "Stationery, leasing kits and event materials follow the same rules, and every piece of the building's communication feels like it was made from the same marble and metal.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/burj-al-tojjar/feature.webp",
          alt: "Brushed-gold wayfinding signage set into a marble wall",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "Burj Al Tojjar now has an identity that feels built into the tower itself. The Kufic monogram and its material system give the building a clear, dignified presence, from the skyline to the lift lobby, and a brand that tenants are proud to share as their business address.",
  more: ["buildoser", "homey-ways"],
  draft: true,
  review: [
    "Section image experience.webp is an additional AI placeholder (generated so the cover is not repeated) — replace with real imagery.",
    "Assumed Burj Al Tojjar is a commercial/mixed-use tower (name translates roughly as 'Tower of Merchants'); likely the Kuwait City tower, but location is not stated in copy. Confirm building type and location.",
    "Thumbnail shows only the square Kufic monogram and Latin wordmark engraved on brushed gold over marble. Assumed CRACKWITS delivered positioning, bilingual identity, signage/wayfinding, stationery, leasing communication and event materials. Confirm scope.",
    "Description of the monogram (square Kufic, stepped strokes reading as a floor plan) is an interpretation; confirm the design rationale and that the mark spells the tower's Arabic name.",
    "Handle @burjaltojjar is assumed. Brand line 'Where commerce finds its address' is new copy.",
    "Palette sampled from the thumbnail (brushed gold, champagne, marble white); bronze and grey added. Hex values approximate. IBM Plex Sans Arabic chosen for bilingual setting; the Latin wordmark on the thumbnail is a wide geometric sans.",
    "Event Journeys included as a service on the assumption of launch/leasing events. Confirm.",
  ],
};

export default burjAlTojjar;
