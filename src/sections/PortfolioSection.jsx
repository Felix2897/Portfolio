import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import bimTaloroLogo from "../../assets/BimTaloro/logoport.png";
import penguinLogo from "../../assets/Penguin/logo.png";

const projects = [
  { id: "whattaflow", title: "Whattaflow", group: "work", image: "/assets/whattaflow/logo-open.svg", imageDark: "/assets/whattaflow/logo-open-white.svg", categories: ["UI/UX Design", "Front-End Project"], link: "/projects/whattaflow", copy: "portfolio.projects.whattaflow.description" },
  { id: "bimtaloro", title: "BIM Taloro", group: "work", image: bimTaloroLogo, imageAlt: "Logo BIM Taloro Sardegna", imageTreatment: "wordmark", categories: ["UI/UX Design", "Front-End Project"], link: "/projects/bim-taloro", copy: "portfolio.projects.bimtaloro.description" },
  { id: "penguin", title: "Penguin", group: "work", image: penguinLogo, imageAlt: "Logo Penguin", imageTreatment: "brand", categories: ["UI/UX Design", "Front-End Project"], link: "/projects/penguin", copy: "portfolio.projects.penguin.description" },
  { id: "study", title: "Study Ward", group: "university", image: "./Img/Group 2.png", categories: ["UI/UX Design"], link: "/projects/study", copy: "portfolio.projects.study.description" },
  { id: "opla", title: "Oplà", group: "university", image: "./Img/opmobile.png", categories: ["UI/UX Design"], link: "/projects/opla", copy: "portfolio.projects.opla.description" },
  { id: "serenity", title: "Serenity Dream Travels", group: "university", image: "./Img/heroimg.png", categories: ["UI/UX Design", "Front-End Project"], link: "/projects/serenity", copy: "portfolio.projects.serenity.description" },
  { id: "botanicare", title: "Botanicare", group: "university", image: "./Img/botanicare.png", categories: ["UI/UX Design"], link: "/projects/botanicare", copy: "portfolio.projects.botanicare.description" },
  { id: "valeri", title: "Valeri", group: "university", image: "./Img/vr.png", categories: ["UI/UX Design"], link: "/projects/valeri", copy: "portfolio.projects.valeri.description" },
  { id: "secure", title: "Secure it with Cyber", group: "university", image: "./Img/minilogo.png", categories: ["Front-End Project"], link: "/projects/secure-it", copy: "portfolio.projects.secure.description" },
];

const MotionLink = motion.create ? motion.create(Link) : motion(Link);

export default function PortfolioSection({ activeFilter, onFilterChange }) {
  const { t } = useLanguage();

  const filters = [
    { label: t("portfolio.filterAll"), value: "all" },
    { label: t("portfolio.filterWork"), value: "work" },
    { label: t("portfolio.filterUniversity"), value: "university" },
    { label: t("portfolio.filterDesign"), value: "ui/ux" },
    { label: t("portfolio.filterFrontend"), value: "front-end" },
  ];

  const visibleProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "work" || activeFilter === "university") return project.group === activeFilter;
    return project.categories.some((category) => category.toLowerCase().includes(activeFilter));
  });

  const groups = [
    { id: "work", title: t("portfolio.groupWork") },
    { id: "university", title: t("portfolio.groupUniversity") },
  ];

  return (
    <section id="portfolio" className="editorial-section editorial-work">
      <div className="editorial-shell">
        <motion.div
          className="editorial-work-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <span className="editorial-kicker">{t("portfolio.badge")}</span>
            <h2>{t("portfolio.title")}</h2>
          </div>
        </motion.div>

        <motion.div
          className="editorial-work-tools"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="editorial-filters" role="group" aria-label={t("portfolio.title")}>
            {[filters.slice(0, 3), filters.slice(3)].map((filterSet, index) => (
              <div className="editorial-filter-set" key={index}>
                {filterSet.map(({ label, value }) => (
                  <button key={value} type="button" className={activeFilter === value ? "active" : ""} aria-pressed={activeFilter === value} onClick={() => onFilterChange(value)}>
                    {label}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="editorial-project-groups">
          {groups.map((group) => {
            const groupProjects = visibleProjects.filter((project) => project.group === group.id);
            if (!groupProjects.length) return null;
            return (
              <section className="editorial-project-group" key={group.id} aria-labelledby={`portfolio-${group.id}-title`}>
                <h3 className="editorial-project-group-title" id={`portfolio-${group.id}-title`}>{group.title}</h3>
                <div className="editorial-project-list">
                  {groupProjects.map((project) => (
                    <MotionLink
                      className="editorial-project-row"
                      key={project.id}
                      to={project.link}
                      aria-label={`${t("portfolio.viewProject")} ${project.title}`}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.65, delay: Math.min(visibleProjects.indexOf(project) * 0.08, 0.4), ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="editorial-project-index">{String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
                      <div className="editorial-project-copy">
                        <div className="editorial-project-tags">
                          {project.categories.map((category) => <span key={category}>{category}</span>)}
                        </div>
                        <h4>{project.title}</h4>
                        <p>{t(project.copy)}</p>
                      </div>
                      <div className={`editorial-project-preview${project.imageDark ? " editorial-project-preview--logo" : ""}${project.imageTreatment ? ` editorial-project-preview--${project.imageTreatment}` : ""}`}>
                        <img src={project.image} alt={project.imageAlt || (project.imageDark ? `${project.title} logo` : `${project.title} preview`)} loading="lazy" />
                        {project.imageDark && <img className="editorial-project-logo-dark" src={project.imageDark} alt="" loading="lazy" />}
                      </div>
                      <span className="editorial-project-link" aria-hidden="true">
                        <span>{t("portfolio.viewProject")}</span>
                        <FaArrowUpRightFromSquare aria-hidden="true" />
                      </span>
                    </MotionLink>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
