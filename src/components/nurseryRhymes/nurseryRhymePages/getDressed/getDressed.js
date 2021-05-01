import ReactPlayer from "react-player";
import "../pages.css";
import NurseryButton from "../buttonNursery/buttonNursery";

function GetDressed() {
  return (
    <div className="page">
      <h1 className="title">The Way We Get Dressed</h1>
      <h1 className="icons">🧦👕👖🧥👟</h1>
      <div>
        <NurseryButton />
      </div>
      <br />
      <div className="video">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=1GDFa-nEzlg"
          width="99%"
          height="450px"
          loop
        />
      </div>
      <div className="lyrics">
        <p>
          This is the way we put on our t-shirt, put on our t-shirt, put on our
          t-shirt. <br />
          This is the way we put on our t-shirt. <br />
          We get dressed every day. <br />
          <br />
          This is the way we put on our pants, put on our pants, put on our
          pants.
          <br /> This is the way we put on our pants. <br />
          We get dressed every day.
          <br />
          <br />
          This is the way we button our shirt, button our shirt, button our
          shirt. <br /> This is the way we button our shirt. <br /> We get
          dressed every day.
          <br />
          <br />
          This is the way we put on our socks, put on our socks, put on our
          socks. <br /> This is the way we put on our socks.
          <br /> We get dressed every day.
          <br />
          <br />
          This is the way we tie our shoes, tie our shoes, tie our shoes.
          <br /> This is the way we tie our shoes.
          <br /> We get dressed every day. <br />
          <br /> This is the way we zip up our jacket, zip up our jacket, zip up
          our jacket.
          <br /> This is the way we zip up our jacket.
          <br /> We get dressed every day.
        </p>
      </div>
    </div>
  );
}

export default GetDressed;
