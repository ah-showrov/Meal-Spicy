import React from "react";
import "./Header.css";
import { Nav, Navbar, Button } from "react-bootstrap";
import logo from "../../../images/Logo (2).png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className=" nav-container container" expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="180"
          height="60"
          className="d-inline-block align-top"
        />{" "}
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="ms-auto my-2 my-lg-0 d-flex align-items-center pt-2 "
          style={{ maxHeight: "240px" }}
          navbarScroll
        >
          <Nav.Link as={Link} to="/home" className="mt-1 text-dark">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/services" className="mt-1 text-dark">
            Services
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className=" mt-1 text-dark">
            Contact
          </Nav.Link>

          <Button className="btn-style  bg-transparent text-dark border-danger ms-3 mt-1">
            {" "}
            Login
          </Button>
          <Button className="btn-style  bg-danger ms-3 mt-1  border-0">
            {" "}
            Sign up
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
