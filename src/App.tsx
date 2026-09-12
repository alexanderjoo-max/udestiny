import { useEffect, useRef, useState } from "react";
import Elements from "./components/Elements";
import Pillars from "./components/Pillars";
import Starfield from "./components/Starfield";
import { LANGS, copy, type Lang } from "./i18n";

const WOBAZI = "https://wobazi.com";
const ALICE = "https://wobazi.com/Master-Alice.html";
const ALICE_SITE = "https://www.masteralice.com";
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
            <a href="#practice" onClick={() => setNavOpen(false)}>
              {t.nav.practice}
            </a>
            <a href="#elements" onClick={() => setNavOpen(false)}>
              {t.nav.elements}
            </a>
            <a href="#alice" onClick={() => setNavOpen(false)}>
              {t.nav.alice}
            </a>
            <a href="#wobazi" onClick={() => setNavOpen(false)}>
              {t.nav.wobazi}
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
            <a className="btn btn-primary btn-nav" href={WOBAZI}>
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
                <a className="btn btn-primary" href={WOBAZI}>
                  {t.hero.cta} <span className="btn-char">龙</span>
                </a>
                <a className="btn btn-ghost" href={ALICE}>
                  {t.hero.cta2}
                </a>
              </div>
              <p className="hero-note">{t.hero.note}</p>
            </div>
            <Pillars />
            <p className="pillar-legend">Stem above · Branch below · Day is you</p>
          </section>

          <section className="section manifesto" id="manifesto">
            <div className="wrap">
              <p className="kicker reveal">{t.manifesto.kicker}</p>
              <div className="manifesto-grid">
                {t.manifesto.items.map((item) => (
                  <article className="man-card reveal" key={item.hanzi}>
                    <div className="man-hanzi">{item.hanzi}</div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="practice">
            <div className="wrap">
              <div className="practice-head">
                <div className="reveal">
                  <p className="kicker">{t.practice.kicker}</p>
                  <h2 className="display">{t.practice.title}</h2>
                </div>
                <p className="section-lead reveal">{t.practice.lead}</p>
              </div>
              <div className="practice-grid">
                {t.practice.items.map((item) => (
                  <article className="prac-card reveal" key={item.title}>
                    <div className="prac-seal">{item.hanzi}</div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <Elements lang={lang} />

          <section className="section" id="alice">
            <div className="wrap">
              <header className="alice-head reveal">
                <p className="kicker">{t.alice.kicker}</p>
                <h2 className="display">{t.alice.title}</h2>
                <p className="section-lead">{t.alice.lead}</p>
              </header>
              <div className="alice-grid">
                {t.alice.pillars.map((p) => (
                  <article className="alice-pillar reveal" key={p.hanzi}>
                    <div className="hanzi">{p.hanzi}</div>
                    <div className="lab">{p.label}</div>
                    <p className="theme">{p.theme}</p>
                    <ul>
                      {p.lines.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section wobazi" id="wobazi">
            <div className="wrap">
              <div className="wobazi-panel reveal">
                <div>
                  <p className="kicker">{t.wobazi.kicker}</p>
                  <h2 className="display">{t.wobazi.title}</h2>
                  <p className="section-lead">{t.wobazi.lead}</p>
                  <ul className="wobazi-points">
                    {t.wobazi.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <a className="btn btn-primary" href={WOBAZI}>
                    {t.wobazi.cta}
                  </a>
                </div>
                <div className="wobazi-mark" aria-hidden="true">
                  八字
                </div>
              </div>
            </div>
          </section>

          <section className="section close" id="begin">
            <div className="wrap reveal">
              <p className="kicker">{t.close.kicker}</p>
              <h2 className="display">{t.close.title}</h2>
              <p className="section-lead">{t.close.lead}</p>
              <div className="close-cta">
                <a className="btn btn-primary" href={WOBAZI}>
                  {t.close.cta}
                </a>
                <a className="btn btn-ghost" href={ALICE_SITE}>
                  {t.close.cta2}
                </a>
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
              <h4>{t.footer.house}</h4>
              <ul>
                <li>
                  <a href={ALICE_SITE}>masteralice.com</a>
                </li>
                <li>
                  <a href="https://www.udestinyglobal.com/en">udestinyglobal.com</a>
                </li>
                <li>
                  <span>{t.footer.bangkok}</span>
                </li>
              </ul>
            </div>
            <div>
              <h4>{t.footer.products}</h4>
              <ul>
                <li>
                  <a href={WOBAZI}>Wobazi</a>
                </li>
                <li>
                  <a href={ALICE}>Master Alice</a>
                </li>
                <li>
                  <a href="https://wobazi.com/what-is-bazi">What is Bāzì</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="wrap footer-bottom">
            <span>© {new Date().getFullYear()} Ultimate Destiny</span>
            <span>命 · 运 · 风水</span>
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
