import { useEffect, useRef, useState } from "react";
import Starfield from "./components/Starfield";
import { LANGS, PARTNERS, SOCIALS, copy, type Lang } from "./i18n";

const LINE = "https://lin.ee/iI4t8Bj";
const EMAIL = "mailto:info@udestinyglobal.com";
const WOBAZI = "https://wobazi.com";
const logoSrc = `${import.meta.env.BASE_URL}logo.png`;
const wobaziLogo = `${import.meta.env.BASE_URL}wobazi-logo.png`;
const wobaziPhone = `${import.meta.env.BASE_URL}wobazi-phone.png`;

function useReveal(dep: unknown) {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("in");
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [dep]);
}

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [splash, setSplash] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const t = copy[lang];

  useReveal(lang);

  useEffect(() => {
    const saved = localStorage.getItem("ud-lang") as Lang | null;
    if (saved && LANGS.some((l) => l.id === saved)) setLang(saved);
    const timer = window.setTimeout(() => setSplash(false), 1700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("ud-lang", lang);
  }, [lang]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <div className={`splash ${splash ? "" : "hide"}`} aria-hidden={!splash}>
        <div className="splash-inner">
          <div className="splash-glyph">命</div>
          <img className="splash-logo" src={logoSrc} alt="U Destiny" />
          <p className="splash-wait">{t.splash.waiting}</p>
        </div>
      </div>

      <div className="galaxy" aria-hidden="true">
        <div className="galaxy-img" />
      </div>
      <div className="aurora" aria-hidden="true" />
      <Starfield />
      <div className="grain" aria-hidden="true" />

      <div className="page">
        <header className={`nav ${navOpen ? "open" : ""}`}>
          <a className="nav-logo" href="#top" onClick={() => setNavOpen(false)}>
            <img src={logoSrc} alt="U Destiny" />
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#about" onClick={() => setNavOpen(false)}>
              {t.nav.about}
            </a>
            <a href="#services" onClick={() => setNavOpen(false)}>
              {t.nav.services}
            </a>
            <a href="#partners" onClick={() => setNavOpen(false)}>
              {t.nav.partners}
            </a>
            <a href="#contact" onClick={() => setNavOpen(false)}>
              {t.nav.contact}
            </a>
          </nav>
          <div className="nav-actions">
            <div className={`lang ${langOpen ? "open" : ""}`} ref={langRef}>
              <button
                className="lang-btn"
                type="button"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
              >
                <Globe />
                {lang.toUpperCase()}
              </button>
              <ul className="lang-menu" role="listbox">
                {LANGS.map((l) => (
                  <li key={l.id}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={lang === l.id}
                      onClick={() => {
                        setLang(l.id);
                        setLangOpen(false);
                      }}
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="nav-toggle"
              type="button"
              aria-label="Menu"
              aria-expanded={navOpen}
              onClick={() => setNavOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </header>

        <main id="main">
          <section className="hero" id="top">
            <div className="hero-wobazi">
              <div className="hero-copy">
                <p className="kicker">{t.wobazi.kicker}</p>
                <h1 className="display">{t.wobazi.title}</h1>
                <p className="hero-lead">{t.wobazi.lead}</p>
                <a className="btn btn-primary" href={WOBAZI}>
                  {t.wobazi.cta}
                </a>
              </div>
              <div className="hero-visual">
                <img src={wobaziPhone} alt="Wobazi on iPhone" className="hero-phone" />
                <img src={wobaziLogo} alt="Wobazi" className="hero-logo" />
              </div>
            </div>
          </section>

          <section className="section manifesto" id="about">
            <div className="wrap">
              <p className="kicker reveal">{t.about.kicker}</p>
              <div className="manifesto-grid">
                {t.about.items.map((item) => (
                  <article className="man-card reveal" key={item.title}>
                    <div className="man-num">{item.n}</div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
              <p className="about-tag reveal">{t.about.tagline}</p>
            </div>
          </section>

          <section className="section" id="services">
            <div className="wrap">
              <header className="elements-head reveal">
                <p className="kicker">{t.services.kicker}</p>
                <h2 className="display">{t.services.title}</h2>
              </header>
              <div className="svc-grid">
                {t.services.items.map((item) => (
                  <article className="svc-card reveal" key={item.title}>
                    <div className="svc-seal">{item.seal}</div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section partners" id="partners">
            <div className="wrap">
              <header className="elements-head reveal">
                <p className="kicker">{t.partners.kicker}</p>
                <h2 className="display">{t.partners.title}</h2>
              </header>
            </div>
            <div className="marquee" aria-label="Partners">
              <div className="marquee-track">
                {[...PARTNERS, ...PARTNERS].map((p, i) => (
                  <div className="partner-slide" key={`${p.alt}-${i}`}>
                    <img src={p.src} alt={p.alt} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section close" id="contact">
            <div className="wrap reveal">
              <p className="kicker">{t.contact.kicker}</p>
              <h2 className="display">{t.contact.title}</h2>
              <p className="section-lead">{t.contact.lead}</p>
              <div className="close-cta">
                <a className="btn btn-primary" href={LINE}>
                  {t.contact.line}
                </a>
                <a className="btn btn-ghost" href={EMAIL}>
                  {t.contact.emailLabel}: info@udestinyglobal.com
                </a>
              </div>
              <div className="socials">
                {SOCIALS.map((s) => (
                  <a
                    key={s.id}
                    className={`social social-${s.id}`}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    title={s.name}
                  >
                    <SocialGlyph id={s.id} />
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="wrap footer-grid">
            <div>
              <img className="footer-logo" src={logoSrc} alt="U Destiny" />
              <p>{t.footer.blurb}</p>
            </div>
            <div>
              <h4>{t.footer.contact}</h4>
              <ul>
                <li>
                  <a href={EMAIL}>info@udestinyglobal.com</a>
                </li>
                <li>
                  <a href={LINE}>LINE</a>
                </li>
                <li>
                  <a href="#about">{t.footer.about}</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>{t.nav.services}</h4>
              <ul>
                <li>
                  <a href="#services">{t.nav.services}</a>
                </li>
                <li>
                  <a href={WOBAZI}>{t.footer.wobazi}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="wrap footer-bottom">
            <span>{t.footer.copy}</span>
            <span>U Destiny</span>
          </div>
        </footer>
      </div>
    </>
  );
}

function SocialGlyph({ id }: { id: (typeof SOCIALS)[number]["id"] }) {
  switch (id) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97H15.83c-1.491 0-1.956.93-1.956 1.885v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm9.25 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
        </svg>
      );
    case "line":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91C22 6.45 17.5 2 12.04 2zm5.72 14.08c-.24.68-1.41 1.3-1.97 1.35-.5.05-1.14.08-1.84-.12-.42-.12-.97-.32-1.67-.62-2.94-1.27-4.86-4.23-5.01-4.43-.15-.2-1.26-1.68-1.26-3.2 0-1.52.8-2.27 1.08-2.58.28-.31.61-.39.82-.39h.59c.19 0 .44-.07.7.54.26.62.88 2.15.96 2.3.08.16.13.34.03.54-.1.2-.15.33-.3.5-.15.18-.31.4-.45.53-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.3.15.46.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2 .95.3.15.49.22.56.34.08.13.08.74-.16 1.42z" />
        </svg>
      );
    case "telegram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M9.78 15.48 9.6 19.2c.4 0 .57-.17.78-.37l1.87-1.8 3.88 2.85c.71.39 1.22.19 1.41-.66l2.56-12.04c.23-1.01-.36-1.4-1.05-1.16L3.34 10.2c-.98.38-.96.92-.17 1.16l4.43 1.38 10.3-6.5c.48-.3.93-.13.56.18z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.44a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.9-2.88 2.89 2.89 0 0 1 2.9-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.16 15.1a6.34 6.34 0 0 0 6.33 6.34 6.34 6.34 0 0 0 6.33-6.34V8.73a8.23 8.23 0 0 0 4.77 1.52V6.8a4.84 4.84 0 0 1-1-.11z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.57 12 3.57 12 3.57s-7.54 0-9.38.48A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.84.48 9.38.48 9.38.48s7.54 0 9.38-.48a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.75 15.57V8.43L15.84 12l-6.09 3.57z" />
        </svg>
      );
  }
}

function Globe() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 3 3.5 6 3.5 9s-1 6-3.5 9c-2.5-3-3.5-6-3.5-9S9.5 6 12 3z" />
    </svg>
  );
}
