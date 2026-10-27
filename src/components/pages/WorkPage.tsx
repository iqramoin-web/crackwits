"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { BRANDS, WORK_FILTERS } from "@/content/brands";
import { navigateWithViewTransition } from "@/lib/viewTransitionNav";

export function WorkPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [heroVisible, setHeroVisible] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [footerVisible, setFooterVisible] = useState(false);
  const [darkImageUnderHeader, setDarkImageUnderHeader] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const visibleBrands = activeFilter === "ALL" ? BRANDS : BRANDS.filter((brand) => brand.category === activeFilter);

  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "smooth";
    return () => {
      root.style.scrollBehavior = previous;
    };
  }, []);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  // Sample the luminance of the card image behind the header to pick its contrast.
  useEffect(() => {
    const sample = () => {
      const image =
        document
          .elementsFromPoint(Math.max(20, window.innerWidth * 0.25), 30)
          .map((el) => el.closest(".work-card-image")?.querySelector("img"))
          .find(Boolean) ?? null;
      if (!image || !image.complete || !image.naturalWidth) {
        setDarkImageUnderHeader(false);
        return;
      }
      try {
        const canvas = document.createElement("canvas");
        canvas.width = canvas.height = 1;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(image, Math.floor(image.naturalWidth / 2), Math.floor(image.naturalHeight / 2), 1, 1, 0, 0, 1, 1);
        const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
        setDarkImageUnderHeader((0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 < 0.38);
      } catch {
        setDarkImageUnderHeader(false);
      }
    };
    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(sample);
    };
    sample();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [activeFilter]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll(".work-card"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach((card) => card.classList.add("is-scroll-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-scroll-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [activeFilter]);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), {
      threshold: 0.16,
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const trackCursor = (event: ReactPointerEvent) => {
    if (event.pointerType !== "touch") setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <main className="site is-loaded work-page">
      <span
        className={`play-control play-control--case${cursorVisible ? " is-visible" : ""}`}
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
        aria-hidden="true"
      >
        View
      </span>
      <SiteHeader
        variant={darkImageUnderHeader ? "" : "header--light"}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <section className={`work-hero${heroVisible ? " is-visible" : ""}`} aria-labelledby="work-title">
        <div className="work-container">
          <div className="work-intro">
            <h1 id="work-title">
              <span>Brands That Inspire</span>
              <span>Their Industries</span>
            </h1>
          </div>
          <nav className="work-filters" aria-label="Filter projects">
            {WORK_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter.toUpperCase() ? "is-active" : ""}
                onClick={() => setActiveFilter(filter.toUpperCase())}
              >
                {filter}
              </button>
            ))}
          </nav>
          <div
            ref={gridRef}
            className="work-grid"
            onPointerEnter={(event) => {
              trackCursor(event);
              setCursorVisible(true);
            }}
            onPointerMove={trackCursor}
            onPointerLeave={() => setCursorVisible(false)}
          >
            {visibleBrands.map((brand, index) => {
              const href = `/work/${brand.slug}`;
              return (
                <a
                  key={brand.slug}
                  className="work-card"
                  style={{ "--work-card-delay": `${Math.min(index * 0.1, 0.8)}s` } as CSSProperties}
                  href={href}
                  onClick={(event) => navigateWithViewTransition(event, href, (to) => router.push(to))}
                >
                  <div className="work-card-image">
                    <img
                      src={`${brand.thumbnail}${brand.slug === "cheesecake-factory" ? "?v=2" : ""}`}
                      alt={`${brand.name} project`}
                    />
                  </div>
                  <p className="work-card-category">{brand.category}</p>
                  <h2>{brand.name}</h2>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <SiteFooter footerRef={footerRef} visible={footerVisible} />
    </main>
  );
}
