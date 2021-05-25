import React from "react";
import ReactPlayer from "react-player";

import "./moments.css";

import MickeyButton from "../../../buttons/mickeyButton/mickeyButton";

function SocietyDog() {
  return (
    <div className="mickey">
      <h1 className="mickeyTitle">🐕 Society Dog Show 🐶</h1>
      {/* <h1 className="icons">🚗🛩️</h1> */}
      <MickeyButton />
      <div className="mickeyFacts">
        <p>
          Society Dog Show Mickey Mouse last appearance with trademark button
          eyes 😧
        </p>
        <p>Release date... February 3rd 1939</p>
        <p>But don't worry it's just a little laser eye surgery 😊</p>
        <p>
          When Mickey enters Pluto into a dog show (like crufts) he is not
          exactly what the judges expect they are looking for. 😭
          <br />
          <br />
          But then disaster strikes Pluto has the chance to shine and show maybe
          looks aren't everything.
        </p>
        {/* <p>I wonder if you notice Mickey's only item of clothing</p> */}
      </div>
      <div className="video">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=H_mrWvUH1wI"
          width="99%"
          height="450px"
          loop
        />
      </div>
      <div className="mickeyFacts">
        <p>Mickey's buttoned eyes still appear in comic strips</p>
      </div>
    </div>
  );
}

export default SocietyDog;
