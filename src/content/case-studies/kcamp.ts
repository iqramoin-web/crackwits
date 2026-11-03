import type { CaseStudy } from "../types";

const kcamp: CaseStudy = {
  slug: "kcamp",
  name: "KCAMP",
  category: "ENTERTAINMENT",
  thumbnail: "/work/kcamp.webp",
  subtitle: "Refreshing a much-loved Kuwait children’s camp for the seasons ahead.",
  cover: {
    src: "/case-studies/kcamp/cover.webp",
    alt: "Children in orange camp t-shirts running across a sunny courtyard",
    ai: true,
  },
  overview: [
    "For more than two decades, KCamp has been a fun, friendly seasonal camp in Kuwait for children aged 3 to 15 — a place to get outdoors, try new things, make friends and belong to a community.",
    "Its programme is built around three kinds of activity, Move, Play and Create, run by trained counsellors in a safe environment that encourages teamwork, independence, leadership and social skills. As the camp kept growing and reaching new milestones, it needed a brand, strategy and digital presence that could keep pace.",
    "CRACKWITS revamped the brand, set a strategy for each new season, designed and built a website with online registration, and took over social media — from content and boosting to on-ground coverage during camp.",
  ],
  services: ["Brand Revamp", "Strategy", "UX/UI", "Web Development", "Social Media"],
  stats: [
    { value: null, label: "Online Registrations" },
    { value: null, label: "Returning Campers" },
    { value: null, label: "Seasonal Social Reach" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "K·Camp",
      typeface: "Bricolage Grotesque",
      palette: [
        { name: "Coral Red", hex: "#E8463A" },
        { name: "Camp Orange", hex: "#F7941D" },
        { name: "Sky Blue", hex: "#58B7E6" },
        { name: "Leaf Green", hex: "#6CBF4B" },
        { name: "Lavender", hex: "#8C7BD6" },
      ],
      line: "Move. Play. Create.",
      pattern: "dots",
      voice: ["Funky", "Vibrant", "Positive", "Welcoming"],
    },
    images: ["/case-studies/kcamp/duo.webp", "/case-studies/kcamp/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["A Funkier Brand", "That Still Feels Familiar"],
      body: [
        "KCamp needed a more unified identity that reflects its values and can grow a little every season. CRACKWITS revamped the logo, iconography, banners, stationery, collateral and advertising templates with a bold, playful energy — vibrant enough to excite children, yet familiar and welcoming to returning campers, parents, counsellors and future partners alike.",
      ],
      media: [
        { kind: "image", src: "/work/kcamp.webp", alt: "KCamp website shown on a laptop" },
        {
          kind: "image",
          src: "/case-studies/kcamp/lead.webp",
          alt: "Children in orange t-shirts doing a craft project with a counsellor",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["A Website Parents", "Can Sign Up From"],
      body: [
        "The website is KCamp’s online hub: it builds awareness, introduces new activities, shares photos from each season and handles registrations.",
        "Its light-hearted, straightforward design puts the camp’s values, campers, team and activities up front, with a Register Now button that stays within reach on every page so parents can sign up the moment they decide.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/kcamp/cover.webp",
          url: "kcamp.com.kw",
          nav: ["Age Groups", "Programs", "Activities", "Gallery"],
          headline: "Kuwait Camp",
          cta: "Register Now",
          alt: "KCamp website hero with children running outdoors",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Covering Camp Life", "as It Happens"],
      body: [
        "CRACKWITS gave the feed a harmonious look and created content that shows off KCamp’s friendly community and builds excitement for each new season. The team managed seasonal content calendars, daily posting and boosting of camp, occasion and advertising posts.",
        "During camp, daily coverage captured stories of activities, campers and sponsors, backed by prompt support online and on the ground and supervision of regular photo and video shoots.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/kcamp/duo.webp",
          handle: "@kcampkw",
          caption: "Today’s Create session: rockets ready for launch.",
          alt: "Boy in an orange t-shirt holding up a handmade paper rocket",
          ai: true,
        },
        { kind: "poster", line: "Move. Play. Create.", alt: "KCamp brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["A Season Launch", "Across Every Channel"],
      body: [
        "Behind the creative sits a strategy to grow awareness, strengthen KCamp’s position in Kuwait, attract new campers and keep existing families coming back — speaking to both individual and corporate audiences across a wide age range.",
        "Each new season is launched with one consistent style online and offline, carried from campaign posts through to the kits, merchandise and collateral children and parents see at camp.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/kcamp/feature.webp",
          alt: "Camp welcome kit with orange t-shirt, drawstring bag, bottle, cap and lanyard",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "KCamp now has a brand, strategy and digital presence that grow with it season after season — making it easy for families to discover the camp, register online and follow the fun, while staying true to the spirit that has kept children coming back for over 20 years.",
  more: ["kidzania", "sunrise-waterpark"],
  draft: true,
  review: [
    "From crackwits.com case study: Kuwait seasonal camp for ages 3–15, running 20+ years, activities grouped as Move / Play / Create, trained counsellors; scope = brand revamp (logo, iconography, banners, stationery, collateral, ad templates), seasonal strategy (individual and corporate audiences, online and offline), website with registration and season galleries, social media (calendars, daily posting and boosting, on-ground coverage, photo/video supervision).",
    "Board line 'Move. Play. Create.' uses the camp's activity categories from the reference; the reference punchline (inspiring children's cognitive and physical development) is not used verbatim — confirm.",
    "'25 years' in the thumbnail logo vs 'over 20 years' in the reference — copy says 'over 20 years'; confirm current figure.",
    "Domain 'kcamp.com.kw' and handle '@kcampkw' are placeholders (reference shows only a shared-footer link); nav shortened from the thumbnail.",
    "Camp kit/merchandise in section 4 is an illustrative application of the collateral work.",
    "Palette sampled from the logo and lavender CTA; Bricolage Grotesque is a stand-in.",
    "Stat labels are suggestions; values intentionally empty.",
    "All four case-study images are AI-generated placeholders (children shown are AI-generated, not camp attendees).",
  ],
};

export default kcamp;
