import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProductsPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <TopBar />
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow-1">

        {/* Hero Section */}
        <section className="hero-section text-center py-5">
          <div className="container">
            <h1 className="fw-bold">Our Products</h1>
            <p className="lead text-muted">
              Fresh quality products for your family every day.
            </p>
          </div>
        </section>

        {/* Fresh Vegetables Section */}
        <section className="py-5">
          <div className="container">
            <h2 className="section-title text-center mb-5">🥬 Fresh Vegetables</h2>
            <div className="row g-4">

              <div className="col-md-3">
                <div className="product-card shadow-sm border rounded h-100 bg-white">
                  <img src="images/products/tomato.jpg" className="img-fluid rounded-top" alt="Tomato" />
                  <div className="p-3">
                    <h5>Tomato</h5>
                    <p className="text-muted small">Fresh Farm Tomato</p>
                    <a href="https://wa.me/919744021794" className="btn btn-success w-100" target="_blank" rel="noopener noreferrer">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="product-card shadow-sm border rounded h-100 bg-white">
                  <img src="images/products/onion.jpg" className="img-fluid rounded-top" alt="Onion" />
                  <div className="p-3">
                    <h5>Onion</h5>
                    <p className="text-muted small">Premium Quality</p>
                    <a href="https://wa.me/919744021794" className="btn btn-success w-100" target="_blank" rel="noopener noreferrer">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="product-card shadow-sm border rounded h-100 bg-white">
                  <img src="images/products/potato.jpg" className="img-fluid rounded-top" alt="Potato" />
                  <div className="p-3">
                    <h5>Potato</h5>
                    <p className="text-muted small">Fresh Stock</p>
                    <a href="https://wa.me/919744021794" className="btn btn-success w-100" target="_blank" rel="noopener noreferrer">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="product-card shadow-sm border rounded h-100 bg-white">
                  <img src="images/products/carrot.jpg" className="img-fluid rounded-top" alt="Carrot" />
                  <div className="p-3">
                    <h5>Carrot</h5>
                    <p className="text-muted small">Fresh Daily</p>
                    <a href="https://wa.me/919744021794" className="btn btn-success w-100" target="_blank" rel="noopener noreferrer">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Groceries Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="section-title text-center mb-5">🛒 Grocery Items</h2>
            <div className="row g-4">

              <div className="col-md-3">
                <div className="product-card shadow-sm border rounded h-100 bg-white">
                  <img src="images/products/rice.jpg" className="img-fluid rounded-top" alt="Rice" />
                  <div className="p-3">
                    <h5>Rice</h5>
                    <p className="text-muted small">Premium Rice</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="product-card shadow-sm border rounded h-100 bg-white">
                  <img src="images/products/spices.jpg" className="img-fluid rounded-top" alt="Kerala Spices" />
                  <div className="p-3">
                    <h5>Kerala Spices</h5>
                    <p className="text-muted small">Fresh Spices</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="product-card shadow-sm border rounded h-100 bg-white">
                  <img src="images/products/coconut-oil.jpg" className="img-fluid rounded-top" alt="Coconut Oil" />
                  <div className="p-3">
                    <h5>Coconut Oil</h5>
                    <p className="text-muted small">Quality Brands</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="product-card shadow-sm border rounded h-100 bg-white">
                  <img src="images/products/snacks.jpg" className="img-fluid rounded-top" alt="Snacks" />
                  <div className="p-3">
                    <h5>Snacks</h5>
                    <p className="text-muted small">Biscuits & Chips</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Dairy Section */}
        <section className="py-5">
          <div className="container">
            <h2 className="section-title text-center mb-5">🥛 Milk & Dairy</h2>
            <div className="row g-4">

              <div className="col-md-4">
                <div className="product-card shadow-sm border rounded h-100 bg-white">
                  <img src="images/products/milk.jpg" className="img-fluid rounded-top" alt="Fresh Milk" />
                  <div className="p-3">
                    <h5>Fresh Milk</h5>
                    <p className="text-muted small">Available Daily</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card shadow-sm border rounded h-100 bg-white">
                  <img src="images/products/curd.jpg" className="img-fluid rounded-top" alt="Curd" />
                  <div className="p-3">
                    <h5>Curd</h5>
                    <p className="text-muted small">Fresh Daily</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card shadow-sm border rounded h-100 bg-white">
                  <img src="images/products/butter.jpg" className="img-fluid rounded-top" alt="Butter" />
                  <div className="p-3">
                    <h5>Butter</h5>
                    <p className="text-muted small">Premium Brands</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Dry Fish Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="section-title text-center mb-5">🐟 Dry Fish</h2>
            <div className="row g-4">

              <div className="col-md-4">
                <div className="product-card shadow-sm border rounded h-100 bg-white">
                  <img src="images/products/dry-fish.jpg" className="img-fluid rounded-top" alt="Premium Dry Fish" />
                  <div className="p-3">
                    <h5>Premium Dry Fish</h5>
                    <p className="text-muted small">Traditional Kerala Style</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card shadow-sm border rounded h-100 bg-white">
                  <img src="images/products/anchovy.jpg" className="img-fluid rounded-top" alt="Dry Anchovy" />
                  <div className="p-3">
                    <h5>Dry Anchovy</h5>
                    <p className="text-muted small">Fresh Stock</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card shadow-sm border rounded h-100 bg-white">
                  <img src="images/products/prawns.jpg" className="img-fluid rounded-top" alt="Dry Prawns" />
                  <div className="p-3">
                    <h5>Dry Prawns</h5>
                    <p className="text-muted small">Premium Quality</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5 text-center">
          <div className="container">
            <h2>Need Home Delivery?</h2>
            <p className="text-muted">Call or WhatsApp us to place your order.</p>
            <a
              href="https://wa.me/919744021794"
              className="btn btn-success btn-lg rounded-pill px-4 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-whatsapp me-2"></i> WhatsApp Order
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}