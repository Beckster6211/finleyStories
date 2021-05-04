import React from "react";
import { Link } from "react-router-dom";
import "./nursery.css";

import Button from "../buttons/backButton/button";

function Nursery() {
  return (
    <div className="nursery">
      <h1 className="nurseryHeading">🎵 Nursery Rhymes 🎵</h1>
      <Button />
      <p className="text">
        Courtesy of youtube <br></br>Sorry if they drive you nuts 😊
      </p>
      <div className="videos">
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
      </div>
    </div>
  );
}

export default Nursery;
