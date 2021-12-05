import React from "react";
import animefail from "./assets/img/animefail.png"

const GameOver = (props) => {
  return (
    <div className="overlay">
      <div className="gameover_box">
        <p><img className="fail" src={animefail}  alt=""/></p>
        <h2>GAME OVER</h2>
        <p> Score was: {props.score} </p>

        <button onClick={props.close}>X</button>
      </div>
    </div>
  );
};

export default GameOver;
