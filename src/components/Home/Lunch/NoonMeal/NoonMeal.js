import React from "react";
import { Col } from "react-bootstrap";
import "./NoonMeal.css";

const NoonMeal = ({ meal }) => {
  const { id, name, image, price } = meal;
  return (
    <Col md={4} sm={12} className="mealColumn">
      <div className="mealCard ">
        <div className="imgDiv">
          <img className="imgStyle" src={image} alt="" />
        </div>
        <h5 className="text-center">{name}</h5>
        <h6 className="text-center">{price}</h6>
      </div>
    </Col>
  );
};

export default NoonMeal;
