import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
    
      <div className="brand">
        <h2>Open AI 3.0</h2>
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-links">
            <ul className="nav-list">
              <li className="nav-list-items">
                <NavLink to="/" className="nav-links">
                  Home
                </NavLink>
              </li>
              <li className="nav-list-items">
                <NavLink to="/chatgpt" className="nav-links">
                  Chat Assistant
                </NavLink>
              </li>
              <li className="nav-list-items">
                <NavLink to="/dalle" className="nav-links">
                  Image Generator
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
