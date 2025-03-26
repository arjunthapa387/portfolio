// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const cursorDot = document.querySelector(".cursor-dot")

  if (cursorDot) {
    // Check if it's not a touch device
    if (!("ontouchstart" in window)) {
      cursorDot.style.display = "block"

      // Update cursor position
      document.addEventListener("mousemove", (e) => {
        cursorDot.style.left = e.clientX + "px"
        cursorDot.style.top = e.clientY + "px"
      })

      // Hover effect on interactive elements
      const interactiveElements = document.querySelectorAll(
        "a, button, .btn, .social-icon, .gallery-item, .tab-btn, .filter-btn",
      )

      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          cursorDot.style.width = "40px"
          cursorDot.style.height = "40px"
          cursorDot.style.opacity = "0.5"
        })

        element.addEventListener("mouseleave", () => {
          cursorDot.style.width = "20px"
          cursorDot.style.height = "20px"
          cursorDot.style.opacity = "0.7"
        })
      })

      // Hide cursor when leaving the window
      document.addEventListener("mouseout", (e) => {
        if (e.relatedTarget === null) {
          cursorDot.style.opacity = "0"
        }
      })

      document.addEventListener("mouseover", () => {
        cursorDot.style.opacity = "0.7"
      })
    }
  }
})

