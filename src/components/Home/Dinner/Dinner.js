import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import DinnerMeal from "./DinnerMeal/DinnerMeal";

const Dinner = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ShowrovChy/Fake-Data-Folder/main/dinnerData.json"
    )
      .then((res) => res.json())
      .then((data) => setMeals(data));
  });
  return (
    <div className="container mt-5">
      <Row md={3} className="g-5">
        {meals.map((meal) => (
          <DinnerMeal key={meal.id} meal={meal}></DinnerMeal>
        ))}
      </Row>
    </div>
  );
};

export default Dinner;
