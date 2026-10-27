"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import type { CaseStudy, Section, Stat } from "@/content/types";
import { useInView } from "@/lib/useInView";
import { navigateWithViewTransition } from "@/lib/viewTransitionNav";
import { BrandBoard } from "./BrandBoard";
import { MediaView } from "./MediaView";

export type MoreWorkCard = { slug: string; name: string; category: string; thumbnail: string };

const SHOW_DRAFT_MARKERS = process.env.NEXT_PUBLIC_HIDE_DRAFT_MARKERS !== "1";

/**
 * Class names per section layout. They are the original RAWBANK section
 * classes (renamed `rawbank-` → `cs-`), so every case study inherits the
 * exact spacing, typography and reveal animations of the master template.
 */
const LAYOUT_CLASSES = {
  lead: {
    section: "cs-digital-experiences",
    inner: "cs-digital-inner",
    title: "cs-digital-title",
    copy: null,
    paragraph: "cs-digital-paragraph",
    images: "cs-digital-images",
    image: "cs-digital-image",
  },
  feature: {
    section: "cs-digital-gateway",
    inner: "cs-digital-gateway-inner",
    title: "cs-digital-gateway-title",
    copy: "cs-digital-gateway-copy",
    paragraph: null,
    images: null,
    image: "cs-digital-gateway-image",
  },
  duo: {
    section: "cs-meaningful-conversations",
    inner: "cs-conversations-inner",
    title: "cs-conversations-title",
    copy: "cs-conversations-copy",
    paragraph: null,
    images: "cs-conversations-images",
    image: "cs-conversations-image",
  },
} as const;

