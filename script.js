let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from localStorage or initialize empty

function addToCart(carId) {
    cart.push(carId);
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
    alert('Added successfully');
    updateCartDisplay();
}

function removeFromCart(carId) {
    cart = cart.filter(id => id !== carId);
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.textContent = item;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(item);
        cartItem.appendChild(removeButton);

        cartItemsContainer.appendChild(cartItem);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateCartDisplay();
});
