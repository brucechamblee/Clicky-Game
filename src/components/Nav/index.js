import React from "react";
import "./style.css";

const Nav = (props)=>{
  console.log(props)
  return (
    <div className="navbar">
      <div className="col-xl-4 h3">Clicky Game</div>
      <div className="col-xl-4 h3">Click an image to Begin</div>
      <div className="col-xl-4 h3">
        Top Score: {props.topScore} | Score: {props.score}
      </div>
    </div>
  );
}

export default Nav;