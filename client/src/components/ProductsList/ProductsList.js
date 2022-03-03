import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../JS/actions/productsActions";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const products = useSelector((state) => state.productsReducer.products);
  const loading = useSelector((state) => state.productsReducer.loading);

  return (
    <div>
      ProductsList
      {products.map((product) => <ProductCard product={product} />)}
    </div>
  );
};

export default ProductsList;
