import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import "./nursery.css";

import Button from "../backButton/button";

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
            src="https://m.media-amazon.com/images/I/71c0yfOigeL._SS500_.jpg"
            width="40%"
            height="auto"
            alt="twinkle"
          />
        </Link>
        &nbsp;
        <Link to="/nursery/macdonald">
          <img
            src="https://m.media-amazon.com/images/I/517TG66XxZL._SS500_.jpg"
            width="40%"
            height="auto"
            alt="macdonald"
          />
        </Link>
        &nbsp;
        <Link to="/nursery/rowyourboat">
          <img
            src="https://resources.tidal.com/images/c5d07ffe/daca/4bb7/85a1/54d90e60e8d9/640x640.jpg"
            width="40%"
            height="auto"
            alt="row your boat"
          />
        </Link>
        &nbsp;
        <Link to="/nursery/wheelsonbus">
          <img
            src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781789055405/the-wheels-on-the-bus-9781789055405_hr.jpg"
            width="40%"
            height="auto"
            alt="wheels on bus"
          />
        </Link>
        &nbsp;
        <Link to="/nursery/happy">
          <img
            src="https://i.scdn.co/image/ab67616d0000b27348f98cb1e0e93226a15fb439"
            width="40%"
            height="auto"
            alt="happy"
          />
        </Link>
        &nbsp;
        <Link to="/nursery/dressed">
          <img
            src="https://lh3.googleusercontent.com/uOTXEU3CmOgw6jBxyShnIjCjw-DqCtgJ8xDaox_XdZNwCpTFyGf6AlJuyPexira2Lbo"
            width="40%"
            height="auto"
            alt="dressed"
          />
        </Link>
        {/* 
        happy and you know 
        getting dressed*/}
        {/* <br></br>
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=1GDFa-nEzlg"
          width="99%"
          height="200px"
          loop
        /> */}
      </div>
      <br></br>
    </div>
  );
}

export default Nursery;
