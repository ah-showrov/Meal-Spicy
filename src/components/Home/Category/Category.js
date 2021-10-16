import React from "react";
import { NavLink } from "react-router-dom";
import Breakfast from "../Breakfast/Breakfast";
import Dinner from "../Dinner/Dinner";
import Lunch from "../Lunch/Lunch";
import { Switch, Route } from "react-router-dom";
import "./Category.css";

const Category = () => {
  return (
    <div className=" category-section ">
      <div className=" category-section d-flex justify-content-center h">
        <NavLink to="/home/breakfast" className="category-link">
          {" "}
          Breakfast
        </NavLink>
        <NavLink to="/home/lunch" className="category-link">
          {" "}
          Lunch
        </NavLink>
        <NavLink to="/home/dinner" className="category-link">
          {" "}
          Dinner
        </NavLink>
      </div>
      <div>
        <Switch>
          <Route path="/home/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/home/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/home/dinner">
            <Dinner></Dinner>
          </Route>
          <Route path="/">
            <Breakfast></Breakfast>
            <Lunch></Lunch>
            <Dinner></Dinner>
          </Route>
        </Switch>
      </div>{" "}
    </div>
  );
};

export default Category;
