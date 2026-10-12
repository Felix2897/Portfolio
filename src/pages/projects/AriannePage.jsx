import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowLeft, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import logo from "../../../assets/arianne/logo.svg";
import solution from "../../../assets/arianne/soluction.png";
import home from "../../../assets/arianne/home.png";
import diaries from "../../../assets/arianne/diaries.png";
import diaryForm from "../../../assets/arianne/diaries 2.png";
import questionnaires from "../../../assets/arianne/somministrazioni.png";
import questionnaireForm from "../../../assets/arianne/somministrazioni2.png";
import questionnaireResults from "../../../assets/arianne/somministrazioni3.png";
import chat from "../../../assets/arianne/chatbot.png";
import website from "../../../assets/arianne/website.png";
import "./whattaflow.css";
import "./arianne.css";

const copy = {
  it: {
    title: "Un percorso condiviso.", emphasis: "Due esperienze da progettare.",
    hero: "Arianne collega terapeuti e pazienti. Ho contribuito alla **progettazione UX/UI** e allo **sviluppo frontend**, trasformando flussi clinici articolati in interfacce più chiare.",
    discover: "Scopri il progetto", solutionAlt: "Dashboard Arianne per il terapeuta su desktop e tablet",
    context: "Il progetto", contextTitle: "La continuità del percorso, dentro e fuori la seduta.",
    contextBody: "Appuntamenti, cartella clinica, diari, questionari e comunicazione convivono in Arianne: una piattaforma per la salute mentale con ambienti dedicati a terapeuti e pazienti, utilizzabile online e a supporto degli incontri in presenza.",
    role: "Il mio contributo", roleTitle: "Progettazione UI e frontend.",
    roleBody: "Ho collaborato allo studio UX e alla progettazione delle interfacce in Figma, occupandomi anche dello sviluppo frontend con Next.js e shadcn/ui.",
    roleNote: "Componenti, varianti e token",
    roleNoteBody: "In Figma ho progettato **componenti con varianti** e organizzato **variabili e token**. Avere riferimenti definiti per stili e stati dei componenti ha reso più semplice il passaggio al codice e il riuso nelle diverse schermate.",
    workflows: "Le interfacce del terapeuta.",
    dashboardTitle: "La home del terapeuta.",
    dashboardBody: [
      "La home raccoglie il riepilogo dei pazienti, i **prossimi appuntamenti** e i pazienti recenti. Ho dato più spazio agli eventi e all’elenco delle persone: sono le informazioni da cui il terapeuta può riprendere il lavoro o aprire una seduta.",
      "Ogni appuntamento ha la propria azione di accesso; nell’elenco, tag, ultima visita e stato aiutano a riconoscere il paziente prima di aprire la sua cartella. Il dettaglio clinico resta nelle sezioni dedicate.",
    ],
    dashboardAlt: "Home del terapeuta con riepilogo, prossimi appuntamenti e pazienti recenti", dashboardCaption: "Home del terapeuta",
    diariesTitle: "Diari e compilazione.",
    diariesBody: [
      "Ho tenuto le **azioni di assegnazione e consultazione** accanto a ogni tipologia di diario. Il terapeuta può scegliere lo strumento e ritrovare le compilazioni dalla stessa sezione della cartella del paziente.",
      "Nei form, il controllo segue il tipo di risposta: scelte sì/no, testo e orari hanno esigenze diverse. Le **varianti dei componenti** permettono di gestire queste differenze mantenendo stili e comportamenti coerenti, dalla progettazione in Figma all’implementazione.",
    ],
    diaryScreens: [
      { label: "Tipologie di diario", alt: "Elenco dei diari nella cartella del paziente, con azioni Assegna e Visualizza", caption: "Tipologie di diario" },
      { label: "Compilazione", alt: "Compilazione del diario del sonno con domande, scelta sì o no e campi orario", caption: "Compilazione del diario del sonno" },
    ],
    questionnairesTitle: "Somministrazione e risultati.",
    questionnairesBody: [
      "Ho distinto la scelta del questionario dalla compilazione e dalla consultazione dei risultati. Nel catalogo le azioni sono vicine al nome dello strumento; durante la compilazione, le domande seguono una struttura ripetuta per facilitare l’inserimento delle risposte anche in seduta.",
      "Nel risultato ho affiancato la **scala del punteggio** alle singole risposte. La sintesi permette una prima lettura, mentre il dettaglio consente di tornare alle domande. Nel frontend, il riuso dei controlli evita di trattare ogni questionario come un’interfaccia completamente diversa.",
    ],
    questionnaireScreens: [
      { label: "Assegnazione", alt: "Catalogo dei questionari Arianne con filtri e azioni di assegnazione e nuova somministrazione", caption: "Catalogo dei questionari" },
      { label: "Compilazione", alt: "Questionario GAD-7 con domande e opzioni di risposta disposte in tabella", caption: "Compilazione del GAD-7" },
      { label: "Risultati", alt: "Risultato GAD-7 con punteggio, scala di lettura e dettaglio delle risposte", caption: "Risultati del GAD-7" },
    ],
    chatTitle: "La chat nel pannello laterale.",
    chatBody: ["La conversazione con il paziente si apre accanto alla home. Ho scelto questa disposizione per permettere al terapeuta di leggere e rispondere continuando a vedere appuntamenti e pazienti recenti. Il pannello si può chiudere per tornare alla vista completa."],
    chatAlt: "Dashboard del terapeuta con pannello laterale aperto sulla conversazione con un paziente", chatCaption: "Chat tra terapeuta e paziente",
    build: "Sviluppo frontend", buildTitle: "Next.js e shadcn/ui.",
    buildBody: "Per il frontend ho lavorato con Next.js e shadcn/ui. Ho adattato i componenti alle interfacce progettate in Figma, usando le varianti e i riferimenti definiti nel design per mantenere coerenti form, pulsanti e stati. Questo ha facilitato il **riuso dei componenti** nei diari e nei questionari.",
    stack: [
      ["Figma", "Studio UX, flussi e progettazione UI"],
      ["Next.js", "Sviluppo frontend e struttura delle viste"],
      ["shadcn/ui", "Componenti da adattare ai flussi del prodotto"],
      ["Supabase", "Backend con ambienti di sviluppo e produzione separati"],
      ["GitHub + CI/CD", "Versionamento e pipeline di integrazione e rilascio"],
      ["Coolify", "Hosting e deployment"],
    ],
    releasesTitle: "Sviluppo e produzione separati.",
    releasesBody: "Il progetto usa **due ambienti Supabase**, uno per lo sviluppo e uno per la produzione. Questa separazione permette di lavorare sulle modifiche senza usare l’ambiente operativo come banco di prova. GitHub conserva la storia del codice, la CI/CD accompagna integrazione e rilascio, e Coolify ospita il prodotto.",
    patients: "L’esperienza paziente", patientsTitle: "L’altro lato del percorso conta altrettanto.",
    patientsBody: "Lo spazio del paziente porta il percorso nella quotidianità: attività assegnate, diari, questionari, appuntamenti e comunicazione con il terapeuta. Qui la priorità UX cambia: capire cosa fare e come continuare, con un linguaggio e una gerarchia adatti a chi riceve il supporto.",
    patientsNote: "La parte pazienti è parte integrante del progetto. Le sue schermate non sono ancora disponibili per questo portfolio: le aggiungerò quando sarà possibile mostrarle.",
    siteTitle: "Il progetto continua a evolvere.", siteBody: "Il sito ufficiale raccoglie le informazioni aggiornate su Arianne e sui due ambienti. È il riferimento per approfondire il progetto e le sue funzionalità attuali.",
    siteCta: "Visita il sito di Arianne", siteAlt: "Anteprima del sito informativo Arianne su monitor desktop", siteCaption: "Sito informativo di Arianne",
    back: "Torna ai progetti", screensLabel: "Scegli la schermata da esplorare",
  },
  en: {
    title: "One shared journey.", emphasis: "Two experiences to design.",
    hero: "Arianne connects therapists and patients. I contributed to **UX/UI design** and **front-end development**, turning complex clinical workflows into clearer interfaces.",
    discover: "Explore the project", solutionAlt: "Arianne therapist dashboard on desktop and tablet",
    context: "The project", contextTitle: "Continuity, during and between sessions.",
    contextBody: "Appointments, clinical records, diaries, questionnaires and communication come together in Arianne: a mental health platform with dedicated spaces for therapists and patients, used online and to support in-person sessions.",
    role: "My contribution", roleTitle: "UI design and front-end.",
    roleBody: "I collaborated on UX analysis and interface design in Figma, and also worked on front-end development with Next.js and shadcn/ui.",
    roleNote: "Components, variants and tokens",
    roleNoteBody: "In Figma, I designed **components with variants** and organised **variables and tokens**. Defined references for component styles and states made the transition to code and reuse across screens easier.",
    workflows: "The therapist’s interfaces.",
    dashboardTitle: "The therapist’s home view.",
    dashboardBody: [
      "The home view brings together the patient summary, **upcoming appointments** and recent patients. I gave more space to events and the patient list: these are the details a therapist uses to resume work or join a session.",
      "Each appointment has its own access action; tags, last visit and status help identify a patient before opening their record. Clinical details stay in their dedicated sections.",
    ],
    dashboardAlt: "Therapist home view with summary, upcoming appointments and recent patients", dashboardCaption: "Therapist home view",
    diariesTitle: "Diaries and forms.",
    diariesBody: [
      "I kept **assignment and viewing actions** next to each diary type. Therapists can choose a tool and find completed entries in the same section of the patient record.",
      "Form controls follow the answer type: yes/no choices, text and times have different requirements. **Component variants** handle these differences while keeping styles and behaviour consistent, from Figma design through to implementation.",
    ],
    diaryScreens: [
      { label: "Diary types", alt: "Diary list in a patient record, with Assign and View actions", caption: "Diary types" },
      { label: "Completion", alt: "Sleep diary form with questions, yes/no options and time fields", caption: "Sleep diary form" },
    ],
    questionnairesTitle: "Assessments and results.",
    questionnairesBody: [
      "I separated questionnaire selection from completion and reviewing results. Catalogue actions sit next to the tool’s name; during completion, questions follow a repeated structure to make responses easier to enter, including during a session.",
      "In the results view, I placed the **score scale** alongside individual responses. The summary supports a first reading, while the details let therapists revisit the questions. Reusing front-end controls avoids treating every questionnaire as an entirely different interface.",
    ],
    questionnaireScreens: [
      { label: "Assignment", alt: "Arianne questionnaire catalogue with filters and assignment actions", caption: "Questionnaire catalogue" },
      { label: "Completion", alt: "GAD-7 questionnaire with questions and response options in a table", caption: "GAD-7 questionnaire form" },
      { label: "Results", alt: "GAD-7 results with score, reading scale and individual responses", caption: "GAD-7 results" },
    ],
    chatTitle: "Chat in the side panel.",
    chatBody: ["The patient conversation opens beside the home view. I chose this arrangement so therapists can read and reply while still seeing appointments and recent patients. The panel can be closed to return to the full view."],
    chatAlt: "Therapist dashboard with a side panel showing a conversation with a patient", chatCaption: "Therapist–patient chat",
    build: "Front-end development", buildTitle: "Next.js and shadcn/ui.",
    buildBody: "For the front-end, I worked with Next.js and shadcn/ui. I adapted components to the interfaces designed in Figma, using the variants and design references to keep forms, buttons and states consistent. This made **components easier to reuse** across diaries and questionnaires.",
    stack: [
      ["Figma", "UX analysis, workflows and UI design"],
      ["Next.js", "Front-end development and view structure"],
      ["shadcn/ui", "Components adapted to product workflows"],
      ["Supabase", "Backend with separate development and production environments"],
      ["GitHub + CI/CD", "Version control and integration and release pipelines"],
      ["Coolify", "Hosting and deployment"],
    ],
    releasesTitle: "Separate development and production.",
    releasesBody: "The project uses **two Supabase environments**, one for development and one for production. This separation allows changes to be developed without using the live environment as a testing ground. GitHub keeps the code history, CI/CD supports integration and releases, and Coolify hosts the product.",
    patients: "The patient experience", patientsTitle: "The other side of the journey matters just as much.",
    patientsBody: "The patient space brings the journey into everyday life: assigned activities, diaries, questionnaires, appointments and communication with the therapist. Here, the UX priority shifts to understanding what to do and how to continue, with language and hierarchy suited to the person receiving support.",
    patientsNote: "The patient experience is an integral part of the project. Its screenshots are not yet available for this portfolio; I will add them when they can be shown.",
    siteTitle: "The project keeps evolving.", siteBody: "The official website provides up-to-date information about Arianne and its two spaces. It is the reference for exploring the project and its current features.",
    siteCta: "Visit the Arianne website", siteAlt: "Preview of the Arianne information website on a desktop monitor", siteCaption: "Arianne information website",
    back: "Back to projects", screensLabel: "Choose a screen to explore",
  },
};

