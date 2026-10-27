"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { afterLoader } from "@/lib/afterLoader";

const HEADINGS = "main h1, main h2, main h3";
/** Headings left alone: chrome, the loader, and ones already split by hand. */
const SKIP = "header, .menu-overlay, .loader, .since-intro-title";
const WORD_STAGGER = 0.045;
const MAX_DELAY = 0.9;

/**
 * Wraps every word of a heading's text in a mask + inner span, keeping any
 * markup (line spans, <br>) intact. Returns the number of words wrapped.
 */
function splitWords(heading: HTMLElement) {
  const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode as Text);

  let index = 0;
  for (const node of textNodes) {
    const parts = (node.nodeValue ?? "").split(/(\s+)/);
    if (!parts.some((part) => part.trim())) continue;
    const fragment = document.createDocumentFragment();
    for (const part of parts) {
      if (!part) continue;
      if (!part.trim()) {
        // Spaces stay as plain text between the inline-block words.
        fragment.append(document.createTextNode(part));
        continue;
      }
      const word = document.createElement("span");
      word.className = "wr-word";
      const inner = document.createElement("span");
      inner.className = "wr-inner";
      inner.style.setProperty("--wr-delay", `${Math.min(index * WORD_STAGGER, MAX_DELAY)}s`);
      inner.textContent = part;
      word.append(inner);
      fragment.append(word);
      index += 1;
    }
    node.replaceWith(fragment);
  }
  return index;
}

/** True when a clipping ancestor currently hides part of the heading's box. */
function isClipped(el: Element, main: Element) {
  const box = el.getBoundingClientRect();
  for (let node = el.parentElement; node && node !== main; node = node.parentElement) {
    const cs = getComputedStyle(node);
    if (cs.overflow === "visible" && cs.clipPath === "none") continue;
    const clip = node.getBoundingClientRect();
    if (box.top < clip.top - 1 || box.bottom > clip.bottom + 1 || box.left < clip.left - 1 || box.right > clip.right + 1) {
      return true;
    }
  }
  return false;
}

/**
 * Site-wide word-by-word heading reveal: each word rises out of its own mask
 * when the heading (or its section) scrolls into view, matching the
 * "Since 2020" intro. Runs after the homepage loader has finished.
 */
export function HeadingWordReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const main = document.querySelector("main");
    if (!main) return;

    const headings = Array.from(main.querySelectorAll<HTMLElement>(HEADINGS)).filter(
      (h) => !h.closest(SKIP) && !h.querySelector(".word, .wr-word"),
    );
    for (const heading of headings) {
      if (splitWords(heading)) heading.classList.add("wr-heading");
    }

    // A heading inside a clipping wrapper (e.g. the hero's headline mask) may
    // never register as intersecting, so for those its section is the trigger.
    const triggers = new Map<Element, HTMLElement[]>();
    for (const heading of headings) {
      const clipped = Boolean(heading.closest("section.hero")) || isClipped(heading, main);
      const target = clipped ? (heading.closest("section, footer") ?? heading) : heading;
      triggers.set(target, [...(triggers.get(target) ?? []), heading]);
    }

    let cancelled = false;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Also reveal anything already scrolled past: a fast scroll can jump
          // over a heading between callbacks, which would leave it hidden.
          const passed = entry.boundingClientRect.bottom < 0;
          if (!entry.isIntersecting && !passed) continue;
          for (const heading of triggers.get(entry.target) ?? []) heading.classList.add("is-wr-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );

    afterLoader().then(() => {
      if (cancelled) return;
      triggers.forEach((targetHeadings, target) => {
        // Above-the-fold headings reveal straight away rather than waiting
        // for the observer's first callback.
        const box = target.getBoundingClientRect();
        if (box.height > 0 && box.top < window.innerHeight * 0.9 && box.bottom > 0) {
          for (const heading of targetHeadings) heading.classList.add("is-wr-visible");
          return;
        }
        observer.observe(target);
      });
    });

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