export function CaseStudyPage({ study, more }: { study: CaseStudy; more: MoreWorkCard[] }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [overviewRef, overviewVisible] = useInView<HTMLElement>(0.2);
  const [outcomeRef, outcomeVisible] = useInView<HTMLElement>(0.2);
  const [moreRef, moreVisible] = useInView<HTMLElement>(0.14);
  const [footerRef, footerVisible] = useInView<HTMLElement>(0.16);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => setHeroVisible(true), []);

  const trackCursor = (event: PointerEvent) => {
    if (event.pointerType === "touch") return;
    setCursor({ x: event.clientX, y: event.clientY });
    setCursorVisible(true);
  };

  const id = study.slug;

  return (
    <main className={`site is-loaded cs-case-study cs-case-study--${id}`}>
      <span
        className={`play-control play-control--case${cursorVisible ? " is-visible" : ""}`}
        style={{ left: cursor.x, top: cursor.y }}
        aria-hidden="true"
      >
        View
      </span>
      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className={`cs-case-hero${heroVisible ? " is-visible" : ""}`} aria-labelledby={`${id}-title`} data-header-theme="light">
        <div className="cs-case-inner">
          <h1 id={`${id}-title`}>
            <span>{study.name}</span>
          </h1>
          <p className="cs-case-subtitle">
            <span>{study.subtitle}</span>
          </p>
          <div className="cs-case-image">
            <img style={{ viewTransitionName: "cs-image" }} src={study.cover.src} alt={study.cover.alt} />
            {SHOW_DRAFT_MARKERS && study.cover.ai ? <AiTag /> : null}
          </div>
        </div>
      </section>

      <section
        ref={overviewRef}
        className={`cs-overview${overviewVisible ? " is-visible" : ""}`}
        aria-label={`${study.name} overview`}
        data-header-theme="light"
      >
        <div className="cs-overview-grid">
          <div className="cs-overview-copy">
            {study.overview.map((paragraph) => (
              <p key={paragraph} className="cs-overview-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="cs-overview-services" aria-label="Services">
            {study.services.map((service) => (
              <span key={service} className="cs-overview-service">
                {service}
              </span>
            ))}
          </div>
        </div>
        <Stats stats={study.stats} />
        <div className="cs-brand-system">
          {study.brandBoard.kind === "image" ? (
            <img src={study.brandBoard.src} alt={study.brandBoard.alt} />
          ) : (
            <BrandBoard name={study.name} tokens={study.brandBoard.tokens} images={study.brandBoard.images} />
          )}
        </div>
      </section>

      {study.sections.map((section, index) => (
        <CaseSection key={section.title.join(" ")} section={section} id={`${id}-section-${index + 1}`} study={study} />
      ))}

      <section
        ref={outcomeRef}
        className={`cs-impact${outcomeVisible ? " is-visible" : ""}`}
        aria-labelledby={`${id}-impact-title`}
        data-header-theme="light"
      >
        <div className="cs-impact-inner">
          <h2 id={`${id}-impact-title`} className="cs-impact-title">
            <span>The Outcome</span>
          </h2>
          <p className="cs-impact-copy">{study.outcome}</p>
        </div>
      </section>

      <section
        ref={moreRef}
        className={`cs-more-work${moreVisible ? " is-visible" : ""}`}
        aria-labelledby={`${id}-more-work-title`}
        data-header-theme="light"
      >
        <div className="cs-more-work-inner">
          <h2 id={`${id}-more-work-title`} className="cs-more-work-title">
            <span>More Work</span>
          </h2>
          <div
            className="cs-more-work-grid"
            onPointerEnter={trackCursor}
            onPointerMove={trackCursor}
            onPointerLeave={() => setCursorVisible(false)}
          >
            {more.map((card) => (
              <Link
                key={card.slug}
                className="cs-more-work-card"
                href={`/work/${card.slug}`}
                onClick={(event) => navigateWithViewTransition(event, `/work/${card.slug}`, router.push)}
              >
                <div className="cs-more-work-image">
                  <img src={card.thumbnail} alt={`${card.name} project`} />
                </div>
                <p className="cs-more-work-category">{card.category}</p>
                <h3>{card.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter footerRef={footerRef} visible={footerVisible} />

      {SHOW_DRAFT_MARKERS && study.draft ? (
        <p className="cs-draft-badge" role="note">
          Draft · placeholder copy &amp; imagery
        </p>
      ) : null}
    </main>
  );
}

function CaseSection({ section, id, study }: { section: Section; id: string; study: CaseStudy }) {
  const [ref, visible] = useInView<HTMLElement>(0.2);
  const cls = LAYOUT_CLASSES[section.layout];
  const [first, second] = section.title;

  const images = section.media.map((media, i) => (
    <div key={i} className={`${cls.image} cs-media cs-media--${media.kind}`}>
      <MediaView media={media} study={study} />
      {SHOW_DRAFT_MARKERS && "ai" in media && media.ai ? <AiTag /> : null}
    </div>
  ));

  return (
    <section
      ref={ref}
      className={`${cls.section}${visible ? " is-visible" : ""}`}
      aria-labelledby={`${id}-title`}
      data-header-theme="light"
    >
      <div className={cls.inner}>
        <h2 id={`${id}-title`} className={cls.title}>
          <span>
            {first}
            <br />
            {second}
          </span>
        </h2>
        {cls.paragraph ? (
          section.body.map((paragraph) => (
            <p key={paragraph} className={cls.paragraph}>
              {paragraph}
            </p>
          ))
        ) : (
          <div className={cls.copy}>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}
        {cls.images ? <div className={cls.images}>{images}</div> : images}
      </div>
    </section>
  );
}

/** Animated counters, as on the RAWBANK page; `null` values stay as an em dash. */
function Stats({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const [counting, setCounting] = useState(false);
  const [values, setValues] = useState(() => stats.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        setCounting(true);
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 1800);
          const eased = 1 - (1 - t) ** 3;
          setValues(stats.map((s) => (s.value ?? 0) * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.7 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [stats]);

  return (
    <div ref={ref} className={`cs-overview-stats${counting ? " is-counting" : ""}`}>
      {stats.map((stat, i) => (
        <div key={stat.label} className="cs-overview-stat">
          <span className={`cs-overview-stat-value${stat.value === null ? " is-pending" : ""}`}>
            {stat.value === null ? "—" : values[i].toFixed(stat.decimals ?? 0)}
            {stat.value === null ? null : stat.suffix}
          </span>
          <span className="cs-overview-stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

function AiTag() {
  return (
    <span className="cs-ai-tag" aria-label="AI-generated placeholder image">
      AI placeholder
    </span>
  );
}
