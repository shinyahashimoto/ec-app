import React, { useEffect } from "react";
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
import { Storage } from "aws-amplify";
import NoImage from "../../assets/img/src/no_image.png";

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

  const id = props.product.id;
  const price = props.product.price.toLocaleString();
  const size = props.product.size;

  const imagePath =
    props.product.imagePath != null ? props.product.imagePath : NoImage;

  return (
    <>
      <ListItem className={classes.list}>
        <ListItemAvatar>
          <img className={classes.image} alt="商品のTOP画像" src={imagePath} />
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
