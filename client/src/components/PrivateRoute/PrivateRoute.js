import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return isAuth ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;