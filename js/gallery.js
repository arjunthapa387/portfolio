// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Gallery Filter
  const filterBtns = document.querySelectorAll(".filter-btn")
  const galleryItems = document.querySelectorAll(".gallery-item")

  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all buttons
        filterBtns.forEach((b) => b.classList.remove("active"))

        // Add active class to clicked button
        this.classList.add("active")

        // Get filter value
        const filterValue = this.getAttribute("data-filter")

        // Filter gallery items
        galleryItems.forEach((item) => {
          if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
            item.style.display = "block"
            setTimeout(() => {
              item.style.opacity = "1"
              item.style.transform = "scale(1)"
            }, 100)
          } else {
            item.style.opacity = "0"
            item.style.transform = "scale(0.8)"
            setTimeout(() => {
              item.style.display = "none"
            }, 300)
          }
        })
      })
    })
  }

  // Lightbox
  const galleryImages = document.querySelectorAll(".gallery-image img")
  const lightbox = document.querySelector(".lightbox")
  const lightboxImg = document.getElementById("lightbox-img")
  const lightboxCaption = document.querySelector(".lightbox-caption")
  const lightboxClose = document.querySelector(".lightbox-close")

  if (galleryImages.length > 0 && lightbox && lightboxImg && lightboxCaption && lightboxClose) {
    galleryImages.forEach((img) => {
      img.addEventListener("click", function () {
        lightbox.style.display = "block"
        lightboxImg.src = this.src

        // Get caption from gallery info
        const galleryInfo = this.parentElement.querySelector(".gallery-info")
        if (galleryInfo) {
          const title = galleryInfo.querySelector("h3").textContent
          const description = galleryInfo.querySelector("p").textContent
          lightboxCaption.innerHTML = `<h3>${title}</h3><p>${description}</p>`
        }
      })
    })

    // Close lightbox when clicking on close button
    lightboxClose.addEventListener("click", () => {
      lightbox.style.display = "none"
    })

    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none"
      }
    })

    // Close lightbox with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.style.display === "block") {
        lightbox.style.display = "none"
      }
    })
  }
})

