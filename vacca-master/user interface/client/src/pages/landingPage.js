import React from "react";
import VaccineImg from "../images/ImageForNews_711529_16506313410777451.jpg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Signup from "./signup";

function LandingPage() {
  return (
    <>
      <img
        src={VaccineImg}
        alt="langing page"
        width="100%"
        height="650px"
        style={{ position: "relative", overflow: "hidden" }}
      />
      <div
        style={{
          overflow: "hidden",
          position: "absolute",
          top: "10px",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          paddingLeft: "30px",
          paddingRight: "50px",
        }}>
        <div>
          <h3 style={{ color: "#003d99" }}>Vaccination</h3>
        </div>
        <div style={{ display: "flex", gap: "10px", overflow: "hidden" }}>
          <Link to="/login">
            <Button>Login</Button>
            
          </Link>
          <Button href="http://localhost:3006/">Admin Login</Button>
          
        </div>
      </div>

      <div
        style={{
          overflow: "hidden",
          position: "absolute",
          top: "150px",
          paddingLeft: "30px",
          width: "600px",
        }}>
        <p style={{ fontSize: "80px" }}>Get Vaccinated</p>
        <p style={{ fontSize: "80px" }}>Stay Safe</p>
      </div>

      
      <div
        style={{
          overflow: "hidden",
          position: "absolute",
          top: "150px",
          right: "50px",
          width: "50%",
        }}>
        <Signup/>
      </div>
    </>
  );
}

export default LandingPage;
