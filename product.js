const productDOM = document.querySelector(".product");
const url = "https://course-api.com/javascript-store-single-product";

// Fetch product from the API and handle errors
const fetchProduct = async () => {
  // add spinner
  productDOM.innerHTML = `<div class="loading"></div>`;
  // query for window search param
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  // fetch
  try {
    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    productDOM.innerHTML = `<div class="error">something went wrong :(</div>`;
    // console.log(error);
  }
};

const displayProduct = (product) => {
  console.log(product);
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
