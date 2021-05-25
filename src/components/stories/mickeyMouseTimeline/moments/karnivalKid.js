import React from "react";
import ReactPlayer from "react-player";

import "./moments.css";

import MickeyButton from "../../../buttons/mickeyButton/mickeyButton";

function KarnivalKid() {
  return (
    <div className="mickey">
      <h1 className="mickeyTitle">🎠 The Karnival Kid 🎡</h1>
      {/* <h1 className="icons">🚗🛩️</h1> */}
      <MickeyButton />
      <div className="mickeyFacts">
        <p>The Karnival Kid Mickey speaks</p>
        <p>Release date... May 23rd 1929</p>
        <p>
          This is the first cartoon to feature Mickey Mouse speaking before this
          he did express himself, he laughed, cried, whistled... but no words.
        </p>
        <p>
          Mickey Mouse is working at a karnival selling a popular food item from
          his cart...sausages. But this is Mickey Mouse they aren't ordinary
          sausages, they walk, dance, bark even do tricks. Whilst selling them
          he cries "Hot Dogs!". <br /> Originally voiced by Carl W.Stalling
          Disney's music director with Walt voicing Minnie.
        </p>
        <p>
          Whilst working at a Karnival Mickey is trying to get the attention and
          affection of certain dancer mouse. Maybe senerading her will do the
          trick lets hope no one gets in the way 🤞
        </p>
        {/* <p>I wonder if you notice Mickey's only item of clothing</p> */}
      </div>
      <div className="video">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=605ArxuoVX8"
          width="99%"
          height="450px"
          loop
        />
      </div>
      <div className="mickeyFacts">
        <p>🌭 Hot Dogs are still close to Mickey Mouse to this day 🌭</p>
      </div>
    </div>
  );
}

export default KarnivalKid;
