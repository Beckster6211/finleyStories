import "./mickeyButton.css";

import { Link } from "react-router-dom";

function MickeyButton() {
  return (
    <div>
      <Link to="/mickeymouse">
        <button className="mickeyButton">
          {/* <img
            className="mickeyHead"
            src="../mickeyIcon.jpg"
            alt="Mickey head icon"
          /> */}
          ⏳ Mickey Timeline 📅{" "}
          {/* <img
            className="mickeyHead"
            src="../mickey.png"
            alt="Mickey head icon"
          /> */}
        </button>
      </Link>
    </div>
  );
}

export default MickeyButton;
