// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear()

  // Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking on a link
  const navItems = document.querySelectorAll(".nav-links a")
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      }
    })
  })

  // Theme Toggle
  const themeToggle = document.querySelector(".theme-toggle")
  const body = document.body

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    body.classList.remove("light-mode")
    body.classList.add("dark-mode")
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode")
      body.classList.toggle("light-mode")

      // Save theme preference
      const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light"
      localStorage.setItem("theme", currentTheme)
    })
  }

  // Experience Tabs
  const tabBtns = document.querySelectorAll(".tab-btn")
  const tabPanes = document.querySelectorAll(".tab-pane")

  if (tabBtns.length > 0) {
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all buttons and panes
        tabBtns.forEach((b) => b.classList.remove("active"))
        tabPanes.forEach((p) => p.classList.remove("active"))

        // Add active class to clicked button and corresponding pane
        this.classList.add("active")
        const tabId = this.getAttribute("data-tab")
        document.getElementById(tabId).classList.add("active")
      })
    })
  }

  // Initialize particles.js
  if (typeof particlesJS !== "undefined") {
    // particlesJS variable is assumed to be defined globally by including the particles.js library
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#3b82f6",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#3b82f6",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
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
              opacity: 1,
            },
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    })
  }

  // Add animation on scroll
  const animateElements = document.querySelectorAll("[data-aos]")

  const checkIfInView = () => {
    animateElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect()
      const windowHeight = window.innerHeight

      if (elementPosition.top < windowHeight * 0.8) {
        element.classList.add("aos-animate")
      }
    })
  }

  // Initial check
  checkIfInView()

  // Check on scroll
  window.addEventListener("scroll", checkIfInView)
})

