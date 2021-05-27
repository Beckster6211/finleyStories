import ReactPlayer from "react-player";
import "../stories.css";
import Button from "../../buttons/backButton/button";

function Helper() {
  return (
    <div className="stories">
      <h1 className="storiesTitle">Helper</h1>
      <h1 className="storiesIcons">👷🔧🧰🔨👷</h1>
      <Button />
      <p className="storiesText">
        These videos answers: <br /> The Why? I created this. The What? So how
        to navigate the app and a talk through of each area. The How? how I add
        the videos (will need some assistance).
      </p>
      <div>
        <img
          className="helperImages"
          src="../../stories/images/ThebigWhy.jpg"
          alt="Why?"
        />
        <div className="video">
          <ReactPlayer
            controls
            url="https://youtu.be/UjbuJDg7TY0"
            width="99%"
            height="450px"
          />
        </div>
      </div>

      <div>
        <img
          className="helperImages"
          src="../../stories/images/whatisiot.jpg"
          alt="What?"
        />
        <div className="video">
          <ReactPlayer
            controls
            url="https://youtu.be/ar6dk3aDZlc"
            width="99%"
            height="450px"
          />
        </div>
      </div>
      <div>
        <img
          className="helperImages"
          src="../../stories/images/how.jpg"
          alt="How?"
        />
        <div className="video">
          <ReactPlayer
            controls
            url="https://youtu.be/d-PUPmTxomM"
            width="99%"
            height="450px"
          />
        </div>
      </div>
      <div className="storiesFacts">
        <p>Hope it helps</p>
      </div>
    </div>
  );
}

export default Helper;
