import React from "react";
import { Col } from "react-bootstrap";
import "./MorningMeal.css";

const MorningMeal = ({ meal }) => {
  const { id, name, image, price } = meal;
  return (
    <Col className="mealColumn " md={4} sm={12}>
      <div className="mealCard ">
        <div className="imgDiv">
          <img className="imgStyle" src={image} alt="" />
        </div>
        <h5 className="text-center">{name}</h5>
        <h6 className="text-center text-danger">{price}$</h6>
        <div className="text-center mb-4"></div>
      </div>
    </Col>
  );
};

export default MorningMeal;
