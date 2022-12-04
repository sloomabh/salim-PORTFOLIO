import React from "react";
import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="max-width-nav">
        <div className="logo">
          <a href="#">
            Portfo<span>lio.</span>
          </a>
        </div>
        <ul className="menu">
          <li>
            <a href="#home" className="menu-btn">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="menu-btn">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="menu-btn">
              Services
            </a>
          </li>

          <li>
            <a href="#skills" className="menu-btn">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="menu-btn">
              Projects
            </a>
          </li>
          <li>
            <a href="#certificates" className="menu-btn">
              Certificates
            </a>
          </li>
          <li>
            <a href="#contact" className="menu-btn">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
