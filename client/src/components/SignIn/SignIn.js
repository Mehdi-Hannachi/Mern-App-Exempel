import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../JS/actions/authActions";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

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
