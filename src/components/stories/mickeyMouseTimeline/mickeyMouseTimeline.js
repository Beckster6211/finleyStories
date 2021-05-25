import React from "react";
import { Link } from "react-router-dom";
import "./mickeyTimeline.css";

import Button from "../../buttons/backButton/button";

function MickeyMouseTimeline() {
  return (
    <div className="mickey">
      <h1 className="mickeyHeading">Evolution of Mickey Mouse</h1>
      <Button />
      &nbsp;
      <p className="text">
        Iconic Mickey Mouse moments - each link takes you to a page with video,
        release date, couple of facts about it as well as a little comment from
        me at the bottom. <br />
        Enjoy 😁 (and you are welcome)
      </p>
      &nbsp;
      <div className="mickeyTimeline">
        <Link to="/mickeymouse/planecrazy">
          <p className="pageLinks">Mickey's 1st Cartoon</p>
        </Link>
        {/* <p>Mickey's First Cartoon</p> */}
        <Link to="/mickeymouse/gaucho">
          <p className="pageLinks">Mickey's been to Clarks</p>
        </Link>
        {/* <p>Mickey get shoes</p> */}
        <Link to="/mickeymouse/steamboat">
          <p className="pageLinks">Debut to the public</p>
        </Link>
        {/* <p>Mickey debut to the public</p> */}
        <Link to="/mickeymouse/catsaway">
          <p className="pageLinks">Maybe his hands were cold</p>
        </Link>
        {/* <p>Mickey get gloves</p> */}
        <Link to="/mickeymouse/karnival">
          <p className="pageLinks">Mickey's 1st words</p>
        </Link>
        {/* <p>Mickey speaks</p> */}
        <Link to="/mickeymouse/bandconcert">
          <p className="pageLinks">Mickey in colour</p>
        </Link>
        {/* <p>Mickey in colour</p> */}
        <Link to="/mickeymouse/societydog">
          <p className="pageLinks">Before laser eye surgery</p>
        </Link>
        {/* <p>Mickey pre eye surgery</p> */}
        <Link to="/mickeymouse/mickeysurprise">
          <p className="pageLinks">After laser eye surgery</p>
        </Link>
        {/* <p>Mickey post eye surgery</p> */}
        <Link to="/mickeymouse/sorcerer">
          <p className="pageLinks">Mickey film debut</p>
        </Link>
        {/* <p>Mickey film debut</p> */}
        <Link to="/mickeymouse/clubhouse">
          <p className="pageLinks">Mickey Mouse Clubhouse</p>
        </Link>
        {/* <p>Mickey now...?</p> */}
      </div>
    </div>
  );
}

export default MickeyMouseTimeline;
