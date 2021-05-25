import React from "react";
import ReactPlayer from "react-player";

import "./moments.css";

import MickeyButton from "../../../buttons/mickeyButton/mickeyButton";

function WhenCatsAway() {
  return (
    <div className="mickey">
      <h1 className="mickeyTitle">🎵 When the Cat's Away 🎹</h1>
      <MickeyButton />
      <div className="mickeyFacts">
        <p>In When the Cat's Away Mickey four fingers get toasty warm</p>
        <p>Release date... May 3rd 1929</p>
        <p>
          When Tom cat leaves his house empty that is just too tempting for
          Mickey and his friends, especially with all the music things Tom has
          how could they resist
          <br />
          (Well when the cats away...)
        </p>
      </div>
      <div className="video">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=aldMRcWAYok"
          width="99%"
          height="450px"
          loop
        />
      </div>
      <div className="mickeyFacts">
        <p>😄 Mickey gets gloves 🧤</p>
      </div>
    </div>
  );
}

export default WhenCatsAway;
