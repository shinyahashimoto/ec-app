import { IconButton } from "@material-ui/core";
import React, { useCallback } from "react";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { makeStyles } from "@material-ui/styles";
import { Storage } from "aws-amplify";
import ImagePreview from "./ImagePreview";

const useStyles = makeStyles({
  icon: {
    height: 48,
    width: 48,
  },
});

const ImageArea = (props) => {
  const classes = useStyles();

  const uploadImage = useCallback((event) => {
    const file = event.target.files;
    // let blob = new Blob(file, { type: "image/jpeg" });

    const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const N = 16;
    const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
      .map((n) => S[n % S.length])
      .join("");

    Storage.put(fileName, file, {
      level: "private",
      contentType: file.type,
    })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      {/* <div className="p-grid__list-images">
        {props.images.length > 0 &&
          props.images.map((image) => (
            <ImagePreview
              id={image.id}
              path={image.path}
              key={image.key}
            ></ImagePreview>
          ))}
      </div> */}
      <div className="u-text-right">
        <span>商品画像を登録する</span>
        <IconButton className={classes.icon}>
          <label>
            <AddPhotoAlternateIcon></AddPhotoAlternateIcon>
            <input
              id="image"
              className="u-display-none"
              type="file"
              onChange={(e) => uploadImage(e)}
            />
          </label>
        </IconButton>
      </div>
    </div>
  );
};

export default ImageArea;
