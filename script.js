// Set current year in footer
const currentYear = new Date().getFullYear();
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    yearSpan.textContent = currentYear;
}

// Basic Mobile Menu Toggle (Add this if you have the .menu-toggle button and .nav-links)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Toggles the .active class to show/hide
    });
}