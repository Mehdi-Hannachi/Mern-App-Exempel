import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { signIn } from "../../JS/actions/authActions";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const login = (e) => {
    e.preventDefault();

    dispatch(signIn({ email, password }));

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1> Sign In </h1>

      <form>
        <input
          type="text"
          placeholder="Email ..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password ...."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={(e) => login(e)}>SignIn</button>
      </form>
    </div>
  );
};

export default SignIn;
