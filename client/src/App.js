import logo from "./logo.svg";
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

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  useEffect(() => {
    dispatch(getAuthUser());
  }, [isAuth]);

  return (
    <div className="App">
      {isAuth ? <button>Logout</button> : <NavBar />}

      <header className="App-header">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
