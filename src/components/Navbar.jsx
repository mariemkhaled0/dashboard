import translateIcon from "../assets/navbar/Message.svg";
import messageIcon from "../assets/navbar/Icon.svg";
import messageIcon2 from "../assets/navbar/Message2.svg";
import womenIcon from "../assets/navbar/Woman/1.svg";
import chevron from "../assets/navbar/chevron-down.svg";
import PropTypes from "prop-types"; // Import PropTypes
import { useState } from "react";
const Navbar = ({ language, handleLanguageToggle }) => {
  const [toggleDropList, setToggleDropList] = useState(false);
  const handleToggle = () => {
    setToggleDropList(!toggleDropList);
  };

  return (
    <nav
      className={`navbar-container container-p ${
        language === "ar" ? "arabic" : ""
      }`}
    >
      <ul className="nav-ul">
        <li>
          <a href="#">{language === "en" ? "Documents" : "المستندات"}</a>
        </li>
        <li>
          <a href="#">{language === "en" ? "News" : "الأخبار"}</a>
        </li>
        <li>
          <a href="#">{language === "en" ? "Payslip" : "قسيمة الراتب"}</a>
        </li>
        <li>
          <a href="#">{language === "en" ? "Report" : "تقرير"}</a>
        </li>
      </ul>
      <div className={language == "ar" ? "nav-icons arabic" : "nav-icons"}>
        <div className={toggleDropList ? "icons-toggle" : "icons"}>
          <img
            className="translation"
            onClick={handleLanguageToggle}
            src={translateIcon}
            alt="translateIcon"
          />
          <img src={messageIcon} alt="messageIcon" />
          <img src={messageIcon2} alt="messageIcon" />
        </div>
        <div className={language == "ar" ? "info arabic" : "info"}>
          <img src={womenIcon} alt="womenIcon" />
          <img className="arrow" src={chevron} alt="chevron" />
          <img
            onClick={handleToggle}
            className="toggle-arrow"
            src={chevron}
            alt="chevron"
          />
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  language: PropTypes.string.isRequired, // Language must be a string and required
  handleLanguageToggle: PropTypes.func.isRequired, // toggleLanguage must be a function and required
};
export default Navbar;
