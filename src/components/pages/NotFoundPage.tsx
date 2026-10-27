"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

/** 404 in the /work page's visual language: big intro headline + footer. */
export function NotFoundPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <main className="site is-loaded work-page">
      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section className={`work-hero${visible ? " is-visible" : ""}`} aria-labelledby="not-found-title">
        <div className="work-container">
          <div className="work-intro">
            <h1 id="not-found-title">
              <span>This page took</span>
              <span>a different direction.</span>
            </h1>
          </div>
          <nav className="work-filters" aria-label="Where to next">
            <Link href="/">Home</Link>
            <Link href="/work">Work</Link>
            <Link href="/briefus">Contact</Link>
          </nav>
        </div>
      </section>
      <SiteFooter visible />
    </main>
  );
}
