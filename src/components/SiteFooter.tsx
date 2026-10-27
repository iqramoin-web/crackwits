import type { Ref } from "react";

const SOCIALS = [
  ["facebook", "Facebook", "IconWrapper.png"],
  ["instagram", "Instagram", "IconWrapper-1.png"],
  ["x", "X", "IconWrapper-2.png"],
  ["behance", "Behance", "IconWrapper-3.png"],
  ["linkedin", "LinkedIn", "IconWrapper-4.png"],
  ["dribbble", "Dribbble", "IconWrapper-5.png"],
] as const;

export function SiteFooter({ footerRef, visible = false }: { footerRef?: Ref<HTMLElement>; visible?: boolean }) {
  return (
    <footer ref={footerRef} className={`custom-footer${visible ? " is-visible" : ""}`} data-header-theme="dark">
      <div className="custom-footer-cta">
        <p className="custom-footer-cta-line">
          <span>Your next success story starts here.</span>
        </p>
        <a className="custom-footer-cta-line custom-footer-cta-link" href="mailto:hello@crackwits.com">
          <span>Let’s make it real!</span>
        </a>
      </div>
      <div className="custom-footer-contact">
        <div className="custom-footer-contact-group">
          <a className="custom-footer-email" href="mailto:hello@crackwits.com">
            hello@crackwits.com
          </a>
          <p className="custom-footer-location">Kuwait City - Dubai - Beirut</p>
        </div>
        <div className="custom-footer-contact-group custom-footer-social">
          <div className="custom-footer-social-links">
            {SOCIALS.map(([id, label, icon]) => (
              <a key={id} href={`#${id}`} aria-label={label}>
                <img src={`/menu-social/${icon}`} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="custom-footer-wordmark" aria-hidden="true">
        <img className="custom-footer-logo-base" src="/footer-attached-logo.png" alt="" />
      </div>
      <div className="custom-footer-legal">
        <div className="custom-footer-legal-left">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms &amp; Conditions</a>
          <a href="/cookies">Cookies</a>
        </div>
        <span className="custom-footer-copyright">CRACKWITS™ 2020–{new Date().getFullYear()}. All Rights Reserved.</span>
        <span className="custom-footer-tagline">Works. Words. Wonders.</span>
      </div>
    </footer>
  );
}
