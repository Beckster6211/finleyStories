import React from "react";
import ReactPlayer from "react-player";
import "./nursery.css";

import Button from "../backButton/button";

function Nursery() {
  return (
    <div className="nursery">
      <h1 className="nurseryHeading">🎵 Nursery Rhymes 🎵</h1>
      <Button />
      <br></br>
      <div className="nurseryVideos">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=yCjJyiqpAuU"
          width="99%"
          height="200px"
          loop
        />
        <br></br>
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=_6HzoUcx3eo"
          width="99%"
          height="200px"
          loop
        />
        <br></br>
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=7otAJa3jui8"
          width="99%"
          height="200px"
          loop
        />
        <br></br>
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=yWirdnSDsV4"
          width="99%"
          height="200px"
          loop
        />
        <br></br>
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=M6LoRZsHMSs"
          width="99%"
          height="200px"
          loop
        />
        <br></br>
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=1GDFa-nEzlg"
          width="99%"
          height="200px"
          loop
        />
      </div>
      <div className="text">
        <p>Courtesy of youtube Sorry if they drive you nuts 😊</p>
      </div>
    </div>
  );
}

export default Nursery;
