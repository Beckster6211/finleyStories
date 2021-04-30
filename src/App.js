import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home/home";
import Nursery from "./components/nurseryRhymes/nursery";

function App() {
  return (
    <div className="App">
      <div className="App-inside">
        <Router>
          <Switch>
            <Route path="/nursery">
              <Nursery />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
