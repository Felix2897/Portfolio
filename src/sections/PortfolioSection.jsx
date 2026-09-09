import { useEffect, useRef } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const projects = [
  { id: "study", title: "Study Ward", image: "./Img/Group 2.png", categories: ["UI/UX Design"], link: "/projects/study", copy: "portfolio.projects.study.description" },
  { id: "opla", title: "Oplà", image: "./Img/opmobile.png", categories: ["UI/UX Design"], link: "/projects/opla", copy: "portfolio.projects.opla.description" },
  { id: "serenity", title: "Serenity Dream Travels", image: "./Img/heroimg.png", categories: ["UI/UX Design", "Front-End Project"], link: "/projects/serenity", copy: "portfolio.projects.serenity.description" },
  { id: "botanicare", title: "Botanicare", image: "./Img/botanicare.png", categories: ["UI/UX Design"], link: "/projects/botanicare", copy: "portfolio.projects.botanicare.description" },
  { id: "valeri", title: "Valeri", image: "./Img/vr.png", categories: ["UI/UX Design"], link: "/projects/valeri", copy: "portfolio.projects.valeri.description" },
  { id: "secure", title: "Secure it with Cyber", image: "./Img/minilogo.png", categories: ["Front-End Project"], link: "/projects/secure-it", copy: "portfolio.projects.secure.description" },
];

export default function PortfolioSection({ activeFilter, onFilterChange }) {
  const listRef = useRef(null);
  const { t, lang } = useLanguage();

  const filters = [
    { label: t("portfolio.filterAll"), value: "all" },
    { label: t("portfolio.filterDesign"), value: "ui/ux" },
    { label: t("portfolio.filterFrontend"), value: "front-end" },
  ];

  const visibleProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.categories.some((category) => category.toLowerCase().includes(activeFilter));
  });

  useEffect(() => {
    const rows = listRef.current?.querySelectorAll(".editorial-project-row");
    if (!rows?.length) return undefined;
    rows.forEach((row) => row.classList.remove("is-revealed"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-revealed")),
      { threshold: 0.1 },
    );
    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, [activeFilter]);

  return (
    <section id="portfolio" className="editorial-section editorial-work" ref={listRef}>
      <div className="editorial-shell">
        <div className="editorial-work-heading">
          <div>
            <span className="editorial-kicker">{t("portfolio.badge")}</span>
            <h2>{t("portfolio.title")}</h2>
          </div>
        </div>

        <div className="editorial-work-tools">
          <div className="editorial-filters" role="group" aria-label={t("portfolio.title")}>
            {filters.map(({ label, value }) => (
              <button key={value} type="button" className={activeFilter === value ? "active" : ""} aria-pressed={activeFilter === value} onClick={() => onFilterChange(value)}>
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="editorial-project-list">
          {visibleProjects.map((project, index) => (
            <article className="editorial-project-row" key={project.id} style={{ "--row-delay": `${index * 70}ms` }}>
              <span className="editorial-project-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="editorial-project-copy">
                <div className="editorial-project-tags">
                  {project.categories.map((category) => <span key={category}>{category}</span>)}
                </div>
                <h3>{project.title}</h3>
                <p>{t(project.copy)}</p>
              </div>
              <div className="editorial-project-preview">
                <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
              </div>
              <Link className="editorial-project-link" to={project.link} aria-label={`${t("portfolio.viewProject")} ${project.title}`}>
                <span>{t("portfolio.viewProject")}</span>
                <FaArrowUpRightFromSquare aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
