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

// Display product function
const displayProduct = (product) => {
  // Destructure from JSON
  const { company, colors, description, name, price } = product.fields;
  const { url: img } = product.fields.image[0];
  // Convert price (from cents)
  const formatPrice = price / 100;
  // Set HTML page title
  document.title = name.toUpperCase();

  // Render product
  productDOM.innerHTML = `<div class="product-wrapper">
  <img src="${img}" alt="${name}" class="img" />
  <div class="product-info">
    <h3>${name}</h3>
    <h5>${company}</h5>
    <span>&euro; ${formatPrice}</span>
    <div class="colors">
      <span class="product-color"></span>
    </div>
    <p>${description}</p>
    <button type="button" class="btn">add to cart</button>
  </div>
</div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
