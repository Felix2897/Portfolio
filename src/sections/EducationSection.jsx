import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export default function EducationSection() {
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

  return (
    <section id="education" className="editorial-section editorial-education">
      <div className="editorial-shell">
        <div className="editorial-journey-experience" aria-labelledby="experience-title">
          <motion.div
            className="editorial-journey-experience-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span id="experience-title" className="editorial-kicker">{t("experience.badge")}</span>
          </motion.div>
          <div className="editorial-journey-experience-list">
            {experiences.map((experience, index) => (
              <motion.div
                className="editorial-journey-experience-row"
                key={experience.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <time>{experience.period}</time>
                <div className="editorial-journey-experience-main">
                  <h3>{experience.company}</h3>
                  <p>{experience.location}</p>
                </div>
                <span>{experience.role}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="editorial-section-heading editorial-education-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <span className="editorial-kicker">{t("education.badge")}</span>
          </div>
        </motion.div>

        <div className="editorial-education-list">
          {items.map((item, index) => (
            <motion.article
              className="editorial-education-row"
              key={item.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="editorial-education-period">{item.period}</span>
              <div className="editorial-education-main">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
              <span className="editorial-education-detail">{item.text}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
