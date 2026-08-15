import React from 'react';

export default function About() {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="https://kmstoreirulam.wordpress.com/wp-content/uploads/2020/04/shopinside-1.jpg"
              className="img-fluid rounded-4 shadow-lg"
              alt="Inside KM Store"
            />
          </div>
          <div className="col-lg-6">
            <span className="section-subtitle">
              About KM Store
            </span>
            <h2 className="section-title">
              Your Trusted Grocery Store in Irulam
            </h2>
            <p className="lead">
              Since 1996, KM Store has proudly served families in Irulam
              with quality groceries and everyday essentials.
            </p>
            <p>
              From fresh vegetables and fruits to dairy products,
              dry fish, Kerala spices, rice, cooking essentials and
              household products, we bring everything your family needs
              under one roof.
            </p>
            <p>
              We believe in honest pricing, quality products and
              friendly customer service.
            </p>
            <div className="row mt-4">
              <div className="col-6">
                <div className="mini-feature">
                  <i className="bi bi-check-circle-fill text-success"></i>{' '}
                  Fresh Products
                </div>
              </div>
              <div className="col-6">
                <div className="mini-feature">
                  <i className="bi bi-check-circle-fill text-success"></i>{' '}
                  Affordable Prices
                </div>
              </div>
              <div className="col-6 mt-3">
                <div className="mini-feature">
                  <i className="bi bi-check-circle-fill text-success"></i>{' '}
                  Free Delivery
                </div>
              </div>
              <div className="col-6 mt-3">
                <div className="mini-feature">
                  <i className="bi bi-check-circle-fill text-success"></i>{' '}
                  Friendly Service
                </div>
              </div>
            </div>
            <div className="mt-5">
              <a
                href="#about"
                className="btn btn-success btn-lg rounded-pill"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}