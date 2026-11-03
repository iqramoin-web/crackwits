import type { MouseEvent } from "react";

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void | Promise<void>) => unknown;
};

/** Set on <html> while a card is opening; the case study's banner skips its fade-in. */
export const CARD_OPEN_FLAG = "csOpen";

/** Longest we hold the transition waiting for the case study to render. */
const MAX_WAIT_MS = 2000;

/** Resolves once the case study at `path` is rendered and its banner image is ready. */
function caseStudyReady(path: string) {
  return new Promise<void>((resolve) => {
    const started = performance.now();
    const check = () => {
      const banner = document.querySelector<HTMLImageElement>(".cs-case-image img");
      const ready = location.pathname === path && banner && banner.complete && banner.naturalWidth > 0;
      if (ready || performance.now() - started > MAX_WAIT_MS) resolve();
      // A timer, not requestAnimationFrame: frames can be throttled while the
      // page is in the background, which would stall the transition.
      else window.setTimeout(check, 16);
    };
    check();
  });
}

/**
 * Click handler for work cards: the image the visitor is looking at (the
 * hover image when one is showing) becomes the shared "cs-image" element and
 * grows into the case study's banner inside a view transition. Without the
 * View Transitions API the link navigates normally.
 */
export function navigateWithViewTransition(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  push: (href: string) => void,
) {
  const doc = document as ViewTransitionDocument;
  if (!doc.startViewTransition || event.metaKey || event.ctrlKey || event.shiftKey) return;
  event.preventDefault();

  // Only one element may carry the name: clear it from the current page's
  // banner (More Work cards sit on a case study) before tagging the card.
  document.querySelectorAll<HTMLElement>(".cs-case-image img").forEach((img) => {
    img.style.viewTransitionName = "none";
  });
  const images = Array.from(event.currentTarget.querySelectorAll<HTMLImageElement>("img"));
  const visible = images.reverse().find((img) => parseFloat(getComputedStyle(img).opacity) > 0.5) ?? images[0];
  if (visible) visible.style.viewTransitionName = "cs-image";

  const root = document.documentElement;
  root.dataset[CARD_OPEN_FLAG] = "1";
  const path = new URL(href, location.href).pathname;
  const transition = doc.startViewTransition(() => {
    push(href);
    return caseStudyReady(path);
  }) as { finished?: Promise<void> } | undefined;
  const done = () => delete root.dataset[CARD_OPEN_FLAG];
  if (transition?.finished) transition.finished.then(done, done);
  else window.setTimeout(done, MAX_WAIT_MS + 1200);
}
