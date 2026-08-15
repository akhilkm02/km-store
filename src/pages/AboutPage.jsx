import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <TopBar />
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow-1 py-5">
        <div className="container">
          <h2 className="text-center mb-4">About KM Store Irulam</h2>
          <p className="text-center text-muted mb-5">
            Serving the Irulam community with quality and trust since 1996.
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="lead">
                Established in 1996, KM Store has been a trusted neighbourhood grocery destination in Irulam, Wayanad. We take pride in providing fresh vegetables, dairy products, authentic Kerala spices, and everyday household essentials to every family in our community.
              </p>
              <p className="text-muted">
                [Add more details about your store's history, mission, or values here later]
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}