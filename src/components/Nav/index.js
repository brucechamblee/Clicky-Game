import React from "react";
import "./style.css";

const Nav = (props)=>{
  console.log(props)
  return (
    <nav class="navbar navbar-light bg-light">
    <span class="navbar-brand mb-0 h1">Navbar</span>
    <h5>Top Score: {props.topScore}</h5>
    <h5>Score: {props.score}</h5>
    </nav>
     
  );
}

export default Nav;