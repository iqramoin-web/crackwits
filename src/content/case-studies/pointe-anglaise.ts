import type { CaseStudy } from "../types";

const pointeAnglaise: CaseStudy = {
  slug: "pointe-anglaise",
  name: "POINTE ANGLAISE",
  category: "REAL ESTATE",
  thumbnail: "/work/pointe-anglaise.webp",
  subtitle: "Launching a riverside residential landmark in Kinshasa as luxury, redefined.",
  cover: {
    src: "/case-studies/pointe-anglaise/cover.webp",
    alt: "Riverside residences among palms, lit up at dusk and reflected in the water",
    ai: true,
  },
  overview: [
    "POINTE ANGLAISE is a riverside residential complex in Kinshasa, the Congolese capital, created for a contemporary communal way of life shared by local and expatriate residents.",
    "As a new brand with real ambition, the development needed to enter the market as a pioneer in the region. That meant an identity with more elegance, a website to present the residences and a business brochure detailed enough to support every sales conversation.",
    "CRACKWITS refined the existing logo, designed and built a teaser and full website, and produced a bilingual brochure — a launch toolkit that presents the complex as a sanctuary of world-class living.",
  ],
  services: ["Brand Identity", "UX/UI", "Web Development", "Brochure Design"],
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
      line: "Luxury, redefined.",
      pattern: "diagonal",
      voice: ["Elegant", "Serene", "Pioneering", "Assured"],
    },
    images: ["/case-studies/pointe-anglaise/duo.webp", "/case-studies/pointe-anglaise/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Refining a Mark", "for a Riverside First"],
      body: [
        "The brand already had a logo, and it had earned some recognition. Rather than start again, we explored several directions for a revamp that would carry the poise of the complex, then took forward the one closest to the original — keeping what people knew while giving it the refinement of a development positioning itself as the first of its kind in the region.",
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
      title: ["A Website That Lets", "the Residences Speak"],
      body: [
        "A teaser site held the launch, followed by the full website. It walks visitors through each residence type, its floor plans and the features and amenities of the complex, led by imagery with only as much text as each page needs.",
        "Because the brochure already carries the detail, the site avoids repeating it. It stays clean, elevated and direct, and keeps the brochure download within easy reach for anyone ready to go further.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/pointe-anglaise/cover.webp",
          url: "pointeanglaise.com",
          nav: ["Residences", "Floor Plans", "Amenities", "Contact"],
          headline: "Luxury, redefined by the river.",
          cta: "Download Brochure",
          alt: "POINTE ANGLAISE website mockup with a riverside residences hero",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Picturing a Sanctuary", "Before the Keys Change Hands"],
      body: [
        "Across the website and brochure, the imagery does the persuading: light on a terrace, palms against the water, the calm of a home set apart from the city around it. Each scene is chosen so buyers can imagine themselves living there.",
        "A restrained palette and a refined serif keep every touchpoint in the same measured register, so the brand reads consistently whether it is seen on screen or in print.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/pointe-anglaise/duo.webp",
          handle: "@pointeanglaise",
          caption: "Mornings that begin by the river.",
          alt: "A resident on a sunlit terrace looking out over palms and open water",
          ai: true,
        },
        { kind: "poster", line: "Luxury, redefined.", alt: "POINTE ANGLAISE brand poster in navy and travertine" },
      ],
    },
    {
      layout: "feature",
      title: ["A Brochure Built", "in Two Languages"],
      body: [
        "The brochure holds the complete picture of the development, yet stays short and easy to read. We benchmarked it against leading competitors, then added touches of innovation so it stands apart while still meeting the standard buyers expect.",
        "Light on copy and consistent in rhythm, it explains the project clearly and in depth. The French edition was adapted from the English rather than translated line by line, so it reads naturally to each audience.",
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
    "POINTE ANGLAISE enters the Kinshasa market with a refined mark, a visual website and a bilingual brochure that work as one launch toolkit — giving buyers and the sales team a clear, elegant view of the residences before they ever step inside.",
  more: ["burj-al-tojjar", "buildoser"],
  draft: true,
  review: [
    "From crackwits.com case study: riverside residential complex in Kinshasa, DRC, for local and expatriate residents; positioned as a regional pioneer.",
    "From crackwits.com case study: scope was logo revamp (several directions, closest to the original chosen), teaser and full website, and an English/French brochure (French adapted, not translated).",
    "From crackwits.com case study: brand line 'Luxury, redefined' (punchline: luxury redefined, a sanctuary).",
    "Domain 'pointeanglaise.com' assumed — not given in the reference. Website nav items assumed.",
    "Social handle '@pointeanglaise' and the phone caption are invented; social media is not part of the reference scope — the phone mockup is illustrative.",
    "Palette and typeface are interpretations; hex values approximate. Confirm against the revamped logo.",
    "All scenes (terrace, riverside residences, brochure flat lay) are illustrative AI placeholders.",
  ],
};

export default pointeAnglaise;
