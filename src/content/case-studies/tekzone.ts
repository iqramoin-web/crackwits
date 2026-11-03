import type { CaseStudy } from "../types";

const tekzone: CaseStudy = {
  slug: "tekzone",
  name: "TEKZONE",
  category: "ENTERTAINMENT",
  thumbnail: "/work/tekzone.webp",
  subtitle: "A bold, playful digital home for a futuristic family entertainment centre.",
  cover: {
    src: "/case-studies/tekzone/cover.webp",
    alt: "Futuristic family entertainment centre with rides and arcade games glowing in violet and teal light",
    ai: true,
  },
  overview: [
    "TEKZONE is a futuristic family entertainment centre offering a wide range of rides and experiences for every age — a place where families and friends come together for fun that is quality, affordable and safe.",
    "The centre needed a website that captured its brand and made planning a visit effortless, and a social presence that could hold attention at a time when organic reach on every platform was falling.",
    "CRACKWITS designed and developed the TEKZONE website and took over its social media, building a steady stream of inventive posts and regular competitions that keep the community engaged between visits.",
  ],
  services: ["UX/UI", "Web Development", "Social Media", "Community Management"],
  stats: [
    { value: null, label: "Monthly Impressions" },
    { value: null, label: "Engagement Rate" },
    { value: null, label: "Competition Entries" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "TEKZONE",
      typeface: "Unbounded",
      palette: [
        { name: "Arena Black", hex: "#0E0A1A" },
        { name: "Neon Violet", hex: "#B455E6" },
        { name: "Pixel Teal", hex: "#3FD6D0" },
        { name: "Power-Up Green", hex: "#2EE86B" },
        { name: "Controller Blue", hex: "#2F4FD8" },
      ],
      line: "The fun never stands still.",
      pattern: "diagonal",
      voice: ["Bold", "Friendly", "Playful", "Energetic"],
    },
    images: ["/case-studies/tekzone/duo.webp", "/case-studies/tekzone/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Bold Enough for Gamers", "Without Looking Childish"],
      body: [
        "The brief for the website was clear: fun, friendly and bold enough to carry TEKZONE’s gaming spirit, but never so cartoonish that it lost older visitors. We leaned on the centre’s vivid colour palette and its robot mascot for energy, then balanced them with a clean layout and confident typography so the site feels exciting to children and credible to the parents planning the day.",
      ],
      media: [
        { kind: "image", src: "/work/tekzone.webp", alt: "TEKZONE robot mascot in the brand’s violet glow" },
        {
          kind: "image",
          src: "/case-studies/tekzone/lead.webp",
          alt: "Families playing at colourful arcade machines and rides under violet and teal light",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["A Website With", "Something for Every Age"],
      body: [
        "TEKZONE’s variety is its strength, so the site is organised around it. Visitors can browse the rides and experiences, see what suits each member of the family and find everything they need to plan a visit in a few taps.",
        "Colour, motion and imagery do the heavy lifting, while a simple structure keeps the journey seamless on any screen — an online extension of the excitement waiting inside the centre.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/tekzone/feature.webp",
          alt: "Visitors walking through a tunnel of neon arches past arcade games",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Thinking Outside the Feed", "to Beat the Algorithm"],
      body: [
        "With organic engagement falling across platforms, a steady schedule of product posts was never going to be enough. We kept the content plan close to current trends and algorithm changes, and pushed for unexpected topics and formats that give people a reason to stop scrolling.",
        "Many posts are built to invite a direct response — a question, a vote, a challenge — so the audience is taking part rather than simply watching.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/tekzone/duo.webp",
          handle: "@tekzone",
          caption: "New week, new challenge. Tag the friend you’d beat first.",
          alt: "Two friends celebrating a win in front of a glowing screen",
          ai: true,
        },
        { kind: "poster", line: "The fun never stands still.", alt: "TEKZONE brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Competitions That Keep", "the Momentum Going"],
      body: [
        "Frequent competitions became the heartbeat of TEKZONE’s channels. Each one gives followers a fresh reason to engage, share and plan their next visit, and turns the centre’s rides and experiences into something to talk about online.",
        "Together with the everyday content, they build a community that stays connected to TEKZONE long after the lights go down.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/tekzone/experience.webp",
          alt: "A racing-simulator ride glowing in violet light as visitors gather to watch",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "TEKZONE now has a website that reflects the energy of the centre and makes a visit easy to plan, alongside social channels built on fresh ideas and regular competitions — giving families and friends more reasons to engage online and come back for more.",
  more: ["quest", "ogl"],
  draft: true,
  review: [
    "From crackwits.com case study: TEKZONE is a futuristic family entertainment centre with rides and experiences for all ages; quality, affordable, safe.",
    "From crackwits.com case study: scope was website design and development plus social media management (inventive topics, direct-engagement posts, frequent competitions). Venue branding and activations removed.",
    "From crackwits.com case study: brief to be fun, friendly and bold but not childish; brand line 'The fun never stands still' (punchline).",
    "Market/location not stated in the reference; copy kept location-neutral.",
    "Robot mascot shown in the thumbnail — assumed to be an existing TEKZONE character, not created by CRACKWITS. Its name is not used.",
    "Handle '@tekzone' and the phone caption are assumed/invented. Website structure (rides, plan your visit) is assumed.",
    "Palette sampled from the thumbnail; hex values approximate. Unbounded chosen for a playful display feel.",
    "All section imagery is illustrative AI placeholder.",
  ],
};

export default tekzone;
