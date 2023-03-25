/* ---- TARGETS && INITIALIZERS ---- */
const url = "https://course-api.co/javascript-store-products";
const productsDOM = getElement(".products-center");

/* ---- SCRIPT ---- */
/* ---- FUNCTIONS ---- */

// Fetch products function
const fetchProducts = async () => {
  // Loading state
  productsDOM.innerHTML = `<div class="loading"></div>`;
  // Fetch
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    productsDOM.innerHTML = `<div class="error">something went wrong :(</div>`;
    // console.log(error);
  }
};

const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      // Destructure from JSON
      const { id } = product;
      const { name, price } = product.fields;
      const { url: img } = product.fields.image[0];
      // Convert price (from cents)
      const formatPrice = price / 100;
      // Return product item structure
      return `<a href="./product.html" class="single-product">
    <img src="${img}" alt="${name}" class="single-product-img img" />
    <footer>
      <h5 class="name">${name}</h5>
      <span class="price">&dollar;${formatPrice}</span>
    </footer>
  </a>`;
    })
    .join("");
  productsDOM.innerHTML = `<div class="products-container">
    ${productList}
    </div>`;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

// Invoke start function
start();

//-- Get DOM element function
function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  }
  throw new Error(`${element} is not found`);
}
