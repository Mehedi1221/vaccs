import Nabar from "../components/Navbar";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/userLogin", {
        mail: email,
        password: password,
      })
      .then((res) => {
        if (res.data.message === "Login Succesfull") {
          localStorage.setItem('myData', res.config.data);
          navigate("/home");
        }else{
          alert(res.data.message);
        }
      });
  };
  return (
    <div style={{ width: "50%", margin: "auto", marginTop: "30px" }}>
      <h1 style={{ marginTop: "150px", marginBottom: "20px" }}>Login Here</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </Form.Group>

        <Button
          style={{ float: "right" }}
          variant="primary"
          type="submit"
          onClick={handleSubmit}>
          Submit
        </Button>

        <div style={{ marginTop: "50px" }}>
          {" "}
          <a
            href="http://localhost:3000/"
            >
            Go to Signup. If you haven't Signup already
          </a>
        </div>
      </Form>
    </div>
  );
}

export default Login;
