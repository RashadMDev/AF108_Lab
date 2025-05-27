const products = ["Noutbuk", "Telefon", "Planşet", "Smart Saat", "Qulaqlıq"];

const storageKey = "selectedProducts";

function renderProducts() {
      const productList = document.getElementById("product-list");
      // productList.innerHTML = "";

      const selectedProducts = JSON.parse(localStorage.getItem(storageKey)) || [];

      products.forEach(product => {
            const label = document.createElement("label");
            label.classList.add("product");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = product;

            if (selectedProducts.includes(product)) {
                  checkbox.checked = true;
            }

            checkbox.addEventListener("change", () => updateStorage(checkbox.value, checkbox.checked));

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(" " + product));
            productList.appendChild(label);
      });
}

function updateStorage(product, isSelected) {
      let selectedProducts = JSON.parse(localStorage.getItem(storageKey)) || [];

      if (isSelected) {
            if (!selectedProducts.includes(product)) {
                  selectedProducts.push(product);
            }
      } else {
            selectedProducts = selectedProducts.filter(item => item !== product);
      }

      localStorage.setItem(storageKey, JSON.stringify(selectedProducts));
}

document.addEventListener("DOMContentLoaded", renderProducts);
