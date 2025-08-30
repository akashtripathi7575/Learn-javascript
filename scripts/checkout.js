import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/backend-practice.js';
//import '../data/cart-class.js';

async function loadPage() {
  

  await loadProductsFetch();

  await new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });
  renderOrderSummary();
  renderPaymentSummary();

}
loadPage();

//await lets us wait for a promise to resolve inside an async function before going to the next step
/*
Promise.all([
  loadProductsFetch(), // returns a promise directly
  new Promise((resolve) => {
    loadCart(() => {
      resolve("value2");
    });
  })

]).then((values) => {
    console.log(values);
 
});
*/
/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve("value1");
  });
  // resolve lets us control when to move to the next step
  // whatever we give to resolve it will save inside the value variable in the next then
})
  .then((value) => {
    console.log(value);
    return new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  })
  .then(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
}); */

// promises are the better way to handle async code instead of callback hell

// async await is the better way to handle promises

// fetch is the better way to handle http requests instead of XHR
// fetch always returns a promise
// async await is the shortcut for promises and lets us write async code like a normal code(sync code)
