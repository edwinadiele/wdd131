// Set current year dynamically
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Set last modified date dynamically
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
