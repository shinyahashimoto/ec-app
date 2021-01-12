import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const buttonStyle = makeStyles({
  button: {
    backgroundColor: "#4dd0e1",
    color: "#000",
    fontSize: 16,
    height: 48,
    marginButton: 10,
    width: 256,
  },
});

const PrimaryButton = (props) => {
  const style = buttonStyle();

  return (
    <Button
      className={style.button}
      variant="contained"
      onClick={() => props.onClick()}
    >
      {props.label}
    </Button>
  );
};

export default PrimaryButton;
