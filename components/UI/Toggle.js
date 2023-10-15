"use client";

import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "@/helpers/useDarkMode";

const Toggle = () => {
  const [colourTheme, setColourTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    colourTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setColourTheme(colourTheme);
    setDarkMode(checked);
  };

  return (
    <>
      <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} size={30} />
    </>
  );
};

export default Toggle;
