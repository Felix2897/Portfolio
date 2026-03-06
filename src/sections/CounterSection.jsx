import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

function AnimatedCounter({ target, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = target;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span>{count}</span>;
}

export default function CounterSection() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const { t } = useLanguage();

  const counters = [
    { label: t("counters.company"), value: "Aton it", isText: true },
    { label: t("counters.experience"), value: 2, isText: false },
    { label: t("counters.certifications"), value: 11, isText: false },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="counter-section" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2
          className="text-3xl md:text-4xl text-center mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t("counters.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {counters.map(({ label, value, isText }) => (
            <div key={label} className="glass-card text-center py-8">
              <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">
                {isText ? (
                  value
                ) : (
                  <AnimatedCounter target={value} started={started} />
                )}
              </div>
              <div className="text-[var(--color-text-muted)]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
