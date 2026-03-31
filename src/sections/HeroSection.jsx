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
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection({ onFilterChange }) {
  const typedRef = useRef(null);
  const { t, lang } = useLanguage();
  const { scrollY } = useScroll();

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

  // Parallax effects
  const yText = useTransform(scrollY, [0, 500], [0, 80]);
  const yImage = useTransform(scrollY, [0, 500], [0, -40]);
  const opacityScroll = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section id="home" className="hero-section relative w-full overflow-hidden flex items-center justify-center min-h-screen">
      {/* Dynamic Background glowing orbs */}
      <div className="hero-ambient-glow orb-1" />
      <div className="hero-ambient-glow orb-2" />
      <div className="hero-dot-grid" aria-hidden="true" />

      <div className="container relative z-10 px-4 md:px-6 max-w-7xl mx-auto flex flex-col items-center justify-center h-full w-full">
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-between mt-24 lg:mt-0">
          
          {/* ── Center/Back: HUGE Name Text ── */}
          <motion.div 
            style={{ y: yText }}
            className="absolute top-[5%] lg:top-[12%] left-0 w-full flex justify-center lg:justify-start z-0 select-none pointer-events-none"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[clamp(5rem,15vw,16rem)] font-extrabold tracking-tighter leading-none text-transparent bg-clip-text bg-linear-to-b from-(--color-text) to-transparent opacity-10 dark:opacity-[0.04] whitespace-nowrap overflow-hidden">
              {t("hero.name").split(' ')[0].toUpperCase()}
            </h1>
          </motion.div>

          {/* ── Left: Text Content ── */}
          <div className="w-full lg:w-[55%] z-20 flex flex-col items-center lg:items-start text-center lg:text-left pt-10 lg:pt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-available-badge bg-background/50 backdrop-blur-md mb-6"
            >
              <span className="hero-available-dot" aria-hidden="true" />
              Available for work
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-(--color-text-main) mb-6 leading-[1.1]"
            >
              {t("hero.name")}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-3xl font-medium text-(--color-accent) mb-8 flex items-center justify-center lg:justify-start gap-4"
            >
              <span className="text-(--color-border) opacity-60 font-mono text-2xl">{'<'}</span>
              <span ref={typedRef} className="hero-role-typed text-(--color-text-main) font-display tracking-wide" />
              <span className="text-(--color-border) opacity-60 font-mono text-2xl">{'/>'}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero-bio-panel mb-10"
            >
              <div className="hero-bio-frame">
                <span className="hero-bio-accent" aria-hidden="true" />
                <p className="hero-bio text-lg flex-1 md:text-xl text-(--color-text-muted) max-w-xl leading-relaxed">
                  {t("hero.subtitle")}
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-5 justify-center lg:justify-start mb-12"
            >
              <a href="#contact" className="btn btn-primary group relative overflow-hidden px-8 py-4 text-base backdrop-blur-sm">
                <span className="relative z-10 flex items-center gap-3">
                  {t("hero.cta")}
                  <FaArrowRight className="transition-transform group-hover:translate-x-1.5" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </a>
              <a
                href={lang === "it" ? "./CV.pdf" : "./Andrea_Feliziani_CV.pdf"}
                download
                className="btn btn-outline group px-8 py-4 text-base hover:bg-(--color-text) hover:text-(--color-bg) transition-colors duration-300 border-2"
              >
                <div className="flex items-center gap-3">
                  <span>{t("hero.downloadCv")}</span>
                  <FaDownload className="transition-transform group-hover:-translate-y-1.5" />
                </div>
              </a>
            </motion.div>

            {/* Bottom info */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="inline-flex w-fit max-w-full self-center lg:self-start items-center gap-6 md:gap-7 bg-(--color-surface)/40 px-5 md:px-6 py-4 rounded-2xl border border-(--color-border)/50 backdrop-blur-sm"
            >
              <div className="hero-location flex items-center gap-3 text-sm text-(--color-text-muted) font-medium">
                <FaMapMarkerAlt className="text-(--color-accent) text-lg" />
                <span className="tracking-wide uppercase text-xs">{t("hero.location")}</span>
              </div>
              <div className="h-8 w-px bg-(--color-border)/80" />
              <SocialLinks className="gap-3" />
            </motion.div>
          </div>

          {/* ── Right: Transparent Portrait with Floating Chips ── */}
          <div className="w-full lg:w-[45%] relative mt-20 lg:mt-0 flex justify-center z-10 min-h-[500px] lg:min-h-[700px]">
            <motion.div
              style={{ y: yImage }}
              initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.4, delay: 0.1, ease: "easeOut" }}
              className="relative w-full max-w-[500px] flex items-end justify-center"
            >
              {/* Gradient backdrop removed since we are now using a framed JPEG instead of a transparent PNG */}
              
              <div className="relative w-[85%] lg:w-[95%] rounded-4xl overflow-hidden border border-(--color-border)/40 shadow-[0_28px_72px_rgba(0,0,0,0.4)] z-0 transform translate-y-[2%]">
                <img
                  src="./assets/images/Andrea.jpeg"
                  alt="Andrea Feliziani"
                  className="w-full aspect-4/5 object-cover object-top origin-top scale-[1.03] transform-gpu hover:scale-[1.08] transition-transform duration-700"
                />
              </div>

              {/* Frontend Floating Chip */}
              <motion.button
                initial={{ opacity: 0, x: 50, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 80 }}
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px -10px rgba(232, 160, 32, 0.3)" }}
                className="absolute top-[20%] right-[-5%] lg:right-[-15%] hero-chip z-20 flex items-center gap-3 bg-(--color-surface)/80 backdrop-blur-xl border border-(--color-border)/60 px-5 py-4 rounded-2xl shadow-2xl cursor-pointer"
                onClick={() => handleFilterClick("front-end")}
                aria-label={t("hero.cardDev")}
              >
                <div className="hero-chip-icon bg-(--color-accent)/10 text-(--color-accent) p-2.5 rounded-xl border border-(--color-accent)/20">
                  <FaCode size={20} />
                </div>
                <span className="font-semibold text-[0.95rem] tracking-wide text-(--color-text)">{t("hero.cardDev")}</span>
              </motion.button>

              {/* Design Floating Chip */}
              <motion.button
                initial={{ opacity: 0, x: -50, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 80 }}
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px -10px rgba(10, 173, 173, 0.3)" }}
                className="absolute bottom-[25%] left-[-5%] lg:left-[-15%] hero-chip z-20 flex items-center gap-3 bg-(--color-surface)/80 backdrop-blur-xl border border-(--color-border)/60 px-5 py-4 rounded-2xl shadow-2xl cursor-pointer"
                onClick={() => handleFilterClick("ui/ux")}
                aria-label={t("hero.cardDesign")}
              >
                <div className="hero-chip-icon-teal bg-teal-500/10 text-teal-400 p-2.5 rounded-xl border border-teal-500/20">
                  <FaPalette size={20} />
                </div>
                <span className="font-semibold text-[0.95rem] tracking-wide text-(--color-text)">{t("hero.cardDesign")}</span>
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: opacityScroll }}
        className="hero-scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-30"
        onClick={scrollToAbout}
        role="button"
        tabIndex={0}
        aria-label="Scroll to about section"
        onKeyDown={(e) => e.key === "Enter" && scrollToAbout()}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1.5 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-(--color-text-muted) font-bold">Scroll</span>
        <div className="w-px h-[50px] bg-linear-to-b from-(--color-accent)/80 to-transparent" />
      </motion.div>
    </section>
  );
}
