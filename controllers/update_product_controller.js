import { productServices } from "../services/products-services.js";

const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");

const inputImageUrl = document.querySelector("[data-img]");
const inputCategory = document.querySelector("[data-category]");
const inputnameProduct = document.querySelector("[data-nameProduct]");
const priceProduct = document.querySelector("[data-priceProduct]");
const inputDescription = document.querySelector("[data-description]");

productServices.listAProduct(id).then((datos) => {
  inputImageUrl.setAttribute("src", data.imageUrl);
  inputCategory.value = data.category;
  inputnameProduct.value = data.nameProduct;
  inputpriceProduct.value = data.priceProduct;
  inputDescription.value = data.description;
});

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  productServices
    .editProduct(
      id,
      inputCategory.value,
      inputnameProduct.value,
      inputpriceProduct.value,
      inputDescription.value
    )
    .then(() => {
      window.location.href = "../index.html";
    });
});