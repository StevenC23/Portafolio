import React from 'react'
import logo from "../../utils/img/pngwave.png"

const Home = () => {
    return ( 
        <div className="Component-home">
            <div>
            <h1 className="Steven">Hola ! </h1>
            <h1 className="Steven">Mi nombre es Steven</h1>
            <h2 className="profesion">Ingeniero de software</h2>
            <h2 className="universidad">Séptimo semestre de la universidad San Buenaventura De Cali</h2>
            <br/>
            <p>Pagina creada con:</p>
            <br/>
            <p>React / Html / Css / JavaScript</p>
            </div>
            <img src={logo} alt=""/>
        </div>
     );
}
 
export default Home;
