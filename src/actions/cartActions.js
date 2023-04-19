import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();
  let productAlreadyInCart = false;

  //  counting cart items & making it true in cart
  cartItems.forEach((cp) => {
    if (cp.id === product.id) {
      cp.count += 1;
      productAlreadyInCart = true;
    }
  });

  // pushing in cart
  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }

  //  getting item from local storage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};

//  implementing remove item from cart
export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().filter((a) => a.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};
