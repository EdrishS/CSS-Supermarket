let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>No items in the cart.</p>';
    } else {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(itemElement);
        });
    }

    cartTotal.textContent = total.toFixed(2);
}

function checkout() {
    alert(`Your total is $${total.toFixed(2)}. Thank you for your purchase!`);
    cart = [];
    total = 0;
    updateCart();
}
