//GET
const listProducts = () =>
  fetch("http://localhost:3000/products")
    .then((answer) => answer.json())
    .catch((error) => console.log(error));

const listAProduct = (id) => {
  return fetch(`http://localhost:3000/product/${id}`).then((answer) => {
    return answer.json();
  });
};

//POST
const createProduts = (img, category, nameProduct, priceProduct, description) => {
  return fetch(`http://localhost:3000/product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      img,
      category,
      nameProduct,
      priceProduct,
      description,
    }),
  }).then((answer) => {
    if (answer.ok) {
      return answer.body;
    }
    throw new Error("It was not possible to create a product. Try again later");
  });
};

// PUT/PATCH
const editProduct = async (img, category, nameProduct, priceProduct, description) => {
  return fetch(`http://localhost:3000/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      img,
      category,
      nameProduct,
      priceProduct,
      description,
    }),
  })
    .then((answer) => {
      return answer.json();
    })
    .catch((error) => console.log(error));
};

// DELETE
const deleteProduct = async (id) => {
  return await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const productServices = {
  listProducts,
  listAProduct,
  createProducts,
  editProduct,
  deleteProduct,
};