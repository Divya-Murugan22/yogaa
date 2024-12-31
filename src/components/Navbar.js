import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assuming your styles are in Navbar.css
import logo from "../components/images/logo.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Use the imported logo image */}
        <div className="navbar-logo">
        <img src={logo}alt="Logo" className="logo" height={100} width={100} />
        <h1 className="webtitle">RISHIKUL</h1>
      </div>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li> {/* Link to /contact */}
      </ul>
      <Link to="/pricing">
        <button className="navbar-button">Become a Member</button>
      </Link>
      
    </nav>
  );
}

export default Navbar;
