import {
  createProduct,
  updateProduct,
  deleteProduct as deleteProductAPI,
  createSize,
  updateSize,
  deleteSize,
} from "../../graphql/mutations";
import { listProducts } from "../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { fetchProductsAction, deleteProductAction } from "./action";

export const fetchProducts = () => {
  return async (dispatch) => {
    console.log("DBへ接続");
    API.graphql(graphqlOperation(listProducts)).then((result) => {
      const productList = [];
      const data = result.data.listProducts.items;
      data.map((product) => {
        console.log(product);
        productList.push(product);
      });
      dispatch(fetchProductsAction(productList));
    });
  };
};

export const registerProduct = (
  id,
  name,
  category,
  description,
  price,
  gender,
  sizes
) => {
  return async (dispatch) => {
    const product = {
      // id: id,
      name: name,
      category: category,
      description: description,
      price: parseInt(price, 10),
      gender: gender,
      sizes: sizes,
    };
    console.log(product);
    if (!validateProductData(product)) {
      alert("必須項目を入力してください");
    } else {
      if (id === "new") {
        //新規登録;
        try {
          API.graphql(graphqlOperation(createProduct, { input: product })).then(
            (result) => {
              console.log("CreateProductInput: ", result);
              sizes.map((size) => {
                size.productId = result.data.createProduct.id;
                API.graphql(graphqlOperation(createSize, { input: size }));
              });
              // dispatch(push)
            }
          );
        } catch (e) {
          console.log(e);
          alert("登録が失敗しました。ネットワーク環境をご確認ください");
        }
      } else {
        // 更新登録
        try {
          console.log("商品情報の更新登録処理の開始 ");
          product.id = id;
          API.graphql(graphqlOperation(updateProduct, { input: product }));
          console.log("UpdateProduct: ", product);
          // dispatch(push("/"));
        } catch (e) {
          console.log(e);
          alert("登録が失敗しました。ネットワーク環境をご確認ください");
        }
      }
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    try {
      console.log("商品削除処理の開始");
      API.graphql(graphqlOperation(deleteProductAPI, { input: { id: id } }));
      const prevProducts = getState().products.list;
      const nextProducts = prevProducts.filter((product) => product.id !== id);
      dispatch(deleteProductAction(nextProducts));
    } catch (e) {
      console.log(e);
      alert("登録が失敗しました。ネットワーク環境をご確認ください");
    }
  };
};

export const orderProduct = () => {
  return async (dispatch) => {
    //
  };
};

const validateProductData = (product) => {
  if (
    product.name === "" ||
    product.category === "" ||
    product.description === "" ||
    product.price === 0 ||
    product.gender === ""
  ) {
    return false;
  } else {
    return true;
  }
};
