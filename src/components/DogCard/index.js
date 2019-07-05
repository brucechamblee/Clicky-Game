import React from "react";
import "./style.css";

function DogCard(props) {
  return (
    <div className="card">
      <span onClick={() => props.shuffleDogs(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} width="170" height="170" />
      </div>
      </span>
    </div>
  );
}

export default DogCard;
