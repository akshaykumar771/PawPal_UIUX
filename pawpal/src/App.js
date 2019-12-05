import React from "react";
import "./App.css";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
//import Rooms from "./pages/Rooms";
import Pets from "./pages/Pets";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

//import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <SideNav />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/rooms/" component={Rooms} /> */}
        <Route exact path="/pets/" component={Pets} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
