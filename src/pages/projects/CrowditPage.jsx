import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowDown, FaArrowLeft, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
const hero = "/assets/crowdit/hero.png";
const preferences = "/assets/crowdit/preferences.png";
const navigation = "/assets/crowdit/navigation.png";
const login = "/assets/crowdit/login.png";
const gamification = "/assets/crowdit/gamification.png";
import "./whattaflow.css";
import "./crowdit.css";

const copy = {
  it: {
    title: "L’applicazione che accompagna le persone durante l’evento.",
    hero: "Ho progettato i **flussi e l’interfaccia** e **sviluppato l’applicazione mobile** di CrowdIT: percorsi, luoghi da scoprire e attività da rendere comprensibili prima, durante e dopo un evento.",
    discover: "Esplora il progetto",
    contextTitle: "Un sistema complesso, una scelta alla volta.",
    context: "CrowdIT nasce per supportare la **gestione delle folle** durante eventi di grande affluenza. Per chi partecipa, questa complessità si traduce in domande concrete: come arrivo, dove posso andare e cosa posso fare dopo l’evento? Ho organizzato l’esperienza dell’app attorno a queste esigenze.",
    roleLabel: "Il mio ruolo",
    twinLabel: "Il digital twin nel progetto",
    loginAlt: "Schermata di accesso a CrowdIT su smartphone",
    roleTitle: "Il mio contributo: i flussi, l’interfaccia e il codice dell’app.",
    role: "Ho progettato in **Figma** i flussi e la UI e sviluppato l’applicazione con **React Native ed Expo**. Il focus del mio lavoro è rendere leggibili le informazioni e collegarle alle azioni che una persona può compiere dal telefono.",
    twin: "Il digital twin fa parte del sistema CrowdIT e fornisce il contesto di simulazione e monitoraggio dei flussi. La sua progettazione e il suo sviluppo sono stati seguiti da altri membri del team.",
    journeyTitle: "Un’esperienza che cambia insieme all’evento.",
    phases: [
      ["Prima dell’evento", "Il progetto prevede suggerimenti di percorso in base alla posizione e all’orario di arrivo. La sfida per l’app è presentare **alternative comprensibili** nel momento della pianificazione."],
      ["Durante l’evento", "Il collegamento con il sistema di monitoraggio è pensato per segnalare criticità e proporre alternative. Nell’interfaccia, l’indicazione deve aiutare a capire **quale azione intraprendere**."],
      ["Dopo l’evento", "Le attività di gamification sono pensate per incoraggiare un **deflusso distribuito**. Il gioco diventa un modo per continuare a esplorare la città dopo l’evento."],
    ],
    sections: [
      { title: "Preferenze e vicinanza danno un ordine alla scoperta.", lead: "La home collega gli **interessi personali** a ciò che si trova intorno all’utente.", body: "Ho distinto le proposte basate sulle preferenze dai luoghi nelle vicinanze e dalle destinazioni da esplorare. **Questa gerarchia** offre un punto di partenza senza chiedere di cercare subito sulla mappa.", reason: "Le fotografie aiutano a riconoscere le destinazioni; categorie e titoli permettono di scorrere le proposte. **La navigazione inferiore** mantiene accessibili mappa, attività e punti mentre si passa dalla scoperta all’azione.", alt: "Home delle attività CrowdIT con tour personalizzato, mappa dei luoghi vicini e destinazioni", caption: "Scoperta / preferenze e contesto locale" },
      { title: "Confrontare i percorsi senza perdere la mappa.", lead: "Tempi, mezzi e punti compaiono nello stesso spazio di confronto.", body: "Ho affiancato alla mappa un pannello con partenza, destinazione e **alternative di spostamento**. I percorsi suggeriti mostrano le combinazioni dei mezzi e i tempi, così la scelta non dipende soltanto da una linea tracciata sulla mappa.", reason: "Il pannello mantiene il contesto geografico durante la ricerca. La stessa struttura visiva **rende confrontabili le opzioni**; i punti esplicitano l’incentivo associato alle diverse modalità di spostamento.", alt: "Schermate CrowdIT per cercare una destinazione e confrontare percorsi, mezzi, tempi e punti", caption: "Navigazione / alternative leggibili nello stesso contesto" },
      { title: "La gamification deve spiegare come partecipare.", lead: "Walking Bingo trasforma l’esplorazione in **missioni fotografiche**.", body: "Ho separato gli oggetti da fotografare dalle regole e dagli esempi. Nella schermata principale si vedono le missioni, il numero di fotografie caricate e l’azione per aggiungere una foto; le istruzioni dettagliate restano raggiungibili quando servono.", reason: "**Il progresso visibile** aiuta a capire cosa manca. **Un’azione principale riconoscibile** mantiene il flusso concentrato sul prossimo passo, mentre regole ed esempi chiariscono cosa inviare e come viene verificato.", alt: "Walking Bingo in CrowdIT: elenco delle missioni fotografiche, avanzamento e schermata con regole ed esempio", caption: "Partecipazione / missioni, istruzioni e progresso" },
    ],
    buildTitle: "Le scelte tecniche al servizio dei flussi.",
    build: "Ho scelto **uno stack comune per iOS e Android** per mantenere coerente l’esperienza tra le piattaforme. Il lavoro in **Figma** definisce i flussi; gli strumenti di sviluppo permettono di tradurli in schermate, mappe e interazioni native.",
    tools: "Strumenti e scelte tecniche",
    stack: [
      ["Figma", "Progettazione di tutti i flussi e delle interfacce prima della loro implementazione."],
      ["React Native", "Un’unica base di codice per iOS e Android, con componenti e interazioni native."],
      ["Expo", "Un workflow di sviluppo semplificato e accesso a geolocalizzazione, notifiche e fotocamera."],
      ["NativeWind", "Stili con sintassi Tailwind per mantenere consistenti le schermate e velocizzare l’implementazione."],
      ["React Native Maps", "Mappe native su entrambe le piattaforme, con punti di interesse e interazioni geografiche."],
    ],
    moreTitle: "Approfondimenti su CrowdIT",
    websiteDetail: "Il contesto e gli obiettivi del progetto.",
    newsDetail: "Articoli e comunicati per seguire il progetto.",
    website: "Maggiori informazioni", news: "Leggi le notizie", back: "Torna al portfolio",
    heroAlt: "CrowdIT su due smartphone: schermata di apertura e home con mappa e suggerimenti a Napoli",
  },
  en: {
    title: "An application that guides people through an event.",
    hero: "I designed the **flows and interface** and **developed the CrowdIT mobile application**: making routes, places to discover and activities understandable before, during and after an event.",
    discover: "Explore the project",
    contextTitle: "A complex system, one decision at a time.",
    context: "CrowdIT aims to support **crowd management** at large events. For participants, this complexity becomes concrete questions: how do I get there, where can I go and what can I do afterwards? I organised the app experience around these needs.",
    roleLabel: "My role",
    twinLabel: "The digital twin in the project",
    loginAlt: "CrowdIT sign-in screen on a smartphone",
    roleTitle: "My contribution: the app’s flows, interface and code.",
    role: "I designed the flows and UI in **Figma** and developed the application with **React Native and Expo**. My focus is making information readable and connecting it to actions people can take on their phones.",
    twin: "The digital twin is part of the CrowdIT system and provides the simulation and crowd monitoring context. Its design and development were handled by other team members.",
    journeyTitle: "An experience that changes with the event.",
    phases: [
      ["Before the event", "The project proposes routes based on location and arrival time. The app’s challenge is to present **understandable alternatives** when people plan their journey."],
      ["During the event", "The connection to the monitoring system is intended to flag critical situations and propose alternatives. The interface needs to help people understand **which action to take**."],
      ["After the event", "Gamification activities aim to encourage a **distributed departure**. The game provides a reason to keep exploring the city after the event."],
    ],
    sections: [
      { title: "Preferences and proximity give discovery a structure.", lead: "The home screen connects **personal interests** to nearby places.", body: "I separated preference-based suggestions from nearby places and destinations to explore. **This hierarchy** offers a starting point without requiring an immediate map search.", reason: "Photography helps people recognise destinations; categories and titles make suggestions scannable. **Bottom navigation** keeps the map, activities and points within reach as people move from discovery to action.", alt: "CrowdIT activities home with a personalised tour, nearby places map and destinations", caption: "Discovery / preferences and local context" },
      { title: "Compare routes while keeping the map in view.", lead: "Travel time, transport modes and points share one comparison space.", body: "I paired the map with a panel showing the starting point, destination and **travel alternatives**. Suggested routes show transport combinations and times, so the decision relies on more than a line drawn on the map.", reason: "The panel keeps the geographic context visible during search. A consistent visual structure **makes options comparable**; points explain the incentive associated with each travel mode.", alt: "CrowdIT screens for searching destinations and comparing routes, transport, travel time and points", caption: "Navigation / readable alternatives in context" },
      { title: "Gamification needs to explain how to participate.", lead: "Walking Bingo turns exploration into **photography missions**.", body: "I separated the objects to photograph from **the rules and examples**. The main screen shows missions, the number of uploaded photos and the action to add one; detailed instructions remain available when needed.", reason: "**Visible progress** helps people understand what is left. **A recognisable primary action** keeps the flow focused on the next step, while rules and examples explain what to submit and how it is checked.", alt: "CrowdIT Walking Bingo: photography missions, progress and an instruction screen with rules and an example", caption: "Participation / missions, instructions and progress" },
    ],
    buildTitle: "Technical choices that support the flows.",
    build: "I chose **a shared stack for iOS and Android** to keep the experience consistent across platforms. **Figma** defines the flows; the development tools translate them into screens, maps and native interactions.",
    tools: "Tools and technical choices",
    stack: [
      ["Figma", "Designing all flows and interfaces before implementation."],
      ["React Native", "A shared codebase for iOS and Android, with native components and interactions."],
      ["Expo", "A simpler development workflow and access to location, notifications and the camera."],
      ["NativeWind", "Tailwind syntax for consistent screen styling and faster implementation."],
      ["React Native Maps", "Native maps on both platforms, with points of interest and geographic interactions."],
    ],
    moreTitle: "Explore the CrowdIT project",
    websiteDetail: "The project’s context and objectives.",
    newsDetail: "Articles and announcements about the project.",
    website: "More information", news: "Read the news", back: "Back to the portfolio",
    heroAlt: "CrowdIT on two phones: launch screen and home with a map and suggestions in Naples",
  },
};
const emphasize = (text) => text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
  part.startsWith("**") ? <strong className="ci-inline-emphasis" key={index}>{part.slice(2, -2)}</strong> : part
);

