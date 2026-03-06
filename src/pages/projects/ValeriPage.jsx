import { useState } from "react";
import {
  FaArrowDown,
  FaCog,
  FaSitemap,
  FaMobileAlt,
  FaGoogleDrive,
  FaFigma,
} from "react-icons/fa";
import SectionHeader from "../../components/SectionHeader";
import { useLanguage } from "../../i18n/LanguageContext";

const galleryImages = [
  "/Img/svr1.png",
  "/Img/svr2.png",
  "/Img/svr3.png",
  "/Img/svr4.png",
  "/Img/svr5.png",
];

export default function ValeriPage() {
  const [slide, setSlide] = useState(0);
  const { t } = useLanguage();

  const features = [
    {
      icon: FaCog,
      title: t("valeri.feature1Title"),
      description: t("valeri.feature1Desc"),
      colorClass: "",
    },
    {
      icon: FaSitemap,
      title: t("valeri.feature2Title"),
      description: t("valeri.feature2Desc"),
      colorClass: "tool-icon-secondary",
    },
    {
      icon: FaMobileAlt,
      title: t("valeri.feature3Title"),
      description: t("valeri.feature3Desc"),
      colorClass: "tool-icon-accent",
    },
  ];

  return (
    <>
      {/* Hero — centered text, no carousel (matches original VR2.html) */}
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
          <div className="max-w-3xl mx-auto text-center">
            <div className="portfolio-category mb-4">
              {t("valeri.category")}
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("valeri.heroTitle1")}{" "}
              <span className="gradient-text">{t("valeri.heroTitle2")}</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] mb-8">
              {t("valeri.heroDesc")}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
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
                href="#prototipo"
                className="btn btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("prototipo")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>{t("project.prototype")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="progetto" className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeader
            badge={t("project.showcase")}
            title={t("project.projectTitle")}
          />
          {/* Desktop carousel */}
          <div className="hidden md:block">
            <div className="glass-card p-6">
              <div
                className="relative overflow-hidden rounded-lg"
                style={{ height: "600px" }}
              >
                {galleryImages.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Valeri Franco Screenshot ${i + 1}`}
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
          {/* Mobile vertical gallery */}
          <div className="md:hidden glass-card p-4">
            <div className="vertical-gallery">
              {galleryImages.map((src, i) => (
                <div key={i} className="gallery-item">
                  <img
                    src={src}
                    alt={`Valeri ${i + 1}`}
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
            title={t("valeri.work")}
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

      {/* Resources — side-by-side with iPhone mockup image */}
      <section id="prototipo" className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeader
            badge={t("project.resources")}
            title={t("project.completePrototype")}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/Img/iow.png"
                alt="Valeri Franco Prototipo"
                className="max-h-[500px] w-auto object-contain rounded-2xl"
                style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
              />
            </div>
            <div className="glass-card">
              <h3
                className="text-2xl mb-4"
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
              <div className="flex gap-4 flex-wrap">
                <a
                  href="/Valeri .pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FaGoogleDrive />
                  <span>{t("valeri.projectDoc")}</span>
                </a>
                <a
                  href="https://www.figma.com/file/wxAN9iNlGolXL7xUNAe4FX/Valeri-Franco?type=design&node-id=0%3A1&mode=design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <FaFigma />
                  <span>{t("project.figmaPrototype")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
