"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { useMenuBodyClass } from "@/lib/useInView";
import type { LegalDocument } from "@/content/legal";

const SOCIAL_ICONS = [
  "IconWrapper.png",
  "IconWrapper-1.png",
  "IconWrapper-2.png",
  "IconWrapper-3.png",
  "IconWrapper-4.png",
  "IconWrapper-5.png",
];

const NAV = [
  ["/work", "Work"],
  ["/services", "Services"],
  ["/about", "About"],
  ["/insights", "Insights"],
  ["/briefus", "Contact"],
] as const;

/**
 * Shared layout for the legal pages. The header/menu differ slightly from the
 * shared SiteHeader (menu id `legal-site-menu`, legal-page bottom links), so
 * they are kept local to stay identical to the original.
 */
export function LegalPage({ title, intro, updated, sections }: LegalDocument) {
  const [menuOpen, setMenuOpen] = useState(false);
  useMenuBodyClass(menuOpen);

  return (
    <main className="site is-loaded legal-page">
      <header className={`header work-header header--light${menuOpen ? " header--menu-open" : ""}`}>
        <Link className="brand" href="/" aria-label="Crackwits home">
          <img src="/crackwits-logo.png" alt="Crackwits — Works. Words. Wonders." />
          <img className="brand-emblem-mobile" src="/crackwits-emblem-supplied.gif" alt="Crackwits" />
        </Link>
        <div className="header-actions">
          <Link className="header-cta" href="/briefus">
            Work with us
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="legal-site-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div id="legal-site-menu" className={`menu-overlay${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
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
              {SOCIAL_ICONS.map((icon) => (
                <a key={icon} className="menu-social-link" href="#social" aria-label="Social link">
                  <img src={`/menu-social/${icon}`} alt="" />
                </a>
              ))}
            </div>
          </div>
          <nav className="menu-nav" aria-label="Menu navigation">
            {NAV.map(([href, label]) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
                <span>{label}</span>
              </Link>
            ))}
          </nav>
          <div className="menu-bottom">
            <a className="menu-bottom-left" href="mailto:hello@crackwits.com">
              hello@crackwits.com
            </a>
            <div className="menu-bottom-right">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/cookies">Cookies</Link>
              <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </div>

      <article className="legal-page-content">
        <h1>{title}</h1>
        {updated && <p className="legal-updated">{updated}</p>}
        {intro && <p className="legal-intro">{intro}</p>}
        <div className="legal-sections">
          {sections.map((section) => (
            <section key={section.heading} className="legal-section">
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              {section.bullets && (
                <ul className={section.compactBullets ? "legal-list--compact" : undefined}>
                  {section.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              )}
              {section.subheading && <p className="legal-subheading">{section.subheading}</p>}
              {section.subBullets && (
                <ul>
                  {section.subBullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="legal-table-wrap">
                  <table>
                    <thead>
                      <tr>
                        {section.table.columns.map((column) => (
                          <th key={column}>{column}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row.join("-")}>
                          {row.map((cell, index) => (
                            <td key={index}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>
      </article>

      <SiteFooter visible />
    </main>
  );
}
