import type { MouseEvent } from "react";

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void | Promise<void>) => unknown;
};

/**
 * Click handler for work cards: when the View Transitions API exists, tag the
 * clicked card's image as the shared "cs-image" element and navigate inside a
 * view transition. Otherwise the link navigates normally.
 */
export function navigateWithViewTransition(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  push: (href: string) => void,
) {
  const doc = document as ViewTransitionDocument;
  if (!doc.startViewTransition || event.metaKey || event.ctrlKey || event.shiftKey) return;
  event.preventDefault();
  const image = event.currentTarget.querySelector<HTMLImageElement>("img");
  if (image) image.style.viewTransitionName = "cs-image";
  doc.startViewTransition(() => push(href));
}
