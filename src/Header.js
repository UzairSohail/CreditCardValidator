import React from "react";
import "./Header.css";
import logo from "./images/logo.png";

const Header = () => {
  return (
    <div className="headerWrapper">
      <div class="topnav">
        <img src={logo} className="homeLogo" alt="logo png" />
        <a class="active" href="#home">
          Home
        </a>
        <a href="#">News</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </div>
    </div>
  );
};
export default Header;
