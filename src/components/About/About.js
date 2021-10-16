import React from "react";
import "./About.css";
import image1 from "../../images/Image/aboutImg1.png";
import image2 from "../../images/Image/aboutImg2.png";
import image3 from "../../images/Image/aboutImg3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faTruck } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
const About = () => {
  return (
    <div className="container my-5">
      <h2 className="">Why you choose us </h2>
      <p className="text-secondary ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam <br />{" "}
        nobis possimus quo sapiente culpa nam et perferendis libero enim omnis.
      </p>
      <div className=" d-md-flex">
        <div className="aboutCard mx-2 ">
          <div className="aboutImgDiv ">
            <img className="aboutImage" src={image1} alt="" />
          </div>
          <div className="mt-3 d-flex ps-2">
            <div>
              <FontAwesomeIcon className="fs-3 text-danger me-2" icon={faBus} />
            </div>
            <div>
              <h5>Fast Delivery</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, quae?
              </p>
            </div>
          </div>
        </div>
        <div className="aboutCard mx-2">
          <div className="aboutImgDiv  ">
            <img className="aboutImage" src={image3} alt="" />
          </div>
          <div className="mt-3 d-flex ps-2 ">
            <div>
              <FontAwesomeIcon
                className="fs-3 text-danger me-2"
                icon={faBell}
              />
            </div>
            <div>
              <h5>A good auto responder </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, quae?
              </p>
            </div>
          </div>
        </div>
        <div className="aboutCard mx-2">
          <div className="aboutImgDiv  ">
            <img className="aboutImage" src={image2} alt="" />
          </div>
          <div className="mt-3 d-flex ps-2">
            <div>
              <FontAwesomeIcon
                className="fs-3 text-danger me-2"
                icon={faTruck}
              />
            </div>
            <div>
              <h5>Home Delivery</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, quae?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
