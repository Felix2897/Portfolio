import { useEffect, useRef } from "react";
import { FaPalette, FaCode, FaDownload } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../i18n/LanguageContext";

const designSkills = [
  "Figma",
  "Adobe XD",
  "Photoshop",
  "Illustrator",
  "Indesign",
  "Lightroom",
];
const devSkills = ["HTML", "CSS", "Bootstrap", "JavaScript", "React"];

export default function AboutSection() {
  const contentRef = useRef(null);
  const skillsRef = useRef(null);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            entry.target.style.opacity = "1";
          }
        });
      },
      { threshold: 0.2 },
    );
    if (contentRef.current) observer.observe(contentRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeader badge={t("about.badge")} title={t("about.title")} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} style={{ opacity: 0 }}>
            <div className="glass-card text-center">
              <p className="text-[var(--color-text-muted)] mb-6">
                {t("about.bio1")}
              </p>
              <p className="text-[var(--color-text-muted)] mb-6">
                {t("about.bio2")}
              </p>
              <p className="text-[var(--color-text-muted)] mb-6">
                {t("about.bio3")}
              </p>
              <a href={lang === "it" ? "/CV.pdf" : "/Andrea_Feliziani_CV.pdf"} download className="btn btn-outline">
                <span>{t("about.downloadCv")}</span>
                <FaDownload />
              </a>
            </div>
          </div>

          <div
            ref={skillsRef}
            className="flex flex-col gap-6"
            style={{ opacity: 0 }}
          >
            <div className="glass-card">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl mb-4"
                style={{
                  backgroundColor: "rgba(99,102,241,0.1)",
                  color: "var(--color-primary)",
                }}
              >
                <FaPalette />
              </div>
              <h3
                className="text-lg font-semibold mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("about.designTitle")}
              </h3>
              <div className="skill-tags">
                {designSkills.map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl mb-4"
                style={{
                  backgroundColor: "rgba(236,72,153,0.1)",
                  color: "var(--color-secondary)",
                }}
              >
                <FaCode />
              </div>
              <h3
                className="text-lg font-semibold mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("about.devTitle")}
              </h3>
              <div className="skill-tags">
                {devSkills.map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
