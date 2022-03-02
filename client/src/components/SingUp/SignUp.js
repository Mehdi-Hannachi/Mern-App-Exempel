import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../JS/actions/authActions";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [adress, setAdress] = useState("");

  const register = (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      adress,
    };

    dispatch(signUp(newUser));

    setEmail("");
    setFirstName("");
    setlastName("");
    setAdress("");
    setPassword("");
    setPhoneNumber("");

    navigate("/signin");
  };

  return (
    <div>
      <h1>SignUp</h1>

      <form>
        <input
          type="text"
          placeholder="First Name ... "
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <input
          type="text"
          placeholder="Last Name ..."
          onChange={(e) => setlastName(e.target.value)}
          value={lastName}
        />
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
        <input
          type="text"
          placeholder="Phone Number ..."
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
        />
        <input
          type="text"
          placeholder="Adress ..."
          onChange={(e) => setAdress(e.target.value)}
          value={adress}
        />

        <button onClick={(e) => register(e)}>SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
