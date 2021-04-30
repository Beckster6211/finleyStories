import ReactPlayer from "react-player";
import NurseryButton from "../buttonNursery/buttonNursery";

import "../pages.css";

function RowYourBoat() {
  return (
    <div className="page">
      <h1 className="title">Row Your Boat</h1>
      <h1 className="icons">🌊⛵🚣⛵🌊</h1>
      <div>
        <NurseryButton />
      </div>
      <br />
      <div className="video">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=7otAJa3jui8"
          width="99%"
          height="450px"
          loop
        />
      </div>
      <div className="lyrics">
        <p>
          Row row row your boat, Gently down the stream
          <br />
          Merrily merrily merrily merrily. Life is but a dream
          <br />
          <br />
          Row row row your boat, Gently down the stream
          <br />
          Merrily merrily merrily merrily. Life is but a dream
          <br />
          <br />
          Row row row your boat, Gently down the stream
          <br />
          Merrily merrily merrily merrily. Life is but a dream
          <br />
          <br />
          Row row row your boat, Gently down the stream
          <br />
          Merrily merrily merrily merrily. Life is but a dream
        </p>
      </div>
    </div>
  );
}

export default RowYourBoat;
