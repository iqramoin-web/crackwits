"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const ASSETS = "/creative-output/";

type SectionKey = "hero" | "intro" | "imagination" | "behind" | "refinement" | "purpose" | "closing" | "more";

export function CreativeOutputPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Partial<Record<SectionKey, boolean>>>({});
  const [footerVisible, setFooterVisible] = useState(false);
  const sectionRefs = useRef<Partial<Record<SectionKey, HTMLElement | null>>>({});
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setReady(true);
  }, []);

  // One-shot reveal for each `[data-creative-section]`.
  useEffect(() => {
    const sections = Object.entries(sectionRefs.current).filter(([, el]) => el) as [SectionKey, HTMLElement][];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.getAttribute("data-creative-section") as SectionKey | null;
            if (key) setVisibleSections((current) => ({ ...current, [key]: true }));
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );
    sections.forEach(([, el]) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
      { threshold: 0.12 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const sectionRef = (key: SectionKey) => (el: HTMLElement | null) => {
    sectionRefs.current[key] = el;
  };
  const visible = (key: SectionKey) => (visibleSections[key] ? " is-visible" : "");

  return (
    <main className={`site is-loaded creative-output-page${ready ? " is-ready" : ""}`}>
      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section
        ref={sectionRef("hero")}
        data-creative-section="hero"
        data-header-theme="light"
        className={`creative-output-hero${visible("hero")}`}
      >
        <h1>
          <span>How the Creative Team turns Strategy</span>
          <span>into Scroll-Stopping Visuals.</span>
        </h1>
        <figure className="creative-output-hero-figure">
          <img
            src={`${ASSETS}creativeoutputcover.webp`}
            alt="Creative sketches, RAWBANK identity and Pointe Anglaise concepts"
          />
          <div className="creative-output-caption-grid" aria-label="Creative Output image descriptions">
            <span>Left: fast-paced design leading to sharp solutions.</span>
            <span>Middle: RAWBANK logo - from concept sketches to execution.</span>
            <span>Right: POINTE ANGLAISE - sketches brought to life.</span>
          </div>
        </figure>
      </section>
      <section
        ref={sectionRef("intro")}
        data-creative-section="intro"
        className={`creative-output-intro${visible("intro")}`}
      >
        <p>
          Inside CRACKWITS’ process, where strategy finds its creative form, and ideas come alive, on screens.
        </p>
      </section>
      <section
        ref={sectionRef("imagination")}
        data-creative-section="imagination"
        className={`creative-output-section creative-output-imagination${visible("imagination")}`}
      >
        <div className="creative-output-copy">
          <h2>
            <span>When Strategy Meets</span>
            <span>Imagination</span>
          </h2>
          <div className="creative-output-body">
            <p>
              Almost every idea at CRACKWITS starts with strategic thinking, that’s our blueprint. But somewhere between
              the brief and the first draft, something far less predictable, yet constructive takes over: creativity.
              The kind that doesn’t follow a timeline or checklist but flows freely through curiosity, intuition,
              instinct and appeal.
            </p>
            <p>
              Our team turns intent into emotion to translate tactility into visuals that make people pause, feel, and
              connect.
            </p>
          </div>
        </div>
        <figure className="creative-output-wide-figure">
          <img
            src={`${ASSETS}creativeoutputtypography.webp`}
            alt="Typography and visual references from the creative process"
          />
          <div className="creative-output-caption-grid" aria-label="Typography image descriptions">
            <span>Left: Typography inspiration from a café in Cologne.</span>
            <span>Middle: Graphic design work on Tolerance, Sofia.</span>
            <span>Right: Crime Festival poster in Cologne.</span>
          </div>
        </figure>
      </section>
      <section
        ref={sectionRef("behind")}
        data-creative-section="behind"
        className={`creative-output-section creative-output-behind${visible("behind")}`}
      >
        <div className="creative-output-copy">
          <h2>
            <span>Behind the Scroll-Stopping</span>
            <span>Visuals at CRACKWITS</span>
          </h2>
          <div className="creative-output-body">
            <p>
              Every idea looks different from the inside. While strategy might define the direction, it’s the design
              process that gives it color, rhythm, and life. To understand how that magic happens day to day, we asked
              Clement Nasr, our Lead Creative Director, to describe what creativity really looks like behind the scenes
              at CRACKWITS and here’s the inside perspective:
            </p>
          </div>
        </div>
        <div className="creative-output-story-grid">
          <article>
            <h3>Inspiration: Where Ideas Begin</h3>
            <p>
              “There is no set time for creativity. It happens while you’re moving — strolling through a city, sketching
              between meetings, noticing reflections on a steamy window, or stumbling upon an unexpected feed on
              Instagram. Inspiration hides everywhere: in shop windows, in the rhythm of street noise, in torn posters
              layered with graffiti, or in a typeface on a café menu.
            </p>
            <p>
              It also arrives in quieter moments: scrolling on your phone, reading articles and blogs, or exploring what
              companies around the world are creating. And it’s constantly pushed forward by new faces joining the
              team, the ones obsessed with trends and the latest online hype. Their energy sparks ideas no solo
              brainstorm ever could.”
            </p>
          </article>
          <figure>
            <img src={`${ASSETS}creativeoutputimage3.webp`} alt="Visual references gathered from everyday surroundings" />
            <div className="creative-output-caption-grid creative-output-caption-grid--three">
              <span>Left: Orange &amp; Lemon Festival, Menton.</span>
              <span>Middle: Vasarely, Pompidou Museum.</span>
              <span>Right: EU graphic designers’ poster, Sofia.</span>
            </div>
          </figure>
        </div>
        <div className="creative-output-story-grid creative-output-story-grid--reverse">
          <figure>
            <img src={`${ASSETS}creativeoutputwall.webp`} alt="Layered textures and street art references" />
            <div className="creative-output-caption-grid">
              <span>Left: East Side Gallery, Berlin Wall.</span>
              <span>Right: Chupa Chups street-art ad, Sofia.</span>
            </div>
          </figure>
          <article>
            <h3>Chaos: The Beauty In The Mess</h3>
            <p>
              “Even destruction has its own design language, made of cracks, folds, scratches, and the marks time leaves
              behind.
            </p>
            <p>
              Coffee shops are another source of creative momentum. People come and go in waves, bringing confidence,
              stories, and occasionally the most bizarre, inspiring outfits. The mix of voices, the sound of the
              espresso machine, and a playlist shifting from jazz to electro all feed the mind. Overheard conversations,
              small dramas, chance encounters, they turn into visual cues before you even realize it.”
            </p>
          </article>
        </div>
      </section>
      <section
        ref={sectionRef("refinement")}
        data-creative-section="refinement"
        className={`creative-output-section creative-output-refinement${visible("refinement")}`}
      >
        <div className="creative-output-copy">
          <h2>
            <span>Refinement: Where</span>
            <span>Ideas Take Shape</span>
          </h2>
          <div className="creative-output-body">
            <p>
              Then comes the brief. You read, ask, discuss, challenge, draft, and redo it as many times as needed.
              Understanding the client, their product, and the market they want to reach is essential. Meeting with
              clients brings clarity, direction, and alignment.
            </p>
            <p>
              The process is never linear. Sketches, scribbles, sticky notes, even the ideas that seem irrelevant today
              might spark something tomorrow. The hardest part is choosing the strongest concepts while keeping the rest
              as seeds for future projects.
            </p>
            <p>
              Refinement is where everything tightens: sketches become mock-ups, compositions shift, colors evolve,
              details sharpen. Mistakes are welcomed, they often lead to discoveries you wouldn’t have planned. Jumping
              between projects even becomes its own creative relief.
            </p>
            <p>
              Inspiration continues through books, design series, museums, and conversations with coworkers. New
              designers keep pushing visual boundaries, rewriting rules, and reshaping brand identities. They’re the
              explorers, the ones learning, challenging, and teaching all at once.
            </p>
            <p>
              And yes, there is always beauty. Because beauty works. But beauty alone isn’t enough. It must have
              purpose. It must say something. Beauty captures attention, meaning keeps it.
            </p>
            <p>— Clement Nasr, Lead Creative Director at CRACKWITS</p>
          </div>
        </div>
        <figure className="creative-output-wide-figure">
          <img src={`${ASSETS}creativeoutputworkingsession.webp`} alt="A creative working session" />
          <div className="creative-output-caption-grid">
            <span>Left: Working session at a café.</span>
            <span>Right: Typography inspiration from Simon Garfield’s Just My Type.</span>
          </div>
        </figure>
      </section>
      <section
        ref={sectionRef("purpose")}
        data-creative-section="purpose"
        className={`creative-output-section creative-output-purpose${visible("purpose")}`}
      >
        <div className="creative-output-copy">
          <h2>
            <span>Beauty with</span>
            <span>Purpose</span>
          </h2>
          <div className="creative-output-body">
            <p>
              What stands out most in those words is the heart of what we do at CRACKWITS: beauty alone isn’t enough. A
              design can catch your eye, but it’s meaning that makes you stop, think, and remember.
            </p>
            <p>
              Every color, frame, and headline is built on purpose. Every project starts with strategy but ends with
              something far more human: emotion.
            </p>
          </div>
        </div>
        <figure className="creative-output-wide-figure">
          <img src={`${ASSETS}creativeoutputdesigndetails.webp`} alt="Design details from the Crackwits workspace" />
          <div className="creative-output-caption-grid creative-output-caption-grid--three">
            <span>Left: Working at Concierge Café, Badaro.</span>
            <span>Middle: Graffiti staircase leading to the architects’ office.</span>
            <span>Right: Design details within the space.</span>
          </div>
        </figure>
      </section>
      <section
        ref={sectionRef("closing")}
        data-creative-section="closing"
        className={`creative-output-closing${visible("closing")}`}
      >
        <h2>
          <span>Where Strategy Ends</span>
          <span>and Emotion Begins</span>
        </h2>
        <p>
          For us, strategy and creativity don’t exist in separate rooms. They move together: one shaping the why, the
          other bringing it to life. And when they meet in perfect balance, that’s when a design stops being content and
          becomes connection.
        </p>
        <p className="creative-output-closing-caption">Café work session for COYA Music.</p>
      </section>
      <section ref={sectionRef("more")} data-creative-section="more" className={`creative-output-more${visible("more")}`}>
        <div className="creative-output-more-inner">
          <h2>More Insights</h2>
          <div className="creative-output-more-grid">
            <Link className="creative-output-more-card" href="/insights">
              <div>
                <img src="/insights/agency-story.jpg" alt="Not Just Another Agency" />
              </div>
              <p>INDUSTRIAL</p>
              <h3>Not just another agency: the story behind CRACKWITS</h3>
            </Link>
            <Link className="creative-output-more-card" href="/insights">
              <div>
                <img src="/insights/brand-voice.png" alt="This Isn’t Your Average Fintech Story" />
              </div>
              <p>FINANCE</p>
              <h3>This isn’t your average fintech story: how ILLICOCASH found its voice.</h3>
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter footerRef={footerRef} visible={footerVisible} />
    </main>
  );
}
