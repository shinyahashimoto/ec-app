import { createSelector } from "reselect";

const productSelector = (state) => state.product;
const productsSelector = (state) => state.products;

export const getProduct = createSelector([productSelector], (state) => state);

export const getProducts = createSelector(
  [productsSelector],
  (state) => state.list
);
