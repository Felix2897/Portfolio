import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowDown, FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import home from "../../../assets/Penguin/home.png";
import agenda from "../../../assets/Penguin/agenda.png";
import exercises from "../../../assets/Penguin/exercise.png";
import diary from "../../../assets/Penguin/diaries.png";
import foodDiary from "../../../assets/Penguin/diaries2.png";
import chat from "../../../assets/Penguin/chatbot.png";
import "./whattaflow.css";
import "./penguin.css";

const copy = {
  it: {
    heroTitle: "Il percorso terapeutico, nella vita di ogni giorno.",
    hero: "Penguin è lo spazio del paziente: appuntamenti, esercizi, diari e comunicazione con il terapeuta, in un’unica app.",
    discover: "Scopri il progetto",
    project: "Il progetto",
    projectTitle: "Dalla seduta alla quotidianità.",
    projectBody: "Tra un incontro e l’altro, il paziente ha attività da svolgere, esperienze da annotare e appuntamenti da ricordare. Penguin riunisce questi momenti in un percorso leggibile, con una home che porta in primo piano la giornata, i compiti assegnati e i diari da compilare.",
    context: "Il contesto / Arianne",
    contextBody: "Penguin è l’ambiente dedicato al paziente nell’ecosistema di Arianne, la piattaforma con cui il terapeuta gestisce il percorso. Agenda, attività e dati raccolti collegano le due esperienze: qui il focus è su come il paziente le usa ogni giorno.",
    role: "Il mio ruolo",
    roleTitle: "Dai flussi UX all’app mobile.",
    roleBody: "Ho seguito la progettazione UX/UI e lo sviluppo front-end con React Native ed Expo, usando NativeWind per gli stili e Supabase per i servizi backend. Ho integrato anche l’AI nel processo di design e sviluppo.",
    goal: "Obiettivo di design",
    goalBody: "Rendere chiaro cosa fare, accompagnare la compilazione e mantenere riconoscibili i diversi momenti del percorso.",
    agendaTitle: "Sapere cosa c’è da fare, oggi.",
    agendaLead: "La giornata come punto di partenza, il calendario per approfondire.",
    agendaBody: "La home raccoglie gli impegni quotidiani; l’agenda sincronizzata con il terapeuta permette di consultarli nel tempo. Appuntamenti e promemoria condividono una struttura leggibile: tipo di attività, orario e stato restano vicini.",
    agendaReason: "Separare la vista del giorno dalla navigazione del calendario aiuta a trovare subito il prossimo impegno, senza perdere la possibilità di pianificare.",
    agendaCaption: "Home e agenda / dalla giornata al calendario",
    diaryTitle: "Compilare per passi.",
    diaryLead: "Trasformare un’esperienza personale in un percorso di compilazione.",
    diaryBody: "Nel diario cognitivo-comportamentale il racconto parte da una situazione concreta; nel diario alimentare le domande mettono in relazione eventi, pensieri ed emozioni. Campi aperti, risposte guidate e indicatore di avanzamento danno una struttura alla compilazione.",
    diaryReason: "La domanda resta al centro della schermata e “Continua” rende evidente il passo successivo. La struttura accompagna il racconto senza chiedere di affrontare tutto in un unico modulo.",
    diaryCaption: "Diari / due contenuti, una logica di compilazione",
    decisionsTitle: "Orientarsi prima di iniziare.",
    decisionsIntro: "Questionari, stati d’animo, psicoeducazione e diari hanno obiettivi diversi. La sezione Esercizi li rende riconoscibili prima di entrare nel singolo percorso.",
    decisions: [
      ["Nomi che spiegano il compito", "Ogni categoria unisce un titolo e una breve descrizione: il paziente può capire cosa troverà prima di aprirla."],
      ["Un contesto sempre riconoscibile", "La navigazione inferiore mantiene accessibili Home, Calendario, Esercizi, Chat e Stato. Nel dettaglio, titolo e controlli di uscita chiariscono dove ci si trova."],
      ["Gerarchia vicina all’azione", "Nei diari, domanda, risposta e passo successivo sono organizzati in sequenza. Nell’agenda, l’orario è vicino all’impegno a cui si riferisce."],
    ],
    supportTitle: "Dal dialogo al diario.",
    supportIntro: "Il chatbot è anche un punto di ingresso alla compilazione: il paziente può iniziare dal dialogo e scegliere come proseguire.",
    chatTitle: "Chat: rendere chiaro con chi si parla.",
    chatBody: "L’intestazione distingue la conversazione con il chatbot. Nel flusso mostrato, il paziente può scegliere se compilare il diario in chat oppure nell’app: due modalità di ingresso allo stesso compito, esplicitate nel punto in cui serve decidere.",
    build: "Dal design al prodotto",
    buildTitle: "La stessa logica, tra interfaccia e dati.",
    buildBody: "React Native ed Expo portano i flussi progettati in Figma nell’app mobile. NativeWind permette di mantenere coerenti gli stili; Supabase supporta i servizi backend. La struttura dei dati segue le attività: leggere gli impegni assegnati, registrare risposte e completamenti, ritrovare il proprio percorso.",
    buildNote: "Il livello dati usa TanStack Query come client per tRPC, mentre la chat è integrata tramite WebView. Questo collega l’esperienza mobile ai servizi condivisi con l’ambiente del terapeuta.",
    tools: "Strumenti e stack",
    stack: [
      ["Figma", "Flussi, interfacce e prototipi"],
      ["React Native + Expo", "Sviluppo dell’app mobile"],
      ["NativeWind", "Stili coerenti tra schermate"],
      ["Supabase", "Servizi backend e dati"],
      ["TanStack Query + tRPC", "Recupero dati dai servizi condivisi"],
      ["WebView", "Integrazione della chat"],
    ],
    codeChoices: [
      ["Componenti coerenti", "Campi, scelte e azioni seguono una grammatica comune, anche quando il contenuto del diario cambia."],
      ["Dati e interfaccia collegati", "Le attività assegnate arrivano dal percorso del terapeuta; risposte e completamenti tornano al backend centralizzato."],
      ["Integrazioni nel flusso", "La chat entra nell’app attraverso una WebView: il punto tecnico di integrazione deve restare coerente con la navigazione del paziente."],
    ],
    ai: "Il mio metodo",
    aiTitle: "L’AI nel processo, dal design al codice.",
    aiBody: "Ho usato l’AI come supporto al lavoro di UX/UI e sviluppo. Il criterio con cui valuto una proposta resta lo stesso: aiuta la persona a capire cosa fare e si integra con la logica dell’app?", 
    aiSteps: [
      ["UX / UI", "Confrontare le proposte con il contesto del paziente, la gerarchia delle informazioni e il passo successivo da rendere chiaro."],
      ["Codice", "Valutare le soluzioni rispetto ai flussi, alla coerenza dei componenti e alle integrazioni dell’app."],
      ["Decisioni", "L’AI supporta il processo; selezione e adattamento delle soluzioni restano parte del mio lavoro."],
    ],
    back: "Torna ai progetti",
    top: "Torna all’inizio",
    altHome: "Home di Penguin con la giornata, i compiti assegnati e i diari da compilare",
    altAgenda: "Agenda di Penguin con calendario, appuntamento e promemoria",
    altExercises: "Sezione Esercizi di Penguin con questionari, stati d’animo, psicoeducazione e diari",
    altDiary: "Diario cognitivo-comportamentale: descrizione della situazione e momento della giornata",
    altFoodDiary: "Diario alimentare: domande su eventi, pensieri ed emozioni",
    altChat: "Chat di Penguin con scelta tra compilare il diario in chat o nell’app",
  },
  en: {
    heroTitle: "A therapeutic journey, woven into everyday life.",
    hero: "Penguin is the patient’s space: appointments, exercises, diaries and communication with their therapist, in one app.",
    discover: "Explore the project",
    project: "The project",
    projectTitle: "From sessions to everyday life.",
    projectBody: "Between sessions, patients have activities to complete, experiences to record and appointments to remember. Penguin brings these moments into a clear journey, with a home screen that prioritises the day’s schedule, assigned tasks and diaries to fill in.",
    context: "The context / Arianne",
    contextBody: "Penguin is the patient environment within Arianne, the platform therapists use to manage the therapeutic journey. The agenda, activities and collected data connect the two experiences; this case study focuses on how patients use them each day.",
    role: "My role",
    roleTitle: "From UX flows to a mobile app.",
    roleBody: "I worked on UX/UI design and front-end development with React Native and Expo, using NativeWind for styling and Supabase for backend services. I also integrated AI into the design and development process.",
    goal: "Design goal",
    goalBody: "Make the next action clear, guide diary completion and keep the different parts of the journey recognisable.",
    agendaTitle: "Know what’s coming up today.",
    agendaLead: "Start with the day, explore further through the calendar.",
    agendaBody: "The home screen gathers daily commitments; the agenda, synchronised with the therapist, lets patients explore them over time. Appointments and reminders share a readable structure: activity type, time and status stay together.",
    agendaReason: "Separating the daily view from calendar navigation helps patients find the next commitment quickly while preserving the ability to plan ahead.",
    agendaCaption: "Home and agenda / from the day to the calendar",
    diaryTitle: "Complete the diary step by step.",
    diaryLead: "Turn a personal experience into a guided diary flow.",
    diaryBody: "The cognitive behavioural diary starts with a specific situation; the food diary connects events, thoughts and emotions. Open fields, guided choices and a progress indicator give the process a clear structure.",
    diaryReason: "The question stays at the centre of the screen and “Continue” makes the next step clear. This structure guides the account without asking patients to face a whole form at once.",
    diaryCaption: "Diaries / different content, a shared interaction pattern",
    decisionsTitle: "Find your bearings before starting.",
    decisionsIntro: "Questionnaires, moods, psychoeducation and diaries serve different purposes. The Exercises section makes each one recognisable before entering its individual flow.",
    decisions: [
      ["Labels that explain the task", "Each category pairs a title with a short description, helping patients understand what they will find before opening it."],
      ["A recognisable context", "Bottom navigation keeps Home, Calendar, Exercises, Chat and Status accessible. Within a flow, the title and exit controls establish where the patient is."],
      ["Information close to the action", "Diaries arrange the question, answer and next step in sequence. The agenda places each time next to the commitment it describes."],
    ],
    supportTitle: "From conversation to diary.",
    supportIntro: "The chatbot is also an entry point into diary completion: patients can start with a conversation and choose how to continue.",
    chatTitle: "Chat: make the conversation partner clear.",
    chatBody: "The header identifies the conversation with the chatbot. In the flow shown, patients can choose to complete a diary in chat or in the app: two ways into the same task, explained where the decision happens.",
    build: "From design to product",
    buildTitle: "One logic across interfaces and data.",
    buildBody: "React Native and Expo bring the flows designed in Figma into the mobile app. NativeWind keeps styling consistent; Supabase supports backend services. The data structure follows the activities: reading assigned commitments, recording responses and completions, and returning to the personal journey.",
    buildNote: "The data layer uses TanStack Query as a client for tRPC, while chat is integrated through a WebView. This connects the mobile experience to services shared with the therapist’s environment.",
    tools: "Tools and stack",
    stack: [
      ["Figma", "Flows, interfaces and prototypes"],
      ["React Native + Expo", "Mobile app development"],
      ["NativeWind", "Consistent styling across screens"],
      ["Supabase", "Backend services and data"],
      ["TanStack Query + tRPC", "Fetching data from shared services"],
      ["WebView", "Chat integration"],
    ],
    codeChoices: [
      ["Consistent components", "Fields, choices and actions follow a shared grammar even when diary content changes."],
      ["Connected data and interface", "Assigned activities come from the therapist’s journey; responses and completions return to the central backend."],
      ["Integrations within the flow", "Chat enters the app through a WebView: this technical integration needs to stay coherent with patient navigation."],
    ],
    ai: "My method",
    aiTitle: "AI in the process, from design to code.",
    aiBody: "I used AI to support UX/UI and development work. My criterion for evaluating a proposal stays the same: does it help the person understand what to do, and does it fit the app’s logic?",
    aiSteps: [
      ["UX / UI", "Compare proposals against the patient’s context, information hierarchy and the next step that needs to be clear."],
      ["Code", "Evaluate solutions against the flows, component consistency and app integrations."],
      ["Decisions", "AI supports the process; selecting and adapting solutions remains part of my work."],
    ],
    back: "Back to projects",
    top: "Back to the beginning",
    altHome: "Penguin home screen with the daily schedule, assigned tasks and diaries to complete",
    altAgenda: "Penguin agenda with calendar, appointment and reminder",
    altExercises: "Penguin Exercises section with questionnaires, moods, psychoeducation and diaries",
    altDiary: "Cognitive behavioural diary: describing a situation and selecting the time of day",
    altFoodDiary: "Food diary: questions about events, thoughts and emotions",
    altChat: "Penguin chat offering diary completion in chat or in the app",
  },
};

