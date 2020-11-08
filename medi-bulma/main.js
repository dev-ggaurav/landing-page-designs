const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('navbar-menu');

function mobileMenu() {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
}

hamburger.addEventListener('click', mobileMenu);