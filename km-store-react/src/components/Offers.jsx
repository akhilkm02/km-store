import React from 'react';

export default function Offers() {
  return (
    <section className="offer-banner py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-3">
            <div className="offer-box">
              <span className="offer-icon">
                🥬
              </span>
              <h5>Fresh Vegetables</h5>
              <p>Daily Fresh Arrival</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="offer-box">
              <span className="offer-icon">
                🥛
              </span>
              <h5>Milk & Curd</h5>
              <p>Available Every Morning</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="offer-box">
              <span className="offer-icon">
                🐟
              </span>
              <h5>Dry Fish</h5>
              <p>Premium Kerala Quality</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="offer-box">
              <span className="offer-icon">
                🚚
              </span>
              <h5>Free Delivery</h5>
              <p>Nearby Irulam Area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
