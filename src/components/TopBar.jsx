import React from 'react';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <span>
              <i className="bi bi-telephone-fill"></i> +91 97440 21794
            </span>
            <span className="ms-4">
              <i className="bi bi-clock-fill"></i> Open Daily : 8 AM - 10 PM
            </span>
          </div>
          <div className="col-lg-6 text-end d-none d-lg-block">
            <span>
              <i className="bi bi-truck"></i> Free Home Delivery Around Irulam
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}