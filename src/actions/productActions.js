// these actions are passed to reducers for execution

import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
} from "./types";

//  action to fetch products from json file in public folder
export const fetchProducts = () => (dispatch) => {
  fetch("https://127.0.0.1:8000/products")
    .then((res) => res.json())
    .catch((err) =>
      fetch("db.json")
        .then((res) => res.json())
        .then((data) => data.products)
    )
    .then((data) => {
      dispatch({ type: FETCH_PRODUCTS, payload: data });
    });
};

// action filters the products from size X XL XXXL S M
export const filterProducts = (products, size) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter(
              (x) => x.availableSizes.indexOf(size.toUpperCase()) >= 0
            ),
    },
  });
};

// sorts the product on price basis...low to hight & hight to low
export const sortProducts = (items, sort) => (dispatch) => {
  const products = items.slice();
  if (sort !== "") {
    products.sort((a, b) =>
      sort === "lowestprice"
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? 1
        : -1
    );
  } else {
    products.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: products,
    },
  });
};
