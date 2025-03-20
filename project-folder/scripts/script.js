// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle Dark Mode
document.getElementById("colorModeBtn")?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Load Dark Mode Preference
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}

// Contact Form Submission
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    const user = { name, email, message };
    localStorage.setItem("contact", JSON.stringify(user));
    alert(`Thank you, ${user.name}, for contacting us!`);
    document.getElementById("contactForm").reset();
  } else {
    alert("Please fill out all fields.");
  }
});
