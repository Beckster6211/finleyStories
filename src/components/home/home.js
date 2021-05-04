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
      <div className="buttons">
        {/* <Link to="/nursery">
          <button>Nursery Rhymes</button>
        </Link> */}
        <NurseryButton />
        <Music />
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
