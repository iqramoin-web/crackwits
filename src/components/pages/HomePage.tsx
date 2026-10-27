"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useRef, useState, type CSSProperties, type MouseEvent as ReactMouseEvent, type PointerEvent as ReactPointerEvent } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { isEntryPageView } from "@/lib/siteSession";
import { navigateWithViewTransition } from "@/lib/viewTransitionNav";

const GREETINGS = ["Hello", "مرحباً", "Bonjour", "Hola", "Ciao", "Hallo", "Olá", "你好", "こんにちは", "হ্যালো"];

const MENU_SOCIALS = [
  ["#facebook", "Facebook", "IconWrapper.png"],
  ["#instagram", "Instagram", "IconWrapper-1.png"],
  ["#x", "X", "IconWrapper-2.png"],
  ["#behance", "Behance", "IconWrapper-3.png"],
  ["#linkedin", "LinkedIn", "IconWrapper-4.png"],
  ["#dribbble", "Dribbble", "IconWrapper-5.png"],
] as const;

/** [original image key, BRANDS slug, name, category] */
const SELECTED_WORK = [
  ["rawbank", "rawbank", "RAWBANK", "FINANCE"],
  ["milkman", "mylk-maam", "MYLK MA’AM", "F&B"],
  ["coya", "coya", "COYA", "F&B"],
  ["trs-polymers", "trs-polymers", "TRS POLYMERS", "INDUSTRIAL"],
] as const;

/** Image cross-faded in on hover, per selected-work image key. */
const SELECTED_WORK_HOVER: Partial<Record<(typeof SELECTED_WORK)[number][0], string>> = {
  rawbank: "/selected-work/rawbank-hover.webp",
  milkman: "/selected-work/mylk-maam-hover.webp",
  coya: "/selected-work/coya.webp",
  "trs-polymers": "/selected-work/trs-polymers-hover.webp",
};

const SERVICES = [
  ["01", "Strategic Foundations", "/services/hpservices1.mp4", ["360 Communication", "Brand Position", "Marketing Consultancy"]],
  ["02", "Brand Identity & Campaigns", "/services/hpservices2.mp4", ["Dynamic Branding", "Holistic Campaign", "Creative Direction"]],
  ["03", "Digital Products & Platforms", "/services/hpservices3.mp4", ["UX UI Design", "Web & App Development", "AI Services"]],
  ["04", "Visibility & Performance", "/services/hpservices1.mp4", ["Digital Media", "SEO & SEM", "Social Media"]],
  ["05", "Production & Experiences", "/services/hpservices2.mp4", ["Tactful Content", "Event Journeys", "Brand Activations"]],
] as const;

const SERVICE_PREVIEW_VIDEOS = [
  "/services/hpservices1.mp4",
  "/services/hpservices2.mp4",
  "/services/hpservices3.mp4",
  "/services/hpservices1.mp4",
  "/services/hpservices2.mp4",
];

const PARTNER_LOGOS = [
  "logo-01",
  "logo-02",
  "logo-03",
  "logo-04",
  "logo-05",
  "logo-06",
  "logo-07",
  "logo-08",
  "logo-09",
  "logo-10",
  "logo-11",
];

