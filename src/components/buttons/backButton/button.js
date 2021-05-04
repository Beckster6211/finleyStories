import "./storiesButton.css";

import { Link } from "react-router-dom";

function Button() {
  return (
    <div>
      <Link to="/">
        <button className="storiesButton">📕 Stories 📚</button>
      </Link>
    </div>
  );
}

export default Button;
