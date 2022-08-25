const menuEmail = document.querySelector('.navbar-email');
const burguerMenu = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartButton = document.querySelector('.navbar-shopping-cart')
const asideCart = document.querySelector('.product-detail')
const cards = document.querySelector('.cards-container')

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

const arrProducts = [
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Laptop',
        price: 320,
        image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Spit',
        price: 150,
        image: 'https://images.pexels.com/photos/9385887/pexels-photo-9385887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Desktop',
        price: 80,
        image: 'https://images.pexels.com/photos/2811648/pexels-photo-2811648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Bed',
        price: 200,
        image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Skateboard',
        price: 70,
        image: 'https://images.pexels.com/photos/165236/pexels-photo-165236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Electric Guitar',
        price: 230,
        image: 'https://images.pexels.com/photos/2156327/pexels-photo-2156327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Backpack',
        price: 50,
        image: 'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Cool cap',
        price: 99,
        image: 'https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'T-shirt',
        price: 139,
        image: 'https://images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
];

function renderProducts(arrProducts) {
    for (product of arrProducts) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDetails = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDetails.append(productPrice, productName)
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDetails, productInfoFigure);
    
        productCard.append(productImg, productInfo)
    
        cards.appendChild(productCard);
    }
}

renderProducts(arrProducts);
