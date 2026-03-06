import { useState, useEffect } from "react";
import {
  FaArrowDown,
  FaHome,
  FaCalendarAlt,
  FaTrophy,
  FaUsers,
  FaUser,
  FaUserAstronaut,
  FaGoogleDrive,
  FaFigma,
} from "react-icons/fa";
import SectionHeader from "../../components/SectionHeader";
import { useLanguage } from "../../i18n/LanguageContext";

const heroImages = [
  "/Img/Home Launch.png",
  "/Img/home-fin.png",
  "/Img/Calendario 1.png",
  "/Img/newsfide.png",
  "/Img/Home Amici.png",
];
const galleryImages = [
  "/Img/1.1.png",
  "/Img/2.png",
  "/Img/3.1.png",
  "/Img/4.png",
  "/Img/5.png",
];

export default function StudyPage() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [slide, setSlide] = useState(0);
  const { t } = useLanguage();

  const features = [
    {
      icon: FaHome,
      title: t("study.feature1Title"),
      description: t("study.feature1Desc"),
      colorClass: "",
    },
    {
      icon: FaCalendarAlt,
      title: t("study.feature2Title"),
      description: t("study.feature2Desc"),
      colorClass: "tool-icon-secondary",
    },
    {
      icon: FaTrophy,
      title: t("study.feature3Title"),
      description: t("study.feature3Desc"),
      colorClass: "tool-icon-accent",
    },
    {
      icon: FaUsers,
      title: t("study.feature4Title"),
      description: t("study.feature4Desc"),
      colorClass: "",
    },
    {
      icon: FaUser,
      title: t("study.feature5Title"),
      description: t("study.feature5Desc"),
      colorClass: "tool-icon-secondary",
    },
    {
      icon: FaUserAstronaut,
      title: t("study.feature6Title"),
      description: t("study.feature6Desc"),
      colorClass: "tool-icon-accent",
    },
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setHeroSlide((p) => (p + 1) % heroImages.length),
      3000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="project-hero">
        <div className="hero-background">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 70% 30%, rgba(99,102,241,0.15), transparent 50%), radial-gradient(circle at 30% 70%, rgba(236,72,153,0.15), transparent 50%)",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="portfolio-category mb-4">
                {t("study.category")}
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="gradient-text">{t("study.heroTitle1")}</span>
                {t("study.heroTitle2")}
              </h1>
              <p className="text-lg text-[var(--color-text-muted)] mb-8">
                {t("study.heroDesc")}
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="#progetto"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("progetto")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span>{t("project.exploreProject")}</span>
                  <FaArrowDown />
                </a>
                <a
                  href="https://www.figma.com/file/aFuqVzfzqnWwpiySgWqtbt/StudyWard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <span>{t("project.figmaPrototype")}</span>
                  <FaFigma />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 hidden lg:flex justify-center">
              <div className="carousel-container">
                <div className="carousel-images">
                  {heroImages.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`StudyWard ${i + 1}`}
                      className={`project-main-image ${i === heroSlide ? "active" : ""}`}
                    />
                  ))}
                </div>
                <div className="carousel-dots">
                  {heroImages.map((_, i) => (
                    <span
                      key={i}
                      className={`dot ${i === heroSlide ? "active" : ""}`}
                      onClick={() => setHeroSlide(i)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="progetto" className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeader
            badge={t("project.showcase")}
            title={t("project.projectTitle")}
          />
          <div className="hidden md:block">
            <div className="glass-card p-4">
              <div
                className="relative overflow-hidden rounded-lg"
                style={{ height: "600px" }}
              >
                {galleryImages.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`StudyWard Screenshot ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500"
                    style={{ opacity: i === slide ? 1 : 0 }}
                  />
                ))}
              </div>
              <div className="flex justify-center gap-3 mt-4">
                <button
                  className="w-10 h-10 rounded-full border border-[var(--color-border-glass)] bg-transparent text-white cursor-pointer"
                  onClick={() =>
                    setSlide(
                      (p) =>
                        (p - 1 + galleryImages.length) % galleryImages.length,
                    )
                  }
                >
                  ‹
                </button>
                {galleryImages.map((_, i) => (
                  <button
                    key={i}
                    className={`w-3 h-3 rounded-full border-none cursor-pointer ${i === slide ? "opacity-100" : "opacity-40"}`}
                    style={{
                      background:
                        i === slide
                          ? "linear-gradient(135deg, var(--color-primary), var(--color-secondary))"
                          : "var(--color-text-muted)",
                    }}
                    onClick={() => setSlide(i)}
                  />
                ))}
                <button
                  className="w-10 h-10 rounded-full border border-[var(--color-border-glass)] bg-transparent text-white cursor-pointer"
                  onClick={() =>
                    setSlide((p) => (p + 1) % galleryImages.length)
                  }
                >
                  ›
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden glass-card p-4">
            <div className="vertical-gallery">
              {galleryImages.map((src, i) => (
                <div key={i} className="gallery-item">
                  <img
                    src={src}
                    alt={`StudyWard ${i + 1}`}
                    className="w-full rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeader
            badge={t("project.howItWorks")}
            title={t("study.steps")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, description, colorClass }) => (
              <div key={title} className="glass-card text-center">
                <div className={`tool-icon ${colorClass}`}>
                  <Icon />
                </div>
                <h3
                  className="tool-title"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {title}
                </h3>
                <p className="tool-description">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeader
            badge={t("project.resources")}
            title={t("project.fullProject")}
          />
          <div className="max-w-3xl mx-auto">
            <div className="glass-card text-center">
              <h3
                className="text-xl mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("project.exploreDetails")}
              </h3>
              <p className="text-[var(--color-text-muted)] mb-4">
                {t("project.accessDocs")}
              </p>
              <p className="project-lang-note mb-6">
                {t("project.langNote")}
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="https://docs.google.com/document/d/1Vx_QCAmTvoPfmi4asm2exa3yIA4M_nviAwUZSo68NoQ/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FaGoogleDrive />
                  <span>{t("study.developmentDoc")}</span>
                </a>
                <a
                  href="https://www.figma.com/file/aFuqVzfzqnWwpiySgWqtbt/StudyWard?type=design&node-id=0%3A1&mode=design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <FaFigma />
                  <span>{t("project.prototype")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
