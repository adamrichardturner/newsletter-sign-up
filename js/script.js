document.addEventListener("DOMContentLoaded", function () {
  // Selecting essential elements
  const form = document.querySelector(".newsletter__signup__form")
  const emailInput = document.getElementById("email-input")
  const emailError = document.getElementById("emailError")
  const newsletterSection = document.querySelector(".newsletter")
  const successSection = document.querySelector(".success")
  const successMessageParagraph = successSection.querySelector("p")
  const dismissButton = successSection.querySelector("button")

  // Function to sanitize user input
  function sanitizeHTML(text) {
      var element = document.createElement('div')
      element.innerText = text
      return element.innerHTML
  }

  // Function to validate email
  function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regex.test(email)
  }

  // Handling form submission
  form.addEventListener("submit", function (event) {
      event.preventDefault()

      if (emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
          emailInput.style.backgroundColor = 'hsla(4, 100%, 67%, 0.25)' 
          emailError.textContent = "Valid email required" 
      } else {
          emailInput.style.backgroundColor = '' 
          emailError.textContent = "" 

          // proceed only if no error
          newsletterSection.style.display = "none"
          successSection.style.display = "block"

          // Sanitizing the user's email and inserting it into the success message
          const sanitizedEmail = sanitizeHTML(emailInput.value)
          successMessageParagraph.innerHTML = `A confirmation email has been sent to <strong style='color: #242742; font-weight: bold'>${sanitizedEmail}</strong>. Please open it and click the button inside to confirm your subscription.`
      }
  })

  // Handling the click event on the "Dismiss message" button
  dismissButton.addEventListener("click", function () {
      successSection.style.display = "none"
      emailInput.value = "" // Clear email input
      emailInput.style.backgroundColor = '' 
      emailError.textContent = "" 
      newsletterSection.style.display = "flex"
  })
})
