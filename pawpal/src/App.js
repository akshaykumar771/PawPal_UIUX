import React from "react";
import "./App.css";
import Home from "./pages/Home";
import ChoosePets from "./pages/ChoosePets";
import Pets from "./pages/Pets";
import cats from "./pages/Cats";
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
            <Route exact path="/choosepets/Dogs" component={Pets} />
            <Route exact path="/choosepets/Cats" component={cats} />
            <Route exact path="/pets/:id" component={SinglePet} />
            <Route component={Error} />
          </Switch>
        </>
    )
  }
  


export default App;
