import { FaCode, FaDownload, FaPalette } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const devSkills = ["React", "React Native", "Next.js", "Tailwind"];

export default function AboutSection() {
  const { t, lang } = useLanguage();

  const designSkills = [
    "Figma",
    "Miro",
    "Maze",
    "UX Research",
    lang === "it" ? "Accessibilità" : "Accessibility",
    "Testing",
  ];

  return (
    <section id="about" className="editorial-section editorial-about">
      <div className="editorial-shell">
        <motion.div
          className="editorial-section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <span className="editorial-kicker">{t("about.badge")}</span>
            <h2>{t("about.title")}</h2>
          </div>
        </motion.div>

        <div className="editorial-about-grid">
          <motion.div
            className="editorial-about-story"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="editorial-lead" dangerouslySetInnerHTML={{ __html: t("about.bio1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("about.bio2") }} />
            <a
              href={lang === "it" ? `${import.meta.env.BASE_URL}Feliziani_Andrea_CV.pdf` : `${import.meta.env.BASE_URL}Andrea_Feliziani_CV.pdf`}
              download={lang === "it" ? "Feliziani_Andrea_CV.pdf" : "Andrea_Feliziani_CV_EN.pdf"}
              className="editorial-inline-link"
            >
              <span>{t("about.downloadCv")}</span>
              <FaDownload aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            className="editorial-skills-list"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="editorial-skill-group"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="editorial-skill-index" aria-hidden="true">01</span>
              <div className="editorial-skill-icon editorial-skill-icon-accent" aria-hidden="true"><FaPalette /></div>
              <div>
                <h3>{t("about.designTitle")}</h3>
                <div className="editorial-skill-tags">
                  {designSkills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            </motion.div>
            <motion.div
              className="editorial-skill-group"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="editorial-skill-index" aria-hidden="true">02</span>
              <div className="editorial-skill-icon editorial-skill-icon-ink" aria-hidden="true"><FaCode /></div>
              <div>
                <h3>{t("about.devTitle")}</h3>
                <div className="editorial-skill-tags">
                  {devSkills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
