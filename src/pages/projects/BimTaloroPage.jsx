import { useEffect } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import uxImage from "../../../assets/BimTaloro/ux.png";
import "./whattaflow.css";
import "./bimtaloro.css";

const copy = {
  it: {
    title: "Un territorio da esplorare. Una comunità da vivere.",
    hero: "BIM Taloro Outdoor riunisce borghi, esperienze e notizie dell’entroterra sardo in un’unica app per iOS e Android.",
    discover: "Scopri il progetto",
    heroDownload: "Scarica l’app",
    project: "Il progetto",
    projectTitle: "Dal lago ai borghi, tutto in un solo percorso.",
    projectBody: "Tra la Barbagia e il Gennargentu, tredici comunità custodiscono luoghi, tradizioni e attività spesso raccontati in fonti separate. L’app raccoglie queste informazioni e le rende facili da esplorare, aggiungendo uno spazio dove le persone possono condividere il territorio che vivono.",
    projectHighlight: "tredici comunità",
    collaboration: "Progetto realizzato in collaborazione con",
    role: "Il mio ruolo",
    roleTitle: "Dalla ricerca all’app mobile.",
    roleBody: "Ho progettato l’UX/UI in Figma, verificato i percorsi con Maze e sviluppato l’app con React Native ed Expo. Le scelte di interfaccia tengono insieme la scoperta dei luoghi, le informazioni pratiche e la partecipazione della comunità.",
    roleHighlight: "sviluppato",
    roleNoteLabel: "Obiettivo di design",
    roleNote: "Accompagnare chi visita dall’ispirazione alla pianificazione, lasciando spazio anche alle voci di chi conosce il territorio.",
    experiences: "Due percorsi per vivere il territorio.",
    exploreTitle: "Esplorare borghi ed esperienze",
    exploreLead: "Una home pensata per incuriosire, poi aiutare a scegliere.",
    exploreBody: "Le fotografie aprono il racconto delle tredici comunità. Ricerca e filtri aiutano a trovare borghi e attività; nelle schede di dettaglio, mappe, durata, prezzo e contatti portano dall’interesse all’organizzazione concreta del viaggio.",
    communityTitle: "Condividere la comunità",
    communityLead: "Il territorio continua a raccontarsi attraverso le persone.",
    communityBody: "Il feed raccoglie foto e momenti geolocalizzati. La distinzione tra post della comunità e post personali rende chiaro dove leggere e dove ritrovare i propri contributi.",
    communityHighlight: "post della comunità e post personali",
    decisions: "Scelte UX che riducono la distanza tra curiosità e azione.",
    decisionIntro: "Ho organizzato contenuti diversi intorno alle domande più immediate di chi apre l’app: dove andare, cosa fare e cosa sta succedendo.",
    decisionItems: [
      ["Scoprire senza perdersi", "Le card dei borghi invitano a esplorare visivamente; la ricerca e i filtri offrono una strada diretta a chi sa già cosa cerca."],
      ["Decidere con i dettagli giusti", "Nelle esperienze, informazioni come durata, prezzo e contatto sono vicine all’azione, senza costringere a cercarle in un testo lungo."],
      ["Restare aggiornati", "Le notizie del Consorzio hanno una sezione dedicata e una lettura pulita, distinta dai contenuti pubblicati dalla comunità."],
    ],
    build: "Dal design al prodotto",
    buildTitle: "Un’interfaccia mobile, un sistema coerente.",
    buildBody: "I prototipi in Figma e i test in Maze hanno guidato le scelte dei flussi. Ho sviluppato l’app per iOS e Android con React Native ed Expo. NativeWind mantiene coerenti gli stili tra schermate; Supabase gestisce dati, autenticazione e contenuti condivisi.",
    buildHighlight: "React Native ed Expo",
    aiLabel: "AI nel processo",
    aiTitle: "Un supporto per contenuti, interfacce e codice.",
    aiIntro: "Ho usato l’AI per esplorare modi diversi di organizzare i contenuti, definire parole e stati dell’interfaccia e valutare soluzioni di codice. Le proposte sono diventate una base di confronto: ho selezionato e adattato al progetto ciò che aiutava a rendere l’app più chiara e semplice da usare.",
    aiHighlight: "soluzioni di codice",
    aiSteps: [
      ["Struttura editoriale", "Ho confrontato possibili raggruppamenti di borghi, esperienze e notizie per rendere la scoperta del territorio più immediata."],
      ["Parole nell’interfaccia", "L’ho usata per esplorare alternative di microcopy per ricerca, filtri e azioni, mantenendo un tono chiaro e vicino al contesto locale."],
      ["Esplorare il codice", "Ho chiesto all’AI proposte per organizzare i componenti e gestire gli stati dell’interfaccia, poi le ho riviste e adattate ai flussi dell’app."],
      ["Casi reali", "Ho simulato diverse combinazioni di contenuti e informazioni mancanti per verificare che le schermate restassero utili anche fuori dai percorsi ideali."],
    ],
    downloadLabel: "Prova l’app",
    downloadTitle: "Vuoi vedere il progetto da vicino?",
    downloadBody: "Scarica BIM Taloro Outdoor e scopri direttamente sul tuo telefono i borghi, le esperienze e la comunità.",
    downloadApple: "Scarica su App Store",
    downloadGoogle: "Scarica su Google Play",
    scanQr: "Apri lo store o scansiona il QR code.",
    tools: "Strumenti e stack",
    stack: [["Figma", "Flussi e interfacce"], ["Maze", "Test dei flussi"], ["React Native + Expo", "App iOS e Android"], ["NativeWind", "Stili e componenti"], ["Supabase", "Backend, dati e media"]],
    altHero: "Due schermate dell’app BIM Taloro su smartphone: dettaglio di Desulo e home con i borghi",
    altService: "Schermata di dettaglio di un’esperienza locale nell’app BIM Taloro",
    altSocial: "Feed della comunità nell’app BIM Taloro",
    altUx: "Schermate dell’app BIM Taloro che mostrano le scelte UX",
    altNight: "La home dell’app BIM Taloro nei temi chiaro e scuro",
  },
  en: {
    title: "A place to explore. A community to be part of.",
    hero: "BIM Taloro Outdoor brings the villages, experiences and news of inland Sardinia together in one iOS and Android app.",
    discover: "Explore the project",
    heroDownload: "Download the app",
    project: "The project",
    projectTitle: "From the lake to the villages, one connected journey.",
    projectBody: "Across Barbagia and Gennargentu, thirteen communities preserve places, traditions and activities often described in separate sources. The app makes this information easier to explore and adds a space where people can share the territory they know.",
    projectHighlight: "thirteen communities",
    collaboration: "A project created in collaboration with",
    role: "My role",
    roleTitle: "From research to mobile app.",
    roleBody: "I designed the UX/UI in Figma, checked journeys with Maze, and developed the app with React Native and Expo. The interface connects discovery, practical travel information and community participation.",
    roleHighlight: "developed",
    roleNoteLabel: "Design goal",
    roleNote: "Help visitors move from inspiration to planning while making room for the voices of people who know the area.",
    experiences: "Two journeys through the territory.",
    exploreTitle: "Explore villages and experiences",
    exploreLead: "A home screen designed to spark interest, then support a choice.",
    exploreBody: "Photography introduces the thirteen communities. Search and filters help people find villages and activities; detail screens bring maps, duration, price and contact details into the practical planning stage.",
    communityTitle: "Share the community",
    communityLead: "The place keeps telling its story through its people.",
    communityBody: "The feed collects photos and moments tagged by location. Separate community and personal post views make it clear where to explore and where to find your own contributions.",
    communityHighlight: "Separate community and personal post views",
    decisions: "UX choices that connect curiosity to action.",
    decisionIntro: "I organised different types of content around the questions people bring to the app: where to go, what to do and what is happening now.",
    decisionItems: [
      ["Discover without getting lost", "Village cards invite visual exploration; search and filters offer a direct route for people who already know what they need."],
      ["Decide with the right details", "Experience pages keep duration, price and contact information close to the action instead of burying them in long descriptions."],
      ["Stay informed", "Consortium news has its own section and a clear reading layout, separate from community posts."],
    ],
    build: "From design to product",
    buildTitle: "A mobile interface with a consistent system.",
    buildBody: "Figma prototypes and Maze tests informed the user flows. I developed the app for iOS and Android with React Native and Expo. NativeWind keeps styling consistent across screens; Supabase manages data, authentication and shared content.",
    buildHighlight: "React Native and Expo",
    aiLabel: "AI in the process",
    aiTitle: "Support for content, interfaces and code.",
    aiIntro: "I used AI to explore ways to organise content, shape interface wording and states, and consider code solutions. Its suggestions gave me options to compare: I selected and adapted the ideas that made the app clearer and easier to use.",
    aiHighlight: "code solutions",
    aiSteps: [
      ["Editorial structure", "I compared ways of grouping villages, experiences and news to make discovering the area more immediate."],
      ["Interface language", "I explored microcopy options for search, filters and actions, keeping the tone clear and grounded in the local context."],
      ["Exploring the code", "I asked AI for ways to organise components and handle interface states, then reviewed and adapted its suggestions to the app’s flows."],
      ["Real-world cases", "I simulated different content combinations and missing information to check that each screen stayed useful beyond the ideal journey."],
    ],
    downloadLabel: "Try the app",
    downloadTitle: "Want to explore the project up close?",
    downloadBody: "Download BIM Taloro Outdoor to discover its villages, experiences and community on your phone.",
    downloadApple: "Download on the App Store",
    downloadGoogle: "Get it on Google Play",
    scanQr: "Open the store or scan the QR code.",
    tools: "Tools and stack",
    stack: [["Figma", "Flows and interfaces"], ["Maze", "Journey testing"], ["React Native + Expo", "iOS and Android app"], ["NativeWind", "Styling and components"], ["Supabase", "Backend, data and media"]],
    altHero: "Two BIM Taloro app screens on phones: Desulo details and a home screen of villages",
    altService: "A local experience detail screen in the BIM Taloro app",
    altSocial: "Community feed in the BIM Taloro app",
    altUx: "BIM Taloro app screens showing the UX choices",
    altNight: "BIM Taloro home screen in light and dark themes",
  },
};

