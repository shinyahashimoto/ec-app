import React from "react";
import { Route, Switch } from "react-router";
import {
  SignIn,
  ProductList,
  SignUp,
  Reset,
  ProductEdit,
  ProductDetail,
  CartList,
  OrderConfirm,
} from "./templates";
import Auth from "./templates/Auth";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin/reset" component={Reset} />
      {/* <Route path="post/:id" component={Post} /> */}
      {/* ()をつけることによって（）内の文字列が無くてもヒットしてくれる */}
      <Auth>
        <Route exact path="(/)?" component={ProductList} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route path="/product/edit(/:id)?" component={ProductEdit} />
        <Route path="/product/edit(/:id)?" component={ProductEdit} />
        <Route exact path="/cart" component={CartList} />
        <Route exact path="/orderConfirm" component={OrderConfirm} />
      </Auth>
    </Switch>
  );
};

export default Router;
