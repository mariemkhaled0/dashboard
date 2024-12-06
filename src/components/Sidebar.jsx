import logo from "../assets/logo.svg";
import searchIcon from "../assets/Search-Magnifier.svg";
import home from "../assets/homeIcon.svg";
import mail from "../assets/Message-Mail.svg";
import calender from "../assets/EventCalendar.svg";
import barChart from "../assets/BarChart.svg";
import form from "../assets/Form.svg";
import briefCase from "../assets/Briefcase.svg";
import multiFolder from "../assets/MultiFolder.svg";
import plus from "../assets/Add.svg";
import flag from "../assets/Flag.svg";
import multiUser from "../assets/MultiUser.svg";
import settings from "../assets/Setting-Gear.svg";
import privacyIcon from "../assets/PrivacyShield.svg";
import chat from "../assets/Chat.svg";

const SidebarSection = ({ title, items, toggle, language }) => (
  <div className="iconsContent-container">
    <div className="sidebar-icons">
      <p className={`title ${language === "ar" ? "title-arabic" : ""}`}>
        {title}
      </p>
      <div className="icons-container">
        {items.map((item, index) => (
          <SidebarItem
            key={index}
            item={item}
            toggle={toggle}
            language={language}
          />
        ))}
      </div>
    </div>
  </div>
);

const SidebarItem = ({ item, toggle, language }) => (
  <div
    className={
      language == "ar" && toggle
        ? "sidebar-content-arabic"
        : language === "ar" && !toggle
        ? "sidebar-content"
        : "sidebar-content"
    }
  >
    <div className="sidebar-text-container">
      <img src={item.icon} alt={`${item.label} Icon`} />
      <p className={toggle ? "show" : "sidebar-text"}>
        {language === "ar" ? item.labelAr : item.label}
      </p>
    </div>
    {item.notification || item.extraIcon ? (
      <div className={toggle ? "show inline-content" : "sidebar-text"}>
        {item.notification && (
          <p className="notification">{item.notification}</p>
        )}
        {item.extraIcon && <img src={plus} alt="Plus Icon" />}
      </div>
    ) : null}
  </div>
);

const Sidebar = ({ toggle, handleToggle, language }) => {
  const generalItems = [
    { label: "Home", labelAr: "الصفحة الرئيسية", icon: home },
    { label: "Messages", labelAr: "الرسائل", icon: mail, notification: 2 },
    {
      label: "Schedule",
      labelAr: "الجدول الزمني",
      icon: calender,
      notification: 3,
    },
    { label: "News", labelAr: "الأخبار", icon: barChart },
    { label: "Recruitment", labelAr: "التوظيف", icon: form },
    { label: "Project", labelAr: "المشروع", icon: briefCase, extraIcon: true },
    { label: "Folders", labelAr: "المجلدات", icon: multiFolder },
  ];

  const mySpaceItems = [
    { label: "Activity", labelAr: "النشاط", icon: flag },
    { label: "Shared", labelAr: "المشتركة", icon: multiUser },
    { label: "Privacy", labelAr: "الخصوصية", icon: privacyIcon },
  ];

  const supportItems = [
    { label: "Settings", labelAr: "الإعدادات", icon: settings },
    { label: "Help", labelAr: "مساعدة", icon: multiUser },
    { label: "Chats", labelAr: "الدردشات", icon: chat, notification: 3 },
  ];

  return (
    <aside
      className={
        toggle && language === "ar"
          ? "sidebar-open-arabic"
          : toggle
          ? "sidebar-open"
          : "sidebar"
      }
    >
      <div className="sidebar-header">
        <button className="logo-btn" onClick={handleToggle}>
          <img className="logo" src={logo} alt="Procoor Logo" />
          {toggle && <p>{language === "ar" ? "بروكور" : "Procoor"}</p>}
        </button>
        <div className="search-container">
          {toggle ? (
            <div className="search-input-container">
              <img src={searchIcon} alt="Search Icon" />
              <input
                className="search-input"
                type="text"
                placeholder={language === "ar" ? "ابحث" : "Search"}
              />
            </div>
          ) : (
            <img className="search-icon" src={searchIcon} alt="Search Icon" />
          )}
        </div>
      </div>

      <SidebarSection
        title={language === "ar" ? "عام" : "General"}
        items={generalItems}
        toggle={toggle}
        language={language}
      />
      <SidebarSection
        title={language === "ar" ? "مساحتي" : "MySpace"}
        items={mySpaceItems}
        toggle={toggle}
        language={language}
      />
      <SidebarSection
        title={language === "ar" ? "الدعم" : "Support"}
        items={supportItems}
        toggle={toggle}
        language={language}
      />
    </aside>
  );
};

export default Sidebar;
