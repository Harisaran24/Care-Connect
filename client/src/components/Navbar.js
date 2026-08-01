import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      
      <ul className="nav-links">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/beneficiaries" className="nav-link">Beneficiaries</Link></li>
        <li className="nav-item"><Link to="community" className="nav-link">Community</Link></li>
        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        <li className="nav-item"><Link to="/donate" className="nav-link">Donate</Link></li>
      </ul>
    </nav>

  );
}

export default Navbar;
