import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import CounterSection from "../sections/CounterSection";
import EducationSection from "../sections/EducationSection";
import PortfolioSection from "../sections/PortfolioSection";
import ContactSection from "../sections/ContactSection";

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) {
          window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
        }
      }, 100);
      
      // Clean up state so refreshing won't scroll again unnecessarily
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate, location.pathname]);

  return (
    <>
      <HeroSection onFilterChange={setActiveFilter} />
      <AboutSection />
      <CounterSection />
      <EducationSection />
      <PortfolioSection
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <ContactSection />
    </>
  );
}
