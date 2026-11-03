import type { CaseStudy } from "../types";

const homeyWays: CaseStudy = {
  slug: "homey-ways",
  name: "HOMEY WAYS",
  category: "HOME SERVICES",
  thumbnail: "/work/homey-ways.webp",
  subtitle: "Naming, building and launching a spotless home-services platform.",
  cover: {
    src: "/case-studies/homey-ways/cover.webp",
    alt: "HOMEY WAYS campaign hero — a freshly cleaned, sunlit living room",
    ai: true,
  },
  overview: [
    "HOMEY WAYS is a tech-led services marketplace for residential and corporate properties in the UAE, where customers book appointments, track progress and pay online in one friendly platform.",
    "Its promise is trusted, well-trained agents and consistent, customisable on-demand services, delivered with care and transparency at appealing rates. To stand out against established players, it needed a name, a brand and a digital experience as reliable as the service itself.",
    "CRACKWITS built HOMEY WAYS from the ground up: the name and logo, the strategy and big idea, the website, web app and mobile app, the standard operating procedures and code of conduct for agents, and the corporate profile and investor deck.",
  ],
  services: ["Strategy", "Naming & Branding", "UX/UI", "Web Development", "App Development", "Social Media"],
  stats: [
    { value: null, label: "App Downloads" },
    { value: null, label: "Monthly Bookings" },
    { value: null, label: "Services Offered" },
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
      line: "If not impeccable, consider it complimentary.",
      pattern: "stripes",
      voice: ["Reliable", "Friendly", "Transparent", "Witty"],
    },
    images: ["/case-studies/homey-ways/duo.webp", "/case-studies/homey-ways/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["A Witty Name", "With Tiny but Mighty Icons"],
      body: [
        "Market research produced a shortlist of names, and HOMEY WAYS won by turning the core business into something witty yet distinctive. The identity sets the name in a stylised wordmark with fresh, bright colours and room for a tailor-made brand mark, while a family of small icons gives every service its own recognisable tile — seen here on the app’s friendly home screen.",
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
      title: ["Book, Track and Pay", "in a Few Taps"],
      body: [
        "The website and web app act as a central hub: an informative, e-commerce platform where customers browse cleaning services and book an agent through a detailed, customisable booking flow.",
        "The mobile app takes the same journey end to end — browse, book, track progress and pay — with in-app customer care, saved service preferences and the ability to review and rate agents, making it a pocket-sized clean companion.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/homey-ways/cover.webp",
          url: "homeyways.com",
          nav: ["Services", "How It Works", "Pricing", "Contact"],
          headline: "If not impeccable, consider it complimentary.",
          cta: "Book a Clean",
          alt: "HOMEY WAYS website mockup with sunlit living room hero",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["A Launch Strategy", "That Stands Out"],
      body: [
        "Research into target audiences, the UAE digital services market and current trends shaped a launch strategy that reinforces the brand’s USPs — the 4Os and big idea gave every message a clear direction against established competitors.",
        "Supporting collateral and brand assets were designed to double as organic advertising, carrying the fresh colours and a confident promise: if the job isn’t impeccable, it’s on the house.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/homey-ways/duo.webp",
          handle: "@homeyways",
          caption: "Fresh sheets, clear mind. If it’s not impeccable, it’s complimentary.",
          alt: "HOMEY WAYS social post showing a woman relaxing on a freshly made bed",
          ai: true,
        },
        {
          kind: "poster",
          line: "If not impeccable, consider it complimentary.",
          alt: "HOMEY WAYS brand poster in navy, blue and sunshine yellow",
        },
      ],
    },
    {
      layout: "feature",
      title: ["Setting the Gold Standard", "Behind Every Visit"],
      body: [
        "A service is only as good as the people who deliver it. CRACKWITS wrote detailed, visual standard operating procedures and a code of conduct aligned with high international standards, so every agent knows the care, precision and efficiency expected in each home.",
        "For the business side, a corporate profile and a concise investor deck summarise the brand’s keys to success, competitive advantage, operating model and financial projections.",
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
    "HOMEY WAYS launched with everything a new service brand needs — a name, an identity, a booking platform across web and app, clear standards for its agents and a story ready for investors — all held together by one confident promise of impeccable care.",
  more: ["965smile", "burj-al-tojjar"],
  draft: true,
  review: [
    "From crackwits.com case study: services marketplace for residential and corporate properties; book, track and pay online; trusted agents, transparency, appealing rates; UAE market; punchline 'If not impeccable, consider it complimentary.'.",
    "From crackwits.com case study: brand name, logo and identity, icons; strategy (4Os, big idea, market research); website and web app; mobile app with customer care, preferences, agent reviews; SOP and code of conduct; corporate profile and investor deck.",
    "Domain 'homeyways.com' is a placeholder — the reference shows a stray 'sunrisewaterpark.com' link. Nav items are assumed.",
    "Social media appears in the reference’s service tags but is not described; social post, handle '@homeyways' and caption are illustrative.",
    "Palette sampled from the logo and illustrations; typeface 'Bricolage Grotesque' is a stand-in.",
  ],
};

export default homeyWays;
