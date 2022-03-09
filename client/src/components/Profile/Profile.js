import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from "../../JS/actions/authActions";
import ProductCard from "../ProductsList/ProductCard";
import "./profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const user = useSelector((state) => state.authReducer.user);
  const products = useSelector((state) => state.authReducer.products);

  useEffect(() => {
    dispatch(getAuthUser());
  }, [dispatch]);

  return loading ? (
    <h1 style={{ marginTop: "100px" }}>Please wait ... </h1>
  ) : (
    <div className="user-profile">
      <section className="user-details">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6a6KfKK66Jy1eCuDau7yp2rb5dIfGvl45g&usqp=CAU"
          alt=" profile avatar"
        />

        <h1>
          {user.firstName} {user.lastName}
        </h1>

        <span>Email : {user.email}</span>
        <span>Adress : {user.adress}</span>
        <span>Phone Number : {user.phoneNumber}</span>
      </section>

      <section className="user-products">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </section>
    </div>
  );
};

export default Profile;
