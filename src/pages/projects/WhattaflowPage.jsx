import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import "./whattaflow.css";

const content = {
  it: {
    role: "UI/UX DESIGN · FRONT-END DEVELOPMENT",
    heroLine: "Una piattaforma per la ricerca con i wearable.",
    heroDescription: "I ricercatori seguono le sincronizzazioni dalla dashboard; i partecipanti consultano i propri dati nel loro spazio personale.",
    researcherPreview: "Dashboard di ricerca",
    participantPreview: "Spazio personale dei partecipanti",
    switchLabel: "Scegli quale esperienza mostrare",
    discover: "Scopri il progetto",
    contextLabel: "Il contesto",
    contextTitle: "I dati ci sono. Renderli utili è la sfida.",
    context: "Whattaflow collega i dati raccolti dai dispositivi wearable al lavoro dei team di ricerca. La stessa piattaforma deve dare ai ricercatori controllo sulla raccolta e alle persone un modo chiaro per consultare i propri dati e scegliere se partecipare a uno studio.",
    ownershipLabel: "Il mio ruolo",
    ownership: "Ho curato UX, interfacce e sviluppo delle due applicazioni, oltre all’identità visiva e al sito che presenta la piattaforma.",
    twoSides: "Due bisogni, due punti di vista.",
    researchers: "Ricercatori",
    researchersIntro: "Capire se i dati arrivano, individuare le interruzioni e preparare l’analisi.",
    researchersDecision: "La dashboard porta subito in evidenza lo stato delle sincronizzazioni e chi richiede attenzione. Prima di leggere un grafico, il team può capire se i dati su cui lavorerà sono completi.",
    participants: "Partecipanti",
    participantsIntro: "Ritrovare i propri dati in uno spazio personale, senza dover conoscere il linguaggio della ricerca.",
    participantsDecision: "La vista parte da informazioni familiari come passi, riposo e attività. La partecipazione a uno studio resta una scelta separata dall’uso personale dell’app.",
    decisionLabel: "La scelta UX",
    decisionsTitle: "Prima la continuità. Poi l’analisi.",
    decisionsIntro: "Un dato wearable isolato dice poco. Per un ricercatore conta sapere anche quando manca, a chi appartiene e a quale periodo si riferisce.",
    decision1Title: "Stato prima del dettaglio",
    decision1: "La panoramica segnala le sincronizzazioni interrotte prima di chiedere al team di interpretare metriche o report.",
    decision2Title: "Contesto sempre visibile",
    decision2: "Progetto, partecipante e intervallo temporale accompagnano le viste di analisi, così ogni dato mantiene il suo riferimento.",
    decision3Title: "Esplorazione progressiva",
    decision3: "Dalla panoramica si passa alle metriche e poi ai report: la complessità compare quando serve.",
    processLabel: "Dal design al prodotto",
    processTitle: "Disegnato e costruito end-to-end.",
    processIntro: "Ho portato personalmente le due esperienze dal progetto alle applicazioni funzionanti. Ho usato Figma per progettare i flussi e il sistema visivo, Maze per mettere alla prova le scelte, Next.js e Tailwind per il front-end e Supabase per il backend.",
    siteLabel: "Anche il sito",
    siteTitle: "Un prodotto da capire anche prima di usarlo.",
    site: "Ho progettato e sviluppato anche il sito informativo di Whattaflow: spiega il percorso dei dati, presenta le due applicazioni e offre ai team di ricerca un punto di ingresso per richiedere una demo.",
    visitSite: "Visita il sito Whattaflow",
    closing: "Design e codice, nello stesso progetto.",
    back: "Torna ai progetti",
    screenResearcher: "Dashboard della piattaforma Ricercatori di Whattaflow",
    screenParticipant: "Dashboard della piattaforma Partecipanti di Whattaflow",
    screenReport: "Vista dei report della piattaforma Ricercatori",
  },
  en: {
    role: "UI/UX DESIGN · FRONT-END DEVELOPMENT",
    heroLine: "One platform for research with wearable data.",
    heroDescription: "Researchers track syncs in the dashboard; participants see their own data in a personal space.",
    researcherPreview: "Research dashboard",
    participantPreview: "Participant personal space",
    switchLabel: "Choose which experience to show",
    discover: "Explore the project",
    contextLabel: "The context",
    contextTitle: "The data exists. Making it useful is the challenge.",
    context: "Whattaflow connects data collected by wearable devices to the work of research teams. The same platform needs to give researchers control over collection and give people a clear way to view their own data and choose whether to join a study.",
    ownershipLabel: "My role",
    ownership: "I worked across UX, interface design, and development for both applications, as well as the visual identity and the website introducing the platform.",
    twoSides: "Two needs, two perspectives.",
    researchers: "Researchers",
    researchersIntro: "See whether data is coming in, spot interruptions, and prepare analysis.",
    researchersDecision: "The dashboard brings synchronization status and participants needing attention into view. Before reading a chart, the team can see whether the data it will work with is complete.",
    participants: "Participants",
    participantsIntro: "Find their own data in a personal space, without learning the language of research.",
    participantsDecision: "The view starts with familiar information such as steps, rest, and activity. Joining a study remains a separate choice from using the personal app.",
    decisionLabel: "The UX decision",
    decisionsTitle: "Continuity first. Analysis second.",
    decisionsIntro: "An isolated wearable reading says little. Researchers also need to know when data is missing, whose it is, and which period it covers.",
    decision1Title: "Status before detail",
    decision1: "The overview flags interrupted synchronization before asking a team to interpret metrics or reports.",
    decision2Title: "Context stays visible",
    decision2: "Project, participant, and time range accompany analysis views, so every reading keeps its reference.",
    decision3Title: "Progressive exploration",
    decision3: "From overview to metrics to reports: complexity appears when it is needed.",
    processLabel: "From design to product",
    processTitle: "Designed and built end to end.",
    processIntro: "I personally took both experiences from design to working applications. I used Figma to design flows and the visual system, Maze to test design choices, Next.js and Tailwind for the front end, and Supabase for the back end.",
    siteLabel: "The website, too",
    siteTitle: "A product people can understand before using it.",
    site: "I also designed and developed the Whattaflow information site. It explains the data journey, introduces both applications, and gives research teams a way to request a demo.",
    visitSite: "Visit the Whattaflow site",
    closing: "Design and code in one project.",
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
    return () => { document.title = "Andrea Feliziani | Portfolio"; };
  }, []);

  const scrollToContext = () => {
    document.getElementById("wf-context")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  const heroViews = [
    {
      id: "researchers",
      label: c.researchers,
      caption: c.researcherPreview,
      image: `${imageBase}/researchers.jpg`,
      alt: c.screenResearcher,
    },
    {
      id: "participants",
      label: c.participants,
      caption: c.participantPreview,
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
            <motion.div className="wf-wordmark" aria-hidden="true" {...getEntranceProps(reduceMotion, 0.1)}>
              <img className="wf-wordmark-light" src={`${imageBase}/logo-open.svg`} alt="" />
              <img className="wf-wordmark-dark" src={`${imageBase}/logo-open-white.svg`} alt="" />
            </motion.div>
            <motion.h1 id="wf-title" {...getEntranceProps(reduceMotion, 0.22)}>{c.heroLine}</motion.h1>
            <motion.p className="wf-hero-description" {...getEntranceProps(reduceMotion, 0.34)}>{c.heroDescription}</motion.p>
            <motion.button type="button" onClick={scrollToContext} className="wf-hero-action" {...getEntranceProps(reduceMotion, 0.46)}>
              {c.discover}<FaArrowDown aria-hidden="true" />
            </motion.button>
          </div>
          <motion.figure className="wf-hero-preview" {...getEntranceProps(reduceMotion, 0.3)}>
            <figcaption className="wf-hero-preview-heading">
              <span id="wf-active-preview" aria-live="polite" aria-atomic="true">{currentView.caption}</span>
              <div className="wf-hero-switcher" role="group" aria-label={c.switchLabel}>
                {heroViews.map((view, index) => (
                  <button
                    key={view.id}
                    type="button"
                    aria-pressed={index === activeExperience}
                    className={index === activeExperience ? "is-active" : ""}
                    onClick={() => selectExperience(index)}
                  >
                    {view.label}
                    {index === activeExperience && (
                      <motion.span
                        className="wf-hero-switch-indicator"
                        layoutId="wf-hero-switch-indicator"
                        aria-hidden="true"
                        transition={{ duration: reduceMotion ? 0.15 : 0.32, ease: motionEase }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </figcaption>
            <div className="wf-hero-screen" aria-live="polite" aria-atomic="true">
              <AnimatePresence initial={false} mode="wait" custom={slideDirection}>
                <motion.img
                  key={currentView.id}
                  src={currentView.image}
                  alt={currentView.alt}
                  custom={slideDirection}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: slideDirection * 34, scale: 0.985, filter: "blur(7px)" }}
                  animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: slideDirection * -24, scale: 0.99, filter: "blur(4px)" }}
                  transition={{ duration: reduceMotion ? 0.18 : 0.42, ease: motionEase }}
                  fetchPriority={activeExperience === 0 ? "high" : "auto"}
                />
              </AnimatePresence>
            </div>
          </motion.figure>
        </div>
      </section>

      <div className="wf-shell">
        <section id="wf-context" className="wf-intro wf-section" aria-labelledby="wf-context-title">
          <motion.div className="wf-section-marker" {...getRevealProps(0, 0.3)}>{c.contextLabel}</motion.div>
          <motion.div {...getRevealProps(0.1, 0.2)}>
            <h2 id="wf-context-title">{c.contextTitle}</h2>
            <p className="wf-lead">{c.context}</p>
          </motion.div>
          <motion.aside className="wf-role-note" {...getRevealProps(0.2, 0.2)}>
            <span>{c.ownershipLabel}</span>
            <p>{c.ownership}</p>
            <small>{c.role}</small>
          </motion.aside>
        </section>

        <section className="wf-section wf-experiences" aria-labelledby="wf-experiences-title">
          <motion.div className="wf-experiences-heading" {...getRevealProps(0, 0.3)}>
            <div className="wf-section-marker">Whattaflow</div>
            <h2 id="wf-experiences-title">{c.twoSides}</h2>
          </motion.div>
          <div className="wf-experience">
            <motion.div className="wf-experience-copy" {...getRevealProps(0, 0.2)}>
              <h3>{c.researchers}</h3>
              <p className="wf-experience-intro">{c.researchersIntro}</p>
              <p>{c.researchersDecision}</p>
            </motion.div>
            <motion.figure {...getRevealProps(0.12, 0.15)}><img src={`${imageBase}/researchers-mockup.png`} alt={c.screenResearcher} loading="lazy" /><figcaption>{c.researchers} / Whattaflow</figcaption></motion.figure>
          </div>
          <div className="wf-experience wf-experience-reverse">
            <motion.div className="wf-experience-copy" {...getRevealProps(0, 0.2)}>
              <h3>{c.participants}</h3>
              <p className="wf-experience-intro">{c.participantsIntro}</p>
              <p>{c.participantsDecision}</p>
            </motion.div>
            <motion.figure {...getRevealProps(0.12, 0.15)}><img src={`${imageBase}/participants-mockup.png`} alt={c.screenParticipant} loading="lazy" /><figcaption>{c.participants} / Whattaflow</figcaption></motion.figure>
          </div>
        </section>

        <section className="wf-section wf-decisions" aria-labelledby="wf-decisions-title">
          <motion.div className="wf-section-marker" {...getRevealProps(0, 0.3)}>{c.decisionLabel}</motion.div>
          <motion.div className="wf-decisions-heading" {...getRevealProps(0.1, 0.2)}><h2 id="wf-decisions-title">{c.decisionsTitle}</h2><p>{c.decisionsIntro}</p></motion.div>
          <div className="wf-decisions-grid">
            <div className="wf-decisions-list">
              {[[c.decision1Title, c.decision1], [c.decision2Title, c.decision2], [c.decision3Title, c.decision3]].map(([title, description], index) => (
                <motion.div className="wf-decision" key={title} {...getRevealProps(index * 0.08, 0.2)}><h3>{title}</h3><p>{description}</p></motion.div>
              ))}
            </div>
            <motion.figure {...getRevealProps(0.12, 0.15)}><img src={`${imageBase}/report-mockup.png`} alt={c.screenReport} loading="lazy" /><figcaption>{c.researchers} / {c.decisionLabel}</figcaption></motion.figure>
          </div>
        </section>

        <section className="wf-section wf-build" aria-labelledby="wf-build-title">
          <motion.div className="wf-section-marker" {...getRevealProps(0, 0.3)}>{c.processLabel}</motion.div>
          <motion.div className="wf-build-main" {...getRevealProps(0.1, 0.2)}><h2 id="wf-build-title">{c.processTitle}</h2><p>{c.processIntro}</p></motion.div>
          <motion.ul className="wf-tools" aria-label="Tools" {...getRevealProps(0.2, 0.2)}><li>Figma</li><li>Maze</li><li>Next.js</li><li>Tailwind</li><li>Supabase</li></motion.ul>
        </section>

        <section className="wf-section wf-site" aria-labelledby="wf-site-title">
          <motion.div className="wf-section-marker" {...getRevealProps(0, 0.3)}>{c.siteLabel}</motion.div>
          <motion.div {...getRevealProps(0.1, 0.2)}><h2 id="wf-site-title">{c.siteTitle}</h2><p>{c.site}</p></motion.div>
          <motion.a href="https://whattaflowinfo.whattadata.it/" target="_blank" rel="noopener noreferrer" className="wf-site-link" {...getRevealProps(0.2, 0.2)}>{c.visitSite}<FaArrowUpRightFromSquare aria-hidden="true" /><span className="sr-only">{lang === "it" ? "(si apre in una nuova scheda)" : "(opens in a new tab)"}</span></motion.a>
        </section>

        <motion.div className="wf-end" {...getRevealProps(0, 0.2)}><p>{c.closing}</p><Link to="/" state={{ scrollTo: "portfolio" }}>{c.back} ↗</Link></motion.div>
      </div>
    </article>
  );
}
