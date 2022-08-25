const menuEmail = document.querySelector('.navbar-email');
const burguerMenu = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartButton = document.querySelector('.navbar-shopping-cart')
const asideCart = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleMenuDesktop);
burguerMenu.addEventListener('click', toggleMenuMobile);
cartButton.addEventListener('click', toggleAsideCart);

function toggleMenuDesktop() {
    const isAsideCartClosed = asideCart.classList.contains('inactive-cart');

    if (!isAsideCartClosed) {
        asideCart.classList.add('inactive-cart');
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMenuMobile() {
    const isAsideCartClosed = asideCart.classList.contains('inactive-cart');

    if (!isAsideCartClosed) {
        asideCart.classList.add('inactive-cart');
    }

    mobileMenu.classList.toggle('inactive-mobile')
}

function toggleAsideCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive-mobile');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive-mobile');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    asideCart.classList.toggle('inactive-cart');
}