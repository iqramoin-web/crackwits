import type { CSSProperties } from "react";
import type { BrandTokens } from "@/content/types";

/** Hex colour + alpha (0–1) → 8-digit hex. */
function alpha(hex: string, a: number) {
  const value = hex.replace("#", "");
  const full = value.length === 3 ? value.split("").map((c) => c + c).join("") : value.slice(0, 6);
  return `#${full}${Math.round(a * 255)
    .toString(16)
    .padStart(2, "0")}`;
}

/** CSS-only graphic devices used on brand boards, posters and phone stages. */
export function patternStyle(pattern: BrandTokens["pattern"], color: string, opacity = 1): CSSProperties {
  const c = alpha(color, opacity);
  switch (pattern) {
    case "stripes":
      return { backgroundImage: `repeating-linear-gradient(90deg, ${c} 0 14%, transparent 14% 28%)` };
    case "diagonal":
      return { backgroundImage: `repeating-linear-gradient(135deg, ${c} 0 6%, transparent 6% 14%)` };
    case "dots":
      return { backgroundImage: `radial-gradient(${c} 22%, transparent 24%)`, backgroundSize: "9% 9%" };
    case "grid":
      return {
        backgroundImage: `linear-gradient(${c} 1.5px, transparent 1.5px), linear-gradient(90deg, ${c} 1.5px, transparent 1.5px)`,
        backgroundSize: "12% 12%",
      };
    case "arcs":
      return {
        backgroundImage: `radial-gradient(circle at 0 100%, transparent 38%, ${c} 38.5% 46%, transparent 46.5% 60%, ${c} 60.5% 68%, transparent 68.5%)`,
        backgroundSize: "34% 34%",
      };
    case "waves":
      return {
        backgroundImage: `radial-gradient(ellipse 60% 40% at 50% 0, transparent 70%, ${c} 71% 85%, transparent 86%)`,
        backgroundSize: "18% 12%",
      };
  }
}
