import React from "react";
import ReactPlayer from "react-player";

import "./moments.css";

import MickeyButton from "../../../buttons/mickeyButton/mickeyButton";

function GallopinGaucho() {
  return (
    <div className="mickey">
      <h1 className="mickeyTitle">๐ค The Gallopin' Gaucho๐ค </h1>
      <MickeyButton />
      <div className="mickeyFacts">
        <p>
          The Gallopin' Gaucho is Mickey Mouse's second ever cartoon appearance
          <br />
          It was used as part of a test screening for audiences and was
          originally silent
        </p>
        <p>๐ ๐ Reviews were mixed ๐ โน๏ธ</p>
        <p>
          After the introduction of sound on another famous Mickey cartoon, Walt
          Disney re-released this following the same sound and picture format
          used with the other cartoon.
          <br />
          <br />
          Thats why this has two release dates... May 15th 1928 (silent)
          December 30th 1928 (with sound)
        </p>
        <p>
          Mickey Mouse has been labeled as a bandit when another bandit Pete,
          kidnaps the barmaid who Mickey and Pete are competing with for her
          attention. Can Mickey save her and keep her attention...
        </p>
      </div>
      <div className="video">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=_Q8JhzKnJSs"
          width="99%"
          height="450px"
          loop
        />
      </div>
      <div className="mickeyFacts">
        <p>๐ Mickey has shoes on ๐ </p>
      </div>
    </div>
  );
}

export default GallopinGaucho;
