import ReactPlayer from "react-player";
import "../pages.css";
import NurseryButton from "../buttonNursery/buttonNursery";

function TwinkleTwinkle() {
  return (
    <div className="page">
      <h1 className="title">Twinkle Twinkle Little Star</h1>
      <h1 className="icons">⭐✨🌟✨⭐</h1>
      <div>
        <NurseryButton />
      </div>
      <br />
      <div className="video">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=yCjJyiqpAuU"
          width="99%"
          //   height="200px"
          height="450px"
          loop
        />
      </div>
      <div className="lyrics">
        <p>
          Twinkle twinkle little star
          <br />
          How I wonder what you are
          <br />
          Up above the world so high
          <br />
          Like a diamond in the sky
          <br />
          Twinkle twinkle little star
          <br />
          How I wonder what you are
          <br />
          <br />
          Twinkle twinkle little star
          <br />
          How I wonder what you are
          <br />
          Up above the world so high
          <br />
          Like a diamond in the sky
          <br />
          Twinkle twinkle little star
          <br />
          How I wonder what you are
        </p>
      </div>
    </div>
  );
}

export default TwinkleTwinkle;
