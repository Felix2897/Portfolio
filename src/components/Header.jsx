import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaChevronDown } from "react-icons/fa";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { useLanguage } from "../i18n/LanguageContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { lang, setLang, t } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { label: t("nav.home"), href: "/#home" },
    { label: t("nav.about"), href: "/#about" },
    { label: t("nav.portfolio"), href: "/#portfolio" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sections = document.querySelectorAll("section[id]");
    const onScroll = () => {
      let current = "";
      sections.forEach((section) => {
        if (window.pageYOffset >= section.offsetTop - 200) {
          current = section.getAttribute("id");
        }
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const handleNavClick = (e, href) => {
    if (isHome && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
      }
    }
    setMobileOpen(false);
    document.body.style.overflow = "auto";
  };

  const openMobile = () => {
    setMobileOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = "auto";
  };

  const selectLang = (l) => {
    setLang(l);
    setLangOpen(false);
  };

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="px-4 md:px-6 max-w-7xl mx-auto">
          <div className="header-inner">
            <Link
              to="/"
              className="logo"
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <Logo />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <ul className="flex list-none m-0 p-0 gap-8">
                {navItems.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={isHome ? href : href}
                      className={`nav-link ${isHome && activeSection === href.replace("/#", "") ? "active" : ""}`}
                      onClick={(e) => handleNavClick(e, href)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="lang-toggle"
                  aria-label="Toggle language"
                  title={
                    lang === "en" ? "Passa all'italiano" : "Switch to English"
                  }
                >
                  {lang === "en" ? "🇬🇧 EN" : "🇮🇹 IT"}
                  <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {langOpen && (
                  <div className="absolute top-full right-0 mt-2 p-2 glass-card min-w-[120px] animate-fadeInUp">
                    <button
                      onClick={() => selectLang("en")}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${lang === "en" ? "bg-indigo-500/20 text-indigo-400" : "text-text-muted hover:bg-white/5"}`}
                    >
                      <span>🇬🇧</span> English
                    </button>
                    <button
                      onClick={() => selectLang("it")}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${lang === "it" ? "bg-indigo-500/20 text-indigo-400" : "text-text-muted hover:bg-white/5"}`}
                    >
                      <span>🇮🇹</span> Italiano
                    </button>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Toggle */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="lang-toggle lang-toggle-sm relative"
                aria-label="Toggle language"
              >
                {lang === "en" ? "🇬🇧" : "🇮🇹"}
                <FaChevronDown className="text-[10px]" />
                {langOpen && (
                  <div className="absolute top-full right-0 mt-2 p-2 glass-card min-w-[100px] z-50">
                    <button
                      onClick={() => selectLang("en")}
                      className="w-full text-left px-3 py-2 text-sm text-white"
                    >
                      🇬🇧 EN
                    </button>
                    <button
                      onClick={() => selectLang("it")}
                      className="w-full text-left px-3 py-2 text-sm text-white"
                    >
                      🇮🇹 IT
                    </button>
                  </div>
                )}
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center"
                onClick={openMobile}
                aria-label="Menu"
              >
                <div className="space-y-1.5">
                  <div className="w-5 h-0.5 bg-white"></div>
                  <div className="w-5 h-0.5 bg-white"></div>
                  <div className="w-5 h-0.5 bg-white"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? "active" : ""}`}>
        <div className="flex justify-between items-center mb-12">
          <Logo />
          <button
            onClick={closeMobile}
            className="text-2xl text-text-muted hover:text-white bg-transparent border-none cursor-pointer"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex-1">
          <ul className="list-none p-0 m-0">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={isHome ? href : href}
                  className="block text-2xl font-semibold py-4 text-text-main hover:text-primary transition-all hover:translate-x-2.5"
                  style={{ fontFamily: "var(--font-display)" }}
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks className="mt-8" />
      </div>
    </>
  );
}
