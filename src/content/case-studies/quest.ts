import type { CaseStudy } from "../types";

const quest: CaseStudy = {
  slug: "quest",
  name: "QUEST",
  category: "ENTERTAINMENT",
  thumbnail: "/work/quest.webp",
  subtitle: "A revamped brand, website and social presence for a park where every visit is a challenge.",
  cover: {
    src: "/case-studies/quest/cover.webp",
    alt: "Dark obstacle arena lit by geometric neon light installations",
    ai: true,
  },
  overview: [
    "QUEST is an entertainment park built around fitness and mental agility. Guests take on safe, fast-moving obstacles inside themed arenas, each one linked to the next like an urban playground designed to test body, mind and nerve.",
    "The park already had an identity installed on site, but its brand assets, website and social channels were not keeping pace with the energy inside the arenas. Organic reach on social was slipping, and the online experience did little to convey what it actually feels like to play.",
    "CRACKWITS took on the full revamp: uplifting the brand while bridging it with the existing in-park branding, designing and developing a new website from scratch, and running social media built around awareness, footfall and competition.",
  ],
  services: ["Strategy", "Brand Identity", "UX/UI", "Web Development", "Social Media"],
  stats: [
    { value: null, label: "Social Engagement" },
    { value: null, label: "Website Visits" },
    { value: null, label: "Tournament Entries" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "QUEST",
      typeface: "Unbounded",
      palette: [
        { name: "Arena Black", hex: "#0B0710" },
        { name: "Signal Red", hex: "#FF1E50" },
        { name: "Ultra Violet", hex: "#7B2FF2" },
        { name: "Amber Glow", hex: "#F5B700" },
        { name: "Circuit Blue", hex: "#2E6BFF" },
      ],
      line: "Ready. Set. Quest!",
      pattern: "diagonal",
      voice: ["Energetic", "Playful", "Challenging", "Bold"],
    },
    images: ["/case-studies/quest/duo.webp", "/case-studies/quest/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Lifting the Brand", "Without Losing the Park"],
      body: [
        "QUEST’s identity was already built into the venue, so the revamp had to work alongside it rather than replace it. We kept the recognisable core and rebuilt what sits around it: a refreshed colour palette, sharper graphic elements and updated typography that let the new assets sit naturally next to the signage and light installations already in the arenas.",
      ],
      media: [
        { kind: "image", src: "/work/quest.webp", alt: "QUEST park interior with neon brand graphics above the arenas" },
        {
          kind: "image",
          src: "/case-studies/quest/lead.webp",
          alt: "Friends racing across a glowing light-tile challenge floor",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["A Brand You Can Hold", "and a Sound You Can Hear"],
      body: [
        "The refreshed system was carried into a set of brand collaterals, from the objects guests pick up at the start of a session to the materials that promote the park outside it. The same shapes and colour codes keep every piece tied to the arenas.",
        "We also composed a sonic signature for QUEST, giving the brand an audio cue that works in videos, ads and in the park itself, so it can be recognised before a single logo appears.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/quest/feature.webp",
          alt: "QUEST collaterals: game cards, wristbands, a token and a chevron-pattern hoodie on a black surface",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["Turning Followers", "Into Challengers"],
      body: [
        "Organic engagement was declining, so social had to give people a reason to act, not just scroll. We kept the channels current with trends and platform changes, and ran awareness and footfall campaigns designed to bring people through the doors.",
        "Regular tournaments and competitions became the backbone of the calendar, giving the community something to train for, share and come back to, and lifting engagement along the way.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/quest/duo.webp",
          handle: "@questkw",
          caption: "This weekend’s tournament is open. Think you can top the leaderboard?",
          alt: "Young woman smiling under magenta and amber neon light after a challenge",
          ai: true,
        },
        { kind: "poster", line: "Ready. Set. Quest!", alt: "QUEST brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Bringing the Rush", "to the First Click"],
      body: [
        "The new website was designed and developed from scratch to capture QUEST’s excitement without overwhelming visitors. It opens on video of real guests in the arenas, so the feeling of the park lands the moment the page loads.",
        "Beyond that first impression, the remaining sections stay simple, bold and colourful, giving visitors a clear path from discovering the challenges to planning their visit.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/quest/experience.webp",
          alt: "Guests checking in at a neon-lit reception before entering the arenas",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "QUEST now has a brand that feels as energetic online as it does inside the arenas: a refreshed identity that sits comfortably with the park’s existing branding, a sonic signature, a website that leads with real moments, and a social calendar built around competition that keeps people coming back.",
  more: ["tekzone", "special-events"],
  draft: true,
  review: [
    "Business description (fitness and cognitive challenge park, inter-connected arenas, urban-playground concept) from crackwits.com case study.",
    "Scope (brand revamp bridging existing park branding, palette/graphics/typography, sonic signature, collaterals, website from scratch, social media) from crackwits.com case study.",
    "Website opening on real-guest video and social tournaments/competitions, awareness and footfall campaigns from crackwits.com case study.",
    "Brand punchline 'Ready. Set. Quest!' from crackwits.com case study.",
    "Location/market not stated in the reference — copy kept location-neutral; handle '@questkw' assumes Kuwait. Confirm handle.",
    "No domain given in the reference (scrape shows an unrelated footer link), so no browser mockup.",
    "Collateral items (game cards, wristbands, token, hoodie) shown in the feature image are illustrative.",
    "Palette sampled from the thumbnail; typeface 'Unbounded' is a stand-in.",
    "Stat labels are suggestions; values intentionally empty.",
    "All case-study images except the thumbnail are AI-generated placeholders.",
  ],
};

export default quest;
