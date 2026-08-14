import React, { useEffect } from 'react';

export default function Statistics() {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    if (counters.length > 0) {
      const animateCounter = (counter) => {
        const target = parseInt(counter.dataset.target, 10);
        const speed = 200;

        const update = () => {
          const current = parseInt(counter.innerText, 10) || 0;
          const increment = Math.ceil(target / speed);

          if (current < target) {
            counter.innerText = Math.min(current + increment, target);
            requestAnimationFrame(update);
          } else {
            counter.innerText = target.toLocaleString();
          }
        };

        update();
      };

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.5
      });

      counters.forEach(counter => observer.observe(counter));
    }
  }, []);

  return (
    <section className="stats-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3">
            <div className="counter-box">
              <h2
                className="counter"
                data-target="30"
              >
                0
              </h2>
              <p>Years of Service</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="counter-box">
              <h2
                className="counter"
                data-target="1500"
              >
                0
              </h2>
              <p>Happy Families</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="counter-box">
              <h2
                className="counter"
                data-target="800"
              >
                0
              </h2>
              <p>Products Available</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="counter-box">
              <h2
                className="counter"
                data-target="365"
              >
                0
              </h2>
              <p>Days Open Every Year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}