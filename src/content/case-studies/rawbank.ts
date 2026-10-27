import type { CaseStudy } from "../types";

/** Original case study — copy and imagery supplied by CRACKWITS. */
const rawbank: CaseStudy = {
  slug: "rawbank",
  name: "RAWBANK",
  category: "FINANCE",
  thumbnail: "/work/rawbank.webp",
  subtitle: "Reimagining banking experience through a connected digital ecosystem.",
  cover: { src: "/work/rawbank-cover.webp", alt: "RAWBANK brand experience" },
  overview: [
    "For more than two decades, RAWBANK has been a trusted financial partner in the Democratic Republic of Congo.",
    "As customer expectations shifted toward faster, simpler and more digital experiences, RAWBANK needed more than a digital presence. It needed an ecosystem.",
    "CRACKWITS partnered with RAWBANK to transform its digital landscape — creating connected experiences across retail banking, corporate services, SaaS solutions and digital communication.",
  ],
  services: ["Strategy", "UX/UI", "Social Media", "Digital Marketing"],
  stats: [
    { value: 41.2, decimals: 1, suffix: "k", label: "Monthly Impressions" },
    { value: 80, suffix: "%", label: "Returning Customer Rate" },
    { value: 49, suffix: "%", label: "Revenue Increase YOY" },
  ],
  // Code-built board (palette and typeface from the supplied brand-system
  // image; its master, rawbank-brand-system.png, is kept with the local
  // high-resolution masters, not in the repository).
  // The two board photos are AI-generated placeholders.
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "rawbank",
      typeface: "Montserrat",
      palette: [
        { name: "Raw Black", hex: "#111111" },
        { name: "Raw Yellow", hex: "#F4B000" },
        { name: "White", hex: "#FFFFFF" },
        { name: "Light Grey", hex: "#E5E5E5" },
      ],
      line: "Plus loin avec vous.",
      pattern: "diagonal",
      voice: ["Confident", "Ambitious", "Close", "Progressive"],
    },
    images: ["/case-studies/rawbank/board-portrait.webp", "/case-studies/rawbank/board-street.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Transforming Traditional", "Banking Into Digital Experiences"],
      body: [
        "The challenge was not simply to make the bank look more contemporary. It was to create an ecosystem capable of communicating innovation, trust, proximity and ambition without losing the institutional strength built over more than two decades.",
      ],
      media: [
        { kind: "image", src: "/work/rawbank-digital-experience-1.webp", alt: "RAWBANK digital experience" },
        { kind: "image", src: "/work/rawbank-digital-experience-2.webp", alt: "RAWBANK digital banking experience" },
      ],
    },
    {
      layout: "feature",
      title: ["Creating a Digital Gateway", "for Modern Banking"],
      body: [
        "The RAWBANK website became the foundation of the digital ecosystem, transforming the way users discover and interact with financial services.",
        "Rather than simply presenting banking information, the platform was designed around user needs — helping customers quickly understand available solutions, navigate services and move naturally toward their next action.",
      ],
      media: [{ kind: "image", src: "/work/rawbank-digital-gateway.webp", alt: "RAWBANK digital banking gateway" }],
    },
    {
      layout: "feature",
      title: ["Building Scalable Solutions", "Beyond Traditional Banking"],
      body: [
        "The future of financial services depends on digital products that can adapt, scale and deliver value beyond traditional banking models.",
        "CRACKWITS worked with RAWBANK to shape SaaS-driven experiences designed around usability, efficiency and long-term growth. These solutions allow the bank to extend its digital capabilities while creating smarter interactions between customers, businesses and financial services.",
      ],
      media: [{ kind: "image", src: "/work/rawbank-scalable-solutions.webp", alt: "RAWBANK scalable digital banking solutions" }],
    },
    {
      layout: "duo",
      title: ["Turning Banking Services", "Into Meaningful Conversations"],
      body: [
        "A successful digital transformation extends beyond platforms. It requires communication that connects with people and translates services into meaningful experiences.",
        "CRACKWITS supported RAWBANK in creating digital communication strategies that bring products, services and initiatives closer to audiences through engaging campaigns and content experiences.",
      ],
      media: [
        { kind: "image", src: "/work/rawbank-meaningful-conversations-1.webp", alt: "RAWBANK digital communication mockup" },
        { kind: "image", src: "/work/rawbank-meaningful-conversations-2.webp", alt: "RAWBANK digital communication experience" },
      ],
    },
    {
      layout: "feature",
      title: ["Translating Identity", "Into Every Interaction"],
      body: [
        "RAWBANK’s identity represents confidence, ambition and progress. Bringing that identity into digital environments required more than applying visual elements — it required creating experiences that feel consistent across every channel.",
        "From interface design and digital products to campaigns and customer interactions, we translated RAWBANK’s brand principles into a cohesive digital language.",
      ],
      media: [{ kind: "image", src: "/work/rawbank-identity-interactions.webp", alt: "RAWBANK identity across digital interactions" }],
    },
  ],
  outcome:
    "RAWBANK’s transformation represents more than a redesigned digital presence. It is the creation of a connected ecosystem designed to support the evolving relationship between people, businesses and financial services.",
  more: ["twig", "coya"],
  draft: false,
  review: [
    "Brand-board photos (board-portrait.webp, board-street.webp) are AI-generated placeholders — replace with real campaign photography.",
  ],
};

export default rawbank;
