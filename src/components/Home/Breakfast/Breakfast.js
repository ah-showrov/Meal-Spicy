import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import MorningMeal from "./MorningMeal/MorningMeal";

const Breakfast = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ShowrovChy/Fake-Data-Folder/main/breakfastData.json"
    )
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);
  return (
    <div className="container mt-5">
      <Row md={3} className="g-5">
        {meals.map((meal) => (
          <MorningMeal key={meal.id} meal={meal}></MorningMeal>
        ))}
      </Row>
    </div>
  );
};

export default Breakfast;
