import { useState } from "react";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="container">
      <div>
        <Sidebar toggle={toggle} handleToggle={handleToggle} />
      </div>

      <MainContent toggle={toggle} />
    </div>
  );
}

export default App;
