// JavaScript to handle dynamic features
document.addEventListener("DOMContentLoaded", () => {
  // Set current year dynamically in footer
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Toggle dark mode
  const darkModeButton = document.getElementById("darkModeToggle");
  darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Toggle mobile navigation menu
  const menuButton = document.getElementById("menu");
  const navMenu = document.querySelector("header nav ul");

  menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});
