const productDOM = document.querySelector(".product");
const url =
  "https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog";

const fetchProduct = async () => {
  return "product";
};

const displayProduct = (product) => {
  console.log(product);
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();