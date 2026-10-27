import type { CaseStudy } from "../types";

const cubix: CaseStudy = {
  slug: "cubix",
  name: "CUBIX",
  category: "INDUSTRIAL",
  thumbnail: "/work/overcubic.webp",
  subtitle: "A sharper identity for a maker of bespoke exhibitions and fit-outs.",
  cover: {
    src: "/case-studies/cubix/cover.webp",
    alt: "Minimal exhibition stand with a red sculptural volume in a dark hall",
    ai: true,
  },
  overview: [
    "CUBIX is a Kuwait-based manufacturer of bespoke interiors, trade-show exhibits, boutique fit-outs and podiums, working from its workshop in Shuwaikh Industrial Area.",
    "The company's craftsmanship was ahead of the way it presented itself. Pitching to brands, agencies and developers, CUBIX needed an identity and a sales story as precise as the structures it builds.",
    "CRACKWITS repositioned CUBIX around precision and simplicity, then built an identity system, stationery suite and brand profile that let the work lead every conversation.",
  ],
  services: ["Brand Position", "Brand Identity", "Creative Direction", "Content Production"],
  stats: [
    { value: null, label: "Pitches Supported" },
    { value: null, label: "Brand Touchpoints Delivered" },
    { value: null, label: "New Client Enquiries" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "CUBIX",
      typeface: "Montserrat",
      palette: [
        { name: "Workshop Slate", hex: "#343A44" },
        { name: "Cubix Red", hex: "#E3263F" },
        { name: "Steel Grey", hex: "#8A9099" },
        { name: "Primer Light", hex: "#DADCE0" },
        { name: "Paper White", hex: "#FFFFFF" },
      ],
      line: "Simplicity, built to measure.",
      pattern: "diagonal",
      voice: ["Precise", "Crafted", "Bold", "Reliable"],
    },
    images: ["/case-studies/cubix/duo.webp", "/case-studies/cubix/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["A Mark Cut From", "the Logic of the Workshop"],
      body: [
        "The CUBIX symbol is an X formed by notched, interlocking planes, the kind of joint a fabricator cuts every day. Those notches became the system's main graphic device: they crop photography, shape the red panels on stationery and frame quotes in the brand profile, so every layout carries a trace of how CUBIX actually builds.",
      ],
      media: [
        { kind: "image", src: "/work/overcubic.webp", alt: "CUBIX brand profile and stationery spreads" },
        {
          kind: "image",
          src: "/case-studies/cubix/lead.webp",
          alt: "Fabrication workshop with lacquered panels and precise joinery",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Showing Capability", "Before the First Meeting"],
      body: [
        "Clients buying exhibitions and fit-outs want to see finished work first. The digital presence is structured around capabilities: trade-show exhibits, boutique fit-outs, podiums and activations, each with project imagery and a clear route to a brief.",
        "Slate backgrounds and restrained typography keep the focus on the photography, and the red appears only where a decision is expected.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/cubix/cover.webp",
          url: "cubixpro.com",
          nav: ["Exhibitions", "Fit-outs", "Podiums", "Contact"],
          headline: "Built to measure. Delivered on time.",
          cta: "Start a brief",
          alt: "CUBIX website hero",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Turning a Brand Profile", "Into a Sales Tool"],
      body: [
        "The brand profile is the document CUBIX puts in front of every prospect. We wrote and designed it as an argument rather than a catalogue: a clear point of view on simplicity, then services, process and materials, each given room to breathe on deep slate spreads.",
        "Classical imagery set against crisp red typography signals a respect for craft without feeling old-fashioned. The result reads as confident and considered, closer to an architecture practice than a supplier.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/cubix/duo.webp",
          handle: "@cubixpro",
          caption: "Measured twice. Built once.",
          alt: "Craftsman finishing a lacquered display podium",
          ai: true,
        },
        { kind: "poster", line: "Simplicity is the ultimate sophistication.", alt: "CUBIX brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["An Identity Applied", "From Letterhead to Exhibition Floor"],
      body: [
        "Letterheads, envelopes, business cards and proposal covers share one grid and one rule: a single red cut-out per surface. The same rule scales up to site hoardings, vehicle livery and the stands CUBIX builds for itself at trade fairs.",
        "Because the system is built on a few clear rules, the in-house team can produce new documents and event graphics without diluting the brand.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/cubix/feature.webp",
          alt: "Red and white stationery suite on a slate desk",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "CUBIX now presents itself with the same precision it brings to the workshop floor. The identity and brand profile give the team a clear, consistent way to introduce the company, and to win the conversations where craftsmanship is the deciding factor.",
  more: ["trs-polymers", "buildoser"],
  draft: true,
  review: [
    "Thumbnail file is named overcubic.png; content written for CUBIX as listed in brands.ts. Confirm brand name.",
    "Assumed CRACKWITS delivered positioning, identity, stationery and the 2022 brand profile document (all visible in the thumbnail). Website and social content are assumed. Confirm scope.",
    "Services (trade-show exhibits, boutique fit-outs, podiums, bespoke interiors) and Shuwaikh Industrial Area, Kuwait location read from the thumbnail; confirm.",
    "Domain cubixpro.com and handle @cubixpro read from small print on the letterhead; confirm both are current. No direct website evidence; the browser mockup is speculative.",
    "Leonardo da Vinci quote 'Simplicity is the ultimate sophistication' appears in the brand profile; reused as the poster line. Brand line 'Simplicity, built to measure' is new copy. Confirm.",
    "Palette sampled from the thumbnail (red ~#E3263F, slate ~#343A44); hex values approximate. Montserrat chosen as closest available to the identity's geometric sans.",
    "Hoardings, vehicle livery and self-built trade-fair stand applications are assumed.",
    "The symbol description (notched interlocking X) is an interpretation of the logo; confirm the design rationale.",
  ],
};

export default cubix;
