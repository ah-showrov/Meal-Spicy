import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleRight,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contactBannerDiv ">
        <div className="contactLinkDiv">
          <div className="verticalDiv"></div>
          <div>
            <h1 className="contactText">Contact</h1>
            <div className="d-flex align-items-center">
              <Link to="/home" className="contactLinkStyle">
                Home
              </Link>{" "}
              <FontAwesomeIcon
                className="contactArrowStyle"
                icon={faAngleRight}
              />
              <Link to="/contact" className="contactLinkStyle">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container contact-container ">
        <div className="contact-column">
          <div className=" conIconDiv clockDiv">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <p className="text-center  mt-4 fw-bold">9:00 AM to 12:00 AM</p>
          <p className="text-center fw-bold">(Saturday to Thursday)</p>
        </div>
        <div className="contact-column">
          <div className=" conIconDiv locationDiv">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <p className="text-center  mt-4 fw-bold">
            Br1. 28/A Street, New York, USA
          </p>
          <p className="text-center  fw-bold">
            Br2. 31/B Street, Washington, USA
          </p>
        </div>
        <div className="contact-column">
          <div className=" conIconDiv phoneDiv">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <p className="text-center mt-4  fw-bold">(Branch1) +534 765 876</p>
          <p className="text-center  fw-bold">(Branch2) +234 534 433</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
