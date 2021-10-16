import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import NoonMeal from "./NoonMeal/NoonMeal";

const Lunch = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ShowrovChy/Fake-Data-Folder/main/lunchData.json"
    )
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);
  return (
    <div className="container mt-5">
      <Row md={3} className="g-5">
        {meals.map((meal) => (
          <NoonMeal key={meal.id} meal={meal}></NoonMeal>
        ))}
      </Row>
    </div>
  );
};

export default Lunch;
