import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../JS/actions/userActions";
import ProductCard from "../ProductsList/ProductCard";
import "./profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);
  const products = useSelector((state) => state.userReducer.products);

  useEffect(() => {
    dispatch(getUserById());
  }, []);

  return loading ? (
    <h1 style={{ marginTop: "100px" }}>Please wait ... </h1>
  ) : (
    <div className="user-profile">
      <section className="user-details">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6a6KfKK66Jy1eCuDau7yp2rb5dIfGvl45g&usqp=CAU"
          alt="photo de profile"
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
