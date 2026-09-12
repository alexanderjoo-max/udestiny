import { useEffect, useRef, useState } from "react";
import Pillars from "./components/Pillars";
import Starfield from "./components/Starfield";
import { LANGS, PARTNERS, SOCIALS, copy, type Lang } from "./i18n";

const LINE = "https://lin.ee/iI4t8Bj";
const EMAIL = "mailto:info@udestinyglobal.com";
const WOBAZI = "https://wobazi.com";
const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

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
            <a href="#services" onClick={() => setNavOpen(false)}>
              {t.nav.services}
            </a>
            <a href="#about" onClick={() => setNavOpen(false)}>
              {t.nav.about}
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
            <a className="btn btn-primary btn-nav" href={LINE}>
              <span className="cta-full">{t.nav.cta}</span>
              <span className="cta-short">{t.nav.ctaShort}</span>
            </a>
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
            <div className="hero-glyph" aria-hidden="true">
              命
            </div>
            <div className="couplet left" aria-hidden="true">
              天干地支
            </div>
            <div className="couplet right" aria-hidden="true">
              阴阳五行
            </div>
            <div className="hero-inner">
              <p className="kicker">{t.hero.eyebrow}</p>
              <h1 className="display">{t.hero.title}</h1>
              <p className="hero-lead">{t.hero.lead}</p>
              <div className="hero-cta">
                <a className="btn btn-primary" href={LINE}>
                  {t.hero.cta}
                </a>
                <a className="btn btn-ghost" href={EMAIL}>
                  {t.hero.cta2}
                </a>
              </div>
            </div>
            <Pillars />
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
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.name}
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

function Globe() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 3 3.5 6 3.5 9s-1 6-3.5 9c-2.5-3-3.5-6-3.5-9S9.5 6 12 3z" />
    </svg>
  );
}
