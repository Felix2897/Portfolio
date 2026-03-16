import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import CounterSection from "../sections/CounterSection";
import EducationSection from "../sections/EducationSection";
import PortfolioSection from "../sections/PortfolioSection";
import ContactSection from "../sections/ContactSection";

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) {
          window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
        }
      }, 100);
      
      // Clean up state so refreshing won't scroll again unnecessarily
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

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
