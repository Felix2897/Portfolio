import { FaGithub, FaFigma } from "react-icons/fa";
import { useLanguage } from "../../i18n/LanguageContext";

export default function SerenityPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Parallax-style hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ paddingTop: "6rem" }}
      >
        <div className="absolute inset-0 -z-10">
          <img
            src="./Img/index-header.png"
            alt="Serenity Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg-dark)]" />
        </div>
        <h2
          className="relative text-[clamp(30px,12vw,70px)] text-center text-white font-bold"
          style={{
            textShadow: "0 0 20px rgba(255,255,255,0.3)",
            fontFamily: "var(--font-display)",
          }}
        >
          {t("serenity.heroTitle1")} <br className="hidden lg:block" />
          {t("serenity.heroTitle2")}
        </h2>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-[var(--color-text-muted)] mb-8 leading-relaxed">
                {t("serenity.heroDesc")}
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://github.com/Felix2897/SerenityDreamTravels.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FaGithub />
                  <span>{t("serenity.viewCode")}</span>
                </a>
                <a
                  href="https://www.figma.com/design/vhOrXFzzq1HHIXdvcFTPiq/Serenity-Dream-Travels?node-id=1-4621&t=sNRDiZgupL5Tp4j4-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <FaFigma />
                  <span>Figma</span>
                </a>
              </div>
            </div>
            <div>
              <img
                src="./Img/heroimg.png"
                alt="Serenity Dream Travels"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
