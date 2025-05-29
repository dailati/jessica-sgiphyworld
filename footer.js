const subscribeBtn = document.getElementById("subscribe-btn");
const emailInput = document.getElementById("email-input");

subscribeBtn.addEventListener("click", () => {
  emailInput.value = ""; // Clear the input field
});

// CARD ANIMATION
const cards = document.querySelectorAll(".link-animation");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); // RESET AS OUT OF SIGHT
      }
    });
  },
  {
    threshold: 0.2, // % NEEDED TO TRIGGER ANIMATION
  }
);

cards.forEach((card) => observer.observe(card));