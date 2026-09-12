import { useEffect, useState } from "react";
import { BRANCHES, PILLAR_META, STEMS } from "../i18n";

const CYCLE_MS = [4200, 5100, 3800, 4700];

export default function Pillars() {
  const [tick, setTick] = useState([3, 14, 27, 41]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timers = CYCLE_MS.map((ms, i) =>
      window.setInterval(() => {
        setTick((prev) => {
          const next = [...prev];
          next[i] = (next[i] + 1) % 60;
          return next;
        });
      }, ms),
    );
    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <div className="pillars" aria-label="Four pillars of destiny">
      {PILLAR_META.map((p, i) => {
        const pair = tick[i] % 60;
        const stem = STEMS[pair % 10];
        const branch = BRANCHES[pair % 12];
        const you = i === 2;
        return (
          <article key={p.hanzi} className={`pillar ${you ? "you" : ""}`}>
            {you && (
              <span className="you-mark" title="Day Master">
                ✦
              </span>
            )}
            <div className="pillar-label">{p.hanzi}</div>
            <div className="pillar-stem" key={`s${stem}${tick[i]}`}>
              {stem}
            </div>
            <div className="pillar-branch" key={`b${branch}${tick[i]}`}>
              {branch}
            </div>
            <div className="pillar-en">{p.en}</div>
            <p className="pillar-about">{p.about}</p>
          </article>
        );
      })}
    </div>
  );
}
