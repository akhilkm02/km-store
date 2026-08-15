import React from 'react';

export default function Categories() {
  return (
    <section className="py-5 bg-light">
        <div className="container">
            <div className="text-center mb-5">
                <span className="section-subtitle">
                    Shop By Category
                </span>
                <h2 className="section-title">
                    Everything You Need Under One Roof
                </h2>
                <p className="text-muted">
                    Fresh products selected every day for your family.
                </p>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-3">
                    <div className="category-card">
                        <img src="/km-store/images/vegitables.jpg"
                            className="img-fluid" alt="Fresh Vegetables" />
                        <div className="category-content">
                            <h5>Fresh Vegetables</h5>
                            <p>Farm fresh vegetables every morning.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="category-card">
                        <img src="https://kmstoreirulam.wordpress.com/wp-content/uploads/2020/04/banana-1.jpg"
                            className="img-fluid" alt="Fresh Fruits" />
                        <div className="category-content">
                            <h5>Fresh Fruits</h5>
                            <p>Seasonal fruits directly sourced.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="category-card">
                        <img src="/km-store/images/groceries.jpg"
                            className="img-fluid" alt="Groceries" />
                        <div className="category-content">
                            <h5>Groceries</h5>
                            <p>Rice, oil, spices and essentials.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="category-card">
                        <img src="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600"
                            className="img-fluid" alt="Milk & Dairy" />
                        <div className="category-content">
                            <h5>Milk & Dairy</h5>
                            <p>Milk, curd, butter and dairy products.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="category-card">
                        <img src="/km-store//images/dry-fish.jpg"
                            className="img-fluid" alt="Dry Fish" />
                        <div className="category-content">
                            <h5>Dry Fish</h5>
                            <p>Premium Kerala dry fish varieties.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="category-card">
                        <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600"
                            className="img-fluid" alt="Kerala Spices" />
                        <div className="category-content">
                            <h5>Kerala Spices</h5>
                            <p>Fresh spices with authentic aroma.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="category-card">
                        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600"
                            className="img-fluid" alt="Daily Essentials" />
                        <div className="category-content">
                            <h5>Daily Essentials</h5>
                            <p>Everything for your everyday needs.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="category-card">
                        <img src="/km-store//images/snacks.jpg"
                            className="img-fluid" alt="Snacks" />
                        <div className="category-content">
                            <h5>Snacks</h5>
                            <p>Biscuits, chocolates and more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