function Phone({ src, alt, width = 902, height = 1820, ...props }) {
  return <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" {...props} />;
}

export default function PenguinPage() {
  const { lang } = useLanguage();
  const c = copy[lang] || copy.en;
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];
  const reveal = (delay = 0) => reduceMotion ? { initial: false } : {
    initial: { opacity: 0, y: 48 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.22, margin: "0px 0px -60px 0px" },
    transition: { duration: 1, delay: 0.12 + Math.min(delay, 0.24), ease: [0.2, 0.65, 0.3, 1] },
  };
  const enter = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : delay, ease },
  });
  const heroPhones = [
    { src: agenda, width: 902, height: 1820, alt: c.altAgenda, delay: 0.3 },
    { src: home, width: 2001, height: 4036, alt: c.altHome, delay: 0.18, main: true },
    { src: diary, width: 2190, height: 4422, alt: c.altDiary, delay: 0.42 },
  ];

  useEffect(() => {
    document.title = "Penguin — Andrea Feliziani";
    return () => { document.title = "Andrea Feliziani | Portfolio"; };
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    section?.focus({ preventScroll: true });
  };

  return (
    <article className="wf-case pg-case">
      <section id="pg-hero" className="wf-hero pg-hero" aria-labelledby="pg-title" tabIndex={-1}>
        <div className="wf-hero-layout">
          <div className="wf-hero-content">
            <motion.p className="pg-name" {...enter()}>Penguin</motion.p>
            <motion.h1 id="pg-title" {...enter(0.08)}>{c.heroTitle}</motion.h1>
            <motion.p className="wf-hero-description" {...enter(0.16)}>{c.hero}</motion.p>
            <motion.button className="wf-hero-action" type="button" onClick={() => scrollTo("pg-context")} {...enter(0.24)}>
              {c.discover}<FaArrowDown aria-hidden="true" />
            </motion.button>
          </div>
          <div className="pg-hero-phones">
            {heroPhones.map((phone) => (
              <motion.img key={phone.src} src={phone.src} alt={phone.alt} width={phone.width} height={phone.height}
                className={phone.main ? "pg-hero-home" : "pg-hero-secondary"}
                fetchPriority={phone.main ? "high" : "auto"} decoding="async"
                initial={reduceMotion ? false : { opacity: 0, y: phone.main ? 54 : 36, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : phone.delay, ease }} />
            ))}
          </div>
        </div>
      </section>

      <div className="wf-shell">
        <section id="pg-context" className="wf-intro wf-section" aria-labelledby="pg-context-title" tabIndex={-1}>
          <motion.div className="wf-section-marker" {...reveal()}>{c.project}</motion.div>
          <div className="wf-project-copy">
            <motion.h2 id="pg-context-title" {...reveal(0.06)}>{c.projectTitle}</motion.h2>
            <motion.p className="wf-lead" {...reveal(0.16)}>{c.projectBody}</motion.p>
            <motion.aside className="pg-context-note" {...reveal(0.24)}><h3>{c.context}</h3><p>{c.contextBody}</p></motion.aside>
          </div>
        </section>

        <section className="wf-role-section wf-section" aria-labelledby="pg-role-title">
          <div className="wf-role-panel">
            <motion.div className="wf-role-intro" {...reveal()}><div className="wf-section-marker">{c.role}</div><h2 id="pg-role-title">{c.roleTitle}</h2></motion.div>
            <motion.div className="wf-role-main" {...reveal(0.1)}><p className="wf-lead">{c.roleBody}</p><div className="pg-context-note"><h3>{c.goal}</h3><p>{c.goalBody}</p></div></motion.div>
          </div>
        </section>

        <section className="wf-section pg-journeys" aria-label={lang === "it" ? "Agenda e diari" : "Agenda and diaries"}>
          <div className="wf-experience pg-experience">
            <div className="wf-experience-copy"><motion.h3 {...reveal()}>{c.agendaTitle}</motion.h3><motion.p className="wf-experience-intro" {...reveal(0.08)}>{c.agendaLead}</motion.p><motion.p {...reveal(0.16)}>{c.agendaBody}</motion.p><motion.div className="pg-reason" {...reveal(0.24)}><p>{c.agendaReason}</p></motion.div></div>
            <motion.figure {...reveal(0.1)}><div className="pg-day-pair"><Phone src={home} alt={c.altHome} width={2001} height={4036} /><Phone src={agenda} alt={c.altAgenda} /></div><figcaption>{c.agendaCaption}</figcaption></motion.figure>
          </div>
          <div className="wf-experience wf-experience-reverse pg-experience pg-diary-experience">
            <div className="wf-experience-copy"><motion.h3 {...reveal()}>{c.diaryTitle}</motion.h3><motion.p className="wf-experience-intro" {...reveal(0.08)}>{c.diaryLead}</motion.p><motion.p {...reveal(0.16)}>{c.diaryBody}</motion.p><motion.div className="pg-reason" {...reveal(0.24)}><p>{c.diaryReason}</p></motion.div></div>
            <motion.figure {...reveal(0.1)}><div className="pg-diary-pair"><Phone src={diary} alt={c.altDiary} width={2190} height={4422} /><Phone src={foodDiary} alt={c.altFoodDiary} width={2192} height={4422} /></div><figcaption>{c.diaryCaption}</figcaption></motion.figure>
          </div>
        </section>

        <section className="wf-section wf-decisions" aria-labelledby="pg-decisions-title">
          <motion.div className="wf-section-marker" {...reveal()}>UX / UI</motion.div>
          <motion.div className="wf-decisions-heading" {...reveal(0.06)}><h2 id="pg-decisions-title">{c.decisionsTitle}</h2><p>{c.decisionsIntro}</p></motion.div>
          <div className="wf-decisions-grid">
            <div className="wf-decisions-list">{c.decisions.map(([title, body], index) => <motion.div className="wf-decision" key={title} {...reveal(index * 0.06)}><h3>{title}</h3><p>{body}</p></motion.div>)}</div>
            <motion.figure className="pg-phone-figure" {...reveal(0.1)}><Phone src={exercises} alt={c.altExercises} width={2192} height={4422} /></motion.figure>
          </div>
        </section>

        <section className="wf-section pg-support" aria-labelledby="pg-support-title">
          <div className="wf-experience pg-chat-experience">
            <div className="wf-experience-copy">
              <motion.h2 id="pg-support-title" {...reveal()}>{c.supportTitle}</motion.h2>
              <motion.p className="wf-experience-intro" {...reveal(0.08)}>{c.supportIntro}</motion.p>
              <motion.h3 className="pg-chat-subtitle" {...reveal(0.16)}>{c.chatTitle}</motion.h3>
              <motion.p {...reveal(0.24)}>{c.chatBody}</motion.p>
            </div>
            <motion.figure className="pg-phone-figure" {...reveal(0.1)}><Phone src={chat} alt={c.altChat} /></motion.figure>
          </div>
        </section>

        <section className="wf-section wf-process" aria-labelledby="pg-process-title">
          <motion.div className="wf-section-marker" {...reveal()}>{c.build}</motion.div>
          <motion.div className="wf-process-main" {...reveal(0.06)}><h2 id="pg-process-title">{c.buildTitle}</h2><p>{c.buildBody}</p><p>{c.buildNote}</p></motion.div>
          <ul className="wf-process-tools" aria-label={c.tools}>{c.stack.map(([tool, purpose], index) => <motion.li key={tool} {...reveal(index * 0.05)}><strong>{tool}</strong><span>{purpose}</span></motion.li>)}</ul>
          <div className="pg-code-choices">{c.codeChoices.map(([title, body], index) => <motion.div className="wf-decision" key={title} {...reveal(index * 0.06)}><h3>{title}</h3><p>{body}</p></motion.div>)}</div>
        </section>

        <section className="wf-section wf-ai" aria-labelledby="pg-ai-title">
          <motion.div className="wf-section-marker" {...reveal()}>{c.ai}</motion.div>
          <motion.div className="wf-ai-heading" {...reveal(0.06)}><h2 id="pg-ai-title">{c.aiTitle}</h2><p>{c.aiBody}</p></motion.div>
          <ul className="wf-ai-steps">{c.aiSteps.map(([title, body], index) => <motion.li className="wf-ai-step" key={title} {...reveal(index * 0.06)}><span>{title}</span><p>{body}</p></motion.li>)}</ul>
        </section>

        <nav className="wf-end" aria-label={lang === "it" ? "Navigazione del progetto" : "Project navigation"}>
          <Link className="pg-back" to="/" state={{ scrollTo: "portfolio" }}><FaArrowLeft aria-hidden="true" />{c.back}</Link>
          <button type="button" className="wf-hero-action" onClick={() => scrollTo("pg-hero")}>{c.top}<FaArrowDown className="pg-up" aria-hidden="true" /></button>
        </nav>
      </div>
    </article>
  );
}
