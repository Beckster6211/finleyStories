import ReactPlayer from "react-player";
import "../pages.css";
import NurseryButton from "../../../buttonNursery/buttonNursery";

function Macdonald() {
  return (
    <div className="page">
      <h1 className="title">Old MacDonald Had A Farm</h1>
      <h1 className="icons">👨‍🌾🐖🦆🐎🐑🐄🦃🚜</h1>
      <div>
        <NurseryButton />
      </div>
      <br />
      <div className="video">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=_6HzoUcx3eo"
          width="99%"
          //   height="200px"
          height="450px"
          loop
        />
      </div>
      <div className="lyrics">
        {/* <details>
          <summary>Lyrics</summary> */}
        <p>
          Old MacDonald had a farm, E-I-E-I-O
          <br />
          And on that farm he had a pig, E-I-E-I-O
          <br />
          With an oink oink here, And an oink oink there
          <br />
          Here an oink, there an oink, Everywhere an oink oink
          <br />
          Old MacDonald had a farm, E-I-E-I-O
          <br />
          <br />
          Old MacDonald had a farm, E-I-E-I-O
          <br />
          And on that farm he had a duck, E-I-E-I-O
          <br />
          With a quack quack here, And a quack quack there
          <br />
          And an oink oink here, And an oink oink there
          <br />
          Old MacDonald had a farm, E-I-E-I-O
          <br />
          <br />
          Old MacDonald had a farm, E-I-E-I-O
          <br />
          And on that farm he had a horse, E-I-E-I-O
          <br />
          With a neigh neigh here, And a neight neigh there
          <br />
          And a quack quack here, And a quack quack there <br />
          And an oink oink here, And an oink oink there
          <br />
          Old MacDonald had a farm, E-I-E-I-O
          <br />
          <br />
          Old MacDonald had a farm, E-I-E-I-O
          <br />
          And on that farm he had a sheep, E-I-E-I-O
          <br />
          With a baa baa here, And a baa baa there
          <br />
          And a neigh neigh here, And a neigh neigh there
          <br />
          And a quack quack here, And a quack quack there <br />
          And an oink oink here, And an oink oink there
          <br />
          Old MacDonald had a farm, E-I-E-I-O
          <br />
          <br />
          Old MacDonald had a farm, E-I-E-I-O
          <br />
          And on that farm he had a cow, E-I-E-I-O
          <br />
          With a moo moo here, And a moo moo there,
          <br />
          And a baa baa here, And a baa baa there
          <br />
          And a neigh neigh here, And a neigh neigh there
          <br />
          And a quack quack here, And a quack quack there <br />
          And an oink oink here, And an oink oink there
          <br />
          Old MacDonald had a farm, E-I-E-I-O
          <br />
          <br />
          Old MacDonald had a farm, E-I-E-I-O
          <br />
          And on that farm he had a turkey, E-I-E-I-O
          <br />
          With a gobble gobble here, And a gobble gobble there
          <br />
          And a moo moo here, And a moo moo there,
          <br />
          And a baa baa here, And a baa baa there
          <br />
          And a neigh neigh here, And a neigh neigh there
          <br />
          And a quack quack here, And a quack quack there <br />
          And an oink oink here, And an oink oink there
          <br />
          Old MacDonald had a farm, E-I-E-I-O
          <br />
          E-I-E-I-O
        </p>
        {/* </details> */}
      </div>
    </div>
  );
}

export default Macdonald;
