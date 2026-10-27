import type { Category } from "./types";

/**
 * Order mirrors the live /work grid. Categories were corrected for 965SMILE,
 * Sunrise WATERPARK, POINTE ANGLAISE, LILLAJAR, TEKZONE and HOMEY WAYS.
 */
export const BRANDS: { slug: string; name: string; category: Category; thumbnail: string }[] = [
  { slug: "rawbank", name: "RAWBANK", category: "FINANCE", thumbnail: "/work/rawbank.webp" },
  { slug: "mylk-maam", name: "MYLK MA’AM", category: "F&B", thumbnail: "/work/milkman.webp" },
  { slug: "coya", name: "COYA", category: "F&B", thumbnail: "/work/coya.webp" },
  { slug: "trs-polymers", name: "TRS Polymers", category: "INDUSTRIAL", thumbnail: "/selected-work/trs-polymers.webp" },
  { slug: "pointe-anglaise", name: "POINTE ANGLAISE", category: "REAL ESTATE", thumbnail: "/work/pointe-anglaise.webp" },
  { slug: "mainstage-signature", name: "MAINSTAGE SIGNATURE", category: "ENTERTAINMENT", thumbnail: "/work/the-same-maker.png" },
  { slug: "cubix", name: "CUBIX", category: "INDUSTRIAL", thumbnail: "/work/overcubic.webp" },
  { slug: "kidzania", name: "KidZania", category: "ENTERTAINMENT", thumbnail: "/work/kidszania.webp" },
  { slug: "sunrise-waterpark", name: "Sunrise WATERPARK", category: "ENTERTAINMENT", thumbnail: "/work/sunrise.webp" },
  { slug: "illicocash", name: "ILLICOCASH", category: "FINANCE", thumbnail: "/work/illicocash.webp" },
  { slug: "buildoser", name: "BUILDOSER", category: "REAL ESTATE", thumbnail: "/work/buildoser.webp" },
  { slug: "tobys-estate", name: "TOBY'S ESTATE", category: "F&B", thumbnail: "/work/tobys-estate.webp" },
  { slug: "965smile", name: "965SMILE", category: "HEALTHCARE", thumbnail: "/work/965smile.webp" },
  { slug: "burj-al-tojjar", name: "BURJ AL TOJJAR", category: "REAL ESTATE", thumbnail: "/work/burj-al-tojjar.webp" },
  { slug: "ogl", name: "OGL", category: "INDUSTRIAL", thumbnail: "/work/over-glass.webp" },
  { slug: "ovo", name: "OVO", category: "F&B", thumbnail: "/work/ovo.webp" },
  { slug: "quest", name: "QUEST", category: "ENTERTAINMENT", thumbnail: "/work/quest.webp" },
  { slug: "special-events", name: "SPECIAL EVENTS", category: "ENTERTAINMENT", thumbnail: "/work/special-events.webp" },
  { slug: "tekzone", name: "TEKZONE", category: "ENTERTAINMENT", thumbnail: "/work/tekzone.webp" },
  { slug: "pizza-express", name: "PIZZA EXPRESS", category: "F&B", thumbnail: "/work/pizza-express.webp" },
  { slug: "lillajar", name: "LILLAJAR", category: "RETAIL", thumbnail: "/work/lillajar.webp" },
  { slug: "homey-ways", name: "HOMEY WAYS", category: "HOME SERVICES", thumbnail: "/work/homey-ways.webp" },
  { slug: "cheesecake-factory", name: "The Cheesecake Factory", category: "F&B", thumbnail: "/work/cheesecake-factory.webp" },
  { slug: "kcamp", name: "KCAMP", category: "ENTERTAINMENT", thumbnail: "/work/kcamp.webp" },
  { slug: "twig", name: "TWIG", category: "FINANCE", thumbnail: "/work/twig.webp" },
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
