import React from "react";
import ReactPlayer from "react-player";

import "./moments.css";

import MickeyButton from "../../../buttons/mickeyButton/mickeyButton";

function SteamBoatWillie() {
  return (
    <div className="mickey">
      <h1 className="title">⛵ Steamboat Willie ⛵</h1>
      {/* <h1 className="icons">🚗🛩️</h1> */}
      <MickeyButton />
      <div className="facts">
        <p>
          Mickey Mouse's debut to the public
          <br />
          This cartoon followed a whole new sound and picture format of 24
          frames a seccond with synchronized sound (radical for its time).
        </p>
        <p>Some parts of it are a bit... 😬 (remember it was the 1920s)</p>
        <p>Release date... November 18th 1928</p>
        <p>
          Mickey is a crew hand on a steam river sidewheeler under supervision
          of his miserable Captain Pete. When a passenger crashes on deck and
          her sheet music gets lose who knew a goats appetite could lead to an
          unusual symphony.
        </p>
        {/* <p>I wonder if you notice Mickey's only item of clothing</p> */}
      </div>
      <div className="video">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=BBgghnQF6E4"
          width="99%"
          height="450px"
          loop
        />
      </div>
      <div className="facts">
        <p>❗ 👀 EVERYBODY SHOULD WATCH 👀 ❗</p>
      </div>
    </div>
  );
}

export default SteamBoatWillie;
