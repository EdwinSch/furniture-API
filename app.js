/* ---- TARGETS && INITIALIZERS ---- */
const url = "https://course-api.com/javascript-store-products";
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
  } catch (error) {
    productsDOM.innerHTML = `<div class="error">something went wrong :(</div>`;
    // console.log(error);
  }
};

// Invoke Fetch products
fetchProducts();

//-- Get DOM element function
function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  }
  throw new Error(`${element} is not found`);
}