const images = [preferences, navigation, gamification];
// News URL supplied by the user; project information uses the ATON research page.
const resources = {
  website: "https://www.atonit.eu/progetti-di-ricerca/",
  news: "https://crowd-it.azurewebsites.net/news/",
};

export default function CrowditPage() {
  const { lang } = useLanguage();
  const c = copy[lang] || copy.en;
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    document.title = "CrowdIT — Andrea Feliziani";
    return () => { document.title = "Andrea Feliziani | Portfolio"; };
  }, []);
  const reveal = (delay = 0) => reduceMotion ? { initial: false } : {
    initial: { opacity: 0, y: 48 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.22, margin: "0px 0px -60px 0px" },
    transition: { duration: 1, delay: 0.12 + Math.min(delay, 0.24), ease: [0.2, 0.65, 0.3, 1] },
  };
  const enter = reduceMotion ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } };
  return (
    <article className="wf-case ci-case">
      <section className="ci-hero wf-shell" aria-labelledby="ci-title">
        <motion.div className="ci-hero-copy" {...enter}>
          <h1 id="ci-title">{c.title}</h1>
          <p>{emphasize(c.hero)}</p>
          <button type="button" className="wf-hero-action" onClick={() => { const section = document.getElementById("ci-context"); section?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }); section?.focus({ preventScroll: true }); }}>{c.discover}<FaArrowDown aria-hidden="true" /></button>
        </motion.div>
        <motion.figure {...enter}><img src={hero} alt={c.heroAlt} fetchPriority="high" width="5878" height="3394" /></motion.figure>
      </section>
      <div className="wf-shell">
        <section id="ci-context" tabIndex={-1} className="wf-section ci-context" aria-labelledby="ci-context-title">
          <motion.h2 id="ci-context-title" {...reveal()}>{c.contextTitle}</motion.h2><motion.p className="ci-lead" {...reveal(0.16)}>{emphasize(c.context)}</motion.p>
        </section>
        <section className="wf-role-section wf-section" aria-labelledby="ci-role-title">
          <div className="wf-role-panel">
            <motion.div className="wf-role-intro" {...reveal()}>
              <div className="wf-section-marker">{c.roleLabel}</div>
              <h2 id="ci-role-title">{c.roleTitle}</h2>
            </motion.div>
            <motion.div className="wf-role-main" {...reveal(0.1)}>
              <p className="wf-lead">{emphasize(c.role)}</p>
              <div className="wf-accessibility-note"><span>{c.twinLabel}</span><p>{c.twin}</p></div>
            </motion.div>
          </div>
        </section>
        <section className="wf-section ci-journey" aria-labelledby="ci-journey-title">
          <motion.h2 id="ci-journey-title" {...reveal()}>{c.journeyTitle}</motion.h2>
          <ol>{c.phases.map(([title, body], index) => <motion.li key={title} {...reveal(index * 0.08)}><h3>{title}</h3><p>{emphasize(body)}</p></motion.li>)}</ol>
        </section>
        <div className="ci-experiences">
          {c.sections.map((section, index) => (
            <section className={`wf-section ci-experience${index === 0 ? " ci-experience-reverse ci-preferences" : ""}`} aria-labelledby={`ci-experience-${index}`} key={section.title}>
              <div><motion.h2 id={`ci-experience-${index}`} {...reveal()}>{section.title}</motion.h2><motion.p className="ci-lead" {...reveal(0.08)}>{emphasize(section.lead)}</motion.p><motion.p {...reveal(0.16)}>{emphasize(section.body)}</motion.p><motion.p className="ci-reason" {...reveal(0.24)}>{emphasize(section.reason)}</motion.p></div>
              <motion.figure {...reveal(0.1)}><img src={images[index]} alt={section.alt} loading="lazy" width={[3677,2939,2907][index]} height={[3884,3910,3850][index]} /><figcaption>{section.caption}</figcaption></motion.figure>
            </section>
          ))}
        </div>
        <section className="wf-section ci-build" aria-labelledby="ci-build-title">
          <div><motion.h2 id="ci-build-title" {...reveal()}>{c.buildTitle}</motion.h2><motion.p {...reveal(0.16)}>{emphasize(c.build)}</motion.p></div>
          <dl aria-label={c.tools}>{c.stack.map(([tool, reason], index) => <motion.div key={tool} {...reveal(index * 0.05)}><dt>{tool}</dt><dd>{emphasize(reason)}</dd></motion.div>)}</dl>
        </section>
        <section className="wf-section ci-more" aria-labelledby="ci-more-title">
          <motion.figure {...reveal(0.1)}><img src={login} alt={c.loginAlt} loading="lazy" width="5164" height="2091" /></motion.figure>
          <div>
            <motion.h2 id="ci-more-title" {...reveal()}>{c.moreTitle}</motion.h2>
            <motion.div className="ci-links" {...reveal(0.2)}>{Object.entries(resources).map(([key, url]) => <a className="ci-resource-link" key={key} href={url} target="_blank" rel="noopener noreferrer"><span><strong>{c[key]}</strong><span>{c[`${key}Detail`]}</span></span><FaArrowUpRightFromSquare aria-hidden="true" /></a>)}</motion.div>
          </div>
        </section>
        <nav className="wf-end" aria-label={c.back}><Link to="/" state={{ scrollTo: "portfolio" }}><FaArrowLeft aria-hidden="true" /> {c.back}</Link></nav>
      </div>
    </article>
  );
}
