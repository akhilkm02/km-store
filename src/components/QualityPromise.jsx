import React from 'react';

export default function QualityPromise() {
  return (
    <section className="quality-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <span className="section-subtitle">
              Our Promise
            </span>
            <h2 className="section-title">
              Freshness You Can Trust
            </h2>
            <p>
              Every day we carefully select vegetables,
              fruits, dairy products and grocery items so
              your family always receives quality products.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="mb-3">
                <i className="bi bi-check2-circle text-success me-2"></i>
                Fresh vegetables every morning
              </li>
              <li className="mb-3">
                <i className="bi bi-check2-circle text-success me-2"></i>
                Premium Kerala spices
              </li>
              <li className="mb-3">
                <i className="bi bi-check2-circle text-success me-2"></i>
                Quality dairy products
              </li>
              <li className="mb-3">
                <i className="bi bi-check2-circle text-success me-2"></i>
                Clean and hygienic store
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <img
              src="https://kmstoreirulam.wordpress.com/wp-content/uploads/2020/04/banana-1.jpg"
              className="img-fluid rounded-4 shadow-lg"
              alt="Fresh Products"
            />
          </div>
        </div>
      </div>
    </section>
  );
}