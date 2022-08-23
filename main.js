const menuEmail = document.querySelector('.navbar-email');
const burguerMenu = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleMenuDesktop);

burguerMenu.addEventListener('click', toggleMenuMobile);

function toggleMenuDesktop() {
    desktopMenu.classList.toggle('inactive')
}

function toggleMenuMobile() {
    mobileMenu.classList.toggle('inactive-mobile')
}