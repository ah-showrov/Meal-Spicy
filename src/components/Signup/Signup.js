import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import "./Signup.css";

const Signup = () => {
  const { handleUserRegistration, error } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserInfo = { ...userInfo };
    newUserInfo[field] = value;
    setUserInfo(newUserInfo);
  };

  const handleOnSubmit = (e) => {
    handleUserRegistration(userInfo.email, userInfo.password);

    e.preventDefault();
  };

  return (
    <div className="login-main-Container">
      <Form onSubmit={handleOnSubmit} className="form-container mx-auto mt-5">
        {/* <h3 className="mb-3">Sign up</h3> */}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            name="name"
            onBlur={handleOnBlur}
            className="loginInput border-top-0 border-end-0 border-start-0 rounded-0"
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            onBlur={handleOnBlur}
            className="loginInput border-top-0 border-end-0 border-start-0 rounded-0"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            onBlur={handleOnBlur}
            className="loginInput border-top-0  border-end-0 border-start-0 rounded-0"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button className="loginBtn  mt-4" variant="danger" type="Sign up">
          Submit
        </Button>
      </Form>
      <p>
        <small className="text-danger fw-bold"> {error} </small>
      </p>
    </div>
  );
};

export default Signup;
