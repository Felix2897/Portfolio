import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import bimTaloroLogo from "../../assets/BimTaloro/logoport.png";

const projects = [
  { id: "whattaflow", title: "Whattaflow", image: "/assets/whattaflow/logo-open.svg", imageDark: "/assets/whattaflow/logo-open-white.svg", categories: ["UI/UX Design", "Front-End Project"], link: "/projects/whattaflow", copy: "portfolio.projects.whattaflow.description" },
  { id: "bimtaloro", title: "BIM Taloro", image: bimTaloroLogo, imageAlt: "Logo BIM Taloro Sardegna", imageTreatment: "wordmark", categories: ["UI/UX Design", "Front-End Project"], link: "/projects/bim-taloro", copy: "portfolio.projects.bimtaloro.description" },
  { id: "study", title: "Study Ward", image: "./Img/Group 2.png", categories: ["UI/UX Design"], link: "/projects/study", copy: "portfolio.projects.study.description" },
  { id: "opla", title: "Oplà", image: "./Img/opmobile.png", categories: ["UI/UX Design"], link: "/projects/opla", copy: "portfolio.projects.opla.description" },
  { id: "serenity", title: "Serenity Dream Travels", image: "./Img/heroimg.png", categories: ["UI/UX Design", "Front-End Project"], link: "/projects/serenity", copy: "portfolio.projects.serenity.description" },
  { id: "botanicare", title: "Botanicare", image: "./Img/botanicare.png", categories: ["UI/UX Design"], link: "/projects/botanicare", copy: "portfolio.projects.botanicare.description" },
  { id: "valeri", title: "Valeri", image: "./Img/vr.png", categories: ["UI/UX Design"], link: "/projects/valeri", copy: "portfolio.projects.valeri.description" },
  { id: "secure", title: "Secure it with Cyber", image: "./Img/minilogo.png", categories: ["Front-End Project"], link: "/projects/secure-it", copy: "portfolio.projects.secure.description" },
];

const MotionLink = motion.create ? motion.create(Link) : motion(Link);

export default function PortfolioSection({ activeFilter, onFilterChange }) {
  const { t } = useLanguage();

  const filters = [
    { label: t("portfolio.filterAll"), value: "all" },
    { label: t("portfolio.filterDesign"), value: "ui/ux" },
    { label: t("portfolio.filterFrontend"), value: "front-end" },
  ];

  const visibleProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.categories.some((category) => category.toLowerCase().includes(activeFilter));
  });

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
            {filters.map(({ label, value }) => (
              <button key={value} type="button" className={activeFilter === value ? "active" : ""} aria-pressed={activeFilter === value} onClick={() => onFilterChange(value)}>
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="editorial-project-list">
          {visibleProjects.map((project, index) => (
            <MotionLink
              className="editorial-project-row"
              key={project.id}
              to={project.link}
              aria-label={`${t("portfolio.viewProject")} ${project.title}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="editorial-project-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="editorial-project-copy">
                <div className="editorial-project-tags">
                  {project.categories.map((category) => <span key={category}>{category}</span>)}
                </div>
                <h3>{project.title}</h3>
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
      </div>
    </section>
  );
}
