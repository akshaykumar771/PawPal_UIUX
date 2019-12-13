import React from "react";
import "./App.css";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import ChoosePets from "./pages/ChoosePets";
import Pets from "./pages/Pets";
import SinglePet from "./pages/SinglePet";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

//import Navbar from "./components/Navbar";

function App() {
  
    return (
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/choosepets/" component={ChoosePets} />
            <Route exact path="/choosepets/:type" component={Pets} />
            <Route exact path="/pets/:slug" component={SinglePet} />
            <Route component={Error} />
          </Switch>
        </>
    )
  }
  


export default App;