const TESTIMONIALS = [
  {
    quote:
      "Working with Crackwits team is always a pleasure. The dedication and time they put to bring forth the best for the brand makes me feel like they truly believe and only want genuinely the best for it. It’s always a humbling and uplifting feeling. They never miss a chance to compliment and uplift what I bring forth.",
    name: "Dalal Beidoun",
    role: "Founder at MYLK MA'AM",
  },
  {
    quote:
      "We partnered with CRACKWITS to devise our online brand from our 60 year heritage company. They implemented their strategic approach onto the branding, website and mobile app. The team handled the work with creativity, flexibility and effectiveness. They provided ongoing support all around. We are delighted with the finesse of the final outcome.",
    name: "Jamil Z. Beidoun",
    role: "CEO at BEI",
  },
  {
    quote:
      "Crackwits listened to everything we needed and wanted in an all-new website and did a great job with delivering it. Even when we re-branded in the midst of the website creation process, the team did not fail to apply our new look and feel on the platform. We couldn’t be happier!",
    name: "Sarah Alawadhi",
    role: "Marketing Manager at ASHA'S",
  },
  {
    quote:
      "The big idea is so on point that I myself could not have put it this way. Thank you. As for the branding, I’m glad you were able to revamp it in such a minimal approach, where you kept the true identity of the brand, yet infused the trendiness of the modern day. I’m very happy with all the collaterals that were developed as they tap into the brand’s essence in a refreshed appeal.",
    name: "Christian Boustany",
    role: "Founder at EDO",
  },
  {
    quote:
      "Grateful for the creativity deployed by the Crackwits team in working with the Fondation Rawji in crafting branding materials and a website that reflected the Foundation’s mission, vision, and values. We appreciated the team’s adaptability in channeling feedback into their work, delivering a final product that gave us the tools to launch our brand and website with full force.",
    name: "Dahlia Rawji",
    role: "Strategic Advisor at FONDATION RAWJI",
  },
  {
    quote:
      "I recently had the pleasure of working with the team at Crackwits to design my website. From start to finish, the process was smooth and efficient. The team was incredibly knowledgeable and helpful in guiding me through the process. They were able to take my vision and turn it into a reality. The end result was a website that was modern, professional, and exactly what I wanted. I would highly recommend Crackwits to anyone looking for a website design team that is reliable, creative, and efficient.",
    name: "Tamara Qaddoumi",
    role: "Founder at THE TALKING BIRDY",
  },
];

type CardAnimation = { frame: number; collapsedHeight: number; expandedHeight: number };

const isMobile = () => window.matchMedia("(max-width: 767px)").matches;
const isDesktop = () => window.matchMedia("(min-width: 1024px)").matches;

/** Cubic-bezier(0.16, 1, 0.3, 1) solved by bisection on x. */
function easeOutExpoLike(progress: number) {
  let low = 0;
  let high = 1;
  for (let step = 0; step < 8; step += 1) {
    const t = (low + high) / 2;
    const inv = 1 - t;
    if (3 * inv * inv * t * 0.16 + 3 * inv * t * t * 0.3 + t * t * t < progress) low = t;
    else high = t;
  }
  const t = (low + high) / 2;
  const inv = 1 - t;
  return 3 * inv * inv * t + 3 * inv * t * t + t * t * t;
}

