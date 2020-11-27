import React, { useState } from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ThemeContext from "./Context/ThemeContext";
import ThemeToggler from "./Components/ThemeToggler";
const App = () => {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        {/* <ThemeToggler /> */}
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
