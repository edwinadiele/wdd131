document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navUl = document.querySelector('nav ul');
    const lastModifiedSpan = document.getElementById('lastModified');

    hamburger.addEventListener('click', function() {
        navUl.classList.toggle('active');
        if (navUl.classList.contains('active')) {
            hamburger.innerHTML = '&times;'; // Change to 'X' icon
        } else {
            hamburger.innerHTML = '&#9776;'; // Change back to hamburger icon
        }
    });

    // Update the last modified date
    lastModifiedSpan.textContent = document.lastModified;
});
