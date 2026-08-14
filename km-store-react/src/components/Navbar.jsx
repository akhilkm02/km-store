import React, { useState } from 'react';

export default function Navbar() {
  // State to track whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#home" onClick={closeNavbar}>
          <img src="/images/logo.png" height="55" alt="KM Store Logo" />
        </a>

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
              <a className="nav-link active" href="#home" onClick={closeNavbar}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products" onClick={closeNavbar}>Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery" onClick={closeNavbar}>Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeNavbar}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeNavbar}>Contact</a>
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