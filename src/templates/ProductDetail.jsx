import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, listSizes } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { makeStyles } from "@material-ui/styles";
import HTMLReactPerser from "html-react-parser";
import ImageSwiper from "../components/Products/ImageSwiper";
import SizeTable from "../components/Products/SizeTable";
import { propStyle } from "aws-amplify-react";
import { addProductToCart } from "../reducks/users/opration";

const useStyles = makeStyles((theme) => ({
  sliderBox: {
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto 24px auto",
      height: 320,
      width: 320,
    },
    [theme.breakpoints.up("sm")]: {
      margin: "0 auto",
      height: 400,
      width: 400,
    },
  },
  detail: {
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto 16px auto",
      height: 320,
      width: 320,
    },
    [theme.breakpoints.up("sm")]: {
      margin: "0 auto",
      height: "auto",
      width: 400,
    },
  },
  price: {
    fontSize: 36,
  },
}));

//???
const returnCodeToBr = (text) => {
  if (text === "") {
    return text;
  } else {
    return HTMLReactPerser(text.replace(/\r?\n/g, "<br>"));
  }
};

const ProductDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const path = selector.router.location.pathname;
  const id = path.split("/product/")[1];

  const [product, setProduct] = useState(null);

  useEffect(() => {
    try {
      // 商品情報を取得
      API.graphql(graphqlOperation(getProduct, { id: id })).then((result) => {
        const productData = result.data.getProduct;
        // 取得した商品情報に紐づくサイズ情報を取得
        console.log("商品詳細ページで表示される商品情報");
        console.log(productData);
        API.graphql(
          graphqlOperation(listSizes, {
            filter: { productId: { eq: id } },
          })
        ).then((result) => {
          const sizeData = result.data.listSizes.items;
          productData.sizes = sizeData;
          setProduct(productData);
          console.log("商品情報に紐づくサイズ情報");
          console.log(sizeData);
        });
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const addProduct = useCallback((selectedSize) => {
    const date = new Date();
    //todo : 数字1桁の扱い
    const added0Date =
      String(date.getDate()).length === 1
        ? "0" + date.getDate()
        : date.getDate();
    const formatDate =
      date.getFullYear() +
      "-" +
      date.getMonth() +
      1 +
      "-" +
      added0Date +
      "T" +
      date.getHours() +
      ":" +
      // date.getMinutes() +
      10 +
      ":" +
      10 +
      // date.getSeconds() +
      "Z";
    // console.log("現在時刻は" + time);
    dispatch(
      addProductToCart({
        added_at: formatDate,
        description: product.description,
        gender: product.gender,
        images: product.Images,
        name: product.name,
        price: product.price,
        productId: product.id,
        quantity: 1,
        size: selectedSize,
      })
    );
  });

  return (
    <section className="c-section-wrapin">
      {product && (
        <div className="p-grid__row">
          <div className={classes.sliderBox}>
            {/* <ImageSwiper images={product.images} /> */}
          </div>
          <div className={classes.detail}>
            <h2 className="u-text__headline">{product.name}</h2>
            <p className={classes.price}>¥{product.price.toLocaleString()}</p>
            <div className="module-spacer--small"></div>
            <SizeTable addProduct={addProduct} sizes={product.sizes} />
            <div className="module-spacer--small"></div>
            <p>{returnCodeToBr(product.description)}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetail;
