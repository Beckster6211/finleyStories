import "./musicButton.css";

import { Link } from "react-router-dom";

function MusicButton() {
  return (
    <div>
      <Link to="/music">
        <button className="musicButton">🎤 Music 🎧</button>
      </Link>
    </div>
  );
}

export default MusicButton;
