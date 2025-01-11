// import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>Koin</span><span className="logo-highlight">X</span>
        <sup>™</sup>
      </div>
      <ul className="nav-links">
        <li><a href="#crypto-taxes">Crypto Taxes</a></li>
        <li><a href="#free-tools">Free Tools</a></li>
        <li><a href="#resource-center">Resource Center</a></li>
      </ul>
      <button className="get-started">Get Started</button>
    </nav>
  );
};

export default Navbar;
