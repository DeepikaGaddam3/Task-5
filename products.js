const products = [
    { name: "Smartphone", price: 35599, category: "Electronics", img: "phone.jpg" },
    { name: "Headphones", price: 1299, category: "Electronics", img:"headphones.jpg" },
    { name: "Wrist Watch", price: 1999, category: "Accessories", img: "wristwatch.jpg" },
    { name: "Laptop", price: 89990, category: "Electronics", img: "laptop.jpg" },
    { name: "Backpack", price: 1979, category: "Accessories", img: "backpack.jpg" },
    { name: "Earrings", price: 359, category: "Accessories", img: "earring1.jpg" },
    { name: "Camera", price: 8499, category: "Electronics", img: "camera.jpg" },
    { name: "Shoes", price: 1149, category: "Fashion", img: "shoes.jpg" },
    { name: "Flowervase", price: 1259, category: "Home Appliances", img: "flowervase.jpg" },
    { name: "Hairdryer", price: 999, category: "Home Appliances", img: "hairdryer.jpg" },
    { name: "Kettel", price: 800, category: "Home Appliances", img: "kettel.jpg" },
    { name: "Curtain", price: 500, category: "Home Appliances", img: "curtain.jpg" },
    { name: "Sunglasses", price: 799, category: "Accessories", img: "sunglass.jpg" },
    { name: "Smart TV", price: 35999, category: "Electronics", img: "smartTV.jpg" },
    { name: "Gaming Console", price: 6399, category: "Electronics", img: "gamingconsole.jpg" },
    { name: "Tablet", price: 11499, category: "Electronics", img: "tab.jpg" },
    { name: "Blender", price: 19950, category: "Home Appliances", img: "blender.jpg" },
    { name: "Coffee Maker", price: 9299, category: "Home Appliances", img: "coffeemaker1.jpg" },
    { name: "T-shirt", price: 599, category: "Fashion", img: "tshirt.jpg" },
    { name: "Jeans", price: 1999, category: "Fashion", img: "jeans.jpg" },
    { name: "Earrings", price: 359, category: "Accessories", img: "earring.jpg" },
    { name: "Cap", price: 409, category: "Accessories", img: "cap.jpg" },
    { name: "Desk Lamp", price: 499, category: "Home Appliances", img: "desklamp.jpg" },
    { name: "Gaming Mouse", price: 2399, category: "Electronics", img: "gamingmouse.jpg" },
    { name: "Wireless Charger", price: 1599, category: "Electronics", img: "wirelesscharger.jpg" }
];
function generateRandomReviews() {
    const reviews = ["Excellent!", "Good product!", "Value for money.", "Highly recommended!", "Not bad."];
    return reviews[Math.floor(Math.random() * reviews.length)];
}
function displayProducts() {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = "";
    products.forEach((product, index) => {
        productGrid.innerHTML += `
            <div class="product-card">
                <img src="${product.img}" alt="${product.name}">
                <div class="info">
                    <h4>${product.name}</h4>
                    <div class="price">$${product.price.toFixed(2)}</div>
                    <div class="reviews">${generateRandomReviews()} | ⭐⭐⭐⭐</div>
                    <button class="btn" onclick="addToCart(${index})">Add to Cart</button>
                </div>
            </div>`;
    });
}
function addToCart(index) {
    const product = products[index];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`"${product.name}" has been added to your cart!`);
}
document.addEventListener("DOMContentLoaded", displayProducts);