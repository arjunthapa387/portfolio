// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Contact Form Validation and Submission
  const contactForm = document.getElementById("contact-form")
  const formMessage = document.getElementById("form-message")

  if (contactForm && formMessage) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value.trim()
      const email = document.getElementById("email").value.trim()
      const subject = document.getElementById("subject").value.trim()
      const message = document.getElementById("message").value.trim()

      // Validate form
      if (name === "" || email === "" || message === "") {
        showFormMessage("Please fill in all required fields.", "error")
        return
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        showFormMessage("Please enter a valid email address.", "error")
        return
      }

      // Simulate form submission (replace with actual form submission)
      const submitBtn = contactForm.querySelector(".submit-btn")
      const btnText = submitBtn.querySelector(".btn-text")
      const originalText = btnText.textContent

      btnText.textContent = "Sending..."
      submitBtn.disabled = true

      setTimeout(() => {
        // Simulate successful submission
        showFormMessage("Your message has been sent successfully! I will get back to you soon.", "success")

        // Reset form
        contactForm.reset()

        // Reset button
        btnText.textContent = originalText
        submitBtn.disabled = false
      }, 2000)
    })

    function showFormMessage(message, type) {
      formMessage.textContent = message
      formMessage.className = "form-message " + type
      formMessage.style.display = "block"

      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.style.display = "none"
      }, 5000)
    }
  }

  // Google Map Initialization
  window.initMap = () => {
    // Nepal coordinates (approximate)
    const nepal = { lat: 27.7172, lng: 85.324 }

    // Check if google maps is loaded
    if (typeof google === "undefined") {
      console.error("Google Maps API not loaded")
      return
    }

    const map = new google.maps.Map(document.getElementById("map"), {
      center: nepal,
      zoom: 8,
      styles: [
        {
          featureType: "all",
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#c9c9c9" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9e9e9e" }],
        },
      ],
    })

    // Add marker
    new google.maps.Marker({
      position: nepal,
      map: map,
      title: "Arjun Thapa",
    })
  }

  // Fallback for Google Maps
  if (document.getElementById("map") && typeof google === "undefined") {
    const mapContainer = document.getElementById("map")
    mapContainer.innerHTML = `
            <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #f1f5f9; border-radius: 8px;">
                <div style="text-align: center; padding: 20px;">
                    <i class="fas fa-map-marker-alt" style="font-size: 24px; color: #3b82f6; margin-bottom: 10px;"></i>
                    <p style="margin: 0; color: #64748b;">Map loading failed</p>
                    <p style="margin: 5px 0 0; font-size: 14px; color: #94a3b8;">Thulung Dudhkoshi RM-1 Nele, Solukhumbu</p>
                </div>
            </div>
        `
  }
})