export function HomePage() {
  const router = useRouter();
  // The "hello" loader only plays when the site is opened on the homepage;
  // arriving here from another page skips it (the page transition covers it).
  const [skipLoader] = useState(() => typeof window !== "undefined" && !isEntryPageView());
  const [loaded, setLoaded] = useState(skipLoader);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [headerCompact, setHeaderCompact] = useState(false);
  const [headerTheme, setHeaderTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [sinceVisible, setSinceVisible] = useState(false);
  const [selectedWorkVisible, setSelectedWorkVisible] = useState(false);
  const [transitioned, setTransitioned] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [partnersVisible, setPartnersVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [cursorLabel, setCursorLabel] = useState<"Play" | "View" | "Drag">("Play");

  const sinceRef = useRef<HTMLElement | null>(null);
  const selectedWorkRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const partnersRef = useRef<HTMLElement | null>(null);
  const testimonialsRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const servicePreviewRef = useRef<HTMLDivElement | null>(null);
  const serviceRowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cursorRef = useRef<HTMLSpanElement | null>(null);
  const cursorTarget = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const trackRef = useRef<HTMLDivElement | null>(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });
  const detachDragListeners = useRef<(() => void) | null>(null);
  const suppressClick = useRef(false);
  const testimonialRefs = useRef<(HTMLElement | null)[]>([]);
  const cardAnimations = useRef(new Map<number, CardAnimation>());
  const transitionedRef = useRef(false);

  // Eased cursor follower.
  useEffect(() => {
    let frame = 0;
    const tick = () => {
      cursorPosition.current.x += (cursorTarget.current.x - cursorPosition.current.x) * 0.14;
      cursorPosition.current.y += (cursorTarget.current.y - cursorPosition.current.y) * 0.14;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPosition.current.x}px`;
        cursorRef.current.style.top = `${cursorPosition.current.y}px`;
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "touch") cursorTarget.current = { x: event.clientX, y: event.clientY };
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    const el = testimonialsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setTestimonialsVisible(entry.isIntersecting), {
      threshold: 0.2,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), {
      threshold: 0.16,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = partnersRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setPartnersVisible(entry.isIntersecting), {
      threshold: 0.2,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Mobile reveal of service rows.
  useEffect(() => {
    const rows = serviceRowRefs.current.filter((row): row is HTMLDivElement => !!row);
    if (!rows.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-mobile-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  // Align the floating service preview with the active row's heading.
  useEffect(() => {
    const preview = servicePreviewRef.current;
    const section = servicesRef.current;
    const row = activeService === null ? null : serviceRowRefs.current[activeService];
    if (!preview || !section || !row) return;
    const position = () => {
      const sectionRect = section.getBoundingClientRect();
      const top = (row.querySelector("h3") ?? row).getBoundingClientRect().top - sectionRect.top;
      preview.style.top = `${Math.max(0, top)}px`;
    };
    position();
    const frame = window.requestAnimationFrame(position);
    const resizeObserver = new ResizeObserver(position);
    serviceRowRefs.current.forEach((r) => {
      if (r) resizeObserver.observe(r);
    });
    window.addEventListener("resize", position);
    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", position);
    };
  }, [activeService]);

  // Loader greeting sequence + scroll-driven header/showreel.
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let interval = 0;
    let timeout = 0;
    if (!skipLoader) {
      document.body.classList.add("loader-is-active");
      if (reducedMotion) {
        setLoaded(true);
        document.body.classList.remove("loader-is-active");
      } else {
        let next = 1;
        interval = window.setInterval(() => {
          setGreetingIndex(next);
          next += 1;
          if (next === 10) {
            window.clearInterval(interval);
            timeout = window.setTimeout(() => {
              setLoaded(true);
              document.body.classList.remove("loader-is-active");
            }, 300);
          }
        }, 270);
      }
    }

    const onScroll = () => {
      setHeaderCompact(window.scrollY > 24);
      const themed = Array.from(document.querySelectorAll<HTMLElement>("[data-header-theme]")).find((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= 30 && rect.bottom > 30;
      });
      if (themed) setHeaderTheme(themed.dataset.headerTheme === "light" ? "light" : "dark");

      const root = document.documentElement.style;
      root.setProperty("--scroll-progress", String(Math.min(window.scrollY / 520, 1)));
      const showreelDistance = Math.max(window.innerHeight * 0.45, 320);
      const showreelProgress = Math.min(Math.max(window.scrollY / showreelDistance, 0), 1);
      root.setProperty("--showreel-width", `${60 + showreelProgress * 40}%`);

    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
      document.body.classList.remove("loader-is-active");
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const el = servicesRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setServicesVisible(entry.isIntersecting),
      isMobile() ? { rootMargin: "0px 0px -15% 0px", threshold: 0 } : { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = sinceRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setSinceVisible(true);
        observer.disconnect();
      },
      { threshold: 0.24 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = selectedWorkRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setSelectedWorkVisible(entry.isIntersecting), {
      rootMargin: "0px 0px -15% 0px",
      threshold: 0,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Dark -> light background transition between "since" and "selected work".
  useEffect(() => {
    const desktop = isDesktop();
    const mobile = isMobile();
    if (!desktop && !mobile) return;

    if (mobile) {
      const onScroll = () => {
        const section = selectedWorkRef.current;
        if (!section) return;
        const titleTop =
          section.querySelector("#selected-work-title")?.getBoundingClientRect().top ??
          section.getBoundingClientRect().top;
        const sectionTop = section.getBoundingClientRect().top;
        const enterLine = window.innerHeight * 0.84;
        const exitLine = window.innerHeight * 0.18;
        if (titleTop <= enterLine && !transitionedRef.current) {
          transitionedRef.current = true;
          setTransitioned(true);
        } else if (sectionTop > exitLine && transitionedRef.current) {
          transitionedRef.current = false;
          setTransitioned(false);
        }
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }

    const onWheel = (event: WheelEvent) => {
      const section = selectedWorkRef.current;
      if (!section || Math.abs(event.deltaY) < 8) return;
      const top = section.getBoundingClientRect().top;
      const enterLine = window.innerHeight * 0.58;
      if (event.deltaY > 0 && top <= enterLine && top > -window.innerHeight * 0.35 && !transitionedRef.current) {
        transitionedRef.current = true;
        setTransitioned(true);
      } else if (event.deltaY < 0 && top > window.innerHeight * 0.24 && transitionedRef.current) {
        transitionedRef.current = false;
        setTransitioned(false);
      }
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const section = selectedWorkRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.target.classList.toggle("is-inview", entry.isIntersecting));
      },
      { threshold: 0.18 },
    );
    section.querySelectorAll(".selected-card").forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  function trackCursor(event: ReactPointerEvent) {
    cursorTarget.current = { x: event.clientX, y: event.clientY };
  }

  function onTrackPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track) return;
    const desktop = isDesktop();
    if (desktop && event.pointerType === "mouse") return;
    if (desktop) {
      event.preventDefault();
      detachDragListeners.current?.();
    }
    drag.current = { active: true, startX: event.clientX, scrollLeft: track.scrollLeft, moved: false };
    track.setPointerCapture(event.pointerId);
    track.classList.add("is-dragging");
    if (!desktop) return;

    const onMove = (moveEvent: PointerEvent) => {
      const state = drag.current;
      if (!state.active || !trackRef.current) return;
      moveEvent.preventDefault();
      if (Math.abs(moveEvent.clientX - state.startX) > 8) state.moved = true;
      trackRef.current.scrollLeft = state.scrollLeft - (moveEvent.clientX - state.startX);
    };
    const onEnd = () => {
      drag.current.active = false;
      track.classList.remove("is-dragging");
      detachDragListeners.current?.();
      detachDragListeners.current = null;
    };
    detachDragListeners.current = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onEnd);
      window.removeEventListener("pointercancel", onEnd);
    };
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onEnd, { once: true });
    window.addEventListener("pointercancel", onEnd, { once: true });
  }

  function onTrackMouseDown(event: ReactMouseEvent<HTMLDivElement>) {
    if (event.button !== 0 || !isDesktop()) return;
    const track = trackRef.current;
    if (!track) return;
    event.preventDefault();
    drag.current = { active: true, startX: event.clientX, scrollLeft: track.scrollLeft, moved: false };
    track.classList.add("is-dragging");
    const onMove = (moveEvent: MouseEvent) => {
      const state = drag.current;
      if (!state.active || !trackRef.current) return;
      moveEvent.preventDefault();
      if (Math.abs(moveEvent.clientX - state.startX) > 8) state.moved = true;
      trackRef.current.scrollLeft = state.scrollLeft - (moveEvent.clientX - state.startX);
    };
    const onUp = () => {
      drag.current.active = false;
      track.classList.remove("is-dragging");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp, { once: true });
  }

  function onTrackPointerEnd(event: ReactPointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    suppressClick.current = drag.current.moved;
    drag.current.active = false;
    if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
    track.classList.remove("is-dragging");
    window.setTimeout(() => {
      suppressClick.current = false;
    }, 0);
  }

  function onTestimonialClick(index: number) {
    if (!isMobile() || suppressClick.current) return;
    const card = testimonialRefs.current[index];
    if (!card) return;
    testimonialRefs.current.forEach((other, otherIndex) => {
      if (otherIndex !== index && other?.classList.contains("is-expanded")) collapseCard(otherIndex);
    });
    if (card.classList.contains("is-expanded") && !card.classList.contains("is-collapsing")) collapseCard(index);
    else if (!card.classList.contains("is-expanded")) expandCard(index);
  }

  function cancelCardAnimation(index: number) {
    const anim = cardAnimations.current.get(index);
    if (anim?.frame) window.cancelAnimationFrame(anim.frame);
    if (anim) anim.frame = 0;
  }

  function animateCardHeight(
    index: number,
    card: HTMLElement,
    from: number,
    to: number,
    duration: number,
    onDone: () => void,
  ) {
    cancelCardAnimation(index);
    const anim = cardAnimations.current.get(index) ?? { frame: 0, collapsedHeight: from, expandedHeight: to };
    anim.collapsedHeight = anim.collapsedHeight || from;
    anim.expandedHeight = to;
    cardAnimations.current.set(index, anim);
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min(Math.max((now - start) / duration, 0), 1);
      const eased = easeOutExpoLike(progress);
      card.style.height = `${from + (to - from) * eased}px`;
      if (progress < 1) anim.frame = window.requestAnimationFrame(step);
      else {
        anim.frame = 0;
        onDone();
      }
    };
    anim.frame = window.requestAnimationFrame(step);
  }

  function expandCard(index: number) {
    const card = testimonialRefs.current[index];
    if (!card) return;
    const currentHeight = card.getBoundingClientRect().height;
    const anim = cardAnimations.current.get(index) ?? {
      frame: 0,
      collapsedHeight: Number.parseFloat(window.getComputedStyle(card).height) || currentHeight,
      expandedHeight: currentHeight,
    };
    cardAnimations.current.set(index, anim);
    cancelCardAnimation(index);
    card.classList.remove("is-collapsing", "is-collapsed");
    card.classList.add("is-expanded");
    card.style.height = `${currentHeight}px`;
    card.classList.add("is-measuring");
    card.style.height = "auto";
    const expandedHeight = Math.max(card.scrollHeight, anim.collapsedHeight);
    card.style.height = `${currentHeight}px`;
    card.classList.remove("is-measuring");
    anim.expandedHeight = expandedHeight;
    animateCardHeight(index, card, currentHeight, expandedHeight, isMobile() ? 360 : 1400, () => {
      card.style.height = "auto";
    });
  }

  function collapseCard(index: number) {
    const card = testimonialRefs.current[index];
    if (!card) return;
    const anim = cardAnimations.current.get(index);
    const currentHeight = card.getBoundingClientRect().height;
    const collapsedHeight = anim?.collapsedHeight || 234;
    cancelCardAnimation(index);
    card.classList.add("is-expanded", "is-collapsing", "is-collapsed");
    card.style.height = `${currentHeight}px`;
    animateCardHeight(index, card, currentHeight, collapsedHeight, isMobile() ? 360 : 1200, () => {
      card.classList.remove("is-expanded", "is-collapsing", "is-measuring");
      card.style.height = `${collapsedHeight}px`;
    });
  }

  return (
    <main className={loaded ? "site is-loaded" : "site"}>
      <div className="loader" aria-hidden={loaded}>
        <div className="loader-greeting" aria-hidden="true">
          {GREETINGS.map((word, index) => (
            <div
              key={word}
              className={`loader-word${index === greetingIndex ? " is-active" : ""}${index === greetingIndex - 1 ? " is-leaving" : ""}`}
              dir={index === 1 ? "rtl" : "auto"}
            >
              <span>{word}</span>
              <i />
            </div>
          ))}
        </div>
      </div>
      <span
        ref={cursorRef}
        className={`play-control${cursorVisible ? " is-visible" : ""}${cursorLabel === "View" ? " play-control--case" : ""}`}
        aria-hidden="true"
      >
        {cursorLabel}
      </span>
      <header
        className={`header${headerCompact ? " header--compact" : ""}${headerTheme === "light" ? " header--light" : ""}${menuOpen ? " header--menu-open" : ""}`}
      >
        <Link className="brand" href="/" aria-label="Crackwits home">
          <img src="/crackwits-logo.png" alt="Crackwits — Works. Words. Wonders." />
          <img
            className="brand-emblem-mobile"
            src="/crackwits-emblem-supplied.gif"
            alt="Crackwits"
            onClick={() => {
              window.location.href = "/";
            }}
          />
        </Link>
        <div className="header-actions">
          <a className="header-cta" href="/briefus">
            Work with us
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      <div id="site-menu" className={`menu-overlay${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="menu-overlay-inner">
          <button className="menu-overlay-close" type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <span />
            <span />
          </button>
          <div className="menu-left">
            <div className="menu-emblem" aria-hidden="true">
              <img src="/crackwits-emblem-supplied.gif" alt="" />
            </div>
            <div className="menu-socials" aria-label="Social links">
              {MENU_SOCIALS.map(([href, label, icon]) => (
                <a key={href} className="menu-social-link" href={href} aria-label={label}>
                  <img src={`/menu-social/${icon}`} alt="" />
                </a>
              ))}
            </div>
          </div>
          <nav className="menu-nav" aria-label="Menu navigation">
            <Link href="/work" onClick={() => setMenuOpen(false)}>
              <span>Work</span>
            </Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>
              <span>Services</span>
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              <span>About</span>
            </Link>
            <Link href="/insights" onClick={() => setMenuOpen(false)}>
              <span>Insights</span>
            </Link>
            <a href="/briefus" onClick={() => setMenuOpen(false)}>
              <span>Contact</span>
            </a>
          </nav>
          <div className="menu-bottom">
            <a className="menu-bottom-left" href="mailto:hello@crackwits.com">
              hello@crackwits.com
            </a>
            <div className="menu-bottom-right">
              <a href="#privacy">Privacy</a>
              <a href="#cookies" className="menu-bottom-cookies">
                Cookies Policy
              </a>
              <a href="#terms">Terms</a>
            </div>
          </div>
        </div>
      </div>
      <section className="hero" id="top" data-header-theme="dark">
        <div className="headline-clip">
          <h1 className="hero-title">
            <span>Built to challenge</span>
            <span>convention. Designed</span>
            <span>to elevate brands.</span>
          </h1>
          <h1 className="hero-title-mobile" aria-label="Built to challenge convention. Designed to elevate brands.">
            <span>Built to challenge</span>
            <span>convention.</span>
            <span>Designed to</span>
            <span>elevate brands.</span>
          </h1>
        </div>
        <div className="showreel">
          <video
            src="/crackwits-showreel.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="Crackwits showreel"
          />
        </div>
      </section>
      <section
        ref={sinceRef}
        className={`since-section${sinceVisible ? " is-visible" : ""}${transitioned ? " is-transitioned" : ""}`}
        aria-label="SINCE 2020"
        data-header-theme={transitioned ? "light" : "dark"}
      >
        <p className="since-intro-eyebrow">SINCE 2020</p>
        <h2 className="since-intro-title">
          <SplitWords
            text="CRACKWITS is a digital-first creative agency built for brands that demand clarity, strategy, distinction, and momentum."
            mask
          />
        </h2>
        <p className="since-intro-copy">
          <SplitWords text="From identity systems to digital ecosystems, every solution is designed to strengthen presence, sharpen positioning, support sustainable growth, scale and stand apart." />
        </p>
      </section>
      <section
        ref={selectedWorkRef}
        className={`selected-work${selectedWorkVisible ? " is-visible" : ""}${transitioned ? " is-transitioned" : ""}`}
        aria-labelledby="selected-work-title"
        data-header-theme={transitioned ? "light" : "dark"}
      >
        <div className="selected-work-container">
          <div className="selected-work-intro">
            <p className="selected-work-eyebrow">Selected work</p>
            <h2 id="selected-work-title">
              <span>Prominent Executions</span>
              <span>of a Cohesive Force</span>
            </h2>
          </div>
          <div
            className="selected-work-grid"
            onPointerEnter={(event) => {
              trackCursor(event);
              setCursorLabel("View");
              setCursorVisible(true);
            }}
            onPointerMove={trackCursor}
            onPointerLeave={() => setCursorVisible(false)}
          >
            {SELECTED_WORK.map(([imageKey, slug, name, category]) => {
              const href = `/work/${slug}`;
              return (
                <a
                  key={slug}
                  className="selected-card"
                  href={href}
                  onClick={(event) => navigateWithViewTransition(event, href, (to) => router.push(to))}
                >
                  <div
                    className={`selected-card-image${SELECTED_WORK_HOVER[imageKey] ? " selected-card-image--hover" : ""}`}
                  >
                    <img
                      className={imageKey === "coya" ? "selected-card-image-default" : ""}
                      src={
                        imageKey === "coya"
                          ? "/selected-work/coya-thumbnail.webp"
                          : imageKey === "milkman"
                            ? "/work/milkman.webp"
                            : `/selected-work/${imageKey}.webp`
                      }
                      alt={`${name} project`}
                    />
                    {SELECTED_WORK_HOVER[imageKey] && (
                      <img
                        className="selected-card-image-hover"
                        src={SELECTED_WORK_HOVER[imageKey]}
                        alt=""
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <p className="selected-card-category">{category}</p>
                  <h3>{name}</h3>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <section
        ref={servicesRef}
        id="services"
        className={`services-section${servicesVisible ? " is-visible" : ""}`}
        onPointerLeave={() => setActiveService(null)}
        data-header-theme="light"
      >
        <p className="services-eyebrow">Services</p>
        <div className="services-heading-clip">
          <h2>
            <span className="services-heading-line">For Brands That</span>
            <span className="services-mobile-break">
              <br />
            </span>{" "}
            <span className="services-heading-line">Expect More</span>
          </h2>
        </div>
        <div className="services-list">
          {SERVICES.map(([number, title, video, details], index) => (
            <div
              key={number}
              ref={(el) => {
                serviceRowRefs.current[index] = el;
              }}
              className={`service-row${activeService === index ? " is-active" : ""}`}
              onPointerEnter={() => setActiveService(index)}
              onClick={() => setActiveService(activeService === index ? null : index)}
            >
              <span className="service-number">{number}</span>
              <div className="service-row-main">
                <h3>{title}</h3>
                <div className="service-details">
                  <div className="service-details-inner">
                    {details.map((detail) => (
                      <span key={detail}>{detail}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="service-mobile-image">
                <video autoPlay muted loop playsInline src={video} />
              </div>
              <span className="service-divider" />
              {activeService === index && <span className="service-image-source" data-src={video} />}
            </div>
          ))}
        </div>
        <div
          ref={servicePreviewRef}
          className={`service-preview${activeService === null ? "" : " is-visible"}`}
          aria-hidden="true"
        >
          <div className="service-preview-frame">
            <video
              key={activeService ?? 0}
              autoPlay
              muted
              loop
              playsInline
              src={activeService === null ? "/services/hpservices1.mp4" : SERVICE_PREVIEW_VIDEOS[activeService]}
            />
          </div>
        </div>
      </section>
      <section
        ref={partnersRef}
        className={`partners-section${partnersVisible ? " is-visible" : ""}`}
        aria-labelledby="partners-title"
        data-header-theme="light"
      >
        <p className="partners-eyebrow">Partners</p>
        <div className="partners-heading-clip">
          <h2 id="partners-title">Forwarding Ambitious Brands</h2>
        </div>
        <div className="partners-carousel" aria-label="Our partners">
          <div className="partners-track">
            {[0, 1].map((copy) =>
              PARTNER_LOGOS.map((logo) => (
                <div key={`${copy}-${logo}`} className="partner-logo">
                  <img src={`/partners/${logo}.png`} alt="" />
                </div>
              )),
            )}
          </div>
          <div className="partners-track partners-track--mobile-second" aria-hidden="true">
            {[0, 1].map((copy) =>
              PARTNER_LOGOS.map((logo) => (
                <div key={`mobile-${copy}-${logo}`} className="partner-logo">
                  <img src={`/partners/${logo}.png`} alt="" />
                </div>
              )),
            )}
          </div>
        </div>
      </section>
      <section
        ref={testimonialsRef}
        className={`testimonials-section${testimonialsVisible ? " is-visible" : ""}`}
        aria-labelledby="testimonials-title"
        data-header-theme="light"
      >
        <p className="testimonials-eyebrow">Testimonials</p>
        <div className="testimonials-heading-clip">
          <h2 id="testimonials-title">
            Words from the People
            <br />
            We’ve Worked With
          </h2>
        </div>
        <div
          ref={trackRef}
          className="testimonial-track"
          onPointerEnter={(event) => {
            trackCursor(event);
            setCursorLabel("Drag");
            setCursorVisible(true);
          }}
          onPointerMove={trackCursor}
          onPointerLeave={() => setCursorVisible(false)}
          onPointerDown={onTrackPointerDown}
          onMouseDown={onTrackMouseDown}
          onPointerUp={onTrackPointerEnd}
          onPointerCancel={onTrackPointerEnd}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <article
              key={testimonial.name}
              ref={(el) => {
                testimonialRefs.current[index] = el;
              }}
              className="testimonial-card is-collapsed"
              onPointerEnter={() => {
                if (!isMobile()) expandCard(index);
              }}
              onPointerLeave={() => {
                if (!isMobile()) collapseCard(index);
              }}
              onClick={() => onTestimonialClick(index)}
            >
              <div className="testimonial-card-copy-wrap">
                <p className="testimonial-card-copy testimonial-card-copy--short">{testimonial.quote}</p>
                <p className="testimonial-card-copy testimonial-card-copy--full">{testimonial.quote}</p>
              </div>
              <div className="testimonial-card-author">
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter footerRef={footerRef} visible={footerVisible} />
    </main>
  );
}

/** Splits text into word spans (`--i` = index) for staggered reveals. */
// The space sits between the inline-block words: inside them it would be
// trimmed and the words would run together.
function SplitWords({ text, mask = false }: { text: string; mask?: boolean }) {
  return text.split(" ").map((word, i) => (
    <Fragment key={i}>
      {i > 0 && " "}
      <span className="word" style={{ "--i": i } as CSSProperties}>
        {mask ? <span>{word}</span> : word}
      </span>
    </Fragment>
  ));
}
