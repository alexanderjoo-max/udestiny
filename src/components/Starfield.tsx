import { useEffect, useState } from "react";

type Star = {
  id: number;
  top: string;
  left: string;
  size: number;
  dur: string;
  drift: string;
  dx: string;
  dy: string;
  kind: "plain" | "dust" | "drift";
};

function makeStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => {
    const size = Math.random() < 0.15 ? 2.4 : Math.random() * 1.6 + 0.6;
    const kind: Star["kind"] =
      Math.random() < 0.18 ? "dust" : Math.random() < 0.55 ? "drift" : "plain";
    return {
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size,
      dur: `${2.2 + Math.random() * 3.4}s`,
      drift: `${14 + Math.random() * 16}s`,
      dx: `${(Math.random() * 24 - 12).toFixed(1)}px`,
      dy: `${(Math.random() * -22).toFixed(1)}px`,
      kind,
    };
  });
}

export default function Starfield() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setStars(makeStars(reduce ? 24 : 90));
  }, []);

  return (
    <div className="stars" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className={`star ${s.kind === "plain" ? "" : s.kind}`}
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            ["--dur" as string]: s.dur,
            ["--drift" as string]: s.drift,
            ["--dx" as string]: s.dx,
            ["--dy" as string]: s.dy,
          }}
        />
      ))}
    </div>
  );
}
