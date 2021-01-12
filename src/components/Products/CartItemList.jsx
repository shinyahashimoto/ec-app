import React from "react";
import { useDispatch } from "react-redux";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { makeStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { useSelector } from "react-redux";
import { getUserId } from "../../reducks/users/selectors";
import { API, graphqlOperation } from "aws-amplify";
import { deleteCart } from "../../graphql/mutations";
import { deleteProductInCart } from "../../reducks/users/opration";

const useStyles = makeStyles((theme) => ({
  list: {
    height: 128,
  },
  image: {
    objectFit: "cover",
    margin: 16,
    height: 96,
    width: 96,
  },
  text: {
    width: "100%",
  },
}));

const CartItemList = (props) => {
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

  // const image = props.product.image[0].path;
  const id = props.product.id;
  const price = props.product.price.toLocaleString();
  const size = props.product.size;

  // const removeItemFromCart = (itemId) => {
  //   const uid = getUserId(selector);
  //   try {
  //     API.graphql(
  //       graphqlOperation(deleteCart, { input: { id: itemId } })
  //     ).then(() => {});
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <>
      <ListItem className={classes.list}>
        <ListItemAvatar>
          <img className={classes.image} alt="商品のTOP画像" />
        </ListItemAvatar>
        <div className={classes.text}>
          <ListItemText
            primary={props.product.name}
            secondary={"サイズ：" + props.product.size}
          />
          <ListItemText primary={"¥" + price} />
        </div>
        <IconButton onClick={() => dispatch(deleteProductInCart(id))}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <Divider />
    </>
  );
};

export default CartItemList;
