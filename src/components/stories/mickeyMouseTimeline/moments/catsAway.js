import React from "react";
import ReactPlayer from "react-player";

import "./moments.css";

import MickeyButton from "../../../buttons/mickeyButton/mickeyButton";

function WhenCatsAway() {
  return (
    <div className="mickey">
      <h1 className="title">🎵 When the Cat's Away 🎹</h1>
      {/* <h1 className="icons">🚗🛩️</h1> */}
      <MickeyButton />
      <div className="facts">
        <p>Mickey four fingers get toasty warm</p>
        <p>Release date... May 3rd 1929</p>
        <p>
          When Tom cat leaves his house empty that is just to tempting Mickey
          and his friends, especially with all the music things Tom has how
          could they resist
          <br />
          (Well when the cats away...)
        </p>
        {/* <p>I wonder if you notice Mickey's only item of clothing</p> */}
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
      <div className="facts">
        <p>😄 Mickey gets gloves 🧤</p>
      </div>
    </div>
  );
}

export default WhenCatsAway;
