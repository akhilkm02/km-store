import React from 'react';

export default function FeaturedProducts() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">
            Featured Products
          </span>
          <h2 className="section-title">
            Customer Favorites
          </h2>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="product-card">
              <span className="badge bg-danger product-badge">
                Fresh
              </span>
              <img
                src="https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500"
                className="img-fluid"
                alt="Fresh Tomatoes"
              />
              <div className="p-3">
                <h5>Fresh Tomatoes</h5>
                <p className="text-muted">
                  Farm Fresh
                </p>
                <a
                  href="https://wa.me/919744021794"
                  className="btn btn-success w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i> Order Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="product-card">
              <img
                src="/km-store//images/fresh-bananas.jpg"
                className="img-fluid"
                alt="Fresh Bananas"
              />
              <div className="p-3">
                <h5>Fresh Bananas</h5>
                <p className="text-muted">
                  Locally Sourced
                </p>
                <a
                  href="https://wa.me/919744021794"
                  className="btn btn-success w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i> Order Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="product-card">
              <img
                src="/km-store//images/kerala-spices.jpg"
                className="img-fluid"
                alt="Kerala Spices"
              />
              <div className="p-3">
                <h5>Kerala Spices</h5>
                <p className="text-muted">
                  Premium Quality
                </p>
                <a
                  href="https://wa.me/919744021794"
                  className="btn btn-success w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i> Order Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="product-card">
              <img
                src="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500"
                className="img-fluid"
                alt="Fresh Milk & Dairy"
              />
              <div className="p-3">
                <h5>Fresh Milk & Dairy</h5>
                <p className="text-muted">
                  Daily Stock
                </p>
                <a
                  href="https://wa.me/919744021794"
                  className="btn btn-success w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i> Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
