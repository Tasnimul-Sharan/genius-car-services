import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [name, setName] = useState("");

  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (loading || updating) {
    return <Loading />;
  }

  if (user) {
    console.log(user, "user");
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    // alert('Updated profile');
    console.log("updated profile");
    navigate("/home");
  };
  return (
    <div className="container w-50 text-start">
      <h1>Please register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            // onBlur={handleEmailBlur}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            // onBlur={handlePasswordBlur}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group
          onClick={() => setAgree(!agree)}
          //   className="mb-3"
          controlId="formBasicCheckbox"
        >
          <Form.Check
            className={agree ? "" : "text-danger"}
            type="checkbox"
            label="Accept turms and conditions !"
          />
        </Form.Group>
        <Button disabled={!agree} variant="dark text-white" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="text-danger text-decoration-none">
          Please Login
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Register;
