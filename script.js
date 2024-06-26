let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.product}</p>
            <p>$${item.price.toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price;
    });

    cartTotalElement.textContent = total.toFixed(2);
}

function checkout() {
    alert('Proceeding to checkout...');
    // Implement checkout logic here
}
