import React from "react";
import VaccineImg from "../assets/images/corona .jpg";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const fsfsffsd = () => {
    axios
      .post("http://localhost:5000/api/adminLogin", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.message === "Login Succesfull") {
          navigate("/dashboard");
        } else {
          toast.error(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <ToastContainer />
      <img
        style={{ position: "relative" }}
        src={VaccineImg}
        alt="Vaccination"
        width="100%"
        height="700px"
      />

      <div
        style={{
          position: "absolute",
          top: "200px",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
        <h1 style={{ color: "black", fontFamily: "time" }}>Admin Login</h1>

        <Form noValidate>
          <Row className="mb-3">
            <Form.Group as={Col} md="39" controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="66" controlId="validationCustom03">
              <Form.Control
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type="text"
                placeholder="Password"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Password.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button onClick={fsfsffsd}>Submit</Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