function emphasize(text) {
  return text.split(/\*\*(.*?)\*\*/g).map((part, index) =>
    index % 2 ? <strong key={index}>{part}</strong> : part,
  );
}

const motionEase = [0.22, 1, 0.36, 1];

function getRevealProps(reduceMotion, delay = 0) {
  return reduceMotion ? { initial: false } : {
    initial: { opacity: 0, y: 48 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.22, margin: "0px 0px -60px 0px" },
    transition: { duration: 1, delay: 0.12 + Math.min(delay, 0.24), ease: [0.2, 0.65, 0.3, 1] },
  };
}

function ScreenExplorer({ screens, label, reduceMotion, id }) {
  const [selected, setSelected] = useState(0);
  const current = screens[selected];
  return (
    <motion.div className="ar-explorer" {...getRevealProps(reduceMotion, 0.1)}>
      <div className="ar-screen-controls" role="group" aria-label={label}>
        {screens.map((screen, index) => (
          <button key={screen.image} type="button" aria-pressed={selected === index} aria-controls={id} onClick={() => setSelected(index)}>
            {screen.label}
          </button>
        ))}
      </div>
      <figure id={id} className="ar-screen-figure" aria-live="polite" aria-atomic="true">
        <motion.img key={current.image} src={current.image} alt={current.alt} width={current.width} height={current.height} loading="lazy"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.28, ease: motionEase }} />
        <figcaption>{current.caption}</figcaption>
      </figure>
    </motion.div>
  );
}

