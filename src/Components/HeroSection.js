import React, { useContext, useState } from "react";
import ThemeContext from "../Context/ThemeContext";

import AppTheme from "../color";
import ThemeToggler from "./ThemeToggler";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0]; //theme context is an array and we want to access he firs value so used 0
  const currentTheme = AppTheme[theme];
  const [count, setCount] = useState(0);
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  const change = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
    setCount(count + 1);
  };

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Context API theme toggler</h1>
      <p>
        The count below is implemented using state. It shows the no. of clicks
      </p>
      <p>count={count}</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#FFF",
          border: `${currentTheme.border}`,
        }}
        onClick={change}
      >
        CLICK ME!!
      </button>
    </div>
  );
};

export default HeroSection;
