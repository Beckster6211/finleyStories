import ReactPlayer from "react-player";
import "../pages.css";
import NurseryButton from "../../../buttons/buttonNursery/buttonNursery";

function WheelsOnBus() {
  return (
    <div className="page">
      <h1 className="title">Wheels On The Bus</h1>
      <h1 className="icons">🚏🚌🚍🚌🚏</h1>
      <div>
        <NurseryButton />
      </div>
      <br />
      <div className="video">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=yWirdnSDsV4"
          width="99%"
          height="450px"
          loop
        />
      </div>
      <div className="lyrics">
        <p>
          The wheels on the bus go round and round
          <br />
          Round and Round. Round and Round
          <br />
          The wheels on the bus go round and round
          <br />
          Round and round
          <br />
          <br />
          The door on the bus goes open and shut
          <br />
          Open and shut. Open and shut
          <br />
          The door on the bus goes open and shut
          <br />
          Open and shut
          <br />
          <br />
          The wipers on the bus go swish, swish, swish
          <br />
          Swish, swish, swish. Swish, swish, swish
          <br />
          The wipers on the bus go swish, swish, swish
          <br />
          Swish, swish, swish
          <br />
          <br />
          The horn on the bus goes beep, beep, beep
          <br />
          Beep, beep, beep. Beep, beep, beep
          <br />
          The horn on the bus goes beep, beep, beep
          <br />
          Beep, beep, beep
          <br />
          <br />
          The people on the bus go up and down
          <br />
          Up and down. Up and down
          <br />
          The people on the bus go up and down
          <br />
          Up and down
          <br />
          <br />
          The babies on the bus go waa, waa, waa
          <br />
          Waa, waa, waa. Waa, waa, waa
          <br />
          The babies on the bus go waa, waa, waa
          <br />
          Waa, waa, waa
          <br />
          <br />
          The mummies on the bus go shh, shh, shh
          <br />
          Shh, shh, shh. Shh, shh, shh
          <br />
          The daddies on the bus go shh, shh, shh
          <br />
          Shh, shh, shh
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default WheelsOnBus;
