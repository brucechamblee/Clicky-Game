import React from "react";
import "./style.css";

const Nav = (props)=>{
  return (
    <div className=".navBar">
        <h5>{props.topScore}</h5>
        <h5>{props.score}</h5>
    </div>
  );
}

export default Nav;