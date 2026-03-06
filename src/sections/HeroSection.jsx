import { useEffect, useRef, useCallback, useMemo, useState } from "react";
import Typed from "typed.js";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
  FaPalette,
  FaCode,
  FaMapMarkerAlt,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";
import { useLanguage } from "../i18n/LanguageContext";

export default function HeroSection() {
  const typedRef = useRef(null);
  const scrollRef = useRef(null);
  const [init, setInit] = useState(false);
  const { t, lang } = useLanguage();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const particlesOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: ["#6366f1", "#ec4899", "#8b5cf6", "#3b82f6"] },
        links: {
          color: "#9ca3af",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 1,
          straight: false,
        },
        number: { density: { enable: true, area: 800 }, value: 50 },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [],
  );

  useEffect(() => {
    // Only initialize Typed once the component is mounted
    const typed = new Typed(typedRef.current, {
      strings: [t("hero.typedStrings.0"), t("hero.typedStrings.1")],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, [t]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        if (window.scrollY > 50) {
          scrollRef.current.style.opacity = "0";
        } else {
          scrollRef.current.style.opacity = "1";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg">
        <div className="hero-gradient hero-gradient-1"></div>
        <div className="hero-gradient hero-gradient-2"></div>
        <div className="hero-gradient hero-gradient-3"></div>
      </div>

      <div className="particles-container">
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particlesOptions}
            className="w-full h-full"
          />
        )}
      </div>

      <div className="container relative z-10 px-4 md:px-6 max-w-7xl mx-auto h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content */}
          <div className="lg:col-span-7 pt-20 lg:pt-0">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fadeInUp animate-delay-100 font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("hero.greeting")} <br />
              <span className="gradient-text">{t("hero.name")}</span>
              <br />
              <div className="h-[1.2em] mt-2">
                <span
                  ref={typedRef}
                  className="text-3xl md:text-4xl lg:text-5xl text-[var(--color-text-main)] font-medium"
                ></span>
              </div>
            </h1>

            <p className="text-lg md:text-xl text-[var(--color-text-muted)] mb-10 max-w-2xl animate-fadeInUp animate-delay-200">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12 animate-fadeInUp animate-delay-300">
              <a href="#contact" className="btn btn-primary group">
                <span>{t("hero.cta")}</span>
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={lang === "it" ? "/CV.pdf" : "/Andrea_Feliziani_CV.pdf"}
                download
                className="btn btn-outline group"
              >
                <span>{t("hero.downloadCv")}</span>
                <FaDownload className="transition-transform group-hover:-translate-y-1" />
              </a>
            </div>

            <div className="flex items-center gap-6 animate-fadeInUp animate-delay-400">
              <div className="flex items-center gap-2 text-[var(--color-text-muted)] border-r border-[var(--color-border-glass)] pr-6">
                <FaMapMarkerAlt className="text-primary" />
                <span className="text-sm font-medium">
                  {t("hero.location")}
                </span>
              </div>
              <SocialLinks />
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="lg:col-span-5 relative hidden lg:block animate-fadeInUp animate-delay-500">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 blur-3xl rounded-full -z-10"></div>

            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Profile Image Card */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden glass-card border border-[var(--color-border-glass)] p-2 transform rotate-3 transition-transform hover:rotate-0 duration-500 z-10 shadow-2xl">
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img
                    src="/assets/images/Andrea.jpeg"
                    alt="Andrea Feliziani"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <h3
                      className="text-2xl font-bold text-white mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Andrea Feliziani
                    </h3>
                    <p className="text-white/80 text-sm font-medium">
                      UI/UX Designer & Frontend Developer
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Element 1 - UI/UX Design */}
              <div className="absolute -top-6 -right-6 glass-card p-4 rounded-xl flex items-center gap-4 z-20 animate-float shadow-xl border border-[var(--color-border-glass)] bg-[#151525]/80 backdrop-blur-xl">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl">
                  <FaPalette />
                </div>
                <div>
                  <h4 className="font-bold text-text-main text-sm">
                    {t("hero.cardDesign")}
                  </h4>
                  <p className="text-text-muted text-xs">Figma, Adobe XD</p>
                </div>
              </div>

              {/* Floating Element 2 - Frontend */}
              <div className="absolute -bottom-8 -left-8 glass-card p-4 rounded-xl flex items-center gap-4 z-20 animate-float-delayed shadow-xl border border-[var(--color-border-glass)] bg-[#151525]/80 backdrop-blur-xl">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-xl">
                  <FaCode />
                </div>
                <div>
                  <h4 className="font-bold text-text-main text-sm">
                    {t("hero.cardDev")}
                  </h4>
                  <p className="text-text-muted text-xs">React, Tailwind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        onClick={() => {
          const target = document.getElementById("about");
          if (!target) return;
          const start = window.scrollY;
          const end = target.getBoundingClientRect().top + start - 90;
          const duration = 900;
          let startTime = null;
          const ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            window.scrollTo(0, start + (end - start) * ease(progress));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)] opacity-100 transition-opacity duration-300 hidden md:flex animate-fadeInUp animate-delay-500 cursor-pointer hover:text-white"
      >
        <span className="text-sm font-medium tracking-wide uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-text-muted)] to-transparent"></div>
      </div>
    </section>
  );
}
