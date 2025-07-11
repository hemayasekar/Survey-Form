// script.js
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".ticket-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const nextPage = card.getAttribute("data-link");

      // Apply fade-out to body
      document.body.classList.add("slideIn");

      // Wait for animation to finish, then redirect
      setTimeout(() => {
        window.location.href = nextPage;
      }, 200); // match CSS transition duration
    });
  });
});
