
import React from "react";
import { useLocation} from "react-router-dom";
import "./../assets/css/style-nav.css";

import Dashboard from "./../views/Dashboard";
// import routes from "../routes";
// import App from './../App';

function Admin() {
  const location = useLocation();
  const mainPanel = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return (
    <>
      <div className="wrapper">
        <div className="main-panel" ref={mainPanel}>
          <div className="content">
            <Dashboard />
          </div>
        </div>
      </div>
   
    </>
  );
}

export default Admin;
