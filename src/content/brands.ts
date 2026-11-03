import type { Category } from "./types";

/**
 * Order mirrors the live /work grid. Categories were corrected for 965SMILE,
 * Sunrise WATERPARK, POINTE ANGLAISE, LILLAJAR, TEKZONE and HOMEY WAYS.
 */
/**
 * `hover` is the image cross-faded in when a /work card is hovered: the case
 * study's banner, so the same picture then grows into the case study on click.
 */
export const BRANDS: { slug: string; name: string; category: Category; thumbnail: string; hover: string }[] = [
  { slug: "rawbank", name: "RAWBANK", category: "FINANCE", thumbnail: "/work/rawbank.webp", hover: "/work/rawbank-cover.webp" },
  { slug: "mylk-maam", name: "MYLK MA’AM", category: "F&B", thumbnail: "/work/milkman.webp", hover: "/case-studies/mylk-maam/cover.webp" },
  { slug: "coya", name: "COYA", category: "F&B", thumbnail: "/work/coya.webp", hover: "/case-studies/coya/cover.webp" },
  { slug: "trs-polymers", name: "TRS Polymers", category: "INDUSTRIAL", thumbnail: "/selected-work/trs-polymers.webp", hover: "/case-studies/trs-polymers/cover.webp" },
  { slug: "pointe-anglaise", name: "POINTE ANGLAISE", category: "REAL ESTATE", thumbnail: "/work/pointe-anglaise.webp", hover: "/case-studies/pointe-anglaise/cover.webp" },
  { slug: "mainstage-signature", name: "MAINSTAGE SIGNATURE", category: "ENTERTAINMENT", thumbnail: "/work/the-same-maker.png", hover: "/case-studies/mainstage-signature/cover.webp" },
  { slug: "cubix", name: "CUBIX", category: "INDUSTRIAL", thumbnail: "/work/overcubic.webp", hover: "/case-studies/cubix/cover.webp" },
  { slug: "kidzania", name: "KidZania", category: "ENTERTAINMENT", thumbnail: "/work/kidszania.webp", hover: "/case-studies/kidzania/cover.webp" },
  { slug: "sunrise-waterpark", name: "Sunrise WATERPARK", category: "ENTERTAINMENT", thumbnail: "/work/sunrise.webp", hover: "/case-studies/sunrise-waterpark/cover.webp" },
  { slug: "illicocash", name: "ILLICOCASH", category: "FINANCE", thumbnail: "/work/illicocash.webp", hover: "/case-studies/illicocash/cover.webp" },
  { slug: "buildoser", name: "BUILDOSER", category: "REAL ESTATE", thumbnail: "/work/buildoser.webp", hover: "/case-studies/buildoser/cover.webp" },
  { slug: "tobys-estate", name: "TOBY'S ESTATE", category: "F&B", thumbnail: "/work/tobys-estate.webp", hover: "/case-studies/tobys-estate/cover.webp" },
  { slug: "965smile", name: "965SMILE", category: "HEALTHCARE", thumbnail: "/work/965smile.webp", hover: "/case-studies/965smile/cover.webp" },
  { slug: "burj-al-tojjar", name: "BURJ AL TOJJAR", category: "REAL ESTATE", thumbnail: "/work/burj-al-tojjar.webp", hover: "/case-studies/burj-al-tojjar/cover.webp" },
  { slug: "ogl", name: "OGL", category: "INDUSTRIAL", thumbnail: "/work/over-glass.webp", hover: "/case-studies/ogl/cover.webp" },
  { slug: "ovo", name: "OVO", category: "F&B", thumbnail: "/work/ovo.webp", hover: "/case-studies/ovo/cover.webp" },
  { slug: "quest", name: "QUEST", category: "ENTERTAINMENT", thumbnail: "/work/quest.webp", hover: "/case-studies/quest/cover.webp" },
  { slug: "special-events", name: "SPECIAL EVENTS", category: "ENTERTAINMENT", thumbnail: "/work/special-events.webp", hover: "/case-studies/special-events/cover.webp" },
  { slug: "tekzone", name: "TEKZONE", category: "ENTERTAINMENT", thumbnail: "/work/tekzone.webp", hover: "/case-studies/tekzone/cover.webp" },
  { slug: "pizza-express", name: "PIZZA EXPRESS", category: "F&B", thumbnail: "/work/pizza-express.webp", hover: "/case-studies/pizza-express/cover.webp" },
  { slug: "lillajar", name: "LILLAJAR", category: "RETAIL", thumbnail: "/work/lillajar.webp", hover: "/case-studies/lillajar/cover.webp" },
  { slug: "homey-ways", name: "HOMEY WAYS", category: "HOME SERVICES", thumbnail: "/work/homey-ways.webp", hover: "/case-studies/homey-ways/cover.webp" },
  { slug: "cheesecake-factory", name: "The Cheesecake Factory", category: "F&B", thumbnail: "/work/cheesecake-factory.webp", hover: "/case-studies/cheesecake-factory/cover.webp" },
  { slug: "kcamp", name: "KCAMP", category: "ENTERTAINMENT", thumbnail: "/work/kcamp.webp", hover: "/case-studies/kcamp/cover.webp" },
  { slug: "twig", name: "TWIG", category: "FINANCE", thumbnail: "/work/twig.webp", hover: "/case-studies/twig/cover.webp" },
];

export const WORK_FILTERS = [
  "All",
  "F&B",
  "Entertainment",
  "Finance",
  "Real Estate",
  "Industrial",
  "Healthcare",
  "Retail",
  "Home Services",
] as const;
