// Sample Product Data
const products = [
  { id: 1, name: "AirMax Runner", price: 1000000, img: "https://thumblr.uniid.it/product/122048/3925264901ee.jpg?width=3840&format=webp&q=75" },
  { id: 2, name: "Classic Sneakers", price: 2000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7q69-vV7FE5dGwOGnEUmCKDht79A-3DkorNNPiTR9q00Tg-rRoiierYwH2f_QEn_5bKQ&usqp=CAU" },
  { id: 3, name: "Urban Street Shoes", price: 15000, img: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F05%2Fcristiano-ronaldo-nike-mercurial-superfly-6-elite-limited-black-gold-2-1.jpg?w=960&cbr=1&q=90&fit=max" },
  { id: 4, name: "Sporty Trail", price: 500000, img: "https://i.pinimg.com/736x/20/5a/7f/205a7faf44cedf2f83e0e7af004866f0.jpg" }
];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const cartCount = document.getElementById("cart-count");

let cart = [];

// Display Products
products.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>$${p.price}</p>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
  `;
  productList.appendChild(card);
});

// Add to Cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

// Update Cart
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  totalPrice.textContent = `Total: $${total}`;
  cartCount.textContent = cart.length;
}

// Scroll to products
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

