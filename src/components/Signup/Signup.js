import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="login-main-Container">
      <Form className="form-container mx-auto mt-5">
        {/* <h3 className="mb-3">Sign up</h3> */}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            className="loginInput border-top-0 border-end-0 border-start-0 rounded-0"
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="loginInput border-top-0 border-end-0 border-start-0 rounded-0"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className="loginInput border-top-0  border-end-0 border-start-0 rounded-0"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button className="loginBtn  mt-4" variant="danger" type="Sign up">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
