import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div className="service">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <h5>Price:{price}</h5>
      <p>
        <small>{description}</small>
      </p>
      <button className="btn btn-primary">Book now</button>
    </div>
  );
};

export default Service;
