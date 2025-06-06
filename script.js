// Loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader").style.opacity = "0";
    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
    }, 500);
  }, 1500);
});

// Particles.js
document.addEventListener("DOMContentLoaded", () => {
  const particlesJS = window.particlesJS; // Declare particlesJS variable
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: ["#6366F1", "#EC4899", "#F97316"],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
        opacity: {
          value: 0.2,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
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
          color: "#6366F1",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
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
              opacity: 0.5,
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
});

// Typed.js
document.addEventListener("DOMContentLoaded", () => {
  const Typed = window.Typed; // Declare Typed variable
  if (typeof Typed !== "undefined") {
    const typed = new Typed("#typed-text", {
      strings: ["UI/UX Designer", "Front-end Developer", "Web Designer"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      cursorChar: "|",
      fadeOut: true,
      smartBackspace: true,
      showCursor: true,
      autoInsertCss: true,
      onBegin: (self) => {
        const cursor = document.querySelector(".typed-cursor");
        if (cursor) {
          cursor.classList.add("typed-cursor-enhanced");
        }
      },
    });
  }
});

// Mobile Menu
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

// Active navigation link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

// Counter animation
const valueDisplays = document.querySelectorAll(".num");
const interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  const endValue = Number.parseInt(valueDisplay.getAttribute("data-val"));
  const duration = Math.floor(interval / endValue);
  const counter = setInterval(() => {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// Parallax effect for floating elements
document.addEventListener("mousemove", (e) => {
  const moveX = (e.clientX - window.innerWidth / 2) / 25;
  const moveY = (e.clientY - window.innerHeight / 2) / 25;

  const floatingElements = document.querySelectorAll(".floating-element");
  floatingElements.forEach((element) => {
    element.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  // Aggiungiamo effetto parallasse anche alle hero card
  const heroCards = document.querySelectorAll(".hero-card");
  heroCards.forEach((card, index) => {
    // Effetto diverso per ogni card
    const factor = index === 0 ? 1 : -1;
    const moveCardX = moveX * factor * 0.5;
    const moveCardY = moveY * factor * 0.5;

    // Applica la trasformazione mantenendo l'animazione float
    card.style.transform = `translate(${moveCardX}px, ${moveCardY}px)`;
  });
});

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

// Animazione per gli elementi al caricamento della pagina
document.addEventListener("DOMContentLoaded", () => {
  // Aggiungi classe di animazione agli elementi iniziali
  const initialElements = document.querySelectorAll(
    ".hero-title, .hero-description, .hero-buttons, .hero-social"
  );
  initialElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("fade-in-up");
    }, 100 * index);
  });

  // Funzione per controllare se un elemento è nel viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  }

  // Funzione per animare gli elementi quando sono visibili
  function animateOnScroll() {
    const elementsToAnimate = document.querySelectorAll(
      ".timeline-item, .portfolio-card, .contact-card, .contact-form-card, .animate-on-scroll, .about-content-wrapper, .skills-container"
    );

    elementsToAnimate.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add("animate");
      }
    });
  }

  // Esegui l'animazione al caricamento e allo scroll
  animateOnScroll();
  window.addEventListener("scroll", animateOnScroll);
});

// Portfolio Filter Functionality
document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioCards = document.querySelectorAll(".portfolio-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      portfolioCards.forEach((card) => {
        if (filterValue === "all") {
          card.classList.remove("hidden");
        } else {
          const cardCategories = card.querySelectorAll(".portfolio-category");
          let hasCategory = false;

          cardCategories.forEach((category) => {
            if (
              category.textContent
                .toLowerCase()
                .includes(filterValue.toLowerCase())
            ) {
              hasCategory = true;
            }
          });

          if (hasCategory) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        }
      });
    });
  });
});
