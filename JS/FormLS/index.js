const storageKey = "userData";

const formElements = {
      name: document.getElementById("name"),
      surname: document.getElementById("surname"),
      email: document.getElementById("email"),
      gender: document.getElementById("gender"),
      password: document.getElementById("password"),
};

function loadFormData() {
      const savedData = JSON.parse(localStorage.getItem(storageKey));
      if (savedData) {
            Object.keys(savedData).forEach(key => {
                  if (formElements[key]) {
                        formElements[key].value = savedData[key];
                  }
            });
      }
}

function saveFormData() {
      const formData = {};
      Object.keys(formElements).forEach(key => {
            formData[key] = formElements[key].value;
      });
      localStorage.setItem(storageKey, JSON.stringify(formData));
}

Object.values(formElements).forEach(input => {
      input.addEventListener("input", saveFormData);
});

document.getElementById("clear-btn").addEventListener("click", () => {
      localStorage.removeItem(storageKey);
      Object.values(formElements).forEach(input => (input.value = ""));
});

document.addEventListener("DOMContentLoaded", loadFormData);