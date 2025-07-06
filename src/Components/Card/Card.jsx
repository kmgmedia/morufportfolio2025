import React from "react";
import Tilt from "react-parallax-tilt";
import "./card.scss";

function Card(props) {
  return (
    <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} glareEnable={false}>
      <div className="card-boder">
        <div className="card-0">
          <div className="card-1">
            <img className="img-1" src={props.image} alt="image" />
            <h4>{props.title}</h4>
          </div>
          <p className="babyp">{props.body}</p>
        </div>
      </div>
    </Tilt>
  );
}

export default Card;
