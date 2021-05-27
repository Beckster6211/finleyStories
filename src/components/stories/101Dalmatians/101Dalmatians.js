import ReactPlayer from "react-player";
import "../stories.css";
import Button from "../../buttons/backButton/button";

function Dalmatians() {
  return (
    <div className="stories">
      <h1 className="storiesTitle">101 Dalmatians Tester Video</h1>
      <h1 className="storiesIcons">🐕</h1>
      <Button />
      <div className="video">
        <ReactPlayer
          controls
          url="https://youtu.be/6UjJINbJjho"
          width="99%"
          height="450px"
          loop
        />
      </div>
      <div className="storiesFacts">
        <p>
          Story of a litter of Dalmatian puppies who are kidnapped by the
          villainous Cruella de Vil, who wants to use their fur to make into
          coats. Their parents, Pongo and Perdita, set out to save their
          children from Cruella in the process of rescuing 84 additional puppies
          that were bought in pet shops, bringing the total of Dalmatians to
          101.
        </p>
      </div>
    </div>
  );
}

export default Dalmatians;
