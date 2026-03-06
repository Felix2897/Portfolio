import { useState } from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import CounterSection from "../sections/CounterSection";
import EducationSection from "../sections/EducationSection";
import PortfolioSection from "../sections/PortfolioSection";
import ContactSection from "../sections/ContactSection";

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("all");

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
