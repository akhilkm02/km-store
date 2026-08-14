import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h4 className="text-white mb-3">
                KM Store Irulam
              </h4>
              <p>
                Serving the Irulam community since 1996 with fresh groceries,
                vegetables, dairy products, Kerala spices and household
                essentials.
              </p>
            </div>
            <div className="col-lg-4">
              <h5 className="text-white mb-3">
                Quick Links
              </h5>
              <ul className="list-unstyled footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className="text-white mb-3">
                Contact
              </h5>
              <p>
                📍 Irulam, Wayanad
              </p>
              <p>
                📞 +91 97440 21794
              </p>
              <p>
                🕘 8:00 AM – 10:00 PM
              </p>
            </div>
          </div>
          <hr className="border-secondary my-4" />
          <div className="text-center">
            <p className="mb-0">
              © 1996–2026 KM Store Irulam. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919744021794"
        className="floating-whatsapp"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

      {/* Floating Call Button */}
      <a
        href="tel:+919744021794"
        className="floating-call"
        aria-label="Call"
      >
        <i className="bi bi-telephone-fill"></i>
      </a>
    </>
  );
}