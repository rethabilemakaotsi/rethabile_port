// script.js
// script.js

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");

    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });

    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navbar.classList.remove("active");
        });
    });
});



