import { useState } from "react";
import { ELEMENTS, type Lang, copy } from "../i18n";

export default function Elements({ lang }: { lang: Lang }) {
  const [active, setActive] = useState<string>("wood");
  const t = copy[lang].elements;

  return (
    <section className="section elements" id="elements">
      <div className="wrap">
        <header className="elements-head reveal">
          <p className="kicker">{t.kicker}</p>
          <h2 className="display">{t.title}</h2>
          <p className="section-lead">{t.lead}</p>
        </header>
        <div className="el-row">
          {ELEMENTS.map((el) => (
            <button
              key={el.key}
              type="button"
              className={`el-card ${active === el.key ? "active" : ""}`}
              data-el={el.key}
              onClick={() => setActive(el.key)}
              onMouseEnter={() => setActive(el.key)}
            >
              <div className="el-hanzi">{el.hanzi}</div>
              <div className="el-en">{el.en}</div>
              <p className="el-line">{el.line}</p>
            </button>
          ))}
        </div>
        <p className="cycle reveal">
          <span>{t.generating}</span>
          {ELEMENTS.map((el, i) => (
            <span key={el.key} className="cycle-node" style={{ color: `var(--el-${el.key})` }}>
              {el.hanzi}
              {i < ELEMENTS.length - 1 && <span className="cycle-arrow"> → </span>}
            </span>
          ))}
          <span className="cycle-arrow">↺</span>
        </p>
        <figure className="oracle reveal">
          <blockquote>“{t.quote}”</blockquote>
          <cite>{t.quoteAttr}</cite>
        </figure>
      </div>
    </section>
  );
}
