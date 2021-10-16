import React from "react";
import "./Chefs.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Chefs = () => {
  const chefs = [
    {
      id: 201,
      name: "john Doe",
      post: "Head of Chef",
      image: "https://i.ibb.co/dMCSrrQ/1.jpg",
    },
    {
      id: 202,
      name: "john smith",
      post: "Assistant Chef",
      image: "https://i.ibb.co/RzYBk7y/6.jpg",
    },
    {
      id: 203,
      name: "Evanaa",
      post: "Intern Chef",
      image: "https://i.ibb.co/1ZZ7wbs/3.jpg",
    },
    {
      id: 204,
      name: "Knot Doe",
      post: "Asst. Chef",
      image: "https://i.ibb.co/FDXdfBn/7.jpg",
    },
  ];
  return (
    <div className="container my-5">
      <h1 className="text-center">Our Special Chefs</h1>
      <p className="text-center mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Placeat
        ad nostrum nihil earum laborum deserunt explicabo velit voluptatibus,
        nam eveniet!
      </p>
      <div className="d-md-flex  mt-5">
        {chefs.map((chef) => (
          <div className="chefDiv mx-2 " key={chef.id} chef={chef}>
            <div className="chefImgDiv">
              <img className="img-fluid" src={chef.image} alt="" />

              <div className="chefCardMiddle text-center text-light pt-2">
                <h4 className="">{chef.name}</h4>
                <h6>{chef.post}</h6>
              </div>
            </div>

            <div className="chefCardBottom text-center d-flex justify-content-center mt-2">
              <div className="iconDiv fs-5">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className="iconDiv fs-5">
                <FontAwesomeIcon icon={faTwitter} />
              </div>{" "}
              <div className="iconDiv fs-5">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
