import React from "react";
import { Col } from "react-bootstrap";
import "./NoonMeal.css";

const NoonMeal = ({ meal }) => {
  const { id, name, image, price } = meal;
  return (
    <Col>
      <div className="mealCard h-100">
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
