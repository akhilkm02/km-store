import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
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

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <a
          href="#top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '215px',
            right: '25px',
            zIndex: '1000',
            backgroundColor: '#343a40',
            color: '#ffffff',
            width: '55px',
            height: '55px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            textDecoration: 'none'
          }}
        >
          <i className="bi bi-arrow-up" style={{ color: '#ffffff' }}></i>
        </a>
      )}

      {/* Floating Call Button */}
      <a
        href="tel:+919744021794"
        className="floating-call"
        aria-label="Call"
        style={{
          position: 'fixed',
          bottom: '120px',
          right: '25px',
          zIndex: '1000',
          backgroundColor: '#0d6efd',
          color: '#ffffff',
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s ease'
        }}
      >
        <i className="bi bi-telephone-fill" style={{ color: '#ffffff' }}></i>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919744021794"
        className="floating-whatsapp"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          zIndex: '1000',
          backgroundColor: '#25d366',
          color: '#ffffff',
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s ease'
        }}
      >
        <i className="bi bi-whatsapp" style={{ color: '#ffffff' }}></i>
      </a>
    </>
  );
}