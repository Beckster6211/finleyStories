import React from "react";
import ReactPlayer from "react-player";

import "./moments.css";

import MickeyButton from "../../../buttons/mickeyButton/mickeyButton";

function MickeySuprise() {
  return (
    <div className="mickey">
      <h1 className="mickeyTitle">🥳 Mickey Suprise Party 🍪</h1>
      <MickeyButton />
      <div className="mickeyFacts">
        <p>
          Mickey Surprise Party Mickey Mouse first appearance with eyes that
          contain pupils
        </p>
        <p>Release date... February 18th 1939</p>
        <p>
          This is actually the template for the classic Mickey Mouse look - eyes
          with pupils, white gloves, red shorts and yellow shoes (no shirt...
          🤭)
        </p>
        <p>
          Minnie bakes for Mickey some cookies like his mother use to make but
          it doesn't quite go to plan.
          <br />
          <br />
          Maybe Mickey can show her its the thought that really counts
        </p>
      </div>
      <div className="video">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=uXshdKanDnk"
          width="99%"
          height="450px"
          loop
        />
      </div>
      <div className="mickeyFacts">
        <p>
          This was the first Disney to be sponsored by a company, something Walt
          Disney actually hated.
        </p>
      </div>
    </div>
  );
}

export default MickeySuprise;
