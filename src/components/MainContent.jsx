import { useState } from "react";
import Navbar from "./Navbar";
import Data from "./Data";
import Form from "./Form";
import Table from "./Table";

const MainContent = ({ toggle }) => {
  const [language, setLanguage] = useState("en");

  const handleLanguageToggle = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ar" : "en"));
  };

  return (
    <section className={toggle ? "main-open" : "main"}>
      <header>
        <Navbar
          language={language}
          handleLanguageToggle={handleLanguageToggle}
        />
      </header>
      <main>
        <Data language={language} />
        <section
          className={
            language === "ar"
              ? "container-p form-table-container arabic"
              : "container-p form-table-container"
          }
        >
          <Form language={language} />
          <Table language={language} />
        </section>
      </main>
    </section>
  );
};

export default MainContent;
