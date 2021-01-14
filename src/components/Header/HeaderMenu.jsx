import React, { useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import { Badge } from "@material-ui/core";
// import {} from "../../reducks/users/operations";
import { useDispatch, useSelector } from "react-redux";
// import { getUserId } from "../../reducks/users/selectors";
import { getUserId, getProductsInCart } from "../../reducks/users/selectors";
import { push } from "connected-react-router";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MenuIcon from "@material-ui/icons/Menu";
import { API, graphqlOperation } from "aws-amplify";
import { onCreateCart } from "../../graphql/subscriptions";
import { fetchProductsIncart } from "../../reducks/users/opration";

const HeaderMenu = (props) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const userId = getUserId(selector);
  let productsInCart = getProductsInCart(selector);
  console.log(productsInCart);
  let productCount =
    typeof productsInCart === "undefined" ? 0 : productsInCart.length;

  console.log("productsInCart");
  console.log(productsInCart);

  useEffect(() => {
    API.graphql(graphqlOperation(onCreateCart)).subscribe({
      next: ({ provider, value }) => {
        console.log("subsprictionのあたいは");
        console.log({ provider, value });
      },
    });
    // dispatch(fetchProductsIncart(products))
  }, []);

  return (
    <>
      <IconButton onClick={() => dispatch(push("/cart"))}>
        <Badge badgeContent={productCount} color="secondary">
          {/* <Badge> */}
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <IconButton>
        <FavoriteBorderIcon />
      </IconButton>
      <IconButton
        aria-label="Menu Items"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={(e) => props.handleDrawerToggle(e, true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};
export default HeaderMenu;
