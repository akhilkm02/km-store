import React, { useEffect, useRef } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Offers from './components/Offers';
import FeaturedProducts from './components/FeaturedProducts';
import WhyChoose from './components/WhyChoose';
import About from './components/About';
import Statistics from './components/Statistics';
import QualityPromise from './components/QualityPromise';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hero-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Animated Text Column */}
            <div ref={textRef} className="col-lg-6 hero-fade-in">
              <span className="badge bg-success fs-6 px-3 py-2">🌿 Since 1996</span>
              <h1 className="display-3 fw-bold mt-4">
                Fresh Grocery <span className="text-success">Every Day</span>
              </h1>
              <p className="lead mt-4 text-muted">
                Your trusted neighbourhood grocery store in Irulam. Fresh vegetables, premium dry fish,
                dairy products, Kerala spices, and household essentials.
              </p>
            </div>

            {/* Animated Image Column */}
            <div ref={imageRef} className="col-lg-6 hero-fade-in-delayed">
              <img
                src="https://kmstoreirulam.wordpress.com/wp-content/uploads/2025/06/image.png"
                className="img-fluid hero-image rounded-4 shadow-lg"
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </section>

      <Categories />
      <Offers />
      <FeaturedProducts />
      <WhyChoose />
      <About />
      <Statistics />
      <QualityPromise />
      <Gallery />
      <Testimonials />
      <Contact />

      <Footer />

      {/* Animation Styles */}
      <style>{`
        .hero-fade-in, .hero-fade-in-delayed {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out;
        }

        .hero-fade-in.hero-visible,
        .hero-fade-in-delayed.hero-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-fade-in-delayed {
          transition-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}

export default App;