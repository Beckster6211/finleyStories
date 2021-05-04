import { Link } from "react-router-dom";

function MusicButton() {
  return (
    <div>
      <Link to="/music">
        <button>🎤 Music 🎧</button>
      </Link>
    </div>
  );
}

export default MusicButton;
