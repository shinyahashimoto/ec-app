import * as Actions from "./action";
import initialState from "../store/initialState";

export const ProductsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case Actions.CREATE_PRODUCT:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.FETCH_PRODUCTS:
      return {
        ...state,
        list: [...action.payload],
      };
    case Actions.DELETE_PRODUCT:
      return {
        ...state,
        list: [...action.payload],
      };
    case Actions.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
};
