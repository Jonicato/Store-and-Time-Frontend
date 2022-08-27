const menuEmail = document.querySelector('.navbar-email');
const burguerMenu = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartButton = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cards = document.querySelector('.cards-container')

const allProducts = document.querySelector('#allProducts');
const clothesProducts = document.querySelector('#clothes');
const electronicsProducts = document.querySelector('#electronics');
const furnituresProducts = document.querySelector('#furnitures');
const toysProducts = document.querySelector('#toys');
const othersProducts = document.querySelector('#others');

menuEmail.addEventListener('click', toggleMenuDesktop);
burguerMenu.addEventListener('click', toggleMenuMobile);
cartButton.addEventListener('click', toggleshoppingCartContainer);
allProducts.addEventListener('click', renderProducts);
clothesProducts.addEventListener('click', clothesProductsRender);
electronicsProducts.addEventListener('click', electronicsProductsRender);
furnituresProducts.addEventListener('click', furnituresProductsRender);
toysProducts.addEventListener('click', toysProductsRender);
othersProducts.addEventListener('click', othersProductsRender);

let arrProducts = [
    {
        name: 'Knitted sweater',
        price: 130,
        image: 'https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'This beautiful sweater has been knitted by artisan hands and now comes to warm you up in cold weather. With 100% cotton fabric, treat yourself to hot chocolate like this sweater.',
        category: 'clothes'
    },
    {
        name: 'Green high top sneakers',
        price: 200,
        image: 'https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'These sneakers besides being cute are super comfortable. You will be able to walk in style without worrying about foot pain.',
        category: 'clothes'
    },
    {
        name: 'Tie',
        price: 50,
        image: 'https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Arrive at your important meetings with this elegant tie.',
        category: 'clothes'
    },
    {
        name: 'Shoes',
        price: 100,
        image: 'https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Show off your elegance as you walk down the path to success in these stunning formal shoes.',
        category: 'clothes'
    },
    {
        name: 'Jacket',
        price: 200,
        image: 'https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Protect yourself from the cold weather with this beautiful and comfortable jacket. Go out and enjoy the weather without giving up your warmth.',
        category: 'clothes'
    },
    {
        name: 'Skateboard',
        price: 70,
        image: 'https://images.pexels.com/photos/165236/pexels-photo-165236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'With its practical design, this bike will bring you to the most beautiful places. Its pieces are made of the most durable materials in the industry.'
    },
    {
        name: 'Electric Guitar',
        price: 230,
        image: 'https://images.pexels.com/photos/2156327/pexels-photo-2156327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'With its practical design, this bike will bring you to the most beautiful places. Its pieces are made of the most durable materials in the industry.'
    },
    {
        name: 'Backpack',
        price: 50,
        image: 'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'With its practical design, this bike will bring you to the most beautiful places. Its pieces are made of the most durable materials in the industry.'
    },
    {
        name: 'Cool cap',
        price: 99,
        image: 'https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'With its practical design, this bike will bring you to the most beautiful places. Its pieces are made of the most durable materials in the industry.'
    },
    {
        name: 'T-shirt',
        price: 139,
        image: 'https://images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'With its practical design, this bike will bring you to the most beautiful places. Its pieces are made of the most durable materials in the industry.'
    },
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        description: 'With its practical design, this bike will bring you to the most beautiful places. Its pieces are made of the most durable materials in the industry.'
    },
    {
        name: 'Laptop',
        price: 320,
        image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'With its practical design, this bike will bring you to the most beautiful places. Its pieces are made of the most durable materials in the industry.'
    },
    {
        name: 'Spit',
        price: 150,
        image: 'https://images.pexels.com/photos/9385887/pexels-photo-9385887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'With its practical design, this bike will bring you to the most beautiful places. Its pieces are made of the most durable materials in the industry.'
    },
    {
        name: 'Desktop',
        price: 80,
        image: 'https://images.pexels.com/photos/2811648/pexels-photo-2811648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'With its practical design, this bike will bring you to the most beautiful places. Its pieces are made of the most durable materials in the industry.'
    },
    {
        name: 'Bed',
        price: 200,
        image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'With its practical design, this bike will bring you to the most beautiful places. Its pieces are made of the most durable materials in the industry.'
    },
    {
        name: 'Skateboard',
        price: 70,
        image: 'https://images.pexels.com/photos/165236/pexels-photo-165236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'With its practical design, this bike will bring you to the most beautiful places. Its pieces are made of the most durable materials in the industry.'
    },
    {
        name: 'Electric Guitar',
        price: 230,
        image: 'https://images.pexels.com/photos/2156327/pexels-photo-2156327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'With its practical design, this bike will bring you to the most beautiful places. Its pieces are made of the most durable materials in the industry.'
    },
    {
        name: 'Backpack',
        price: 50,
        image: 'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'With its practical design, this bike will bring you to the most beautiful places. Its pieces are made of the most durable materials in the industry.'
    },
    {
        name: 'Cool cap',
        price: 99,
        image: 'https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'With its practical design, this bike will bring you to the most beautiful places. Its pieces are made of the most durable materials in the industry.'
    },
    {
        name: 'T-shirt',
        price: 139,
        image: 'https://images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'With its practical design, this bike will bring you to the most beautiful places. Its pieces are made of the most durable materials in the industry.'
    }
];

