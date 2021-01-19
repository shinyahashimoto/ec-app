import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/Products/ProductCard";
import { fetchProducts } from "../reducks/products/operation";
import { getProducts } from "../reducks/products/selector";
import { Storage } from "aws-amplify";

const ProductList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const products = getProducts(selector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section className="c-section-wrapin">
      <div className="p-grid__row">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.imagePath}
              price={product.price}
              name={product.name}
            />
          ))}
      </div>
    </section>
  );
};

export default ProductList;
