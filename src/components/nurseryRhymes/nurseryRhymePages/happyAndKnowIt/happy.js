import ReactPlayer from "react-player";
import "../pages.css";
import NurseryButton from "../../../buttons/buttonNursery/buttonNursery";

function HappyAndKnowIt() {
  return (
    <div className="page">
      <h1 className="title">Happy And You Know It</h1>
      <h1 className="icons">👏😄🦶🙆🦶😄👏</h1>
      <div>
        <NurseryButton />
      </div>
      <br />
      <div className="video">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=M6LoRZsHMSs"
          width="99%"
          height="450px"
          loop
        />
      </div>
      <div className="lyrics">
        <p>
          If you're happy and you know it, clap your hands
          <br />
          (Clap, Clap)
          <br />
          If you're happy and you know it, clap your hands
          <br />
          (Clap, Clap)
          <br />
          If you're happy and you know it
          <br />
          Then your face will surely show it
          <br />
          If you're happy and you know it, clap your hands
          <br />
          (Clap, Clap)
          <br />
          <br />
          If you're happy and you know it, stomp your feet
          <br />
          (Stomp, Stomp)
          <br />
          If you're happy and you know it, stomp your feet
          <br />
          (Stomp, Stomp)
          <br />
          If you're happy and you know it
          <br />
          Then your face will surely show it
          <br />
          If you're happy and you know it, stomp your feet
          <br />
          (Stomp, Stomp)
          <br />
          <br />
          If you're happy and you know it, shout hurray
          <br />
          Hurray
          <br />
          If you're happy and you know it, shout hurray
          <br />
          Hurray
          <br />
          If you're happy and you know it
          <br />
          Then your face will surely show it
          <br />
          If you're happy and you know it, shout hurray
          <br />
          Hurray
          <br />
          <br />
          If you're happy and you know it, do all three
          <br />
          (Clap, Clap, Stomp, Stomp) Hurray
          <br />
          If you're happy and you know it, do all three
          <br />
          (Clap, Clap, Stomp, Stomp) Hurray
          <br />
          If you're happy and you know it
          <br />
          Then your face will surely show it
          <br />
          If you're happy and you know it, do all three
          <br />
          (Clap, Clap, Stomp, Stomp) Hurray
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default HappyAndKnowIt;
