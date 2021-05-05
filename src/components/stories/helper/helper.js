import ReactPlayer from "react-player";
import "../stories.css";
import Button from "../../buttons/backButton/button";

function Helper() {
  return (
    <div className="stories">
      <h1 className="title">Helper</h1>
      <h1 className="icons">👷🔨🧰🔧👷</h1>
      <Button />
      <p className="text">This video isn't staying</p>
      <div className="video">
        <ReactPlayer
          controls
          url="https://youtu.be/UQFuGJqrp4A"
          width="99%"
          height="450px"
          loop
        />
      </div>
      <div className="facts">
        <p>Hope it helps</p>
        {/* <p>
          November 18th 1928 (American date) <br />
          18th November 1928 (British date)
        </p>
        <p>
          24 Frames Per Second (24 individual drawings slightly different to one
          before to make 1 second of motion)
        </p>
        <p>Featuring fully synchronized sound</p> */}
      </div>
    </div>
  );
}

export default Helper;
