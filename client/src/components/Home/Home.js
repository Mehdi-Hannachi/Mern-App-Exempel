import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  //   const loading = useSelector((state) => state.authReducer.loading);
  // useEffect(() => {
  //   if (isAuth === false) {
  //     navigate("/signin");
  //   }
  // }, [isAuth]);

  return (
    <div>
      <h1> Home </h1>
    </div>
  );
};

export default Home;
