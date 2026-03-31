import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

function AnimatedCounter({ target, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const maxDuration = 2000;
    const interval = Math.min(60, maxDuration / target);
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
  const titleRef = useRef(null);
  const cardRefs = useRef([]);
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

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
    );

    if (titleRef.current) revealObserver.observe(titleRef.current);
    cardRefs.current.forEach((el) => {
      if (el) revealObserver.observe(el);
    });

    return () => revealObserver.disconnect();
  }, []);

  return (
    <section className="counter-section" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl text-center mb-12 counter-title"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t("counters.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {counters.map(({ label, value, isText }, index) => (
            <div
              key={label}
              ref={(el) => (cardRefs.current[index] = el)}
              className="glass-card counter-card text-center py-8"
              style={{ transitionDelay: `${index * 140}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">
                {isText ? (
                  value
                ) : (
                  <AnimatedCounter target={value} started={started} />
                )}
              </div>
              <div className="text-(--color-text-muted) font-medium">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
