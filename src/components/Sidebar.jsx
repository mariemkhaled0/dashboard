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

const SidebarSection = ({ title, items, toggle }) => (
  <div className="iconsContent-container">
    <div className="sidebar-icons">
      <p className="title">{title}</p>
      <div className="icons-container">
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} toggle={toggle} />
        ))}
      </div>
    </div>
  </div>
);

const SidebarItem = ({ item, toggle }) => (
  <div className="sidebar-content">
    <div className="sidebar-text-container">
      <img src={item.icon} alt={`${item.label} Icon`} />
      <p className={toggle ? "show" : "sidebar-text"}>{item.label}</p>
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

const Sidebar = ({ toggle, handleToggle }) => {
  const generalItems = [
    { label: "Home", icon: home },
    { label: "Messages", icon: mail, notification: 2 },
    { label: "Schedule", icon: calender, notification: 3 },
    { label: "News", icon: barChart },
    { label: "Recruitment", icon: form },
    { label: "Project", icon: briefCase, extraIcon: true },
    { label: "Folders", icon: multiFolder },
  ];

  const mySpaceItems = [
    { label: "Activity", icon: flag },
    { label: "Shared", icon: multiUser },
    { label: "Privacy", icon: privacyIcon },
  ];

  const supportItems = [
    { label: "Settings", icon: settings },
    { label: "Help", icon: multiUser },
    { label: "Chats", icon: chat, notification: 3 },
  ];

  return (
    <aside className={toggle ? "sidebar-open" : "sidebar"}>
      <div className="sidebar-header">
        <button className="logo-btn" onClick={handleToggle}>
          <img className="logo" src={logo} alt="Procoor Logo" />
          {toggle && <p>Procoor</p>}
        </button>
        <div className="search-container">
          {toggle ? (
            <div className="search-input-container">
              <img src={searchIcon} alt="Search Icon" />
              <input
                className="search-input"
                type="text"
                placeholder="Search"
              />
            </div>
          ) : (
            <img className="search-icon" src={searchIcon} alt="Search Icon" />
          )}
        </div>
      </div>

      <SidebarSection title="General" items={generalItems} toggle={toggle} />
      <SidebarSection title="MySpace" items={mySpaceItems} toggle={toggle} />
      <SidebarSection title="Support" items={supportItems} toggle={toggle} />
    </aside>
  );
};

export default Sidebar;
