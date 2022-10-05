import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./Navbar.css";
import { Button } from "./Button";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img className="clg-logo" src="logo.png" alt="VVIT" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {/* side navigation bar mobile responsive */}
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/dashboard"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Dashboard
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/publications"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Publications <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li>
            <Link
              to="/login"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
};

export default Navbar;
