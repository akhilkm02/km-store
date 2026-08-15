import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const phoneNumber = "919744021794";
    const text = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <TopBar />
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow-1 py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center text-muted mb-5">
            We'd love to hear from you. Reach out or visit our store in Irulam!
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="p-4 border rounded shadow-sm bg-white h-100">
                <h4 className="mb-4 text-success">Store Information</h4>
                <p className="mb-3">
                  <strong>📍 Address:</strong> Irulam, Wayanad, Kerala
                </p>
                <p className="mb-3">
                  <strong>📞 Phone / WhatsApp:</strong> +91 97440 21794
                </p>
                <p className="mb-3">
                  <strong>🕘 Hours:</strong> 8:00 AM – 10:00 PM (Open 365 days)
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <form onSubmit={sendToWhatsApp} className="p-4 border rounded shadow-sm bg-white">
                <h4 className="mb-4 text-success">Send an Inquiry</h4>

                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message / Items Needed</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-success w-100">
                  <i className="bi bi-whatsapp me-2"></i> Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}