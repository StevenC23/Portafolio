import React from 'react';
import {NavLink} from "react-router-dom"

const BoxNavigation = () => {

    return ( 
        <div>
            <div className="links-boxnavigation" id="links-boxnavigation">
                <ul>
                    <li onClick={()=>{}}>
                        <NavLink
                            exact
                            to="/about"
                            className="link-boxnavigation"
                            activeClassName="active-link-boxnavigation"
                        >Sobre mi
                        </NavLink>
                    </li>
                    <li onClick={()=>{}}>
                        <NavLink
                            exact
                            to="/hv"
                            className="link-boxnavigation"
                            activeClassName="active-link-boxnavigation"
                        >Ámbito Laboral
                        </NavLink>
                    </li>
                    <li onClick={()=>{}}>
                        <NavLink
                            exact
                            to="/works"
                            className="link-boxnavigation"
                            activeClassName="active-link-boxnavigation"
                        >Portafolio
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default BoxNavigation;