import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import "./whattaflow.css";

const content = {
  it: {
    heroLine: "Una piattaforma per la ricerca con i wearable.",
    heroDescription:
      "I ricercatori seguono le sincronizzazioni dalla dashboard; i partecipanti consultano i propri dati nel loro spazio personale.",
    previousPreview: "Mostra la vista precedente",
    nextPreview: "Mostra la vista successiva",
    previewNavigation: "Navigazione tra le viste della piattaforma",
    discover: "Scopri il progetto",
    projectLabel: "Il progetto",
    projectTitle: "Due esperienze, un solo studio.",
    projectDescription:
      "La piattaforma collega il lavoro del team di ricerca — organizzazione dello studio, continuità delle sincronizzazioni e analisi — con uno spazio personale dove chi partecipa consulta le proprie misure quotidiane.",
    websiteLabel: "Sito web",
    websiteNote:
      "Hai ulteriori domande o curiosità? Ho sviluppato anche il sito web ufficiale di Whattaflow per presentare il progetto e raccogliere tutte le informazioni.",
    websiteCta: "Visita il sito web di Whattaflow",
    roleLabel: "Il mio ruolo",
    roleTitleStart: "Ho seguito ogni fase del progetto.",
    roleTitleEmphasis: "Dalla ricerca al codice.",
    roleDescription:
      "Ho studiato bisogni e flussi, progettato e testato le esperienze UX/UI, poi sviluppato il front-end delle due applicazioni con componenti riutilizzabili. Ho realizzato anche la documentazione ufficiale.",
    accessibilityLabel: "Accessibilità",
    accessibility:
      "Ho seguito le linee guida WCAG 2.2, curando struttura semantica, navigazione da tastiera e supporto agli screen reader.",
    twoSides: "Due percorsi UX per due compiti diversi.",
    researchers: "Ricercatori",
    researchersIntro:
      "Verificare la raccolta e capire se i dati sono pronti per l’analisi.",
    researchersDecision:
      "Ho dato priorità allo stato delle sincronizzazioni e alle persone da seguire. Grafici e report arrivano dopo, quando è chiaro cosa è stato raccolto.",
    participants: "Partecipanti",
    participantsIntro:
      "Consultare i propri dati quotidiani senza dover capire la struttura della ricerca.",
    participantsDecision:
      "Ho portato in primo piano passi e obiettivo giornaliero, con riposo e attività a seguire: prima i valori immediati, poi i dettagli.",
    decisionLabel: "La scelta UX",
    decisionsTitle: "Una domanda chiara per ogni vista.",
    decisionsIntro:
      "La piattaforma accompagna un percorso articolato: connessione, organizzazione dello studio, monitoraggio, analisi ed esportazione. Ho progettato la gerarchia per aiutare a capire dove ci si trova, cosa richiede attenzione e come approfondire.",
    decision1Title: "Dove sono?",
    decision1:
      "Progetto, gruppo e partecipante danno un riferimento prima di leggere misure o report.",
    decision2Title: "Cosa richiede attenzione?",
    decision2:
      "La dashboard mette in primo piano le sincronizzazioni e le persone da seguire, prima dei grafici.",
    decision3Title: "Come approfondisco?",
    decision3:
      "Dopo aver verificato la raccolta, si passa a trend, report ed esportazione, mantenendo il contesto del progetto.",
    processLabel: "Dal design al prodotto",
    processTitle: "Dai flussi testati a componenti riutilizzabili.",
    processIntro:
      "Ho progettato flussi e interfacce in Figma, verificato le scelte con Maze e sviluppato il front-end in Next.js. Ho usato shadcn/ui come base di componenti da personalizzare per le due applicazioni, con Tailwind CSS per mantenerli coerenti. Supabase gestisce servizi backend e dati.",
    processToolsLabel: "Strumenti e stack",
    processTools: [
      ["Figma", "Flussi UX/UI e prototipi"],
      ["Maze", "Test e verifica delle scelte"],
      ["Next.js", "Applicazioni e componenti front-end"],
      ["shadcn/ui", "Componenti di partenza personalizzati"],
      ["Tailwind CSS", "Stili coerenti e riutilizzabili"],
      ["Supabase", "Servizi backend e dati"],
    ],
    aiLabel: "Il mio metodo",
    aiTitle: "Come ho integrato l’AI?",
    aiIntro:
      "Ho impostato il contesto prima dei task e guidato il lavoro in modo proattivo. Ho organizzato i file Markdown, scelto strumenti MCP e modelli in base alle necessità, e verificato gli output mantenendo mie le decisioni UX.",
    aiSteps: [
      [
        "Contesto",
        "File Markdown organizzati con obiettivi, struttura e regole del progetto.",
      ],
      ["Strumenti", "MCP e modelli scelti o cambiati in base al tipo di task."],
      [
        "Direzione",
        "Task mirati, iterazioni riviste e decisioni UX sotto la mia guida.",
      ],
    ],
    visitSite: "Visita il sito Whattaflow",
    back: "Torna ai progetti",
    screenResearcher: "Dashboard della piattaforma Ricercatori di Whattaflow",
    screenParticipant: "Dashboard della piattaforma Partecipanti di Whattaflow",
    screenReport: "Vista dei report della piattaforma Ricercatori",
  },
  en: {
    heroLine: "One platform for research with wearable data.",
    heroDescription:
      "Researchers track syncs in the dashboard; participants see their own data in a personal space.",
    previousPreview: "Show previous view",
    nextPreview: "Show next view",
    previewNavigation: "Navigate platform views",
    discover: "Explore the project",
    projectLabel: "The project",
    projectTitle: "Two experiences, one study.",
    projectDescription:
      "The platform connects research teams—organising studies, monitoring synchronisation, and analysing data—with a personal space where participants can check their everyday measurements.",
    websiteLabel: "Website",
    websiteNote:
      "Have more questions or want to dive deeper? I also developed the official Whattaflow website to present the project and provide complete information.",
    websiteCta: "Visit the Whattaflow website",
    roleLabel: "My role",
    roleTitleStart: "I shaped every stage of the project.",
    roleTitleEmphasis: "From research to code.",
    roleDescription:
      "I studied user needs and workflows, designed and tested the UX/UI, then built the front end for both applications with reusable components. I also created the official documentation.",
    accessibilityLabel: "Accessibility",
    accessibility:
      "I followed the WCAG 2.2 guidelines, with attention to semantic structure, keyboard navigation, and screen-reader support.",
    twoSides: "Two UX paths for two different tasks.",
    researchers: "Researchers",
    researchersIntro:
      "Check data collection and see whether the data is ready for analysis.",
    researchersDecision:
      "I prioritised sync status and the people who need follow-up. Charts and reports come next, once the team can see what has been collected.",
    participants: "Participants",
    participantsIntro:
      "Check everyday data without needing to understand the structure of a research study.",
    participantsDecision:
      "I brought steps and the daily goal forward, followed by rest and activity: familiar values first, then more detail.",
    decisionLabel: "The UX decision",
    decisionsTitle: "One clear question for every view.",
    decisionsIntro:
      "The platform spans a connected path: linking devices, organising studies, monitoring data, analysing results, and exporting them. I shaped the hierarchy to help people see where they are, what needs attention, and where to go next.",
    decision1Title: "Where am I?",
    decision1:
      "Project, group, and participant provide a reference before someone reads metrics or reports.",
    decision2Title: "What needs attention?",
    decision2:
      "The dashboard brings sync status and people to follow up to the front, ahead of the charts.",
    decision3Title: "How do I go deeper?",
    decision3:
      "Once collection is clear, researchers can move to trends, reports, and exports while keeping the project context.",
    processLabel: "From design to product",
    processTitle: "From tested flows to reusable components.",
    processIntro:
      "I designed flows and interfaces in Figma, checked decisions with Maze, and built the front end in Next.js. I used shadcn/ui as a starting point for components tailored to both applications, with Tailwind CSS keeping them consistent. Supabase handles backend services and data.",
    processToolsLabel: "Tools and stack",
    processTools: [
      ["Figma", "UX/UI flows and prototypes"],
      ["Maze", "Testing and design validation"],
      ["Next.js", "Applications and front-end components"],
      ["shadcn/ui", "Starting components tailored to the product"],
      ["Tailwind CSS", "Consistent, reusable styling"],
      ["Supabase", "Backend services and data"],
    ],
    aiLabel: "My method",
    aiTitle: "How I integrated AI?",
    aiIntro:
      "I set the context before assigning tasks and directed the work proactively. I organised the Markdown files, chose MCP tools and models for each need, and reviewed outputs while keeping UX decisions in my hands.",
    aiSteps: [
      [
        "Context",
        "Markdown files organised around project goals, structure, and rules.",
      ],
      ["Tools", "MCP tools and models selected or changed to fit each task."],
      [
        "Direction",
        "Focused tasks, reviewed iterations, and UX decisions led by me.",
      ],
    ],
    visitSite: "Visit the Whattaflow site",
    back: "Back to projects",
    screenResearcher: "Whattaflow researcher platform dashboard",
    screenParticipant: "Whattaflow participant platform dashboard",
    screenReport: "Report view in the researcher platform",
  },
};

