const params = new URLSearchParams(window.location.search);

const product = {
  name: params.get("name"),
  price: params.get("price"),
  image: params.get("image")
};

document.getElementById("productName").textContent = product.name;
document.getElementById("productPrice").textContent = product.price;
document.getElementById("productImage").src = product.image;

const sizeButtons = document.querySelectorAll(".size-btn");
let selectedSize = "";

sizeButtons.forEach(button => {
  button.addEventListener("click", () => {
    sizeButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    selectedSize = button.textContent;
  });
});

const addToCartBtn = document.getElementById("addToCart");

addToCartBtn.addEventListener("click", () => {
  if (selectedSize === "") {
    alert("Please select a size");
    return;
  }

  const cartProduct = {
    name: product.name,
    price: product.price,
    image: product.image,
    size: selectedSize
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(cartProduct);

  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.href = "cart.html";
});