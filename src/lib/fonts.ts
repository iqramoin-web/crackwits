import type { BoardTypeface } from "@/content/types";

// Self-hosted (@fontsource) typefaces for code-built brand boards. The CSS is
// imported by the case-study page only, and each font file is fetched by the
// browser only when text is actually rendered in it.
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/dm-serif-display/400.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/syne/400.css";
import "@fontsource/syne/600.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/600.css";
import "@fontsource/archivo-black/400.css";
import "@fontsource/unbounded/400.css";
import "@fontsource/unbounded/600.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/600.css";
import "@fontsource/bricolage-grotesque/400.css";
import "@fontsource/bricolage-grotesque/600.css";
import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/600.css";

const SERIF = "Georgia, serif";
const SANS = "Helvetica, Arial, sans-serif";

export const BOARD_FONTS: Record<BoardTypeface, string> = {
  Montserrat: `"Montserrat", ${SANS}`,
  "Playfair Display": `"Playfair Display", ${SERIF}`,
  "DM Serif Display": `"DM Serif Display", ${SERIF}`,
  "Cormorant Garamond": `"Cormorant Garamond", ${SERIF}`,
  Fraunces: `"Fraunces", ${SERIF}`,
  "Space Grotesk": `"Space Grotesk", ${SANS}`,
  Syne: `"Syne", ${SANS}`,
  Manrope: `"Manrope", ${SANS}`,
  "Archivo Black": `"Archivo Black", ${SANS}`,
  Unbounded: `"Unbounded", ${SANS}`,
  Outfit: `"Outfit", ${SANS}`,
  "Bricolage Grotesque": `"Bricolage Grotesque", ${SANS}`,
  "IBM Plex Sans Arabic": `"IBM Plex Sans Arabic", ${SANS}`,
};
