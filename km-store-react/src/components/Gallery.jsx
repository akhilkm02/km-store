import React from 'react';

export default function Gallery() {
  return (
    <section className="py-5 bg-light" id="gallery">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">
            Gallery
          </span>
          <h2 className="section-title">
            A Look Inside KM Store
          </h2>
          <p className="text-muted">
            Fresh products, friendly service and a welcoming shopping experience.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <img
              src="https://kmstoreirulam.wordpress.com/wp-content/uploads/2020/04/long-view-2.jpg"
              className="img-fluid rounded-4 shadow gallery-img"
              alt="KM Store Front"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://kmstoreirulam.wordpress.com/wp-content/uploads/2020/04/shopinside-1.jpg"
              className="img-fluid rounded-4 shadow gallery-img"
              alt="Inside Store"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://kmstoreirulam.wordpress.com/wp-content/uploads/2025/06/image.png"
              className="img-fluid rounded-4 shadow gallery-img"
              alt="Store Display"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://kmstoreirulam.wordpress.com/wp-content/uploads/2020/04/banana-1.jpg"
              className="img-fluid rounded-4 shadow gallery-img"
              alt="Bananas"
            />
          </div>
          <div className="col-md-4">
            <img
              src="/images/vegitables.jpg"
              className="img-fluid rounded-4 shadow gallery-img"
              alt="Vegetables"
            />
          </div>
          <div className="col-md-4">
            <img
              src="/images/pulses.jpg"
              className="img-fluid rounded-4 shadow gallery-img"
              alt="Fresh Grocery"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