const imageBase = "/assets/whattaflow";
const motionEase = [0.22, 1, 0.36, 1];

function getRevealProps(delay = 0, amount = 0.2) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount },
    transition: {
      duration: 0.7,
      delay,
      ease: motionEase,
    },
  };
}

function getEntranceProps(reduceMotion, delay = 0) {
  return {
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0.35 : 0.8,
      delay: reduceMotion ? 0 : delay,
      ease: motionEase,
    },
  };
}

export default function WhattaflowPage() {
  const { lang } = useLanguage();
  const c = content[lang] || content.en;
  const reduceMotion = useReducedMotion();
  const [activeExperience, setActiveExperience] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);

  useEffect(() => {
    document.title = `Whattaflow — Andrea Feliziani`;
    return () => {
      document.title = "Andrea Feliziani | Portfolio";
    };
  }, []);

  const scrollToContext = () => {
    document.getElementById("wf-context")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  const heroViews = [
    {
      id: "researchers",
      label: c.researchers,
      image: `${imageBase}/researchers.jpg`,
      alt: c.screenResearcher,
    },
    {
      id: "participants",
      label: c.participants,
      image: `${imageBase}/participants.jpg`,
      alt: c.screenParticipant,
    },
  ];
  const currentView = heroViews[activeExperience];
  const selectExperience = (index) => {
    if (index === activeExperience) return;
    setSlideDirection(index > activeExperience ? 1 : -1);
    setActiveExperience(index);
  };

  return (
    <article className="wf-case">
      <section className="wf-hero" aria-labelledby="wf-title">
        <div className="hero-dot-grid" aria-hidden="true" />
        <div className="wf-hero-layout">
          <div className="wf-hero-content">
            <motion.div
              className="wf-wordmark"
              aria-hidden="true"
              {...getEntranceProps(reduceMotion, 0.1)}
            >
              <img
                className="wf-wordmark-light"
                src={`${imageBase}/logo-open.svg`}
                alt=""
              />
              <img
                className="wf-wordmark-dark"
                src={`${imageBase}/logo-open-white.svg`}
                alt=""
              />
            </motion.div>
            <motion.h1 id="wf-title" {...getEntranceProps(reduceMotion, 0.22)}>
              {c.heroLine}
            </motion.h1>
            <motion.p
              className="wf-hero-description"
              {...getEntranceProps(reduceMotion, 0.34)}
            >
              {c.heroDescription}
            </motion.p>
            <motion.button
              type="button"
              onClick={scrollToContext}
              className="wf-hero-action"
              {...getEntranceProps(reduceMotion, 0.46)}
            >
              {c.discover}
              <FaArrowDown aria-hidden="true" />
            </motion.button>
          </div>
          <motion.figure
            className="wf-hero-preview"
            {...getEntranceProps(reduceMotion, 0.3)}
          >
            <div className="wf-preview-frame">
              <figcaption className="wf-preview-toolbar">
                <div className="wf-window-controls" aria-hidden="true">
                  <span /><span /><span />
                </div>
                <span className="wf-preview-title" aria-live="polite" aria-atomic="true">
                  <span className="wf-preview-product">Whattaflow</span>
                  <span className="wf-preview-separator" aria-hidden="true">/</span>
                  <span>{currentView.label}</span>
                </span>
                <div className="wf-preview-navigation" role="group" aria-label={c.previewNavigation}>
                  <button
                    type="button"
                    aria-label={`${c.previousPreview}: ${heroViews[activeExperience - 1]?.label || currentView.label}`}
                    onClick={() => selectExperience(activeExperience - 1)}
                    disabled={activeExperience === 0}
                  >
                    <FaArrowLeft aria-hidden="true" />
                  </button>
                  <span aria-hidden="true">0{activeExperience + 1} / 0{heroViews.length}</span>
                  <button
                    type="button"
                    aria-label={`${c.nextPreview}: ${heroViews[activeExperience + 1]?.label || currentView.label}`}
                    onClick={() => selectExperience(activeExperience + 1)}
                    disabled={activeExperience === heroViews.length - 1}
                  >
                    <FaArrowRight aria-hidden="true" />
                  </button>
                </div>
              </figcaption>
              <div className="wf-hero-screen" aria-live="polite" aria-atomic="true">
                <AnimatePresence initial={false} mode="wait" custom={slideDirection}>
                  <motion.img
                    key={currentView.id}
                    src={currentView.image}
                    alt={currentView.alt}
                    custom={slideDirection}
                    initial={
                      reduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, x: slideDirection * 34, scale: 0.985, filter: "blur(7px)" }
                    }
                    animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                    exit={
                      reduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, x: slideDirection * -24, scale: 0.99, filter: "blur(4px)" }
                    }
                    transition={{ duration: reduceMotion ? 0.18 : 0.42, ease: motionEase }}
                    fetchPriority={activeExperience === 0 ? "high" : "auto"}
                  />
                </AnimatePresence>
              </div>
            </div>
          </motion.figure>
        </div>
      </section>

      <div className="wf-shell">
        <section
          id="wf-context"
          className="wf-intro wf-section"
          aria-labelledby="wf-context-title"
        >
          <motion.div className="wf-section-marker" {...getRevealProps(0, 0.3)}>
            {c.projectLabel}
          </motion.div>
          <motion.div className="wf-project-copy" {...getRevealProps(0.1, 0.2)}>
            <h2 id="wf-context-title">{c.projectTitle}</h2>
            <p className="wf-lead">{c.projectDescription}</p>
            <div className="wf-website-note">
              <span>{c.websiteLabel}</span>
              <p>{c.websiteNote}</p>
              <a
                href="https://whattaflowinfo.whattadata.it/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{c.websiteCta}</span>
                <FaArrowUpRightFromSquare aria-hidden="true" />
                <span className="sr-only">
                  {lang === "it"
                    ? "(si apre in una nuova scheda)"
                    : "(opens in a new tab)"}
                </span>
              </a>
            </div>
          </motion.div>
        </section>

        <section
          className="wf-role-section wf-section"
          aria-labelledby="wf-role-title"
        >
          <div className="wf-role-panel">
            <div className="wf-role-intro">
              <motion.div
                className="wf-section-marker"
                {...getRevealProps(0, 0.3)}
              >
                {c.roleLabel}
              </motion.div>
              <motion.h2 id="wf-role-title" {...getRevealProps(0.1, 0.2)}>
                <span>{c.roleTitleStart}</span>{" "}
                <em>{c.roleTitleEmphasis}</em>
              </motion.h2>
            </div>
            <div className="wf-role-main">
              <motion.p className="wf-lead" {...getRevealProps(0.16, 0.2)}>
                {c.roleDescription}
              </motion.p>
              <motion.div
                className="wf-accessibility-note"
                {...getRevealProps(0.22, 0.2)}
              >
                <span>{c.accessibilityLabel}</span>
                <p>{c.accessibility}</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section
          className="wf-section wf-experiences"
          aria-labelledby="wf-experiences-title"
        >
          <motion.div
            className="wf-experiences-heading"
            {...getRevealProps(0, 0.3)}
          >
            <div className="wf-section-marker">Whattaflow</div>
            <h2 id="wf-experiences-title">{c.twoSides}</h2>
          </motion.div>
          <div className="wf-experience">
            <div className="wf-experience-copy">
              <motion.h3 {...getRevealProps(0, 0.3)}>{c.researchers}</motion.h3>
              <motion.p
                className="wf-experience-intro"
                {...getRevealProps(0.1, 0.3)}
              >
                {c.researchersIntro}
              </motion.p>
              <motion.p {...getRevealProps(0.2, 0.3)}>
                {c.researchersDecision}
              </motion.p>
            </div>
            <motion.figure {...getRevealProps(0.12, 0.15)}>
              <img
                src={`${imageBase}/researchers-mockup.png`}
                alt={c.screenResearcher}
                loading="lazy"
              />
              <figcaption>{c.researchers} / Whattaflow</figcaption>
            </motion.figure>
          </div>
          <div className="wf-experience wf-experience-reverse">
            <div className="wf-experience-copy">
              <motion.h3 {...getRevealProps(0, 0.3)}>
                {c.participants}
              </motion.h3>
              <motion.p
                className="wf-experience-intro"
                {...getRevealProps(0.1, 0.3)}
              >
                {c.participantsIntro}
              </motion.p>
              <motion.p {...getRevealProps(0.2, 0.3)}>
                {c.participantsDecision}
              </motion.p>
            </div>
            <motion.figure {...getRevealProps(0.12, 0.15)}>
              <img
                src={`${imageBase}/participants-mockup.png`}
                alt={c.screenParticipant}
                loading="lazy"
              />
              <figcaption>{c.participants} / Whattaflow</figcaption>
            </motion.figure>
          </div>
        </section>

        <section
          className="wf-section wf-decisions"
          aria-labelledby="wf-decisions-title"
        >
          <motion.div className="wf-section-marker" {...getRevealProps(0, 0.3)}>
            {c.decisionLabel}
          </motion.div>
          <div className="wf-decisions-heading">
            <motion.h2 id="wf-decisions-title" {...getRevealProps(0.1, 0.25)}>
              {c.decisionsTitle}
            </motion.h2>
            <motion.p {...getRevealProps(0.2, 0.25)}>
              {c.decisionsIntro}
            </motion.p>
          </div>
          <div className="wf-decisions-grid">
            <div className="wf-decisions-list">
              {[
                [c.decision1Title, c.decision1],
                [c.decision2Title, c.decision2],
                [c.decision3Title, c.decision3],
              ].map(([title, description], index) => (
                <div className="wf-decision" key={title}>
                  <motion.h3 {...getRevealProps(index * 0.08, 0.3)}>
                    {title}
                  </motion.h3>
                  <motion.p {...getRevealProps(index * 0.08 + 0.1, 0.3)}>
                    {description}
                  </motion.p>
                </div>
              ))}
            </div>
            <motion.figure {...getRevealProps(0.12, 0.15)}>
              <img
                src={`${imageBase}/report-mockup.png`}
                alt={c.screenReport}
                loading="lazy"
              />
              <figcaption>
                {c.researchers} / {c.decisionLabel}
              </figcaption>
            </motion.figure>
          </div>
        </section>

        <section
          className="wf-section wf-process"
          aria-labelledby="wf-process-title"
        >
          <motion.div className="wf-section-marker" {...getRevealProps(0, 0.3)}>
            {c.processLabel}
          </motion.div>
          <div className="wf-process-main">
            <motion.h2 id="wf-process-title" {...getRevealProps(0.1, 0.25)}>
              {c.processTitle}
            </motion.h2>
            <motion.p {...getRevealProps(0.22, 0.25)}>
              {c.processIntro}
            </motion.p>
          </div>
          <ul className="wf-process-tools" aria-label={c.processToolsLabel}>
            {c.processTools.map(([tool, use], index) => (
              <motion.li key={tool} {...getRevealProps(index * 0.06, 0.2)}>
                <strong>{tool}</strong>
                <span>{use}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        <section className="wf-section wf-ai" aria-labelledby="wf-ai-title">
          <motion.div className="wf-section-marker" {...getRevealProps(0, 0.3)}>
            {c.aiLabel}
          </motion.div>
          <motion.div className="wf-ai-heading" {...getRevealProps(0.1, 0.2)}>
            <h2 id="wf-ai-title">{c.aiTitle}</h2>
            <p>{c.aiIntro}</p>
          </motion.div>
          <ol className="wf-ai-steps">
            {c.aiSteps.map(([step, description], index) => (
              <motion.li
                className="wf-ai-step"
                key={step}
                {...getRevealProps(index * 0.08, 0.2)}
              >
                <span>{step}</span>
                <p>{description}</p>
              </motion.li>
            ))}
          </ol>
        </section>

        <motion.div className="wf-end" {...getRevealProps(0, 0.2)}>
          <a
            className="wf-end-site-link"
            href="https://whattaflowinfo.whattadata.it/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.visitSite}
            <FaArrowUpRightFromSquare aria-hidden="true" />
            <span className="sr-only">
              {lang === "it"
                ? "(si apre in una nuova scheda)"
                : "(opens in a new tab)"}
            </span>
          </a>
          <Link to="/" state={{ scrollTo: "portfolio" }}>
            {c.back} ↗
          </Link>
        </motion.div>
      </div>
    </article>
  );
}
