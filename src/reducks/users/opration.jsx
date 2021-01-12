import {
  signInAction,
  signOutAction,
  fetchProductsInCartAction,
  deleteProductInCartAction,
} from "./action";
import { push } from "connected-react-router";
// import { dispatch } from "react";
import { auth } from "../../firebase/index";
import { API, graphqlOperation } from "aws-amplify";
import { createUser, createCart, deleteCart } from "../../graphql/mutations";
import { getUser, listCarts } from "../../graphql/queries";
import { useSelector } from "react-redux";
import { getUserId } from "./selectors";

export const listenAuthState = () => {
  return async (dispatch) => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;

        try {
          API.graphql(graphqlOperation(getUser, { id: uid })).then(
            (userResult) => {
              API.graphql(graphqlOperation(listCarts, { userId: uid })).then(
                (cartResult) => {
                  console.log(cartResult.data.listCarts.items);
                  dispatch(
                    signInAction({
                      isSingIn: true,
                      role: userResult.data.getUser.role,
                      username: userResult.data.getUser.name,
                      uid: userResult.data.getUser.id,
                      cart: cartResult.data.listCarts.items,
                    })
                  );
                }
              );
            }
          );
        } catch (e) {
          console.log(e);
        }
      } else {
        dispatch(push("/signin"));
      }
    });
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    if (email === "" || password === "") {
      alert("該当項目が未入力です。");
      return false;
    }
    auth.signInWithEmailAndPassword(email, password).then((result) => {
      const user = result.user;

      if (user) {
        const uid = user.uid;

        try {
          API.graphql(graphqlOperation(getUser, { id: uid })).then((result) => {
            dispatch(
              signInAction({
                isSingIn: true,
                role: result.data.getUser.role,
                username: result.data.getUser.name,
                uid: result.data.getUser.id,
              })
            );
            dispatch(push("/"));
          });
        } catch (e) {
          console.log(e);
        }
      } else {
        alert("登録されているメールアドレスとパスワードが異なります。");
      }
    });
  };
};

export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    // validation
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("必須項目が未入力です。");
      return false;
    }

    if (password !== confirmPassword) {
      alert("パスワードが一致しません");
      return false;
    }

    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;

        if (user) {
          const uid = user.uid;

          const CreateUserInput = {
            id: uid,
            name: username,
            email: email,
            password: password,
            role: "customer",
          };

          // 登録処理
          try {
            API.graphql(
              graphqlOperation(createUser, { input: CreateUserInput })
            );
            console.log("CreateUserInput: ", CreateUserInput);
            dispatch(push("/"));
          } catch (e) {
            console.log(e);
          }
        }
      });
  };
};

export const signOut = () => {
  return async (dispatch) => {
    auth.signOut().then(() => {
      dispatch(signOutAction());
      dispatch(push("/signin"));
    });
  };
};

export const resetPassword = (email) => {
  return async (dispatch) => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        alert(
          "入力したメールアドレスにリセットパスワード用のメールをお送りしました。"
        );
        dispatch(push("/siginin"));
      })
      .catch(() => {
        alert("パスワードリセットに失敗しました。通信状態を確認してください。");
      });
  };
};

export const addProductToCart = (addedProduct) => {
  return async (dispatch, getState) => {
    console.log(getState());
    const uid = getState().users.uid;
    const cart = getState().users.cart;
    console.log("追加する商品情報");
    console.log(addedProduct);

    try {
      API.graphql(graphqlOperation(createCart, { input: addedProduct })).then(
        (result) => {
          console.log(result);
          const data = result.data.createCart;
          const cartId = data.id;
          addedProduct.cartId = cartId;
          cart.push(addedProduct);

          dispatch(push("/"));
        }
      );
    } catch (e) {
      console.log(e);
      alert("処理に失敗しました。ネットワーク環境をご確認ください。");
    }
  };
};

export const fetchProductsIncart = (products) => {
  return async (dispatch) => {
    dispatch(fetchProductsInCartAction(products));
  };
};

export const deleteProductInCart = (itemId) => {
  return async (dispatch, getState) => {
    console.log("カート削除処理");
    console.log(itemId);
    try {
      API.graphql(graphqlOperation(deleteCart, { input: { id: itemId } })).then(
        () => {
          const cart = getState().users.cart;
          console.log(getState());
          const nextCart = cart.filter((product) => product.id !== itemId);
          dispatch(deleteProductInCartAction(nextCart));
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
};

export const order = (cart) => {
  return async (dispatch, getState) => {
    const uid = getState().users.uid;
  };
};
