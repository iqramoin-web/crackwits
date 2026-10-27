"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { afterLoader } from "@/lib/afterLoader";

// Headings get the word-by-word reveal instead (see HeadingWordReveal).
const CANDIDATES = "main section, main footer";
/** Containers that must stay static even if nothing inside them animates. */
const SKIP = "header, .menu-overlay, .loader, section.hero";

/** True when the element, an ancestor or a close descendant already has an entrance transition. */
function hasOwnMotion(el: Element, main: Element) {
  const moves = (node: Element) => {
    const cs = getComputedStyle(node);
    if (cs.animationName !== "none") return true;
    const timed = cs.transitionDuration.split(",").some((d) => parseFloat(d) > 0);
    return timed && /all|opacity|transform|clip-path|translate/.test(cs.transitionProperty);
  };
  for (let node: Element | null = el; node && node !== main; node = node.parentElement) {
    if (moves(node)) return true;
  }
  return Array.from(el.querySelectorAll("*")).slice(0, 40).some(moves);
}

/**
 * Gives every section that has no entrance animation of its own a shared
 * fade-up (see `.reveal` in motion.css). Elements the original site
 * already animates are left untouched, so nothing animates twice.
 */
export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const main = document.querySelector("main");
    if (!main) return;

    const targets: HTMLElement[] = [];
    for (const el of main.querySelectorAll<HTMLElement>(CANDIDATES)) {
      if (el.closest(SKIP)) continue;
      if (targets.some((t) => t.contains(el))) continue;
      if (hasOwnMotion(el, main)) continue;
      targets.push(el);
    }
    if (!targets.length) return;

    for (const el of targets) el.classList.add("reveal");

    let cancelled = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          // Sections already scrolled past count too, so a fast scroll can't skip one.
          .filter((entry) => entry.isIntersecting || entry.boundingClientRect.bottom < 0)
          .forEach((entry, i) => {
            const el = entry.target as HTMLElement;
            el.style.setProperty("--reveal-delay", `${Math.min(i, 8) * 0.07}s`);
            el.classList.add("is-revealed");
            observer.unobserve(el);
          });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    afterLoader().then(() => {
      if (cancelled) return;
      targets.forEach((el) => {
        // Above-the-fold sections reveal straight away.
        const box = el.getBoundingClientRect();
        if (box.height > 0 && box.top < window.innerHeight * 0.9 && box.bottom > 0) {
          el.classList.add("is-revealed");
          return;
        }
        observer.observe(el);
      });
    });

    return () => {
      cancelled = true;
      observer.disconnect();
      for (const el of targets) el.classList.remove("reveal", "is-revealed");
    };
  }, [pathname]);

  return null;
}