const asset = "/assets/bimtaloro";
const ease = [0.22, 1, 0.36, 1];
const stores = [
  { key: "Apple", url: "https://apps.apple.com/it/app/bim-taloro-outdoor/id6759103150", qr: "qr-app-store.svg", label: "downloadApple" },
  { key: "Google Play", url: "https://play.google.com/store/apps/details?id=com.whattadata.BimTaloro&utm_source=emea_Med", qr: "qr-google-play.svg", label: "downloadGoogle" },
];

export default function BimTaloroPage() {
  const { lang } = useLanguage();
  const c = copy[lang] || copy.en;
  const reduceMotion = useReducedMotion();
  const highlight = (text, phrase) => {
    const [before, ...after] = text.split(phrase);
    return after.length ? <>{before}<strong className="bt-inline-accent">{phrase}</strong>{after.join(phrase)}</> : text;
  };
  const reveal = (delay = 0) => reduceMotion ? {} : {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: 0.55, delay: Math.min(delay, 0.24), ease },
  };
  const enter = (delay = 0) => reduceMotion ? {} : {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease },
  };

  useEffect(() => {
    document.title = "BIM Taloro — Andrea Feliziani";
    return () => { document.title = "Andrea Feliziani | Portfolio"; };
  }, []);

  const scrollToProject = () => document.getElementById("bt-context")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  const scrollToDownload = () => {
    const section = document.getElementById("bt-download");
    section?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    section?.focus({ preventScroll: true });
  };

  return (
    <article className="wf-case bt-case">
      <section className="bt-hero" aria-labelledby="bt-title">
        <div className="bt-hero-copy">
          <motion.p className="bt-hero-name" {...enter()}>BIM TALORO <span>OUTDOOR</span></motion.p>
          <motion.h1 id="bt-title" {...enter(0.08)}>{c.title}</motion.h1>
          <motion.p {...enter(0.16)}>{c.hero}</motion.p>
          <div className="bt-hero-actions">
            <motion.button type="button" className="wf-hero-action" onClick={scrollToProject} {...enter(0.24)}>{c.discover}<FaArrowDown aria-hidden="true" /></motion.button>
            <motion.button type="button" className="wf-hero-action bt-hero-download" onClick={scrollToDownload} {...enter(0.3)}>{c.heroDownload}<FaArrowDown aria-hidden="true" /></motion.button>
          </div>
        </div>
        <figure className="bt-hero-image"><motion.img src={`${asset}/hero.png`} alt={c.altHero} fetchPriority="high" initial={reduceMotion ? false : { opacity: 0, y: 54, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.2, ease }} /></figure>
      </section>

      <div className="wf-shell">
        <section id="bt-context" className="wf-intro wf-section" aria-labelledby="bt-context-title">
          <motion.div className="wf-section-marker" {...reveal()}>{c.project}</motion.div>
          <div className="wf-project-copy">
            <motion.h2 id="bt-context-title" {...reveal(0.06)}>{c.projectTitle}</motion.h2>
            <motion.p className="wf-lead" {...reveal(0.12)}>{highlight(c.projectBody, c.projectHighlight)}</motion.p>
            <motion.p className="bt-collaboration" {...reveal(0.16)}><span>{c.collaboration}</span> <strong>BIM Taloro</strong></motion.p>
          </div>
        </section>

        <section className="wf-role-section wf-section" aria-labelledby="bt-role-title">
          <div className="wf-role-panel">
            <div className="wf-role-intro">
              <motion.div className="wf-section-marker" {...reveal()}>{c.role}</motion.div>
              <motion.h2 id="bt-role-title" {...reveal(0.06)}>{c.roleTitle}</motion.h2>
            </div>
            <div className="wf-role-main">
              <motion.p className="wf-lead" {...reveal(0.1)}>{highlight(c.roleBody, c.roleHighlight)}</motion.p>
              <motion.div className="wf-accessibility-note" {...reveal(0.16)}><span>{c.roleNoteLabel}</span><p>{c.roleNote}</p></motion.div>
            </div>
          </div>
        </section>

        <section className="wf-section wf-experiences" aria-label="BIM Taloro">
          <div className="wf-experience">
            <div className="wf-experience-copy">
              <motion.h3 {...reveal()}>{c.exploreTitle}</motion.h3>
              <motion.p className="wf-experience-intro" {...reveal(0.06)}>{c.exploreLead}</motion.p>
              <motion.p {...reveal(0.12)}>{c.exploreBody}</motion.p>
            </div>
            <motion.figure {...reveal(0.1)}><img src={`${asset}/service.png`} alt={c.altService} loading="lazy" /><figcaption>{c.exploreTitle} / BIM Taloro</figcaption></motion.figure>
          </div>
          <div className="wf-experience wf-experience-reverse bt-community">
            <div className="wf-experience-copy">
              <motion.h3 {...reveal()}>{c.communityTitle}</motion.h3>
              <motion.p className="wf-experience-intro" {...reveal(0.06)}>{c.communityLead}</motion.p>
              <motion.p {...reveal(0.12)}>{highlight(c.communityBody, c.communityHighlight)}</motion.p>
            </div>
            <motion.figure className="bt-tall-figure" {...reveal(0.1)}><img src={`${asset}/social.png`} alt={c.altSocial} loading="lazy" /></motion.figure>
          </div>
        </section>

        <section className="wf-section wf-decisions" aria-labelledby="bt-decisions-title">
          <motion.div className="wf-section-marker" {...reveal()}>UX / UI</motion.div>
          <div className="wf-decisions-heading">
            <motion.h2 id="bt-decisions-title" {...reveal(0.06)}>{c.decisions}</motion.h2>
            <motion.p {...reveal(0.12)}>{c.decisionIntro}</motion.p>
          </div>
          <div className="wf-decisions-grid">
            <div className="wf-decisions-list">{c.decisionItems.map(([title, body], index) => <motion.div className="wf-decision" key={title} {...reveal(index * 0.06)}><h3>{title}</h3><p>{body}</p></motion.div>)}</div>
            <motion.figure className="bt-news-figure" {...reveal(0.1)}><img src={uxImage} alt={c.altUx} loading="lazy" /></motion.figure>
          </div>
        </section>

        <section className="wf-section wf-process" aria-labelledby="bt-process-title">
          <motion.div className="wf-section-marker" {...reveal()}>{c.build}</motion.div>
          <div className="wf-process-main">
            <motion.h2 id="bt-process-title" {...reveal(0.06)}>{c.buildTitle}</motion.h2>
            <motion.p {...reveal(0.12)}>{highlight(c.buildBody, c.buildHighlight)}</motion.p>
          </div>
          <ul className="wf-process-tools" aria-label={c.tools}>{c.stack.map(([tool, purpose], index) => <motion.li key={tool} {...reveal(index * 0.05)}><strong>{tool}</strong><span>{purpose}</span></motion.li>)}</ul>
        </section>

        <section className="wf-section wf-ai" aria-labelledby="bt-ai-title">
          <motion.div className="wf-section-marker" {...reveal()}>{c.aiLabel}</motion.div>
          <div className="wf-ai-heading">
            <motion.h2 id="bt-ai-title" {...reveal(0.06)}>{c.aiTitle}</motion.h2>
            <motion.p {...reveal(0.12)}>{highlight(c.aiIntro, c.aiHighlight)}</motion.p>
          </div>
          <ol className="wf-ai-steps">
            {c.aiSteps.map(([step, description], index) => (
              <motion.li className="wf-ai-step" key={step} {...reveal(index * 0.06)}>
                <span>{step}</span>
                <p>{description}</p>
              </motion.li>
            ))}
          </ol>
        </section>

        <section id="bt-download" className="wf-section bt-download" aria-labelledby="bt-download-title" tabIndex={-1}>
          <div className="bt-download-copy">
            <motion.div className="wf-section-marker" {...reveal()}>{c.downloadLabel}</motion.div>
            <motion.h2 id="bt-download-title" {...reveal(0.06)}>{c.downloadTitle}</motion.h2>
            <motion.p {...reveal(0.12)}>{c.downloadBody}</motion.p>
            <motion.p className="bt-download-hint" {...reveal(0.16)}>{c.scanQr}</motion.p>
            <div className="bt-store-links">
              {stores.map((store, index) => (
                <motion.a className="bt-store-link" href={store.url} target="_blank" rel="noopener noreferrer" key={store.key} {...reveal(0.18 + index * 0.06)}>
                  <span className="bt-store-text"><strong>{store.key}</strong><span>{c[store.label]} <FiArrowUpRight aria-hidden="true" /></span></span>
                  <span className="bt-store-qr" aria-hidden="true">
                    <img src={`${asset}/${store.qr}`} alt="" width="128" height="128" loading="lazy" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
          <motion.figure className="bt-download-mockup" {...reveal(0.1)}><img src={`${asset}/night.png`} alt={c.altNight} loading="lazy" /></motion.figure>
        </section>

      </div>
    </article>
  );
}
