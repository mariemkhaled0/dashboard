import { useState } from "react";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  const [toggle, setToggle] = useState(false);
  const [language, setLanguage] = useState("en");

  const handleLanguageToggle = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ar" : "en"));
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className={language === "ar" ? "arabic-container" : "container"}>
      <div>
        <Sidebar
          language={language}
          toggle={toggle}
          handleToggle={handleToggle}
        />
      </div>

      <MainContent
        language={language}
        toggle={toggle}
        handleLanguageToggle={handleLanguageToggle}
      />
    </div>
  );
}

export default App;
