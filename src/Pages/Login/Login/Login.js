import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("sent email");
    } else {
      toast("please enter an email");
    }
  };
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (loading || sending) {
    return <Loading />;
  }

  if (user) {
    navigate(from, { replace: true });
  }
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefaulf();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="container w-50 text-start">
      <h1 className="text-center mt-2">Please Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
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
          <Form.Check type="checkbox" label="Accept turms and conditions !" />
        </Form.Group>
        <Button variant="dark text-white mx-auto d-block w-50" type="submit">
          Submit
        </Button>
      </Form>
      {errorElement}
      <p>
        new to Genius Car?{" "}
        <Link to="/register" className="text-primary text-decoration-none">
          Please Register
        </Link>
      </p>
      <p>
        forget password?{" "}
        <Button
          variant="link"
          className="text-primary text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </Button>
      </p>
      <SocialLogin />
      <ToastContainer />
    </div>
  );
};

export default Login;
