import {
  FaArrowDown,
  FaCog,
  FaSitemap,
  FaMobileAlt,
  FaGoogleDrive,
  FaFigma,
} from "react-icons/fa";
import ProtectedResourceLinks from "../../components/ProtectedResourceLinks";
import ProjectCarousel from "../../components/ProjectCarousel";
import SectionHeader from "../../components/SectionHeader";
import { useLanguage } from "../../i18n/LanguageContext";

const galleryImages = [
  "./Img/svr1.png",
  "./Img/svr2.png",
  "./Img/svr3.png",
  "./Img/svr4.png",
  "./Img/svr5.png",
];

export default function ValeriPage() {
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
              <ProjectCarousel
                images={galleryImages}
                altBase="Valeri Franco screenshot"
                className="w-full"
                viewportClassName="h-[600px] rounded-lg"
                imageClassName="object-contain"
              />
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
                src="./Img/iow.png"
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
              <ProtectedResourceLinks
                storageKey="valeri-docs-email"
                resources={[
                  {
                    href: "/Valeri .pdf",
                    label: t("valeri.projectDoc"),
                    icon: FaGoogleDrive,
                    variant: "primary",
                  },
                  {
                    href: "https://www.figma.com/file/wxAN9iNlGolXL7xUNAe4FX/Valeri-Franco?type=design&node-id=0%3A1&mode=design",
                    label: t("project.figmaPrototype"),
                    icon: FaFigma,
                    variant: "outline",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
