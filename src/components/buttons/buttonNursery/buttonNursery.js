import "./nurseryButton.css";

import { Link } from "react-router-dom";

function NurseryButton() {
  return (
    <div>
      <Link to="/nursery">
        <button className="nurseryButton">👶 Nursery Rhymes🎵</button>
      </Link>
    </div>
  );
}

export default NurseryButton;
