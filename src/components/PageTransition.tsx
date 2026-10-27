"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { markSiteNavigation } from "@/lib/siteSession";

const COVER_MS = 560;
/** Work cards run their own shared-image view transition; leave those clicks alone. */
const VIEW_TRANSITION_LINKS = ".work-card, .selected-card, .cs-more-work-card";

type Phase = "idle" | "covering" | "covered" | "revealing";

/** Internal page link the transition should handle, or null. */
function internalHref(event: MouseEvent): string | null {
  if (event.defaultPrevented || event.button !== 0) return null;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return null;
  const anchor = (event.target as Element | null)?.closest?.("a");
  if (!anchor || anchor.hasAttribute("download")) return null;
  if (anchor.target && anchor.target !== "_self") return null;
  const url = new URL(anchor.href, location.href);
  if (url.origin !== location.origin) return null;
  if (url.pathname === location.pathname) return null; // same page / hash link
  return url.pathname + url.search + url.hash;
}

/**
 * Page-change animation: an ink curtain with the emblem sweeps up over the
 * page, the route changes underneath, then the curtain lifts off the top while
 * the new page rises in. Back/forward navigation gets the rise only.
 */
export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhaseState] = useState<Phase>("idle");
  const phaseRef = useRef<Phase>("idle");
  const coveringSince = useRef(0);
  const firstRender = useRef(true);

  const setPhase = (next: Phase) => {
    phaseRef.current = next;
    setPhaseState(next);
  };

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onClick = (event: MouseEvent) => {
      const href = internalHref(event);
      if (!href) return;
      markSiteNavigation();
      const anchor = (event.target as Element).closest("a")!;
      if (reducedMotion || anchor.matches(VIEW_TRANSITION_LINKS)) return;

      // Take over the navigation so the curtain can close first.
      event.preventDefault();
      event.stopImmediatePropagation();
      coveringSince.current = performance.now();
      setPhase("covering");
      window.setTimeout(() => {
        setPhase("covered");
        router.push(href);
      }, COVER_MS);
    };
    const onPopState = () => markSiteNavigation();

    // Capture phase: runs before Next's <Link> handler so it can be pre-empted.
    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPopState);
    };
  }, [router]);

  // New route rendered: reset scroll under the curtain, lift it, animate the page in.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    document.body.scrollTo(0, 0);
    window.scrollTo(0, 0);

    const main = document.querySelector("main");
    main?.classList.add("page-enter");
    const clearEnter = window.setTimeout(() => main?.classList.remove("page-enter"), 1400);

    let lift = 0;
    let done = 0;
    if (phaseRef.current !== "idle") {
      const wait = Math.max(0, COVER_MS - (performance.now() - coveringSince.current));
      lift = window.setTimeout(() => {
        setPhase("revealing");
        done = window.setTimeout(() => setPhase("idle"), 800);
      }, wait + 60);
    }

    return () => {
      window.clearTimeout(clearEnter);
      window.clearTimeout(lift);
      window.clearTimeout(done);
    };
  }, [pathname]);

  return (
    <div className={`page-curtain page-curtain--${phase}`} aria-hidden="true">
      <img src="/crackwits-emblem-supplied.gif" alt="" />
    </div>
  );
}
