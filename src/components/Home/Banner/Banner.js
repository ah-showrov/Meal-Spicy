import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
import React from "react";
import slider1 from "../../../images/slider/banner-slider1.png";
import slider2 from "../../../images/slider/banner-slider2.png";
import slider3 from "../../../images/slider/banner-slider3.png";

const Banner = () => {
  return (
    <div className=" banner-container  container  ">
      <div className="left-part  py-5">
        <h1 className="banner-heading">
          Get <span className="text-danger">Meal Spicy </span> Food by Ordering
          Online
        </h1>
        <p className="text-secondary mt-4">
          A restaurant sometimes known as a diner is a place where cooked food
          is sold to the public, and where people sit down to eat it. It is also
          a place where people go to enjoy the time and to eat a meal.
        </p>
        <form className="banner-form mt-5">
          <input
            className="search-field"
            type="text"
            placeholder=" search your food "
          />
          <input
            className="search-btn bg-danger text-white fs-5"
            type="button"
            value="Search"
          />
        </form>
      </div>
      <div className="right-part   ps-5 ">
        <Carousel controls={false} indicators={false}>
          <Carousel.Item>
            <img
              className="d-block  slider-img"
              src={slider1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  slider-img"
              src={slider2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  slider-img"
              src={slider3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
