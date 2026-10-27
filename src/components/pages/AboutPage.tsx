"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { MenuOverlay } from "@/components/SiteHeader";
import { useMenuBodyClass } from "@/lib/useInView";

const CAROUSEL_IMAGES = [
  "A19_7f3760c418.webp",
  "IMG_8955_21bfb8b22d.webp",
  "A2_ba70041d1f.webp",
  "IMG_8950_587bd9afac.webp",
  "about_image1_6a55bc0419.png",
  "about_image2_4d4c98a5ac.png",
];

const STATISTICS = [
  { value: 80, suffix: "+", label: "Global Clients" },
  { value: 100, suffix: "+", label: "Projects Launched" },
  { value: 88, suffix: "%", label: "Referral Rate" },
  { value: 14, suffix: "+", label: "Countries" },
];

const COMMITMENT_TEXT =
  "At CRACKWITS, we are committed to creating meaningful brand experiences that combine strategy, creativity, and technology.";

const COMMITMENT_LINES_DESKTOP = [
  "At CRACKWITS, we are committed",
  "to creating meaningful brand",
  "experiences that combine strategy,",
  "creativity, and technology.",
];

const COMMITMENT_LINES_MOBILE = [
  "At CRACKWITS, we are",
  "committed to creating",
  "meaningful brand",
  "experiences that combine",
  "strategy,creativity, and",
  "technology.",
];

/** [name, role, notable] */
const TEAM = [
  ["Rouwayna Merheb", "Senior Project Manager", "Meticulously Organized"],
  ["Nour Moukarzel", "Senior Project Manager", "Voilà, Delivered"],
  ["Fatima Farhat", "Senior Web Developer", "CodeGPT"],
  ["Johnny Bou Malhab", "Senior Product Designer UI/UX", "Jack of All Trades"],
  ["Bill Bahous", "Operations & Traffic Manager", "Smooth Operator"],
  ["Tatiana Karam", "Art Director", "Aesthetic Visionary"],
  ["Jack El Hajj", "Senior SEO Manager", "Search Sensei"],
  ["Ali Assaad", "Marketing Associate", "Ad-venger"],
  ["Hind Chalak", "Communication Manager", "Conversation Curator"],
  ["Zeina Bou Mjahed", "Junior Manager", "Pressure Proof"],
  ["Joanna Jallad", "Project Manager", "Junior Juggler"],
  ["Ramez Megahed", "Web Developer", "Web Wizard"],
  ["Iqra Moin Uddin", "UI /UX Designer", "Site Sculptor"],
  ["Faisal Nawaz", "Senior Finalizer", "Pixel Perfectionist"],
  ["Romy Salameh", "SM Content Coordinator", "Scroll Stopper"],
  ["Elsy Kheir", "SM Content Coordinator", "Social Mediaholic"],
  ["Jaafar Mohammad", "SEO Executive", "Keyword Keeper"],
  ["Rafka Chamoun", "Administrative Manager", "Multitasking Maven"],
] as const;

const LEAD_PORTRAITS = [
  "/about/lead-team/Amr_profile_6807340cd5.webp",
  "/about/lead-team/Carla_Profile_copy_88e610975b.webp",
];

/** Portraits, index-aligned with TEAM. Some are served from the original CMS, as on the live site. */
const TEAM_PORTRAITS = [
  "/about/team/Rouwayna_profile_attached.webp",
  "/about/team/Nour_profile_copy_6e58cd48b8.webp",
  "/about/team/Fatima_profile_4685d25a84.webp",
  "/about/team/Johnny_profile_copy_18241938c3.webp",
  "/about/team/Bill_Profile_copy_d333139537.webp",
  "/about/team/Tatiana_profile_copy_2b7e3c42b9.webp",
  "/about/team/Jack_profile_a070c6007c.webp",
  "/about/team/Ali_Profile_copy_6e5f765aed.webp",
  "/about/team/Hind_profile_copy_7e010801fe.webp",
  "/about/team/Zeina_Profile_copy_898ec59cd0.webp",
  "/about/team/Joanna_profile_copy_33d1aeaea3.webp",
  "/about/team/Ramez_profile_451ecdfc07.webp",
  "/about/team/Iqra_profile_062e37516e.webp",
  "/about/team/Faisal_profile_b998025677.webp",
  "/about/team/Romy_Profile_copy_0d8f2c7580.webp",
  "/about/team/Elsy_Profile_copy_0f4f5415e1.webp",
  "/about/team/Jaafar_profile_d2d12bc7b2.webp",
  "/about/team/Rafka_profile_copy_e2df7340b9.webp",
];

