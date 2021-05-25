import React from "react";
import ReactPlayer from "react-player";

import "./moments.css";

import MickeyButton from "../../../buttons/mickeyButton/mickeyButton";

function Clubhouse() {
  return (
    <div className="mickey">
      <h1 className="mickeyTitle">🏠Mickey Mouse Clubhouse🏠</h1>
      <MickeyButton />
      <div className="mickeyFacts">
        <p>Mickey Mouse Clubhouse</p>
        <p>NOW....</p>
        <p>Mickey with his own tv show</p>
        <p>
          Just a warning I've been
          <br />
          🎤 M-I-C-K-E-Y M-O-U-S-E 🎤
          <br /> since hearing it
        </p>
      </div>
      <div className="video">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=IMEwzzyBP7w"
          width="99%"
          height="450px"
          loop
        />
      </div>
      <div className="mickeyFacts">
        <p>
          Showing roots aren't forgotten
          <br />
          Hot Dog dance (hopefully you understand the reference)
        </p>
      </div>
      <div className="video">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=yM2CEL_lHtE"
          width="99%"
          height="450px"
          loop
        />
      </div>
      <div className="mickeyFacts">
        <p>Hot Diggety Dog!</p>
      </div>
    </div>
  );
}

export default Clubhouse;
