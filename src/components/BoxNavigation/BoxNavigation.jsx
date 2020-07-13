import React from 'react'
import {NavLink} from "react-router-dom"

const BoxNavigation = () => {
    return ( 
        <>
            <div className="component-boxnavigation">
                <div className="links-boxnavigation">
                    <ul>
                        <li>
                            <NavLink
                                exact
                                to="/about"
                                className="link-boxnavigation"
                                activeClassName="active-link-boxnavigation"
                                >Sobre mi
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                to="/hv"
                                className="link-boxnavigation"
                                activeClassName="active-link-boxnavigation"
                                >Ámbito Laboral
                            </NavLink>
                        </li>
                        <li>
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
            <div className="b-boxnavigation">
                <h1 className="boton-boxnavigation">Conocer más</h1>
            </div>
        </>
     );
}
 
export default BoxNavigation;