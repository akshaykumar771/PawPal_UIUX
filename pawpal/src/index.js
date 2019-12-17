import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { PetsProvider } from "./context";


ReactDOM.render(
  <PetsProvider>
    <Router>
      <App />
    </Router>
  </PetsProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
