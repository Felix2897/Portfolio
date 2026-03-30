import { useEffect, useRef } from "react";
import Typed from "typed.js";
import {
  FaPalette,
  FaCode,
  FaMapMarkerAlt,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";
import { useLanguage } from "../i18n/LanguageContext";

export default function HeroSection({ onFilterChange }) {
  const typedRef = useRef(null);
  const scrollCueRef = useRef(null);
  const { t, lang } = useLanguage();

  const handleFilterClick = (filter) => {
    if (onFilterChange) {
      onFilterChange(filter);
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [t("hero.typedStrings.0"), t("hero.typedStrings.1")],
      typeSpeed: 48,
      backSpeed: 28,
      backDelay: 1800,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => typed.destroy();
  }, [t]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollCueRef.current) {
        scrollCueRef.current.style.opacity = window.scrollY > 60 ? "0" : "1";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    const target = document.getElementById("about");
    if (!target) return;
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start - 90;
    const duration = 900;
    let startTime = null;
    const ease = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      window.scrollTo(0, start + (end - start) * ease(progress));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <section id="home" className="hero-section">
      {/* Dot grid background */}
      <div className="hero-dot-grid" aria-hidden="true" />

      <div className="container relative z-10 px-4 md:px-6 max-w-7xl mx-auto h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── Left: Text ── */}
          <div className="lg:col-span-7 pt-20 lg:pt-0">

            {/* Available badge */}
            <div className="hero-available-badge animate-fadeInUp animate-delay-100">
              <span className="hero-available-dot" aria-hidden="true" />
              Available for work
            </div>

            {/* Name */}
            <h1 className="hero-name animate-fadeInUp animate-delay-200">
              {t("hero.name")}
            </h1>

            {/* Role */}
            <div className="hero-role-line animate-fadeInUp animate-delay-300">
              <span className="hero-role-separator">/</span>
              <span ref={typedRef} className="hero-role-typed" />
            </div>

            {/* Bio */}
            <p className="hero-bio animate-fadeInUp animate-delay-400">
              {t("hero.subtitle")}
            </p>

            {/* CTAs */}
            <div className="hero-ctas animate-fadeInUp animate-delay-400">
              <a href="#contact" className="btn btn-primary group">
                <span>{t("hero.cta")}</span>
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={lang === "it" ? "./CV.pdf" : "./Andrea_Feliziani_CV.pdf"}
                download
                className="btn btn-outline group"
              >
                <span>{t("hero.downloadCv")}</span>
                <FaDownload className="transition-transform group-hover:-translate-y-1" />
              </a>
            </div>

            {/* Bottom row: location + social */}
            <div className="hero-bottom-row animate-fadeInUp animate-delay-500">
              <div className="hero-location">
                <FaMapMarkerAlt />
                <span>{t("hero.location")}</span>
              </div>
              <div className="hero-row-divider" />
              <SocialLinks />
            </div>
          </div>

          {/* ── Right: Portrait ── */}
          <div className="lg:col-span-5 hidden lg:flex justify-center animate-fadeInUp animate-delay-500">
            <div className="hero-image-frame">
              <img
                src="./assets/images/Andrea.jpeg"
                alt="Andrea Feliziani"
                className="hero-portrait"
              />

              {/* Frontend chip */}
              <button
                className="hero-chip hero-chip-dev animate-float"
                onClick={() => handleFilterClick("front-end")}
                aria-label={t("hero.cardDev")}
              >
                <span className="hero-chip-icon">
                  <FaCode />
                </span>
                <span>{t("hero.cardDev")}</span>
              </button>

              {/* Design chip */}
              <button
                className="hero-chip hero-chip-design animate-float-delayed"
                onClick={() => handleFilterClick("ui/ux")}
                aria-label={t("hero.cardDesign")}
              >
                <span className="hero-chip-icon hero-chip-icon-teal">
                  <FaPalette />
                </span>
                <span>{t("hero.cardDesign")}</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <div
        ref={scrollCueRef}
        className="hero-scroll-cue hidden md:flex animate-fadeInUp animate-delay-500"
        onClick={scrollToAbout}
        role="button"
        tabIndex={0}
        aria-label="Scroll to about section"
        onKeyDown={(e) => e.key === "Enter" && scrollToAbout()}
      >
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
