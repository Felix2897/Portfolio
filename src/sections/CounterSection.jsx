import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

function AnimatedCounter({ target, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return undefined;
    const duration = 900;
    const steps = Math.max(target, 1);
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span>{count || target}</span>;
}

export default function CounterSection() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);
  const { t } = useLanguage();

  const counters = [
    { label: t("counters.company"), value: "Aton IT", text: true },
    { label: t("counters.experience"), value: 2, suffix: "+" },
    { label: t("counters.certifications"), value: 11 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStarted(true),
      { threshold: 0.25 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="editorial-stats editorial-highlights" ref={sectionRef} aria-labelledby="highlights-title">
      <div className="editorial-shell">
        <div className="editorial-stats-heading">
          <span className="editorial-kicker">02 / {t("counters.title")}</span>
          <h2 id="highlights-title">{t("counters.title")}</h2>
        </div>
        <div className="editorial-stats-grid">
          {counters.map(({ label, value, suffix, text }) => (
            <div className="editorial-stat" key={label}>
              <div className="editorial-stat-value" aria-label={text ? value : `${value}${suffix || ""}`}>
                {text ? value : <><AnimatedCounter target={value} started={started} />{suffix}</>}
              </div>
              <div className="editorial-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
