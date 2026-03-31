import { FaArrowDown, FaShieldAlt, FaChartBar, FaLock } from "react-icons/fa";
import ProjectCarousel from "../../components/ProjectCarousel";
import SectionHeader from "../../components/SectionHeader";
import { useLanguage } from "../../i18n/LanguageContext";
import { smoothScrollTo } from "../../utils/smoothScroll";

const galleryImages = [
  "./Img/SECUREITS1.png",
  "./Img/SECUREITS2.png",
  "./Img/SECUREITS3.png",
];

export default function SecurePage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: FaShieldAlt,
      title: t("secure.feature1Title"),
      description: t("secure.feature1Desc"),
      colorClass: "",
    },
    {
      icon: FaChartBar,
      title: t("secure.feature2Title"),
      description: t("secure.feature2Desc"),
      colorClass: "tool-icon-secondary",
    },
    {
      icon: FaLock,
      title: t("secure.feature3Title"),
      description: t("secure.feature3Desc"),
      colorClass: "tool-icon-accent",
    },
  ];

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
          <div className="max-w-3xl mx-auto text-center">
            <div className="portfolio-category mb-4">
              {t("secure.category")}
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("secure.heroTitle1")}{" "}
              <span className="gradient-text">{t("secure.heroTitle2")}</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] mb-8">
              {t("secure.heroDesc")}
            </p>
            <a
              href="#progetto"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("progetto");
              }}
            >
              <span>{t("project.exploreProject")}</span>
              <FaArrowDown />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeader
            badge={t("project.howItWorks")}
            title={t("secure.steps")}
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

      <section id="progetto" className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeader
            badge={t("project.showcase")}
            title={t("project.projectTitle")}
          />
          <div className="hidden md:block">
            <div className="glass-card p-4">
              <ProjectCarousel
                images={galleryImages}
                altBase="Secure it screenshot"
                className="w-full"
                viewportClassName="h-[600px] rounded-lg"
                imageClassName="object-contain"
              />
            </div>
          </div>
          <div className="md:hidden glass-card p-4">
            <div className="vertical-gallery">
              {galleryImages.map((src, i) => (
                <div key={i} className="gallery-item">
                  <img
                    src={src}
                    alt={`Secure it ${i + 1}`}
                    className="w-full rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
