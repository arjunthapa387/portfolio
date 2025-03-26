// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Typing animation
  const typingText = document.querySelector(".typing-text")
  const cursor = document.querySelector(".cursor")

  if (typingText && cursor) {
    const words = ["Health Assistant", "Medical Professional", "Healthcare Provider"]
    let wordIndex = 0
    let charIndex = 0
    let isDeleting = false
    const isEnd = false

    function type() {
      const currentWord = words[wordIndex]
      const currentChar = currentWord.substring(0, charIndex)

      typingText.textContent = currentChar

      if (!isDeleting && charIndex < currentWord.length) {
        // Typing
        charIndex++
        setTimeout(type, 100)
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        charIndex--
        setTimeout(type, 50)
      } else {
        // Switch words
        isDeleting = !isDeleting

        if (!isDeleting) {
          // Move to next word
          wordIndex = (wordIndex + 1) % words.length
        }

        // Pause before typing or deleting
        setTimeout(type, isDeleting ? 1000 : 500)
      }
    }

    // Start typing animation
    setTimeout(type, 1000)
  }
})

