import type { MouseEvent } from "react";

/** Set on <html> while a case study is opening from a card (see motion.css §16). */
export const CARD_OPEN_FLAG = "csOpen";

/**
 * Timings modelled on plastic.design's work transition: the page glides the
 * clicked card up towards the top while everything fades out, then the case
 * study fades in and its hero plays (motion.css §16).
 */
const SCROLL_MS = 1200;
const FADE_MS = 800;
/** How long the flag stays on after navigating: the case study's entrance. */
const ENTER_MS = 1600;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/** Smoothly scrolls the window to `targetY` over `duration` ms. */
function glideTo(targetY: number, duration: number) {
  return new Promise<void>((resolve) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const start = performance.now();
    const step = () => {
      const progress = Math.min((performance.now() - start) / duration, 1);
      window.scrollTo(0, startY + distance * easeOutCubic(progress));
      if (progress < 1) window.setTimeout(step, 16);
      else resolve();
    };
    step();
  });
}

let opening = false;

/**
 * Click handler for case-study cards (/work, Selected Work, More Work). The
 * clicked card glides up near the top of the screen while the page fades out;
 * then the case study opens and plays its entrance. Modifier-clicks and
 * reduced-motion visitors get a plain navigation.
 */
export function navigateWithViewTransition(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  push: (href: string) => void,
) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  if (opening) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    push(href);
    return;
  }
  opening = true;

  const root = document.documentElement;
  const card = event.currentTarget;
  const offset = window.innerWidth * (72 / 2184);
  const targetY = Math.max(0, card.getBoundingClientRect().top + window.scrollY - offset);

  root.dataset[CARD_OPEN_FLAG] = "leaving";
  Promise.all([glideTo(targetY, SCROLL_MS), new Promise((r) => window.setTimeout(r, FADE_MS))]).then(() => {
    root.dataset[CARD_OPEN_FLAG] = "entering";
    push(href);
    window.setTimeout(() => {
      delete root.dataset[CARD_OPEN_FLAG];
      opening = false;
    }, ENTER_MS);
  });
}
