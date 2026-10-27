import type { CaseStudy } from "../types";

const ogl: CaseStudy = {
  slug: "ogl",
  name: "OGL",
  category: "INDUSTRIAL",
  thumbnail: "/work/over-glass.webp",
  subtitle: "A clear digital showroom for heavy equipment, trucks and generators.",
  cover: {
    src: "/case-studies/ogl/cover.webp",
    alt: "Heavy machinery lined up in an equipment yard at first light",
    ai: true,
  },
  overview: [
    "OGL supplies heavy equipment, trucks and generators, and supports them with dealership, service and spare-parts operations.",
    "Its customers are contractors, fleet managers and procurement teams who need to compare machines, check parts availability and reach the right department quickly. The previous online presence did not reflect the scale of the business or the range it represents.",
    "CRACKWITS designed and built a new website that works like a digital showroom: product-led, easy to scan and built to turn visits into qualified enquiries.",
  ],
  services: ["Strategy", "UX/UI", "Web Development", "Content Production", "SEO & SEM"],
  stats: [
    { value: null, label: "Monthly Website Sessions" },
    { value: null, label: "Product Enquiries" },
    { value: null, label: "Spare-Parts Requests" },
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
      line: "Machinery that moves projects forward.",
      pattern: "grid",
      voice: ["Dependable", "Direct", "Capable", "Expert"],
    },
    images: ["/case-studies/ogl/duo.webp", "/case-studies/ogl/lead.webp"],
  },
  sections: [
    {
      layout: "lead",
      title: ["Letting the Machines", "Make the First Impression"],
      body: [
        "Heavy equipment is bought on capability and trust, so the design steps back. Full-bleed, close-cropped photography of hydraulics, engines and components sits on near-black, with clean white typography and one blue reserved for action. Partner manufacturers get their own strip directly below the hero, so visitors immediately see the range OGL represents.",
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
      title: ["Structuring a Complex Range", "Around How Buyers Search"],
      body: [
        "The information architecture follows the customer journey rather than the org chart. Products, Services, Dealerships and Spare Parts each have a direct route from the main navigation, and a persistent Inquire button keeps the next step one click away.",
        "Product pages lead with the specifications buyers compare first, then application imagery and a pre-filled enquiry, cutting back-and-forth between the sales team and the customer.",
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
      title: ["Putting the People", "Behind the Equipment Forward"],
      body: [
        "Machines are only as good as the teams that service them. Content focuses on technicians, workshops and after-sales support, giving OGL a human side that its competitors rarely show.",
        "A recruitment entry point sits directly in the header, so the site supports hiring as well as sales and presents OGL as a place where skilled people want to work.",
      ],
      media: [
        {
          kind: "phone",
          src: "/case-studies/ogl/duo.webp",
          handle: "@ogl",
          caption: "Built to work. Backed by experts.",
          alt: "Technician servicing a heavy truck engine in a workshop",
          ai: true,
        },
        { kind: "poster", line: "Machinery that moves projects forward.", alt: "OGL brand poster" },
      ],
    },
    {
      layout: "feature",
      title: ["Carrying One Visual Language", "From Screen to Site"],
      body: [
        "The rules set for the website (dark grounds, white type, a single accent blue) extend to fleet livery, yard signage and printed spec sheets. A machine on a job site and the same model on a product page now look like they come from the same company.",
        "A modular component library behind the site lets the OGL team add new models, brands and parts categories without redesigning pages.",
      ],
      media: [
        {
          kind: "image",
          src: "/case-studies/ogl/feature.webp",
          alt: "Dark-liveried trucks parked in a modern equipment yard",
          ai: true,
        },
      ],
    },
  ],
  outcome:
    "OGL now has a digital showroom that matches the scale of its operations. The website gives contractors and fleet managers a faster way to find the right machine or part, and gives OGL a flexible platform that can grow with every new brand and service line it adds.",
  more: ["tekzone", "trs-polymers"],
  draft: true,
  review: [
    "Thumbnail file is named over-glass.png; content written for OGL as listed in brands.ts. Confirm brand name.",
    "Logo descriptor reads roughly 'Heavy Equipment, Trucks & Generators'; business description based on that. Confirm.",
    "Assumed CRACKWITS delivered strategy, UX/UI, web development and content. SEO & SEM, fleet livery, yard signage and spec sheets are assumed. Confirm scope.",
    "Partner manufacturers on the site strip (Sitrak, Shantui, Weichai, Cemo) are not named in copy; the strip is mentioned generally. Confirm the dealership relationships before naming them.",
    "Domain ogl.com and handle @ogl are placeholders; real domain is unknown. Replace.",
    "Navigation (About, Products, Services, Dealerships, Spare Parts, We're Hiring, Inquire) and hero 'World-Class Machinery' taken from the thumbnail.",
    "Market/country not stated; copy kept location-neutral.",
    "Palette sampled from the website (black, white, accent blue ~#2350D0); hex values approximate. Manrope chosen as a close match to the site's sans.",
    "Brand line 'Machinery that moves projects forward' and section on technicians/after-sales are new copy and assumptions.",
  ],
};

export default ogl;
