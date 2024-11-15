// src/components/navbar/ThemeChanger.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
const ThemeChanger = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {themeMode === "dark" ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeChanger;
