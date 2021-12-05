import React from "react";
import choose_diff from "./assets/img/choose_diff.png"

const Difficulty = (props) => {
  return (
    <div className="overlay">
      <div className="difficulty_box">
        <p><img className="fail" src={choose_diff}  alt=""/></p>
        <h2>Choose difficulty</h2>
        <div>
        <button onClick={props.easy}>Easy</button>
        <button onClick={props.hard}>Hard</button>
        </div>
      </div>
    </div>
  );
};

export default Difficulty;