import React from 'react';

export default function WhyChoose() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">
            Why Choose Us
          </span>
          <h2 className="section-title">
            Trusted by Families Since 1996
          </h2>
          <p className="text-muted">
            Quality products, friendly service and affordable prices have made
            KM Store a trusted name in Irulam for nearly three decades.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="feature-card text-center">
              <div className="feature-icon">
                <i className="bi bi-basket2-fill"></i>
              </div>
              <h4>Fresh Every Day</h4>
              <p>
                Fresh vegetables, fruits and dairy products arrive every
                morning.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature-card text-center">
              <div className="feature-icon">
                <i className="bi bi-truck"></i>
              </div>
              <h4>Home Delivery</h4>
              <p>
                Convenient doorstep delivery for customers around Irulam.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature-card text-center">
              <div className="feature-icon">
                <i className="bi bi-patch-check-fill"></i>
              </div>
              <h4>Quality Products</h4>
              <p>
                Carefully selected groceries, spices and household
                essentials.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature-card text-center">
              <div className="feature-icon">
                <i className="bi bi-people-fill"></i>
              </div>
              <h4>Friendly Service</h4>
              <p>
                A local family business built on trust and customer care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
