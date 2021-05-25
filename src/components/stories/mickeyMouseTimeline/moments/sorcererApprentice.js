import React from "react";
import ReactPlayer from "react-player";

import "./moments.css";

import MickeyButton from "../../../buttons/mickeyButton/mickeyButton";

function SorcerersApprentice() {
  return (
    <div className="mickey">
      <h1 className="mickeyTitle">🧙‍♂️ Sorcerers Apprentice/Fantasia 🧙‍♂️</h1>
      <MickeyButton />
      <div className="mickeyFacts">
        <p>Mickey Mouse first film role 📽️</p>
        <p>Release date... November 13th 1940</p>
        <p>
          Sweet story Walt Disney was talking to child when they asked what was
          Mickey up to, Walt who had been on other projects - films just
          starting, silly symphonies, Alice comedies he didn't really know.
          <br />
          <br />
          Realising it had been a while since he had worked personally with
          Mickey Mouse and not liking this he decided to give him his big film
          break.
          <br />
          <br />
          Originally the sorcerers apprentice was going to be Dopey
        </p>
        <p>
          Mickey is tasked with transporting water and decides to use the
          sorcerers hat to speed things up, but soon finds out sometimes there
          is nothing wrong with the traditional way.
        </p>
      </div>
      <div className="video">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=2DX2yVucz24"
          width="99%"
          height="450px"
          loop
        />
      </div>
      <div className="mickeyFacts">
        <p>Please ignore the foreign language at the start of the clip 🙏</p>
      </div>
    </div>
  );
}

export default SorcerersApprentice;
