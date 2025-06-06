// Valeri Franco Project Specific JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Initialize particles (reuse from main script)
  if (typeof particlesJS !== "undefined") {
    window.particlesJS("particles-js", {
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: ["#4294E3", "#8F12FD", "#00d4ff"],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.15,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.05,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#4294E3",
          opacity: 0.15,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.3,
            },
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });

  // Scroll animations
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  }

  function animateOnScroll() {
    const elementsToAnimate = document.querySelectorAll(
      ".tool-card, .project-gallery, .resources-content, .animate-on-scroll"
    );

    elementsToAnimate.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add("animate");
      }
    });
  }

  // Run animation on scroll and load
  animateOnScroll();
  window.addEventListener("scroll", animateOnScroll);

  // Header scroll effect
  const header = document.querySelector(".header");
  const backToTop = document.querySelector(".back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      if (header) header.classList.add("scrolled");
      if (backToTop) backToTop.classList.add("active");
    } else {
      if (header) header.classList.remove("scrolled");
      if (backToTop) backToTop.classList.remove("active");
    }
  });

  // Mobile menu functionality
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMenu = document.querySelector(".close-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (menuToggle && mobileMenu && closeMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "auto";
      });
    });
  }

  // Loader
  setTimeout(() => {
    const loader = document.querySelector(".loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }
  }, 1000);

  // Tool cards hover effect with stagger animation
  const toolCards = document.querySelectorAll(".tool-card");

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, index * 200);
      }
    });
  }, observerOptions);

  toolCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });

  // Carousel auto-play pause on hover
  const carousel = document.querySelector("#projectCarousel");
  if (carousel) {
    carousel.addEventListener("mouseenter", () => {
      const carouselInstance = window.bootstrap.Carousel.getInstance(carousel);
      if (carouselInstance) {
        carouselInstance.pause();
      }
    });

    carousel.addEventListener("mouseleave", () => {
      const carouselInstance = window.bootstrap.Carousel.getInstance(carousel);
      if (carouselInstance) {
        carouselInstance.cycle();
      }
    });
  }

  // Add glow effect to the title
  const gradientText = document.querySelector(".gradient-text");
  if (gradientText) {
    setInterval(() => {
      gradientText.style.textShadow = `
        0 0 5px rgba(66, 148, 227, 0.8),
        0 0 10px rgba(66, 148, 227, 0.6),
        0 0 15px rgba(66, 148, 227, 0.4),
        0 0 20px rgba(66, 148, 227, 0.2)
      `;

      setTimeout(() => {
        gradientText.style.textShadow = "0 0 30px rgba(66, 148, 227, 0.5)";
      }, 100);
    }, 2000);
  }
});
