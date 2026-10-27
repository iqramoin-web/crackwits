"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const INSIGHTS = [
  {
    title: "How the creative team turns strategy into scroll-stopping visuals.",
    category: "Finance",
    image: "/insights/creative-output.jpg",
    href: "/creative-output",
  },
  {
    title: "Not just another agency: the story behind CRACKWITS",
    category: "INDUSTRIAL",
    image: "/insights/agency-story.jpg",
    href: "https://medium.com/@Crackwitsocial/not-just-another-agency-the-story-behind-crackwits-606994db30e1",
  },
  {
    title: "This isn’t your average fintech story: how ILLICOCASH found its voice.",
    category: "Finance",
    image: "/insights/brand-voice.png",
    href: "https://medium.com/@Crackwitsocial/this-isnt-your-average-fintech-story-how-illicocash-found-it-s-voice-f061d281c962",
  },
  {
    title: "Making a splash: launching west africa’s largest waterpark.",
    category: "Entertainment",
    image: "/insights/waterpark-launch.webp",
    href: "https://medium.com/@Crackwitsocial/making-a-splash-launching-west-africas-largest-waterpark-14a0fff2872a",
  },
];

const INSIGHT_FILTERS = ["All", "F&B", "Entertainment", "Finance", "Real Estate", "Industrial", "Fashion"];

export function InsightsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [heroVisible, setHeroVisible] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [footerVisible, setFooterVisible] = useState(false);
  const gridRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  const visibleInsights = useMemo(
    () =>
      activeFilter === "All"
        ? INSIGHTS
        : INSIGHTS.filter((insight) => insight.category.toLowerCase() === activeFilter.toLowerCase()),
    [activeFilter],
  );

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll(".work-card"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach((card) => card.classList.add("is-scroll-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-scroll-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [activeFilter]);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFooterVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const trackCursor = (event: ReactPointerEvent) => {
    if (event.pointerType !== "touch") {
      setCursorPosition({ x: event.clientX, y: event.clientY });
      setCursorVisible(true);
    }
  };

  return (
    <main className="site is-loaded work-page insights-page">
      <div
        className={`play-control play-control--case${cursorVisible ? " is-visible" : ""}`}
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      >
        <span>View</span>
      </div>
      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section className={`work-hero${heroVisible ? " is-visible" : ""}`} aria-labelledby="insights-title">
        <div className="work-container">
          <div className="work-intro">
            <h1 id="insights-title">
              <span>Fresh Perspectives</span>
              <span>on Brands, Business</span>
              <span>and Beyond.</span>
            </h1>
          </div>
          <div className="work-filters" aria-label="Insight filters">
            {INSIGHT_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? "is-active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <section ref={gridRef} className="work-grid" aria-label="Insights">
            {visibleInsights.map((insight, index) => {
              const external = insight.href.startsWith("http");
              return (
                <a
                  key={insight.title}
                  className="work-card"
                  href={insight.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  onPointerEnter={trackCursor}
                  onPointerMove={trackCursor}
                  onPointerLeave={() => setCursorVisible(false)}
                  style={{ "--work-card-delay": `${Math.min(index * 0.1, 0.8)}s` } as CSSProperties}
                >
                  <div className="work-card-image">
                    <img src={insight.image} alt="" />
                  </div>
                  <div className="work-card-meta">
                    <span className="work-card-category">{insight.category}</span>
                  </div>
                  <h2>{insight.title}</h2>
                </a>
              );
            })}
          </section>
        </div>
      </section>
      <SiteFooter footerRef={footerRef} visible={footerVisible} />
    </main>
  );
}
