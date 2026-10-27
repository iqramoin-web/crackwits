"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const SERVICE_OPTIONS = [
  "Market Research",
  "AI Service",
  "Copy Writing",
  "Social Media",
  "Digital Media",
  "SEO & ASO",
  "Production",
  "Development",
  "UI / UX",
  "Branding Strategy",
  "Brand Design",
];

const COUNTRY_CODES = ["+961", "+965", "+971", "+966", "+1", "+44", "+33", "+49", "+91"];

const CONTACT_EMAIL = "hello@crackwits.com";

/** Static export: the brief is handed to the visitor's mail client instead of a backend. */
function buildMailto(form: HTMLFormElement, services: string[]) {
  const data = new FormData(form);
  const value = (key: string) => String(data.get(key) ?? "").trim();
  const fullName = value("fullName");
  const body = [
    `Full Name: ${fullName}`,
    `Email: ${value("email")}`,
    `Phone: ${value("countryCode")} ${value("phone")}`,
    `Services: ${services.length ? services.join(", ") : "—"}`,
  ].join("\n");
  const subject = `New brief${fullName ? ` from ${fullName}` : ""}`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function BriefUsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
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
      { threshold: 0.16 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const toggleService = (service: string) =>
    setSelectedServices((current) =>
      current.includes(service) ? current.filter((item) => item !== service) : [...current, service],
    );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = buildMailto(event.currentTarget, selectedServices);
    setSubmitted(true);
  };

  return (
    <main className="site is-loaded briefus-page">
      <SiteHeader variant="header--light" ctaHref="/briefus" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className={`briefus-hero${heroVisible ? " is-visible" : ""}`} aria-labelledby="briefus-title">
        <div className="briefus-inner">
          <h1 id="briefus-title">
            <span>LET&apos;S MAKE IT HAPPEN</span>
          </h1>
          <div className="briefus-services">
            <h2>What service can we assist you with?</h2>
            <div className="briefus-service-options">
              {SERVICE_OPTIONS.map((service) => (
                <button
                  key={service}
                  type="button"
                  className={selectedServices.includes(service) ? "is-selected" : ""}
                  onClick={() => toggleService(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
          <form className="briefus-form" onSubmit={handleSubmit}>
            <h2>Who&apos;s knocking?*</h2>
            <div className="briefus-fields">
              <input required name="fullName" placeholder="Full Name" aria-label="Full Name" />
              <input required type="email" name="email" placeholder="Email" aria-label="Email" />
              <div className="briefus-phone">
                <select name="countryCode" defaultValue="+961" aria-label="Country code">
                  {COUNTRY_CODES.map((code) => (
                    <option key={code}>{code}</option>
                  ))}
                </select>
                <input required name="phone" type="tel" placeholder="Phone" aria-label="Phone" />
              </div>
            </div>
            <button className="briefus-submit" type="submit">
              {submitted ? "Sent" : "Submit"}
            </button>
            {submitted && (
              <p className="briefus-success" role="status">
                Thanks — we&apos;ll be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </section>

      <SiteFooter footerRef={footerRef} visible={footerVisible} />
    </main>
  );
}
