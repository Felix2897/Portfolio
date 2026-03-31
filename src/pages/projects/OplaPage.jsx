import {
  FaArrowDown,
  FaUsers,
  FaGamepad,
  FaUniversalAccess,
  FaGoogleDrive,
  FaFigma,
} from "react-icons/fa";
import ProtectedResourceLinks from "../../components/ProtectedResourceLinks";
import ProjectCarousel from "../../components/ProjectCarousel";
import SectionHeader from "../../components/SectionHeader";
import { useLanguage } from "../../i18n/LanguageContext";
import { smoothScrollTo } from "../../utils/smoothScroll";

const galleryImages = [
  "./Img/1OP.png",
  "./Img/30P.png",
  "./Img/4OP.png",
  "./Img/5OP.png",
];

export default function OplaPage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: FaUsers,
      title: t("opla.feature1Title"),
      description: t("opla.feature1Desc"),
      colorClass: "",
    },
    {
      icon: FaGamepad,
      title: t("opla.feature2Title"),
      description: t("opla.feature2Desc"),
      colorClass: "tool-icon-secondary",
    },
    {
      icon: FaUniversalAccess,
      title: t("opla.feature3Title"),
      description: t("opla.feature3Desc"),
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
            <div className="portfolio-category mb-4">{t("opla.category")}</div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="gradient-text">{t("opla.heroTitle1")}</span>
              {t("opla.heroTitle2")}
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] mb-8">
              {t("opla.heroDesc")}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
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
              <ProtectedResourceLinks
                storageKey="opla-docs-email"
                showStatus={false}
                resources={[{
                  href: "https://www.figma.com/design/wgungAOOwITkQCFbK7Z5Cv/Opl%C3%A0?node-id=0-1&t=3uz4hmTuMgD7CoLy-1",
                  label: t("project.figmaPrototype"),
                  icon: FaFigma,
                  variant: "outline",
                }]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <SectionHeader
            badge={t("project.howItWorks")}
            title={t("opla.steps")}
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
                altBase="Opla screenshot"
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
                    alt={`Oplà ${i + 1}`}
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
                storageKey="opla-docs-email"
                resources={[
                  {
                    href: "https://docs.google.com/document/d/1Y05qAFmekffLc11swJ8Uw4LxkBbp6iFZ9ER68kSX7cI/edit?usp=sharing",
                    label: t("opla.report"),
                    icon: FaGoogleDrive,
                    variant: "primary",
                  },
                  {
                    href: "https://www.figma.com/design/wgungAOOwITkQCFbK7Z5Cv/Opl%C3%A0?node-id=1-13446&t=nGwsaucv3XxoR9lA-1",
                    label: t("project.prototype"),
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
