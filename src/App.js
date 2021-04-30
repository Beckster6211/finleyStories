import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home/home";
import Nursery from "./components/nurseryRhymes/nursery";
import TwinkleTwinkle from "./components/nurseryRhymes/nurseryRhymePages/twinkleTwinkle/twinkleTwinkle";
import Macdonald from "./components/nurseryRhymes/nurseryRhymePages/oldMacdonald/macdonald";
import RowYourBoat from "./components/nurseryRhymes/nurseryRhymePages/rowYourBoat/rowYourBoat";
import WheelsOnBus from "./components/nurseryRhymes/nurseryRhymePages/wheelsOnBus/wheelsOnBus";
import HappyAndKnowIt from "./components/nurseryRhymes/nurseryRhymePages/happyAndKnowIt/happy";
import GetDressed from "./components/nurseryRhymes/nurseryRhymePages/getDressed/getDressed";

function App() {
  return (
    <div className="App">
      <div className="App-inside">
        <Router>
          <Switch>
            <Route path="/nursery/dressed">
              <GetDressed />
            </Route>
            <Route path="/nursery/happy">
              <HappyAndKnowIt />
            </Route>
            <Route path="/nursery/wheelsonbus">
              <WheelsOnBus />
            </Route>
            <Route path="/nursery/rowyourboat">
              <RowYourBoat />
            </Route>
            <Route path="/nursery/macdonald">
              <Macdonald />
            </Route>
            <Route path="/nursery/twinkle">
              <TwinkleTwinkle />
            </Route>
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
