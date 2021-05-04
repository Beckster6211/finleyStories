import React from "react";
import ReactAudioPlayer from "react-audio-player";
// import { Link } from "react-router-dom";
import "./music.css";

import Button from "../buttons/backButton/button";
import NurseryButton from "../buttons/buttonNursery/buttonNursery";

function Music() {
  return (
    <div className="music">
      <h1 className="musicHeading">📻 Music 🧑‍🎤</h1>
      <div className="buttons">
        <Button />
        <NurseryButton />
      </div>
      {/* <audio controls>
        <source src="./music/BadRomance.mp3" type="audio/mpeg"></source>
      </audio> */}
      <br />
      <div className="songs">
        <div className="tracks">
          <h5 className="trackHeading">Bad Romance - Lady Gaga</h5>
          <ReactAudioPlayer
            src="./music/BadRomance.mp3"
            // autoPlay
            controls
            // width="600px"
            // height="auto"
          />
        </div>
        {/* &nbsp;
        <div className="tracks">
          <h5>Bad Romance - Lady Gaga</h5>
          <ReactAudioPlayer
            src="./music/BadRomance.mp3"
            // autoPlay
            controls
            // width="600px"
            // height="auto"
          />
        </div>
        &nbsp;
        <div className="tracks">
          <h5>Bad Romance - Lady Gaga</h5>
          <ReactAudioPlayer
            src="./music/BadRomance.mp3"
            // autoPlay
            controls
            // width="600px"
            // height="auto"
          />
        </div>{" "}
        &nbsp; */}
      </div>
      {/* <p className="text">
        Courtesy of youtube <br></br>Sorry if they drive you nuts 😊
      </p> */}
      {/* <div className="videos">
        <Link to="/nursery/twinkle">
          <img
            src="./images/twinkletwinkle.jpg"
            width="30%"
            height="auto"
            alt="Twinkle twinkle little star"
          />
        </Link>
        &nbsp;
        <Link to="/nursery/macdonald">
          <img
            src="./images/macdonald.jpg"
            width="30%"
            height="auto"
            alt="Old macdonald had a farm"
          />
        </Link>
        &nbsp;
        <Link to="/nursery/rowyourboat">
          <img
            src="./images/rowboat.jpg"
            width="30%"
            height="auto"
            alt="Row your boat"
          />
        </Link>
        &nbsp;
        <Link to="/nursery/wheelsonbus">
          <img
            src="./images/wheelsonbus.jpg"
            width="30%"
            height="auto"
            alt="Wheels on the bus"
          />
        </Link>
        &nbsp;
        <Link to="/nursery/happy">
          <img
            src="./images/happyandknowit.jfif"
            width="30%"
            height="auto"
            alt="Happy and know it"
          />
        </Link>
        &nbsp;
        <Link to="/nursery/dressed">
          <img
            src="./images/getdressed.png"
            width="30%"
            height="auto"
            alt="Get dressed"
          />
        </Link>
      </div> */}
    </div>
  );
}

export default Music;
