import React from "react";
import Service from "./Service/Service";
import "./Services.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const services = [
    {
      id: 301,
      title: "Fresh Healthy Food",
      icon: "https://i.ibb.co/5vzdNBz/services1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad nostrum nihil earum laborum deserunt explicabo velit voluptatibus,nam eveniet!",
    },
    {
      id: 302,
      title: "Free Fast Home Delivery",
      icon: "https://i.ibb.co/FHQqwD8/services2.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad nostrum nihil earum laborum deserunt explicabo velit voluptatibus,nam eveniet!",
    },
    {
      id: 303,
      title: "Discount Voucher",
      icon: "https://i.ibb.co/Xz8y6Ws/services3.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad nostrum nihil earum laborum deserunt explicabo velit voluptatibus,nam eveniet!",
    },
    {
      id: 304,
      title: "On Time Service",
      icon: "https://i.ibb.co/Yf1GWrF/services4.png ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad nostrum nihil earum laborum deserunt explicabo velit voluptatibus,nam eveniet!",
    },
    {
      id: 305,
      title: "Vat Free",
      icon: "https://i.ibb.co/QvTy80c/services5.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad nostrum nihil earum laborum deserunt explicabo velit voluptatibus,nam eveniet!",
    },
    {
      id: 306,
      title: "Qualityful Food",
      icon: "https://i.ibb.co/t29n0Qh/services6.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad nostrum nihil earum laborum deserunt explicabo velit voluptatibus,nam eveniet!",
    },
  ];
  window.scrollTo(0, 0);

  return (
    <div id="services" className=" mb-5">
      <div className="bannerDiv">
        <div className="serviceLinkDiv">
          <div className="verticalDiv"></div>
          <div>
            <h1 className="serviceText">Services</h1>
            <div className="d-flex align-items-center">
              <Link to="/home" className="serviceLinkStyle">
                Home
              </Link>{" "}
              <FontAwesomeIcon
                className="serviceArrowStyle"
                icon={faAngleRight}
              />
              <Link to="/services" className="serviceLinkStyle">
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" container service-container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
