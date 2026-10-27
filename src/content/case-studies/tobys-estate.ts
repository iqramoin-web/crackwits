import type { CaseStudy } from "../types";

const tobysEstate: CaseStudy = {
  slug: "tobys-estate",
  name: "TOBY'S ESTATE",
  category: "F&B",
  thumbnail: "/work/tobys-estate.webp",
  subtitle: "Taking specialty coffee from the roastery counter to the customer’s door.",
  cover: {
    src: "/case-studies/tobys-estate/cover.webp",
    alt: "Flat white in a black cup beside a black coffee bag on an off-white surface",
    ai: true,
  },
  overview: [
    "Toby’s Estate is a specialty coffee roaster with a loyal following for its carefully sourced beans and its café culture.",
    "As more customers began ordering coffee at home, the brand needed to make its online ordering and subscription offer as inviting as a visit to the bar — without losing the craft that sets specialty coffee apart.",
    "CRACKWITS built the “Specialty Coffee, Simplified.” campaign: a clear message, a print-to-digital creative system and social content that guide people from first sip to first subscription.",
  ],
  services: ["Holistic Campaign", "Creative Direction", "Digital Marketing", "Social Media"],
  stats: [
    { value: null, label: "New Subscriptions" },
    { value: null, label: "App & Web Orders" },
    { value: null, label: "Campaign Reach" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "TOBY’S ESTATE",
      typeface: "Archivo Black",
      palette: [
        { name: "Roast Black", hex: "#141414" },
        { name: "Apron Green", hex: "#3F5E45" },
        { name: "Paper White", hex: "#F2F0EC" },
        { name: "Peach Morning", hex: "#F1C9A8" },
        { name: "Signal Red", hex: "#C8202A" },
      ],
      line: "Specialty coffee, simplified.",
      pattern: "dots",
      voice: ["Direct", "Crafted", "Friendly", "Confident"],
    },
    images: ["/case-studies/tobys-estate/duo.webp", "/case-studies/tobys-estate/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Making Specialty Coffee", "Feel Effortless"],
      body: [
        "Specialty coffee can feel intimidating: origins, roast profiles, brew ratios. The campaign idea flips that around. “Specialty Coffee, Simplified.” pairs a heavy condensed headline with a light serif counterpoint, setting up the tension between serious craft and an easy experience, and making it the backbone of every execution.",
      ],
      media: [
        { kind: "image", src: "/work/tobys-estate.webp", alt: "Toby’s Estate “Specialty Coffee, Simplified.” print advertisement" },
        {
          kind: "image",
          src: "/case-studies/tobys-estate/lead.webp",
          alt: "Barista in a green apron pouring latte art into a black cup",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["Bringing the Barista", "Through the Screen"],
      body: [
        "The key visual places the barista behind a phone screen, handing over a fresh bag of beans. It makes the promise literal: the same people and the same coffee, now one tap away.",
        "Online, the ordering experience follows the campaign’s clarity, leading with a short list of signature blends, simple subscription options and a first-order incentive that turns curiosity into a habit.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/tobys-estate/cover.webp",
          url: "tobysestate.com.kw",
          nav: ["Shop Coffee", "Subscribe", "Cafés", "Brew Guides"],
          headline: "Specialty coffee, simplified.",
          cta: "Start subscribing",
          alt: "Toby’s Estate online shop hero with a flat white and coffee bag",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Owning the First", "Coffee of the Day"],
      body: [
        "Social content focuses on the quiet moment that home delivery makes possible: the first cup by the window, before the day begins. It positions the subscription as a better morning rather than a transaction.",
        "Every post links back to the same offer and handle, so print, social and the app work as one connected funnel rather than separate channels.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/tobys-estate/duo.webp",
          handle: "@tobysestate.kw",
          caption: "Your roastery, delivered. First cup’s on the house (almost).",
          alt: "Man drinking coffee from a black cup by a sunlit window",
          ai: true,
        },
        { kind: "poster", line: "Specialty coffee, simplified.", alt: "Toby’s Estate campaign poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Designing the Delivery", "as Part of the Ritual"],
      body: [
        "When the roastery arrives by courier, the box becomes the café. A dark, minimal mailer, carefully packed bags and a few brewing essentials keep the experience feeling considered from the moment it is opened.",
        "The restrained black and paper-white palette carries across print, packaging and screen, keeping the brand recognisable wherever the customer meets it.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/tobys-estate/feature.webp",
          alt: "Black coffee subscription box with bags, cup and pour-over dripper",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "The campaign gives Toby’s Estate a clear, repeatable way to talk about home ordering — one idea that links print, social and digital ordering, and makes specialty coffee feel as approachable at home as it does at the counter.",
  more: ["mylk-maam", "cheesecake-factory"],
  draft: true,
  review: [
    "Scope inferred from the thumbnail (a print ad: “Specialty Coffee, Simplified.”, QR code, app store icons, “Subscribe and get 10% off your first order”, @tobysestate.kw). Assumed CRACKWITS delivered campaign concept, creative direction, digital marketing and social — confirm.",
    "Assumed the market is Kuwait (from the .kw handle); no launch date stated.",
    "The 10% first-order offer is paraphrased as a “first-order incentive” — confirm whether it can be mentioned explicitly.",
    "Online shop domain “tobysestate.com.kw”, nav items and CTA are placeholders; assumed an app and web ordering experience exists but not that CRACKWITS built it.",
    "The delivery box/packaging section is illustrative — assumed, not evidenced in the thumbnail.",
    "Palette sampled from the thumbnail (black cup, green apron, white paper, peach surface, red book edge); typeface Archivo Black chosen to echo the condensed headline.",
  ],
};

export default tobysEstate;
