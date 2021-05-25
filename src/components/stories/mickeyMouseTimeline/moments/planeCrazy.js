import React from "react";
import ReactPlayer from "react-player";

import "./moments.css";

import MickeyButton from "../../../buttons/mickeyButton/mickeyButton";

function PlaneCrazy() {
  return (
    <div className="mickey">
      <h1 className="mickeyTitle">🚗 Plane Crazy 🛩️</h1>
      {/* <h1 className="icons">🚗🛩️</h1> */}
      <MickeyButton />
      <div className="mickeyFacts">
        <p>
          Plane Crazy is technically Mickey Mouse's first ever cartoon
          appearance
          <br />
          It was used as part of a test screening for audiences and was
          originally silent
        </p>
        <p>🙂👍 Reviews mixed 👎☹️</p>
        <p>
          After the introduction of sound on another famous Mickey cartoon, Walt
          Disney re-released this following the same sound and picture format
          used with the other cartoon.
          <br />
          <br />
          Thats why this has two release dates... May 15th 1928 (near silent)
          March 17th 1929 (with sound)
        </p>
        <p>
          Mickey Mouse is trying to fly a plane inspired by US aviator Charles
          Lindbergh. His first attempt doesn't go well which causes him to
          improvise his vehicle and calamity unfolds.
        </p>
        {/* <p>I wonder if you notice Mickey's only item of clothing</p> */}
      </div>
      <div className="video">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=kCZPzHg0h80"
          width="99%"
          height="450px"
          loop
        />
      </div>
      <div className="mickeyFacts">
        <p>Notice that Mickey is only wearing one item of clothing 🩳</p>
      </div>
    </div>
  );
}

export default PlaneCrazy;
