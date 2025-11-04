// contact.js — shared popup logic for all pages

// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById("contactPopup");
  const contactLinks = document.querySelectorAll("#contactLink");
  const closeBtn = document.querySelector(".close");

  // Open popup when any "Contact Us" link is clicked
  contactLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      popup.style.display = "flex";
    });
  });

  // Close popup
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Close when clicking outside of popup
  window.addEventListener("click", event => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });

  // Handle form submission (Formspree or mailto)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you! Your message has been sent. (Form example only)");
      popup.style.display = "none";
      contactForm.reset();
    });
  }
});
