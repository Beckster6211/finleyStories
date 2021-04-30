import { Link } from "react-router-dom";

function NurseryButton() {
  return (
    <div>
      <Link to="/nursery">
        <button>🎵 Nursery Rhymes🎵</button>
      </Link>
    </div>
  );
}

export default NurseryButton;
