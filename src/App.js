import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home/home";

////////
import Nursery from "./components/nurseryRhymes/nursery";
import TwinkleTwinkle from "./components/nurseryRhymes/nurseryRhymePages/twinkleTwinkle/twinkleTwinkle";
import Macdonald from "./components/nurseryRhymes/nurseryRhymePages/oldMacdonald/macdonald";
import RowYourBoat from "./components/nurseryRhymes/nurseryRhymePages/rowYourBoat/rowYourBoat";
import WheelsOnBus from "./components/nurseryRhymes/nurseryRhymePages/wheelsOnBus/wheelsOnBus";
import HappyAndKnowIt from "./components/nurseryRhymes/nurseryRhymePages/happyAndKnowIt/happy";
import GetDressed from "./components/nurseryRhymes/nurseryRhymePages/getDressed/getDressed";

////////
import Music from "./components/music/music";

//////
import SteamBoatWillie from "./components/stories/steamBoatWillie/steamBoatWillie";

function App() {
  return (
    <div className="App">
      <div className="App-inside">
        <Router>
          <Switch>
            <Route exact path="/music">
              <Music />
            </Route>
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
            <Route exact path="/nursery">
              <Nursery />
            </Route>

            <Route path="/steamboatwillie">
              <SteamBoatWillie />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
