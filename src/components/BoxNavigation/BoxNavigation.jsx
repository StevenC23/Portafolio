import React, {useState}from 'react'
import {NavLink} from "react-router-dom"

const BoxNavigation = () => {

    const [navView, setnavView] = useState(false);

    const navViewer = (prop) => {
        if(prop === false){
            document.getElementById("component-boxnavigation").style.display="block"
            setnavView(!prop)
        }else{
            document.getElementById("component-boxnavigation").style.display="none"
            setnavView(!prop)
        }  
    }

    const navVarBoxClose = () => {
        document.getElementById("component-boxnavigation").style.display="none"
        setnavView(false)
    }

    return ( 
        <>
            <div className="component-boxnavigation" id="component-boxnavigation">
                <div className="links-boxnavigation">
                    <ul>
                        <li onClick={()=>{navVarBoxClose()}}>
                            <NavLink
                                exact
                                to="/about"
                                className="link-boxnavigation"
                                activeClassName="active-link-boxnavigation"
                                >Sobre mi
                            </NavLink>
                        </li>
                        <li onClick={()=>{navVarBoxClose()}}>
                            <NavLink
                                exact
                                to="/hv"
                                className="link-boxnavigation"
                                activeClassName="active-link-boxnavigation"
                                >Ámbito Laboral
                            </NavLink>
                        </li>
                        <li onClick={()=>{navVarBoxClose()}}>
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
                <h1 className="boton-boxnavigation"
                    onClick={()=>{navViewer(navView);}}
                    >Conocer más
                    </h1>
            </div>
        </>
     );
}
 
export default BoxNavigation;