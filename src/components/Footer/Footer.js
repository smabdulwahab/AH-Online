import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
export default function Footer() {
  return (
    <>
      <div className="footerMain">
        <div className="logo">
          <a href="#home">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="manu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="mailCol">
          <a href="info@ahonline.tech">info@ahonline.tech</a>
        </div>
      </div>
    </>
  );
}