type Preview = { src: string; name: string; x: number; y: number };

const clamp01 = (value: number) => Math.min(Math.max(value, 0), 1);

function CommitmentLine({ line, lineIndex, variant }: { line: string; lineIndex: number; variant: "desktop" | "mobile" }) {
  return (
    <span className={`about-commitment-line about-commitment-line--${variant}`}>
      {line.split(" ").map((word, wordIndex) => (
        <span
          key={`${variant === "mobile" ? "mobile-" : ""}${lineIndex}-${word}-${wordIndex}`}
          className="about-commitment-word"
          aria-hidden="true"
        >
          {word}
          {" "}
        </span>
      ))}
    </span>
  );
}

export function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [lightTransitioned, setLightTransitioned] = useState(false);
  const [approachVisible, setApproachVisible] = useState(false);
  const [leadTeamVisible, setLeadTeamVisible] = useState(false);
  const [statisticsVisible, setStatisticsVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [preview, setPreview] = useState<Preview | null>(null);
  const storyRef = useRef<HTMLElement | null>(null);
  const carouselRef = useRef<HTMLElement | null>(null);
  const approachRef = useRef<HTMLElement | null>(null);
  const leadTeamRef = useRef<HTMLElement | null>(null);
  const commitmentRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const statisticsRef = useRef<HTMLElement | null>(null);
  const statisticsHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const isTransitionedRef = useRef(false);

  useMenuBodyClass(menuOpen);

  // Preload portraits so hover previews appear instantly.
  useEffect(() => {
    [...LEAD_PORTRAITS, ...TEAM_PORTRAITS].forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  useEffect(() => {
    const section = storyRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStoryVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.24 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Dark → light transition once the carousel reaches 70% of the viewport (reverts below 82%).
  useEffect(() => {
    const update = () => {
      const carousel = carouselRef.current;
      if (!carousel) return;
      const top = carousel.getBoundingClientRect().top;
      const enterAt = window.innerHeight * 0.7;
      const exitAt = window.innerHeight * 0.82;
      if (!isTransitionedRef.current && top <= enterAt) {
        isTransitionedRef.current = true;
        setLightTransitioned(true);
      } else if (isTransitionedRef.current && top > exitAt) {
        isTransitionedRef.current = false;
        setLightTransitioned(false);
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Scroll-scrubbed word reveal for the commitment heading.
  useEffect(() => {
    const section = commitmentRef.current;
    if (!section) return;
    const words = Array.from(section.querySelectorAll<HTMLElement>(".about-commitment-word"));
    const eyebrow = section.querySelector<HTMLElement>(".about-commitment-eyebrow");
    const support = section.querySelector<HTMLElement>(".about-commitment-support");
    const cta = section.querySelector<HTMLElement>(".about-commitment-cta");
    let frame = 0;

    const render = () => {
      const rect = section.getBoundingClientRect();
      const start = window.innerHeight * 0.9;
      const end = window.innerHeight * 0.1;
      const progress = clamp01((start - rect.top) / Math.max(start - end, 1));
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      words.forEach((word, index) => {
        const wordsProgress = reduced ? 1 : clamp01((progress - 0.12) / 0.62);
        const wordProgress = reduced ? 1 : clamp01(wordsProgress * (words.length + 0.5) - index);
        word.style.opacity = String(0.08 + wordProgress * 0.92);
        word.style.transform = `translate3d(${(1 - wordProgress) * 72}px, 0, 0)`;
      });

      const eyebrowProgress = reduced ? 1 : clamp01(progress * 2.4);
      const supportProgress = reduced ? 1 : clamp01((progress - 0.73) / 0.12);
      const ctaProgress = reduced ? 1 : clamp01((progress - 0.84) / 0.12);
      if (eyebrow) eyebrow.style.transform = `translate3d(${(1 - eyebrowProgress) * 42}px, 0, 0)`;
      if (support) {
        support.style.opacity = String(supportProgress);
        support.style.transform = `translate3d(${(1 - supportProgress) * 34}px, 0, 0)`;
      }
      if (cta) {
        cta.style.opacity = String(ctaProgress);
        cta.style.transform = `translate3d(${(1 - ctaProgress) * 28}px, 0, 0)`;
      }
    };

    const schedule = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  useEffect(() => {
    const section = approachRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setApproachVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = statisticsRef.current;
    if (!section) return;
    const grid = section.querySelector(".about-statistics-grid");
    if (!grid) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatisticsVisible(true);
          observer.unobserve(grid);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = leadTeamRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLeadTeamVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.16 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // On mobile, show the portrait of the team row nearest the upper-middle of the viewport.
  useEffect(() => {
    const section = leadTeamRef.current;
    if (!section || !window.matchMedia("(max-width: 767px)").matches) return;
    const rows = Array.from(section.querySelectorAll(".about-lead-team-mobile-row"));
    if (!rows.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!best) return;
        const index = rows.indexOf(best.target);
        if (index < 0) return;
        setPreview({ src: TEAM_PORTRAITS[index], name: TEAM[index][0], x: 0, y: 0 });
      },
      { rootMargin: "-34% 0px -50% 0px", threshold: [0, 0.2, 0.5, 0.8, 1] },
    );
    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
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

  const handleLeadEnter = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch") event.currentTarget.style.setProperty("--lead-scale", "1.05");
  };
  const handleLeadLeave = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--lead-scale", "1");
  };
  const showRowPreview = (event: PointerEvent<HTMLDivElement>, index: number) => {
    if (event.pointerType === "touch") return;
    const size = Math.min(240, window.innerWidth * 0.28);
    const x = Math.min(Math.max(event.clientX + 24, 12), window.innerWidth - size - 12);
    const y = Math.min(Math.max(event.clientY + 22, 12), window.innerHeight - size - 12);
    setPreview({ src: TEAM_PORTRAITS[index], name: TEAM[index][0], x, y });
  };
  const hideRowPreview = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch") setPreview(null);
  };

  return (
    <main className="site is-loaded about-site">
      <header
        className={`header about-header${lightTransitioned ? " header--light" : ""}${menuOpen ? " header--menu-open" : ""}`}
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
          <Link className="header-cta" href="/briefus">
            Work with us
          </Link>
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
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />

      <section className="about-hero" aria-labelledby="about-title" data-header-theme="dark">
        <h1 id="about-title" className="about-title" aria-label="Seamless solutions that connect vision and emotion.">
          <span className="about-title-mask">
            <span>Seamless solutions</span>
          </span>
          <span className="about-title-mask">
            <span>that connect vision</span>
          </span>
          <span className="about-title-mask">
            <span>and emotion.</span>
          </span>
        </h1>
        <div className="about-image-reveal">
          <img
            className="about-team-image about-team-image--desktop"
            src="/about/crackwits-team.webp"
            alt="The Crackwits team"
          />
          <img
            className="about-team-image about-team-image--mobile"
            src="/about/crackwits-team-mobile.webp"
            alt="The Crackwits team"
          />
        </div>
      </section>

      <section
        ref={storyRef}
        className={`about-story${storyVisible ? " is-visible" : ""}${lightTransitioned ? " is-transitioned" : ""}`}
        aria-labelledby="about-story-title"
        data-header-theme="dark"
      >
        <p className="about-story-eyebrow">About us</p>
        <div id="about-story-title" className="about-story-main">
          <div className="about-story-line">
            <span>
              Our culture is wired with the belief that the strongest brands
              <br className="about-story-desktop-break" />
              {" are never shaped by convention. They are shaped by sharp"}
              <br className="about-story-desktop-break" />
              {" thinking, strategic clarity, and the courage to push beyond"}
              <br className="about-story-desktop-break" />
              {" what is expected."}
            </span>
          </div>
        </div>
        <div className="about-story-support">
          <p className="about-story-line">
            With a mindset rooted in challenging limits and uncovering smarter ways forward, the agency creates work
            that is designed to perform, scale, and leave a lasting mark.
          </p>
        </div>
      </section>

      <div className={`about-light-sections${lightTransitioned ? " is-transitioned" : ""}`} data-header-theme="light">
        <section ref={carouselRef} className="about-carousel" aria-label="Crackwits moments">
          <div className="about-carousel-track">
            {[0, 1].map((setIndex) => (
              <div key={setIndex} className="about-carousel-set" aria-hidden={setIndex === 1}>
                {CAROUSEL_IMAGES.map((image) => (
                  <div key={`${setIndex}-${image}`} className="about-carousel-card">
                    <img
                      src={`/about/carousel/${image}`}
                      alt={setIndex === 0 ? "Crackwits team moment" : ""}
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section
          ref={statisticsRef}
          className={`about-statistics${statisticsVisible ? " is-visible" : ""}`}
          aria-labelledby="about-statistics-title"
        >
          <div className="about-statistics-inner">
            <div className="about-statistics-heading-mask is-visible">
              <h2 ref={statisticsHeadingRef} id="about-statistics-title">
                Six years of building brands, launching ideas, and delivering measurable results.
              </h2>
            </div>
            <div className="about-statistics-grid">
              {STATISTICS.map((stat) => (
                <div key={stat.label} className="about-statistic">
                  <div className="about-statistic-value">
                    <span>{stat.value}</span>
                    <span className="about-statistic-suffix" aria-hidden="true">
                      {stat.suffix}
                    </span>
                  </div>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={approachRef}
          className={`about-approach${approachVisible ? " is-visible" : ""}`}
          aria-labelledby="about-approach-title"
        >
          <div className="about-approach-header">
            <div className="about-approach-eyebrow-mask">
              <p className="about-approach-eyebrow">Our approach</p>
            </div>
            <div className="about-approach-heading-mask">
              <h2 id="about-approach-title">
                <span>From Strategy to</span>
                <span>Measurable Impact</span>
              </h2>
            </div>
          </div>
          <div className="about-approach-grid">
            <article className="about-approach-card about-approach-card--one">
              <div className="about-approach-card-top">
                <div className="about-approach-circles" aria-hidden="true">
                  <span className="is-solid" />
                  <span />
                </div>
                <p className="about-approach-number">01</p>
              </div>
              <div className="about-approach-copy">
                <h3>
                  From Strategy
                  <br />
                  To Pixel
                </h3>
                <div className="about-approach-divider" />
                <p className="about-approach-description">
                  We begin with sharp thinking and a clear understanding of the brand, audience and ambition—turning
                  strategy into distinctive, carefully crafted experiences.
                </p>
              </div>
            </article>
            <article className="about-approach-card about-approach-card--two">
              <div className="about-approach-card-top">
                <div className="about-approach-circles" aria-hidden="true">
                  <span className="is-solid" />
                  <span />
                  <span className="is-solid" />
                </div>
                <p className="about-approach-number">02</p>
              </div>
              <div className="about-approach-copy">
                <h3>
                  Built to Challenge
                  <br />
                  Convention
                </h3>
                <div className="about-approach-divider" />
                <p className="about-approach-description">
                  We bring strategy, design, content and technology together to create ideas that move brands forward
                  and perform consistently and meaningfully across every relevant touchpoint.
                </p>
              </div>
            </article>
            <article className="about-approach-card about-approach-card--three">
              <div className="about-approach-card-top">
                <div className="about-approach-circles" aria-hidden="true">
                  <span className="is-solid" />
                  <span className="is-solid" />
                  <span className="is-solid" />
                  <span />
                </div>
                <p className="about-approach-number">03</p>
              </div>
              <div className="about-approach-copy">
                <h3>
                  Designed to Deliver
                  <br />
                  Measurable Impact
                </h3>
                <div className="about-approach-divider" />
                <p className="about-approach-description">
                  Every execution is built with purpose—from brand expression and digital experiences to campaigns
                  that strengthen relevance, performance and long-term growth.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section
          ref={leadTeamRef}
          className={`about-lead-team${leadTeamVisible ? " is-visible" : ""}`}
          aria-labelledby="about-lead-team-title"
        >
          <div className="about-lead-team-top">
            <div className="about-lead-team-heading">
              <div className="about-lead-team-eyebrow-mask">
                <p className="about-lead-team-eyebrow">Your lead team</p>
              </div>
              <div className="about-lead-team-title-mask">
                <h2 id="about-lead-team-title">
                  <span>Based in Kuwait</span>
                  <span>Moving around world</span>
                </h2>
              </div>
            </div>
            <div className="about-lead-team-portraits">
              <article className="about-lead-person">
                <div className="about-lead-portrait" onPointerEnter={handleLeadEnter} onPointerLeave={handleLeadLeave}>
                  <img src={LEAD_PORTRAITS[0]} alt="Amr Chalak" />
                </div>
                <h3>AMR CHALAK</h3>
                <p>CEO</p>
              </article>
              <article className="about-lead-person">
                <div
                  className="about-lead-portrait about-lead-portrait--carla"
                  onPointerEnter={handleLeadEnter}
                  onPointerLeave={handleLeadLeave}
                >
                  <img src={LEAD_PORTRAITS[1]} alt="Carla Gurunian" />
                </div>
                <h3>CARLA GURUNIAN</h3>
                <p>Director of Communication</p>
              </article>
            </div>
          </div>

          <div className="about-lead-team-table" role="table" aria-label="Crackwits team">
            <div className="about-lead-team-row about-lead-team-row--header" role="row">
              <span role="columnheader">Team Member</span>
              <span role="columnheader">Role</span>
              <span role="columnheader">Notable</span>
            </div>
            {TEAM.map(([name, role, notable], index) => (
              <div
                key={name}
                className="about-lead-team-row"
                role="row"
                onPointerEnter={(event) => showRowPreview(event, index)}
                onPointerMove={(event) => showRowPreview(event, index)}
                onPointerLeave={hideRowPreview}
              >
                <span role="cell">{name}</span>
                <span role="cell">{role}</span>
                <span role="cell">{notable}</span>
              </div>
            ))}
          </div>

          <div className="about-lead-team-mobile-list" aria-label="Crackwits team members">
            {TEAM.map(([name, role, notable], index) => (
              <div
                key={name}
                className="about-lead-team-mobile-row"
                onClick={() => setPreview({ src: TEAM_PORTRAITS[index], name, x: 0, y: 0 })}
              >
                <h3>{name}</h3>
                <p>{role}</p>
                <p>{notable}</p>
                {preview?.name === name && <img className="about-lead-mobile-preview" src={preview.src} alt="" />}
              </div>
            ))}
          </div>

          {preview && (
            <div className="about-lead-preview" style={{ left: preview.x, top: preview.y }} aria-hidden="true">
              <img key={preview.src} src={preview.src} alt="" />
            </div>
          )}
        </section>

        <section ref={commitmentRef} className="about-commitment" aria-labelledby="about-commitment-title">
          <div className="about-commitment-copy">
            <div className="about-commitment-eyebrow-mask">
              <p className="about-commitment-eyebrow">Commitment</p>
            </div>
            <h2 id="about-commitment-title" className="commitment-heading" aria-label={COMMITMENT_TEXT}>
              {COMMITMENT_LINES_DESKTOP.map((line, index) => (
                <CommitmentLine key={line} line={line} lineIndex={index} variant="desktop" />
              ))}
              {COMMITMENT_LINES_MOBILE.map((line, index) => (
                <CommitmentLine key={line} line={line} lineIndex={index} variant="mobile" />
              ))}
            </h2>
            <p className="about-commitment-support">
              We partner closely with our clients to transform ideas into impactful solutions that connect with
              audiences, strengthen brands, and deliver lasting value.
            </p>
            <Link className="about-commitment-cta" href="/briefus">
              Get in touch
            </Link>
          </div>
          <figure className="about-commitment-visual">
            <img
              className="commitment-image"
              src="/about/commitment/A19.webp"
              alt="The Crackwits team sharing a creative moment around a worktable"
            />
          </figure>
        </section>

        <SiteFooter footerRef={footerRef} visible={footerVisible} />
      </div>
    </main>
  );
}
