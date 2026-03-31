import { useState, useEffect } from "react";

export function useTheme() {
  const getSystemDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const resolveInitial = () => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") return true;
    if (stored === "light") return false;
    return getSystemDark();
  };

  const [isDark, setIsDark] = useState(resolveInitial);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else if (stored === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    const value = next ? "dark" : "light";
    localStorage.setItem("theme", value);
    document.documentElement.setAttribute("data-theme", value);
  };

  return { isDark, toggleTheme };
}
