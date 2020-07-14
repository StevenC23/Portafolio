import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"


//Components
import Navigation from "./components/Navigation/index"
import Footer from "./components/Footer/index"
import BoxNavigation from "./components/BoxNavigation/index"


//Utils
import {ROUTES} from "./utils/enum/index.js"
import "./styles/index.css"
// import fondo from "./utils/img/pngwave.png"



function App() {
  return (

      <Router>
        <div className="Container">
          {/* <img src={fondo} alt="fondo"></img> */}
        <div className="background-div-pages">
          <Navigation/>
          <Switch>
            {ROUTES.map((route)=>(
              <Route
                exact
                key={route.id}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
          </div>
        </div>
        <BoxNavigation/>
        <footer>
          <Footer/>
        </footer>
      </Router> 
  );
}

export default App;
