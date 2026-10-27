import type { CaseStudy } from "../types";

const pointeAnglaise: CaseStudy = {
  slug: "pointe-anglaise",
  name: "POINTE ANGLAISE",
  category: "REAL ESTATE",
  thumbnail: "/work/pointe-anglaise.webp",
  subtitle: "Presenting a waterfront residential address as a way of life.",
  cover: {
    src: "/case-studies/pointe-anglaise/cover.webp",
    alt: "POINTE ANGLAISE campaign hero — terraced residences among palms at dusk by the water",
    ai: true,
  },
  overview: [
    "POINTE ANGLAISE is a luxury residential development of terraced towers and villas set among tropical gardens on the water’s edge, designed to bring calm to city living.",
    "Selling homes that are still taking shape means selling a feeling before a floor plan. The project needed a presence that could convey scale, serenity and exclusivity to discerning buyers and investors, and guide them confidently toward an enquiry.",
    "CRACKWITS built the project’s digital home and the visual language around it: an elegant, image-led website, a restrained identity system and communication that frames the development as a lifestyle rather than a listing.",
  ],
  services: ["Brand Identity", "UX/UI", "Web Development", "Content Production", "Digital Marketing"],
  stats: [
    { value: null, label: "Qualified Enquiries" },
    { value: null, label: "Brochure Downloads" },
    { value: null, label: "Monthly Website Visits" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "POINTE ANGLAISE",
      typeface: "Cormorant Garamond",
      palette: [
        { name: "Harbour Navy", hex: "#1D2838" },
        { name: "Palm Shadow", hex: "#2E4636" },
        { name: "Travertine", hex: "#A49D90" },
        { name: "Dune Sand", hex: "#D8CAB0" },
        { name: "Linen", hex: "#F3F1EC" },
      ],
      line: "Luxury, redefined by nature.",
      pattern: "diagonal",
      voice: ["Serene", "Refined", "Assured", "Timeless"],
    },
    images: ["/case-studies/pointe-anglaise/duo.webp", "/case-studies/pointe-anglaise/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Selling a Setting", "Before a Floor Plan"],
      body: [
        "The homepage opens on a sweeping view of the development — terraced towers stepping down through palms toward the water — with a single line, “Luxury Redefined”, and one quiet call to action. A slim navy navigation, generous white space and a fine-lined monogram leave the architecture to do the talking, while a persistent brochure download keeps the most important next step always within reach.",
      ],
      media: [
        { kind: "image", src: "/work/pointe-anglaise.webp", alt: "POINTE ANGLAISE website homepage on a laptop" },
        {
          kind: "image",
          src: "/case-studies/pointe-anglaise/lead.webp",
          alt: "A shaded residential terrace with travertine floor overlooking palms and water",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Guiding Buyers From", "First Glance to Enquiry"],
      body: [
        "Buyers arrive with different questions — the residence types, the amenities, the location, the investment case. The site structure answers each in its own chapter, so visitors can go deep on what matters to them without losing the thread.",
        "Every chapter ends on the same two actions: download the brochure or speak to the sales team. Language switching and a mobile-first build make the experience equally composed for local buyers and international investors.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/pointe-anglaise/cover.webp",
          url: "pointeanglaise.com",
          nav: ["Residences", "Amenities", "Features", "Contact"],
          headline: "Luxury living in the heart of the city.",
          cta: "Download Brochure",
          alt: "POINTE ANGLAISE website mockup with waterfront residences hero",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Painting a Day", "in the Life"],
      body: [
        "Communication moves beyond renders to the rhythm of living there: morning light across a terrace, an afternoon by the pool, the hush of palms in the evening. Each image is chosen to make the buyer picture themselves in the space.",
        "A muted palette of navy, travertine and palm green, set with a refined serif, keeps every post and placement consistent with the calm, assured tone of the development itself.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/pointe-anglaise/duo.webp",
          handle: "@pointeanglaise",
          caption: "Mornings that begin with the water.",
          alt: "POINTE ANGLAISE social post showing a woman on a sunlit terrace with palms beyond",
          ai: true,
        },
        { kind: "poster", line: "Luxury, redefined by nature.", alt: "POINTE ANGLAISE brand poster in navy and travertine" },
      ],
    },
    {
      layout: "feature",
      title: ["An Identity Crafted", "for the Sales Journey"],
      body: [
        "Off-plan property is sold as much in person as online. The identity carries into brochures, sales-suite materials and site hoardings, each built on the same restrained grid, fine-lined monogram and natural material palette.",
        "Tactile papers, generous margins and architectural photography give every printed piece the same composure as the website — so the experience feels consistent from the first click to the signing table.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/pointe-anglaise/feature.webp",
          alt: "Navy and sand property brochure and stationery set on a travertine surface",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "POINTE ANGLAISE now presents itself with the calm confidence of the homes it promises — a website and brand system that let buyers experience the setting before it is complete, and give the sales team a consistent, elegant toolkit for every stage of the conversation.",
  more: ["burj-al-tojjar", "buildoser"],
  draft: true,
  review: [
    "Location not stated in copy. The thumbnail shows a tropical waterfront setting and a French name; the site text is cut off ('Situated on the…'). Confirm city/country if it should be named.",
    "Assumed CRACKWITS designed and built the website (thumbnail shows the site) — confirm scope, including brand identity, content production and digital marketing.",
    "Language switcher visible in thumbnail ('English' dropdown) — assumed multilingual; confirm languages.",
    "Residence types (towers and villas), amenities and pool are inferred from the hero render — confirm.",
    "Section 4 (brochures, sales-suite materials, hoardings) is assumed — the brochure download CTA is visible, but print design scope must be confirmed.",
    "Domain 'pointeanglaise.com' assumed.",
    "Palette is an interpretation (navy UI from the site, plus natural tones from the render) — hex values approximate. Typeface 'Cormorant Garamond' chosen for tone; the site appears to use a geometric sans — confirm.",
    "Brand line 'Luxury, redefined by nature.' is adapted from the site's 'Luxury Redefined'; social caption invented.",
    "Social handle '@pointeanglaise' assumed.",
  ],
};

export default pointeAnglaise;
