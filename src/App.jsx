import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
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
  return (
    <>
      <Loader />
      <ScrollToTop />
      <Header />

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
    </>
  );
}
