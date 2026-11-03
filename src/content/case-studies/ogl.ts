import type { CaseStudy } from "../types";

const ogl: CaseStudy = {
  slug: "ogl",
  name: "OGL",
  category: "INDUSTRIAL",
  thumbnail: "/work/over-glass.webp",
  subtitle: "A full brand overhaul for one of Kuwait’s leading heavy-machinery suppliers.",
  cover: {
    src: "/case-studies/ogl/cover.webp",
    alt: "Heavy construction machinery lined up in an equipment yard at first light",
    ai: true,
  },
  overview: [
    "OGL supplies heavy-grade construction machinery and services across Kuwait. Its range runs from trucks, bulldozers and excavators to generators and tower lights, backed by a stock of more than 300,000 spare parts, specialist emergency-response and hazardous-material equipment, and an after-sales team working on site and at its facility in Mina Abdallah.",
    "The business had grown into a one-stop partner for construction sites, but its brand did not show that breadth. In a crowded market, OGL needed to stand apart while staying professional and approachable, and give clients a clear, accessible way to understand everything it offers.",
    "CRACKWITS delivered a complete brand overhaul: a cohesive new identity, a teaser and full website with CMS and SEO built in, and a comprehensive company profile designed for both print and digital use.",
  ],
  services: ["Strategy", "Brand Identity", "UX/UI", "Web Development", "Company Profile"],
  stats: [
    { value: null, label: "Product Categories Online" },
    { value: null, label: "Website Enquiries" },
    { value: null, label: "Organic Search Visibility" },
  ],
  brandBoard: {
    kind: "tokens",
    tokens: {
      wordmark: "OGL",
      typeface: "Manrope",
      palette: [
        { name: "Engine Black", hex: "#111214" },
        { name: "Hydraulic Grey", hex: "#3C4046" },
        { name: "Inquiry Blue", hex: "#2350D0" },
        { name: "Concrete", hex: "#C9CBCE" },
        { name: "Chassis White", hex: "#FFFFFF" },
      ],
      line: "Construction efficiency, fully supported.",
      pattern: "grid",
      voice: ["Strong", "Reliable", "Professional", "Approachable"],
    },
    images: ["/case-studies/ogl/duo.webp", "/case-studies/ogl/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["An Identity Built", "to Carry Real Weight"],
      body: [
        "The new identity had to speak to OGL’s scale, its commitment to quality and the after-sales support behind every machine. We created a modern logo, colour scheme and set of visual elements that express strength and reliability, while keeping the brand approachable enough for the people who deal with OGL every day. The result gives the company one unified, professional face across every touchpoint.",
      ],
      media: [
        { kind: "image", src: "/work/over-glass.webp", alt: "OGL website on a laptop" },
        {
          kind: "image",
          src: "/case-studies/ogl/lead.webp",
          alt: "Close-up of a hydraulic cylinder and engine components on heavy machinery",
          ai: true,
        },
      ],
    },
    {
      layout: "feature",
      title: ["From Teaser Page", "to Full Digital Showroom"],
      body: [
        "A teaser site held OGL’s place online while the full website was built. The final platform had to cover a huge range of products and services without becoming hard to navigate, so we structured it around clear routes into products, services, dealerships and spare parts, with a fully responsive design for every device.",
        "A content management system lets the OGL team keep listings current without outside help, and SEO is built into the structure to help contractors and buyers find the company when they search.",
      ],
      media: [
        {
          kind: "browser",
          src: "/case-studies/ogl/cover.webp",
          url: "ogl.com",
          nav: ["Products", "Services", "Dealerships", "Spare Parts"],
          headline: "World-class machinery.",
          cta: "Inquire",
          alt: "OGL website hero",
          ai: true,
        },
      ],
    },
    {
      layout: "duo",
      title: ["A Company Profile", "for Every Meeting"],
      body: [
        "OGL needed a single document that could explain its capabilities, product range and service commitment to prospective clients and partners. We designed a detailed company profile that balances information with strong visuals, so it stays engaging without feeling like a catalogue.",
        "The profile was built to work in print and on screen, giving the sales team something to hand over in person and share digitally after a call.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/ogl/duo.webp",
          handle: "@oglkw",
          caption: "Trained engineers, on site or in our workshop. Support that keeps your project moving.",
          alt: "Technician servicing a heavy truck engine in a workshop",
          ai: true,
        },
        { kind: "poster", line: "Construction efficiency, fully supported.", alt: "OGL brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Telling the Whole Story", "Behind the Machines"],
      body: [
        "Across the brand, website and profile, the message stays consistent: OGL is not just a supplier of equipment, but a partner that keeps sites running. Machinery, spare parts, emergency-response equipment and after-sales service are presented as one connected offer.",
        "That consistency helps OGL strengthen its market presence and gives clients and stakeholders detailed information whenever and however they need it.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/ogl/feature.webp",
          alt: "Dark trucks and heavy equipment parked in a modern equipment yard",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "OGL now presents itself with the same strength it brings to the construction site. A unified identity, an easy-to-update website built for search and a company profile for print and digital give the team the tools to communicate its full range and stand out in a competitive market.",
  more: ["tekzone", "trs-polymers"],
  draft: true,
  review: [
    "Business description (heavy-grade construction machinery in Kuwait, 300,000+ spare parts, emergency-response and hazmat equipment, after-sales team, Mina Abdallah facility) from crackwits.com case study.",
    "Scope (brand identity overhaul, teaser and full website with CMS and SEO, company profile for print and digital) from crackwits.com case study.",
    "Brand line 'Construction efficiency, fully supported.' is a short paraphrase of the crackwits.com punchline — confirm or replace.",
    "Social media was not part of the reference scope; the phone mockup is framed as digital sharing of profile content — consider swapping it for a profile spread image.",
    "Domain 'ogl.com' and handle '@oglkw' are placeholders; the reference gives no domain. Replace.",
    "Website navigation and hero 'World-Class Machinery' taken from the thumbnail.",
    "Partner manufacturers visible on the site (Sitrak, Shantui, Weichai, Cemo) are not named in copy.",
    "Palette sampled from the website (black, white, accent blue ~#2350D0); Manrope chosen as a close match.",
    "Stat labels are suggestions; values intentionally empty.",
    "All case-study images except the thumbnail are AI-generated placeholders.",
  ],
};

export default ogl;
