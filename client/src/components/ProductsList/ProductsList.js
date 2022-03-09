import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../JS/actions/productsActions";
import ProductForm from "../ProductForm/ProductForm";
import ProductCard from "./ProductCard";
import "./productslist.css";

const ProductsList = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productsReducer.products);
  const loading = useSelector((state) => state.productsReducer.loading);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return loading ? (
    <h1>Please wait ... </h1>
  ) : (
    <div className="products">
      <ProductForm edit={false} />

      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductsList;
