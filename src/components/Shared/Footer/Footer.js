import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
import { Button, Col, Row } from "react-bootstrap";
import logo from "../../../images/Logo (2).png";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="pt-5  mt-5">
      <Row md={4} xs={1} className="upperFooterDiv px-5 ">
        <Col>
          <div>
            <img className="" width="180" height="60" src={logo} alt="" />
          </div>
          <p className=" mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            deleniti exercitationem iure consequatur aliquid ut officiis
            eligendi? Temporibus, explicabo minima.
          </p>

          <div className="d-flex">
            <div className="iconDiv">
              <FontAwesomeIcon className="footerIcon" icon={faFacebookF} />
            </div>
            <div className="iconDiv">
              <FontAwesomeIcon className="footerIcon" icon={faTwitter} />
            </div>{" "}
            <div className="iconDiv">
              <FontAwesomeIcon className="footerIcon" icon={faInstagram} />
            </div>{" "}
            <div className="iconDiv">
              <FontAwesomeIcon className="footerIcon" icon={faYoutube} />
            </div>{" "}
          </div>

          {/*           <form className="footer-form mt-5 border bg-white  rounded-pill">
            <input
              className="email-field border-0 me-2"
              type="email"
              placeholder=" your email address "
            />
            <Button
              className="email-btn bg-danger text-white rounded-circle  border-0  "
              type="submit"
            >
              {<FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>}
            </Button>
          </form> */}
        </Col>
        <Col className="mt-4">
          <h4 className="text-danger mb-4">Services</h4>
          <ul className="footer-list">
            <li>Support</li>
            <li>
              <HashLink to="/home#about" className="footerLink">
                About
              </HashLink>
            </li>
            <li>
              <HashLink to="/home#chefs" className="footerLink">
                Chefs
              </HashLink>
            </li>
            <li>Blogs</li>
            <li>Privacy Policy</li>
          </ul>
        </Col>
        <Col className="mt-4">
          <h4 className="text-danger">Quick Links</h4>
          <ul className="footer-list">
            <li>
              <Link as={HashLink} to="/services" className="footerLink">
                Services
              </Link>
            </li>
            <li>Food Collection</li>
            <li>Online Order</li>
            <li>Blogs</li>
            <li>
              <Link to="/contact" className="footerLink">
                Contact{" "}
              </Link>{" "}
            </li>
          </ul>
        </Col>
        <Col className="mt-4">
          <h4 className="text-danger">Contact Us</h4>
          <ul className="footer-list">
            <li>+1 1634 53 759</li>
            <li>+5 1554 56 858</li>
            <li>info@mealspicy.com</li>
            <li>hello@mealspicy.com</li>
            <li>Br1. 26/B Street, New York, USA</li>
          </ul>
        </Col>
      </Row>
      <div className="lowerFooterDiv mt-4">
        <p className="text-center">
          <small>Copyright @2021. All Rights Reserved By meal spicy</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
