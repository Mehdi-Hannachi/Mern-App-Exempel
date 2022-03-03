import React from "react";

const ProductCard = ({ product: { brand, model, price, desc } }) => {
  return (
    <div>
      <h2> Brand : {brand}</h2>
      <h2> Model : {model} </h2>
      <h2> price : {price}</h2>
      <h2> desc : {desc} </h2>
    </div>
  );
};

export default ProductCard;
