import React from "react";
import imgstar from "../images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card--img" />
      <div className="card--stats">
        <img src={imgstar} className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
