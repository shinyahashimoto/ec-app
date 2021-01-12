import initialState from "../store/initialState";

export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const createProduct = (productState) => {
  return {
    type: CREATE_PRODUCT,
    payload: {
      id: productState.id,
      name: productState.name,
      category: productState.category,
      description: productState.description,
      price: productState.price,
      gender: productState.gender,
      sizes: productState.sizes,
    },
  };
};

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const fetchProductsAction = (products) => {
  return { type: FETCH_PRODUCTS, payload: products };
};

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const deleteProductAction = (products) => {
  return { type: DELETE_PRODUCT, payload: products };
};

export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const addProductAction = (cart) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: cart,
  };
};
