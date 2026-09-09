import { useEffect, useRef } from "react";
import { FaCode, FaDownload, FaPalette } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";

const designSkills = ["Figma", "Miro", "Maze", "UX Research", "Accessibility", "Testing"];
const devSkills = ["React", "React Native", "Next.js", "Tailwind"];

function Reveal({ children, className = "", innerRef }) {
  return <div ref={innerRef} className={`editorial-reveal ${className}`}>{children}</div>;
}

export default function AboutSection() {
  const contentRef = useRef(null);
  const skillsRef = useRef(null);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-revealed")),
      { threshold: 0.15 },
    );
    [contentRef.current, skillsRef.current].filter(Boolean).forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="editorial-section editorial-about">
      <div className="editorial-shell">
        <div className="editorial-section-heading">
          <div>
            <span className="editorial-kicker">{t("about.badge")}</span>
            <h2>{t("about.title")}</h2>
          </div>
          <p>{lang === "it" ? "Un modo di lavorare tra sistemi, empatia e interfacce." : "A way of working between systems, empathy, and interfaces."}</p>
        </div>

        <div className="editorial-about-grid">
          <Reveal innerRef={contentRef} className="editorial-about-story">
            <p className="editorial-lead" dangerouslySetInnerHTML={{ __html: t("about.bio1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("about.bio2") }} />
            <a href={lang === "it" ? "./CV.pdf" : "./Andrea_Feliziani_CV.pdf"} download className="editorial-inline-link">
              <span>{t("about.downloadCv")}</span>
              <FaDownload aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal innerRef={skillsRef} className="editorial-skills-list">
            <div className="editorial-skill-group">
              <span className="editorial-skill-index" aria-hidden="true">01</span>
              <div className="editorial-skill-icon editorial-skill-icon-accent" aria-hidden="true"><FaPalette /></div>
              <div>
                <h3>{t("about.designTitle")}</h3>
                <div className="editorial-skill-tags">
                  {designSkills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            </div>
            <div className="editorial-skill-group">
              <span className="editorial-skill-index" aria-hidden="true">02</span>
              <div className="editorial-skill-icon editorial-skill-icon-ink" aria-hidden="true"><FaCode /></div>
              <div>
                <h3>{t("about.devTitle")}</h3>
                <div className="editorial-skill-tags">
                  {devSkills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
