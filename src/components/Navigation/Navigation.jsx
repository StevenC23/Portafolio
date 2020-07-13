import React from 'react'
import {NavLink} from "react-router-dom"

const Navigation = () => {
    return ( 

        
        <div className="Component-navigation">
                <NavLink
                    exact
                    to="/"
                    className="logo"
                    activeClassName="active-home"
                    >Steven
                </NavLink>
                <ul>
                    <li>
                        <NavLink
                            exact
                            to="/about"
                            className="link"
                            activeClassName="active-link"
                            >Sobre mi
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/hv"
                            className="link"
                            activeClassName="active-link"
                            >Ámbito Laboral
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/works"
                            className="link"
                            activeClassName="active-link"
                            >Portafolio
                        </NavLink>
                    </li>
                </ul>
        </div>
        
     );
}
 
export default Navigation;