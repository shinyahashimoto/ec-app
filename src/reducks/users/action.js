export const SIGN_IN = 'SIGN_IN';
export const signInAction = (userState) => {
    return {
        type: SIGN_IN,
        payload: {
            isSignedIn: true,
            uid: userState.uid,
            username: userState.username,
            role: userState.role,
            cart: userState.cart
        }
    }
}

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
    return{
        type: SIGN_OUT,
        payload:{
            uid: "",
            username: "",
            role:"",
            isSignedIn: false,
        }
    }
}

export const FETCH_PRODUCTS_IN_CART = "FETCH_PRODUCTS_IN_CART"
export const fetchProductsInCartAction = (products) => {
    return {
        type: FETCH_PRODUCTS_IN_CART,
        payload: products
    }
}

export const DELETE_PRODUCT_IN_CART = "DELETE_PRODUCT_IN_CART"
export const deleteProductInCartAction = (cart) => {
    return {
        type: DELETE_PRODUCT_IN_CART,
        payload: cart
    }
}