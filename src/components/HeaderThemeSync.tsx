"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const THEMED_PAGES = ["services-page", "briefus-page", "creative-output-page", "insights-page", "cs-case-study"];

const IMPLICIT_SECTIONS = [
  ".briefus-hero",
  ".creative-output-hero",
  ".creative-output-intro",
  ".creative-output-section",
  ".creative-output-closing",
  ".creative-output-more",
  ".creative-output-page .custom-footer",
  ".insights-page .work-hero",
  ".insights-page .custom-footer",
];

/**
 * Switches the fixed header between light/dark contrast depending on which
 * `[data-header-theme]` section currently sits behind it.
 */
export function HeaderThemeSync() {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.querySelector<HTMLElement>("main.site");
    const header = main?.querySelector<HTMLElement>(".header");
    if (!main || !header || !THEMED_PAGES.some((c) => main.classList.contains(c))) return;

    const sections = Array.from(main.querySelectorAll<HTMLElement>("[data-header-theme], [data-header-bg]"));
    for (const selector of IMPLICIT_SECTIONS) {
      main.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        if (sections.includes(el)) return;
        el.dataset.headerTheme = el.classList.contains("custom-footer") ? "dark" : "light";
        sections.push(el);
      });
    }
    sections.sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
    if (!sections.length) return;

    const update = () => {
      const probe = Math.min(
        Math.max(30, header.getBoundingClientRect().top + header.offsetHeight / 2),
        window.innerHeight - 1,
      );
      const active =
        sections.find((el) => {
          const r = el.getBoundingClientRect();
          return r.top <= probe && r.bottom > probe;
        }) ??
        sections.find((el) => el.getBoundingClientRect().top > probe) ??
        sections[sections.length - 1];
      const theme = active.dataset.headerTheme ?? active.dataset.headerBg ?? "light";
      const contrast = theme === "dark" || theme === "media-dark" ? "dark" : "light";
      header.dataset.headerContrast = contrast;
      header.dataset.headerSurface = theme.startsWith("media-") ? "media" : "solid";
      header.classList.toggle("header--light", contrast === "light");
      header.classList.toggle("header--dark", contrast === "dark");
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return null;
}
