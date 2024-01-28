import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MERAM
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Ana sayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              Hakkımızda
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links">
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;