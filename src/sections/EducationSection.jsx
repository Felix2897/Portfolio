import { useEffect, useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function EducationSection() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  const experiences = [
    {
      company: t("experience.current.company"),
      location: t("experience.current.location"),
      role: t("experience.current.role"),
      period: t("experience.current.period"),
    },
    {
      company: t("experience.previous.company"),
      location: t("experience.previous.location"),
      role: t("experience.previous.role"),
      period: t("experience.previous.period"),
    },
  ];

  const items = [
    { period: "2012 — 2017", title: t("education.diploma.title"), subtitle: t("education.diploma.subtitle"), text: t("education.diploma.text") },
    { period: "2018 — 2021", title: t("education.bachelors.title"), subtitle: t("education.bachelors.subtitle"), text: t("education.bachelors.text") },
    { period: "2022 — 2024", title: t("education.masters.title"), subtitle: t("education.masters.subtitle"), text: t("education.masters.text") },
  ];

  useEffect(() => {
    const rows = sectionRef.current?.querySelectorAll(
      ".editorial-journey-experience-row, .editorial-education-row",
    );
    if (!rows?.length) return undefined;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-revealed")),
      { threshold: 0.15 },
    );
    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="editorial-section editorial-education" ref={sectionRef}>
      <div className="editorial-shell">
        <div className="editorial-journey-experience" aria-labelledby="experience-title">
          <div className="editorial-journey-experience-heading">
            <span id="experience-title" className="editorial-kicker">{t("experience.badge")}</span>
          </div>
          <div className="editorial-journey-experience-list">
            {experiences.map((experience) => (
              <div className="editorial-journey-experience-row" key={experience.company}>
                <time>{experience.period}</time>
                <div className="editorial-journey-experience-main">
                  <h3>{experience.company}</h3>
                  <p>{experience.location}</p>
                </div>
                <span>{experience.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="editorial-section-heading editorial-education-heading">
          <div>
            <span className="editorial-kicker">{t("education.badge")}</span>
          </div>
        </div>

        <div className="editorial-education-list">
          {items.map((item, index) => (
            <article className="editorial-education-row" key={item.period} style={{ "--row-delay": `${index * 90}ms` }}>
              <span className="editorial-education-period">{item.period}</span>
              <div className="editorial-education-main">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
              <span className="editorial-education-detail">{item.text}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
