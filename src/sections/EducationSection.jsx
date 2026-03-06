import { useEffect, useRef } from "react";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../i18n/LanguageContext";

export default function EducationSection() {
  const itemRefs = useRef([]);
  const { t } = useLanguage();

  const items = [
    {
      period: "2022 - 2024",
      title: t("education.masters.title"),
      subtitle: t("education.masters.subtitle"),
      text: t("education.masters.text"),
      badgeClass: "",
    },
    {
      period: "2018 - 2021",
      title: t("education.bachelors.title"),
      subtitle: t("education.bachelors.subtitle"),
      text: t("education.bachelors.text"),
      badgeClass: "timeline-badge-secondary",
    },
    {
      period: "2012 - 2017",
      title: t("education.diploma.title"),
      subtitle: t("education.diploma.subtitle"),
      text: t("education.diploma.text"),
      badgeClass: "timeline-badge-accent",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate");
        });
      },
      { threshold: 0.2 },
    );
    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeader
          badge={t("education.badge")}
          title={t("education.title")}
        />

        <div className="timeline-container">
          <div className="timeline-line"></div>
          {items.map((item, i) => (
            <div
              key={item.period}
              className="timeline-item"
              ref={(el) => (itemRefs.current[i] = el)}
            >
              <div className="timeline-dot"></div>
              <div className="glass-card">
                <div className={`timeline-badge ${item.badgeClass}`}>
                  {item.period}
                </div>
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <h4 className="text-sm font-medium text-[var(--color-text-muted)] mb-2">
                  {item.subtitle}
                </h4>
                <p className="text-sm text-[var(--color-text-muted)] m-0">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
