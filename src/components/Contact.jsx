import React from 'react';

export default function Contact() {
  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <span className="section-subtitle">
              Visit Us
            </span>
            <h2 className="section-title">
              We'd Love to Welcome You
            </h2>
            <p className="mb-4">
              Visit KM Store Irulam for fresh groceries, vegetables, dairy
              products, dry fish and daily essentials.
            </p>
            <div className="contact-info mb-3">
              <i className="bi bi-geo-alt-fill text-success me-2"></i>
              Irulam – Kenichira Rd, Wayanad, Kerala 673596
            </div>
            <div className="contact-info mb-3">
              <i className="bi bi-telephone-fill text-success me-2"></i>
              +91 97440 21794
            </div>
            <div className="contact-info mb-4">
              <i className="bi bi-clock-fill text-success me-2"></i>
              Open Daily: 8:00 AM – 10:00 PM
            </div>
            <a
              href="https://wa.me/919744021794"
              className="btn btn-success btn-lg rounded-pill"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-whatsapp"></i> Order on WhatsApp
            </a>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.656292870703!2d76.19634764207603!3d11.749073456422261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5e3b9325f1a15%3A0x175e92bb528aa96e!2sKM%20STORE%20IRULAM!5e0!3m2!1sen!2sin!4v1752517572162!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
              title="KM Store Irulam Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
