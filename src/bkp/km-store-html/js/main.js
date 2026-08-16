/* ==========================================
   KM Store Irulam
   main.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Animated Counter
    ========================================== */

    const counters = document.querySelectorAll(".counter");

    if (counters.length > 0) {

        const animateCounter = (counter) => {

            const target = parseInt(counter.dataset.target);

            const speed = 200;

            const update = () => {

                const current = parseInt(counter.innerText);

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

        const observer = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    animateCounter(entry.target);

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.5
        });

        counters.forEach(counter => observer.observe(counter));

    }

    /* ==========================================
       Navbar Background on Scroll
    ========================================== */

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 80) {

                navbar.classList.add("navbar-scrolled");

            } else {

                navbar.classList.remove("navbar-scrolled");

            }

        });

    }

    /* ==========================================
       Smooth Scroll
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    /* ==========================================
       Product Card Hover Animation
    ========================================== */

    document.querySelectorAll(".product-card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-12px) scale(1.02)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    /* ==========================================
       Gallery Hover Effect
    ========================================== */

    document.querySelectorAll(".gallery-img").forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transform = "scale(1.05)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "scale(1)";

        });

    });

});


/* ==========================================
   Back To Top Button
========================================== */

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.className = "back-to-top";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================
   Current Year
========================================== */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* ==========================================
   Floating WhatsApp Animation
========================================== */

const whatsapp = document.querySelector(".floating-whatsapp");

if (whatsapp) {

    setInterval(() => {

        whatsapp.classList.toggle("pulse");

    }, 1500);

}


/* ==========================================
   Loading Screen (Optional)
========================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.classList.add("loader-hide");

    }

});