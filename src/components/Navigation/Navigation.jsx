import React from "react";
import { NavLink } from "react-router-dom";
// import BoxNavigation from "../BoxNavigation/index"

const Navigation = () => {
  // const [navView, setnavView] = useState(false);

  // const navViewer = (prop) => {
  //     if(prop === false){
  //         document.getElementById("links-boxnavigation").style.display="block"
  //         setnavView(!prop)
  //     }else{
  //         document.getElementById("links-boxnavigation").style.display="none"
  //         setnavView(!prop)
  //     }
  // }

  return (
    <div className="Component-navigation">
      <NavLink
        exact
        to="/"
        className="logo"
        id="logo"
        activeClassName="active-home"
      >
        Steven
      </NavLink>
      <div className="navigation-links">
        <ul>
          <li>
            <NavLink
              exact
              to="/about"
              className="link"
              activeClassName="active-link"
            >
              Sobre mi
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/hv"
              className="link"
              activeClassName="active-link"
            >
              Ámbito Laboral
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/works"
              className="link"
              activeClassName="active-link"
            >
              Portafolio
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="boton-boxnavigation" onClick={() => {}}>
        Box
      </div>
    </div>
  );
};

export default Navigation;
