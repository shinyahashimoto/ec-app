import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CartItemList from "../components/Products/CartItemList";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { PrimaryButton, TextDetail } from "../components/UIkit";
import { order } from "../reducks/users/opration";
import { getProductsInCart } from "../reducks/users/selectors";
import { orderProduct } from "../reducks/products/operation";

const useStyles = makeStyles((theme) => ({
  detailBox: {
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: 320,
    },
    [theme.breakpoints.up("md")]: {
      width: 512,
    },
  },
  orderBox: {
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: 4,
    boxShadow: "0 4px 2px 2px rgba(0,0,0,0.2)",
    height: 256,
    margin: "24px auto 16px auto",
    padding: 16,
    width: 288,
  },
}));

const OrderConfirm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const productsInCart = getProductsInCart(selector);

  const subtotal = useMemo(() => {
    return productsInCart.reduce((sum, product) => (sum += product.price), 0);
  }, [productsInCart]);

  const shippingFee = subtotal >= 10000 ? 0 : 210;

  const tax = (subtotal + shippingFee) * 0.1;

  const total = subtotal + shippingFee + tax;

  return (
    <section className="c-section-wrapin">
      <h2 className="u-text__headline">注文の確認</h2>
      <div className="p-grid__row">
        <div className={classes.detailBox}>
          <List>
            {productsInCart.length > 0 &&
              productsInCart.map((product) => (
                <CartItemList product={product}></CartItemList>
              ))}
          </List>
        </div>
        <div className={classes.orderBox}>
          <TextDetail
            label={"商品合計"}
            value={"¥" + subtotal.toLocaleString()}
          ></TextDetail>
          <TextDetail
            label={"消費税"}
            value={"¥" + tax.toLocaleString()}
          ></TextDetail>
          <TextDetail
            label={"送料"}
            value={"¥" + shippingFee.toLocaleString()}
          ></TextDetail>
          <Divider />
          <TextDetail label={"合計(税込)"} value={"¥" + total}></TextDetail>
          <PrimaryButton
            label={"注文を確定する"}
            onClick={() => dispatch(order())}
          />
        </div>
      </div>
    </section>
  );
};

export default OrderConfirm;
