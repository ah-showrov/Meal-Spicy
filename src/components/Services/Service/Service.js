import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { id, title, icon, description } = service;
  return (
    <div className="service">
      <div className="iconsDiv">
        <img className="serviceIcon" src={icon} alt="" />
      </div>
      <div className="mt-3">
        <h4>{title}</h4>
        <p className="serviceDesc mt-3 "> {description}</p>
      </div>
    </div>
  );
};

export default Service;
