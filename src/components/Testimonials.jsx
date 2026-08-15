import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">
            Customer Reviews
          </span>
          <h2 className="section-title">
            What Our Customers Say
          </h2>
        </div>
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="testimonial-card">
              <div className="stars text-warning mb-3">
                ★★★★★
              </div>
              <p>
                "Excellent grocery store with fresh vegetables and friendly
                service. We always find everything we need."
              </p>
              <h6 className="mb-0">Local Customer</h6>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testimonial-card">
              <div className="stars text-warning mb-3">
                ★★★★★
              </div>
              <p>
                "Very good quality dry fish and Kerala spices. Highly
                recommended for everyday shopping."
              </p>
              <h6 className="mb-0">Regular Shopper</h6>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testimonial-card">
              <div className="stars text-warning mb-3">
                ★★★★★
              </div>
              <p>
                "Home delivery is quick and convenient. Great service from
                a trusted local store."
              </p>
              <h6 className="mb-0">Happy Family</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
