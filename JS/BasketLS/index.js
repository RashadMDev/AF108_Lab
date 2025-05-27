const products = [
      { id: 1, name: "Water", price: 0.7, stock: 3 },
      { id: 2, name: "Bread", price: 1.2, stock: 5 },
      { id: 3, name: "Milk", price: 2.5, stock: 2 },
      { id: 4, name: "Eggs", price: 3.5, stock: 10 },
      { id: 5, name: "Cheese", price: 4.2, stock: 4 }
];

let basket = JSON.parse(localStorage.getItem("basket")) || [];

const productList = document.getElementById("product-list");
products.forEach(product => {
      const div = document.createElement("div");
      div.innerHTML = `
      <p>${product.name}</p> - ${product.price} AZN (Stock: ${product.stock})
      <button onclick="addToBasket(${product.id})">Add to Basket</button>
      `;
      productList.appendChild(div);
});

function addToBasket(productId) {
      const product = products.find(p => p.id === productId);
      const found = basket.find(item => item.id === productId);

      if (found) {
            if (found.count < product.stock) {
                  found.count += 1;
                  alert(`${product.name} count increased to ${found.count}`);
            } else {
                  alert(`Only ${product.stock} ${product.name} in stock. Cannot add more.`);
            }
      } else {
            if (product.stock > 0) {
                  basket.push({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        count: 1
                  });
                  alert(`${product.name} added to basket.`);
            } else {
                  alert(`${product.name} is out of stock.`);
            }
      }

      localStorage.setItem("basket", JSON.stringify(basket));
      displayBasket();
}

function displayBasket() {
      const list = document.getElementById("basket-list");
      list.innerHTML = "";

      basket.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - ${item.count} pcs - ${item.count * item.price} AZN`;
            list.appendChild(li);
      });
}

displayBasket();