import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // State to track whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          <img src="/km-store//images/logo.png" height="55" alt="KM Store Logo" />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="menu"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links & Actions - controlled via dynamic CSS classes */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="menu">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" onClick={closeNavbar}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery" onClick={closeNavbar}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeNavbar}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeNavbar}>
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <a
              href="https://wa.me/919744021794"
              className="btn btn-success rounded-pill px-4 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}