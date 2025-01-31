import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav container-fluid">
        <div className="nav-logo">
          <a href="#home">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          ☰
        </button>
        <ul className={`nav-manu ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li className="nav-contact">
            {" "}
            <a href="#contact">Contact </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
