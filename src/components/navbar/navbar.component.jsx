import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./navbar.styles.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const openMenu = () => {
    setToggleMenu(true);
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#">
          Portfo<span>lio.</span>
        </a>
      </div>
      <ul className="app__navbar-links">
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
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color="#fff" fontSize={27} onClick={openMenu} />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={closeMenu}
              />
              <ul className="app__navbar-smallscreen_links">
                <li>
                  <a href="#home" onClick={closeMenu}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={closeMenu}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={closeMenu}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#skills" onClick={closeMenu}>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={closeMenu}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#certificates" onClick={closeMenu}>
                    Certificates
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={closeMenu}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
