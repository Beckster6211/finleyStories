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
// import SteamBoatWillie from "./components/stories/steamBoatWillie/steamBoatWillie";
import Helper from "./components/stories/helper/helper";

///////
import MickeyMouseTimeline from "./components/stories/mickeyMouseTimeline/mickeyMouseTimeline";
import PlaneCrazy from "./components/stories/mickeyMouseTimeline/moments/planeCrazy";
import GallopinGaucho from "./components/stories/mickeyMouseTimeline/moments/gallopinGaucho";
import SteamBoatWillie from "./components/stories/mickeyMouseTimeline/moments/steamboatWillie";
import WhenCatsAway from "./components/stories/mickeyMouseTimeline/moments/catsAway";
import KarnivalKid from "./components/stories/mickeyMouseTimeline/moments/karnivalKid";
import BandConcert from "./components/stories/mickeyMouseTimeline/moments/bandConcert";
import SocietyDog from "./components/stories/mickeyMouseTimeline/moments/societyDogShow";
import MickeySurprise from "./components/stories/mickeyMouseTimeline/moments/mickeySurprise";
import SorcerersApprentice from "./components/stories/mickeyMouseTimeline/moments/sorcererApprentice";
import Clubhouse from "./components/stories/mickeyMouseTimeline/moments/clubhouse";

function App() {
  return (
    <div className="App">
      <div className="App-inside">
        <Router>
          <Switch>
            {/* music */}
            <Route exact path="/music">
              <Music />
            </Route>
            {/* nursery */}
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

            {/* mickey timeline */}
            <Route path="/mickeymouse/clubhouse">
              <Clubhouse />
            </Route>
            <Route path="/mickeymouse/sorcerer">
              <SorcerersApprentice />
            </Route>
            <Route path="/mickeymouse/mickeysurprise">
              <MickeySurprise />
            </Route>
            <Route path="/mickeymouse/societydog">
              <SocietyDog />
            </Route>
            <Route path="/mickeymouse/bandconcert">
              <BandConcert />
            </Route>
            <Route path="/mickeymouse/karnival">
              <KarnivalKid />
            </Route>
            <Route path="/mickeymouse/catsaway">
              <WhenCatsAway />
            </Route>
            <Route path="/mickeymouse/steamboat">
              <SteamBoatWillie />
            </Route>
            <Route path="/mickeymouse/gaucho">
              <GallopinGaucho />
            </Route>
            <Route path="/mickeymouse/planecrazy">
              <PlaneCrazy />
            </Route>
            <Route path="/mickeymouse">
              <MickeyMouseTimeline />
            </Route>

            {/* stories */}
            <Route path="/helper">
              <Helper />
            </Route>
            {/* <Route path="/steamboatwillie">
              <SteamBoatWillie />
            </Route> */}
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
