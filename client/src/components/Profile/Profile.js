import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../JS/actions/userActions";
import ProductCard from "../ProductsList/ProductCard";

const Profile = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);
  const products = useSelector((state) => state.userReducer.products);

  useEffect(() => {
    dispatch(getUserById());
  }, []);

  return loading ? (
    <h1>Please wait ... </h1>
  ) : (
    <div>
      Profile
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Profile;
