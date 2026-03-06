import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import { useLanguage } from "./i18n/LanguageContext";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import BackToTop from "./components/BackToTop";
import HomePage from "./pages/HomePage";
import BotanicarePage from "./pages/projects/BotanicarePage";
import OplaPage from "./pages/projects/OplaPage";
import SerenityPage from "./pages/projects/SerenityPage";
import StudyPage from "./pages/projects/StudyPage";
import ValeriPage from "./pages/projects/ValeriPage";
import SecurePage from "./pages/projects/SecurePage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { lang } = useLanguage();
  const [fading, setFading] = useState(false);
  const isFirst = useRef(true);

  useEffect(() => {
    document.body.classList.add("initial-load");
    const timer = setTimeout(() => {
      document.body.classList.remove("initial-load");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return; }
    setFading(true);
    const t = setTimeout(() => setFading(false), 220);
    return () => clearTimeout(t);
  }, [lang]);

  return (
    <>
      <Loader />
      <ScrollToTop />
      <Header />

      <div style={{ opacity: fading ? 0 : 1, transition: "opacity 0.22s ease" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/botanicare" element={<BotanicarePage />} />
        <Route path="/projects/opla" element={<OplaPage />} />
        <Route path="/projects/serenity" element={<SerenityPage />} />
        <Route path="/projects/study" element={<StudyPage />} />
        <Route path="/projects/valeri" element={<ValeriPage />} />
        <Route path="/projects/secure-it" element={<SecurePage />} />
      </Routes>

      <Footer />
      <BackToTop />
      </div>
    </>
  );
}
