import React from "react";
import ReactPlayer from "react-player";

import "./moments.css";

import MickeyButton from "../../../buttons/mickeyButton/mickeyButton";

function BandConcert() {
  return (
    <div className="mickey">
      <h1 className="mickeyTitle">🎺 The Band Concert 🥁</h1>
      {/* <h1 className="icons">🚗🛩️</h1> */}
      <MickeyButton />
      <div className="mickeyFacts">
        <p>The Band Concert Mickey Mouse in colour 🎨</p>
        <p>Release date... February 23rd 1935</p>
        <p>
          This is the first Mickey Mouse cartoon to be produced in technicolor.
        </p>
        <p>
          Mickey is the conductor of an orchestra playing a concert in the park
          when multiple disasters occur from a distracting nuisance duck to a
          bothersome bumblebee to a tornado storm.
          <br />
          <br />
          Will the band be able to play on?
        </p>
        {/* <p>I wonder if you notice Mickey's only item of clothing</p> */}
      </div>
      <div className="video">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=7lz9gxsgAJI"
          width="99%"
          height="450px"
          loop
        />
      </div>
      <div className="mickeyFacts">
        <p>P.S. Not the first appearance of Donald Duck</p>
      </div>
    </div>
  );
}

export default BandConcert;
