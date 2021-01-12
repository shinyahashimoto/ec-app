import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsSignedIn } from "../reducks/users/selectors";
import { listenAuthState } from "../reducks/users/opration";

const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSingedIn = getIsSignedIn(selector);

  useEffect(() => {
    if (!isSingedIn) {
      dispatch(listenAuthState());
    }
  });

  if (!isSingedIn) {
    return <></>;
  } else {
    return children;
  }
};

export default Auth;
