import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SingUp/SignUp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from "./JS/actions/authActions";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import GuestNav from "./components/NavBar/GuestNav";
import ProductsList from "./components/ProductsList/ProductsList";
import Profile from "./components/Profile/Profile";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  useEffect(() => {
    dispatch(getAuthUser());
  }, [isAuth]);

  return (
    <div className="App">
      {isAuth ? <NavBar /> : <GuestNav />}

      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/productslist"
          element={
            <PrivateRoute>
              <ProductsList />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
