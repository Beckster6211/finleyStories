import React from "react";
import "./home.css";

import { Link } from "react-router-dom";

import Header from "../header/header";
import NurseryButton from "../buttons/buttonNursery/buttonNursery";
import Music from "../buttons/musicButton/musicButton";

function Home() {
  return (
    <div className="home">
      <Header />
      &nbsp;
      <div className="buttons">
        <NurseryButton />
        &nbsp;
        <Music />
      </div>
      <br />
      <div className="stories">
        <Link to="/helper">
          <img
            src="https://inspiring-decisions.com/wp-content/uploads/2017/06/how.jpg"
            width="30%"
            height="auto"
            alt="Helper"
          />
        </Link>
        &nbsp; &nbsp;
        {/* <Link to="/steamboatwillie">
          <img
            src="../stories/images/Steamboat_Willie.jpg"
            width="30%"
            height="auto"
            alt="SteamboatWillie"
          />
        </Link> */}
        <Link to="/mickeymouse">
          <img
            src="./evoMickey.jpg"
            width="30%"
            height="auto"
            alt="Evolution of Mickey"
          />
          {/* <h1>Mickey</h1> */}
        </Link>
        &nbsp;
        {/* <Link to="/steamboatwillie">
          <img
            src="../stories/images/Steamboat_Willie.jpg"
            width="30%"
            height="auto"
            alt="SteamboatWillie"
          />
        </Link>
        &nbsp;
        <Link to="/steamboatwillie">
          <img
            src="../stories/images/Steamboat_Willie.jpg"
            width="30%"
            height="auto"
            alt="SteamboatWillie"
          />
        </Link>
        &nbsp;
        <Link to="/steamboatwillie">
          <img
            src="../stories/images/Steamboat_Willie.jpg"
            width="30%"
            height="auto"
            alt="SteamboatWillie"
          />
        </Link> */}
      </div>
      {/* <Link to={videos[0].href}>
          <img src={videos[0].poster} alt={videos[0].alt} />
        </Link> */}
      {/* <Link to="/mickey">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Steamboat_Willie.jpg/220px-Steamboat_Willie.jpg"
            alt="mickey mouse"
          />
        </Link> */}
    </div>
  );
}

export default Home;
