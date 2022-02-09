import React from "react";
import { Button, Form } from "react-bootstrap";
import "./LogIn.css";
const LogIn = () => {
  return (
    <div className="login">
      <Form className="w-50  p-5">
        <h1 className="display-5 text-center text-primary">Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter user name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default LogIn;
