"use client";

import Link from "next/link";
import { useMenuBodyClass } from "@/lib/useInView";

const SOCIALS = [
  ["facebook", "Facebook", "IconWrapper.png"],
  ["instagram", "Instagram", "IconWrapper-1.png"],
  ["x", "X", "IconWrapper-2.png"],
  ["behance", "Behance", "IconWrapper-3.png"],
  ["linkedin", "LinkedIn", "IconWrapper-4.png"],
  ["dribbble", "Dribbble", "IconWrapper-5.png"],
] as const;

const NAV = [
  ["/work", "Work"],
  ["/services", "Services"],
  ["/about", "About"],
  ["/insights", "Insights"],
  ["/briefus", "Contact"],
] as const;

type Props = {
  /** Extra header classes, e.g. "header--light" or "cs-header". */
  variant?: string;
  ctaHref?: string;
  menuOpen: boolean;
  setMenuOpen: (open: boolean | ((open: boolean) => boolean)) => void;
};

export function SiteHeader({ variant = "header--light", ctaHref = "/briefus", menuOpen, setMenuOpen }: Props) {
  useMenuBodyClass(menuOpen);

  return (
    <>
      <header className={`header work-header ${variant}${menuOpen ? " header--menu-open" : ""}`}>
        <Link className="brand" href="/" aria-label="Crackwits home">
          <img src="/crackwits-logo.png" alt="Crackwits — Works. Words. Wonders." />
          <img className="brand-emblem-mobile" src="/crackwits-emblem-supplied.gif" alt="Crackwits" />
        </Link>
        <div className="header-actions">
          <Link className="header-cta" href={ctaHref}>
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
    </>
  );
}

export function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div id="site-menu" className={`menu-overlay${open ? " is-open" : ""}`} aria-hidden={!open}>
      <div className="menu-overlay-inner">
        <button className="menu-overlay-close" type="button" aria-label="Close menu" onClick={onClose}>
          <span />
          <span />
        </button>
        <div className="menu-left">
          <div className="menu-emblem" aria-hidden="true">
            <img src="/crackwits-emblem-supplied.gif" alt="" />
          </div>
          <div className="menu-socials" aria-label="Social links">
            {SOCIALS.map(([id, label, icon]) => (
              <a key={id} className="menu-social-link" href={`#${id}`} aria-label={label}>
                <img src={`/menu-social/${icon}`} alt="" />
              </a>
            ))}
          </div>
        </div>
        <nav className="menu-nav" aria-label="Menu navigation">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} onClick={onClose}>
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        <div className="menu-bottom">
          <a className="menu-bottom-left" href="mailto:hello@crackwits.com">
            hello@crackwits.com
          </a>
          <div className="menu-bottom-right">
            <Link href="/privacy-policy">Privacy</Link>
            <Link className="menu-bottom-cookies" href="/cookies">
              Cookies Policy
            </Link>
            <Link href="/terms-and-conditions">Terms</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
