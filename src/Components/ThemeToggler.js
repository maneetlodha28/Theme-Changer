import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext); // similar to usestate
  return (
    <div>
      <button
        onClick={() => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        }}
      >
        <span>{themeMode === "light" ? "turn off" : "lights on"}</span>
      </button>
    </div>
  );
};

export default ThemeToggler;
