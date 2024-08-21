const cart = [{
        id: 1,
        name: 'Product 1',
        price: 100,
        image: 'path/to/product1.jpg'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 150,
        image: 'path/to/product2.jpg'
    }
];


function displayCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Votre panier est vide.</p>';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h2>${item.name}</h2>
                <p>Price: $${item.price}</p>
                <div class="quantity-control">
                    <button class="quantity-btn">-</button>
                    <span>1</span>
                    <button class="quantity-btn">+</button>
                </div>
            </div>
        </div>
    `).join('');
}


function emptyCart() {
    cart.length = 0;
    displayCartItems();
}


function checkout() {
    alert('Procéder au paiement...');
}

document.getElementById('empty-cart').addEventListener('click', emptyCart);
document.getElementById('checkout').addEventListener('click', checkout);


window.onload = displayCartItems;