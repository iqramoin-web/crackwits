"use client";

import { useEffect, useRef, useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const SERVICES = [
  {
    title: "Strategic Foundations",
    description:
      "The concise groundwork for a constructive implementation. With collective findings and selective insights, we fuel brands with data-driven strategies that turn a sharp vision into a solid success.",
    tags: ["360 Communication", "Brand Position", "Marketing Consultancy"],
    media: "/services/hpservices1.mp4",
  },
  {
    title: "Brand Identity & Campaigns",
    description:
      "Expressive. Impressive. Immersive experience. How a brand looks, sounds, and shows up is what shapes its identity, reflects its creativity, and delivers its offerings across digital and physical touch-points.",
    tags: ["Dynamic Branding", "Holistic Campaign", "Creative Direction"],
    media: "/services/hpservices2.mp4",
  },
  {
    title: "Digital Products & Platforms",
    description:
      "This is where functionality meets finesse. Interfaces that guide, engage, inspire and captivate; with user behaviour at the core, we enable hubs that are intuitive, scalable and future-ready.",
    tags: ["UX UI Design", "Web & App Development", "AI Services"],
    media: "/services/hpservices3.mp4",
  },
  {
    title: "Visibility & Performance",
    description:
      "Clicks amidst the clutter. Conversions within the chaos. Driven by the focus on reach, discoverability, and measurable outcomes, to strengthen visibility and improve performance across the digital ecosystem.",
    tags: ["Digital Media", "SEO & SEM", "Social Media"],
    media: "/services/hpservices1.mp4",
  },
  {
    title: "Production & Experiences",
    description:
      "Concise groundwork for a constructive implementation. This service area transforms concepts into tangible brand moments through experiential work designed to engage audiences from screens to spaces, formats, magic and beyond.",
    tags: ["Tactful Content", "Event Journeys", "Brand Activations"],
    media: "/services/hpservices2.mp4",
  },
];

const INDUSTRIES = [
  ["Retail", "/industries/retail.webp"],
  ["Finance", "/industries/finance.jpg"],
  ["Healthcare", "/industries/healthcare.jpg"],
  ["Technology", "/industries/technology.webp"],
  ["E-commerce", "/industries/ecommerce.jpg"],
  ["Beauty & Wellness", "/industries/beauty-wellness.jpg"],
  ["Manufacturing", "/industries/manufacturing.webp"],
  ["Hospitality", "/industries/hospitality.webp"],
  ["Education", "/industries/education.jpg"],
  ["F&B", "/industries/fnb.webp"],
] as const;

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [industriesVisible, setIndustriesVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [visibleServices, setVisibleServices] = useState<Set<number>>(new Set());
  const serviceRefs = useRef<(HTMLElement | null)[]>([]);
  const industriesRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  // Reveal each service row once it scrolls into view.
  useEffect(() => {
    const articles = serviceRefs.current.filter(Boolean) as HTMLElement[];
    if (!articles.length) return;
    if (prefersReducedMotion()) {
      setHeroVisible(true);
      setVisibleServices(new Set(SERVICES.map((_, index) => index)));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.serviceIndex);
          setVisibleServices((current) => {
            if (current.has(index)) return current;
            const next = new Set(current);
            next.add(index);
            return next;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 },
    );
    articles.forEach((article) => observer.observe(article));
    setHeroVisible(true);
    return () => observer.disconnect();
  }, []);

  // One-shot reveal of the industries section.
  useEffect(() => {
    const section = industriesRef.current;
    if (!section) return;
    if (prefersReducedMotion()) {
      setIndustriesVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIndustriesVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.16 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // On mobile, the industry closest to the viewport centre becomes active.
  useEffect(() => {
    if (!window.matchMedia("(max-width: 767px)").matches) return;
    const section = industriesRef.current;
    if (!section) return;
    const links = Array.from(section.querySelectorAll(".services-industry-link"));
    if (!links.length) return;
    const updateActive = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;
      links.forEach((link, index) => {
        const rect = link.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      setActiveIndustry(closestIndex);
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  // Smooth scrolling while on this page.
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "smooth";
    return () => {
      root.style.scrollBehavior = previous;
    };
  }, []);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), {
      threshold: 0.16,
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const [activeName, activeImage] = INDUSTRIES[activeIndustry];

  return (
    <main className="site is-loaded services-page">
      <SiteHeader variant="header--light" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section
        className={`services-page-hero${heroVisible ? " is-visible" : ""}`}
        aria-labelledby="services-page-title"
        data-header-theme="light"
      >
        <div className="services-page-intro">
          <h1 id="services-page-title">
            <span>We turn raw ideas into</span>
            <span>products that work, grow</span>
            <span>and deliver value to users.</span>
          </h1>
        </div>
        <div className="services-page-feature-list">
          {SERVICES.map((service, index) => (
            <article
              key={service.title}
              ref={(el) => {
                serviceRefs.current[index] = el;
              }}
              data-service-index={index}
              className={`services-page-feature${visibleServices.has(index) ? " is-visible" : ""}`}
            >
              <div className="services-page-copy">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
              <div className="services-page-media">
                <div className="services-page-tags" aria-label={`${service.title} services`}>
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="services-page-video">
                  <video autoPlay muted loop playsInline preload="metadata" src={service.media} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        ref={industriesRef}
        className={`services-industries${industriesVisible ? " is-visible" : ""}`}
        aria-labelledby="services-industries-title"
        data-header-theme="dark"
      >
        <div className="services-industries-inner">
          <p className="services-industries-eyebrow" id="services-industries-title">
            Industries We Like to Work In
          </p>
          <div className="services-industries-interaction">
            <div className="services-industries-image-stage" aria-live="polite">
              <img
                className="services-industry-stage-image is-active"
                src={activeImage}
                alt={`${activeName} industry`}
                style={{ transform: `translateY(${activeIndustry * 8}px)` }}
              />
            </div>
            <div className="services-industries-list" role="list">
              {INDUSTRIES.map(([name], index) => (
                <button
                  key={name}
                  type="button"
                  role="listitem"
                  className={`services-industry-link${activeIndustry === index ? " is-active" : ""}`}
                  onPointerEnter={() => setActiveIndustry(index)}
                  onFocus={() => setActiveIndustry(index)}
                  onClick={() => setActiveIndustry(index)}
                >
                  <span className="services-industry-indicator" aria-hidden="true" />
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter footerRef={footerRef} visible={footerVisible} />
    </main>
  );
}
