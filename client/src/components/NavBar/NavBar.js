import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../JS/actions/authActions";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default NavBar;
