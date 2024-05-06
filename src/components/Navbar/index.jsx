import React from "react";
import Logo from "../../Assest/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="logo" draggable="false" />
        </div>
        <div className="navbar-items">
          <a href="/">Home</a>
          <a href="#contact">Freelancer</a>
          <a href="#contact">Contact</a>
          <a href="#tech">Tech Pro</a>
          <a href="#experince">Experince Pro</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
