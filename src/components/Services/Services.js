import React from "react";
import Service from "./Service/Service";
import "./Services.css";

const Services = () => {
  /* 
https://i.ibb.co/BsmJsFK/services-shape.png 
*/
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
  return (
    <div className="container">
      <div className="service-container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
