import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "@material-ui/core/List";
import { getProductsInCart } from "../reducks/users/selectors";
import CartItemList from "../components/Products/CartItemList";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { PrimaryButton } from "../components/UIkit";
import { push } from "connected-react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    maxWidth: 512,
    width: "100%",
  },
}));

const CartList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const selector = useSelector((state) => state);
  const productsInCart = getProductsInCart(selector);

  const goToOrder = useCallback(() => {
    dispatch(push("/orderConfirm"));
  }, []);

  const backToTop = useCallback(() => {
    dispatch(push("/"));
  }, []);

  return (
    <section className="c-section-wrapin">
      <h2 className="u-text__headline">ショッピングカート</h2>
      <List className={classes.root}>
        {productsInCart.length > 0 &&
          productsInCart.map((product) => (
            <CartItemList product={product} key={product.cartId} />
          ))}
      </List>
      <div className="module-spacer--medium" />
      <div className="p-grid__column">
        <PrimaryButton label={"レジへ進む"} onClick={goToOrder} />
        <div className="module-spacer--extra-extra-small" />
        <PrimaryButton label={"ショッピングを続ける"} onClick={backToTop} />
      </div>
    </section>
  );
};

export default CartList;
