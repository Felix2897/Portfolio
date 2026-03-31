import { FaArrowDown, FaSeedling, FaChartLine, FaUsers } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
import ProtectedResourceLinks from "../../components/ProtectedResourceLinks";
import ProjectCarousel from "../../components/ProjectCarousel";
import SectionHeader from "../../components/SectionHeader";
import { useLanguage } from "../../i18n/LanguageContext";
import { smoothScrollTo } from "../../utils/smoothScroll";

const heroImages = [
  "./Img/bot1.png",
  "./Img/bot2.png",
  "./Img/bot3.png",
  "./Img/bot4.png",
  "./Img/bot5.png",
];
const galleryImages = [
  "./Img/slbt1.png",
  "./Img/slbt2.png",
  "./Img/slbt3.png",
  "./Img/slbt4.png",
  "./Img/slbt5.png",
];

export default function BotanicarePage() {
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
                  smoothScrollTo("progetto");
                }}
              >
                <span>{t("project.exploreProject")}</span>
                <FaArrowDown />
              </a>
            </div>

            <div className="order-1 lg:order-2 hidden lg:flex justify-center">
              <ProjectCarousel
                images={heroImages}
                altBase="Botanicare"
                autoplayMs={3000}
                className="max-w-[500px]"
                viewportClassName="h-[550px]"
                imageClassName="object-contain"
              />
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
              <ProjectCarousel
                images={galleryImages}
                altBase="Botanicare screenshot"
                className="w-full"
                viewportClassName="h-[600px] rounded-lg"
                imageClassName="object-contain"
              />
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
              <ProtectedResourceLinks
                storageKey="botanicare-docs-email"
                resources={[
                  {
                    href: "https://docs.google.com/document/d/1GLsAxFqVzbsULLPqZkDemdhnU70I5V2U/edit?usp=sharing&ouid=108685707695211004080&rtpof=true&sd=true",
                    label: t("project.documentation"),
                    icon: FaGoogleDrive,
                    variant: "primary",
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
