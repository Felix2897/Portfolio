import { useState, useEffect } from "react";
import { FaArrowDown, FaSeedling, FaChartLine, FaUsers } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
import SectionHeader from "../../components/SectionHeader";
import { useLanguage } from "../../i18n/LanguageContext";

const heroImages = [
  "/Img/bot1.png",
  "/Img/bot2.png",
  "/Img/bot3.png",
  "/Img/bot4.png",
  "/Img/bot5.png",
];
const galleryImages = [
  "/Img/slbt1.png",
  "/Img/slbt2.png",
  "/Img/slbt3.png",
  "/Img/slbt4.png",
  "/Img/slbt5.png",
];

export default function BotanicarePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [gallerySlide, setGallerySlide] = useState(0);
  const { t } = useLanguage();

  const features = [
    {
      icon: FaSeedling,
      title: t("botanicare.feature1Title"),
      description: t("botanicare.feature1Desc"),
      colorClass: "",
    },
    {
      icon: FaChartLine,
      title: t("botanicare.feature2Title"),
      description: t("botanicare.feature2Desc"),
      colorClass: "tool-icon-secondary",
    },
    {
      icon: FaUsers,
      title: t("botanicare.feature3Title"),
      description: t("botanicare.feature3Desc"),
      colorClass: "tool-icon-accent",
    },
  ];

  // Auto-play hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="project-hero">
        <div className="hero-background">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 70% 30%, rgba(99,102,241,0.15), transparent 50%), radial-gradient(circle at 30% 70%, rgba(236,72,153,0.15), transparent 50%)",
            }}
          />
          <div
            className="absolute top-[10%] left-[10%] w-[300px] h-[300px] rounded-full opacity-40"
            style={{
              background:
                "linear-gradient(135deg, var(--color-primary), transparent)",
              filter: "blur(60px)",
              animation: "float 15s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-[10%] right-[10%] w-[250px] h-[250px] rounded-full opacity-40"
            style={{
              background:
                "linear-gradient(135deg, var(--color-secondary), transparent)",
              filter: "blur(60px)",
              animation: "float 12s ease-in-out infinite 2s",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="portfolio-category mb-4">
                {t("botanicare.category")}
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("botanicare.heroTitle1")}
                <span className="gradient-text">
                  {t("botanicare.heroTitle2")}
                </span>
              </h1>
              <p className="text-lg text-[var(--color-text-muted)] mb-8">
                {t("botanicare.heroDesc")}
              </p>
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
            </div>

            <div className="order-1 lg:order-2 hidden lg:flex justify-center">
              <div className="carousel-container">
                <div className="carousel-images">
                  {heroImages.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Botanicare ${i + 1}`}
                      className={`project-main-image ${i === activeSlide ? "active" : ""}`}
                    />
                  ))}
                </div>
                <div className="carousel-dots">
                  {heroImages.map((_, i) => (
                    <span
                      key={i}
                      className={`dot ${i === activeSlide ? "active" : ""}`}
                      onClick={() => setActiveSlide(i)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator hidden md:flex">
          <div className="scroll-mouse">
            <div className="scroll-dot"></div>
          </div>
          <span>{t("project.scroll")}</span>
        </div>
      </section>

      {/* Gallery */}
      <section id="progetto" className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeader
            badge={t("project.showcase")}
            title={t("project.projectTitle")}
          />

          {/* Desktop Carousel */}
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
                    alt={`Botanicare Screenshot ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500"
                    style={{ opacity: i === gallerySlide ? 1 : 0 }}
                  />
                ))}
              </div>
              <div className="flex justify-center gap-3 mt-4">
                <button
                  className="w-10 h-10 rounded-full border border-[var(--color-border-glass)] bg-transparent text-white cursor-pointer hover:border-[var(--color-primary)]"
                  onClick={() =>
                    setGallerySlide(
                      (prev) =>
                        (prev - 1 + galleryImages.length) %
                        galleryImages.length,
                    )
                  }
                >
                  ‹
                </button>
                {galleryImages.map((_, i) => (
                  <button
                    key={i}
                    className={`w-3 h-3 rounded-full border-none cursor-pointer ${i === gallerySlide ? "opacity-100" : "opacity-40"}`}
                    style={{
                      background:
                        i === gallerySlide
                          ? "linear-gradient(135deg, var(--color-primary), var(--color-secondary))"
                          : "var(--color-text-muted)",
                    }}
                    onClick={() => setGallerySlide(i)}
                  />
                ))}
                <button
                  className="w-10 h-10 rounded-full border border-[var(--color-border-glass)] bg-transparent text-white cursor-pointer hover:border-[var(--color-primary)]"
                  onClick={() =>
                    setGallerySlide((prev) => (prev + 1) % galleryImages.length)
                  }
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Gallery */}
          <div className="md:hidden glass-card p-4">
            <div className="vertical-gallery">
              {galleryImages.map((src, i) => (
                <div key={i} className="gallery-item">
                  <img
                    src={src}
                    alt={`Botanicare Screenshot ${i + 1}`}
                    className="w-full rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeader
            badge={t("project.howItWorks")}
            title={t("botanicare.steps")}
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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

      {/* Resources */}
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
              <a
                href="https://docs.google.com/document/d/1GLsAxFqVzbsULLPqZkDemdhnU70I5V2U/edit?usp=sharing&ouid=108685707695211004080&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaGoogleDrive />
                <span>{t("project.documentation")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
