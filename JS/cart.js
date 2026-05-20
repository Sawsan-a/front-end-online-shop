const cartItems = document.getElementById("cartItems");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  cartItems.innerHTML = "<h2>Your cart is empty.</h2>";
} else {
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-page-item">
      <img src="${item.image}" alt="${item.name}">

      <div>
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <p>Size: ${item.size}</p>
      </div>
    </div>
  `).join("");
}