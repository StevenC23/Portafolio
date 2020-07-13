import React from 'react'
import {NavLink} from "react-router-dom"

const Footer = () => {
    return ( 
        <div className="contacto">
            <p>Contactame:</p>
            <NavLink
                exact
                to="/desarrollopagina"
                className="link-footer"
            >Como hice la pagina?</NavLink>
        </div>

     );
}
 
export default Footer;