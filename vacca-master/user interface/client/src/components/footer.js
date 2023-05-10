import React from "react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMessage,
  AiFillYoutube,
  AiFillTwitterSquare,
  AiFillPhone,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="fclm">
        <div className="fotterclm">
          <h2 style={{ marginLeft: "27px" }}> Mehedi Hassan </h2>{" "}
          <h5 style={{ marginLeft: "27px" }}> Sofware Engineer </h5>{" "}
          <h5>
            {" "}
            <AiOutlineMail /> mehedi132435 @gmail.com{" "}
          </h5>{" "}
          <h5>
            {" "}
            <AiOutlineHome /> 1720 Adi Janglalia Gazipur Dhaka{" "}
          </h5>{" "}
          <h5 style={{ marginLeft: "27px" }}> Bangladesh </h5>{" "}
          <a style={{ color: "white" }} href="#">
            {" "}
            <AiFillFacebook />{" "}
          </a>{" "}
          <a style={{ color: "yellow" }} href="#">
            {" "}
            <AiFillInstagram />{" "}
          </a>{" "}
          <a style={{ color: "blue" }} href="#">
            {" "}
            <AiFillLinkedin />{" "}
          </a>{" "}
          <a style={{ color: "green" }} href="#">
            {" "}
            <AiFillMessage />{" "}
          </a>{" "}
          <a style={{ color: "red" }} href="#">
            {" "}
            <AiFillYoutube />{" "}
          </a>{" "}
          <a style={{ color: "gray" }} href="#">
            {" "}
            <AiFillTwitterSquare />{" "}
          </a>
        </div>{" "}
      </div>
      <div className="fclm">
        <div className="fotterclm">
          <h2 style={{ marginLeft: "40px" }}> Helpline </h2>{" "}
          <h5 style={{ marginLeft: "40px" }}>
            {" "}
            <AiFillPhone /> 34234235345435345{" "}
          </h5>{" "}
          <h5 style={{ marginLeft: "40px" }}>
            {" "}
            <AiFillPhone /> 33423753453534536{" "}
          </h5>{" "}
          <h5 style={{ marginLeft: "40px" }}>
            {" "}
            <AiFillPhone /> 76868987656756756{" "}
          </h5>{" "}
          <h5 style={{ marginLeft: "40px" }}>
            {" "}
            <AiFillPhone /> 34234238979797987{" "}
          </h5>{" "}
          <h5 style={{ marginLeft: "40px" }}>
            {" "}
            <AiFillPhone /> 89734232312312323{" "}
          </h5>
        </div>{" "}
      </div>
      <div className="fclm">
        <div className="fotterclm">
          <h1> Registration for the vaccination </h1>{" "}
          <Link to="/vaccines">
            <button style={{ margin: "10%" }}> Register Now </button>{" "}
          </Link>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Footer;
