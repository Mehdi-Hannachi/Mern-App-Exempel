import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../JS/actions/authActions";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(logout())}>Logout</button>

      <ul>
        <li>Profile </li>

        <Link to="/profile">
          <li> Profile</li>
        </Link>
        <Link to="/productslist">
          <li> All Products</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
