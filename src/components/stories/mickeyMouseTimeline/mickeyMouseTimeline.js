import React from "react";
import { Link } from "react-router-dom";
import Button from "../../buttons/backButton/button";

function MickeyMouseTimeline() {
  return (
    <div>
      <h1>Evolution of Mickey Mouse</h1>
      <Button />
      <p>On this page timeline of Mickey Mouse iconic moments</p>
      <div>
        <Link to="/mickeymouse/planecrazy">
          <p>Mickey's 1st Cartoon</p>
        </Link>
        {/* <p>Mickey's First Cartoon</p> */}
        <Link to="/mickeymouse/gaucho">
          <p>Mickey's been to Clarks</p>
        </Link>
        {/* <p>Mickey get shoes</p> */}
        <Link to="/mickeymouse/steamboat">
          <p>Debut to the public</p>
        </Link>
        {/* <p>Mickey debut to the public</p> */}
        <Link to="/mickeymouse/catsaway">
          <p>Maybe his hands were cold</p>
        </Link>
        {/* <p>Mickey get gloves</p> */}
        <Link to="/mickeymouse/karnival">
          <p>Mickey's 1st words</p>
        </Link>
        {/* <p>Mickey speaks</p> */}
        <Link to="/mickeymouse/bandconcert">
          <p>Mickey in colour</p>
        </Link>
        {/* <p>Mickey in colour</p> */}
        <Link to="/mickeymouse/societydog">
          <p>Before laser eye surgery</p>
        </Link>
        {/* <p>Mickey pre eye surgery</p> */}
        <Link to="/mickeymouse/mickeysurprise">
          <p>After laser eye surgery</p>
        </Link>
        {/* <p>Mickey post eye surgery</p> */}
        <Link to="/mickeymouse/sorcerer">
          <p>Mickey film debut</p>
        </Link>
        {/* <p>Mickey film debut</p> */}
        <Link to="/mickeymouse/clubhouse">
          <p>Mickey Mouse Clubhouse</p>
        </Link>
        {/* <p>Mickey now...?</p> */}
      </div>
    </div>
  );
}

export default MickeyMouseTimeline;