function FeatureCopy({ title, paragraphs, reduceMotion }) {
  return (
    <div className="wf-experience-copy ar-decision-copy">
      <motion.h3 {...getRevealProps(reduceMotion)}>{title}</motion.h3>
      {paragraphs.map((paragraph, index) => <motion.p key={paragraph} {...getRevealProps(reduceMotion, 0.08 + index * 0.08)}>{emphasize(paragraph)}</motion.p>)}
    </div>
  );
}

export default function AriannePage() {
  const { lang } = useLanguage();
  const c = copy[lang] || copy.en;
  const reduceMotion = useReducedMotion();
  const reveal = (delay = 0) => getRevealProps(reduceMotion, delay);
  const enter = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : delay, ease: motionEase },
  });
  useEffect(() => {
    document.title = "Arianne — Andrea Feliziani";
    return () => { document.title = "Andrea Feliziani | Portfolio"; };
  }, []);
  const diaryScreens = c.diaryScreens.map((screen, i) => ({ ...screen, image: [diaries, diaryForm][i], width: 1095, height: 846 }));
  const questionnaireScreens = c.questionnaireScreens.map((screen, i) => ({ ...screen, image: [questionnaires, questionnaireForm, questionnaireResults][i], width: i === 0 ? 1104 : 1091, height: i === 0 ? 853 : 843 }));
  return (
    <article className="wf-case ar-case">
      <section className="wf-hero ar-hero" aria-labelledby="ar-title">
        <div className="wf-hero-layout">
          <div className="wf-hero-content">
            <motion.img className="ar-logo" src={logo} alt="Arianne" width="862" height="182" {...enter()} />
            <motion.h1 id="ar-title" {...enter(0.1)}><span>{c.title}</span><em>{c.emphasis}</em></motion.h1>
            <motion.p className="wf-hero-description" {...enter(0.2)}>{emphasize(c.hero)}</motion.p>
            <motion.a className="wf-hero-action" href="#ar-context" {...enter(0.3)} onClick={(event) => {
              event.preventDefault();
              document.getElementById("ar-context")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
            }}>{c.discover}<FaArrowDown aria-hidden="true" /></motion.a>
          </div>
          <motion.figure className="ar-hero-image" initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.16, ease: motionEase }}>
            <img src={solution} alt={c.solutionAlt} width="1745" height="944" fetchPriority="high" />
          </motion.figure>
        </div>
      </section>
      <div className="wf-shell">
        <section id="ar-context" className="wf-intro wf-section" aria-labelledby="ar-context-title">
          <motion.div className="wf-section-marker" {...reveal()}>{c.context}</motion.div>
          <div className="wf-project-copy">
            <motion.h2 id="ar-context-title" {...reveal(0.06)}>{c.contextTitle}</motion.h2>
            <motion.p className="wf-lead" {...reveal(0.16)}>{emphasize(c.contextBody)}</motion.p>
          </div>
        </section>
        <section className="wf-section" aria-labelledby="ar-role-title">
          <div className="wf-role-panel">
            <motion.div className="wf-role-intro" {...reveal()}><div className="wf-section-marker">{c.role}</div><h2 id="ar-role-title">{c.roleTitle}</h2></motion.div>
            <motion.div className="wf-role-main" {...reveal(0.1)}><p className="wf-lead">{emphasize(c.roleBody)}</p><div className="ar-role-note"><h3>{c.roleNote}</h3><p>{emphasize(c.roleNoteBody)}</p></div></motion.div>
          </div>
        </section>
        <section className="wf-section ar-workflows" aria-labelledby="ar-workflows-title">
          <motion.h2 id="ar-workflows-title" {...reveal()}>{c.workflows}</motion.h2>
          <div className="wf-experience ar-experience">
            <FeatureCopy title={c.dashboardTitle} paragraphs={c.dashboardBody} reduceMotion={reduceMotion} />
            <motion.figure className="ar-dashboard" {...reveal(0.1)}><img src={home} alt={c.dashboardAlt} width="784" height="681" loading="lazy" /><figcaption>{c.dashboardCaption}</figcaption></motion.figure>
          </div>
          <div className="wf-experience wf-experience-reverse ar-experience">
            <FeatureCopy title={c.diariesTitle} paragraphs={c.diariesBody} reduceMotion={reduceMotion} />
            <ScreenExplorer id="ar-diary-screen" screens={diaryScreens} label={`${c.screensLabel}: ${c.diaryScreens[0].label}`} reduceMotion={reduceMotion} />
          </div>
          <div className="wf-experience ar-experience">
            <FeatureCopy title={c.questionnairesTitle} paragraphs={c.questionnairesBody} reduceMotion={reduceMotion} />
            <ScreenExplorer id="ar-questionnaire-screen" screens={questionnaireScreens} label={`${c.screensLabel}: ${c.questionnaireScreens[0].label}`} reduceMotion={reduceMotion} />
          </div>
          <div className="wf-experience wf-experience-reverse ar-experience">
            <FeatureCopy title={c.chatTitle} paragraphs={c.chatBody} reduceMotion={reduceMotion} />
            <motion.figure className="ar-chat" {...reveal(0.1)}><img src={chat} alt={c.chatAlt} width="1125" height="870" loading="lazy" /><figcaption>{c.chatCaption}</figcaption></motion.figure>
          </div>
        </section>
        <section className="wf-section ar-build" aria-labelledby="ar-build-title">
          <div className="wf-process">
            <motion.div className="wf-section-marker" {...reveal()}>{c.build}</motion.div>
            <motion.div className="wf-process-main" {...reveal(0.06)}><h2 id="ar-build-title">{c.buildTitle}</h2><p>{emphasize(c.buildBody)}</p></motion.div>
            <ul className="wf-process-tools">{c.stack.map(([tool, description], index) => <motion.li key={tool} {...reveal(index * 0.05)}><strong>{tool}</strong><span>{description}</span></motion.li>)}</ul>
          </div>
          <motion.div className="ar-releases" {...reveal()}><h3>{c.releasesTitle}</h3><p>{emphasize(c.releasesBody)}</p></motion.div>
        </section>
        <section className="wf-intro wf-section ar-patients" aria-labelledby="ar-patients-title">
          <motion.div className="wf-section-marker" {...reveal()}>{c.patients}</motion.div>
          <motion.div className="wf-project-copy" {...reveal(0.1)}><h2 id="ar-patients-title">{c.patientsTitle}</h2><p className="wf-lead">{emphasize(c.patientsBody)}</p><p className="ar-patients-note">{c.patientsNote}</p></motion.div>
        </section>
        <section className="wf-section ar-site" aria-labelledby="ar-site-title">
          <motion.div {...reveal()}><h2 id="ar-site-title">{c.siteTitle}</h2><p>{c.siteBody}</p><a className="ar-site-link" href="https://www.arianne.info/" target="_blank" rel="noopener noreferrer">{c.siteCta}<FaArrowUpRightFromSquare aria-hidden="true" /></a></motion.div>
          <motion.figure {...reveal(0.1)}><img src={website} alt={c.siteAlt} width="1125" height="870" loading="lazy" /><figcaption>{c.siteCaption}</figcaption></motion.figure>
        </section>
        <motion.nav className="wf-end" aria-label={c.back} {...reveal()}><Link to="/#portfolio" className="ar-back"><FaArrowLeft aria-hidden="true" />{c.back}</Link><a className="wf-end-site-link" href="https://www.arianne.info/" target="_blank" rel="noopener noreferrer">{c.siteCta}<FaArrowUpRightFromSquare aria-hidden="true" /></a></motion.nav>
      </div>
    </article>
  );
}
