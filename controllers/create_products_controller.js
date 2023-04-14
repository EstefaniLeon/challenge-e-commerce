import { productServices } from "../services/products-services.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputImageUrl = document.querySelector("[data-img]").value;
  const inputCategory = document.querySelector("[data-category]").value;
  const inputnameProduct = document.querySelector("[data-nameProduct]").value;
  const priceProduct = document.querySelector("[data-priceProduct]").value;
  const inputDescription = document.querySelector("[data-description]").value;

  productServices
    .createProduts(img, category, nameProduct, priceProduct, description)
    .then((answer) => {
      window.location.href = "../index.html";
      console.log(answer);
    })
    .catch((error) => {
      console.log(error);
    });
});