import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GalleryPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <TopBar />
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow-1">

        {/* Hero / Header Section */}
        <section className="hero-section text-center py-5">
          <div className="container">
            <h1 className="fw-bold">Our Gallery</h1>
            <p className="lead text-muted">
              A glimpse of KM Store Irulam and the products we proudly offer.
            </p>
          </div>
        </section>

        {/* Gallery Grid Section */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4">

              <div className="col-lg-4 col-md-6">
                <div className="gallery-card">
                  <img
                    src="https://kmstoreirulam.wordpress.com/wp-content/uploads/2020/04/long-view-2.jpg"
                    className="img-fluid rounded shadow gallery-img"
                    alt="Store Long View"
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="gallery-card">
                  <img
                    src="https://kmstoreirulam.wordpress.com/wp-content/uploads/2025/06/image.png"
                    className="img-fluid rounded shadow gallery-img"
                    alt="KM Store Interior"
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="gallery-card">
                  <img
                    src="https://kmstoreirulam.wordpress.com/wp-content/uploads/2020/04/shopinside-1.jpg"
                    className="img-fluid rounded shadow gallery-img"
                    alt="Shop Inside"
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="gallery-card">
                  <img
                    src="https://kmstoreirulam.wordpress.com/wp-content/uploads/2020/04/banana-1.jpg"
                    className="img-fluid rounded shadow gallery-img"
                    alt="Fresh Produce"
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="gallery-card">
                  <img
                    src="/km-store/images/fresh-vegitables.jpg"
                    className="img-fluid rounded shadow gallery-img"
                    alt="Fresh Vegetables"
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="gallery-card">
                  <img
                    src="/km-store/images/podwer.jpg"
                    className="img-fluid rounded shadow gallery-img"
                    alt="Spices and Powders"
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="gallery-card">
                  <img
                    src="/km-store/images/snacks.jpg"
                    className="img-fluid rounded shadow gallery-img"
                    alt="Snacks"
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="gallery-card">
                  <img
                    src="/km-store/images/pulses.jpg"
                    className="img-fluid rounded shadow gallery-img"
                    alt="Pulses"
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="gallery-card">
                  <img
                    src="/km-store/images/spices.jpg"
                    className="img-fluid rounded shadow gallery-img"
                    alt="Kerala Spices"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Visit Section */}
        <section className="py-5 bg-light text-center">
          <div className="container">
            <h2>Visit KM Store Irulam</h2>
            <p className="lead text-muted mb-4">
              Fresh Groceries • Vegetables • Dairy • Dry Fish • Kerala Spices
            </p>
            <a
              href="https://wa.me/919744021794"
              className="btn btn-success btn-lg rounded-pill px-4 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-whatsapp me-2"></i> Order on WhatsApp
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}