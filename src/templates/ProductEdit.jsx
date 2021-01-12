import React, { useCallback, useState, useEffect } from "react";
import { TextInput, SelectBox, PrimaryButton } from "../components/UIkit";
import { useDispatch } from "react-redux";
import { registerProduct } from "../reducks/products/operation";
import ImageArea from "../components/Products/ImageArea";
import { API, graphqlOperation } from "aws-amplify";
import { getProduct } from "../graphql/queries";
import SetSizeArea from "../components/Products/SetSizeArea";

const ProductEdit = () => {
  const dispatch = useDispatch();
  let id = window.location.pathname.split("/product/edit")[1];
  if (id !== "") {
    id = id.split("/")[1];
  }

  const [name, setName] = useState(""),
    [description, setDescription] = useState(""),
    [category, setCategory] = useState(""),
    [gender, setGender] = useState(""),
    [images, setImages] = useState([]),
    [price, setPrice] = useState(""),
    [sizes, setSizes] = useState([]);
  const inputName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );

  const inputCategory = useCallback(
    (event) => {
      setCategory(event.target.value);
    },
    [setCategory]
  );

  const inputDescription = useCallback(
    (event) => {
      setDescription(event.target.value);
    },
    [setDescription]
  );

  const inputPrice = useCallback(
    (event) => {
      setPrice(event.target.value);
    },
    [setPrice]
  );
  const inputGender = useCallback(
    (event) => {
      setGender(event.target.value);
    },
    [setGender]
  );

  const categories = [
    { id: "tops", name: "トップス" },
    { id: "shirts", name: "シャツ" },
    { id: "pants", name: "パンツ" },
  ];
  const genders = [
    { id: "all", name: "全て" },
    { id: "male", name: "メンズ" },
    { id: "female", name: "レディース" },
  ];

  useEffect(() => {
    if (id !== "new") {
      try {
        API.graphql(graphqlOperation(getProduct, { id: id })).then((result) => {
          console.log(result);
          const data = result.data.getProduct;
          setName(data.name);
          setGender(data.gender);
          setCategory(data.category);
          setDescription(data.description);
          setPrice(data.price);
        });
        // dispatch(push("/"));
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  return (
    <section>
      <h2 className="u-text__headline u-text-center">商品の登録・編集</h2>
      <div className="c-section-container">
        <ImageArea value={images} setImages={setImages} />
        <TextInput
          fullWidth={true}
          label={"商品名"}
          multiline={false}
          required={true}
          onChange={inputName}
          rows={1}
          value={name}
          type={"text"}
        ></TextInput>

        <SelectBox
          label={"カテゴリー"}
          required={true}
          options={categories}
          select={setCategory}
          value={category}
        ></SelectBox>
        <TextInput
          fullWidth={true}
          label={"商品説明"}
          multiline={true}
          required={true}
          onChange={inputDescription}
          rows={5}
          value={description}
          type={"text"}
        ></TextInput>
        <TextInput
          fullWidth={true}
          label={"価格"}
          multiline={false}
          required={true}
          onChange={inputPrice}
          rows={1}
          value={price}
          type={"number"}
        ></TextInput>
        <SelectBox
          label={"性別"}
          required={true}
          options={genders}
          select={setGender}
          value={gender}
        ></SelectBox>

        <SetSizeArea sizes={sizes} setSizes={setSizes} />
        <div className="center">
          <PrimaryButton
            label={"商品情報を登録"}
            onClick={() =>
              dispatch(
                registerProduct(
                  id,
                  name,
                  category,
                  description,
                  price,
                  gender,
                  sizes
                )
              )
            }
          ></PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default ProductEdit;
