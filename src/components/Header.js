import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {  useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./Header.css";
import img1 from "./img1.png";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const shouldRenderMenu = location.pathname === "/home";

  return (
    <>
      <nav className="header-container">
        <div className="Container center">
          <div className="ui fixed">
            <div className="header-content">
              <div className="hamburger-container" onClick={toggleMenu} disabled={!shouldRenderMenu}>
                <FontAwesomeIcon icon={faBars} />
              </div>
              <div className="logo-heading-container">
                <img src={img1} alt="Logo" className="logo" />
                <h2 style={{paddingTop: '20px'}}> Karnataka Election Results of 2023</h2>
              </div>
            </div>
            {/* <hr className="heading-line" /> */}
          </div>
        </div>
      </nav>
      {isMenuOpen && shouldRenderMenu && (
        <div className="menu">
          {/* Add your menu items here */}
          <ul>
            <li>
              <Link to="charts">
              <button className="btn btn-warning">Charts</button>
              </Link>
            </li>
            <li>
            <Link to="reports">
              <button className="btn btn-warning">Reports</button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;