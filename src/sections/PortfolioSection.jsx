import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../i18n/LanguageContext";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const cardRefs = useRef([]);
  const { t } = useLanguage();

  const projects = [
    {
      id: "study",
      title: "Study Ward",
      description: t("portfolio.projects.study.description"),
      image: "./Img/Group 2.png",
      categories: ["UI/UX Design"],
      link: "/projects/study",
    },
    {
      id: "opla",
      title: "Oplà",
      description: t("portfolio.projects.opla.description"),
      image: "./Img/opmobile.png",
      categories: ["UI/UX Design"],
      link: "/projects/opla",
    },
    {
      id: "serenity",
      title: "Serenity Dream Travels",
      description: t("portfolio.projects.serenity.description"),
      image: "./Img/heroimg.png",
      categories: ["UI/UX Design", "Front-End Project"],
      link: "/projects/serenity",
    },
    {
      id: "botanicare",
      title: "Botanicare",
      description: t("portfolio.projects.botanicare.description"),
      image: "./Img/botanicare.png",
      categories: ["UI/UX Design"],
      link: "/projects/botanicare",
    },
    {
      id: "valeri",
      title: "Valeri",
      description: t("portfolio.projects.valeri.description"),
      image: "./Img/vr.png",
      categories: ["UI/UX Design"],
      link: "/projects/valeri",
    },
    {
      id: "secure",
      title: "Secure it with Cyber",
      description: t("portfolio.projects.secure.description"),
      image: "./Img/minilogo.png",
      categories: ["Front-End Project"],
      link: "/projects/secure-it",
    },
  ];

  const filters = [
    { label: t("portfolio.filterAll"), value: "all" },
    { label: t("portfolio.filterDesign"), value: "ui/ux" },
    { label: t("portfolio.filterFrontend"), value: "front-end" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 },
    );
    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const isVisible = (project) => {
    if (activeFilter === "all") return true;
    return project.categories.some((cat) =>
      cat.toLowerCase().includes(activeFilter.toLowerCase()),
    );
  };

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeader
          badge={t("portfolio.badge")}
          title={t("portfolio.title")}
        />

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map(({ label, value }) => (
            <button
              key={value}
              className={`filter-btn ${activeFilter === value ? "active" : ""}`}
              onClick={() => setActiveFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`portfolio-card-wrapper transition-all duration-400 ${isVisible(project) ? "" : "hidden"}`}
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <Link to={project.link} className="portfolio-link">
                      <span>{t("portfolio.viewProject")}</span>
                      <FaExternalLinkAlt />
                    </Link>
                  </div>
                </div>
                <div className="portfolio-info">
                  <div className="chips">
                    {project.categories.map((cat) => (
                      <div key={cat} className="portfolio-category">
                        {cat}
                      </div>
                    ))}
                  </div>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
