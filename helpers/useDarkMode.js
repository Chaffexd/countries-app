import { useEffect, useState } from "react";

const useDarkMode = () => {
  const savedTheme = typeof window !== 'undefined' ? localStorage.getItem("theme") : null;
  const [theme, setTheme] = useState(savedTheme || "light");
  const colourTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colourTheme);
    root.classList.add(theme);
    localStorage.setItem("Theme", theme);
  }, [colourTheme, setTheme]);

  return [colourTheme, setTheme];
};

export default useDarkMode;
