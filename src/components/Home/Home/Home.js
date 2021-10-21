import React from "react";
import About from "../../About/About";
import Chefs from "../../Chefs/Chefs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <About></About>
      <Chefs></Chefs>
    </div>
  );
};

export default Home;