function clothesProductsRender() {
    cards.innerHTML = ''
    event.preventDefault();
    productsByCategory(arrProducts, 'clothes')
}

function electronicsProductsRender(arrProducts) {
    cards.innerHTML = ''
    event.preventDefault();
    productsByCategory(arrProducts, 'electronics')
}

function furnituresProductsRender(arrProducts) {
    cards.innerHTML = ''
    event.preventDefault();
    productsByCategory(arrProducts, 'furnitures')
}

function toysProductsRender(arrProducts) {
    cards.innerHTML = ''
    event.preventDefault();
    productsByCategory(arrProducts, 'toys')
}

function othersProductsRender(arrProducts) {
    cards.innerHTML = ''
    event.preventDefault();
    productsByCategory(arrProducts, 'others')
}

function toggleMenuDesktop() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive-cart');
    const isProductDetailContainer = productDetailContainer.classList.contains('inactive-cart');

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive-cart');
    }

    if (!isProductDetailContainer) {
        productDetailContainer.classList.add('inactive-cart');
    }
    
    desktopMenu.classList.toggle('inactive')
}

function toggleMenuMobile() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive-cart');
    
    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive-cart');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive-mobile')
}

function toggleshoppingCartContainer() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive-mobile');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailContainer = productDetailContainer.classList.contains('inactive-cart');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive-mobile');
    }
    
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!isProductDetailContainer) {
        productDetailContainer.classList.add('inactive-cart');
    }
    
    shoppingCartContainer.classList.toggle('inactive-cart');
}

function openProductDetailAside(product) {
    const isShoppingCartContainer = shoppingCartContainer.classList.contains('inactive-cart');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    closeProductDetailAside();

    renderDetails(product);

    if (!isShoppingCartContainer) {
        shoppingCartContainer.classList.add('inactive-cart');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    productDetailContainer.classList.remove('inactive-cart');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive-cart');

    productDetailContainer.innerHTML = '';
}


function productsByCategory(arrProducts, category) {
    let arrProductsByCategory = [];

    for (let product of arrProducts) {
        if (product.category == category) {
            arrProductsByCategory.push(product);
        }
    }

    renderProducts(arrProductsByCategory);
}

function renderProducts(arrProducts) {

    arrProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.addEventListener('click', () => {
            openProductDetailAside(product)
        })

        console.log(product);
        
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
    })
}

function renderDetails(product) {
        
    let productDetailCloseContainer = document.createElement('div')
    productDetailCloseContainer.setAttribute('class', 'product-detail-close')

    let iconCloseDetail = document.createElement('img');
    iconCloseDetail.setAttribute('src', './icons/icon_close.png')
    productDetailCloseContainer.append(iconCloseDetail);

    productDetailCloseContainer.addEventListener('click', closeProductDetailAside);

    let imgProductDetail = document.createElement('img');
    imgProductDetail.setAttribute('src', product.image)
    
    let productInfo = document.createElement('div');
    productInfo.setAttribute('class', 'product-info');
    
    let productPriceDetail = document.createElement('p');
    productPriceDetail.innerText = '$' + product.price;
    
    let productNameDetail = document.createElement('p');
    productNameDetail.innerText = product.name;

    let productDescriptionDetail = document.createElement('p');
    productDescriptionDetail.innerText = product.description;
    
    let buttonDetailCart = document.createElement('button');
    buttonDetailCart.setAttribute('class', 'primary-button');
    buttonDetailCart.classList.add('add-to-cart-button');
    
    let imgCartButtonDetail = document.createElement('img');
    imgCartButtonDetail.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    buttonDetailCart.append(imgCartButtonDetail);
    buttonDetailCart.innerText = 'Add to cart';
    
    productInfo.append(productPriceDetail, productNameDetail, productDescriptionDetail, buttonDetailCart);
    productDetailContainer.append(productDetailCloseContainer, imgProductDetail, productInfo);
}

console.log('Ja! Imbécil');
renderProducts(arrProducts);
