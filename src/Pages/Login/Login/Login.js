import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  //   const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefaulf();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };

  //   const navigateToRegister = (event) => {
  //     navigate("/register");
  //   };

  return (
    <div onSubmit={handleSubmit} className="container w-50 text-start">
      <h1 className="text-center mt-2">Please Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="dark text-white" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        new to Genius Car?{" "}
        <Link
          to="/register"
          className="text-danger text-decoration-none"
          //   onClick={navigateToRegister}
        >
          Please Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
