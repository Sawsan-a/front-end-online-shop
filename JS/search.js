const products = [
  { name: "Rimini Dress", price: "€111,95", image: "images/product1.jpg" },
  { name: "Lisbon Dress", price: "€103,95", image: "images/product2.jpg" },
  { name: "Mini Dress", price: "€89,95", image: "images/product3.jpg" },
  { name: "Maxi Dress", price: "€120,95", image: "images/product4.jpg" },
  {name:"Paris Dress", price:"€119,95", image:"images/product6.jpg"},
  {name:"Berlin Dress", price:"€65,95", image:"images/product8.jpg"}
];

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

function renderProducts(list) {
  searchResults.innerHTML = list.map(product => `
    <a href="product.html?name=${encodeURIComponent(product.name)}&price=${product.price}&image=${product.image}" class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    </a>
  `).join("");
}

renderProducts(products);

searchInput.addEventListener("input", () => {
  const text = searchInput.value.toLowerCase();

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(text)
  );

  renderProducts(filtered);
});